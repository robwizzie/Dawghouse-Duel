/* ══════════════════════════════════════════════════════════════
   Dawg House Duel — pairing relay

   A dumb pipe. The duel screen stays the only authority on the
   game; this just carries its state out to the host's phone and
   carries the host's button presses back.

   One Durable Object per room code, so every room is its own
   isolated little server that exists only while someone is in it.

     wss://<worker>/room/WXYZ?role=duel     the screen running the game
     wss://<worker>/room/WXYZ?role=host     someone marking spoken answers
     wss://<worker>/room/WXYZ?role=player   the other player, on their own device

   A frame may carry `to: 'host' | 'player'`, and then only peers of that
   role receive it. That is not decoration: the host frame contains the
   answer, and a player must never be sent it.
   ══════════════════════════════════════════════════════════════ */

const MAX_MESSAGE = 256 * 1024;   // a state frame carries an image URL, not an image
const MAX_PEERS   = 8;            // duel screen, host, and a few spectating tabs

export class Room {
  constructor(state) {
    this.state = state;
    this.peers = new Map();       // ws -> role
    this.lastFor = new Map();     // audience -> last frame, so a latecomer catches up
  }

  async fetch(request) {
    if (request.headers.get('Upgrade') !== 'websocket') {
      return new Response('expected a websocket', { status: 426 });
    }
    if (this.peers.size >= MAX_PEERS) {
      return new Response('room full', { status: 429 });
    }
    const asked = new URL(request.url).searchParams.get('role');
    const role = asked === 'duel' || asked === 'player' ? asked : 'host';
    const { 0: client, 1: server } = new WebSocketPair();
    this.accept(server, role);
    return new Response(null, { status: 101, webSocket: client });
  }

  accept(ws, role) {
    ws.accept();
    this.peers.set(ws, role);

    // Catch the newcomer up before anything else happens.
    if (role !== 'duel') {
      const caught = this.lastFor.get(role) || this.lastFor.get('all');
      if (caught) this.post(ws, caught);
    }
    this.announce();

    ws.addEventListener('message', ev => {
      const raw = typeof ev.data === 'string' ? ev.data : null;
      if (!raw || raw.length > MAX_MESSAGE) return;

      let msg;
      try { msg = JSON.parse(raw); } catch (e) { return; }
      if (!msg || typeof msg !== 'object') return;

      // Only the duel screen's own frames are worth replaying to latecomers.
      const audience = msg.to === 'host' || msg.to === 'player' ? msg.to : 'all';
      if (msg.from === 'duel') this.lastFor.set(audience, raw);

      for (const [peer, peerRole] of this.peers) {
        if (peer === ws) continue;
        if (audience !== 'all' && peerRole !== audience) continue;
        this.post(peer, raw);
      }
    });

    const drop = () => {
      this.peers.delete(ws);
      if (role === 'duel') this.lastFor.clear();   // don't serve a stale board
      this.announce();
    };
    ws.addEventListener('close', drop);
    ws.addEventListener('error', drop);
  }

  post(ws, data) {
    try { ws.send(data); } catch (e) { this.peers.delete(ws); }
  }

  /* Let both ends show whether the other one is actually there. */
  announce() {
    const roles = [...this.peers.values()];
    const msg = JSON.stringify({
      from: 'relay',
      peers: roles.length,
      duel: roles.includes('duel'),
      hosts: roles.filter(r => r === 'host').length,
      players: roles.filter(r => r === 'player').length
    });
    for (const ws of this.peers.keys()) this.post(ws, msg);
  }
}

/* ══════════════════════════════════════════════════════════════
   Deck stats

   Plays and votes have to be counted atomically, so they live in a
   Durable Object keyed on the deck code rather than in R2. One object
   per deck, holding three integers.

   A vote is one per browser, enforced by the client remembering what
   it sent; the server just applies the delta. That is the right trade
   for a party game — the alternative is accounts.
   ══════════════════════════════════════════════════════════════ */
export class DeckStats {
  constructor(state) {
    this.state = state;
  }

