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

  var Store = DHD.Store, Sfx = DHD.Sfx, Net = DHD.Net, Match = DHD.Match, Daily = DHD.Daily,
      Decks = DHD.Decks;
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
    dailyBtn: $('dailyBtn'), dailyCat: $('dailyCat'), dailyMeta: $('dailyMeta'),
    resShare: $('resShare'), resultMarks: $('resultMarks'),
    lastUp: $('lastUp'), lastUpImg: $('lastUpImg'),
    lastUpEyebrow: $('lastUpEyebrow'), lastUpName: $('lastUpName'),
    recap: $('recap'), recapToggle: $('recapToggle'), recapLegend: $('recapLegend'),
    builderBack: $('builderBack'), builderSave: $('builderSave'), builderShare: $('builderShare'),
    builderDelete: $('builderDelete'), deckName: $('deckName'), deckBlurb: $('deckBlurb'),
    deckRows: $('deckRows'), deckAddRow: $('deckAddRow'), deckAddMany: $('deckAddMany'),
    deckSaved: $('deckSaved'),
    ovlPaste: $('ovlPaste'), pasteBox: $('pasteBox'), pastePreview: $('pastePreview'),
    pasteAdd: $('pasteAdd'), pasteCancel: $('pasteCancel'), pasteClose: $('pasteClose'),
    pasteModes: $('pasteModes'),
    deckCount: $('deckCount'),
    deckVote: $('deckVote'), deckVoteUp: $('deckVoteUp'), deckVoteDown: $('deckVoteDown'),
    deckVoteUpN: $('deckVoteUpN'), deckVoteDownN: $('deckVoteDownN'), deckVotePlays: $('deckVotePlays'),
    ovlDeckShare: $('ovlDeckShare'), deckShareCode: $('deckShareCode'), deckShareUrl: $('deckShareUrl'),
    deckShareEyebrow: $('deckShareEyebrow'),
    deckPrivate: $('deckPrivate'), deckKeyBox: $('deckKeyBox'), deckKeyValue: $('deckKeyValue'),
    deckKeyCopy: $('deckKeyCopy'), deckUnpublish: $('deckUnpublish'),
    deckShareCopy: $('deckShareCopy'), deckShareDone: $('deckShareDone'), deckShareClose: $('deckShareClose'),
    deckShareEyebrow: $('deckShareEyebrow'),
    ovlDeckGet: $('ovlDeckGet'), deckGetForm: $('deckGetForm'), deckGetCode: $('deckGetCode'),
    deckGetGo: $('deckGetGo'), deckGetState: $('deckGetState'), deckGetClose: $('deckGetClose'),
    deckList: $('deckList'), deckListState: $('deckListState'), deckSearch: $('deckSearch'),
    deckCoverPick: $('deckCoverPick'), deckCoverImg: $('deckCoverImg'),
    deckCoverEmpty: $('deckCoverEmpty'), deckCoverClear: $('deckCoverClear'),
    browseDecks: $('browseDecks'), toMyDecks: $('toMyDecks'),
    ovlMyDecks: $('ovlMyDecks'), myDecksList: $('myDecksList'), myDecksState: $('myDecksState'),
    myDecksClose: $('myDecksClose'), myDecksNew: $('myDecksNew'),
    deckSort: $('deckSort'), deckPager: $('deckPager'), deckPrev: $('deckPrev'),
    deckNext: $('deckNext'), deckPageLabel: $('deckPageLabel'),
    boardPrompt: $('boardPrompt'), boardPromptText: $('boardPromptText'),
    boardPromptKicker: $('boardPromptKicker'),
    ovlShot: $('ovlShot'), shotImg: $('shotImg'), shotName: $('shotName'),
    shotPrompt: $('shotPrompt'),
    shotBadge: $('shotBadge'), shotMeta: $('shotMeta'), shotCount: $('shotCount'),
    shotPrev: $('shotPrev'), shotNext: $('shotNext'), shotClose: $('shotClose'),
    muteBtn: $('muteBtn'), muteLabel: $('muteLabel'),
    ovlTutorial: $('ovlTutorial'), tutSkip: $('tutSkip'), tutDots: $('tutDots'),
    tutBack: $('tutBack'), tutNext: $('tutNext'), toTutorial: $('toTutorial'),
    silhouetteNote: $('silhouetteNote'),
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
    introEyebrow: $('introEyebrow'), introVs: $('introVs'), introX: $('introX'),
    introFirst: $('introFirst'), introCount: $('introCount'),
    ovlResult: $('ovlResult'), resultName: $('resultName'), resultLine: $('resultLine'),
    resRematch: $('resRematch'), resNew: $('resNew'), resMenu: $('resMenu'),
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
  var BUILT_IN = window.DHD_CATEGORIES || [];
  var CATS = BUILT_IN.slice();

  /* Custom decks sit at the end of the gallery, in the order they were
     made. Rebuilt from storage rather than mutated in place, so deleting
     one can never leave a stale entry behind. */
  function syncCats() {
    CATS = BUILT_IN.concat(Decks.categories());
    return CATS;
  }
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
    lockUntil: 0, revealTimer: 0, introTimer: 0, pendingBeat: null,
    history: [], curWrongs: 0, carded: false
  };

  /* ── small helpers ───────────────────────────────────────── */
  function show(screen) {
    html.setAttribute('data-screen', screen);
    /* The menu's "My decks" link only makes sense once there is one, and
       a deck can be made at any point in between. */
    if (screen === 'welcome') refreshMyDecksLink();
  }
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

  /* ══════════════════ TUTORIAL ══════════════════
     Shown once, the first time somebody arrives, and never again unless
     they ask. Skippable from the first frame — nobody should have to sit
     through four panels to play a game. */
  var TUT_SLIDES = 4, tutAt = 0;

  function buildTutDots() {
    el.tutDots.innerHTML = '';
    for (var i = 0; i < TUT_SLIDES; i++) el.tutDots.appendChild(document.createElement('li'));
  }

  function showTutSlide(i) {
    tutAt = Math.max(0, Math.min(TUT_SLIDES - 1, i));
    [].forEach.call(el.ovlTutorial.querySelectorAll('.tut__slide'), function (n, n2) {
      n.classList.toggle('now', n2 === tutAt);
    });
    [].forEach.call(el.tutDots.children, function (d, n2) { d.className = n2 === tutAt ? 'now' : ''; });
    el.tutBack.style.visibility = tutAt === 0 ? 'hidden' : 'visible';
    el.tutNext.textContent = tutAt === TUT_SLIDES - 1 ? "Let's play" : 'Next';
  }

  function openTutorial() { buildTutDots(); showTutSlide(0); el.ovlTutorial.hidden = false; }
  function closeTutorial() {
    el.ovlTutorial.hidden = true;
    try { localStorage.setItem('dhd.seenTutorial', '1'); } catch (e) {}
  }

  /* ══════════════════ TODAY'S CHALLENGE ══════════════════
     Ten pictures, sixty seconds, and the same ten for everybody. The
     deck comes from the date alone (js/daily.js) so two people can
     compare a score without either of them having a server. */
  function refreshDaily() {
    todaysPuzzle = Daily.build(CATS);
    if (!todaysPuzzle) { el.dailyBtn.hidden = true; return; }
    el.dailyBtn.hidden = false;

    var done = Daily.resultFor(todaysPuzzle.key);
    el.dailyCat.textContent = todaysPuzzle.cat.name;
    el.dailyBtn.classList.toggle('is-done', !!done);
    var streak = Daily.streak();
    el.dailyMeta.textContent = done
      ? 'Done — you got ' + done.score + '/' + Daily.LENGTH + (streak > 1 ? ' · ' + streak + ' day streak' : '')
      : Daily.LENGTH + ' pictures · ' + (Daily.CLOCK_MS / 1000) + ' seconds' +
        (streak ? ' · ' + streak + ' day streak' : '');
  }

  function startDaily() {
    if (!todaysPuzzle) return;
    Sfx.unlock();
    cfg.play = 'solo';
    cfg.answers = 'type';
    cfg.catId = todaysPuzzle.cat.id;
    cfg.clockMs = Daily.CLOCK_MS;
    cfg.pictureMode = 'normal';
    cfg.deck = 'images';
    cfg.names = [cfg.names[0] || 'YOU', cfg.names[1] || ''];
    Sfx.setEnabled(cfg.sound);
    Sfx.setTick(cfg.tick);
    startDuel({ daily: todaysPuzzle });
  }

  /* ══════════════════ THE GUIDED FLOW ══════════════════
     The app began as a tool for one operator who knew the keyboard.
     A stranger arriving from a video knows none of it, so setup is a
     sequence of single questions rather than one dense form. Everything
     with a sensible default hides behind "More options". */
  var STEPS = ['mode', 'category', 'details', 'ready'];
  var stepAt = 0, chosenCat = null;
  var todaysPuzzle = null;

  /* What this browser has played, per deck. Shown on the gallery so the
     decks stop being interchangeable strangers. */
  function loadStats() {
    try { return JSON.parse(localStorage.getItem('dhd.stats') || '{}') || {}; }
    catch (e) { return {}; }
  }
  function recordPlay(catId, mode, bestRally, score) {
    try {
      var all = loadStats();
      var row = all[catId] || { duel: 0, solo: 0, rally: 0, best: 0 };
      row[mode] = (row[mode] || 0) + 1;
      if (bestRally > (row.rally || 0)) row.rally = bestRally;
      if (score != null && score > (row.best || 0)) row.best = score;
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
    if (row.best) bits.push('best <b>' + row.best + '</b>');
    if (row.rally) bits.push('rally <b>' + row.rally + '</b>');
    return bits.join(' · ');
  }

  /* One good picture per deck for the category gallery. */
  var COVERS = {
    superheroes: 'spider-man', disney: 'mickey-mouse', animals: 'lion',
    starwars: 'darth-vader', sitcoms: 'michael-scott', videogames: 'mario',
    cartoons: 'bugs-bunny', pokemon: 'pikachu', dogs: 'golden-retriever',
    'nba-today': 'lebron-james', 'nba-goats': 'michael-jordan',
    celebrities: 'tom-hanks', streamers: 'mrbeast'
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
    /* Step 1's back arrow goes to the menu — it used to be disabled here,
       which left no way out of the wizard once you'd pressed PLAY. */
    el.flowBack.title = stepAt === 0 ? 'Back to the menu' : 'Back a step';
    el.flowBack.setAttribute('aria-label', el.flowBack.title);
    el.flowCount.textContent = 'Step ' + (stepAt + 1) + ' of ' + STEPS.length;
    [].forEach.call(el.flowDots.children, function (dot, n) {
      dot.className = n < stepAt ? 'done' : n === stepAt ? 'now' : '';
    });
    if (name === 'details') refreshDetails();
    if (name === 'ready') refreshReady();
    /* Arriving at the picker clears the previous pick. A card left glowing
       from last time reads as a recommendation, and the wizard's whole point
       is that the choice is made fresh each visit. */
    if (name === 'category') { chosenCat = null; refreshCatGrid(); }
    syncGates();
    try { el.flow.scrollIntoView({ block: 'start' }); } catch (e) {}
  }

  function buildDots() {
    el.flowDots.innerHTML = '';
    STEPS.forEach(function () { el.flowDots.appendChild(document.createElement('li')); });
  }

  /* ── the category gallery ── */
  function refreshCatGrid(force) {
    if (force) el.catGrid.innerHTML = '';
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

      var withArt = cat.text ? cat.items.length
                 : cat.items.filter(function (it) { return Store.hasArt(cat.id, it.slug); }).length;
      card.innerHTML =
        '<div class="catcard__art"></div>' +
        '<div class="catcard__body">' +
          '<span class="catcard__name"></span>' +
          '<span class="catcard__blurb"></span>' +
          '<span class="catcard__count">' + (withArt || cat.items.length) + ' answers</span>' +
          '<span class="catcard__history">' + historyLine(cat.id) + '</span>' +
        '</div>';
      card.querySelector('.catcard__name').textContent = cat.name;
      card.querySelector('.catcard__blurb').textContent = cat.blurb || '';

      /* A text deck has no answer artwork to lead with, so it may name a
         picture of its own; failing that, a mark on the deck's own colour. */
      if (cat.text) {
        card.classList.add('catcard--text');
        if (cat.cover) {
          var ci = new Image();
          ci.alt = '';
          ci.src = cat.cover;
          var artT = card.querySelector('.catcard__art');
          artT.style.setProperty('--cover', 'url("' + cat.cover + '")');
          artT.appendChild(ci);
        } else {
          card.querySelector('.catcard__art').innerHTML =
            '<span class="catcard__glyph">\u266a</span>';
        }
      }

      var coverSlug = COVERS[cat.id];
      var cover = (coverSlug && cat.items.filter(function (i) { return i.slug === coverSlug; })[0]) || cat.items[0];
      if (!cat.text && cover) {
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
          var art = card.querySelector('.catcard__art');
          art.style.setProperty('--cover', 'url("' + url.replace(/"/g, '\\"') + '")');
          art.appendChild(img);
        });
      }

      if (cat.custom && cat.code) {
        var stats = document.createElement('span');
        stats.className = 'catcard__stats';
        card.querySelector('.catcard__body').appendChild(stats);
        (function (node, code) {
          Decks.stats(code).then(function (st) {
            if (!st) return;
            node.innerHTML = '<span class="up">\u25b2 ' + (st.up || 0) + '</span>' +
                             '<span class="down">\u25bc ' + (st.down || 0) + '</span>' +
                             '<span>' + (st.plays || 0) + ' played</span>';
          });
        })(stats, cat.code);
      }

      if (cat.custom) {
        var badge = document.createElement('span');
        badge.className = 'catcard__badge';
        badge.textContent = cat.code ? 'shared' : 'yours';
        card.appendChild(badge);

        /* Long-press or right-click to edit, so the ordinary tap still
           just starts a game with it. */
        card.addEventListener('contextmenu', function (ev) {
          ev.preventDefault();
          var deck = Decks.get(cat.id);
          if (deck) openBuilder(deck);
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

    el.catGrid.appendChild(makeTile('\u002b', 'Make your own',
      'Your pictures, or just text. Then share it.', function () { openBuilder(null); }));
    el.catGrid.appendChild(makeTile('\u2193', 'Play someone\u2019s deck',
      'Got a code from a friend? Put it in here.', openDeckGet));

    markChosenCat();
  }

  /* The two tiles at the end of the gallery that aren't decks. */
  function makeTile(glyph, title, sub, onClick) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'catcard catcard--new';
    b.innerHTML = '<span class="catcard__glyph"></span><b></b><span></span>';
    b.querySelector('.catcard__glyph').textContent = glyph;
    b.querySelector('b').textContent = title;
    b.querySelectorAll('span')[1].textContent = sub;
    b.addEventListener('click', onClick);
    return b;
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

    /* Built as nodes throughout. Two of these are user text — the players'
       own names and, for a custom deck, a name somebody else published —
       and assembling this as a string put that text through the HTML
       parser. Repairing it afterwards is too late: the parser runs the
       moment innerHTML is assigned. */
    function bit() {
      var span = document.createElement('span');
      for (var i = 0; i < arguments.length; i++) {
        var part = arguments[i];
        /* `typeof part === 'object'`, not `part.bold !== undefined` —
           every string carries a legacy String.prototype.bold method, so
           the looser test treated plain text as a bold marker. */
        if (part && typeof part === 'object') {
          var b = document.createElement('b');
          b.textContent = part.bold;
          span.appendChild(b);
        } else {
          span.appendChild(document.createTextNode(part));
        }
      }
      el.summary.appendChild(span);
      return span;
    }

    el.summary.textContent = '';
    if (solo)        bit({ bold: cfg.names[0] }, ' solo');
    else if (online) bit({ bold: cfg.names[0] }, ' vs whoever joins');
    else             bit({ bold: cfg.names[0] }, ' vs ', { bold: cfg.names[1] });
    bit({ bold: cat.name });
    bit({ bold: (cfg.clockMs / 1000) + 's' }, ' each');
    bit('you ', { bold: typed ? 'type' : 'say' }, ' answers');
    if (cfg.pictureMode !== 'normal') bit({ bold: cfg.pictureMode }, ' pictures');

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
  var NUMBER_WORDS = ['no', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
    'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
    'seventeen', 'eighteen', 'nineteen', 'twenty'];

  function buildSetup() {
    /* Counted from the data, not typed into the markup — this line said
       "Eleven decks" for two categories longer than it was true. */
    var n = CATS.length;
    el.catSubtitle.textContent =
      (NUMBER_WORDS[n] ? NUMBER_WORDS[n].charAt(0).toUpperCase() + NUMBER_WORDS[n].slice(1) : n) +
      ' decks. Some are much harder than they look.';

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

    /* A deck with no pictures can't have a picture mode. Lock the control to
       Normal and say why, rather than offering settings that do nothing. */
    if (cat.text) {
      el.revealModeSelect.value = 'normal';
      el.revealModeSelect.disabled = true;
      if (el.silhouetteNote) el.silhouetteNote.textContent = 'This deck is songs, not pictures — picture modes don\u2019t apply.';
      return;
    }
    el.revealModeSelect.disabled = false;

    var ok = !!cat.silhouette;
    opt.disabled = !ok;
    opt.textContent = ok ? 'Silhouette' : 'Silhouette (needs cut-out artwork)';
    if (!ok && el.revealModeSelect.value === 'silhouette') el.revealModeSelect.value = 'normal';
    if (el.silhouetteNote) {
      el.silhouetteNote.textContent = ok
        ? 'This deck has cut-out artwork, so Silhouette works on it.'
        : '';
    }
  }

  function refreshMediaCount() {
    var cat = catById(el.catSelect.value);
    var n = cat.text ? cat.items.length
            : cat.items.filter(function (it) { return Store.hasArt(cat.id, it.slug); }).length;
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
    /* Nothing to go and look for: these decks carry what they show. */
    if (G.cat.text || G.cat.custom) return shuffle(items.slice());
    /* A picture with no alpha channel is a black rectangle in silhouette
       mode, so those answers sit the round out rather than being unguessable. */
    if ((cfg.pictureMode || 'normal') === 'silhouette' && G.cat.silhouette) {
      var lit = items.filter(function (it) { return !it.flat; });
      if (lit.length >= 12) items = lit;
    }
    var withArt = shuffle(items.filter(function (it) { return Store.hasArt(G.cat.id, it.slug, it); }));
    var without = shuffle(items.filter(function (it) { return !Store.hasArt(G.cat.id, it.slug, it); }));
    // It's a picture round — only fall back to clue cards if there is no art at all.
    if (cfg.deck === 'images' && withArt.length) return withArt;
    return withArt.concat(without);
  }

  function startDuel(opts) {
    opts = opts || {};
    G.daily = opts.daily || null;
    pods[0].root.classList.remove('is-dead');
    pods[1].root.classList.remove('is-dead');
    el.reveal.hidden = el.penaltyPop.hidden = el.boardPeek.hidden = true;
    el.boardPrompt.hidden = true;
    document.body.classList.remove('is-revealing');
    stopTicker();
    clearTimeout(G.introTimer);
    clearTimeout(G.revealTimer);
    G.pendingBeat = null;
    /* A daily's settings come from the puzzle, not from the wizard's
       controls — reading those back would swap the day's category for
       whatever the dropdown happens to hold. */
    if (!G.daily) readSetup();
    G.cat = catById(cfg.catId);
    G.queue = G.daily ? G.daily.items.slice() : buildQueue();
    G.marks = [];
    G.history = [];        // every picture played, for the end-of-game recap
    G.curWrongs = 0;
    G.curLogged = false;
    G.ranOut = null;
    G.carded = false;
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
    renderShortcuts();
    el.rally.hidden = false;
    renderRally(true);

    if (G.cat.code) Decks.played(G.cat.code);

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

    /* Nobody is playing against anybody in solo, and a daily least of all —
       a coin flip and a "VS" there is just wrong. */
    var secs = Math.round(G.startMs / 1000);
    el.introX.hidden = el.introP2.hidden = G.solo;
    if (G.daily) {
      el.introEyebrow.textContent = "TODAY'S CHALLENGE \u00b7 DAY " + G.daily.day;
      el.introFirst.textContent = G.queue.length + ' PICTURES \u00b7 ' + secs + ' SECONDS';
    } else if (G.solo) {
      el.introEyebrow.textContent = 'CATEGORY';
      el.introFirst.textContent = 'AS MANY AS YOU CAN IN ' + secs + ' SECONDS';
    } else {
      el.introEyebrow.textContent = 'CATEGORY';
      el.introFirst.textContent = (cfg.first === 'flip' ? 'COIN FLIP — ' : '') +
        G.players[G.active].name + ' STARTS WITH CONTROL';
    }
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

  /* Every picture that leaves the board gets a line in the recap: what it
     was, how it ended, and who was on the clock for it. `timeout` is the
     one nobody answered — the clock ran out while it was still up. */
  function logItem(outcome) {
    var item = G.queue[G.idx];
    if (!item || G.curLogged) return null;   // a pass that empties the clock
    G.curLogged = true;                      // is still one line, not two

    var rec = {
      slug: item.slug, name: item.name, outcome: outcome, prompt: item.prompt || null,
      who: G.solo ? -1 : G.active, wrongs: G.curWrongs
    };
    G.history.push(rec);
    G.curWrongs = 0;
    return rec;
  }

  function doCorrect() {
    if (G.phase !== 'live') return;
    if (locked(200)) return;
    G.players[G.active].right++;
    if (G.daily) G.marks[G.idx] = 1;
    logItem('yes');
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
    if (G.daily) G.marks[G.idx] = 0;
    logItem('pass');
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
    if (G.daily && G.marks[G.idx] === undefined) G.marks[G.idx] = 0;
    G.curWrongs++;          // the picture stays up, so this isn't a line yet
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
    /* A daily is a fixed ten. Running out is the end of the run, not a
       cue to reshuffle. */
    if (G.daily && G.idx >= G.queue.length) { commit(); return endSolo(); }
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
    /* Held so a pause landing inside the beat doesn't swallow the handover.
       togglePause() deliberately leaves this alone; resume runs it. */
    G.pendingBeat = then;
    G.revealTimer = setTimeout(function () {
      el.reveal.hidden = true;
      document.body.classList.remove('is-revealing');
      if (G.phase !== 'reveal') return;   // reset/pause/quit landed mid-beat
      G.pendingBeat = null;
      then();
    }, Math.max(60, ms));
  }

  function togglePause() {
    if (G.phase === 'live' || G.phase === 'reveal') {
      commit();
      clearTimeout(G.revealTimer);   // the continuation is kept, not dropped
      el.reveal.hidden = true;
      G.phase = 'paused';
      stopTicker();
      document.body.classList.add('is-frozen');
      el.ovlPause.hidden = false;
      el.passBar.disabled = true;
    } else if (G.phase === 'paused') {
      el.ovlPause.hidden = true;
      document.body.classList.remove('is-frozen');
      document.body.classList.remove('is-revealing');
      /* Paused mid-reveal: finish that beat rather than resuming a picture
         that has already been answered. The continuation calls goLive(). */
      var pending = G.pendingBeat;
      if (pending) { G.pendingBeat = null; G.phase = 'reveal'; pending(); }
      else goLive();
    }
  }

  /* ── end-of-round recap ─────────────────────────────────────
     Two parts. The strip names the picture that was on the board when
     the round ended — without it people rewind the footage arguing about
     what the last one was. The grid below is every picture of the round,
     colour-coded, collapsed by default so it doesn't bury the score. */

  var OUTCOME_TAG = { yes: '\u2713', pass: '\u2192', timeout: '\u2715' };

  function renderLastUp() {
    var last = G.history[G.history.length - 1];
    if (!last) { el.lastUp.hidden = true; return; }
    el.lastUpEyebrow.textContent =
      last.outcome === 'timeout' ? 'TIME RAN OUT ON' :
      last.outcome === 'pass'    ? 'LAST PICTURE — PASSED' :
                                   'LAST PICTURE';
    el.lastUpName.textContent = last.name;
    el.lastUp.hidden = false;
    el.lastUpImg.hidden = true;
    el.lastUpImg.removeAttribute('src');
    if (last.prompt) {                       // a text deck has nothing to show
      el.lastUpEyebrow.textContent = last.outcome === 'timeout'
        ? 'TIME RAN OUT ON \u201c' + last.prompt + '\u201d'
        : '\u201c' + last.prompt + '\u201d WAS FROM';
      return;
    }
    Store.resolve(G.cat.id, { slug: last.slug, name: last.name }).then(function (url) {
      if (!url || el.lastUpName.textContent !== last.name) return;
      el.lastUpImg.onerror = function () { el.lastUpImg.hidden = true; };
      el.lastUpImg.src = url;
      el.lastUpImg.hidden = false;
    });
  }

  function esc(t) {
    return String(t).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function renderRecap() {
    var list = G.history;
    el.recap.innerHTML = '';
    if (!list.length) { el.recap.hidden = true; el.recapToggle.hidden = true; return; }

    el.recapToggle.hidden = false;
    el.recapToggle.textContent = 'View results (' + list.length + ')';
    el.recap.hidden = el.recapLegend.hidden = true;   // collapsed until asked for

    /* A key, so the colours don't need explaining. Only a duel has players
       to tell apart. */
    var key = '';
    if (!G.solo) {
      key += '<span class="rlg rlg--p0">' + esc(G.players[0].name) + '</span>' +
             '<span class="rlg rlg--p1">' + esc(G.players[1].name) + '</span>' +
             '<span class="rlg__gap"></span>';
    }
    key += '<span class="rlg rlg--yes">\u2713 got it</span>' +
           '<span class="rlg rlg--pass">\u2192 passed</span>';
    if (list.some(function (h) { return h.outcome === 'timeout'; })) {
      key += '<span class="rlg rlg--timeout">\u2715 ran out</span>';
    }
    el.recapLegend.innerHTML = key;

    list.forEach(function (h, i) {
      var cell = document.createElement('button');
      cell.type = 'button';
      cell.className = 'recap__cell recap__cell--' + h.outcome +
        (h.who >= 0 ? ' recap__cell--p' + h.who : '');
      (function (n) { cell.addEventListener('click', function () { openShot(n); }); })(i);

      if (h.prompt) {
        var pr = document.createElement('span');
        pr.className = 'recap__prompt';
        pr.textContent = h.prompt;
        cell.appendChild(pr);
      } else {
        var img = document.createElement('img');
        img.className = 'recap__img';
        img.alt = h.name;
        img.loading = 'lazy';
        cell.appendChild(img);
        Store.resolve(G.cat.id, { slug: h.slug, name: h.name }).then(function (url) {
          if (url) img.src = url;
        });
      }

      var tag = document.createElement('span');
      tag.className = 'recap__tag';
      tag.textContent = OUTCOME_TAG[h.outcome] || '';
      tag.title = h.outcome === 'yes' ? 'Correct' : h.outcome === 'pass' ? 'Passed' : 'Ran out of clock';
      cell.appendChild(tag);

      /* In a duel the whole point of the recap is settling who had which
         picture, so the name is a filled pill in the player's colour rather
         than small print somebody has to squint at. */
      if (h.who >= 0 && G.players[h.who]) {
        var who = document.createElement('span');
        who.className = 'recap__who';
        who.textContent = G.players[h.who].name.slice(0, 8);
        cell.appendChild(who);
      }

      var name = document.createElement('b');
      name.className = 'recap__name';
      name.textContent = h.name;
      if (h.wrongs) name.textContent += ' \u00b7 ' + h.wrongs + ' wrong';
      cell.appendChild(name);

      el.recap.appendChild(cell);
    });
  }

  /* ── mute ────────────────────────────────────────────────────
     The wizard has a sound checkbox, but it's four steps deep and useless
     once a round is running. This is the same setting, reachable from any
     screen and from the M key. */
  function renderMute() {
    var on = !!cfg.sound;
    el.muteBtn.classList.toggle('is-muted', !on);
    el.muteBtn.setAttribute('aria-pressed', on ? 'false' : 'true');
    el.muteBtn.title = on ? 'Mute sound' : 'Unmute sound';
    el.muteLabel.textContent = on ? 'Sound on' : 'Muted';
    if (el.optSound) el.optSound.checked = on;   // keep the wizard honest
  }

  function toggleMute() {
    cfg.sound = !cfg.sound;
    Sfx.setEnabled(cfg.sound);
    if (cfg.sound) Sfx.unlock();
    try { localStorage.setItem('dhd.cfg', JSON.stringify(cfg)); } catch (e) {}
    renderMute();
  }

  /* ── the picture viewer ──────────────────────────────────────
     One picture at a time, big, with the answer under it. Arrows and the
     keyboard step through the round in the order it was played. */
  var shotAt = -1;

  var OUTCOME_WORD = { yes: 'Got it', pass: 'Passed', timeout: 'Ran out of clock' };

  function openShot(i) {
    if (!G.history.length) return;
    shotAt = Math.max(0, Math.min(G.history.length - 1, i));
    var h = G.history[shotAt];

    el.shotBadge.className = 'shot__badge shot__badge--' + h.outcome;
    el.shotBadge.textContent = (OUTCOME_TAG[h.outcome] || '') + ' ' + (OUTCOME_WORD[h.outcome] || '');
    el.shotName.textContent = h.name;

    var meta = [];
    if (h.who >= 0 && G.players[h.who]) meta.push(G.players[h.who].name);
    if (h.wrongs) meta.push(h.wrongs + ' wrong ' + (h.wrongs === 1 ? 'guess' : 'guesses'));
    el.shotMeta.textContent = meta.join(' \u00b7 ');
    el.shotCount.textContent = (shotAt + 1) + ' of ' + G.history.length;

    el.shotPrev.disabled = shotAt === 0;
    el.shotNext.disabled = shotAt === G.history.length - 1;

    el.shotImg.removeAttribute('src');
    el.shotImg.alt = h.name;
    var stamp = ++openShot._n;
    if (h.prompt) {
      el.shotImg.hidden = true;
      el.shotPrompt.textContent = h.prompt;
      el.shotPrompt.hidden = false;
    } else {
      el.shotPrompt.hidden = true;
      el.shotImg.hidden = false;
      Store.resolve(G.cat.id, { slug: h.slug, name: h.name }).then(function (url) {
        if (stamp !== openShot._n) return;        // arrowed on before this landed
        if (url) el.shotImg.src = url;
      });
    }

    el.ovlShot.hidden = false;
    document.body.classList.add('is-shot');
    el.shotClose.focus({ preventScroll: true });
  }
  openShot._n = 0;

  function closeShot() {
    el.ovlShot.hidden = true;
    document.body.classList.remove('is-shot');
    shotAt = -1;
  }

  function stepShot(d) {
    if (shotAt < 0) return;
    var next = shotAt + d;
    if (next < 0 || next >= G.history.length) return;
    openShot(next);
  }

  function showRecap() {
    renderLastUp();
    renderRecap();
    renderDeckVote();
  }

  /* A published deck can be voted on from the card that ends the round —
     the moment you actually have an opinion about it. */
  function renderDeckVote() {
    var code = G.cat && G.cat.code;
    if (!code) { el.deckVote.hidden = true; return; }
    el.deckVote.hidden = false;
    paintVote(null, Decks.myVote(code));
    Decks.stats(code).then(function (st) {
      if (!st || (G.cat && G.cat.code) !== code) return;
      paintVote(st, Decks.myVote(code));
    });
  }

  function paintVote(st, mine) {
    if (st) {
      el.deckVoteUpN.textContent = st.up || 0;
      el.deckVoteDownN.textContent = st.down || 0;
      el.deckVotePlays.textContent = (st.plays || 0) === 1 ? 'played once' : 'played ' + (st.plays || 0) + ' times';
    }
    el.deckVoteUp.setAttribute('aria-pressed', mine === 1 ? 'true' : 'false');
    el.deckVoteDown.setAttribute('aria-pressed', mine === -1 ? 'true' : 'false');
  }

  function castVote(want) {
    var code = G.cat && G.cat.code;
    if (!code) return;
    Decks.vote(code, want).then(function (out) {
      if (out) paintVote(out, out.mine);
    }).catch(function () { toast('Could not send that vote'); });
  }

  function endDuel(winner) {
    var ranOut = logItem('timeout');   // whatever was on the board when time ran out
    G.ranOut = ranOut;                 // endSolo runs before this function's tail
    G.phase = 'over';
    stopTicker();
    clearTimeout(G.revealTimer);
    G.pendingBeat = null;
    el.passBar.disabled = true;

    /* Put the answer up before the card covers the board. Without this the
       last picture vanishes unanswered and everyone argues about what it
       was. Silhouette and zoom drop away too, so it's the real image. */
    if (ranOut) {
      document.body.classList.add('is-revealing');
      el.reveal.className = 'reveal reveal--pass';
      el.revealEyebrow.textContent = 'TIME — IT WAS';
      el.revealName.textContent = ranOut.name;
      el.reveal.hidden = false;
    } else {
      el.reveal.hidden = true;
    }
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
    el.resNewLabel.innerHTML = 'CATEGORIES <i>(C)</i>';
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
    showRecap();
    setTimeout(function () {
      el.reveal.hidden = true;
      document.body.classList.remove('is-revealing');
      el.ovlResult.hidden = false;
    }, ranOut ? 2200 : 900);
  }

  /* Solo has no loser — the card is a score, built to be screenshotted. */
  function endSolo() {
    if (G.carded) return;   // not `phase === over`: endDuel sets that before
    G.carded = true;        // it delegates here, which used to bail every time
    G.phase = 'over';
    stopTicker();
    clearTimeout(G.revealTimer);
    G.pendingBeat = null;
    el.passBar.disabled = true;
    el.answerBar.hidden = true;

    /* Same as the duel: if the clock ran out on a picture, that answer goes
       up before the card lands. A daily that simply reached its tenth has
       nothing outstanding, so it skips straight through. */
    var ranOut = G.ranOut;
    if (ranOut) {
      document.body.classList.add('is-revealing');
      el.reveal.className = 'reveal reveal--pass';
      el.revealEyebrow.textContent = 'TIME — IT WAS';
      el.revealName.textContent = ranOut.name;
      el.reveal.hidden = false;
    } else {
      el.reveal.hidden = true;
      document.body.classList.remove('is-revealing');
    }
    var p = G.players[0];
    G.winnerName = p.name;
    el.resultName.textContent = p.name;
    el.resultLabel.textContent = G.daily ? "TODAY'S CHALLENGE" : 'TIME';
    el.resRematchLabel.innerHTML = 'GO AGAIN <i>(R)</i>';
    el.resNewLabel.innerHTML = 'CATEGORIES <i>(C)</i>';
    el.resultLine.textContent = G.daily
      ? G.cat.name + ' · day ' + G.daily.day
      : G.cat.name + ' · ' + (G.startMs / 1000) + ' seconds';

    if (G.daily) {
      var marks = [];
      for (var i = 0; i < Daily.LENGTH; i++) marks.push(G.marks[i] === 1 ? 1 : 0);
      Daily.save(G.daily.key, p.right, marks);
      el.resultMarks.innerHTML = marks.map(function (m) {
        return '<i class="' + (m ? 'hit' : 'miss') + '"></i>';
      }).join('');
      el.resultMarks.hidden = false;
    } else {
      el.resultMarks.hidden = true;
    }
    el.soloScore.textContent = p.right;
    el.soloBest.textContent = G.bestRally;
    el.resultSolo.hidden = false;
    el.resultTbl.hidden = true;
    recordPlay(G.cat.id, 'solo', G.bestRally, p.right);
    showRecap();
    setTimeout(function () {
      el.reveal.hidden = true;
      document.body.classList.remove('is-revealing');
      el.ovlResult.hidden = false;
    }, ranOut ? 2200 : 900);
  }

  function backToSetup() {
    G.phase = 'idle';
    stopTicker();
    clearTimeout(G.introTimer);
    clearTimeout(G.revealTimer);
    G.pendingBeat = null;
    el.ovlIntro.hidden = el.ovlResult.hidden = el.ovlPause.hidden = true;
    el.reveal.hidden = el.penaltyPop.hidden = el.boardPeek.hidden = true;
    el.lastUp.hidden = el.recap.hidden = el.recapToggle.hidden = true;
    el.recapLegend.hidden = true;
    el.recap.innerHTML = el.recapLegend.innerHTML = '';
    document.body.classList.remove('is-revealing');
    clearTimeout(G.revealTimer);
    G.pendingBeat = null;
    pods[0].root.classList.remove('is-dead');
    pods[1].root.classList.remove('is-dead');
    show('setup');
    goStep(STEPS.length - 1);
    refreshMediaCount();
  }

  /* The shortcut strip is genuinely useful on a desktop, but half of it is a
     lie in typed mode — nobody is marking, so the marking keys do nothing.
     Show the keys that actually work. */
  function renderShortcuts() {
    var typed = cfg.answers === 'type';
    var keys = typed
      ? [['ENTER', 'submit answer'], ['P', 'pause'], ['A', 'peek'],
         ['F', 'full screen'], ['R', 'restart'], ['?', 'help']]
      : [['ENTER', 'correct → hand off'], ['SPACE', 'pass −' + (cfg.passCostMs / 1000) + 's'],
         ['X', 'wrong −' + (cfg.penaltyMs / 1000) + 's'], ['P', 'pause'], ['A', 'peek'],
         ['F', 'full screen'], ['H', 'host view'], ['?', 'help']];
    el.hostBar.innerHTML = keys.map(function (k) {
      return '<span class="hostbar__k"><b>' + k[0] + '</b> ' + k[1] + '</span>';
    }).join('');
  }

  /* ── board rendering ── */
  function showItem() {
    var item = G.queue[G.idx];
    G.curLogged = false;
    G.curWrongs = 0;
    el.duelProgress.textContent = G.idx + 1;
    el.boardCardClue.textContent = item.clue;
    el.boardClue.textContent = cfg.clue ? item.clue : '';
    renderPeek(item);

    /* Text goes on the board instead of a picture whenever this answer has
       no picture to show — a whole text deck, or one text row inside a
       custom deck that mixes the two. */
    if (G.cat.text || (item.prompt && !item.imgUrl)) {
      el.boardPromptKicker.textContent = G.cat.promptLabel || 'SONG';
      el.boardPromptText.textContent = item.prompt || item.name;
      el.boardPrompt.hidden = false;
      el.boardImg.hidden = el.boardCard.hidden = true;
      el.boardImg.removeAttribute('src');
      lastImageUrl = null;
      showItem._n++;
      return;
    }
    el.boardPrompt.hidden = true;

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

  /* ── sharing ──────────────────────────────────────────────────
     Spoiler-free on purpose: squares, not answers. Somebody reading it
     learns how you did without learning what was in it. */
  function shareText() {
    var url = (cfg.hostUrl || 'dawghouseduel.com').replace(/\/host$/, '');
    if (G.daily) {
      var marks = (G.marks || []).slice(0, Daily.LENGTH);
      var grid = '';
      for (var i = 0; i < Daily.LENGTH; i++) grid += (marks[i] === 1 ? '🟩' : '⬛');
      var streak = Daily.streak();
      return 'Dawg House Duel — Day ' + G.daily.day + '\n' +
        G.cat.name + ' · ' + G.players[0].right + '/' + Daily.LENGTH + '\n' +
        grid + (streak > 1 ? '\n' + streak + ' day streak' : '') + '\n' + url;
    }
    if (G.solo) {
      return 'Dawg House Duel — ' + G.cat.name + '\n' +
        G.players[0].right + ' correct · best rally ' + G.bestRally +
        ' · ' + (G.startMs / 1000) + 's\n' + url;
    }
    var a = G.players[0], b = G.players[1];
    return 'Dawg House Duel — ' + G.cat.name + '\n' +
      a.name + ' ' + a.right + ' — ' + b.right + ' ' + b.name + '\n' +
      G.winnerName + ' took it\n' + url;
  }

  function shareResult() {
    var text = shareText();
    if (navigator.share) {
      navigator.share({ text: text }).catch(function () {});
      return;
    }
    (navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject())
      .then(function () { toast('Result copied'); })
      .catch(function () { window.prompt('Copy your result', text); });
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
      return;
    }

    el.answerBar.classList.remove('is-wrong');
    void el.answerBar.offsetWidth;
    el.answerBar.classList.add('is-wrong');
    el.answerInput.select();

    /* If they named something else that is genuinely in this deck, say so.
       "Wrong" is much less useful than "right idea, wrong one". */
    var other = null;
    for (var i = 0; i < G.queue.length && !other; i++) {
      if (i === G.idx) continue;
      if (Match.check(typed, G.queue[i], G.tokenIndex)) other = G.queue[i];
    }
    toast(other ? 'That\u2019s ' + other.name + ' — but not this one' : 'Not quite');
    doWrong();
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
      /* A custom deck's slugs and image URLs are user text, so the tile is
         assembled rather than concatenated. */
      tile.innerHTML =
        '<div class="tile__thumb"></div>' +
        '<div class="tile__name"></div>' +
        '<div class="tile__file"></div>' +
        (row.source ? '<span class="tile__src"></span>' : '');
      var thumb = tile.querySelector('.tile__thumb');
      if (row.url) {
        var timg = document.createElement('img');
        timg.alt = '';
        timg.src = row.url;
        thumb.appendChild(timg);
      } else {
        var none = document.createElement('span');
        none.className = 'tile__none';
        none.textContent = 'NO IMAGE';
        thumb.appendChild(none);
      }
      tile.querySelector('.tile__name').textContent = it.name;
      tile.querySelector('.tile__file').textContent = it.slug + '.jpg';
      var src = tile.querySelector('.tile__src');
      if (src) {
        src.classList.add(row.source === 'upload' ? 'upload' : 'folder');
        src.textContent = row.source === 'upload' ? 'ADDED' : 'FOLDER';
      }

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

  el.dailyBtn.addEventListener('click', startDaily);
  on(el.builderBack, 'click', function () { show('setup'); goStep(STEPS.indexOf('category')); });
  on(el.builderSave, 'click', function () { if (saveDeck()) { show('setup'); goStep(STEPS.indexOf('category')); } });
  on(el.builderShare, 'click', shareDeck);
  on(el.builderDelete, 'click', function () {
    if (!draft) return;
    Decks.remove(draft.id);
    syncCats();
    buildSetup();
    refreshCatGrid(true);
    toast('Deck deleted');
    show('setup');
    goStep(STEPS.indexOf('category'));
  });
  on(el.deckAddRow, 'click', function () {
    draft.items.push(blankRow());
    renderDeckRows();
    var rows = el.deckRows.querySelectorAll('.input--answer');
    if (rows.length) rows[rows.length - 1].focus();
  });
  /* ── paste a list ──────────────────────────────────────────
     This used to be a window.prompt, which is a single line with no
     wrapping, no preview, and no way to fix a typo without starting
     again. It's a panel now that shows what it is about to make. */
  var pasteMode = 'answers';

  function parsePaste(text, mode) {
    var rows = [];
    text.split('\n').forEach(function (line) {
      line = line.trim();
      if (!line) return;
      if (mode === 'pairs') {
        /* A tab is what a spreadsheet actually pastes; a comma is what
           people type. Split on whichever shows up first. */
        var at = line.search(/[\t,]/);
        if (at > 0) {
          rows.push({ prompt: line.slice(0, at).trim(), answer: line.slice(at + 1).trim() });
          return;
        }
      }
      rows.push({ prompt: '', answer: line });
    });
    return rows.filter(function (r) { return r.answer; });
  }

  function refreshPaste() {
    var rows = parsePaste(el.pasteBox.value, pasteMode);
    el.pasteAdd.disabled = !rows.length;
    el.pasteAdd.textContent = 'Add ' + rows.length + ' answer' + (rows.length === 1 ? '' : 's');
    el.pastePreview.innerHTML = '';
    if (!rows.length) {
      el.pastePreview.textContent = 'Nothing to add yet.';
      return;
    }
    rows.slice(0, 6).forEach(function (r) {
      var line = document.createElement('div');
      line.className = 'paste__row';
      if (r.prompt) {
        var p1 = document.createElement('span');
        p1.className = 'paste__rowprompt';
        p1.textContent = r.prompt;
        line.appendChild(p1);
      }
      var a = document.createElement('b');
      a.textContent = r.answer;
      line.appendChild(a);
      el.pastePreview.appendChild(line);
    });
    if (rows.length > 6) {
      var more = document.createElement('div');
      more.className = 'paste__more';
      more.textContent = '+ ' + (rows.length - 6) + ' more';
      el.pastePreview.appendChild(more);
    }
  }

  function closePaste() { el.ovlPaste.hidden = true; }

  on(el.deckAddMany, 'click', function () {
    el.pasteBox.value = '';
    refreshPaste();
    el.ovlPaste.hidden = false;
    setTimeout(function () { try { el.pasteBox.focus(); } catch (e) {} }, 60);
  });
  on(el.pasteBox, 'input', refreshPaste);
  on(el.pasteCancel, 'click', closePaste);
  on(el.pasteClose, 'click', closePaste);
  on(el.pasteModes, 'click', function (e) {
    var btn = e.target.closest('[data-paste-mode]');
    if (!btn) return;
    pasteMode = btn.getAttribute('data-paste-mode');
    [].forEach.call(el.pasteModes.children, function (b) {
      b.classList.toggle('is-on', b === btn);
    });
    refreshPaste();
  });
  on(el.pasteAdd, 'click', function () {
    if (!draft) return;
    parsePaste(el.pasteBox.value, pasteMode).forEach(function (r) {
      var row = blankRow();
      row.prompt = r.prompt;
      row.answer = r.answer;
      draft.items.push(row);
    });
    draft.items = draft.items.filter(function (r) { return r.answer.trim() || r.prompt.trim() || r.imgUrl; });
    if (!draft.items.length) draft.items.push(blankRow());
    closePaste();
    renderDeckRows();
    saveDraft();
  });
  on(el.deckCoverPick, 'click', function () {
    pickImage(function (dataUrl) {
      if (!draft) return;
      draft.cover = dataUrl;
      delete draft.coverKey;      // a new picture needs uploading again
      renderDeckCover();
      saveDraft();
    });
  });
  on(el.deckCoverClear, 'click', function (e) {
    e.stopPropagation();
    if (!draft) return;
    delete draft.cover; delete draft.coverKey;
    renderDeckCover();
    saveDraft();
  });

  on(el.deckName, 'input', function () { draft && (draft.name = el.deckName.value); saveDraft(); });
  on(el.deckBlurb, 'input', function () { draft && (draft.blurb = el.deckBlurb.value); saveDraft(); });

  on(el.deckVoteUp, 'click', function () { castVote(1); });
  on(el.deckVoteDown, 'click', function () { castVote(-1); });
  on(el.deckShareClose, 'click', function () { el.ovlDeckShare.hidden = true; });
  on(el.deckKeyCopy, 'click', function () {
    var key = el.deckKeyValue.textContent;
    (navigator.clipboard ? navigator.clipboard.writeText(key) : Promise.reject())
      .then(function () { toast('Edit key copied'); })
      .catch(function () { window.prompt('Copy your edit key', key); });
  });
  on(el.deckUnpublish, 'click', function () {
    if (!draft || !Decks.owns(draft)) return;
    if (!window.confirm('Take this deck down? Anyone holding the code will stop being able to play it. Your own copy stays here.')) return;
    el.deckUnpublish.disabled = true;
    Decks.unpublish(draft).then(function () {
      Decks.save(draft);
      el.deckUnpublish.disabled = false;
      el.ovlDeckShare.hidden = true;
      el.builderShare.textContent = 'Share';
      toast('Taken down');
    }).catch(function (err) {
      el.deckUnpublish.disabled = false;
      toast(err.message || 'Could not take it down');
    });
  });
  on(el.deckShareDone, 'click', function () {
    el.ovlDeckShare.hidden = true;
    refreshMyDecksLink();
    show('setup');
    goStep(STEPS.indexOf('category'));
  });
  on(el.deckShareCopy, 'click', function () {
    var link = deckLink(el.deckShareCode.textContent);
    (navigator.clipboard ? navigator.clipboard.writeText(link) : Promise.reject())
      .then(function () { toast('Link copied'); })
      .catch(function () { window.prompt('Copy this link', link); });
  });
  on(el.deckGetClose, 'click', function () { el.ovlDeckGet.hidden = true; });
  on(el.deckGetForm, 'submit', function (e) { e.preventDefault(); getDeckByCode(el.deckGetCode.value); });
  on(el.browseDecks, 'click', openDeckGet);
  on(el.toMyDecks, 'click', openMyDecks);
  on(el.myDecksClose, 'click', function () { el.ovlMyDecks.hidden = true; });
  on(el.myDecksNew, 'click', function () { el.ovlMyDecks.hidden = true; openBuilder(null); });

  on(el.deckSearch, 'input', function () {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(function () {
      galleryState.q = el.deckSearch.value.trim();
      galleryState.page = 1;
      loadGallery();
    }, 280);
  });
  on(el.deckSort, 'click', function (e) {
    var btn = e.target.closest('[data-sort]');
    if (!btn) return;
    galleryState.sort = btn.getAttribute('data-sort');
    galleryState.page = 1;
    [].forEach.call(el.deckSort.children, function (b) { b.classList.toggle('is-on', b === btn); });
    loadGallery();
  });
  on(el.deckPrev, 'click', function () {
    if (galleryState.page > 1) { galleryState.page--; loadGallery(); }
  });
  on(el.deckNext, 'click', function () {
    if (galleryState.page < galleryState.pages) { galleryState.page++; loadGallery(); }
  });

  el.resShare.addEventListener('click', shareResult);
  on(el.muteBtn, 'click', toggleMute);
  on(el.shotClose, 'click', closeShot);
  on(el.shotPrev, 'click', function () { stepShot(-1); });
  on(el.shotNext, 'click', function () { stepShot(1); });
  /* Click the backdrop to dismiss, but not the picture itself. */
  on(el.ovlShot, 'click', function (e) { if (e.target === el.ovlShot) closeShot(); });
  on(el.recapToggle, 'click', function () {
    var open = el.recap.hidden;
    el.recap.hidden = el.recapLegend.hidden = !open;
    el.recapToggle.textContent = (open ? 'Hide results' : 'View results (' + G.history.length + ')');
    /* Opening the grid pushes the buttons past the fold on a laptop screen.
       Follow it down so the grid and the actions are both in view. */
    if (open) {
      requestAnimationFrame(function () {
        try { el.ovlResult.scrollTo({ top: el.ovlResult.scrollHeight, behavior: 'smooth' }); }
        catch (e) { el.ovlResult.scrollTop = el.ovlResult.scrollHeight; }
      });
    }
  });
  el.toTutorial.addEventListener('click', openTutorial);
  el.tutSkip.addEventListener('click', closeTutorial);
  el.tutBack.addEventListener('click', function () { showTutSlide(tutAt - 1); });
  el.tutNext.addEventListener('click', function () {
    if (tutAt === TUT_SLIDES - 1) closeTutorial(); else showTutSlide(tutAt + 1);
  });
  el.ovlTutorial.addEventListener('click', function (e) { if (e.target === el.ovlTutorial) closeTutorial(); });

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
  /* Optional controls: bind only if the markup actually has them, so
     renaming a button in the HTML can never take the whole boot down. */
  function on(node, ev, fn) { if (node) node.addEventListener(ev, fn); }
  on(el.toHelp, 'click', function () { closeTutorial(); openHelp(); });
  el.soundCheck.addEventListener('click', function () {
    Sfx.unlock();
    Sfx.setEnabled(true);
    Sfx.setTick(true);
    el.soundCheck.disabled = true;
    toast('Sound check — countdown, correct, pass, wrong, tick, buzzer, winner');
    Sfx.demo(function () {
      el.soundCheck.disabled = false;
      Sfx.setEnabled(el.optSound.checked);
      cfg.sound = el.optSound.checked;
      renderMute();
      Sfx.setTick(el.optTick.checked);
      toast(DHD.Sfx.ready() ? 'Sound check done' : 'No audio — check the system volume');
    });
  });
  el.helpClose.addEventListener('click', closeHelp);
  el.ovlHelp.addEventListener('click', function (e) { if (e.target === el.ovlHelp) closeHelp(); });

  el.passBar.addEventListener('click', function () { Sfx.unlock(); doPass(null); el.passBar.blur(); });
  el.resRematch.addEventListener('click', function () { el.ovlResult.hidden = true; startDuel(); });
  el.resNew.addEventListener('click', function () {
    backToSetup(); refreshDaily(); show('setup'); goStep(STEPS.indexOf('category'));
  });
  on(el.resMenu, 'click', function () { backToSetup(); refreshDaily(); show('welcome'); });

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
    /* The picture viewer takes the keyboard while it's up — otherwise R
       would restart the duel from under it. */
    if (!el.ovlShot.hidden) {
      if (k === 'Escape') { e.preventDefault(); closeShot(); }
      else if (k === 'ArrowLeft')  { e.preventDefault(); stepShot(-1); }
      else if (k === 'ArrowRight') { e.preventDefault(); stepShot(1); }
      return;
    }
    if (k === '?' || k === '/') { e.preventDefault(); if (el.ovlHelp.hidden) openHelp(); else closeHelp(); return; }
    if (k === 'Escape') { if (!el.ovlTutorial.hidden) { closeTutorial(); return; }
                          if (!el.ovlHelp.hidden) { closeHelp(); return; } if (html.dataset.screen !== 'setup') backToSetup(); return; }
    if (k === 'f' || k === 'F') { e.preventDefault(); toggleFullscreen(); return; }
    if (!el.ovlHelp.hidden) return;

    if (html.dataset.screen !== 'duel') {
      if (html.dataset.screen === 'setup' && (k === 'Enter')) { e.preventDefault(); startDuel(); }
      return;
    }

    if (G.phase === 'over') {
      if (k === 'r' || k === 'R') { el.ovlResult.hidden = true; startDuel(); }
      if (k === 'c' || k === 'C' || k === 'n' || k === 'N') {
        backToSetup(); refreshDaily(); show('setup'); goStep(STEPS.indexOf('category'));
      }
      if (k === 'm' || k === 'M') { backToSetup(); refreshDaily(); show('welcome'); }
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

  /* ══════════════════════════════════════════════════════════
     Make a deck

     A deck being edited lives in `draft` until it is saved. Rows are
     built from the draft rather than read out of the DOM, so a half-typed
     row can never be lost by a re-render.
     ══════════════════════════════════════════════════════════════ */
  var draft = null;

  function blankRow() {
    return { answer: '', alt: [], prompt: '', imgUrl: '' };
  }

  function newDraft() {
    return {
      id: Decks.newId(),
      name: '',
      blurb: '',
      code: null,
      items: [blankRow(), blankRow(), blankRow()]
    };
  }

  /* ── drafts ─────────────────────────────────────────────────
     The builder saves as you type. Losing twenty answers to a closed tab
     is the kind of thing people don't come back from, and "did that
     save?" is a question the screen should answer rather than the user
     having to wonder. */
  var saveTimer = 0, savedAt = 0;

  function setSaveState(text, cls) {
    if (!el.deckSaved) return;
    el.deckSaved.textContent = text;
    el.deckSaved.className = 'builder__saved' + (cls ? ' is-' + cls : '');
  }

  function saveDraft(now) {
    if (!draft) return;
    clearTimeout(saveTimer);
    var write = function () {
      draft.updated = Date.now();
      var ok = Decks.save(draft);
      savedAt = Date.now();
      setSaveState(ok ? 'Draft saved' : 'Too big to save — remove a picture', ok ? 'on' : 'off');
      el.builderDelete.hidden = false;
    };
    if (now) return write();
    setSaveState('Saving\u2026', 'wait');
    saveTimer = setTimeout(write, 600);
  }

  function renderDeckCover() {
    if (!el.deckCoverPick) return;
    var url = draft && draft.cover;
    el.deckCoverImg.hidden = !url;
    el.deckCoverEmpty.hidden = !!url;
    el.deckCoverClear.hidden = !url;
    if (url) el.deckCoverImg.src = url;
    else el.deckCoverImg.removeAttribute('src');
  }

  function openBuilder(deck) {
    draft = deck || newDraft();
    if (el.deckPrivate) el.deckPrivate.checked = !!draft.private;
    setSaveState(Decks.get(draft.id) ? 'Draft saved' : '', Decks.get(draft.id) ? 'on' : '');
    el.deckName.value = draft.name || '';
    el.deckBlurb.value = draft.blurb || '';
    el.builderDelete.hidden = !Decks.get(draft.id);
    el.builderShare.hidden = !draft.items.length;
    renderDeckRows();
    renderDeckCover();
    show('builder');
  }

  function renderDeckRows() {
    el.deckRows.innerHTML = '';
    draft.items.forEach(function (row, i) {
      el.deckRows.appendChild(buildDeckRow(row, i));
    });
    updateDeckCount();
  }

  function updateDeckCount() {
    var usable = draft.items.filter(function (r) {
      return r.answer.trim() && (r.prompt.trim() || r.imgUrl);
    }).length;
    el.deckCount.textContent = usable + (usable === 1 ? ' answer' : ' answers') +
      (usable < draft.items.length ? ' \u00b7 ' + (draft.items.length - usable) + ' unfinished' : '');
  }

  function buildDeckRow(row, i) {
    var wrap = document.createElement('div');
    wrap.className = 'deckrow';

    /* Picture. A hidden file input behind a button, so the tile itself is
       the target and there is no naked "Choose file" control. */
    var pic = document.createElement('button');
    pic.type = 'button';
    pic.className = 'deckrow__pic' + (row.imgUrl ? ' has-pic' : '');
    pic.title = row.imgUrl ? 'Change or remove this picture' : 'Add a picture';
    if (row.imgUrl) {
      var im = new Image();
      im.alt = '';
      im.src = row.imgUrl;
      pic.appendChild(im);
    } else {
      var lab = document.createElement('span');
      lab.textContent = '+ picture';
      pic.appendChild(lab);
    }
    pic.addEventListener('click', function () {
      if (row.imgUrl) {
        row.imgUrl = '';
        renderDeckRows();
        saveDraft();
        return;
      }
      pickImage(function (dataUrl) { row.imgUrl = dataUrl; renderDeckRows();
        saveDraft(); });
    });

    var answer = document.createElement('input');
    answer.className = 'input input--answer';
    answer.maxLength = 80;
    answer.placeholder = 'The answer';
    answer.value = row.answer;
    answer.addEventListener('input', function () {
      row.answer = answer.value;
      updateDeckCount();
      saveDraft();
    });

    var prompt = document.createElement('input');
    prompt.className = 'input input--prompt';
    prompt.maxLength = 160;
    prompt.placeholder = row.imgUrl ? 'Also accept… (optional)' : 'Or the text to show on the board';
    prompt.value = row.imgUrl ? (row.alt || []).join(', ') : row.prompt;
    prompt.addEventListener('input', function () {
      if (row.imgUrl) {
        row.alt = prompt.value.split(',').map(function (t) { return t.trim(); }).filter(Boolean);
      } else {
        row.prompt = prompt.value;
      }
      updateDeckCount();
      saveDraft();
    });

    var kill = document.createElement('button');
    kill.type = 'button';
    kill.className = 'deckrow__kill';
    kill.title = 'Remove this answer';
    kill.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';
    kill.addEventListener('click', function () {
      draft.items.splice(i, 1);
      if (!draft.items.length) draft.items.push(blankRow());
      renderDeckRows();
        saveDraft();
    });

    wrap.appendChild(pic);
    wrap.appendChild(answer);
    wrap.appendChild(prompt);
    wrap.appendChild(kill);
    return wrap;
  }

  /* Pictures are held as data URLs and scaled down on the way in. A phone
     photo is several megabytes and a deck of forty would blow both the
     browser's storage and the upload limit. */
  var PIC_MAX = 900;
  function pickImage(then) {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.addEventListener('change', function () {
      var file = input.files && input.files[0];
      if (!file) return;
      shrink(file, function (url) {
        if (url) then(url); else toast('Could not read that picture');
      });
    });
    input.click();
  }

  function shrink(file, then) {
    var reader = new FileReader();
    reader.onerror = function () { then(null); };
    reader.onload = function () {
      var img = new Image();
      img.onerror = function () { then(null); };
      img.onload = function () {
        var w = img.naturalWidth, h = img.naturalHeight;
        var scale = Math.min(1, PIC_MAX / Math.max(w, h));
        var cw = Math.max(1, Math.round(w * scale)), ch = Math.max(1, Math.round(h * scale));
        var c = document.createElement('canvas');
        c.width = cw; c.height = ch;
        c.getContext('2d').drawImage(img, 0, 0, cw, ch);
        try { then(c.toDataURL('image/jpeg', 0.82)); }
        catch (e) { then(reader.result); }      // tainted canvas — keep the original
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  }

  function readDraft() {
    draft.name = el.deckName.value.trim();
    draft.blurb = el.deckBlurb.value.trim();
    draft.items = draft.items.filter(function (r) {
      return r.answer.trim() && (r.prompt.trim() || r.imgUrl);
    }).map(function (r) {
      return {
        answer: r.answer.trim(),
        alt: (r.alt || []).filter(Boolean),
        prompt: (r.prompt || '').trim(),
        imgUrl: r.imgUrl || ''
      };
    });
    return draft;
  }

  function saveDeck() {
    var d = readDraft();
    if (!d.name) { toast('Give the deck a name'); el.deckName.focus(); return false; }
    if (!d.items.length) { toast('Add at least one answer with a picture or some text'); return false; }
    if (!Decks.save(d)) {
      toast('No room left in this browser — try fewer or smaller pictures');
      return false;
    }
    syncCats();
    buildSetup();
    refreshCatGrid(true);
    toast('Deck saved');
    el.builderDelete.hidden = false;
    return true;
  }

  function shareDeck() {
    if (!saveDeck()) return;
    var d = draft;
    var was = el.builderShare.textContent;
    el.builderShare.disabled = true;
    el.builderShare.textContent = 'Publishing…';
    Decks.publish(d, function (done, total) {
      el.builderShare.textContent = total ? 'Uploading ' + done + '/' + total + '…' : 'Publishing…';
    }, { private: !!(el.deckPrivate && el.deckPrivate.checked) }).then(function (code) {
      Decks.save(d);
      el.builderShare.disabled = false;
      el.builderShare.textContent = was;
      openDeckShare(code);
    }).catch(function (err) {
      el.builderShare.disabled = false;
      el.builderShare.textContent = was;
      toast(err.message || 'Could not publish that deck');
    });
  }

  function deckLink(code) {
    var base = (cfg.hostUrl || 'dawghouseduel.com').replace(/\/host$/, '');
    if (!/^https?:/.test(base)) base = 'https://' + base;
    return base.replace(/\/$/, '') + '/?deck=' + code;
  }

  function openDeckShare(code) {
    el.deckShareCode.textContent = code;
    el.deckShareUrl.textContent = deckLink(code).replace(/^https?:\/\//, '').split('/?')[0];

    /* The key is the only proof this deck is theirs, and the server has
       only its hash — nobody can hand it back later. Show it plainly and
       let them keep a copy. */
    var mine = draft && Decks.owns(draft);
    el.deckKeyBox.hidden = !mine;
    if (mine) el.deckKeyValue.textContent = draft.secret;
    el.deckUnpublish.hidden = !mine;

    el.deckShareEyebrow.textContent = draft && draft.private
      ? 'YOUR DECK IS UP \u00b7 UNLISTED'
      : 'YOUR DECK IS LIVE';
    el.ovlDeckShare.hidden = false;
  }

  /* ── your own decks ─────────────────────────────────────────
     Drafts and published decks in one place, with the code and the edit
     key for anything that went up — the key exists nowhere else, so this
     is where you come to find it again. */
  function renderMyDecks() {
    var mine = Decks.all();
    el.myDecksList.innerHTML = '';
    if (!mine.length) {
      el.myDecksState.textContent = 'You haven\u2019t made one yet.';
      return;
    }
    el.myDecksState.textContent = '';

    mine.sort(function (a, b) { return (b.updated || 0) - (a.updated || 0); });
    mine.forEach(function (d) {
      var row = document.createElement('div');
      row.className = 'minedeck';

      var head = document.createElement('div');
      head.className = 'minedeck__head';
      var name = document.createElement('b');
      name.textContent = d.name || 'Untitled deck';
      head.appendChild(name);

      var tag = document.createElement('span');
      tag.className = 'minedeck__tag' + (d.code ? ' is-live' : '');
      tag.textContent = d.code ? (d.private ? 'Unlisted' : 'Published') : 'Draft';
      head.appendChild(tag);
      row.appendChild(head);

      var meta = document.createElement('span');
      meta.className = 'minedeck__meta';
      var rows = (d.items || []).filter(function (r) { return (r.answer || '').trim(); }).length;
      var usable = (d.items || []).filter(function (r) {
        return (r.answer || '').trim() && ((r.prompt || '').trim() || r.imgUrl);
      }).length;
      /* An answer with no picture and no prompt has nothing to put on the
         board, so say that rather than reporting it as zero answers. */
      var bits = [usable + (usable === 1 ? ' answer' : ' answers')];
      if (rows > usable) bits.push((rows - usable) + ' still need a picture');
      else if (!Decks.playable(d)) bits.push('needs 4 to play');
      meta.textContent = bits.join(' \u00b7 ');
      row.appendChild(meta);

      if (d.code) {
        var codes = document.createElement('div');
        codes.className = 'minedeck__codes';
        var c1 = document.createElement('span');
        c1.className = 'minedeck__code';
        c1.textContent = d.code;
        codes.appendChild(c1);
        if (d.secret) {
          var k = document.createElement('code');
          k.className = 'minedeck__key';
          k.textContent = d.secret;
          codes.appendChild(k);
        } else {
          var warn = document.createElement('span');
          warn.className = 'minedeck__warn';
          warn.textContent = 'no edit key on this device';
          codes.appendChild(warn);
        }
        row.appendChild(codes);
      }

      var acts = document.createElement('div');
      acts.className = 'minedeck__acts';

      var edit = document.createElement('button');
      edit.className = 'btn btn--ghost btn--sm';
      edit.type = 'button';
      edit.textContent = d.code ? 'Edit' : 'Carry on';
      edit.addEventListener('click', function () {
        el.ovlMyDecks.hidden = true;
        openBuilder(d);
      });
      acts.appendChild(edit);

      if (d.code) {
        var copy = document.createElement('button');
        copy.className = 'btn btn--ghost btn--sm';
        copy.type = 'button';
        copy.textContent = 'Copy link';
        copy.addEventListener('click', function () {
          var link = deckLink(d.code);
          (navigator.clipboard ? navigator.clipboard.writeText(link) : Promise.reject())
            .then(function () { toast('Link copied'); })
            .catch(function () { window.prompt('Copy the link', link); });
        });
        acts.appendChild(copy);
      }

      row.appendChild(acts);
      el.myDecksList.appendChild(row);
    });
  }

  function openMyDecks() {
    renderMyDecks();
    el.ovlMyDecks.hidden = false;
  }

  function refreshMyDecksLink() {
    if (el.toMyDecks) el.toMyDecks.hidden = !Decks.all().length;
  }

  /* ── the deck gallery ───────────────────────────────────────
     Typing a code you had to be told is fine for a private deck and
     hopeless as the only way in, so public decks are browsable:
     searched, ordered, and paged. */
  var galleryState = { q: '', sort: 'popular', page: 1, pages: 1, busy: false };
  var searchTimer = 0;

  function openDeckGet() {
    el.deckGetCode.value = '';
    el.deckGetState.textContent = '';
    el.deckGetState.className = 'deckshare__state';
    el.ovlDeckGet.hidden = false;
    galleryState.q = '';
    galleryState.page = 1;
    if (el.deckSearch) el.deckSearch.value = '';
    loadGallery();
  }

  function galleryMessage(text) {
    el.deckList.innerHTML = '';
    el.deckListState.textContent = text;
    el.deckPager.hidden = true;
  }

  function loadGallery() {
    if (galleryState.busy) return;
    galleryState.busy = true;
    el.deckListState.textContent = 'Loading\u2026';
    Decks.browse({ q: galleryState.q, sort: galleryState.sort, page: galleryState.page, per: 12 })
      .then(function (out) {
        galleryState.busy = false;
        galleryState.pages = out.pages || 1;
        renderGallery(out);
      })
      .catch(function () {
        galleryState.busy = false;
        galleryMessage('Could not reach the deck list. A code still works.');
      });
  }

  function renderGallery(out) {
    el.deckList.innerHTML = '';
    var decks = out.decks || [];
    if (!decks.length) {
      galleryMessage(galleryState.q
        ? 'Nothing matches \u201c' + galleryState.q + '\u201d.'
        : 'No decks published yet. Yours could be the first.');
      return;
    }
    el.deckListState.textContent = '';

    decks.forEach(function (d) {
      /* Every string on this tile was typed by a stranger, so all of it
         goes in as text. */
      var card = document.createElement('button');
      card.type = 'button';
      card.className = 'gcard';

      var art = document.createElement('div');
      art.className = 'gcard__art';
      if (d.cover) {
        var img = new Image();
        img.alt = '';
        img.loading = 'lazy';
        img.src = (cfg.relay || '').replace(/^wss:/, 'https:').replace(/\/$/, '') + '/img/' + d.cover;
        art.style.setProperty('--cover', 'url("' + img.src.replace(/"/g, '\\"') + '")');
        art.appendChild(img);
      } else {
        var glyph = document.createElement('span');
        glyph.className = 'gcard__glyph';
        glyph.textContent = d.text ? '\u266a' : '\u2726';
        art.appendChild(glyph);
      }
      card.appendChild(art);

      var body = document.createElement('div');
      body.className = 'gcard__body';

      var name = document.createElement('b');
      name.className = 'gcard__name';
      name.textContent = d.name || 'Untitled deck';
      body.appendChild(name);

      if (d.blurb) {
        var blurb = document.createElement('span');
        blurb.className = 'gcard__blurb';
        blurb.textContent = d.blurb;
        body.appendChild(blurb);
      }

      var meta = document.createElement('span');
      meta.className = 'gcard__meta';
      var bits = [d.items + (d.items === 1 ? ' answer' : ' answers')];
      if (d.plays) bits.push(d.plays + (d.plays === 1 ? ' play' : ' plays'));
      if (d.up) bits.push('\u25b2 ' + d.up);
      meta.textContent = bits.join(' \u00b7 ');
      body.appendChild(meta);

      card.appendChild(body);
      card.addEventListener('click', function () { getDeckByCode(d.code); });

      /* Reporting sits outside the card's own click, or flagging a deck
         would open it. */
      var flag = document.createElement('button');
      flag.className = 'gcard__flag';
      flag.type = 'button';
      flag.title = 'Report this deck';
      flag.setAttribute('aria-label', 'Report this deck');
      flag.textContent = '\u2691';
      flag.addEventListener('click', function (e) {
        e.stopPropagation();
        if (!window.confirm('Report \u201c' + (d.name || 'this deck') + '\u201d as inappropriate?')) return;
        flag.disabled = true;
        Decks.report(d.code)
          .then(function () { toast('Reported \u2014 thank you'); })
          .catch(function () { flag.disabled = false; toast('Could not send that report'); });
      });

      var wrap = document.createElement('div');
      wrap.className = 'gcard__wrap';
      wrap.appendChild(card);
      wrap.appendChild(flag);
      el.deckList.appendChild(wrap);
    });

    el.deckPager.hidden = galleryState.pages <= 1;
    el.deckPageLabel.textContent = (out.page || 1) + ' of ' + galleryState.pages;
    el.deckPrev.disabled = (out.page || 1) <= 1;
    el.deckNext.disabled = (out.page || 1) >= galleryState.pages;
  }

  function getDeckByCode(code) {
    /* People paste the whole link far more often than they retype the
       code out of it. Take either. */
    var raw = String(code || '').trim();
    var fromLink = /[?&]deck=([A-Za-z0-9]{4,12})/i.exec(raw);
    code = (fromLink ? fromLink[1] : raw.replace(/^.*\/+/, '')).trim().toUpperCase();
    if (!code) return;
    el.deckGetState.className = 'deckshare__state';
    el.deckGetState.textContent = 'Looking…';
    el.deckGetGo.disabled = true;
    Decks.fetchCode(code).then(function (deck) {
      el.deckGetGo.disabled = false;
      if (!Decks.save(deck)) { throw new Error('No room left in this browser'); }
      syncCats();
      buildSetup();
      refreshCatGrid(true);
      el.deckGetState.className = 'deckshare__state is-good';
      el.deckGetState.textContent = 'Added “' + deck.name + '”';
      setTimeout(function () {
        el.ovlDeckGet.hidden = true;
        show('setup');
        goStep(STEPS.indexOf('category'));
      }, 900);
    }).catch(function (err) {
      el.deckGetGo.disabled = false;
      el.deckGetState.className = 'deckshare__state is-bad';
      el.deckGetState.textContent = err.message || 'No deck with that code';
    });
  }

  /* A ?deck=CODE link is somebody handing you their deck. */
  function importFromUrl() {
    var m = /[?&]deck=([A-Za-z0-9]{4,12})/.exec(location.search);
    if (!m) return;
    history.replaceState(null, '', location.pathname);
    openDeckGet();
    el.deckGetCode.value = m[1].toUpperCase();
    getDeckByCode(m[1]);
  }

  /* ══════════════════ BOOT ══════════════════ */
  /* Custom decks have to be in CATS before the setup controls are built,
     or a saved choice pointing at one won't match anything. */
  syncCats();
  buildSetup();     // category options must exist before a saved choice can match
  restoreSetup();
  refreshMyDecksLink();
  Sfx.setEnabled(cfg.sound);
  Sfx.setTick(cfg.tick);
  renderMute();

  buildDots();
  goStep(0);
  refreshPictureModes();
  show('welcome');

  importFromUrl();

  /* First visit gets the tutorial once. After that it lives behind the
     "How to play" button and never interrupts anyone again. */
  try {
    if (!localStorage.getItem('dhd.seenTutorial')) setTimeout(openTutorial, 400);
  } catch (e) {}

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
    refreshDaily();
    if (el.catGrid.childElementCount) { el.catGrid.innerHTML = ''; refreshCatGrid(); }
  });
})();
