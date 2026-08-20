/* ══════════════════════════════════════════════════════════════
   Site config. Edit this one file after deploying the relay.
   ══════════════════════════════════════════════════════════════ */
window.DHD_CONFIG = {
  /* Your deployed worker, with wss:// — see worker/README.md.
     Leave empty and the app still works perfectly on one machine
     (duel screen + host window side by side); it just can't pair
     a phone. */
  relay: 'wss://dawghouse-duel-relay.robwizzie.workers.dev',

  /* Shown on the pairing panel so the host knows what to type in. */
  hostUrl: 'dawghouseduel.com/host'
};