  async fetch(request) {
    const url = new URL(request.url);
    const action = url.searchParams.get('do');
    const store = this.state.storage;

    if (request.method === 'GET' || !action) {
      const got = await store.get(['plays', 'up', 'down']);
      return Response.json({
        plays: got.get('plays') || 0,
        up: got.get('up') || 0,
        down: got.get('down') || 0
      });
    }

    if (action === 'played') {
      const n = ((await store.get('plays')) || 0) + 1;
      await store.put('plays', n);
      return Response.json({ plays: n });
    }

    if (action === 'vote') {
      /* `up` and `down` move together so a browser changing its mind
         sends -1/+1 in one request rather than two that can half-fail. */
      const du = parseInt(url.searchParams.get('up') || '0', 10);
      const dd = parseInt(url.searchParams.get('down') || '0', 10);
      if (!Number.isFinite(du) || !Number.isFinite(dd) ||
          Math.abs(du) > 1 || Math.abs(dd) > 1) {
        return Response.json({ error: 'bad vote' }, { status: 400 });
      }
      const got = await store.get(['up', 'down']);
      const up = Math.max(0, (got.get('up') || 0) + du);
      const down = Math.max(0, (got.get('down') || 0) + dd);
      await store.put({ up: up, down: down });
      return Response.json({ up: up, down: down });
    }

    return Response.json({ error: 'unknown action' }, { status: 400 });
  }
}

function statsStub(env, code) {
  return env.STATS.get(env.STATS.idFromName(code.toUpperCase()));
}

async function deckStats(env, code, action, params) {
  if (!env.STATS) return json({ plays: 0, up: 0, down: 0 });
  const qs = new URLSearchParams(params || {});
  if (action) qs.set('do', action);
  const res = await statsStub(env, code).fetch(
    'https://stats/?' + qs.toString(),
    { method: action ? 'POST' : 'GET' }
  );
  const body = await res.json();

  /* Keep the gallery's ordering in step with the counters it sorts on.
     Fire-and-forget: a deck that misses one play is not worth failing
     the request over. */
  if (res.ok && action === 'played') await indexBump(env, code, { plays: 1 });
  if (res.ok && action === 'vote') {
    await indexBump(env, code, {
      up: parseInt((params && params.up) || '0', 10) || 0,
      down: parseInt((params && params.down) || '0', 10) || 0
    });
  }

  return json(body, res.status);
}

/* The browsable list. Public decks only — an unlisted deck was never
   written into the index in the first place. */
async function listDecks(request, env) {
  const stub = indexStub(env);
  if (!stub) return json({ decks: [], total: 0, page: 1, pages: 1 });
  const url = new URL(request.url);
  const qs = new URLSearchParams({
    do: 'list',
    q: url.searchParams.get('q') || '',
    sort: url.searchParams.get('sort') || 'popular',
    page: url.searchParams.get('page') || '1',
    per: url.searchParams.get('per') || '12'
  });
  const res = await stub.fetch('https://index/?' + qs.toString());
  const body = await res.json();
  return new Response(JSON.stringify(body), {
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, max-age=30',
      ...CORS
    }
  });
}

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
  'Access-Control-Allow-Headers': 'content-type,authorization',
  'Access-Control-Max-Age': '86400'
};

/* ── the public gallery ─────────────────────────────────────
   One object holding a row per listed deck, so decks can be browsed,
   searched and ordered without anybody having to be told a code.

   It has to be one object rather than a file in the bucket: publishes
   arrive concurrently, and read-modify-write on a shared JSON blob
   loses decks. A Durable Object serialises its own writes, which is
   exactly the property needed here.

   Unlisted decks never reach this. That is the whole difference
   between unlisted and public — not a flag checked at read time, but
   never being written down anywhere that can be browsed.
   ══════════════════════════════════════════════════════════════ */
/* Flags needed before a deck drops out of the gallery on its own. Low
   enough to react without anyone watching, high enough that one person
   with a grudge cannot bury a deck. */
const REPORTS_TO_HIDE = 3;

export class DeckIndex {
  constructor(state) {
    this.state = state;
    this.ready = false;
  }

  init() {
    if (this.ready) return;
    this.state.storage.sql.exec(
      'CREATE TABLE IF NOT EXISTS decks (' +
        'code TEXT PRIMARY KEY, name TEXT, blurb TEXT, items INTEGER, ' +
        'at INTEGER, updated INTEGER, txt INTEGER, cover TEXT, ' +
        'plays INTEGER DEFAULT 0, up INTEGER DEFAULT 0, down INTEGER DEFAULT 0, ' +
        'reports INTEGER DEFAULT 0, hidden INTEGER DEFAULT 0)'
    );
    /* Older rows predate these two columns. */
    for (const col of ['reports INTEGER DEFAULT 0', 'hidden INTEGER DEFAULT 0']) {
      try { this.state.storage.sql.exec('ALTER TABLE decks ADD COLUMN ' + col); } catch (e) {}
    }
    this.ready = true;
  }

