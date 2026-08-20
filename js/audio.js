/* ══════════════════════════════════════════════════════════════
   DHD.Sfx — synthesized game-show audio.

   Everything is generated in the browser: no files to download, no
   404 on shoot day, no wifi dependency. Each cue is built from a
   handful of primitives (tone / sweep / noise / chord) so they sit
   together as one kit rather than six unrelated beeps.
   ══════════════════════════════════════════════════════════════ */
window.DHD = window.DHD || {};

DHD.Sfx = (function () {
  var ctx = null, bus = null, comp = null;
  var enabled = true, tickOn = true;

  function ac() {
    if (ctx) return ctx;
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    // A touch of compression keeps the buzzer from clipping over a tick bed.
    comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -8;
    comp.knee.value = 4;      // default knee is 30dB, which quietly crushes soft cues
    comp.ratio.value = 5;
    comp.attack.value = 0.004;
    comp.release.value = 0.2;
    bus = ctx.createGain();
    bus.gain.value = 0.85;
    bus.connect(comp);
    comp.connect(ctx.destination);
    return ctx;
  }

  function t0(delay) { return ctx.currentTime + (delay || 0); }

  /* One voice: pitch envelope + amplitude envelope, optional detune pair. */
  function tone(o) {
    if (!enabled) return;
    var c = ac(); if (!c) return;
    var t = t0(o.delay), dur = o.dur, peak = o.vol == null ? 0.25 : o.vol;
    var g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + (o.attack || 0.008));
    if (o.hold) g.gain.setValueAtTime(peak, t + o.hold);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    g.connect(o.dest || bus);

    var voices = o.detune ? [-o.detune, o.detune] : [0];
    voices.forEach(function (cents) {
      var osc = c.createOscillator();
      osc.type = o.type || 'sine';
      osc.detune.value = cents;
      osc.frequency.setValueAtTime(o.from, t);
      if (o.to && o.to !== o.from) {
        if (o.linear) osc.frequency.linearRampToValueAtTime(Math.max(1, o.to), t + dur);
        else osc.frequency.exponentialRampToValueAtTime(Math.max(1, o.to), t + dur);
      }
      osc.connect(g);
      osc.start(t);
      osc.stop(t + dur + 0.03);
    });
  }

  /* Filtered noise burst — air, whooshes, the body of a klaxon. */
  function noise(o) {
    if (!enabled) return;
    var c = ac(); if (!c) return;
    var t = t0(o.delay), dur = o.dur;
    var len = Math.max(1, Math.floor(c.sampleRate * dur));
    var buf = c.createBuffer(1, len, c.sampleRate), d = buf.getChannelData(0);
    for (var i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;

    var src = c.createBufferSource(); src.buffer = buf;
    var f = c.createBiquadFilter();
    f.type = o.filter || 'bandpass';
    f.Q.value = o.q == null ? 1.2 : o.q;
    f.frequency.setValueAtTime(o.from, t);
    f.frequency.exponentialRampToValueAtTime(Math.max(20, o.to || o.from), t + dur);

    var g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(o.vol || 0.18, t + (o.attack || 0.01));
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);

    src.connect(f); f.connect(g); g.connect(bus);
    src.start(t); src.stop(t + dur);
  }

  function chord(freqs, o) {
    freqs.forEach(function (f, i) {
      tone({
        type: o.type || 'triangle', from: f, to: f,
        dur: o.dur, vol: (o.vol || 0.2) / Math.sqrt(freqs.length),
        delay: (o.delay || 0) + i * (o.spread || 0), hold: o.hold
      });
    });
  }

  var API = {
    /* Browsers gate audio until a gesture — called on the first click/key. */
    unlock: function () {
      var c = ac();
      if (c && c.state === 'suspended') c.resume();
      return !!c;
    },
    ready: function () { return !!ctx && ctx.state === 'running'; },
    setEnabled: function (v) { enabled = !!v; },
    setTick: function (v) { tickOn = !!v; },

    /* ── in play ── */

    // Right answer: bright rising two-note stab with a shimmer on top.
    correct: function () {
      tone({ type: 'triangle', from: 784,  to: 784,  dur: 0.10, vol: 0.30, detune: 6 });
      tone({ type: 'triangle', from: 1175, to: 1175, dur: 0.26, vol: 0.30, detune: 6, delay: 0.085, hold: 0.06 });
      tone({ type: 'sine',     from: 2349, to: 2349, dur: 0.22, vol: 0.10, delay: 0.085 });
      noise({ from: 4000, to: 9000, dur: 0.18, vol: 0.05, delay: 0.08, q: 0.7 });
    },

    // Wrong: flat two-tone honk, the classic "eh-ehhh".
    wrong: function () {
      tone({ type: 'sawtooth', from: 196, to: 196, dur: 0.15, vol: 0.25, detune: 12, hold: 0.07 });
      tone({ type: 'sawtooth', from: 147, to: 138, dur: 0.36, vol: 0.27, detune: 14, delay: 0.16, hold: 0.18 });
    },

    // Time coming off the clock: a short mechanical chunk under the honk.
    penalty: function () {
      tone({ type: 'square',   from: 320, to: 90, dur: 0.24, vol: 0.34, detune: 8 });
      tone({ type: 'sawtooth', from: 160, to: 62, dur: 0.28, vol: 0.24 });
      noise({ from: 1800, to: 220, dur: 0.26, vol: 0.34, q: 0.7 });
    },

    // Pass: air moving, picture swapping out.
    pass: function () {
      noise({ from: 380, to: 5200, dur: 0.19, vol: 0.54, q: 0.55 });
      noise({ from: 5200, to: 700, dur: 0.22, vol: 0.36, delay: 0.15, q: 0.55 });
      tone({ type: 'sine', from: 300, to: 880, dur: 0.2, vol: 0.26 });
    },

    // Control changing hands: a low sweep that lands on the other side.
    handoff: function () {
      tone({ type: 'sine',     from: 180, to: 440, dur: 0.3, vol: 0.15, linear: true });
      tone({ type: 'triangle', from: 523, to: 523, dur: 0.22, vol: 0.12, delay: 0.12, detune: 6 });
    },

    // Clock bed under 10 seconds. Alternates so it reads as tick-tock.
    tick: (function () {
      var flip = false;
      return function () {
        if (!tickOn) return;
        flip = !flip;
        tone({ type: 'square', from: flip ? 1500 : 1150, to: flip ? 1500 : 1150, dur: 0.07, vol: 0.30, attack: 0.002 });
        noise({ from: 2800, to: 1100, dur: 0.06, vol: 0.60, q: 1.0, attack: 0.002 });
      };
    })(),

    /* ── top and tail ── */

    countdown: function () {
      tone({ type: 'triangle', from: 587, to: 587, dur: 0.2, vol: 0.34, detune: 5, hold: 0.07 });
      tone({ type: 'sine',     from: 1175, to: 1175, dur: 0.14, vol: 0.14 });
    },

    go: function () {
      chord([523.25, 783.99, 1046.5], { dur: 0.44, vol: 0.52, hold: 0.12, spread: 0.012 });
      noise({ from: 900, to: 7000, dur: 0.3, vol: 0.22, q: 0.5 });
    },

    // Clock hits zero: two-tone klaxon, held, unmistakable in a room.
    buzzer: function () {
      for (var i = 0; i < 2; i++) {
        var d = i * 0.52;
        tone({ type: 'sawtooth', from: 165, to: 158, dur: 0.46, vol: 0.30, detune: 16, delay: d, hold: 0.3, attack: 0.004 });
        tone({ type: 'square',   from: 110, to: 106, dur: 0.46, vol: 0.22, detune: 10, delay: d, hold: 0.3, attack: 0.004 });
      }
      noise({ from: 220, to: 120, dur: 1.0, vol: 0.20, filter: 'lowpass', q: 1 });
    },

    // Winner sting: rising fanfare landing on a held major chord.
    fanfare: function () {
      [523.25, 659.25, 783.99].forEach(function (f, i) {
        tone({ type: 'triangle', from: f, to: f, dur: 0.16, vol: 0.26, detune: 6, delay: i * 0.13 });
      });
      chord([523.25, 659.25, 783.99, 1046.5], { dur: 1.2, vol: 0.46, hold: 0.55, delay: 0.39, spread: 0.02 });
      noise({ from: 3000, to: 10000, dur: 0.7, vol: 0.14, delay: 0.39, q: 0.4 });
    },

    /* Fires every cue back to back — used by the sound check on setup. */
    demo: function (onDone) {
      var seq = [
        ['countdown', 0], ['go', 500], ['correct', 1200], ['handoff', 1500],
        ['pass', 2200], ['wrong', 2900], ['penalty', 2960],
        ['tick', 3700], ['tick', 3950], ['tick', 4200],
        ['buzzer', 4600], ['fanfare', 5700]
      ];
      seq.forEach(function (s) { setTimeout(function () { API[s[0]](); }, s[1]); });
      if (onDone) setTimeout(onDone, 7200);
      return 7200;
    }
  };

  return API;
})();
