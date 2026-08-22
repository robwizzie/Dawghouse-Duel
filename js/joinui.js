/* ══════════════════════════════════════════════════════════════
   The join screen's front door, shared by both phone pages.

   Two different jobs open on the same screen — playing a duel, and
   marking someone else's answers — and a small "or go here instead"
   link at the bottom was easy to miss. So the screen asks first, and
   sends you to the other page if you picked the one this page isn't.

   `?role=player` or `?role=host` skips the question, which is what
   the other page links to once you have chosen.
   ══════════════════════════════════════════════════════════════ */
(function () {
  var body = document.body;
  var MINE = body.getAttribute('data-join-role');       // 'player' | 'host'
  if (!MINE) return;

  var OTHER_PAGE = { player: 'host.html', host: 'play.html' };
  var steps = {};
  [].forEach.call(document.querySelectorAll('[data-join-step]'), function (n) {
    steps[n.getAttribute('data-join-step')] = n;
  });
  if (!steps.role || !steps.code) return;

  function showStep(name) {
    steps.role.hidden = name !== 'role';
    steps.code.hidden = name !== 'code';
    if (name === 'code') {
      var input = steps.code.querySelector('input');
      if (input) setTimeout(function () { try { input.focus(); } catch (e) {} }, 60);
    }
  }

  [].forEach.call(document.querySelectorAll('[data-role]'), function (btn) {
    btn.addEventListener('click', function () {
      var want = btn.getAttribute('data-role');
      if (want === MINE) { showStep('code'); return; }

      /* The other job lives on the other page. Carry the code across if
         one was already typed or handed over in the link. */
      var code = (document.getElementById('joinCode') || {}).value || '';
      var qs = '?role=' + want + (code ? '&code=' + encodeURIComponent(code) : '');
      location.href = OTHER_PAGE[MINE] + qs;
    });
  });

  var back = document.getElementById('joinBack');
  if (back) back.addEventListener('click', function () { showStep('role'); });

  /* Carry a half-typed code across the hop. Prefill only — the pages
     themselves treat `room=` as "connect now", and a code someone was
     still typing shouldn't dial out on its own. */
  var carried = /[?&]code=([A-Za-z0-9]{1,12})/.exec(location.search);
  if (carried) {
    var field = document.getElementById('joinCode');
    if (field && !field.value) field.value = carried[1].toUpperCase();
  }

  /* A link that named a role, or a room code, means the question is
     already answered. */
  var asked = /[?&]role=(player|host)/.exec(location.search);
  var hasCode = /[?&](code|room)=/.test(location.search);
  showStep(asked || hasCode ? 'code' : 'role');
})();
