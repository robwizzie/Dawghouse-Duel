#!/usr/bin/env node
/* ══════════════════════════════════════════════════════════════
   Pulls a portrait for every answer in a category from a Fandom
   wiki and drops it in assets/categories/<cat>/.

     node tools/fetch-wiki-images.js disney

   The category's data file names the wiki:  wiki: 'disney.fandom.com'
   Any item can override the lookup with:    page: 'Rex (Toy Story)'

   Placeholder stills for building and rehearsing the format. Swap in
   art you have the rights to before anything goes out publicly.
   ══════════════════════════════════════════════════════════════ */
const fs = require('fs'), path = require('path'), https = require('https');
const { execFileSync } = require('child_process');

const CAT = process.argv[2] || 'disney';
const OUT = path.join(__dirname, '..', 'assets', 'categories', CAT);
const THUMB = 800, MIN_BYTES = 3000, GAP_MS = 120;
const UA = 'dawghouse-duel/1.0 (local game build)';

function get(url, redirects = 0) {
  return new Promise((res, rej) => {
    https.get(url, { headers: { 'User-Agent': UA } }, r => {
      if (r.statusCode >= 300 && r.statusCode < 400 && r.headers.location && redirects < 5) {
        r.resume();
        return res(get(new URL(r.headers.location, url).href, redirects + 1));
      }
      if (r.statusCode !== 200) { r.resume(); return rej(new Error('HTTP ' + r.statusCode)); }
      const chunks = [];
      r.on('data', c => chunks.push(c));
      r.on('end', () => res(Buffer.concat(chunks)));
    }).on('error', rej);
  });
}
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function pageImage(wiki, title) {
  const url = 'https://' + wiki + '/api.php?action=query&titles=' +
    encodeURIComponent(title) + '&prop=pageimages&pithumbsize=' + THUMB +
    '&format=json&redirects=1';
  const data = JSON.parse((await get(url)).toString('utf8'));
  const pages = (data.query && data.query.pages) || {};
  for (const p of Object.values(pages)) {
    if (p.thumbnail && p.thumbnail.source) return { url: p.thumbnail.source, title: p.title };
  }
  return null;
}

(async () => {
  global.window = global;
  require('../js/data/' + CAT + '.js');
  const cat = window.DHD_CATEGORIES.find(c => c.id === CAT);
  if (!cat) throw new Error('no category ' + CAT);
  if (!cat.wiki) throw new Error(CAT + ' has no `wiki` in its data file');

  fs.mkdirSync(OUT, { recursive: true });
  const sources = {}, missing = [];
  let got = 0, cached = 0, n = 0;

  for (const item of cat.items) {
    n++;
    const dest = path.join(OUT, item.slug + '.jpg');
    if (fs.existsSync(dest) && fs.statSync(dest).size > MIN_BYTES) {
      cached++;
      continue;
    }
    const tries = [item.page, item.name, ...(item.alt || [])].filter(Boolean);
    let hit = null;
    for (const t of tries) {
      try { hit = await pageImage(cat.wiki, t); } catch (e) { hit = null; }
      if (hit) { hit.via = t; break; }
      await sleep(GAP_MS);
    }
    if (!hit) { missing.push(item.name); continue; }

    try {
      const buf = await get(hit.url);
      if (buf.length < MIN_BYTES) throw new Error('image too small');
      const tmp = dest + '.tmp';
      fs.writeFileSync(tmp, buf);
      // Fandom serves webp; normalise so every category folder is plain jpg.
      try {
        execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '88', tmp, '--out', dest],
                     { stdio: 'ignore' });
        fs.unlinkSync(tmp);
      } catch (e) { fs.renameSync(tmp, dest); }
      sources[item.slug] = { answer: item.name, matched: hit.title, via: hit.via };
      got++;
      process.stdout.write('\r  ' + (got + cached) + '/' + cat.items.length + '  ' +
                          item.name.padEnd(26).slice(0, 26));
    } catch (e) {
      missing.push(item.name + ' — ' + e.message);
    }
    await sleep(GAP_MS);
  }

  const prev = fs.existsSync(path.join(OUT, 'sources.json'))
    ? JSON.parse(fs.readFileSync(path.join(OUT, 'sources.json'), 'utf8')) : {};
  fs.writeFileSync(path.join(OUT, 'sources.json'), JSON.stringify(Object.assign(prev, sources), null, 1));

  console.log('\n\nDownloaded ' + got + ', already had ' + cached + ', missing ' + missing.length + '.');
  const odd = Object.values(sources).filter(s =>
    s.answer.toLowerCase().replace(/[^a-z0-9]/g, '') !== s.matched.toLowerCase().replace(/[^a-z0-9]/g, ''));
  if (odd.length) {
    console.log('\nResolved to a different page title — worth an eyeball:');
    odd.forEach(s => console.log('  ' + s.answer.padEnd(26) + ' -> ' + s.matched));
  }
  if (missing.length) console.log('\nNo image found for:\n  ' + missing.join('\n  '));
  console.log('\nNow run ./tools/build-manifest.sh');
})().catch(e => { console.error('\n' + e.message); process.exit(1); });
