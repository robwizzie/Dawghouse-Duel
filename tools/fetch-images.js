#!/usr/bin/env node
/* ══════════════════════════════════════════════════════════════
   Pulls a picture for every answer in a category from the open
   superhero-api dataset and drops it in assets/categories/<cat>/.

     node tools/fetch-images.js [categoryId]

   These are placeholder stills for building and rehearsing the
   format. Swap in art you have the rights to before you publish.
   ══════════════════════════════════════════════════════════════ */
const fs = require('fs'), path = require('path'), https = require('https');

const SRC = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';
const CAT = process.argv[2] || 'superheroes';
const OUT = path.join(__dirname, '..', 'assets', 'categories', CAT);

const norm = s => String(s).toLowerCase().replace(/[^a-z0-9]/g, '');

/* Names the dataset reuses across characters. Pin the one we mean by record id
   so Captain Marvel doesn't come back as Billy Batson and Green Lantern doesn't
   come back as the 1940 one. */
const PIN = {
  superheroes: {
    'captain-marvel': 157,   // Carol Danvers, not Billy Batson
    'shazam':         156,   // Billy Batson
    'green-lantern':  306,   // Hal Jordan, not Alan Scott
    'the-atom':        53,   // Ray Palmer
    'robin':          561,
    'nova':           496
  }
};

function get(url, redirects = 0) {
  return new Promise((res, rej) => {
    https.get(url, { headers: { 'User-Agent': 'dawghouse-duel' } }, r => {
      if (r.statusCode >= 300 && r.statusCode < 400 && r.headers.location && redirects < 5) {
        r.resume();
        return res(get(new URL(r.headers.location, url).href, redirects + 1));
      }
      if (r.statusCode !== 200) { r.resume(); return rej(new Error('HTTP ' + r.statusCode + ' ' + url)); }
      const chunks = [];
      r.on('data', c => chunks.push(c));
      r.on('end', () => res(Buffer.concat(chunks)));
    }).on('error', rej);
  });
}

(async () => {
  global.window = global;
  require('../js/data/' + CAT + '.js');
  const cat = window.DHD_CATEGORIES.find(c => c.id === CAT);
  if (!cat) throw new Error('no category ' + CAT);

  process.stdout.write('Fetching character index… ');
  const db = JSON.parse((await get(SRC)).toString('utf8'));
  console.log(db.length + ' records');

  /* Index in strict passes: a real character name must never lose to some
     other character's alias. Emma Frost lists "Storm" nowhere near as
     authoritatively as Storm does. */
  const index = new Map();
  const byId = new Map(db.map(r => [r.id, r]));
  const add = (k, rec) => { const n = norm(k); if (n && !index.has(n)) index.set(n, rec); };
  for (const rec of db) add(rec.name, rec);
  for (const rec of db) if (rec.biography) add(rec.biography.fullName, rec);
  for (const rec of db) if (rec.biography) (rec.biography.aliases || []).forEach(a => { if (a && a !== '-') add(a, rec); });

  fs.mkdirSync(OUT, { recursive: true });
  const missing = [], sources = {};
  let got = 0, cached = 0;

  for (const item of cat.items) {
    const dest = path.join(OUT, item.slug + '.jpg');
    const pinned = (PIN[CAT] || {})[item.slug];
    let rec = pinned ? byId.get(pinned) : null, via = pinned ? 'pinned #' + pinned : null;
    if (!rec) {
      const keys = [item.name, ...(item.alt || []), item.slug.replace(/-/g, ' ')];
      for (const k of keys) { rec = index.get(norm(k)); if (rec) { via = k; break; } }
    }
    if (!rec) { missing.push(item.name); continue; }
    sources[item.slug] = { answer: item.name, matched: rec.name, via: via, id: rec.id };

    if (fs.existsSync(dest) && fs.statSync(dest).size > 2000) { cached++; continue; }

    const url = rec.images && (rec.images.lg || rec.images.md);
    if (!url) { missing.push(item.name + ' (no image)'); continue; }
    try {
      const buf = await get(url);
      if (buf.length < 2000) throw new Error('image too small, likely a placeholder');
      fs.writeFileSync(dest, buf);
      got++;
      process.stdout.write(`\r  ${got + cached}/${cat.items.length}  ${item.name.padEnd(24).slice(0, 24)}`);
    } catch (e) {
      missing.push(item.name + ' — ' + e.message);
    }
  }

  fs.writeFileSync(path.join(OUT, 'sources.json'), JSON.stringify(sources, null, 1));
  const suspect = Object.values(sources).filter(s => norm(s.answer) !== norm(s.matched));
  console.log(`\n\nDownloaded ${got}, already had ${cached}, missing ${missing.length}.`);
  if (suspect.length) {
    console.log('\nMatched under a different name — eyeball these:');
    suspect.forEach(s => console.log(`  ${s.answer.padEnd(22)} -> ${s.matched}   (via "${s.via}")`));
  }
  if (missing.length) {
    console.log('\nNo image found for:\n  ' + missing.join('\n  '));
    console.log('\nAdd these by hand in the Image Library, or drop files named\n  <slug>.jpg  into ' + path.relative(process.cwd(), OUT));
  }
})().catch(e => { console.error('\n' + e.message); process.exit(1); });
