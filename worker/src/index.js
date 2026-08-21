/* ══════════════════════════════════════════════════════════════
   Dawg House Duel — pairing relay

   A dumb pipe. The duel screen stays the only authority on the
   game; this just carries its state out to the host's phone and
   carries the host's button presses back.

   One Durable Object per room code, so every room is its own
   isolated little server that exists only while someone is in it.

     wss://<worker>/room/WXYZ?role=duel     the screen running the game
     wss://<worker>/room/WXYZ?role=host     someone marking spoken answers
     wss://<worker>/room/WXYZ?role=player   the other player, on their own device

   A frame may carry `to: 'host' | 'player'`, and then only peers of that
   role receive it. That is not decoration: the host frame contains the
   answer, and a player must never be sent it.
   ══════════════════════════════════════════════════════════════ */

const MAX_MESSAGE = 256 * 1024;   // a state frame carries an image URL, not an image
const MAX_PEERS   = 8;            // duel screen, host, and a few spectating tabs

export class Room {
  constructor(state) {
    this.state = state;
    this.peers = new Map();       // ws -> role
    this.lastFor = new Map();     // audience -> last frame, so a latecomer catches up
  }

  async fetch(request) {
    if (request.headers.get('Upgrade') !== 'websocket') {
      return new Response('expected a websocket', { status: 426 });
    }
    if (this.peers.size >= MAX_PEERS) {
      return new Response('room full', { status: 429 });
    }
    const asked = new URL(request.url).searchParams.get('role');
    const role = asked === 'duel' || asked === 'player' ? asked : 'host';
    const { 0: client, 1: server } = new WebSocketPair();
    this.accept(server, role);
    return new Response(null, { status: 101, webSocket: client });
  }

  accept(ws, role) {
    ws.accept();
    this.peers.set(ws, role);

    // Catch the newcomer up before anything else happens.
    if (role !== 'duel') {
      const caught = this.lastFor.get(role) || this.lastFor.get('all');
      if (caught) this.post(ws, caught);
    }
    this.announce();

    ws.addEventListener('message', ev => {
      const raw = typeof ev.data === 'string' ? ev.data : null;
      if (!raw || raw.length > MAX_MESSAGE) return;

      let msg;
      try { msg = JSON.parse(raw); } catch (e) { return; }
      if (!msg || typeof msg !== 'object') return;

      // Only the duel screen's own frames are worth replaying to latecomers.
      const audience = msg.to === 'host' || msg.to === 'player' ? msg.to : 'all';
      if (msg.from === 'duel') this.lastFor.set(audience, raw);

      for (const [peer, peerRole] of this.peers) {
        if (peer === ws) continue;
        if (audience !== 'all' && peerRole !== audience) continue;
        this.post(peer, raw);
      }
    });

    const drop = () => {
      this.peers.delete(ws);
      if (role === 'duel') this.lastFor.clear();   // don't serve a stale board
      this.announce();
    };
    ws.addEventListener('close', drop);
    ws.addEventListener('error', drop);
  }

  post(ws, data) {
    try { ws.send(data); } catch (e) { this.peers.delete(ws); }
  }

  /* Let both ends show whether the other one is actually there. */
  announce() {
    const roles = [...this.peers.values()];
    const msg = JSON.stringify({
      from: 'relay',
      peers: roles.length,
      duel: roles.includes('duel'),
      hosts: roles.filter(r => r === 'host').length,
      players: roles.filter(r => r === 'player').length
    });
    for (const ws of this.peers.keys()) this.post(ws, msg);
  }
}

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,OPTIONS',
  'Access-Control-Allow-Headers': 'content-type'
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: CORS });
    if (url.pathname === '/health') {
      return new Response(JSON.stringify({ ok: true }), {
        headers: { 'content-type': 'application/json', ...CORS }
      });
    }

    const m = url.pathname.match(/^\/room\/([A-Za-z0-9]{4,12})$/);
    if (!m) return new Response('not found', { status: 404, headers: CORS });

    const id = env.ROOMS.idFromName(m[1].toUpperCase());
    return env.ROOMS.get(id).fetch(request);
  }
};
