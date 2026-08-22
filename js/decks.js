/* ══════════════════════════════════════════════════════════════
   DHD.Decks — decks people build themselves.

   A custom deck is the same shape the built-in categories are, so
   once it is registered the engine cannot tell the difference. The
   only real difference is where the pictures come from: a built-in
   deck reads assets/categories/<id>/<slug>.jpg, a custom one carries
   its picture on the item as `imgUrl` — a data: URL while it is
   still yours alone, the relay's /img/... once published.

   Local decks live in localStorage. Pictures can be large, so the
   store is capped and a save that would blow the quota fails loudly
   rather than silently dropping the deck.
   ══════════════════════════════════════════════════════════════ */
window.DHD = window.DHD || {};

DHD.Decks = (function () {
  var KEY = 'dhd.decks';
  var MAX_ITEMS = 300;

  function relay() {
    var url = (window.DHD_CONFIG && window.DHD_CONFIG.relay) || '';
    if (!url) return '';
    return url.replace(/^ws/, 'http').replace(/\/$/, '');
  }

  function slugify(text, n) {
    var base = String(text || '').toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return (base || 'item') + '-' + n;
  }

  function load() {
    try {
      var all = JSON.parse(localStorage.getItem(KEY) || '[]');
      return Array.isArray(all) ? all : [];
    } catch (e) { return []; }
  }

  function persist(all) {
    try {
      localStorage.setItem(KEY, JSON.stringify(all));
      return true;
    } catch (e) {
      return false;      // quota — the caller tells the user
    }
  }

  /* The engine's category shape. `custom` marks it so the UI can offer
     edit and delete on it, which makes no sense for a shipped deck. */
  function toCategory(deck) {
    var items = (deck.items || []).slice(0, MAX_ITEMS).map(function (it, n) {
      var row = {
        slug: it.slug || slugify(it.answer, n),
        name: it.answer,
        alt: it.alt || [],
        note: deck.name,
        tier: 'mid',
        clue: it.clue || ''
      };
      if (it.prompt) row.prompt = it.prompt;
      if (it.imgUrl) row.imgUrl = it.imgUrl;
      return row;
    });
    return {
      id: deck.id,
      name: deck.name,
      blurb: deck.blurb || '',
      custom: true,
      code: deck.code || null,
      text: items.every(function (i) { return !i.imgUrl; }),
      cover: deck.cover || (items[0] && items[0].imgUrl) || null,
      items: items
    };
  }

  /* Which way this browser voted on each deck, so the buttons can show
     their state and a change of mind sends one balanced delta. */
  var VOTE_KEY = 'dhd.deckvotes';
  function votes() {
    try { return JSON.parse(localStorage.getItem(VOTE_KEY) || '{}') || {}; }
    catch (e) { return {}; }
  }
  function rememberVote(code, v) {
    var all = votes();
    if (v) all[code] = v; else delete all[code];
    try { localStorage.setItem(VOTE_KEY, JSON.stringify(all)); } catch (e) {}
  }

  return {
    MAX_ITEMS: MAX_ITEMS,

    myVote: function (code) { return votes()[code] || 0; },

    stats: function (code) {
      var base = relay();
      if (!base || !code) return Promise.resolve(null);
      return fetch(base + '/deck/' + encodeURIComponent(code) + '/stats')
        .then(function (r) { return r.ok ? r.json() : null; })
        .catch(function () { return null; });
    },

    /* Fire-and-forget: a play that fails to register is not worth
       interrupting the game for. */
    played: function (code) {
      var base = relay();
      if (!base || !code) return;
      fetch(base + '/deck/' + encodeURIComponent(code) + '/played', { method: 'POST' })
        .catch(function () {});
    },

    /* `want` is 1, -1, or 0 to take a vote back. Returns the new totals. */
    vote: function (code, want) {
      var base = relay();
      if (!base || !code) return Promise.reject(new Error('No relay configured'));
      var had = votes()[code] || 0;
      if (want === had) want = 0;                 // pressing it again undoes it
      var up = (want === 1 ? 1 : 0) - (had === 1 ? 1 : 0);
      var down = (want === -1 ? 1 : 0) - (had === -1 ? 1 : 0);
      if (!up && !down) return Promise.resolve(null);
      return fetch(base + '/deck/' + encodeURIComponent(code) +
                   '/vote?up=' + up + '&down=' + down, { method: 'POST' })
        .then(function (r) {
          if (!r.ok) throw new Error('vote failed');
          return r.json();
        })
        .then(function (out) { rememberVote(code, want); out.mine = want; return out; });
    },

    all: load,

    get: function (id) {
      return load().filter(function (d) { return d.id === id; })[0] || null;
    },

    /* Save (or replace) a deck locally. Returns false when the browser's
       storage is full — usually a deck of large photographs. */
    save: function (deck) {
      var all = load().filter(function (d) { return d.id !== deck.id; });
      all.push(deck);
      return persist(all);
    },

    remove: function (id) {
      return persist(load().filter(function (d) { return d.id !== id; }));
    },

    newId: function () {
      return 'custom-' + Math.random().toString(36).slice(2, 9);
    },

    toCategory: toCategory,

    categories: function () {
      return load().map(toCategory);
    },

    /* ── the relay ─────────────────────────────────────────────
       Publishing uploads every local picture, then the deck itself.
       `onProgress(done, total)` drives the button's label. */
    publish: function (deck, onProgress) {
      var base = relay();
      if (!base) return Promise.reject(new Error('No relay configured — see js/config.js'));

      var items = (deck.items || []).slice(0, MAX_ITEMS);
      var pictures = items.filter(function (i) { return i.imgUrl && /^data:/.test(i.imgUrl); });
      var done = 0;
      if (onProgress) onProgress(0, pictures.length);

      function upload(item) {
        return fetch(item.imgUrl).then(function (r) { return r.blob(); }).then(function (blob) {
          return fetch(base + '/deck/img', {
            method: 'POST',
            headers: { 'content-type': blob.type || 'image/jpeg' },
            body: blob
          });
        }).then(function (r) {
          if (!r.ok) return r.json().catch(function () { return {}; }).then(function (b) {
            throw new Error(b.error || ('upload failed (' + r.status + ')'));
          });
          return r.json();
        }).then(function (out) {
          item.__key = out.key;
          done++;
          if (onProgress) onProgress(done, pictures.length);
        });
      }

      /* One at a time: a phone on a hotel wifi does not thank you for
         thirty parallel uploads, and the progress count stays honest. */
      var chain = Promise.resolve();
      pictures.forEach(function (it) { chain = chain.then(function () { return upload(it); }); });

      return chain.then(function () {
        var body = {
          name: deck.name,
          blurb: deck.blurb || '',
          items: items.map(function (it) {
            var row = { answer: it.answer };
            if (it.alt && it.alt.length) row.alt = it.alt;
            if (it.prompt) row.prompt = it.prompt;
            if (it.__key) row.img = it.__key;
            else if (it.imgUrl && !/^data:/.test(it.imgUrl)) {
              var tail = it.imgUrl.split('/img/')[1];
              if (tail) row.img = tail;
            }
            return row;
          })
        };
        return fetch(base + '/deck', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(body)
        });
      }).then(function (r) {
        if (!r.ok) return r.json().catch(function () { return {}; }).then(function (b) {
          throw new Error(b.error || ('publish failed (' + r.status + ')'));
        });
        return r.json();
      }).then(function (out) {
        items.forEach(function (it) {
          if (it.__key) { it.imgUrl = base + '/img/' + it.__key; delete it.__key; }
        });
        deck.code = out.code;
        return out.code;
      });
    },

    /* Pull a published deck down by its code and turn it into something
       playable. The pictures stay on the relay — they are not copied
       into this browser's storage. */
    fetchCode: function (code) {
      var base = relay();
      if (!base) return Promise.reject(new Error('No relay configured — see js/config.js'));
      return fetch(base + '/deck/' + encodeURIComponent(code)).then(function (r) {
        if (!r.ok) return r.json().catch(function () { return {}; }).then(function (b) {
          throw new Error(b.error || 'no deck with that code');
        });
        return r.json();
      }).then(function (raw) {
        return {
          id: 'shared-' + String(raw.code || code).toUpperCase(),
          name: raw.name,
          blurb: raw.blurb || '',
          code: String(raw.code || code).toUpperCase(),
          shared: true,
          items: (raw.items || []).map(function (it, n) {
            return {
              slug: slugify(it.answer, n),
              answer: it.answer,
              alt: it.alt || [],
              prompt: it.prompt || '',
              imgUrl: it.img ? base + '/img/' + it.img : ''
            };
          })
        };
      });
    }
  };
})();
