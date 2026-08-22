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

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
  'Access-Control-Allow-Headers': 'content-type'
};

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
  return {
    name: clean(raw.name, DECK_LIMITS.name) || 'Custom deck',
    blurb: clean(raw.blurb, DECK_LIMITS.blurb),
    text: out.every(i => !i.img),
    items: out
  };
}

async function publishDeck(request, env) {
  if (!env.DECKS) return json({ error: 'deck storage is not configured' }, 501);
  const raw = await request.text();
  if (raw.length > DECK_LIMITS.json) return json({ error: 'deck too big' }, 413);

  let parsed;
  try { parsed = JSON.parse(raw); } catch (e) { return json({ error: 'bad json' }, 400); }

  const deck = sanitiseDeck(parsed);
  if (!deck) return json({ error: 'a deck needs at least one answer with a picture or a prompt' }, 400);

  /* Retry on the vanishingly unlikely collision rather than overwrite
     somebody else's deck. */
  for (let i = 0; i < 5; i++) {
    const code = newCode(6);
    const key = 'deck/' + code + '.json';
    if (await env.DECKS.head(key)) continue;
    deck.code = code;
    deck.at = Date.now();
    await env.DECKS.put(key, JSON.stringify(deck), {
      httpMetadata: { contentType: 'application/json' }
    });
    return json({ code: code, items: deck.items.length });
  }
  return json({ error: 'could not allocate a code' }, 503);
}

async function putImage(request, env) {
  if (!env.DECKS) return json({ error: 'deck storage is not configured' }, 501);
  const type = (request.headers.get('content-type') || '').split(';')[0].trim();
  const ext = IMAGE_TYPES[type];
  if (!ext) return json({ error: 'unsupported image type' }, 415);

  const body = await request.arrayBuffer();
  if (!body.byteLength) return json({ error: 'empty image' }, 400);
  if (body.byteLength > DECK_LIMITS.image) return json({ error: 'image too big' }, 413);

  const key = newCode(16) + '.' + ext;
  await env.DECKS.put('img/' + key, body, { httpMetadata: { contentType: type } });
  return json({ key: key });
}

async function getDeck(env, code) {
  if (!env.DECKS) return json({ error: 'deck storage is not configured' }, 501);
  const obj = await env.DECKS.get('deck/' + code.toUpperCase() + '.json');
  if (!obj) return json({ error: 'no deck with that code' }, 404);
  return new Response(obj.body, {
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, max-age=300',
      ...CORS
    }
  });
}

async function getImage(env, key) {
  if (!env.DECKS) return new Response('not configured', { status: 501, headers: CORS });
  const obj = await env.DECKS.get('img/' + key);
  if (!obj) return new Response('not found', { status: 404, headers: CORS });
  return new Response(obj.body, {
    headers: {
      'content-type': obj.httpMetadata?.contentType || 'application/octet-stream',
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

    if (url.pathname === '/deck' && request.method === 'POST') return publishDeck(request, env);
    if (url.pathname === '/deck/img' && request.method === 'POST') return putImage(request, env);

    const d = url.pathname.match(/^\/deck\/([A-Za-z0-9]{4,12})$/);
    if (d && request.method === 'GET') return getDeck(env, d[1]);

    const i = url.pathname.match(/^\/img\/([A-Za-z0-9_-]{1,64}\.(?:jpg|png|webp|gif))$/);
    if (i && request.method === 'GET') return getImage(env, i[1]);

    const m = url.pathname.match(/^\/room\/([A-Za-z0-9]{4,12})$/);
    if (!m) return new Response('not found', { status: 404, headers: CORS });

    const id = env.ROOMS.idFromName(m[1].toUpperCase());
    return env.ROOMS.get(id).fetch(request);
  }
};
