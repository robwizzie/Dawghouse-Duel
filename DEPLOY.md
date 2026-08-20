# Putting it on dawghouseduel.com

Two pieces: the site itself on **Cloudflare Pages**, and the **relay** that lets
your phone act as host. The site works without the relay — you just lose phone
pairing and fall back to the Host View window on the same laptop.

Do them in this order; step 2 gives you a URL that step 3 needs.

---

## 1. Cloudflare account

Sign up free at <https://dash.cloudflare.com/sign-up>. Nothing to pay for here —
Pages, Workers and Durable Objects all have free tiers that this sits well
inside.

## 2. Deploy the relay

```bash
cd worker
npx wrangler deploy
```

First run opens a browser to log you in. When it finishes it prints a URL like:

```
https://dawghouse-duel-relay.YOURNAME.workers.dev
```

Check it:

```bash
curl https://dawghouse-duel-relay.YOURNAME.workers.dev/health
```

You want `{"ok":true}` back.

## 3. Point the app at your relay

Open [`js/config.js`](js/config.js) and set `relay` to that URL with **`wss://`**
instead of `https://`:

```js
relay: 'wss://dawghouse-duel-relay.YOURNAME.workers.dev',
```

Commit and push. (If you leave this wrong the game still runs fine — the pairing
panel just says "relay offline".)

## 4. Deploy the site

In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to
Git**, pick `robwizzie/Dawghouse-Duel`, then:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | None |
| Build command | *(leave empty)* |
| Build output directory | `/` |

It's a plain static site, so there's no build step. Every push to `main`
redeploys automatically. You'll get a `*.pages.dev` URL — open it and check the
game runs.

## 5. Point the domain at it

**In Cloudflare Pages:** your project → **Custom domains** → **Set up a custom
domain** → `dawghouseduel.com`. Add `www.dawghouseduel.com` too. Cloudflare will
show you the DNS records it wants.

**In Squarespace:** Squarespace can't host this site, but it *can* keep the
domain and point it here. Go to **Settings → Domains → dawghouseduel.com → DNS
Settings** and add the records Cloudflare gave you — usually:

| Type | Host | Value |
| --- | --- | --- |
| CNAME | `www` | `<your-project>.pages.dev` |
| A / ALIAS | `@` | whatever Cloudflare shows for the root |

Squarespace may already have records for `@` and `www` pointing at their
servers — delete those first or the domain will keep resolving to Squarespace.

DNS takes anywhere from a few minutes to a couple of hours. Cloudflare issues
the SSL certificate on its own once the records resolve.

> Alternatively, transfer the domain to Cloudflare (**Settings → Domains →
> Transfer** in Squarespace). More work up front, but then everything lives in
> one dashboard and you never touch DNS again.

---

## Shoot-day routine

1. Open `dawghouseduel.com` on the laptop, put it under the camera, press `F` for full screen.
2. Note the four-letter code on the setup screen.
3. On your phone open `dawghouseduel.com/host`, type the code, hit **JOIN**.
4. The panel says **phone connected**. You've got the answers; they've got the pictures.

If the phone drops off — bad signal, screen lock, whatever — the duel keeps
running on the laptop and the phone reconnects by itself. Worst case, `H` on the
laptop opens the Host View window as a backup.

## Costs

Nothing, at this scale. Cloudflare Pages is free for static sites with unlimited
bandwidth; Workers gives 100k requests a day free; a Durable Object exists only
while somebody is connected to a room, and a duel is two peers exchanging small
JSON messages.
