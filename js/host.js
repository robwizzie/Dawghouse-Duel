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
    answer: $('answer'), alts: $('alts'), next: $('next'), status: $('status'),
    wrongCost: $('wrongCost'), passCost: $('passCost'), pauseLabel: $('pauseLabel')
  };
  var cl = [0, 1].map(function (i) {
    return { root: $('cl' + i), name: $('cl' + i + 'Name'), clock: $('cl' + i + 'Clock') };
  });

  /* ── link ── */
  var NAME = 'dawghouse-duel';
  var chan = null;
  try { chan = new BroadcastChannel(NAME); } catch (e) { chan = null; }

  function send(cmd) {
    var msg = { from: 'host', cmd: cmd, t: Date.now() };
    if (chan) chan.postMessage(msg);
    else { try { localStorage.setItem(NAME + '.cmd', JSON.stringify(msg)); } catch (e) {} }
  }

  function onState(s) {
    if (!s || s.from !== 'duel') return;
    lastSeen = Date.now();
    render(s);
  }

  if (chan) chan.onmessage = function (e) { onState(e.data); };
  window.addEventListener('storage', function (e) {
    if (e.key === NAME + '.state' && e.newValue) {
      try { onState(JSON.parse(e.newValue)); } catch (err) {}
    }
  });

  /* ── render ── */
  var lastSeen = 0, lastPhase = '';

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
      el.status.textContent = ({
        intro: 'counting in…', live: 'live', reveal: 'showing the answer…',
        paused: 'paused', over: 'duel over — ' + (s.winnerName || '') + ' wins',
        idle: 'waiting for the duel screen…'
      })[s.phase] || s.phase;
      el.status.classList.toggle('live', s.phase === 'live');
    }
  }

  /* ── input ── */
  document.querySelectorAll('.act').forEach(function (b) {
    b.addEventListener('click', function () { send(b.dataset.cmd); });
  });

  document.addEventListener('keydown', function (e) {
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
    if (btn && !btn.disabled) { btn.style.transform = 'translateY(2px)'; setTimeout(function () { btn.style.transform = ''; }, 90); }
  });

  /* Nudge the duel window to describe itself, and notice if it goes away. */
  send('hello');
  setInterval(function () {
    if (Date.now() - lastSeen > 2500) {
      document.body.classList.add('idle');
      el.status.textContent = 'duel screen not responding — is the main window still open?';
      el.status.classList.remove('live');
      send('hello');
    }
  }, 1500);
})();
