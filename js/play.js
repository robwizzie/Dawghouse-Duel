/* ══════════════════════════════════════════════════════════════
   Player 2's screen.

   The duel runs on the other machine and stays the only authority.
   This renders whatever that machine broadcasts and sends back one
   thing: what got typed. Clocks are interpolated locally between
   frames so the tenths still move smoothly.

   What this page never receives is the answer. The relay routes
   host frames and player frames separately for exactly that reason.
   ══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var Net = DHD.Net;

  var el = {
    join: $('join'), joinForm: $('joinForm'), joinCode: $('joinCode'),
    joinName: $('joinName'), joinState: $('joinState'),
    cat: $('pCat'), progress: $('pProgress'), total: $('pTotal'),
    img: $('pImg'), card: $('pCard'),
    reveal: $('pReveal'), revealEyebrow: $('pRevealEyebrow'), revealName: $('pRevealName'),
    rally: $('pRally'), rallyNum: $('pRallyNum'), rallyWho: $('pRallyWho'),
    bar: $('pAnswerBar'), input: $('pInput'), who: $('pWho'), pass: $('pPass'),
    status: $('pStatus'), result: $('pResult'),
    resultLabel: $('pResultLabel'), resultName: $('pResultName'), resultLine: $('pResultLine')
  };
  var pods = [0, 1].map(function (i) {
    return {
      root: $('pPod' + i), name: $('pName' + i),
      clock: $('pClock' + i), bar: $('pBar' + i), right: $('pRight' + i)
    };
  });

  /* Last authoritative frame plus when it landed, so the clock can run on
     between updates instead of stepping eight times a second. */
  var S = null, stampedAt = 0, raf = 0;
  var MY_SEAT = 1;   // whoever joins is always the right-hand pod

  function fmt(ms) { return (Math.max(0, ms) / 1000).toFixed(1); }

  function liveMs(i) {
    if (!S) return 0;
    var base = S.players[i].ms;
    if (S.phase !== 'live' || S.active !== i) return base;
    return Math.max(0, base - (performance.now() - stampedAt));
  }

  function paint() {
    if (!S) return;
    for (var i = 0; i < 2; i++) {
      var ms = liveMs(i);
      pods[i].clock.textContent = fmt(ms);
      pods[i].bar.style.transform = 'scaleX(' + Math.max(0, ms / (S.startMs || 45000)) + ')';
      pods[i].root.classList.toggle('is-active', S.active === i && S.phase !== 'over');
      pods[i].root.classList.toggle('is-warn', ms <= 10000 && ms > 5000);
      pods[i].root.classList.toggle('is-danger', ms <= 5000 && ms > 0);
    }
    raf = requestAnimationFrame(paint);
  }

  function render(s) {
    var fresh = !S || s.idx !== S.idx || s.image !== S.image;
    S = s;
    stampedAt = performance.now();

    el.cat.textContent = s.cat || '—';
    el.progress.textContent = (s.idx || 0) + 1;
    el.total.textContent = s.total || 1;

    for (var i = 0; i < 2; i++) {
      pods[i].name.textContent = s.players[i].name + (i === MY_SEAT ? ' (you)' : '');
      pods[i].right.textContent = s.players[i].right;
    }

    if (fresh) {
      if (s.image) { el.img.src = s.image; el.img.hidden = false; el.card.hidden = true; }
      else { el.img.hidden = true; el.card.hidden = false; }
      el.input.value = '';
    }

    el.rally.hidden = false;
    el.rallyWho.textContent = (s.rallyWho || '') + "'S RALLY";
    el.rallyNum.textContent = s.rally || 0;
    el.rally.classList.toggle('is-hot', (s.rally || 0) >= 5);

    if (s.revealName) {
      el.reveal.className = 'reveal reveal--' + (s.revealKind || 'yes');
      el.revealEyebrow.textContent = s.revealEyebrow || '';
      el.revealName.textContent = s.revealName;
      el.reveal.hidden = false;
    } else {
      el.reveal.hidden = true;
    }

    var myTurn = s.active === MY_SEAT && s.phase === 'live';
    el.bar.classList.toggle('is-idle', !myTurn);
    el.who.textContent = myTurn ? 'YOUR TURN' : 'THEIR TURN';
    el.input.placeholder = myTurn ? 'type your answer' : 'waiting…';
    if (myTurn) { try { el.input.focus({ preventScroll: true }); } catch (e) {} }

    if (s.phase === 'over') {
      el.resultLabel.textContent = 'WINNER';
      el.resultName.textContent = s.winnerName || '';
      el.resultLine.textContent = s.cat || '';
      el.result.hidden = false;
    } else {
      el.result.hidden = true;
    }
  }

  /* ── link ── */
  function onMessage(m) {
    if (!m || m.from !== 'duel') return;
    /* The relay filters by audience, but the same-machine channel does not,
       so drop anything not addressed to players. The host frame carries the
       answer and this screen must never act on it. */
    if (m.to && m.to !== 'player') return;
    document.body.classList.add('paired');
    if (!seenFrame) { seenFrame = true; onStatus(); }
    render(m);
    if (!raf) raf = requestAnimationFrame(paint);
  }

  var seenFrame = false;

  function onStatus() {
    var st = Net.status(), peers = Net.peers(), room = Net.room();
    var label, cls;
    if (seenFrame && st !== 'online') { label = 'connected on this machine'; cls = 'on'; }
    else if (!room) { label = 'not connected'; cls = 'off'; }
    else if (st === 'online') { label = peers.duel ? 'connected · room ' + room : 'waiting for the other screen'; cls = peers.duel ? 'on' : ''; }
    else if (st === 'connecting') { label = 'connecting…'; cls = ''; }
    else { label = 'no connection — check the code'; cls = 'off'; }
    el.joinState.textContent = label;
    el.joinState.className = 'join__state is-' + (cls === 'on' ? 'on' : cls === 'off' ? 'off' : 'wait');
    el.status.innerHTML = '<span class="' + cls + '">' + label + '</span>';
  }

  function send(cmd, extra) {
    var msg = { from: 'player', cmd: cmd, to: 'host', t: Date.now() };
    if (extra) for (var k in extra) msg[k] = extra[k];
    /* Commands are for the duel screen, which listens to everything. */
    delete msg.to;
    Net.send(msg);
  }

  el.joinForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var code = Net.clean(el.joinCode.value);
    if (code.length < 4) { el.joinState.textContent = 'that code is too short'; return; }
    Net.join(code);
    location.hash = code;
    send('hello', { name: (el.joinName.value || 'PLAYER 2').trim().toUpperCase().slice(0, 14) });
    onStatus();
  });
  el.joinCode.addEventListener('input', function () { el.joinCode.value = Net.clean(el.joinCode.value); });

  el.bar.addEventListener('submit', function (e) {
    e.preventDefault();
    var typed = el.input.value.trim();
    if (!typed || !S || S.active !== MY_SEAT || S.phase !== 'live') return;
    send('answer', { text: typed });
    el.input.value = '';
  });
  el.pass.addEventListener('click', function () {
    if (!S || S.active !== MY_SEAT || S.phase !== 'live') return;
    send('pass');
  });

  function codeFromUrl() {
    var h = (location.hash || '').replace('#', '');
    var q = new URLSearchParams(location.search).get('room') || '';
    return Net.clean(h || q);
  }

  Net.start({ role: 'player', room: codeFromUrl() || null, onMessage: onMessage, onStatus: onStatus });
  if (codeFromUrl()) el.joinCode.value = codeFromUrl();
  onStatus();

  setInterval(function () { if (Net.room()) send('hello'); }, 3000);
})();