  async fetch(request) {
    this.init();
    const url = new URL(request.url);
    const action = url.searchParams.get('do');
    const sql = this.state.storage.sql;

    if (action === 'put') {
      const d = await request.json();
      /* Counters live on their own row-wise updates, so an edit must not
         reset them to zero. */
      sql.exec(
        'INSERT INTO decks (code,name,blurb,items,at,updated,txt,cover) ' +
        'VALUES (?,?,?,?,?,?,?,?) ' +
        'ON CONFLICT(code) DO UPDATE SET ' +
        'name=excluded.name, blurb=excluded.blurb, items=excluded.items, ' +
        'updated=excluded.updated, txt=excluded.txt, cover=excluded.cover',
        d.code, d.name || '', d.blurb || '', d.items || 0,
        d.at || Date.now(), d.updated || Date.now(), d.text ? 1 : 0, d.cover || ''
      );
      return Response.json({ ok: true });
    }

    if (action === 'del') {
      const d = await request.json();
      sql.exec('DELETE FROM decks WHERE code = ?', d.code);
      return Response.json({ ok: true });
    }

    /* Enough people flagging a deck pulls it out of the gallery on its
       own. It stays playable by code — this hides it from browsing, it
       does not delete somebody's work on a handful of clicks. A real
       takedown is a separate, deliberate act. */
    if (action === 'report') {
      const d = await request.json();
      sql.exec('UPDATE decks SET reports = reports + 1 WHERE code = ?', d.code);
      const row = [...sql.exec('SELECT reports FROM decks WHERE code = ?', d.code)][0];
      const n = row ? row.reports : 0;
      if (n >= REPORTS_TO_HIDE) sql.exec('UPDATE decks SET hidden = 1 WHERE code = ?', d.code);
      return Response.json({ reports: n, hidden: n >= REPORTS_TO_HIDE });
    }

    if (action === 'flagged') {
      const rows = [...sql.exec(
        'SELECT code,name,blurb,reports,hidden,plays,at FROM decks WHERE reports > 0 ORDER BY reports DESC LIMIT 200'
      )];
      return Response.json({ decks: rows });
    }

    if (action === 'show') {
      const d = await request.json();
      sql.exec('UPDATE decks SET hidden = 0, reports = 0 WHERE code = ?', d.code);
      return Response.json({ ok: true });
    }

    if (action === 'bump') {
      const d = await request.json();
      sql.exec(
        'UPDATE decks SET plays = MAX(0, plays + ?), up = MAX(0, up + ?), down = MAX(0, down + ?) WHERE code = ?',
        d.plays || 0, d.up || 0, d.down || 0, d.code
      );
      return Response.json({ ok: true });
    }

    if (action === 'list') {
      const q = (url.searchParams.get('q') || '').trim().slice(0, 60);
      const sort = url.searchParams.get('sort') === 'new' ? 'new' : 'popular';
      const per = Math.min(48, Math.max(6, parseInt(url.searchParams.get('per') || '12', 10) || 12));
      const page = Math.max(1, parseInt(url.searchParams.get('page') || '1', 10) || 1);
      const off = (page - 1) * per;

      /* Parameterised, and the only user string in here is bound rather
         than spliced. LIKE's own wildcards are escaped so a name with a
         % in it searches for a % . */
      const like = '%' + q.replace(/[\\%_]/g, c => '\\' + c) + '%';
      const where = q
        ? "WHERE hidden = 0 AND (name LIKE ? ESCAPE '\\' OR blurb LIKE ? ESCAPE '\\')"
        : 'WHERE hidden = 0';
      const args = q ? [like, like] : [];

      /* Popular leans on plays but lets votes move it, and a brand new
         deck with nothing yet still surfaces near the top of Newest. */
      const order = sort === 'new'
        ? 'ORDER BY at DESC'
        : 'ORDER BY (plays + (up - down) * 3) DESC, at DESC';

      const total = [...sql.exec('SELECT COUNT(*) AS n FROM decks ' + where, ...args)][0].n;
      const rows = [...sql.exec(
        'SELECT code,name,blurb,items,at,txt,cover,plays,up,down FROM decks ' +
        where + ' ' + order + ' LIMIT ? OFFSET ?',
        ...args, per, off
      )];

      return Response.json({
        decks: rows.map(r => ({
          code: r.code, name: r.name, blurb: r.blurb, items: r.items,
          at: r.at, text: !!r.txt, cover: r.cover || null,
          plays: r.plays, up: r.up, down: r.down
        })),
        total: total,
        page: page,
        pages: Math.max(1, Math.ceil(total / per))
      });
    }

    return Response.json({ error: 'unknown action' }, { status: 400 });
  }
}

