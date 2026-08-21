/* ══════════════════════════════════════════════════════════════
   DAWG HOUSE DUEL — game engine + stage control

   The rules, straight off the show:
     · Both dawgs get an identical clock (45s standard).
     · One image on screen at a time. Only the dawg with CONTROL
       has a running clock.
     · Correct answer  → next image, same clock keeps burning.
     · Pass            → your clock freezes, theirs starts, and they
                          inherit the exact image you were stuck on.
     · Wrong answers cost nothing but time.
     · First clock to hit 00.0 loses. Other dawg takes the house.
   ══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var Store = DHD.Store, Sfx = DHD.Sfx, Net = DHD.Net, Match = DHD.Match;
  var $ = function (id) { return document.getElementById(id); };
  var html = document.documentElement;

  /* ── DOM ─────────────────────────────────────────────────── */
  var el = {
    setupForm: $('setupForm'), p1Name: $('p1Name'), p2Name: $('p2Name'),
    catSelect: $('catSelect'), clockSelect: $('clockSelect'), firstSelect: $('firstSelect'),
    penaltySelect: $('penaltySelect'), passCostSelect: $('passCostSelect'),
    revealSelect: $('revealSelect'), deckSelect: $('deckSelect'),
    revealModeSelect: $('revealModeSelect'),
    rally: $('rally'), rallyNum: $('rallyNum'), rallyWho: $('rallyWho'),
    resultSolo: $('resultSolo'), soloScore: $('soloScore'), soloBest: $('soloBest'),
    resultLabel: document.querySelector('.result__label'), resultTbl: document.querySelector('.result__tbl'),
    resRematchLabel: document.querySelector('#resRematch'), resNewLabel: document.querySelector('#resNew'),
    flow: document.querySelector('.flow'), flowBack: $('flowBack'), flowNext: $('flowNext'),
    flowDots: $('flowDots'), flowCount: $('flowCount'),
    startFlow: $('startFlow'), quickStart: $('quickStart'), welcomeStats: $('welcomeStats'),
    catGrid: $('catGrid'), catSubtitle: $('catSubtitle'), nameRow: $('nameRow'),
    detailsSub: $('detailsSub'), readySub: $('readySub'), summary: $('summary'), rulesRecap: $('rulesRecap'),
    pairPanel: $('pairPanel'), hostBar: $('hostBar'), answerModeRow: $('answerModeRow'),
    joinGame: $('joinGame'),
    lobby: $('lobby'), lobbyCode: $('lobbyCode'), lobbyUrl: $('lobbyUrl'),
    lobbyCopy: $('lobbyCopy'), lobbyState: $('lobbyState'),
    answerBar: $('answerBar'), answerInput: $('answerInput'), answerWho: $('answerWho'), answerPass: $('answerPass'),
    hostPenalty: $('hostPenalty'), hostPassCost: $('hostPassCost'), passCost: $('passCost'),
    optDeep: $('optDeep'), optSound: $('optSound'), optTick: $('optTick'), optClue: $('optClue'),
    toMedia: $('toMedia'), toHelp: $('toHelp'), soundCheck: $('soundCheck'),
    openHost: $('openHost'), mediaCount: $('mediaCount'),
    pairCode: $('pairCode'), pairUrl: $('pairUrl'), pairState: $('pairState'),
    pairCodeBig: $('pairCodeBig'), pairUrlBig: $('pairUrlBig'), pairStateBig: $('pairStateBig'),
    newCode: $('newCode'),

    duelCat: $('duelCat'), duelProgress: $('duelProgress'), duelTotal: $('duelTotal'),
    boardImg: $('boardImg'), boardCard: $('boardCard'), boardCardClue: $('boardCardClue'),
    boardFlash: $('boardFlash'), boardClue: $('boardClue'), boardPeek: $('boardPeek'),
    reveal: $('reveal'), revealEyebrow: $('revealEyebrow'), revealName: $('revealName'),
    penaltyPop: $('penaltyPop'),
    passBar: $('passBar'), passWho: $('passWho'),

    ovlIntro: $('ovlIntro'), introCat: $('introCat'), introP1: $('introP1'), introP2: $('introP2'),
    introFirst: $('introFirst'), introCount: $('introCount'),
    ovlResult: $('ovlResult'), resultName: $('resultName'), resultLine: $('resultLine'),
    resRematch: $('resRematch'), resNew: $('resNew'),
    ovlPause: $('ovlPause'), ovlHelp: $('ovlHelp'), helpClose: $('helpClose'),

    mediaBack: $('mediaBack'), mediaCat: $('mediaCat'), mediaGrid: $('mediaGrid'),
    mediaCopy: $('mediaCopy'), mediaClear: $('mediaClear'), mediaRescan: $('mediaRescan'), dropAll: $('dropAll'),
    toast: $('toast')
  };
  var pods = [0, 1].map(function (i) {
    return {
      root: $('pod' + i), name: $('pod' + i + 'Name'), clock: $('pod' + i + 'Clock'),
      bar: $('pod' + i + 'Bar'), right: $('pod' + i + 'Right'), pass: $('pod' + i + 'Pass'),
      resRight: $('resRight' + i), resPass: $('resPass' + i), resClock: $('resClock' + i),
      resHead: $('resHead' + i)
    };
  });

  /* ── state ───────────────────────────────────────────────── */
  var CATS = window.DHD_CATEGORIES || [];
  var cfg = {
    catId: (CATS[0] || {}).id, clockMs: 45000, first: 'flip',
    penaltyMs: 3000, passCostMs: 2000, revealMs: 1400, deck: 'images', pictureMode: 'normal', revealSecs: 7, play: 'duel', answers: 'type',
    deep: true, sound: true, tick: true, clue: false, names: ['ROB', 'MIKE']
  };

  var lastImageUrl = null;

  var G = {
    phase: 'idle',           // idle | intro | live | reveal | paused | over
    cat: null, queue: [], idx: 0,
    players: [null, null],
    active: 0, startMs: 45000,
    runStart: 0, lastTickSec: null,
    raf: 0, backstop: 0, peek: false,
    lockUntil: 0, revealTimer: 0, introTimer: 0
  };

  /* ── small helpers ───────────────────────────────────────── */
  function show(screen) { html.setAttribute('data-screen', screen); }
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function fmt(ms) { return (Math.max(0, ms) / 1000).toFixed(1); }
  var toastTimer = 0;
  function toast(msg) {
    el.toast.textContent = msg; el.toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.toast.hidden = true; }, 2200);
  }
  function catById(id) {
    for (var i = 0; i < CATS.length; i++) if (CATS[i].id === id) return CATS[i];
    return CATS[0];
  }
  function pool(cat, deep) {
    return cat.items.filter(function (it) { return deep || it.tier !== 'deep'; });
  }

  /* ══════════════════ THE GUIDED FLOW ══════════════════
     The app began as a tool for one operator who knew the keyboard.
     A stranger arriving from a video knows none of it, so setup is a
     sequence of single questions rather than one dense form. Everything
     with a sensible default hides behind "More options". */
  var STEPS = ['mode', 'category', 'details', 'ready'];
  var stepAt = 0, chosenCat = null;

  /* What this browser has played, per deck. Shown on the gallery so the
     decks stop being interchangeable strangers. */
  function loadStats() {
    try { return JSON.parse(localStorage.getItem('dhd.stats') || '{}') || {}; }
    catch (e) { return {}; }
  }
  function recordPlay(catId, mode, bestRally) {
    try {
      var all = loadStats();
      var row = all[catId] || { duel: 0, solo: 0, rally: 0 };
      row[mode] = (row[mode] || 0) + 1;
      if (bestRally > (row.rally || 0)) row.rally = bestRally;
      all[catId] = row;
      localStorage.setItem('dhd.stats', JSON.stringify(all));
    } catch (e) {}
  }
  function historyLine(catId) {
    var row = loadStats()[catId];
    if (!row || (!row.duel && !row.solo)) return 'Never played';
    var bits = [];
    if (row.duel) bits.push('<b>' + row.duel + '</b> duel' + (row.duel > 1 ? 's' : ''));
    if (row.solo) bits.push('<b>' + row.solo + '</b> solo');
    if (row.rally) bits.push('best rally <b>' + row.rally + '</b>');
    return bits.join(' · ');
  }

  /* One good picture per deck for the category gallery. */
  var COVERS = {
    superheroes: 'spider-man', disney: 'mickey-mouse', animals: 'lion',
    starwars: 'darth-vader', sitcoms: 'michael-scott', videogames: 'mario',
    cartoons: 'spongebob', pokemon: 'pikachu', dogs: 'golden-retriever',
    'nba-today': 'lebron-james', 'nba-goats': 'michael-jordan'
  };

  /* Deliberately no defaults: an option that is already selected reads as a
     recommendation, and the point of the wizard is that the user decides. */
  function clearChoices() {
    document.querySelectorAll('input[name="playmode"], input[name="answermode"]').forEach(function (r) {
      r.checked = false;
    });
    chosenCat = null;
    if (el.catGrid) markChosenCat();
    syncGates();
  }

  function chosen(group) {
    var hit = document.querySelector('input[name="' + group + '"]:checked');
    return hit ? hit.value : null;
  }

  /* Next is only available once this step has an answer. */
  function syncGates() {
    var name = STEPS[stepAt];
    var ok = name === 'mode'     ? !!chosen('playmode')
           : name === 'category' ? !!chosenCat
           : name === 'details'  ? !!chosen('answermode')
           : true;
    el.flowNext.disabled = !ok;
    el.flowNext.textContent = ok ? 'Next →' : 'Choose one to continue';
  }

  function goStep(i) {
    stepAt = Math.max(0, Math.min(STEPS.length - 1, i));
    var name = STEPS[stepAt];
    el.flow.setAttribute('data-step', name);
    el.flowBack.disabled = stepAt === 0;
    el.flowCount.textContent = 'Step ' + (stepAt + 1) + ' of ' + STEPS.length;
    [].forEach.call(el.flowDots.children, function (dot, n) {
      dot.className = n < stepAt ? 'done' : n === stepAt ? 'now' : '';
    });
    if (name === 'details') refreshDetails();
    if (name === 'ready') refreshReady();
    if (name === 'category') refreshCatGrid();
    syncGates();
    try { el.flow.scrollIntoView({ block: 'start' }); } catch (e) {}
  }

  function buildDots() {
    el.flowDots.innerHTML = '';
    STEPS.forEach(function () { el.flowDots.appendChild(document.createElement('li')); });
  }

  /* ── the category gallery ── */
  function refreshCatGrid() {
    if (el.catGrid.childElementCount) {
      [].forEach.call(el.catGrid.children, function (card) {
        var line = card.querySelector('.catcard__history');
        if (line) line.innerHTML = historyLine(card.dataset.cat);
      });
      markChosenCat();
      return;
    }
    CATS.forEach(function (cat) {
      var card = document.createElement('button');
      card.type = 'button';
      card.className = 'catcard';
      card.dataset.cat = cat.id;

      var withArt = cat.items.filter(function (it) { return Store.hasArt(cat.id, it.slug); }).length;
      card.innerHTML =
        '<div class="catcard__art"></div>' +
        (cat.silhouette ? '<span class="catcard__tag">SILHOUETTE</span>' : '') +
        '<div class="catcard__body">' +
          '<span class="catcard__name"></span>' +
          '<span class="catcard__blurb"></span>' +
          '<span class="catcard__count">' + (withArt || cat.items.length) + ' answers</span>' +
          '<span class="catcard__history">' + historyLine(cat.id) + '</span>' +
        '</div>';
      card.querySelector('.catcard__name').textContent = cat.name;
      card.querySelector('.catcard__blurb').textContent = cat.blurb || '';

      var coverSlug = COVERS[cat.id];
      var cover = (coverSlug && cat.items.filter(function (i) { return i.slug === coverSlug; })[0]) || cat.items[0];
      if (cover) {
        Store.resolve(cat.id, cover).then(function (url) {
          if (!url) return;
          var img = new Image();
          img.alt = '';
          img.onload = function () {
            /* Cut-out artwork on a transparent background looks wrong cropped;
               photographs look wrong letterboxed. Decide per picture. */
            if (/\.(png|svg|webp)$/i.test(url) || img.naturalHeight > img.naturalWidth * 1.25) {
              img.classList.add('fit');
            }
          };
          img.src = url;
          card.querySelector('.catcard__art').appendChild(img);
        });
      }

      card.addEventListener('click', function () {
        chosenCat = cat.id;
        el.catSelect.value = cat.id;
        el.catSelect.dispatchEvent(new Event('change'));
        markChosenCat();
        goStep(stepAt + 1);          // picking is the decision; move on
      });
      el.catGrid.appendChild(card);
    });
    markChosenCat();
  }

  function markChosenCat() {
    [].forEach.call(el.catGrid.children, function (card) {
      card.classList.toggle('is-on', !!chosenCat && card.dataset.cat === chosenCat);
    });
  }

  /* ── step 4: only show what this configuration actually needs ── */
  function refreshDetails() {
    var mode = chosen('playmode');
    var solo = mode === 'solo';
    var online = mode === 'online';
    var say = chosen('answermode') === 'say';

    el.nameRow.hidden = solo;
    /* Online play is typed by definition — there is nobody in the room to
       hear you say it, so the choice would be a lie. */
    el.answerModeRow.hidden = online;
    if (online) {
      var typeRadio = document.querySelector('input[name="answermode"][value="type"]');
      if (typeRadio) typeRadio.checked = true;
    }
    el.detailsSub.textContent = solo
      ? 'Your clock, and how the picture arrives.'
      : online
        ? 'Your name and the clock. Answers are typed, since you are in different places.'
        : 'How answers get marked, then names and clock.';
    el.pairPanel.hidden = !say || online;
    refreshPictureModes();
    syncGates();
  }

  /* ── step 5: say back exactly what is about to happen ── */
  function refreshReady() {
    readSetup();
    var cat = catById(cfg.catId);
    var solo = cfg.play === 'solo';
    var online = cfg.play === 'online';
    var typed = cfg.answers === 'type';

    el.readySub.textContent = online
      ? 'You will get a code to send them. The duel starts when they join.'
      : typed
        ? 'Type the answer and press enter. The game marks it.'
        : 'Say the answer out loud. Whoever is marking hits correct.';

    var bits = [
      solo ? '<b>' + cfg.names[0] + '</b> solo'
           : online ? '<b>' + cfg.names[0] + '</b> vs whoever joins'
           : '<b>' + cfg.names[0] + '</b> vs <b>' + cfg.names[1] + '</b>',
      '<b>' + cat.name + '</b>',
      '<b>' + (cfg.clockMs / 1000) + 's</b> each',
      typed ? 'you <b>type</b> answers' : 'you <b>say</b> answers'
    ];
    if (cfg.pictureMode !== 'normal') bits.push('<b>' + cfg.pictureMode + '</b> pictures');
    el.summary.innerHTML = bits.map(function (b) { return '<span>' + b + '</span>'; }).join('');

    var rules = solo
      ? ['One picture at a time, and your clock is always running.',
         'Get it right and you keep going with a fresh picture.',
         typed ? 'Wrong answer costs you <b>' + (cfg.penaltyMs / 1000) + ' seconds</b>.'
               : 'A wrong call costs you <b>' + (cfg.penaltyMs / 1000) + ' seconds</b>.',
         'Stuck? <b>Pass</b> for a new picture &mdash; it costs <b>' + (cfg.passCostMs / 1000) + 's</b>.',
         'When the clock hits zero, your score is how many you got.']
      : ['One picture at a time. Only the player with <b>control</b> has a running clock.',
         'Right answer &rarr; the answer flashes up and <b>control hands over</b>. Your clock stops.',
         'Wrong &rarr; <b>&minus;' + (cfg.penaltyMs / 1000) + 's</b>, same picture, still your turn.',
         'Pass &rarr; the answer is shown and you get a new picture, but it is <b>still your turn</b> and costs <b>' + (cfg.passCostMs / 1000) + 's</b>.',
         'First clock to hit <b>00.0</b> loses.'];
    el.rulesRecap.innerHTML = rules.map(function (r) { return '<li>' + r + '</li>'; }).join('');

    el.lobby.hidden = !online;
    if (online) {
      if (!Net.room()) Net.join(Net.newCode());
      el.lobbyCode.textContent = Net.room();
      el.lobbyUrl.textContent = (cfg.hostUrl || 'dawghouseduel.com').replace(/\/host$/, '') + '/play';
      renderLobby();
    }
  }

  /* ══════════════════ SETUP SCREEN ══════════════════ */
  function buildSetup() {
    el.catSelect.innerHTML = '';
    CATS.forEach(function (c) {
      var o = document.createElement('option');
      o.value = c.id; o.textContent = c.name + ' (' + c.items.length + ')';
      el.catSelect.appendChild(o);
    });
    el.catSelect.value = cfg.catId;
    el.p1Name.value = cfg.names[0];
    el.p2Name.value = cfg.names[1];
    refreshMediaCount();
  }

  /* Silhouette only reads on artwork with a transparent background.
     On a photograph it is a black rectangle, so hide the option
     rather than let someone pick a broken round. */
  function refreshPictureModes() {
    var cat = catById(el.catSelect.value);
    var opt = el.revealModeSelect.querySelector('option[value="silhouette"]');
    if (!opt) return;
    var ok = !!cat.silhouette;
    opt.disabled = !ok;
    opt.textContent = ok ? 'Silhouette' : 'Silhouette (needs cut-out artwork)';
    if (!ok && el.revealModeSelect.value === 'silhouette') el.revealModeSelect.value = 'normal';
  }

  function refreshMediaCount() {
    var cat = catById(el.catSelect.value);
    var n = cat.items.filter(function (it) { return Store.hasArt(cat.id, it.slug); }).length;
    el.mediaCount.textContent = n + '/' + cat.items.length;
  }

  /* Never let a stale or unmatched select value turn into NaN — a NaN
     penalty silently compares false and the whole rule stops firing. */
  function num(sel, fallback, scale) {
    var v = parseInt(sel.value, 10);
    if (!isFinite(v)) { v = fallback; sel.value = String(fallback); }
    return v * (scale || 1);
  }

  function readSetup() {
    cfg.catId   = el.catSelect.value;
    cfg.clockMs = num(el.clockSelect, 45, 1000);
    cfg.first   = el.firstSelect.value;
    cfg.penaltyMs  = num(el.penaltySelect, 3, 1000);
    cfg.passCostMs = num(el.passCostSelect, 2, 1000);
    cfg.revealMs   = num(el.revealSelect, 1400);
    cfg.deck       = el.deckSelect.value;
    cfg.pictureMode = el.revealModeSelect.value;
    cfg.play = chosen('playmode') || cfg.play || 'duel';
    cfg.answers = cfg.play === 'online' ? 'type' : (chosen('answermode') || cfg.answers || 'type');
    cfg.catId = chosenCat || cfg.catId;
    cfg.deep    = el.optDeep.checked;
    cfg.sound   = el.optSound.checked;
    cfg.tick    = el.optTick.checked;
    cfg.clue    = el.optClue.checked;
    cfg.names   = [
      (el.p1Name.value || 'DAWG 1').trim().toUpperCase().slice(0, 14),
      (el.p2Name.value || 'DAWG 2').trim().toUpperCase().slice(0, 14)
    ];
    Sfx.setEnabled(cfg.sound);
    Sfx.setTick(cfg.tick);
    try { localStorage.setItem('dhd.cfg', JSON.stringify(cfg)); } catch (e) {}
  }

  /* Only accept a saved value the dropdown actually offers. A config written
     by an older build must never leave a select in an unmatched state. */
  function pick(sel, value) {
    var v = String(value);
    for (var i = 0; i < sel.options.length; i++) {
      if (sel.options[i].value === v) { sel.value = v; return true; }
    }
    return false;   // leave the markup default in place
  }

  function restoreSetup() {
    try {
      var saved = JSON.parse(localStorage.getItem('dhd.cfg') || 'null');
      if (saved) {
        if (catById(saved.catId)) pick(el.catSelect, saved.catId);
        pick(el.clockSelect, saved.clockMs / 1000);
        pick(el.firstSelect, saved.first);
        pick(el.penaltySelect, saved.penaltyMs / 1000);
        pick(el.passCostSelect, saved.passCostMs / 1000);
        pick(el.revealSelect, saved.revealMs);
        pick(el.deckSelect, saved.deck);
        pick(el.revealModeSelect, saved.pictureMode || 'normal');
        /* Saved values drive the Play-again shortcut only. The wizard itself
           starts blank on purpose — see clearChoices(). */
        if (typeof saved.deep === 'boolean') el.optDeep.checked = saved.deep;
        if (typeof saved.sound === 'boolean') el.optSound.checked = saved.sound;
        if (typeof saved.tick === 'boolean') el.optTick.checked = saved.tick;
        if (typeof saved.clue === 'boolean') el.optClue.checked = saved.clue;
        if (saved.names && saved.names.length === 2) {
          el.p1Name.value = saved.names[0];
          el.p2Name.value = saved.names[1];
        }
      }
    } catch (e) {}
    readSetup();   // the DOM is the single source of truth from here on
  }

  /* ══════════════════ DUEL ══════════════════ */
  function buildQueue() {
    var items = pool(G.cat, cfg.deep);
    /* A picture with no alpha channel is a black rectangle in silhouette
       mode, so those answers sit the round out rather than being unguessable. */
    if ((cfg.pictureMode || 'normal') === 'silhouette' && G.cat.silhouette) {
      var lit = items.filter(function (it) { return !it.flat; });
      if (lit.length >= 12) items = lit;
    }
    var withArt = shuffle(items.filter(function (it) { return Store.hasArt(G.cat.id, it.slug); }));
    var without = shuffle(items.filter(function (it) { return !Store.hasArt(G.cat.id, it.slug); }));
    // It's a picture round — only fall back to clue cards if there is no art at all.
    if (cfg.deck === 'images' && withArt.length) return withArt;
    return withArt.concat(without);
  }

  function startDuel() {
    pods[0].root.classList.remove('is-dead');
    pods[1].root.classList.remove('is-dead');
    el.reveal.hidden = el.penaltyPop.hidden = el.boardPeek.hidden = true;
    document.body.classList.remove('is-revealing');
    stopTicker();
    clearTimeout(G.introTimer);
    clearTimeout(G.revealTimer);
    readSetup();
    G.cat = catById(cfg.catId);
    G.queue = buildQueue();
    if (!G.queue.length) { toast('That category is empty'); return; }
    G.idx = 0;
    G.startMs = cfg.clockMs;
    G.players = [
      { name: cfg.names[0], ms: cfg.clockMs, right: 0, passes: 0 },
      { name: cfg.names[1], ms: cfg.clockMs, right: 0, passes: 0 }
    ];
    G.solo = cfg.play === 'solo';
    G.active = G.solo ? 0
             : cfg.first === 'flip' ? (Math.random() < 0.5 ? 0 : 1)
             : parseInt(cfg.first, 10);
    document.body.classList.toggle('is-solo', G.solo);
    G.peek = false;
    G.winnerName = '';
    G.rallies = [0, 0];
    G.bestRally = 0;
    G.lastTickSec = null;

    el.duelCat.textContent = G.cat.name;
    el.duelTotal.textContent = G.queue.length;
    pods[0].name.textContent = G.players[0].name;
    pods[1].name.textContent = G.players[1].name;
    pods[0].resHead.textContent = G.players[0].name;
    pods[1].resHead.textContent = G.players[1].name;
    el.boardClue.hidden = !cfg.clue;
    applyPictureMode();
    el.hostPenalty.textContent = (cfg.penaltyMs / 1000).toFixed(0);
    el.rally.hidden = false;
    renderRally(true);

    G.typed = cfg.answers === 'type';
    G.tokenIndex = G.typed ? Match.index(G.queue) : null;
    document.body.classList.toggle('is-typing', G.typed);
    el.answerBar.hidden = !G.typed;
    el.passBar.hidden = G.typed;
    el.answerInput.value = '';
    el.hostPassCost.textContent = (cfg.passCostMs / 1000).toFixed(0);
    el.passCost.textContent = '\u2212' + (cfg.passCostMs / 1000).toFixed(0) + 's';
    el.passCost.hidden = !(cfg.passCostMs > 0);

    el.ovlResult.hidden = true;
    el.ovlPause.hidden = true;
    show('duel');
    renderAll();
    showItem();
    Store.preload(G.cat.id, G.queue.slice(0, 6));
    runIntro();
  }

  function runIntro() {
    G.phase = 'intro';
    /* The picture is already on the board behind the intro card, so hold the
       reveal frozen until the clock actually starts — otherwise the first
       answer of every duel loses its whole reveal window to the countdown. */
    document.body.classList.add('is-frozen');
    el.passBar.disabled = true;
    el.introCat.textContent = G.cat.name;
    el.introP1.textContent = G.players[0].name;
    el.introP2.textContent = G.players[1].name;
    el.introFirst.textContent = (cfg.first === 'flip' ? 'COIN FLIP — ' : '') + G.players[G.active].name + ' STARTS WITH CONTROL';
    el.ovlIntro.hidden = false;

    var seq = ['3', '2', '1', 'GO'], i = 0;
    function step() {
      var v = seq[i];
      el.introCount.textContent = v;
      el.introCount.classList.toggle('go', v === 'GO');
      el.introCount.classList.remove('tick');
      void el.introCount.offsetWidth;
      el.introCount.classList.add('tick');
      if (v === 'GO') Sfx.go(); else Sfx.countdown();
      i++;
      if (i < seq.length) G.introTimer = setTimeout(step, 800);
      else G.introTimer = setTimeout(function () { el.ovlIntro.hidden = true; goLive(); }, 620);
    }
    G.introTimer = setTimeout(step, 1500);
  }

  /* The clock is authoritative on timestamps, not on accumulated frame
     deltas — a dropped frame, a throttled tab or a slow repaint can never
     hand a contestant free seconds. rAF drives the smooth repaint; a slow
     interval is the backstop in case rAF stops firing altogether. */
  function now() { return performance.now(); }

  function remaining(i) {
    var p = G.players[i];
    if (i !== G.active || G.phase !== 'live') return p.ms;
    return Math.max(0, p.ms - (now() - G.runStart));
  }

  function commit() {
    if (G.phase !== 'live') return;
    var p = G.players[G.active];
    p.ms = Math.max(0, p.ms - (now() - G.runStart));
    G.runStart = now();
  }

  function goLive() {
    document.body.classList.remove('is-frozen');
    G.phase = 'live';
    setTimeout(focusAnswer, 0);
    el.passBar.disabled = false;
    G.runStart = now();
    startTicker();
    renderAll();
  }

  function startTicker() {
    stopTicker();
    G.raf = requestAnimationFrame(function loop() {
      if (G.phase !== 'live') return;
      frame();
      if (G.phase === 'live') G.raf = requestAnimationFrame(loop);
    });
    G.backstop = setInterval(frame, 100);
  }

  function stopTicker() {
    cancelAnimationFrame(G.raf);
    clearInterval(G.backstop);
    G.raf = G.backstop = 0;
  }

  function frame() {
    if (G.phase !== 'live') return;
    var left = remaining(G.active);
    var secLeft = Math.ceil(left / 1000);
    if (left <= 10000 && left > 0 && secLeft !== G.lastTickSec) { G.lastTickSec = secLeft; Sfx.tick(); }
    renderClocks();
    if (left <= 0) { commit(); endDuel(1 - G.active); }
  }

  /* ── actions ── */
  function locked(ms) {
    var t = performance.now();
    if (t < G.lockUntil) return true;
    G.lockUntil = t + ms;
    return false;
  }

  /* ── The rules ──────────────────────────────────────────────
     CORRECT  reveal the answer, then control hands over to the
              other dawg with a fresh picture. Only a correct
              answer gets you off the clock.
     WRONG    time penalty, same picture, still your turn.
     PASS     reveal the answer, fresh picture — but it is still
              your turn and still your clock.
     During a reveal both clocks are frozen, so the beat itself
     never costs anybody time.
     ───────────────────────────────────────────────────────── */

  function doCorrect() {
    if (G.phase !== 'live') return;
    if (locked(200)) return;
    G.players[G.active].right++;
    bumpRally();
    renderStats();
    Sfx.correct();
    flash('is-yes');
    beat('yes', 'CORRECT', G.queue[G.idx].name, function () {
      if (!G.solo) G.active = 1 - G.active;      // hand off
      Sfx.handoff();
      nextItem();
      renderAll();
      goLive();
    });
  }

  function doPass(side) {
    if (G.phase !== 'live') return;
    if (side != null && side !== G.active) return;   // only the dawg on the clock may pass
    if (locked(260)) return;
    G.players[G.active].passes++;
    breakRally();
    renderStats();
    Sfx.pass();
    flash('is-pass');

    if (charge(cfg.passCostMs)) return;   // a pass can run you out of clock

    beat('pass', 'PASSED — IT WAS', G.queue[G.idx].name, function () {
      nextItem();                   // same dawg, same clock, different picture
      renderAll();
      goLive();
    });
  }

  function doWrong() {
    if (G.phase !== 'live') return;
    if (locked(220)) return;
    Sfx.wrong();
    breakRally();
    flash('is-no');
    charge(cfg.penaltyMs);
  }

  /* Take `ms` off the dawg on the clock: seconds gone, number on the board,
     clock digits kicked, klaxon if it finishes them.
     Returns true if the duel just ended. */
  function charge(ms) {
    if (!(ms > 0) || G.phase !== 'live') return false;
    commit();
    var p = G.players[G.active];
    p.ms = Math.max(0, p.ms - ms);

    el.penaltyPop.textContent = '\u2212' + (ms / 1000).toFixed(0);
    el.penaltyPop.hidden = false;
    el.penaltyPop.style.animation = 'none';
    void el.penaltyPop.offsetWidth;
    el.penaltyPop.style.animation = '';
    clearTimeout(charge._t);
    charge._t = setTimeout(function () { el.penaltyPop.hidden = true; }, 800);

    var pod = pods[G.active].root;
    pod.classList.remove('is-hit');
    void pod.offsetWidth;
    pod.classList.add('is-hit');

    Sfx.penalty();
    renderClocks();
    if (p.ms <= 0) { endDuel(1 - G.active); return true; }
    return false;
  }

  /* Operator escape hatch for a picture that is unusable — costs nothing
     and reveals nothing, it just deals the next one. */
  function doSkip() {
    if (G.phase !== 'live') return;
    if (locked(200)) return;
    nextItem();
  }

  function nextItem() {
    G.idx++;
    if (G.idx >= G.queue.length) { G.queue = buildQueue(); G.idx = 0; }
    showItem();
    Store.preload(G.cat.id, G.queue.slice(G.idx + 1, G.idx + 5));
  }

  /* The reveal beat: freeze both clocks, put the answer on screen, continue. */
  function beat(kind, eyebrow, name, then) {
    commit();
    G.phase = 'reveal';
    stopTicker();
    document.body.classList.add('is-frozen');
    document.body.classList.add('is-revealing');   // show the real picture, not the shape
    el.passBar.disabled = true;

    var ms = cfg.revealMs;
    if (ms > 0) {
      el.reveal.className = 'reveal reveal--' + kind;
      el.revealEyebrow.textContent = eyebrow;
      el.revealName.textContent = name;
      el.reveal.hidden = false;
    }
    clearTimeout(G.revealTimer);
    G.revealTimer = setTimeout(function () {
      el.reveal.hidden = true;
      document.body.classList.remove('is-revealing');
      if (G.phase !== 'reveal') return;   // reset/pause/quit landed mid-beat
      then();
    }, Math.max(60, ms));
  }

  function togglePause() {
    if (G.phase === 'live' || G.phase === 'reveal') {
      commit();
      clearTimeout(G.revealTimer);
      el.reveal.hidden = true;
      G.phase = 'paused';
      stopTicker();
      document.body.classList.add('is-frozen');
      el.ovlPause.hidden = false;
      el.passBar.disabled = true;
    } else if (G.phase === 'paused') {
      el.ovlPause.hidden = true;
      document.body.classList.remove('is-frozen');
      goLive();
    }
  }

  function endDuel(winner) {
    G.phase = 'over';
    stopTicker();
    clearTimeout(G.revealTimer);
    el.reveal.hidden = true;
    el.passBar.disabled = true;
    pods[0].root.classList.remove('is-hit');
    pods[1].root.classList.remove('is-hit');
    pods[1 - winner].root.classList.remove('is-active');
    pods[1 - winner].root.classList.add('is-dead');
    pods[winner].root.classList.add('is-active');
    Sfx.buzzer();
    setTimeout(function () { Sfx.fanfare(); }, 700);

    var w = G.players[winner];
    if (G.solo) return endSolo();
    G.winnerName = w.name;
    el.resultName.textContent = w.name;
    el.resultLabel.textContent = 'WINNER';
    el.resRematchLabel.innerHTML = 'REMATCH <i>(R)</i>';
    el.resNewLabel.innerHTML = 'NEW DUEL <i>(N)</i>';
    el.resultSolo.hidden = true;
    el.resultTbl.hidden = false;
    el.resultLine.textContent = 'Survived with ' + fmt(remaining(winner)) + ' on the clock · ' +
      w.right + ' correct · best rally ' + G.bestRally;
    [0, 1].forEach(function (i) {
      pods[i].resRight.textContent = G.players[i].right;
      pods[i].resPass.textContent = G.players[i].passes;
      pods[i].resClock.textContent = fmt(G.players[i].ms);
    });
    recordPlay(G.cat.id, 'duel', G.bestRally);
    setTimeout(function () { el.ovlResult.hidden = false; }, 900);
  }

  /* Solo has no loser — the card is a score, built to be screenshotted. */
  function endSolo() {
    var p = G.players[0];
    G.winnerName = p.name;
    el.resultName.textContent = p.name;
    el.resultLabel.textContent = 'TIME';
    el.resRematchLabel.innerHTML = 'GO AGAIN <i>(R)</i>';
    el.resNewLabel.innerHTML = 'NEW RUN <i>(N)</i>';
    el.resultLine.textContent = G.cat.name + ' · ' + (G.startMs / 1000) + ' seconds';
    el.soloScore.textContent = p.right;
    el.soloBest.textContent = G.bestRally;
    el.resultSolo.hidden = false;
    el.resultTbl.hidden = true;
    recordPlay(G.cat.id, 'solo', G.bestRally);
    setTimeout(function () { el.ovlResult.hidden = false; }, 900);
  }

  function backToSetup() {
    G.phase = 'idle';
    stopTicker();
    clearTimeout(G.introTimer);
    clearTimeout(G.revealTimer);
    el.ovlIntro.hidden = el.ovlResult.hidden = el.ovlPause.hidden = true;
    el.reveal.hidden = el.penaltyPop.hidden = el.boardPeek.hidden = true;
    document.body.classList.remove('is-revealing');
    clearTimeout(G.revealTimer);
    pods[0].root.classList.remove('is-dead');
    pods[1].root.classList.remove('is-dead');
    show('setup');
    goStep(STEPS.length - 1);
    refreshMediaCount();
  }

  /* ── board rendering ── */
  function showItem() {
    var item = G.queue[G.idx];
    el.duelProgress.textContent = G.idx + 1;
    el.boardCardClue.textContent = item.clue;
    el.boardClue.textContent = cfg.clue ? item.clue : '';
    renderPeek(item);

    var stamp = ++showItem._n;
    Store.resolve(G.cat.id, item).then(function (url) {
      if (stamp !== showItem._n) return;            // a newer item already landed
      if (url) {
        el.boardImg.onerror = function () {          // folder file vanished — fall back
          el.boardImg.hidden = true; el.boardCard.hidden = false;
        };
        el.boardImg.src = url;
        el.boardImg.hidden = false;
        restartReveal();
        el.boardCard.hidden = true;
        lastImageUrl = url;
      } else {
        el.boardImg.removeAttribute('src');
        el.boardImg.hidden = true;
        el.boardCard.hidden = false;
        lastImageUrl = null;
      }
    });
  }
  showItem._n = 0;

  /* The reveal window is the shorter of 7s and the clock itself — no point
     spending twelve seconds unblurring a picture on a 30-second duel. */
  function applyPictureMode() {
    var mode = cfg.pictureMode || 'normal';
    if (mode === 'silhouette' && !(G.cat && G.cat.silhouette)) mode = 'normal';
    ['normal', 'silhouette', 'zoom', 'blur'].forEach(function (m) {
      document.body.classList.toggle('mode-' + m, m === mode);
    });
    var secs = Math.max(2.5, Math.min(cfg.revealSecs, (G.startMs / 1000) * 0.28));
    el.boardImg.style.setProperty('--dhd-reveal', secs.toFixed(1) + 's');
  }

  /* Restart the reveal animation from the top for each new picture. */
  function restartReveal() {
    if ((cfg.pictureMode || 'normal') === 'normal') return;
    var n = el.boardImg;
    n.style.animation = 'none';
    void n.offsetWidth;
    n.style.animation = '';
  }

  /* Each player owns their own streak. A shared number let one player's
     wrong answer wipe out the other's run, which is nobody's idea of fair. */
  function renderRally(silent) {
    var n = G.rallies[G.active] || 0;
    /* Name it, so there is no doubt whose streak the number is. */
    el.rallyWho.textContent = G.solo ? 'RALLY' : G.players[G.active].name + "'S RALLY";
    el.rallyNum.textContent = n;
    el.rally.classList.toggle('is-hot', n >= 5);
    if (!silent) {
      el.rally.classList.remove('is-bump');
      void el.rally.offsetWidth;
      el.rally.classList.add('is-bump');
    }
  }

  function bumpRally() {
    G.rallies[G.active] = (G.rallies[G.active] || 0) + 1;
    if (G.rallies[G.active] > G.bestRally) G.bestRally = G.rallies[G.active];
    renderRally();
  }

  function breakRally() {
    if (!G.rallies[G.active]) return;
    G.rallies[G.active] = 0;
    renderRally(true);
  }

  /* ── typed answers ───────────────────────────────────────────
     In typed mode nobody is marking, so the app is. Match.check is
     forgiving about spelling and strict about ambiguity — see
     js/match.js. A wrong guess costs the same as a wrong call. */
  function submitTyped(e) {
    if (e) e.preventDefault();
    if (G.phase !== 'live' || !G.typed) return;
    var typed = el.answerInput.value.trim();
    if (!typed) return;

    var verdict = Match.check(typed, G.queue[G.idx], G.tokenIndex);
    if (verdict) {
      el.answerInput.value = '';
      doCorrect();
    } else {
      el.answerBar.classList.remove('is-wrong');
      void el.answerBar.offsetWidth;
      el.answerBar.classList.add('is-wrong');
      el.answerInput.select();
      doWrong();
    }
  }

  function focusAnswer() {
    if (!G.typed || G.phase !== 'live') return;
    try { el.answerInput.focus({ preventScroll: true }); } catch (err) { el.answerInput.focus(); }
  }

  function renderAnswerBar() {
    if (!G.typed) return;
    el.answerWho.textContent = G.solo ? '' : G.players[G.active].name;
    el.answerInput.placeholder = G.solo ? 'type your answer' : G.players[G.active].name + ', type your answer';
  }

  function flash(cls) {
    el.boardFlash.className = 'board__flash';
    void el.boardFlash.offsetWidth;
    el.boardFlash.classList.add(cls);
  }

  function renderPeek(item) {
    if (G.peek && item) { el.boardPeek.textContent = item.name; el.boardPeek.hidden = false; }
    else el.boardPeek.hidden = true;
  }

  function togglePeek() {
    G.peek = !G.peek;
    renderPeek(G.queue[G.idx]);
    toast(G.peek ? 'Answer peek ON — the dawgs can see it too' : 'Answer peek off');
  }

  function renderClocks() {
    for (var i = 0; i < 2; i++) {
      var ms = remaining(i), pod = pods[i];
      pod.clock.textContent = fmt(ms);
      pod.bar.style.transform = 'scaleX(' + Math.max(0, ms / G.startMs) + ')';
      pod.root.classList.toggle('is-warn', ms <= 10000 && ms > 5000);
      pod.root.classList.toggle('is-danger', ms <= 5000 && ms > 0);
    }
  }

  function renderStats() {
    for (var i = 0; i < 2; i++) {
      pods[i].right.textContent = G.players[i].right;
      pods[i].pass.textContent = G.players[i].passes;
    }
  }

  function renderAll() {
    renderAnswerBar();
    renderRally(true);        // control moved, so the chip belongs to someone else now
    pods[0].root.classList.toggle('is-active', G.active === 0);
    pods[1].root.classList.toggle('is-active', G.active === 1);
    el.passWho.textContent = G.players[G.active].name;
    renderClocks();
    renderStats();
  }

  /* ══════════════════ HOST WINDOW LINK ══════════════════
     The host needs the answer key, and it must never appear on the screen
     the dawgs are reading — so it lives in its own window and talks over a
     BroadcastChannel. Commands come back in and run the same guarded
     actions the keyboard does. */
  function busState() {
    var item = G.queue[G.idx], next = G.queue[G.idx + 1];
    return {
      from: 'duel',
      phase: G.phase,
      cat: G.cat ? G.cat.name : '',
      idx: G.idx, total: G.queue.length,
      active: G.active,
      players: [0, 1].map(function (i) {
        var p = G.players[i];
        return p ? { name: p.name, ms: remaining(i), right: p.right, passes: p.passes }
                 : { name: '—', ms: 0, right: 0, passes: 0 };
      }),
      answer: item ? item.name : '',
      alts: item ? (item.alt || []) : [],
      show: item ? (item.note || item.show || '') : '',   // host-side context, never an answer
      nextAnswer: next ? next.name : '',
      image: absoluteImage(lastImageUrl),
      penaltyMs: cfg.penaltyMs, passCostMs: cfg.passCostMs,
      winnerName: G.winnerName || ''
    };
  }

  /* A phone on the other side of the relay can't resolve "assets/…". */
  function absoluteImage(url) {
    if (!url) return null;
    if (/^(data:|https?:)/.test(url)) return url;
    return location.origin + location.pathname.replace(/[^/]*$/, '') + url;
  }

  function broadcast() {
    if (!G.players[0]) return;
    var full = busState();

    /* Whoever is marking needs the answer. The other player must never
       be sent it, so they get their own frame with it stripped out and
       the relay keeps the two audiences apart. */
    full.to = 'host';
    Net.send(full);

    var forPlayer = busState();
    delete forPlayer.answer;
    delete forPlayer.alts;
    delete forPlayer.nextAnswer;
    delete forPlayer.show;
    forPlayer.to = 'player';
    forPlayer.startMs = G.startMs;
    forPlayer.rally = G.rallies ? (G.rallies[G.active] || 0) : 0;
    forPlayer.rallyWho = G.players[G.active] ? G.players[G.active].name : '';
    if (!el.reveal.hidden) {
      forPlayer.revealName = el.revealName.textContent;
      forPlayer.revealEyebrow = el.revealEyebrow.textContent;
      forPlayer.revealKind = /pass/.test(el.reveal.className) ? 'pass' : 'yes';
    }
    Net.send(forPlayer);
  }

  function runCommand(cmd, msg) {
    /* A remote player may only act on their own turn, and only ever as
       seat 1 — the joining player is always the right-hand pod. */
    if (msg && msg.from === 'player') {
      if (cmd === 'hello') {
        if (msg.name && G.players[1] && G.players[1].name !== msg.name) {
          G.players[1].name = msg.name;
          pods[1].name.textContent = msg.name;
          pods[1].resHead.textContent = msg.name;
          renderAll();
        }
        broadcast();
        return;
      }
      if (G.phase !== 'live' || G.active !== 1) return;
      if (cmd === 'answer') {
        var verdict = Match.check(msg.text || '', G.queue[G.idx], G.tokenIndex);
        if (verdict) doCorrect(); else doWrong();
        broadcast();
        return;
      }
      if (cmd !== 'pass') return;
    }

    switch (cmd) {
      case 'correct': doCorrect(); break;
      case 'wrong':   doWrong();   break;
      case 'pass':    doPass(null); break;
      case 'skip':    doSkip();    break;
      case 'pause':   togglePause(); break;
      case 'hello':   break;       // just wants a state frame
    }
    broadcast();
  }

  Net.start({
    role: 'duel',
    room: Net.rememberedRoom() || Net.newCode(),
    onMessage: function (m) {
      if (!m) return;
      if (m.from === 'host' || m.from === 'player') runCommand(m.cmd, m);
    },
    onStatus: renderPairing
  });

  setInterval(broadcast, 120);

  function renderLobby() {
    if (el.lobby.hidden) return;
    var peers = Net.peers();
    var joined = peers.players > 0;
    el.lobbyState.textContent = joined ? 'they are in — start when ready' : 'waiting for them to join…';
    el.lobbyState.classList.toggle('is-on', joined);
  }

  /* ── pairing panel ── */
  function renderPairing() {
    var st = Net.status(), peers = Net.peers();
    var code = Net.room() || '----';
    el.pairCode.textContent = code;
    el.pairCodeBig.textContent = code;
    el.pairUrl.textContent = Net.hostUrl();
    el.pairUrlBig.textContent = Net.hostUrl();

    var label, cls;
    if (!Net.configured())     { label = 'same computer only'; cls = 'local'; }
    else if (st === 'online')  { label = peers.hosts ? 'phone connected' : 'waiting for the host'; cls = peers.hosts ? 'on' : 'wait'; }
    else if (st === 'connecting') { label = 'connecting…'; cls = 'wait'; }
    else                       { label = 'relay offline — game still fine'; cls = 'off'; }

    renderLobby();
    [el.pairState, el.pairStateBig].forEach(function (n) {
      if (!n) return;
      n.textContent = label;
      n.className = n.className.replace(/\bis-\w+\b/g, '') + ' is-' + cls;
    });
  }

  function openHost() {
    var w = 520, h = 780;
    hostWin = window.open('host.html', 'dhd-host', 'width=' + w + ',height=' + h + ',menubar=no,toolbar=no');
    if (!hostWin) { toast('Popup blocked — allow popups for this page'); return; }
    hostWin.focus();
    setTimeout(broadcast, 250);
  }

  /* ══════════════════ MEDIA LIBRARY ══════════════════ */
  var mediaCat = null;

  function openMedia(force) {
    readSetup();
    mediaCat = catById(cfg.catId);
    el.mediaCat.textContent = mediaCat.name;
    el.mediaGrid.innerHTML = '<p style="color:rgba(255,255,255,.5);grid-column:1/-1">Scanning ' + mediaCat.items.length + ' answers…</p>';
    show('media');
    Store.scan(mediaCat.id, mediaCat.items, force === true).then(renderMedia);
  }

  function renderMedia(rows) {
    el.mediaGrid.innerHTML = '';
    var frag = document.createDocumentFragment();
    rows.forEach(function (row) {
      var it = row.item;
      var tile = document.createElement('div');
      tile.className = 'tile' + (row.url ? ' has-img' : '');
      tile.dataset.slug = it.slug;
      tile.title = row.url ? 'Click to replace · shift-click to remove' : 'Click to add an image';
      tile.innerHTML =
        '<div class="tile__thumb">' +
          (row.url ? '<img alt="" src="' + row.url + '">' : '<span class="tile__none">NO IMAGE</span>') +
        '</div>' +
        '<div class="tile__name"></div>' +
        '<div class="tile__file">' + it.slug + '.jpg</div>' +
        (row.source ? '<span class="tile__src ' + row.source + '">' + (row.source === 'upload' ? 'ADDED' : 'FOLDER') + '</span>' : '');
      tile.querySelector('.tile__name').textContent = it.name;

      tile.addEventListener('click', function (e) {
        if (e.shiftKey && row.source === 'upload') {
          Store.remove(mediaCat.id, it.slug).then(function () { toast('Removed ' + it.name); openMedia(); });
          return;
        }
        pickFile(function (files) { if (files[0]) saveOne(it, files[0]); });
      });
      tile.addEventListener('dragover', function (e) { e.preventDefault(); tile.classList.add('is-over'); });
      tile.addEventListener('dragleave', function () { tile.classList.remove('is-over'); });
      tile.addEventListener('drop', function (e) {
        e.preventDefault(); e.stopPropagation(); tile.classList.remove('is-over');
        var f = e.dataTransfer.files[0];
        if (f) saveOne(it, f);
      });
      frag.appendChild(tile);
    });
    el.mediaGrid.appendChild(frag);
  }

  function saveOne(item, file) {
    Store.save(mediaCat.id, item.slug, file)
      .then(function () { toast('Added ' + item.name); openMedia(); })
      .catch(function (err) { toast(err.message || 'Could not add that file'); });
  }

  function pickFile(cb) {
    var input = document.createElement('input');
    input.type = 'file'; input.accept = 'image/*';
    input.addEventListener('change', function () { cb(input.files); });
    input.click();
  }

  /* Bulk drop: match filenames to answers, exact slug first, then loose. */
  function bulkDrop(files) {
    var list = Array.prototype.slice.call(files).filter(function (f) { return /^image\//.test(f.type); });
    if (!list.length) { toast('No images in that drop'); return; }

    var bySlug = {}, byLoose = {};
    mediaCat.items.forEach(function (it) {
      bySlug[it.slug] = it;
      byLoose[Store.loose(it.slug)] = it;
      byLoose[Store.loose(it.name)] = byLoose[Store.loose(it.name)] || it;
      (it.alt || []).forEach(function (a) { byLoose[Store.loose(a)] = byLoose[Store.loose(a)] || it; });
    });

    var matched = 0, missed = [];
    var jobs = list.map(function (f) {
      var s = Store.slugify(f.name);
      var it = bySlug[s] || byLoose[Store.loose(f.name)];
      if (!it) { missed.push(f.name); return Promise.resolve(); }
      matched++;
      return Store.save(mediaCat.id, it.slug, f).catch(function () { missed.push(f.name); matched--; });
    });

    toast('Importing ' + list.length + ' files…');
    Promise.all(jobs).then(function () {
      openMedia();
      toast(matched + ' matched' + (missed.length ? ' · ' + missed.length + ' unmatched' : ''));
      if (missed.length) console.warn('[Dawg House Duel] no answer matched these filenames:', missed);
    });
  }

  /* ══════════════════ EVENTS ══════════════════ */
  /* The form only starts a duel from the last step; earlier steps advance. */
  el.setupForm.addEventListener('submit', function (e) {
    e.preventDefault();
    Sfx.unlock();
    if (STEPS[stepAt] !== 'ready') return goStep(stepAt + 1);
    startDuel();
  });

  el.startFlow.addEventListener('click', function () { Sfx.unlock(); clearChoices(); show('setup'); goStep(0); });
  el.quickStart.addEventListener('click', function () { Sfx.unlock(); startDuel(); });
  el.flowBack.addEventListener('click', function () {
    if (stepAt === 0) { show('welcome'); return; }
    goStep(stepAt - 1);
  });
  el.flowNext.addEventListener('click', function () { goStep(stepAt + 1); });

  /* Answering style changes what step 4 needs to show. */
  document.querySelectorAll('input[name="playmode"]').forEach(function (r) {
    r.addEventListener('change', function () {
      if (STEPS[stepAt] === 'mode') goStep(stepAt + 1);   // a choice is the decision
    });
  });
  document.querySelectorAll('input[name="answermode"]').forEach(function (r) {
    r.addEventListener('change', function () { refreshDetails(); });
  });

  el.lobbyCopy.addEventListener('click', function () {
    var link = location.origin + '/play#' + Net.room();
    (navigator.clipboard ? navigator.clipboard.writeText(link) : Promise.reject())
      .then(function () { toast('Link copied'); })
      .catch(function () { toast(link); });
  });
  el.joinGame.addEventListener('click', function () { location.href = 'play.html'; });

  el.answerBar.addEventListener('submit', submitTyped);
  el.answerPass.addEventListener('click', function () { doPass(null); focusAnswer(); });
  el.catSelect.addEventListener('change', function () { cfg.catId = el.catSelect.value; refreshMediaCount(); refreshPictureModes(); });
  el.toMedia.addEventListener('click', function () { openMedia(); });
  el.mediaRescan.addEventListener('click', function () { toast('Re-checking the assets folder…'); openMedia(true); });
  el.mediaBack.addEventListener('click', function () { show('setup'); refreshMediaCount(); });
  el.openHost.addEventListener('click', openHost);
  el.newCode.addEventListener('click', function () {
    Net.join(Net.newCode());
    renderPairing();
    toast('New room code — re-pair the phone');
  });
  /* Reading the rules must never cost you the duel. */
  var helpPaused = false;
  function openHelp() {
    if (G.phase === 'live' || G.phase === 'reveal') { togglePause(); helpPaused = true; }
    el.ovlHelp.hidden = false;
  }
  function closeHelp() {
    el.ovlHelp.hidden = true;
    if (helpPaused) { helpPaused = false; if (G.phase === 'paused') togglePause(); }
  }
  el.toHelp.addEventListener('click', openHelp);
  el.soundCheck.addEventListener('click', function () {
    Sfx.unlock();
    Sfx.setEnabled(true);
    Sfx.setTick(true);
    el.soundCheck.disabled = true;
    toast('Sound check — countdown, correct, pass, wrong, tick, buzzer, winner');
    Sfx.demo(function () {
      el.soundCheck.disabled = false;
      Sfx.setEnabled(el.optSound.checked);
      Sfx.setTick(el.optTick.checked);
      toast(DHD.Sfx.ready() ? 'Sound check done' : 'No audio — check the system volume');
    });
  });
  el.helpClose.addEventListener('click', closeHelp);
  el.ovlHelp.addEventListener('click', function (e) { if (e.target === el.ovlHelp) closeHelp(); });

  el.passBar.addEventListener('click', function () { Sfx.unlock(); doPass(null); el.passBar.blur(); });
  el.resRematch.addEventListener('click', function () { el.ovlResult.hidden = true; startDuel(); });
  el.resNew.addEventListener('click', backToSetup);

  el.mediaCopy.addEventListener('click', function () {
    var text = mediaCat.items.map(function (it) { return it.slug + '.jpg    ' + it.name; }).join('\n');
    (navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject())
      .then(function () { toast('Filename list copied'); })
      .catch(function () { console.log(text); toast('Copied to the console'); });
  });
  el.mediaClear.addEventListener('click', function () {
    if (!confirm('Remove every image you added to ' + mediaCat.name + '? Files in the assets folder are untouched.')) return;
    Store.clearCategory(mediaCat.id).then(function (n) { toast('Removed ' + n + ' uploads'); openMedia(); });
  });

  ['dragenter', 'dragover'].forEach(function (ev) {
    el.dropAll.addEventListener(ev, function (e) { e.preventDefault(); el.dropAll.classList.add('is-over'); });
  });
  ['dragleave', 'drop'].forEach(function (ev) {
    el.dropAll.addEventListener(ev, function () { el.dropAll.classList.remove('is-over'); });
  });
  el.dropAll.addEventListener('drop', function (e) { e.preventDefault(); bulkDrop(e.dataTransfer.files); });
  el.dropAll.addEventListener('click', function () {
    var input = document.createElement('input');
    input.type = 'file'; input.accept = 'image/*'; input.multiple = true;
    input.addEventListener('change', function () { bulkDrop(input.files); });
    input.click();
  });
  window.addEventListener('dragover', function (e) { e.preventDefault(); });
  window.addEventListener('drop', function (e) { e.preventDefault(); });

  function toggleFullscreen() {
    if (!document.fullscreenElement) (document.documentElement.requestFullscreen || function () {}).call(document.documentElement);
    else document.exitFullscreen();
  }

  document.addEventListener('keydown', function (e) {
    var t = e.target;
    if (t && /^(INPUT|SELECT|TEXTAREA)$/.test(t.tagName)) {
      /* The answer box owns Enter; Escape lets go of it. */
      if (t === el.answerInput && e.key === 'Escape') { t.blur(); }
      return;
    }
    Sfx.unlock();
    var k = e.key;

    if (k === 'h' || k === 'H') { e.preventDefault(); openHost(); return; }
    if (k === '?' || k === '/') { e.preventDefault(); if (el.ovlHelp.hidden) openHelp(); else closeHelp(); return; }
    if (k === 'Escape') { if (!el.ovlHelp.hidden) { closeHelp(); return; } if (html.dataset.screen !== 'setup') backToSetup(); return; }
    if (k === 'f' || k === 'F') { e.preventDefault(); toggleFullscreen(); return; }
    if (!el.ovlHelp.hidden) return;

    if (html.dataset.screen !== 'duel') {
      if (html.dataset.screen === 'setup' && (k === 'Enter')) { e.preventDefault(); startDuel(); }
      return;
    }

    if (G.phase === 'over') {
      if (k === 'r' || k === 'R') { el.ovlResult.hidden = true; startDuel(); }
      if (k === 'n' || k === 'N') backToSetup();
      return;
    }

    if (G.typed) {
      /* Only the things that aren't marking decisions stay live. */
      if (k === 'p' || k === 'P') { e.preventDefault(); togglePause(); }
      else if (k === 'r' || k === 'R') { e.preventDefault(); startDuel(); }
      else focusAnswer();
      return;
    }

    switch (k) {
      case ' ': case 'Spacebar':                  e.preventDefault(); doPass(null); break;
      case 'z': case 'Z':                         e.preventDefault(); doPass(0); break;
      case 'm': case 'M':                         e.preventDefault(); doPass(1); break;
      case 'Enter': case 'ArrowRight': case '.':  e.preventDefault(); doCorrect(); break;
      case 'x': case 'X': case 'ArrowLeft':       e.preventDefault(); doWrong(); break;
      case 's': case 'S':                         e.preventDefault(); doSkip(); break;
      case 'p': case 'P':                         e.preventDefault(); togglePause(); break;
      case 'a': case 'A':                         e.preventDefault(); togglePeek(); break;
      case 'r': case 'R':                         e.preventDefault(); startDuel(); break;
    }
  });

  /* Tab-away safety: don't burn a contestant's clock in the background. */
  document.addEventListener('visibilitychange', function () {
    if (document.hidden && G.phase === 'live') togglePause();
  });

  /* ══════════════════ BOOT ══════════════════ */
  buildSetup();     // category options must exist before a saved choice can match
  restoreSetup();
  Sfx.setEnabled(cfg.sound);
  Sfx.setTick(cfg.tick);

  buildDots();
  goStep(0);
  refreshPictureModes();
  show('welcome');

  /* Someone who has played before shouldn't be walked through it again. */
  try {
    if (localStorage.getItem('dhd.cfg')) {
      var prev = catById(cfg.catId);
      el.quickStart.hidden = false;
      el.quickStart.textContent = 'Play again — ' + prev.name + ', ' + (cfg.clockMs / 1000) + 's';
    }
  } catch (e) {}

  el.welcomeStats.textContent = CATS.length + ' categories · ' +
    CATS.reduce(function (n, c) { return n + c.items.length; }, 0).toLocaleString() + ' pictures';

  Store.init(CATS.map(function (c) { return c.id; })).then(function () {
    refreshMediaCount();
    if (el.catGrid.childElementCount) { el.catGrid.innerHTML = ''; refreshCatGrid(); }
  });
})();
