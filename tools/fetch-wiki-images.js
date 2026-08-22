#!/usr/bin/env node
/* ══════════════════════════════════════════════════════════════
   Pulls a portrait for every answer in a category from a Fandom
   wiki and drops it in assets/categories/<cat>/.

     node tools/fetch-wiki-images.js disney

   The category's data file names the wiki:  wiki: 'disney.fandom.com'
   Any item can override the lookup with:    page: 'Rex (Toy Story)'
   ...or point at a different wiki entirely:  wiki: 'theoffice.fandom.com'
   A category can also skip wikis altogether with an `imagePattern`
   containing {id}, and an `id` on each answer (that's how Pokémon
   pulls official artwork straight from the PokeAPI sprite repo).
   `keepAlpha: true` stops transparent PNGs being flattened to JPEG —
   without it, silhouette picture mode would render a black rectangle.
   (sitcom characters live on one wiki per show, so that category sets a
   wiki per answer rather than one for the lot)
   ...or skip the lookup entirely with:      image: 'https://…/pic.png'
   (the last one is for when a page's lead image is the wrong picture of
   the right character — Darth Vader's article shows Anakin's face)

   Works against Wikipedia too (wiki: 'en.wikipedia.org'), where it also
   records each photo's licence and photographer in sources.json — those
   images are genuinely reusable with attribution, unlike Fandom's.
   ══════════════════════════════════════════════════════════════ */
const fs = require('fs'), path = require('path'), https = require('https');
const { execFileSync } = require('child_process');

const CAT = process.argv[2] || 'disney';
const OUT = path.join(__dirname, '..', 'assets', 'categories', CAT);
const THUMB = 800, MIN_BYTES = 3000, MAX_EDGE = 900;

/* Fandom's CDN converts on delivery — a .png render comes back as webp or
   jpeg with the alpha gone. `format=original` opts out of the conversion.
   It has to be appended to the thumbnail URL as-is: stripping back to the
   bare file path 404s on most wikis, because the cache-buster and
   path-prefix in the query are load-bearing. Keeping the thumbnail also
   means the file arrives already scaled. */
/* What the bytes actually are, whatever the URL claimed. Saving webp
   inside a .png (or SVG inside a .jpg) means the server later serves the
   wrong content type and the picture simply fails to render. */
function sniff(buf) {
  if (buf[0] === 0xFF && buf[1] === 0xD8) return '.jpg';
  if (buf[0] === 0x89 && buf[1] === 0x50) return '.png';
  if (buf.slice(0, 4).toString('ascii') === 'RIFF' && buf.slice(8, 12).toString('ascii') === 'WEBP') return '.webp';
  if (buf[0] === 0x47 && buf[1] === 0x49) return '.gif';
  var head = buf.slice(0, 400).toString('utf8');
  if (/<svg[\s>]/i.test(head) || /^\s*<\?xml/.test(head)) return '.svg';
  return null;
}

