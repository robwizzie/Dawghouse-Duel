#!/usr/bin/env node
/* ══════════════════════════════════════════════════════════════
   Pulls a portrait for every answer in a category from a Fandom
   wiki and drops it in assets/categories/<cat>/.

     node tools/fetch-wiki-images.js disney

   The category's data file names the wiki:  wiki: 'disney.fandom.com'
   Any item can override the lookup with:    page: 'Rex (Toy Story)'

   Works against Wikipedia too (wiki: 'en.wikipedia.org'), where it also
   records each photo's licence and photographer in sources.json — those
   images are genuinely reusable with attribution, unlike Fandom's.
   ══════════════════════════════════════════════════════════════ */
const fs = require('fs'), path = require('path'), https = require('https');
const { execFileSync } = require('child_process');

const CAT = process.argv[2] || 'disney';
const OUT = path.join(__dirname, '..', 'assets', 'categories', CAT);
const THUMB = 800, MIN_BYTES = 3000;
const GAP_MS = 350, RETRIES = 4;   // Wikimedia returns 429 if you lean on it
const UA = 'dawghouse-duel/1.0 (https://dawghouseduel.com; https://github.com/robwizzie/Dawghouse-Duel) node-https';

function get(url, redirects = 0) {
  return new Promise((res, rej) => {
    https.get(url, { headers: { 'User-Agent': UA } }, r => {
      if (r.statusCode >= 300 && r.statusCode < 400 && r.headers.location && redirects < 5) {
        r.resume();
        return res(get(new URL(r.headers.location, url).href, redirects + 1));
      }
      if (r.statusCode !== 200) {
        r.resume();
        const err = new Error('HTTP ' + r.statusCode);
        err.status = r.statusCode;
        err.retryAfter = parseInt(r.headers['retry-after'], 10) || 0;
        return rej(err);
      }
      const chunks = [];
      r.on('data', c => chunks.push(c));
      r.on('end', () => res(Buffer.concat(chunks)));
    }).on('error', rej);
  });
}
const sleep = ms => new Promise(r => setTimeout(r, ms));

/* Wikimedia throttles hard on a 170-item sweep. Back off and try again
   rather than silently recording a whole category as "missing". */
async function fetchWithBackoff(url, label) {
  let wait = 900;
  for (let attempt = 0; ; attempt++) {
    try { return await get(url); }
    catch (e) {
      const soft = e.status === 429 || e.status === 503 || !e.status;
      if (!soft || attempt >= RETRIES) throw e;
      const pause = e.retryAfter ? e.retryAfter * 1000 : wait;
      process.stdout.write('\r  waiting ' + Math.round(pause / 100) / 10 + 's after ' +
                           e.message + (label ? ' on ' + label : '') + '           ');
      await sleep(pause);
      wait = Math.min(wait * 2, 15000);
    }
  }
}

function api(wiki) {
  // Wikipedia serves the API from /w/, Fandom from the root.
  return 'https://' + wiki + (/wiki[mp]edia\.org$/.test(wiki) ? '/w/api.php' : '/api.php');
}

/* One request per 50 titles rather than one per answer — the difference
   between a polite sweep and getting throttled into the ground. */
async function pageImages(wiki, titles) {
  const found = new Map();          // requested title (lowercased) -> hit
  for (let i = 0; i < titles.length; i += 50) {
    const batch = titles.slice(i, i + 50);
    const url = api(wiki) + '?action=query&titles=' + encodeURIComponent(batch.join('|')) +
      '&prop=pageimages&piprop=thumbnail|name&pithumbsize=' + THUMB + '&format=json&redirects=1';
    let data;
    try { data = JSON.parse((await fetchWithBackoff(url, batch[0] + ' +' + (batch.length - 1))).toString('utf8')); }
    catch (e) { continue; }
    const q = data.query || {};

    // Follow the normalisation/redirect trail back to what we asked for.
    const back = new Map();
    (q.normalized || []).forEach(n => back.set(n.to, n.from));
    (q.redirects || []).forEach(r => back.set(r.to, back.get(r.from) || r.from));

    for (const p of Object.values(q.pages || {})) {
      if (!p.thumbnail || !p.thumbnail.source) continue;
      const hit = { url: p.thumbnail.source, title: p.title, file: p.pageimage || null };
      let key = p.title;
      const seen = new Set();
      while (back.has(key) && !seen.has(key)) { seen.add(key); key = back.get(key); }
      found.set(key.toLowerCase(), hit);
      found.set(p.title.toLowerCase(), hit);
    }
    await sleep(GAP_MS);
  }
  return found;
}

const strip = h => String(h).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const fileKey = f => String(f).replace(/_/g, ' ').trim().toLowerCase();

