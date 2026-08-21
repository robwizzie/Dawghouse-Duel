/* ══════════════════════════════════════════════════════════════
   DHD.Match — deciding whether a typed answer is right.

   The bar: forgiving about how people actually type, strict about
   accepting a different answer. Someone typing "jokic" for Nikola
   Jokić should be right. Someone typing "Green" in a deck holding
   both Draymond and Jalen Green should not be, because we cannot
   tell which one they meant.
   ══════════════════════════════════════════════════════════════ */
window.DHD = window.DHD || {};

DHD.Match = (function () {

  function norm(s) {
    return String(s || '')
      .normalize('NFD').replace(/[̀-ͯ]/g, '')   // drop accents
      .toLowerCase()
      .replace(/&/g, ' and ')
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
  }

  /* "The Riddler" and "Riddler" are the same guess. */
  function bare(s) { return norm(s).replace(/^(the|a|an|dr|mr|mrs|ms|st|sir) /, ''); }
  function tight(s) { return bare(s).replace(/ /g, ''); }

  function distance(a, b) {
    if (a === b) return 0;
    if (!a.length) return b.length;
    if (!b.length) return a.length;
    var prev = [], cur = [], i, j;
    for (j = 0; j <= b.length; j++) prev[j] = j;
    for (i = 1; i <= a.length; i++) {
      cur[0] = i;
      for (j = 1; j <= b.length; j++) {
        cur[j] = Math.min(
          prev[j] + 1,
          cur[j - 1] + 1,
          prev[j - 1] + (a.charAt(i - 1) === b.charAt(j - 1) ? 0 : 1)
        );
      }
      for (j = 0; j <= b.length; j++) prev[j] = cur[j];
    }
    return prev[b.length];
  }

  /* Typos scale with length; a four-letter answer gets no slack at all. */
  function slack(len) {
    if (len <= 4) return 0;
    if (len <= 7) return 1;
    if (len <= 11) return 2;
    return 3;
  }

  /* Every spelling of this answer we will take. */
  function formsFor(item) {
    var out = [item.name].concat(item.alt || []);
    return out.map(tight).filter(Boolean);
  }

  /* Words distinctive enough to stand alone — a surname, or the first
     word of something like "SpongeBob SquarePants". Short and common
     words are excluded because they collide. */
  var COMMON = /^(the|of|and|man|boy|girl|king|queen|lord|doctor|captain|mr|miss|jr|sr|ii|iii|von|van|de|da|la|le|el|dog|cat|bear|red|blue|black|white|green|star|super|kid|baby|little|big|young|old|new|san|los)$/;

  function tokensFor(item) {
    var seen = {}, out = [];
    [item.name].concat(item.alt || []).forEach(function (form) {
      bare(form).split(' ').forEach(function (w) {
        if (w.length < 4 || COMMON.test(w)) return;
        if (!seen[w]) { seen[w] = 1; out.push(w); }
      });
    });
    return out;
  }

  /* Tokens shared by two or more answers in this deck can't identify one. */
  function buildIndex(items) {
    var count = Object.create(null);
    items.forEach(function (it) {
      tokensFor(it).forEach(function (t) { count[t] = (count[t] || 0) + 1; });
    });
    return count;
  }

  return {
    norm: norm,
    index: buildIndex,

    /**
     * @param {string} typed      what the player wrote
     * @param {object} item       the answer on screen
     * @param {object} tokenIndex from index(deck) — for uniqueness
     * @returns {'exact'|'close'|'partial'|false}
     */
    check: function (typed, item, tokenIndex) {
      var t = tight(typed);
      if (t.length < 2) return false;

      var forms = formsFor(item);
      var i;

      for (i = 0; i < forms.length; i++) if (t === forms[i]) return 'exact';

      for (i = 0; i < forms.length; i++) {
        var ref = forms[i];
        var allow = slack(Math.max(ref.length, t.length));
        if (allow && Math.abs(ref.length - t.length) <= allow && distance(t, ref) <= allow) return 'close';
      }

      // A single distinctive word, but only if nothing else in the deck owns it.
      var typedWord = bare(typed);
      if (typedWord.indexOf(' ') === -1) {
        var toks = tokensFor(item);
        for (i = 0; i < toks.length; i++) {
          if (toks[i] !== typedWord) continue;
          if (!tokenIndex || tokenIndex[toks[i]] === 1) return 'partial';
        }
      }
      return false;
    }
  };
})();
