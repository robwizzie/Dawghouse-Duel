# Pairing relay

Carries the duel screen's state out to the host's phone and the host's button
presses back. It holds no game logic — the duel screen stays authoritative, so
if the relay dies mid-duel the game keeps running, the phone just goes quiet.

## Deploy

```bash
cd worker
npx wrangler deploy
```

First run will ask you to log in to Cloudflare. It prints a URL like
`https://dawghouse-duel-relay.<your-subdomain>.workers.dev` — put that in
`js/config.js` as the `relay` value, with `wss://` instead of `https://`.

## Check it

```bash
curl https://dawghouse-duel-relay.<your-subdomain>.workers.dev/health
```

Should return `{"ok":true}`.

## Cost

Durable Objects on the free plan cover this comfortably — a room only exists
while somebody is connected to it, and a duel is a handful of small JSON
messages per second between two peers.