/* Wikimedia photos are reusable but most want a credit line — capture it. */
async function credits(wiki, files) {
  const out = new Map();
  if (!/wiki[mp]edia\.org$/.test(wiki)) return out;
  const list = [...new Set(files.filter(Boolean))];
  for (let i = 0; i < list.length; i += 50) {
    const batch = list.slice(i, i + 50);
    const url = api(wiki) + '?action=query&titles=' +
      encodeURIComponent(batch.map(f => 'File:' + f).join('|')) +
      '&prop=imageinfo&iiprop=extmetadata&format=json';
    let data;
    try { data = JSON.parse((await fetchWithBackoff(url, 'licences')).toString('utf8')); }
    catch (e) { continue; }
    for (const p of Object.values((data.query && data.query.pages) || {})) {
      const m = p.imageinfo && p.imageinfo[0] && p.imageinfo[0].extmetadata;
      if (!m) continue;
      const name = String(p.title).replace(/^File:/, '');
      out.set(fileKey(name), {
        file: name,
        licence: strip((m.LicenseShortName || {}).value || ''),
        by: strip((m.Artist || {}).value || '').slice(0, 120)
      });
    }
    await sleep(GAP_MS);
  }
  return out;
}

(async () => {
  global.window = global;
  require('../js/data/' + CAT + '.js');
  const cat = window.DHD_CATEGORIES.find(c => c.id === CAT);
  if (!cat) throw new Error('no category ' + CAT);
  if (!cat.wiki) throw new Error(CAT + ' has no `wiki` in its data file');

  fs.mkdirSync(OUT, { recursive: true });
  const sources = {}, missing = [];
  let got = 0, cached = 0;

  const have = new Set();
  cat.items.forEach(item => {
    const dest = path.join(OUT, item.slug + '.jpg');
    if (fs.existsSync(dest) && fs.statSync(dest).size > MIN_BYTES) { have.add(item.slug); cached++; }
  });
  const todo = cat.items;
  console.log('Need ' + (cat.items.length - cached) + ', already have ' + cached + '.');

  // Ask for every title we might want in a handful of batched requests.
  const wanted = [];
  todo.forEach(item => [item.page, item.name, ...(item.alt || [])]
    .filter(Boolean).forEach(t => { if (!wanted.includes(t)) wanted.push(t); }));
  process.stdout.write('Resolving ' + wanted.length + ' titles… ');
  const lookup = await pageImages(cat.wiki, wanted);
  console.log(lookup.size / 2 | 0, 'pages with images');

  const plan = [];
  for (const item of todo) {
    const tries = [item.page, item.name, ...(item.alt || [])].filter(Boolean);
    let hit = null, via = null;
    for (const t of tries) {
      hit = lookup.get(t.toLowerCase());
      if (hit) { via = t; break; }
    }
    if (!hit) { missing.push(item.name); continue; }
    plan.push({ item, hit, via });
  }

  process.stdout.write('Fetching licences… ');
  const lic = await credits(cat.wiki, plan.map(p => p.hit.file));
  console.log(lic.size + ' recorded');

  for (const { item, hit, via } of plan) {
    const dest = path.join(OUT, item.slug + '.jpg');
    sources[item.slug] = { answer: item.name, matched: hit.title, via: via };
    const cr = hit.file && lic.get(fileKey(hit.file));
    if (cr) Object.assign(sources[item.slug], cr);
    if (have.has(item.slug)) continue;      // picture already on disk; we only wanted the credit
    try {
      const buf = await fetchWithBackoff(hit.url, item.name);
      if (buf.length < MIN_BYTES) throw new Error('image too small');
      const tmp = dest + '.tmp';
      fs.writeFileSync(tmp, buf);
      try {
        execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '88', tmp, '--out', dest],
                     { stdio: 'ignore' });
        fs.unlinkSync(tmp);
      } catch (e) { fs.renameSync(tmp, dest); }
      got++;
      process.stdout.write('\r  ' + (got + cached) + '/' + cat.items.length + '  ' +
                          item.name.padEnd(26).slice(0, 26));
    } catch (e) {
      missing.push(item.name + ' — ' + e.message);
      delete sources[item.slug];
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
  const tally = {};
  Object.values(sources).forEach(s => { if (s.licence) tally[s.licence] = (tally[s.licence] || 0) + 1; });
  if (Object.keys(tally).length) {
    console.log('\nLicences (recorded in sources.json):');
    Object.entries(tally).sort((a, b) => b[1] - a[1]).forEach(([k, n]) => console.log('  ' + String(n).padStart(4) + '  ' + k));
  }
  console.log('\nNow run ./tools/build-manifest.sh');
})().catch(e => { console.error('\n' + e.message); process.exit(1); });
