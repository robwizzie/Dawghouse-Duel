#!/usr/bin/env node
/* ══════════════════════════════════════════════════════════════
   Finds a text-free photo on Wikimedia Commons for each line of a
   query file, and prints a ranked shortlist with URLs.

     node tools/search-commons.js queries.txt

   Written for the fast food category, where a chain's own article
   leads with a storefront — and the name is on the sign. Commons has
   plenty of photos of the actual food; this digs them out so the
   chosen URL can be pinned into the data file with `image:`.
   ══════════════════════════════════════════════════════════════ */
const https = require('https'), fs = require('fs');
const UA = 'dawghouse-duel/1.0 (https://dawghouseduel.com; https://github.com/robwizzie/Dawghouse-Duel)';

function get(u, n = 0) {
  return new Promise((res, rej) => {
    https.get(u, { headers: { 'User-Agent': UA } }, r => {
      if (r.statusCode >= 300 && r.statusCode < 400 && r.headers.location && n < 5) {
        r.resume(); return res(get(new URL(r.headers.location, u).href, n + 1));
      }
      if (r.statusCode !== 200) { r.resume(); return rej(new Error('HTTP ' + r.statusCode)); }
      let d = ''; r.on('data', c => d += c); r.on('end', () => res(d));
    }).on('error', rej);
  });
}
const sleep = ms => new Promise(r => setTimeout(r, ms));

/* A photo of a building has the name written on it. A photo of a burger
   does not — so score filenames toward food and away from architecture. */
const GOOD = /burger|sandwich|fries|taco|burrito|pizza|chicken|nugget|donut|doughnut|coffee|drink|shake|sundae|cone|meal|food|combo|wings|sub |hot ?dog|pretzel|biscuit|breakfast|bowl|salad|wrap|milkshake|ice cream|smoothie|cup |plate/i;
const BAD  = /storefront|store front|exterior|interior|sign|signage|building|restaurant in|location|panoramio|logo|street|mall,|drive.?thru|parking|outlet|branch|facade|entrance|\bhq\b|headquarters|construction|night|aerial/i;

function score(name) {
  let s = 0;
  if (GOOD.test(name)) s += 3;
  if (BAD.test(name))  s -= 5;
  if (/\.svg$/i.test(name)) s -= 10;
  if (name.length < 45) s += 1;
  return s;
}

(async () => {
  const lines = fs.readFileSync(process.argv[2], 'utf8').split('\n')
    .map(l => l.trim()).filter(l => l && !l.startsWith('#'));
  const out = {};
  for (const line of lines) {
    const [slug, query] = line.split('|').map(s => s.trim());
    let picks = [];
    try {
      const d = JSON.parse(await get('https://commons.wikimedia.org/w/api.php?action=query&generator=search' +
        '&gsrsearch=' + encodeURIComponent('filetype:bitmap ' + query) +
        '&gsrnamespace=6&gsrlimit=12&prop=imageinfo&iiprop=url&iiurlwidth=800&format=json'));
      picks = Object.values((d.query && d.query.pages) || {})
        .map(p => ({ name: p.title.replace(/^File:/, ''), url: (p.imageinfo || [{}])[0].thumburl }))
        .filter(p => p.url)
        .map(p => ({ ...p, s: score(p.name) }))
        .sort((a, b) => b.s - a.s);
    } catch (e) { /* leave empty */ }
    if (!picks.length) { console.log('  ??  ' + slug.padEnd(22) + 'nothing found'); }
    else {
      out[slug] = picks[0].url.split('?')[0];
      console.log('  ' + (picks[0].s > 0 ? 'OK ' : '?? ') + ' ' + slug.padEnd(22) + picks[0].name.slice(0, 62));
      picks.slice(1, 3).forEach(p => console.log('        alt  ' + p.name.slice(0, 62)));
    }
    await sleep(320);
  }
  fs.writeFileSync('/tmp/commons-picks.json', JSON.stringify(out, null, 1));
  console.log('\n' + Object.keys(out).length + ' picks written to /tmp/commons-picks.json');
})();