/* One index for the whole site. */
function indexStub(env) {
  if (!env.INDEX) return null;
  return env.INDEX.get(env.INDEX.idFromName('public-v1'));
}

async function indexPut(env, deck) {
  const stub = indexStub(env);
  if (!stub || deck.unlisted) return;
  try {
    await stub.fetch('https://index/?do=put', {
      method: 'POST',
      body: JSON.stringify({
        code: deck.code, name: deck.name, blurb: deck.blurb,
        items: (deck.items || []).length, at: deck.at, updated: deck.updated,
        text: deck.text,
        cover: deck.cover || (deck.items || []).map(i => i.img).filter(Boolean)[0] || ''
      })
    });
  } catch (e) {}
}

async function indexDel(env, code) {
  const stub = indexStub(env);
  if (!stub) return;
  try {
    await stub.fetch('https://index/?do=del', { method: 'POST', body: JSON.stringify({ code: code }) });
  } catch (e) {}
}

async function indexReport(env, code) {
  const stub = indexStub(env);
  if (!stub) return { reports: 0 };
  const res = await stub.fetch('https://index/?do=report', {
    method: 'POST', body: JSON.stringify({ code: code })
  });
  return res.json();
}

async function indexAdmin(env, action, code) {
  const stub = indexStub(env);
  if (!stub) return {};
  const res = await stub.fetch('https://index/?do=' + action, {
    method: 'POST', body: JSON.stringify({ code: code || '' })
  });
  return res.json();
}

async function indexBump(env, code, delta) {
  const stub = indexStub(env);
  if (!stub) return;
  try {
    await stub.fetch('https://index/?do=bump', {
      method: 'POST',
      body: JSON.stringify({ code: code, ...delta })
    });
  } catch (e) {}
}

/* ── slowing down abuse ─────────────────────────────────────
   Publishing and uploading both cost storage, and both are open to
   anyone. One object holds a rolling count per caller so a script
   can't fill the bucket overnight. Reads are untouched — playing
   somebody's deck should never be rationed. */
export class RateLimit {
  constructor(state) { this.state = state; }

  async fetch(request) {
    const { key, limit, windowMs, cost } = await request.json();
    const now = Date.now();
    const weight = Math.max(1, cost || 1);
    /* Entries are [when, howMuch] so the same object can ration calls
       and bytes — a picture upload costs its own size. */
    /* Tolerate the older shape (a bare timestamp) from before entries
       carried a weight. */
    const hits = ((await this.state.storage.get(key)) || [])
      .map(h => (Array.isArray(h) ? h : [h, 1]));
    const live = hits.filter(h => now - h[0] < windowMs);
    const used = live.reduce((n, h) => n + h[1], 0);
    if (used + weight > limit) {
      /* An empty window here means this one request is bigger than the
         whole allowance, so there is nothing to wait for. */
      const retryMs = live.length ? windowMs - (now - live[0][0]) : 0;
      return Response.json({ ok: false, retryMs: retryMs, tooBig: !live.length });
    }
    live.push([now, weight]);
    await this.state.storage.put(key, live);
    return Response.json({ ok: true, left: limit - used - weight });
  }
}

/* Returns null when the caller is inside their allowance, or a 429. */
async function rateLimit(request, env, bucket, limit, windowMs, cost) {
  if (!env.LIMITS) return null;            // not bound: fail open, don't break publishing
  const ip = request.headers.get('cf-connecting-ip') || 'unknown';
  const id = env.LIMITS.idFromName(bucket + ':' + ip);
  try {
    const res = await env.LIMITS.get(id).fetch('https://limit/', {
      method: 'POST',
      body: JSON.stringify({ key: bucket, limit, windowMs, cost: cost })
    });
    const out = await res.json();
    if (out.ok) return null;
    if (out.tooBig) return json({ error: 'that is larger than one upload is allowed to be' }, 413);
    return json({ error: 'slow down a moment', retryAfter: Math.ceil((out.retryMs || windowMs) / 1000) }, 429);
  } catch (e) {
    return null;                           // a broken limiter must not block real users
  }
}

