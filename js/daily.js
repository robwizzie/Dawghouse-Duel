/* ══════════════════════════════════════════════════════════════
   DHD.Daily — one puzzle a day, the same one for everybody.

   The whole point is comparability: if my ten pictures aren't your
   ten pictures, a shared score means nothing. So the day's puzzle is
   derived from the date alone with a fixed hash — no server, no
   coordination, and two people on opposite sides of the world get
   an identical deck.
   ══════════════════════════════════════════════════════════════ */
window.DHD = window.DHD || {};

DHD.Daily = (function () {
  var LENGTH = 10;          // pictures in a run
  var CLOCK_MS = 60000;     // one clock, same for everyone
  var EPOCH = Date.UTC(2026, 0, 1);   // day 1

  /* Local date, not UTC — the puzzle should turn over at your midnight,
     not at some hour that depends where you live. */
  function todayKey(d) {
    d = d || new Date();
    return d.getFullYear() + '-' +
      String(d.getMonth() + 1).padStart(2, '0') + '-' +
      String(d.getDate()).padStart(2, '0');
  }

  function dayNumber(d) {
    d = d || new Date();
    var local = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
    return Math.floor((local - EPOCH) / 86400000) + 1;
  }

  /* xmur3 + mulberry32: small, fast, and identical in every browser —
     which Math.random() emphatically is not. */
  function seedFrom(str) {
    var h = 1779033703 ^ str.length;
    for (var i = 0; i < str.length; i++) {
      h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
      h = (h << 13) | (h >>> 19);
    }
    return function () {
      h = Math.imul(h ^ (h >>> 16), 2246822507);
      h = Math.imul(h ^ (h >>> 13), 3266489909);
      h ^= h >>> 16;
      return h >>> 0;
    };
  }

  function rngFor(key) {
    var seed = seedFrom(key)();
    return function () {
      seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
      var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function pick(rand, list, n) {
    var pool = list.slice(), out = [];
    while (out.length < n && pool.length) {
      out.push(pool.splice(Math.floor(rand() * pool.length), 1)[0]);
    }
    return out;
  }

  return {
    LENGTH: LENGTH,
    CLOCK_MS: CLOCK_MS,
    key: todayKey,
    number: dayNumber,

    /**
     * The day's deck. Same date → same deck, on every machine.
     *
     * Deliberately does NOT consult what artwork this browser has cached:
     * that varies per person, and a puzzle that differs per person defeats
     * the entire point. It reads only the shipped category data, which is
     * identical for everyone on the same version of the site.
     *
     * @param {Array} categories every registered category
     */
    build: function (categories, forDate) {
      var key = todayKey(forDate);
      var rand = rngFor('dhd-' + key);

      var eligible = categories
        .filter(function (c) { return c.items.length >= LENGTH * 2; })
        .sort(function (a, b) { return a.id < b.id ? -1 : a.id > b.id ? 1 : 0; });
      if (!eligible.length) return null;

      var cat = eligible[Math.floor(rand() * eligible.length)];
      var playable = cat.items;

      /* Weight toward the easier tiers so a daily is winnable by anyone,
         with a couple of deep cuts to separate people at the top. */
      var easy = playable.filter(function (i) { return i.tier === 'easy'; });
      var mid  = playable.filter(function (i) { return i.tier === 'mid'; });
      var deep = playable.filter(function (i) { return i.tier === 'deep'; });

      var chosen = []
        .concat(pick(rand, easy, Math.min(4, easy.length)))
        .concat(pick(rand, mid,  Math.min(4, mid.length)))
        .concat(pick(rand, deep, Math.min(2, deep.length)));

      // top up from whatever is left if a tier was thin
      if (chosen.length < LENGTH) {
        var rest = playable.filter(function (i) { return chosen.indexOf(i) === -1; });
        chosen = chosen.concat(pick(rand, rest, LENGTH - chosen.length));
      }

      // deterministic shuffle of the final order
      for (var i = chosen.length - 1; i > 0; i--) {
        var j = Math.floor(rand() * (i + 1));
        var t = chosen[i]; chosen[i] = chosen[j]; chosen[j] = t;
      }

      return { key: key, day: dayNumber(forDate), cat: cat, items: chosen.slice(0, LENGTH) };
    },

    /* ── what this browser has done ── */
    load: function () {
      try { return JSON.parse(localStorage.getItem('dhd.daily') || '{}') || {}; }
      catch (e) { return {}; }
    },
    resultFor: function (key) { return this.load()[key] || null; },

    save: function (key, score, marks) {
      try {
        var all = this.load();
        all[key] = { score: score, marks: marks, at: Date.now() };
        /* Keep the last 60 days; the streak never needs more than that. */
        var keys = Object.keys(all).sort();
        while (keys.length > 60) delete all[keys.shift()];
        localStorage.setItem('dhd.daily', JSON.stringify(all));
      } catch (e) {}
    },

    /* Consecutive days ending today (or yesterday, if today isn't played). */
    streak: function () {
      var all = this.load(), n = 0, d = new Date();
      if (!all[todayKey(d)]) d.setDate(d.getDate() - 1);
      while (all[todayKey(d)]) { n++; d.setDate(d.getDate() - 1); }
      return n;
    }
  };
})();
