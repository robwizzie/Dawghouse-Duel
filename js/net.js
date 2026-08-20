/* ══════════════════════════════════════════════════════════════
   DHD.Net — how the duel screen and the host talk.

   Two paths, always both live:
     · BroadcastChannel — the host window on the same machine.
       Zero setup, zero latency, works with no internet at all.
     · The relay — the host on a phone, paired by room code.

   Anything sent goes out on both. Anything arriving on either is
   handed to the same callback. The duel screen never depends on
   the relay being up: lose the network mid-duel and the game keeps
   running, the phone just reconnects when it can.
   ══════════════════════════════════════════════════════════════ */
window.DHD = window.DHD || {};

DHD.Net = (function () {
  var CHANNEL = 'dawghouse-duel';
  var ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';   // no O/0/I/1 to read out loud
  var CODE_LEN = 4;

  var cfg = window.DHD_CONFIG || {};
  var role = 'duel', room = null;
  var chan = null, sock = null;
  var onMessage = function () {}, onStatus = function () {};
  var status = 'local', peers = { duel: false, hosts: 0 };
  var retry = 0, retryTimer = 0, closing = false;

  function setStatus(s) {
    if (s === status) return;
    status = s;
    try { onStatus(status, peers); } catch (e) {}
  }

  function newCode() {
    var out = '', bytes;
    try {
      bytes = new Uint8Array(CODE_LEN);
      crypto.getRandomValues(bytes);
    } catch (e) {
      bytes = null;
    }
    for (var i = 0; i < CODE_LEN; i++) {
      var n = bytes ? bytes[i] : Math.floor(Math.random() * 256);
      out += ALPHABET[n % ALPHABET.length];
    }
    return out;
  }

  function clean(code) {
    return String(code || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 12);
  }

  /* ── relay socket ── */
  function openSocket() {
    if (!cfg.relay || !room) { setStatus('local'); return; }
    closing = false;
    try {
      sock = new WebSocket(cfg.relay.replace(/\/+$/, '') + '/room/' + room + '?role=' + role);
    } catch (e) {
      setStatus('offline');
      return scheduleRetry();
    }
    setStatus(retry ? 'connecting' : 'connecting');

    sock.onopen = function () {
      retry = 0;
      setStatus('online');
    };
    sock.onmessage = function (ev) {
      var msg;
      try { msg = JSON.parse(ev.data); } catch (e) { return; }
      if (!msg) return;
      if (msg.from === 'relay') {
        peers = { duel: !!msg.duel, hosts: msg.hosts || 0 };
        try { onStatus(status, peers); } catch (e) {}
        return;
      }
      onMessage(msg);
    };
    sock.onerror = function () { /* onclose always follows */ };
    sock.onclose = function () {
      sock = null;
      if (closing) return;
      setStatus('offline');
      scheduleRetry();
    };
  }

  function scheduleRetry() {
    clearTimeout(retryTimer);
    var wait = Math.min(1000 * Math.pow(1.7, retry++), 15000);
    retryTimer = setTimeout(openSocket, wait);
  }

  return {
    newCode: newCode,
    clean: clean,

    /** Persisted so a reload during filming keeps the same code. */
    rememberedRoom: function () {
      try { return clean(localStorage.getItem('dhd.room')) || null; } catch (e) { return null; }
    },
    remember: function (code) {
      try { localStorage.setItem('dhd.room', clean(code)); } catch (e) {}
    },

    start: function (opts) {
      role = opts.role || 'duel';
      onMessage = opts.onMessage || onMessage;
      onStatus = opts.onStatus || onStatus;

      if (!chan) {
        try {
          chan = new BroadcastChannel(CHANNEL);
          chan.onmessage = function (e) { if (e.data) onMessage(e.data); };
        } catch (e) { chan = null; }
      }
      // Same-origin fallback for browsers without BroadcastChannel.
      if (!chan && !DHD.Net._storageBound) {
        DHD.Net._storageBound = true;
        window.addEventListener('storage', function (e) {
          if (e.key !== CHANNEL + '.msg' || !e.newValue) return;
          try { onMessage(JSON.parse(e.newValue)); } catch (err) {}
        });
      }

      if (opts.room) this.join(opts.room);
      else setStatus('local');
    },

    join: function (code) {
      var next = clean(code);
      if (!next) return;
      if (next === room && sock && sock.readyState <= 1) return;
      this.leave();
      room = next;
      this.remember(room);
      openSocket();
    },

    leave: function () {
      closing = true;
      clearTimeout(retryTimer);
      retry = 0;
      if (sock) { try { sock.close(); } catch (e) {} sock = null; }
      room = null;
      peers = { duel: false, hosts: 0 };
      setStatus('local');
    },

    send: function (msg) {
      if (chan) { try { chan.postMessage(msg); } catch (e) {} }
      else { try { localStorage.setItem(CHANNEL + '.msg', JSON.stringify(msg)); } catch (e) {} }
      if (sock && sock.readyState === 1) { try { sock.send(JSON.stringify(msg)); } catch (e) {} }
    },

    room: function () { return room; },
    status: function () { return status; },
    peers: function () { return peers; },
    configured: function () { return !!cfg.relay; },
    hostUrl: function () { return cfg.hostUrl || (location.host + '/host'); }
  };
})();