/* ══════════════════════════════════════════════════════════════
   Published decks

   A deck somebody built in the browser, parked in R2 under a short
   code so anyone can play it. Two objects per deck: the JSON, and
   one image per answer that carries a picture.

     POST /deck/img   raw image bytes      -> { key }
     POST /deck       the deck as JSON     -> { code }
     GET  /deck/CODE                       -> the deck
     GET  /img/KEY                         -> the picture

   Anyone can publish — there is no account system and adding one to
   a party game is not worth it — so the limits below are the whole
   defence. Keep them tight.
   ══════════════════════════════════════════════════════════════ */
const DECK_LIMITS = {
  items: 300,
  json: 512 * 1024,          // the deck itself, without pictures
  image: 3 * 1024 * 1024,    // one picture
  uploadBudget: 120 * 1024 * 1024,   // all pictures, per caller, per hour
  name: 40,
  blurb: 120,
  answer: 80,
  prompt: 160
};

const IMAGE_TYPES = {
  'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'image/gif': 'gif'
};

/* No vowels and no look-alikes: a code gets read down a phone and
   typed by somebody else, and it must never spell anything. */
const CODE_ALPHABET = '23456789BCDFGHJKLMNPQRSTVWXYZ';

/* ── who owns a deck ────────────────────────────────────────
   No accounts. Publishing mints a secret, we keep only its SHA-256,
   and editing or deleting means presenting the secret again. Nothing
   here is a credential worth stealing: it unlocks one deck and there
   is no account behind it, no email, and no password to reuse
   somewhere else. Lose the secret and the deck stays published,
   which is the trade for having nobody to sign in as.

   Private decks aren't a permission — they're an unguessable code
   that is never listed anywhere. Twelve characters of this alphabet
   is about 2^58, which is not something anyone walks into. */
const SECRET_BYTES = 24;
const PUBLIC_CODE_LEN = 6;
const PRIVATE_CODE_LEN = 12;

async function sha256Hex(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}

/* Compare in constant time so a wrong secret can't be narrowed down by
   timing how long the rejection took. */
