/* ══════════════════════════════════════════════════════════════
   Host control window.

   Runs in its own window so the answer key is never on the screen
   the dawgs are reading. Talks to the duel screen over a
   BroadcastChannel (same browser, same origin), falling back to
   localStorage events where that isn't available.
   ══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  var el = {
    cat: $('cat'), count: $('count'), thumb: $('thumb'),
    answer: $('answer'), alts: $('alts'), show: $('show'), next: $('next'),
    status: $('status'), phase: $('phase'),
    wrongCost: $('wrongCost'), passCost: $('passCost'), pauseLabel: $('pauseLabel')
  };
  var cl = [0, 1].map(function (i) {
    return { root: $('cl' + i), name: $('cl' + i + 'Name'), clock: $('cl' + i + 'Clock') };
  });

  var join = {
    root: $('join'), form: $('joinForm'), code: $('joinCode'),
    go: $('joinForm') && $('joinForm').querySelector('.join__go'),
    state: $('joinState'), hdrRoom: $('hdrRoom'), leave: $('leave')
  };

  var Net = DHD.Net;
  var lastSeen = 0, lastPhase = '';

  function send(cmd) { Net.send({ from: 'host', cmd: cmd, t: Date.now() }); }

  var wasHearing = false;
  function onIncoming(m) {
    if (!m || m.from !== 'duel') return;
    if (m.to && m.to !== 'host') return;   // player frames are redacted; ignore them
    lastSeen = Date.now();
    document.body.classList.add('paired');
    if (!wasHearing) { wasHearing = true; onStatus(); }
    render(m);
  }

  function onStatus() {
    var st = Net.status(), peers = Net.peers(), room = Net.room();
    var solo = !room;
    document.body.classList.toggle('solo', solo);
    join.hdrRoom.textContent = room || '';

    var label, cls;
    var hearing = Date.now() - lastSeen < 3000;
    if (solo && hearing)          { label = 'same computer'; cls = 'on'; }
    else if (solo)                { label = 'enter the code from the duel screen'; cls = 'wait'; }
    else if (st === 'online')     { label = peers.duel ? 'connected to the duel screen' : 'waiting for the duel screen'; cls = peers.duel ? 'on' : 'wait'; }
    else if (st === 'connecting') { label = 'connecting…'; cls = 'wait'; }
    else                          { label = 'no connection — check the code'; cls = 'off'; }

    join.state.textContent = label;
    join.state.className = 'join__state is-' + cls;
    el.status.textContent = label;
    el.status.classList.toggle('live', cls === 'on');
  }

  /* A code in the URL (#WXYZ or ?room=WXYZ) joins straight away, so the code
     can be handed over as a link instead of typed. */
  function codeFromUrl() {
    var h = (location.hash || '').replace('#', '');
    var q = new URLSearchParams(location.search).get('room') || '';
    return Net.clean(h || q);
  }

  Net.start({
    role: 'host',
    room: codeFromUrl() || null,
    onMessage: onIncoming,
    onStatus: onStatus
  });

  if (join.form) {
    join.form.addEventListener('submit', function (e) {
      e.preventDefault();
      var code = Net.clean(join.code.value);
      if (code.length < 4) { join.state.textContent = 'that code is too short'; join.state.className = 'join__state is-off'; return; }
      Net.join(code);
      location.hash = code;
      onStatus();
    });
    join.code.addEventListener('input', function () {
      join.code.value = Net.clean(join.code.value);
    });
  }
  if (join.leave) {
    join.leave.addEventListener('click', function () {
      Net.leave();
      document.body.classList.remove('paired');
      location.hash = '';
      onStatus();
    });
  }

  /* Same machine, no relay: the BroadcastChannel already links the two windows,
     so drop straight into the control view. */
  if (!codeFromUrl() && window.opener) {
    document.body.classList.add('paired');
    Net.leave();
  }
  onStatus();

  /* ── render ── */  /* ── render ── */
  function fmt(ms) { return (Math.max(0, ms) / 1000).toFixed(1); }

  function render(s) {
    var live = s.phase === 'live' || s.phase === 'reveal' || s.phase === 'paused' || s.phase === 'intro';
    document.body.classList.toggle('idle', !live);

    el.cat.textContent = s.cat || '—';
    el.count.textContent = s.total ? (s.idx + 1) + ' / ' + s.total : '';
    el.wrongCost.textContent = '−' + (s.penaltyMs / 1000).toFixed(0) + 's';
    el.passCost.textContent  = '−' + (s.passCostMs / 1000).toFixed(0) + 's';
    el.pauseLabel.textContent = s.phase === 'paused' ? 'RESUME' : 'PAUSE';

    for (var i = 0; i < 2; i++) {
      var p = s.players[i];
      cl[i].name.textContent = p.name;
      cl[i].clock.textContent = fmt(p.ms);
      cl[i].root.classList.toggle('on', s.active === i && s.phase !== 'over');
      cl[i].root.classList.toggle('warn', p.ms <= 10000 && p.ms > 5000);
      cl[i].root.classList.toggle('danger', p.ms <= 5000);
    }

    el.answer.textContent = s.answer || '—';
    el.show.textContent = s.show || '';
    el.alts.innerHTML = '';
    if (s.alts && s.alts.length) {
      el.alts.innerHTML = 'also counts: ' + s.alts.map(function (a) { return '<b>' + a + '</b>'; }).join(' · ');
    }
    el.next.textContent = s.nextAnswer || '—';

    if (s.image) { el.thumb.src = s.image; el.thumb.style.visibility = 'visible'; }
    else el.thumb.style.visibility = 'hidden';

    var acting = s.phase === 'live';
    document.querySelectorAll('.act').forEach(function (b) {
      b.disabled = b.dataset.cmd === 'pause' ? !(s.phase === 'live' || s.phase === 'paused' || s.phase === 'reveal') : !acting;
    });

    if (s.phase !== lastPhase) {
      lastPhase = s.phase;
      el.phase.textContent = ({
        intro: 'counting in…', live: 'live', reveal: 'showing the answer…',
        paused: 'paused', over: 'duel over — ' + (s.winnerName || '') + ' wins'
      })[s.phase] || s.phase;
    }
  }

  /* ── input ── */
  document.querySelectorAll('.act').forEach(function (b) {
    b.addEventListener('click', function () { send(b.dataset.cmd); });
  });

  document.addEventListener('keydown', function (e) {
    if (/^(INPUT|TEXTAREA)$/.test((e.target || {}).tagName || '')) return;
    var map = {
      'Enter': 'correct', 'ArrowRight': 'correct',
      'x': 'wrong', 'X': 'wrong', 'ArrowLeft': 'wrong',
      ' ': 'pass', 'Spacebar': 'pass',
      's': 'skip', 'S': 'skip',
      'p': 'pause', 'P': 'pause'
    };
    var cmd = map[e.key];
    if (!cmd) return;
    e.preventDefault();
    send(cmd);
    var btn = document.querySelector('.act[data-cmd="' + cmd + '"]');
    if (btn && !btn.disabled) {
      btn.style.transform = 'translateY(2px)';
      setTimeout(function () { btn.style.transform = ''; }, 90);
    }
  });

  /* Nudge the duel screen to describe itself, and notice if it goes quiet. */
  send('hello');
  setInterval(function () {
    if (Date.now() - lastSeen > 3000) {
      document.body.classList.add('idle');
      if (wasHearing) { wasHearing = false; onStatus(); }
      send('hello');
    }
  }, 1500);
})();