const originalUrl = u =>
  String(u) + (String(u).indexOf('?') === -1 ? '?' : '&') + 'format=original';
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
      /* Fandom answers 404 to a perfectly good API call when it is being
         leaned on — a category spanning 40 wikis triggers it constantly.
         Retry those too; a genuinely missing page just exhausts the
         attempts and gets reported as missing, same as before. */
      const soft = e.status === 429 || e.status === 503 || e.status === 404 || !e.status;
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
  // Fandom serves the API from the root; most other MediaWiki installs
  // (Wikipedia, DoomWiki.org and friends) put it under /w/.
  return 'https://' + wiki + (/\.fandom\.com$/.test(wiki) ? '/api.php' : '/w/api.php');
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
  const patterned = !!cat.imagePattern;
  if (!patterned && !cat.wiki && !cat.items.every(i => i.wiki || i.image)) {
    throw new Error(CAT + ' needs a `wiki`, an `imagePattern`, or a source on every answer');
  }
  const keepAlpha = !!cat.keepAlpha;
  const EXT = keepAlpha ? '.png' : '.jpg';
  const patternUrl = item =>
    cat.imagePattern && item.id != null ? cat.imagePattern.replace('{id}', item.id) : null;
  const wikiFor = item => item.wiki || cat.wiki;

  fs.mkdirSync(OUT, { recursive: true });
  const sources = {}, missing = [];
  let got = 0, cached = 0;

  const have = new Set();
  cat.items.forEach(item => {
    const dest = path.join(OUT, item.slug + EXT);
    if (fs.existsSync(dest) && fs.statSync(dest).size > MIN_BYTES) { have.add(item.slug); cached++; }
  });
  const todo = cat.items;
  console.log('Need ' + (cat.items.length - cached) + ', already have ' + cached + '.');

  // Ask for every title we might want, batched, grouped by which wiki it's on.
  const byWiki = new Map();
  todo.filter(i => !i.image && !patternUrl(i)).forEach(item => {
    const w = wikiFor(item);
    if (!byWiki.has(w)) byWiki.set(w, []);
    const list = byWiki.get(w);
    [item.page, item.name, ...(item.alt || [])].filter(Boolean)
      .forEach(t => { if (!list.includes(t)) list.push(t); });
  });

  const lookups = new Map();   // wiki -> Map(title -> hit)
  let titleCount = 0;
  for (const [w, titles] of byWiki) {
    titleCount += titles.length;
    process.stdout.write('\r  resolving ' + titles.length + ' titles on ' + w.padEnd(34));
    lookups.set(w, await pageImages(w, titles));
    if (byWiki.size > 3) await sleep(GAP_MS);   // be a good guest across many wikis
  }
  console.log('\r  resolved ' + titleCount + ' titles across ' + byWiki.size + ' wiki(s)' + ' '.repeat(30));

  const plan = [];
  for (const item of todo) {
    const pat = patternUrl(item);
    if (item.image || pat) {
      plan.push({
        item,
        hit: { url: item.image || pat, title: item.name, file: null },
        via: item.image ? 'pinned image' : 'pattern #' + item.id
      });
      continue;
    }
    const lookup = lookups.get(wikiFor(item)) || new Map();
    const tries = [item.page, item.name, ...(item.alt || [])].filter(Boolean);
    let hit = null, via = null;
    for (const t of tries) {
      hit = lookup.get(t.toLowerCase());
      if (hit) { via = t; break; }
    }
    if (!hit) { missing.push(item.name + (item.wiki ? '  [' + item.wiki + ']' : '')); continue; }
    plan.push({ item, hit, via });
  }

  const lic = new Map();
  if (cat.wiki && /wiki[mp]edia\.org$/.test(cat.wiki)) {
    process.stdout.write('Fetching licences… ');
    const got = await credits(cat.wiki, plan.map(p => p.hit.file));
    got.forEach((v, k) => lic.set(k, v));
    console.log(lic.size + ' recorded');
  }

  for (const { item, hit, via } of plan) {
    const dest = path.join(OUT, item.slug + EXT);
    sources[item.slug] = { answer: item.name, matched: hit.title, via: via };
    if (item.wiki) sources[item.slug].wiki = item.wiki;
    const cr = hit.file && lic.get(fileKey(hit.file));
    if (cr) Object.assign(sources[item.slug], cr);
    if (have.has(item.slug)) continue;      // picture already on disk; we only wanted the credit
    try {
      const wantOriginal = keepAlpha && /fandom\.com|wikia\./.test(hit.url);
      const buf = await fetchWithBackoff(wantOriginal ? originalUrl(hit.url) : hit.url, item.name);
      if (buf.length < MIN_BYTES) throw new Error('image too small');
      const real = sniff(buf);
      if (!real) throw new Error('unrecognised image data');

      /* Vector and webp files can't be transcoded here and don't need to
         be — the browser renders both. Just give them an honest extension
         so the server sends the right content type. */
      const passthrough = real === '.svg' || real === '.webp';
      const finalDest = passthrough ? path.join(OUT, item.slug + real) : dest;
      if (passthrough) {
        [EXT, '.jpg', '.png'].forEach(other => {
          const stale = path.join(OUT, item.slug + other);
          if (other !== real && fs.existsSync(stale)) fs.unlinkSync(stale);
        });
        fs.writeFileSync(finalDest, buf);
        sources[item.slug] = { answer: item.name, matched: hit.title, via: via };
        if (item.wiki) sources[item.slug].wiki = item.wiki;
        got++;
        process.stdout.write('\r  ' + (got + cached) + '/' + cat.items.length + '  ' +
                            item.name.padEnd(26).slice(0, 26));
        await sleep(GAP_MS);
        continue;
      }

      /* -Z preserves the source format, so in keepAlpha mode the name has
         to follow the bytes. Forcing .png onto a JPEG makes a file the
         browser refuses to render under nosniff. */
      const alphaDest = keepAlpha ? path.join(OUT, item.slug + real) : dest;
      const tmp = alphaDest + '.tmp';
      fs.writeFileSync(tmp, buf);
      if (keepAlpha) {
        ['.jpg', '.png', '.webp', '.svg'].forEach(other => {
          const stale = path.join(OUT, item.slug + other);
          if (other !== real && fs.existsSync(stale)) fs.unlinkSync(stale);
        });
        // -Z keeps the format, so the alpha channel survives the resize.
        try {
          execFileSync('sips', ['-Z', String(MAX_EDGE), tmp, '--out', alphaDest], { stdio: 'ignore' });
          fs.unlinkSync(tmp);
        } catch (e) { fs.renameSync(tmp, alphaDest); }
      } else {
        try {
          execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '88', tmp, '--out', dest],
                       { stdio: 'ignore' });
          fs.unlinkSync(tmp);
        } catch (e) { fs.renameSync(tmp, dest); }
      }
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

  /* A keepAlpha category exists so silhouette mode works. An image that
     arrives flat would render as a black rectangle, so say so loudly. */
  if (keepAlpha) {
    const flat = cat.items.filter(it => {
      const f = ['.png', '.jpg', '.webp', '.svg']
        .map(e => path.join(OUT, it.slug + e)).find(fs.existsSync);
      if (!f) return false;
      const b = fs.readFileSync(f);
      if (!(b[0] === 0x89 && b[1] === 0x50)) return true;
      const colourType = b.readUInt8(25);
      return !(colourType === 6 || colourType === 4 || colourType === 3);
    }).map(it => it.slug);
    if (flat.length) {
      console.log('\nNo alpha channel (silhouette would be a black box) — mark these `flat: true`:');
      flat.forEach(f => console.log('  ' + f));
    }
  }

  console.log('\n\nDownloaded ' + got + ', already had ' + cached + ', missing ' + missing.length + '.');
  const odd = Object.values(sources).filter(s => s.via !== 'pinned image' &&
    s.answer.toLowerCase().replace(/[^a-z0-9]/g, '') !== s.matched.toLowerCase().replace(/[^a-z0-9]/g, ''));
  if (odd.length) {
    console.log('\nResolved to a different page title — worth an eyeball:');
    odd.forEach(s => console.log('  ' + s.answer.padEnd(26) + ' -> ' + s.matched));
  }
  /* A signature or a logo has the answer written across it, which makes the
     round unplayable. Wikipedia falls back to one when a person has no free
     photograph — Pokimane, Technoblade and Corpse Husband all did. */
    const TEXTY = /signature|autograph|[-_ ]sig[-_. ]|logo|wordmark|emblem|monogram/i;
  const texty = Object.values(sources).filter(s => TEXTY.test(decodeURIComponent(s.file || s.url || '')));
  if (texty.length) {
    console.log('\nLooks like a signature or logo, not a picture — these spell the answer:');
    texty.forEach(s => console.log('  ' + s.answer.padEnd(26) + decodeURIComponent((s.file || s.url || '').split('/').pop()).slice(0, 60)));
  }
  if (missing.length) console.log('\nNo image found for:\n  ' + missing.join('\n  '));
  const tally = {};
  Object.values(sources).forEach(s => { if (s.licence) tally[s.licence] = (tally[s.licence] || 0) + 1; });
  if (Object.keys(tally).length) {
    console.log('\nLicences (recorded in sources.json):');
    Object.entries(tally).sort((a, b) => b[1] - a[1]).forEach(([k, n]) => console.log('  ' + String(n).padStart(4) + '  ' + k));
  }
  console.log('\nNow run ./tools/build-manifest.sh');
})().catch(e => { console.error('\n' + (e.stack || e.message)); process.exit(1); });