function sameSecret(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function bearer(request) {
  const h = request.headers.get('authorization') || '';
  const m = /^Bearer\s+([A-Za-z0-9]{8,64})$/.exec(h.trim());
  return m ? m[1] : null;
}

/* The deck as its owner stored it, or null. Never handed to a caller
   as-is — it carries the secret's hash. */
async function readDeck(env, code) {
  const obj = await env.DECKS.get('deck/' + code.toUpperCase() + '.json');
  if (!obj) return null;
  try { return JSON.parse(await obj.text()); } catch (e) { return null; }
}

function publicDeck(deck) {
  const out = { ...deck };
  delete out.secretHash;          // the whole point
  return out;
}

/* A client can claim any content-type it likes, so believe the bytes
   instead. Serving a file that says "image/jpeg" but is really HTML is
   how a picture upload turns into stored XSS. */
function sniffImage(bytes) {
  const b = new Uint8Array(bytes);
  if (b.length < 12) return null;
  if (b[0] === 0xFF && b[1] === 0xD8 && b[2] === 0xFF) return { ext: 'jpg', type: 'image/jpeg' };
  if (b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4E && b[3] === 0x47 &&
      b[4] === 0x0D && b[5] === 0x0A && b[6] === 0x1A && b[7] === 0x0A) return { ext: 'png', type: 'image/png' };
  if (b[0] === 0x47 && b[1] === 0x49 && b[2] === 0x46 && b[3] === 0x38) return { ext: 'gif', type: 'image/gif' };
  if (b[0] === 0x52 && b[1] === 0x49 && b[2] === 0x46 && b[3] === 0x46 &&
      b[8] === 0x57 && b[9] === 0x45 && b[10] === 0x42 && b[11] === 0x50) return { ext: 'webp', type: 'image/webp' };
  return null;                    // SVG included: it is a script container
}

function newCode(n) {
  const bytes = crypto.getRandomValues(new Uint8Array(n || 6));
  let out = '';
  for (const b of bytes) out += CODE_ALPHABET[b % CODE_ALPHABET.length];
  return out;
}

function json(body, status) {
  return new Response(JSON.stringify(body), {
    status: status || 200,
    headers: { 'content-type': 'application/json', ...CORS }
  });
}

function clean(v, max) {
  return typeof v === 'string' ? v.slice(0, max).trim() : '';
}

/* Only the shape the game can actually play gets stored. Anything else
   a client sends is dropped rather than trusted. */
function sanitiseDeck(raw) {
  if (!raw || typeof raw !== 'object') return null;
  const items = Array.isArray(raw.items) ? raw.items.slice(0, DECK_LIMITS.items) : [];
  const out = [];
  for (const it of items) {
    if (!it || typeof it !== 'object') continue;
    const answer = clean(it.answer || it.name, DECK_LIMITS.answer);
    if (!answer) continue;
    const row = { answer: answer };
    const alt = Array.isArray(it.alt)
      ? it.alt.map(a => clean(a, DECK_LIMITS.answer)).filter(Boolean).slice(0, 6)
      : [];
    if (alt.length) row.alt = alt;
    const prompt = clean(it.prompt, DECK_LIMITS.prompt);
    if (prompt) row.prompt = prompt;
    if (typeof it.img === 'string' && /^[A-Za-z0-9_-]{1,64}\.(jpg|png|webp|gif)$/.test(it.img)) {
      row.img = it.img;
    }
    if (!row.prompt && !row.img) continue;      // nothing to put on the board
    out.push(row);
  }
  if (!out.length) return null;
  const deck = {
    name: clean(raw.name, DECK_LIMITS.name) || 'Custom deck',
    blurb: clean(raw.blurb, DECK_LIMITS.blurb),
    text: out.every(i => !i.img),
    items: out
  };
  /* A cover the maker chose, rather than whichever answer happened to be
     first. Same key shape as any other picture. */
  if (typeof raw.cover === 'string' && /^[A-Za-z0-9_-]{1,64}\.(jpg|png|webp|gif)$/.test(raw.cover)) {
    deck.cover = raw.cover;
  }
  return deck;
}

async function publishDeck(request, env) {
  if (!env.DECKS) return json({ error: 'deck storage is not configured' }, 501);
  const raw = await request.text();
  if (raw.length > DECK_LIMITS.json) return json({ error: 'deck too big' }, 413);

  let parsed;
  try { parsed = JSON.parse(raw); } catch (e) { return json({ error: 'bad json' }, 400); }

  const deck = sanitiseDeck(parsed);
  if (!deck) return json({ error: 'a deck needs at least one answer with a picture or a prompt' }, 400);

  const unlisted = parsed.private === true;
  const secret = newCode(SECRET_BYTES);
  deck.secretHash = await sha256Hex(secret);
  deck.unlisted = unlisted;

  /* Retry on the vanishingly unlikely collision rather than overwrite
     somebody else's deck. */
  for (let i = 0; i < 5; i++) {
    const code = newCode(unlisted ? PRIVATE_CODE_LEN : PUBLIC_CODE_LEN);
    const key = 'deck/' + code + '.json';
    if (await env.DECKS.head(key)) continue;
    deck.code = code;
    deck.at = Date.now();
    deck.updated = deck.at;
    await env.DECKS.put(key, JSON.stringify(deck), {
      httpMetadata: { contentType: 'application/json' }
    });
    /* A public deck joins the gallery. An unlisted one never does — that
       is the entire difference between them. */
    await indexPut(env, deck);

    /* The secret is returned exactly once and never stored in the clear.
       If the maker loses it, the deck stays up and read-only. */
    return json({ code: code, secret: secret, items: deck.items.length, private: unlisted });
  }
  return json({ error: 'could not allocate a code' }, 503);
}

/* Replace a deck you can prove you made. */
async function updateDeck(request, env, code) {
  if (!env.DECKS) return json({ error: 'deck storage is not configured' }, 501);
  const secret = bearer(request);
  if (!secret) return json({ error: 'this needs the edit key you got when you published' }, 401);

  const existing = await readDeck(env, code);
  if (!existing) return json({ error: 'no deck with that code' }, 404);
  if (!existing.secretHash) return json({ error: 'this deck predates editing and cannot be changed' }, 409);
  if (!sameSecret(await sha256Hex(secret), existing.secretHash)) {
    return json({ error: 'that edit key does not match this deck' }, 403);
  }

  const raw = await request.text();
  if (raw.length > DECK_LIMITS.json) return json({ error: 'deck too big' }, 413);
  let parsed;
  try { parsed = JSON.parse(raw); } catch (e) { return json({ error: 'bad json' }, 400); }

  const deck = sanitiseDeck(parsed);
  if (!deck) return json({ error: 'a deck needs at least one answer with a picture or a prompt' }, 400);

  /* Identity and ownership are the server's, not the client's. */
  deck.code = existing.code;
  deck.at = existing.at;
  deck.secretHash = existing.secretHash;
  deck.unlisted = parsed.private === undefined ? !!existing.unlisted : parsed.private === true;
  deck.updated = Date.now();

  await env.DECKS.put('deck/' + existing.code + '.json', JSON.stringify(deck), {
    httpMetadata: { contentType: 'application/json' }
  });

  /* Made private in an edit? Come out of the gallery. Made public? Go in. */
  if (deck.unlisted) await indexDel(env, deck.code);
  else await indexPut(env, deck);

  return json({ code: deck.code, items: deck.items.length, private: deck.unlisted });
}

/* Take it down, pictures and all. */
async function deleteDeck(request, env, code) {
  if (!env.DECKS) return json({ error: 'deck storage is not configured' }, 501);
  const secret = bearer(request);
  if (!secret) return json({ error: 'this needs the edit key you got when you published' }, 401);

  const existing = await readDeck(env, code);
  if (!existing) return json({ error: 'no deck with that code' }, 404);
  if (!existing.secretHash) return json({ error: 'this deck predates editing and cannot be removed here' }, 409);
  if (!sameSecret(await sha256Hex(secret), existing.secretHash)) {
    return json({ error: 'that edit key does not match this deck' }, 403);
  }

  /* The pictures go too, or they sit in the bucket forever paying rent. */
  const imgs = (existing.items || []).map(i => i.img).filter(Boolean);
  for (const key of imgs) {
    if (/^[A-Za-z0-9_-]{1,64}\.(jpg|png|webp|gif)$/.test(key)) {
      try { await env.DECKS.delete('img/' + key); } catch (e) {}
    }
  }
  await env.DECKS.delete('deck/' + existing.code + '.json');
  await indexDel(env, existing.code);
  return json({ deleted: existing.code, images: imgs.length });
}

async function putImage(request, env) {
  if (!env.DECKS) return json({ error: 'deck storage is not configured' }, 501);
  const claimed = (request.headers.get('content-type') || '').split(';')[0].trim();
  if (!IMAGE_TYPES[claimed]) return json({ error: 'unsupported image type' }, 415);

  const body = await request.arrayBuffer();
  if (!body.byteLength) return json({ error: 'empty image' }, 400);
  if (body.byteLength > DECK_LIMITS.image) return json({ error: 'image too big' }, 413);

  /* The header is the uploader's word for it. The bytes are the truth,
     and the bytes are what we serve this file back as. */
  const real = sniffImage(body);
  if (!real) return json({ error: 'that file is not a JPEG, PNG, GIF or WebP' }, 415);

  /* A per-image cap alone lets someone publish 300 answers of 3MB each.
     This rations total bytes per caller per hour, not just calls. */
  const budget = await rateLimit(request, env, 'imgbytes', DECK_LIMITS.uploadBudget,
                                 60 * 60 * 1000, body.byteLength);
  if (budget) return budget;

  const key = newCode(16) + '.' + real.ext;
  await env.DECKS.put('img/' + key, body, { httpMetadata: { contentType: real.type } });
  return json({ key: key });
}

async function getDeck(env, code) {
  if (!env.DECKS) return json({ error: 'deck storage is not configured' }, 501);
  const deck = await readDeck(env, code);
  if (!deck) return json({ error: 'no deck with that code' }, 404);
  /* Parsed and re-serialised rather than streamed straight through, so
     the owner's secret hash never leaves the bucket. */
  return new Response(JSON.stringify(publicDeck(deck)), {
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, max-age=60',
      ...CORS
    }
  });
}

