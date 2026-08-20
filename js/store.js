/* ══════════════════════════════════════════════════════════════
   DHD.Store — where duel images come from.

   Resolution order for any answer:
     1. an image dropped into the app   (IndexedDB, survives reloads)
     2. assets/categories/<cat>/<slug>.<ext>   (drop-in folder)
     3. null → the board falls back to a typographic clue card

   Which folder files exist is probed once and remembered in
   localStorage, so a shoot-day reload doesn't re-fire 400 x 404.
   ══════════════════════════════════════════════════════════════ */
window.DHD = window.DHD || {};

DHD.Store = (function () {
  var DB_NAME = 'dawghouse-duel', DB_VER = 1, TABLE = 'images';
  var LS_KEY = 'dhd.folderScan.v1';
  var EXTS = ['jpg', 'png', 'jpeg', 'webp', 'avif', 'svg', 'gif'];
  var MAX_EDGE = 1600, JPEG_Q = 0.86, SCAN_CONCURRENCY = 8;

  var dbPromise = null;
  var known = Object.create(null);       // "cat/slug" -> ext | ''   (folder scan result)
  var hasUpload = Object.create(null);   // "cat/slug" -> true
  var uploadData = Object.create(null);  // "cat/slug" -> dataURL
  var resolvedUrl = Object.create(null); // "cat/slug" -> url | null
  var manifested = Object.create(null);  // cat -> true once index.json has been applied

  /* ── IndexedDB, degrading to folder-only if it isn't available ── */
  function db() {
    if (dbPromise) return dbPromise;
    dbPromise = new Promise(function (res) {
      try {
        var req = indexedDB.open(DB_NAME, DB_VER);
        req.onupgradeneeded = function () {
          if (!req.result.objectStoreNames.contains(TABLE)) req.result.createObjectStore(TABLE);
        };
        req.onsuccess = function () { res(req.result); };
        req.onerror = req.onblocked = function () { res(null); };
      } catch (e) { res(null); }
    });
    return dbPromise;
  }
  function tx(mode, fn) {
    return db().then(function (d) {
      if (!d) return null;
      return new Promise(function (res) {
        try {
          var r = fn(d.transaction(TABLE, mode).objectStore(TABLE));
          r.onsuccess = function () { res(r.result); };
          r.onerror = function () { res(null); };
        } catch (e) { res(null); }
      });
    });
  }
  var idbGet  = function (k)    { return tx('readonly',  function (s) { return s.get(k); }); };
  var idbSet  = function (k, v) { return tx('readwrite', function (s) { return s.put(v, k); }); };
  var idbDel  = function (k)    { return tx('readwrite', function (s) { return s.delete(k); }); };
  var idbKeys = function ()     { return tx('readonly',  function (s) { return s.getAllKeys(); }); };

  function key(cat, slug) { return cat + '/' + slug; }
  function folderUrl(cat, slug, ext) {
    return 'assets/categories/' + cat + '/' + encodeURIComponent(slug) + '.' + ext;
  }
  function probe(url) {
    return new Promise(function (res) {
      var img = new Image();
      img.onload = function () { res(img.naturalWidth > 0); };
      img.onerror = function () { res(false); };
      img.src = url;
    });
  }
  function persistScan() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(known)); } catch (e) {}
  }

  /* Downscale on the way in — a 100-image category shouldn't cost 400MB. */
  function fileToDataURL(file) {
    return new Promise(function (res, rej) {
      if (!/^image\//.test(file.type)) return rej(new Error('not an image'));
      var fr = new FileReader();
      fr.onerror = function () { rej(new Error('could not read file')); };
      fr.onload = function () {
        var img = new Image();
        img.onerror = function () { rej(new Error('could not decode image')); };
        img.onload = function () {
          var w = img.naturalWidth, h = img.naturalHeight;
          var scale = Math.min(1, MAX_EDGE / Math.max(w, h));
          if (scale === 1 && file.size < 400 * 1024) return res(fr.result);
          var c = document.createElement('canvas');
          c.width = Math.max(1, Math.round(w * scale));
          c.height = Math.max(1, Math.round(h * scale));
          var ctx = c.getContext('2d');
          ctx.imageSmoothingQuality = 'high';
          ctx.drawImage(img, 0, 0, c.width, c.height);
          try { res(c.toDataURL(/png|webp|gif/.test(file.type) ? 'image/png' : 'image/jpeg', JPEG_Q)); }
          catch (e) { res(fr.result); }
        };
        img.src = fr.result;
      };
      fr.readAsDataURL(file);
    });
  }

  /* "Black Panther (1).JPG" → "black-panther" */
  function slugify(s) {
    return String(s)
      .replace(/\.[a-z0-9]+$/i, '')
      .replace(/[''`]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
  /* Loose form for matching a dropped filename to an answer. */
  function loose(s) { return slugify(s).replace(/-?\d+$/, '').replace(/^(the|a)-/, '').replace(/-/g, ''); }

  function pool(tasks, limit) {
    return new Promise(function (done) {
      var out = new Array(tasks.length), i = 0, finished = 0;
      if (!tasks.length) return done(out);
      function launch() {
        if (i >= tasks.length) return;
        var n = i++;
        tasks[n]().then(function (r) {
          out[n] = r;
          if (++finished === tasks.length) return done(out);
          launch();
        });
      }
      for (var s = 0; s < Math.min(limit, tasks.length); s++) launch();
    });
  }

  var API = {
    slugify: slugify,
    loose: loose,

    /* An optional assets/categories/<cat>/index.json lists what is actually
       in the folder, which turns ~700 blind extension probes into one fetch.
       Regenerate it with tools/build-manifest.sh. Absent is fine — the app
       falls back to probing. */
    loadManifest: function (cat) {
      if (manifested[cat] || typeof fetch !== 'function') return Promise.resolve(false);
      return fetch('assets/categories/' + cat + '/index.json', { cache: 'no-store' })
        .then(function (r) { return r.ok ? r.json() : null; })
        .catch(function () { return null; })
        .then(function (data) {
          var files = data && (data.files || data);
          if (!Array.isArray(files)) return false;
          var found = Object.create(null);
          files.forEach(function (f) {
            var m = /^(.*)\.([a-z0-9]+)$/i.exec(String(f));
            if (m && EXTS.indexOf(m[2].toLowerCase()) !== -1) found[m[1]] = m[2].toLowerCase();
          });
          manifested[cat] = found;
          Object.keys(found).forEach(function (slug) {
            var k = cat + '/' + slug;
            if (known[k] !== found[slug]) { known[k] = found[slug]; delete resolvedUrl[k]; }
          });
          persistScan();
          return true;
        });
    },

    init: function (catIds) {
      try {
        var raw = localStorage.getItem(LS_KEY);
        if (raw) known = JSON.parse(raw) || Object.create(null);
      } catch (e) { known = Object.create(null); }
      var self = this;
      return idbKeys().then(function (keys) {
        (keys || []).forEach(function (k) { hasUpload[k] = true; });
        return Promise.all((catIds || []).map(function (c) { return self.loadManifest(c); }));
      }).then(function () { return true; });
    },

    /** Sync: does this answer have artwork we already know about? */
    hasArt: function (cat, slug) {
      var k = key(cat, slug);
      return !!hasUpload[k] || !!known[k];
    },

    source: function (cat, slug) {
      var k = key(cat, slug);
      return hasUpload[k] ? 'upload' : (known[k] ? 'folder' : null);
    },

    /** Async: final URL for an answer, or null. Memoised. */
    resolve: function (cat, item) {
      var k = key(cat, item.slug);
      if (k in resolvedUrl) return Promise.resolve(resolvedUrl[k]);

      var afterUpload = hasUpload[k]
        ? (uploadData[k] ? Promise.resolve(uploadData[k])
                         : idbGet(k).then(function (v) { if (v) uploadData[k] = v; return v || null; }))
        : Promise.resolve(null);

      return afterUpload.then(function (up) {
        if (up) { resolvedUrl[k] = up; return up; }
        if (known[k]) { resolvedUrl[k] = folderUrl(cat, item.slug, known[k]); return resolvedUrl[k]; }
        if (known[k] === '') { resolvedUrl[k] = null; return null; }
        if (manifested[cat]) { known[k] = ''; resolvedUrl[k] = null; return null; }
        var i = 0;
        return (function next() {
          if (i >= EXTS.length) { known[k] = ''; persistScan(); resolvedUrl[k] = null; return null; }
          var ext = EXTS[i++];
          return probe(folderUrl(cat, item.slug, ext)).then(function (ok) {
            if (!ok) return next();
            known[k] = ext; persistScan();
            resolvedUrl[k] = folderUrl(cat, item.slug, ext);
            return resolvedUrl[k];
          });
        })();
      });
    },

    /** Warm the browser cache for upcoming items so board swaps are instant. */
    preload: function (cat, items) {
      items.forEach(function (it) {
        if (!it) return;
        API.resolve(cat, it).then(function (url) { if (url) { var i = new Image(); i.src = url; } });
      });
    },

    /** Probe every answer in a category. force=true re-checks the folder. */
    scan: function (cat, items, force) {
      if (force) {
        delete manifested[cat];
        items.forEach(function (it) {
          var k = key(cat, it.slug);
          delete known[k]; delete resolvedUrl[k];
        });
        persistScan();
      }
      return pool(items.map(function (it) {
        return function () {
          return API.resolve(cat, it).then(function (url) {
            return { item: it, url: url, source: API.source(cat, it.slug) };
          });
        };
      }), SCAN_CONCURRENCY);
    },

    save: function (cat, slug, file) {
      var k = key(cat, slug);
      return fileToDataURL(file).then(function (data) {
        return idbSet(k, data).then(function () {
          hasUpload[k] = true; uploadData[k] = data; resolvedUrl[k] = data;
          return data;
        });
      });
    },

    remove: function (cat, slug) {
      var k = key(cat, slug);
      return idbDel(k).then(function () {
        delete hasUpload[k]; delete uploadData[k]; delete resolvedUrl[k];
        return true;
      });
    },

    clearCategory: function (cat) {
      return idbKeys().then(function (keys) {
        var mine = (keys || []).filter(function (k) { return String(k).indexOf(cat + '/') === 0; });
        return Promise.all(mine.map(idbDel)).then(function () {
          mine.forEach(function (k) { delete hasUpload[k]; delete uploadData[k]; delete resolvedUrl[k]; });
          return mine.length;
        });
      });
    }
  };

  return API;
})();