async function getImage(env, key) {
  if (!env.DECKS) return new Response('not configured', { status: 501, headers: CORS });
  const obj = await env.DECKS.get('img/' + key);
  if (!obj) return new Response('not found', { status: 404, headers: CORS });
  /* Only ever the four types we sniffed on the way in, and never
     sniffed again by the browser. */
  const stored = obj.httpMetadata?.contentType || '';
  const type = IMAGE_TYPES[stored] ? stored : 'application/octet-stream';
  return new Response(obj.body, {
    headers: {
      'content-type': type,
      'content-security-policy': "default-src 'none'; sandbox",
      'x-content-type-options': 'nosniff',
      'cache-control': 'public, max-age=31536000, immutable',
      ...CORS
    }
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: CORS });
    if (url.pathname === '/health') {
      return new Response(JSON.stringify({ ok: true }), {
        headers: { 'content-type': 'application/json', ...CORS }
      });
    }

    if (url.pathname === '/decks' && request.method === 'GET') return listDecks(request, env);

    if (url.pathname === '/deck' && request.method === 'POST') {
      return (await rateLimit(request, env, 'publish', 12, 60 * 60 * 1000)) || publishDeck(request, env);
    }
    if (url.pathname === '/deck/img' && request.method === 'POST') {
      return (await rateLimit(request, env, 'img', 400, 60 * 60 * 1000)) || putImage(request, env);
    }

    const d = url.pathname.match(/^\/deck\/([A-Za-z0-9]{4,12})$/);
    if (d && request.method === 'GET') return getDeck(env, d[1]);
    if (d && request.method === 'PUT') {
      return (await rateLimit(request, env, 'edit', 60, 60 * 60 * 1000)) || updateDeck(request, env, d[1]);
    }
    if (d && request.method === 'DELETE') {
      return (await rateLimit(request, env, 'edit', 60, 60 * 60 * 1000)) || deleteDeck(request, env, d[1]);
    }

    const st = url.pathname.match(/^\/deck\/([A-Za-z0-9]{4,12})\/stats$/);
    if (st && request.method === 'GET') return deckStats(env, st[1], null);

    const pl = url.pathname.match(/^\/deck\/([A-Za-z0-9]{4,12})\/played$/);
    if (pl && request.method === 'POST') return deckStats(env, pl[1], 'played');

    const rp = url.pathname.match(/^\/deck\/([A-Za-z0-9]{4,12})\/report$/);
    if (rp && request.method === 'POST') {
      const limited = await rateLimit(request, env, 'report', 20, 60 * 60 * 1000);
      if (limited) return limited;
      return json(await indexReport(env, rp[1]));
    }

    /* Moderation. Needs ADMIN_TOKEN set as a Worker secret; without one
       these are simply off rather than open. */
    const adminOk = () => {
      const tok = bearer(request);
      return !!env.ADMIN_TOKEN && !!tok && sameSecret(tok, env.ADMIN_TOKEN);
    };

    if (url.pathname === '/admin/flagged' && request.method === 'GET') {
      if (!adminOk()) return json({ error: 'no' }, 403);
      return json(await indexAdmin(env, 'flagged'));
    }

    const ad = url.pathname.match(/^\/admin\/deck\/([A-Za-z0-9]{4,12})$/);
    if (ad && request.method === 'DELETE') {
      if (!adminOk()) return json({ error: 'no' }, 403);
      const deck = await readDeck(env, ad[1]);
      if (deck) {
        for (const key of (deck.items || []).map(i => i.img).filter(Boolean)) {
          if (/^[A-Za-z0-9_-]{1,64}\.(jpg|png|webp|gif)$/.test(key)) {
            try { await env.DECKS.delete('img/' + key); } catch (e) {}
          }
        }
        await env.DECKS.delete('deck/' + ad[1].toUpperCase() + '.json');
      }
      await indexDel(env, ad[1].toUpperCase());
      return json({ removed: ad[1].toUpperCase() });
    }
    if (ad && request.method === 'POST') {          // clear the flags, put it back
      if (!adminOk()) return json({ error: 'no' }, 403);
      return json(await indexAdmin(env, 'show', ad[1].toUpperCase()));
    }

    const vt = url.pathname.match(/^\/deck\/([A-Za-z0-9]{4,12})\/vote$/);
    if (vt && request.method === 'POST') {
      return deckStats(env, vt[1], 'vote', {
        up: url.searchParams.get('up') || '0',
        down: url.searchParams.get('down') || '0'
      });
    }

    const i = url.pathname.match(/^\/img\/([A-Za-z0-9_-]{1,64}\.(?:jpg|png|webp|gif))$/);
    if (i && request.method === 'GET') return getImage(env, i[1]);

    const m = url.pathname.match(/^\/room\/([A-Za-z0-9]{4,12})$/);
    if (!m) return new Response('not found', { status: 404, headers: CORS });

    const id = env.ROOMS.idFromName(m[1].toUpperCase());
    return env.ROOMS.get(id).fetch(request);
  }
};
