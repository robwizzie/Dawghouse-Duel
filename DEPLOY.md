# Putting Dawg House Duel on dawghouseduel.com

A full walkthrough. Nothing here costs money — Cloudflare's free tiers cover all
of it comfortably.

There are two pieces:

| | What it is | Needed for |
| --- | --- | --- |
| **The site** | The game itself, on Cloudflare Pages | Everything |
| **The relay** | A tiny Cloudflare Worker | Using your **phone** as host |

You can do just the site and stop. Without the relay the game runs exactly as it
does now — you'd press `H` on the laptop for the Host View window instead of
using your phone.

Set aside about 30 minutes. Steps 1–4 are the site, 5–7 are the phone relay.

---

## Step 1 — Make a Cloudflare account

1. Go to <https://dash.cloudflare.com/sign-up>
2. Sign up with your email. Free plan, no card needed.
3. Verify the email they send you.

---

## Step 2 — Connect the repo to Cloudflare Pages

1. In the Cloudflare dashboard, click **Workers & Pages** in the left sidebar.
2. Click **Create** → the **Pages** tab → **Connect to Git**.
3. Click **Connect GitHub** and authorise Cloudflare. When GitHub asks which
   repositories, you can pick just `Dawghouse-Duel`.
4. Choose **`robwizzie/Dawghouse-Duel`** from the list → **Begin setup**.
5. Fill in the build settings:

   | Field | What to put |
   | --- | --- |
   | Project name | `dawghouse-duel` |
   | Production branch | `main` |
   | Framework preset | **None** |
   | Build command | **leave completely empty** |
   | Build output directory | `/` |

   There's no build step — it's plain HTML, CSS and JavaScript.

6. Click **Save and Deploy**.

It'll take a minute or two (there are ~580 images to upload). When it's done you
get a URL like `https://dawghouse-duel.pages.dev`.

**Check it:** open that URL. You should get the setup screen with the logo and
all four categories. Start a duel and make sure pictures load.

---

## Step 3 — Point dawghouseduel.com at it

### 3a. Tell Cloudflare about the domain

1. In your Pages project, click the **Custom domains** tab.
2. **Set up a custom domain** → type `dawghouseduel.com` → **Continue**.
3. Cloudflare shows you the DNS record it wants. **Leave this page open** — you
   need to copy these values in a moment.
4. Repeat for `www.dawghouseduel.com` so both work.

### 3b. Change the DNS at Squarespace

1. Go to <https://account.squarespace.com/domains>
2. Click **dawghouseduel.com** → **DNS** → **DNS Settings**.
3. **Delete Squarespace's existing records first.** Look for existing `A`
   records on `@` and a `CNAME` on `www` pointing at Squarespace. If you leave
   them the domain will keep going to Squarespace instead of your game.
4. **Add** the records Cloudflare showed you in 3a. Usually:

   | Type | Host | Data |
   | --- | --- | --- |
   | CNAME | `www` | `dawghouse-duel.pages.dev` |
   | CNAME (or A) | `@` | whatever Cloudflare listed for the root |

5. Save.

Now wait. DNS usually updates in 10–30 minutes but can take a few hours.
Cloudflare's Custom domains tab shows **Active** once it's through, and it sorts
out the SSL certificate by itself — you don't need to do anything for `https`.

> **Easier alternative:** transfer the domain to Cloudflare entirely
> (Squarespace: **Domains → dawghouseduel.com → Transfer**). More faff up front,
> but then it's all one dashboard and you never touch DNS again.

---

## Step 4 — You're live

Open <https://dawghouseduel.com>. Every time you push to `main` from now on,
Cloudflare redeploys within a minute. Nothing else to do.

**If you only wanted the site, you're finished here.**

---

## Step 5 — Deploy the relay (for phone host mode)

This is what lets your phone drive the duel screen.

In Terminal:

```bash
cd ~/Desktop/Dawghouse-Duel/worker
npx wrangler deploy
```

- It'll ask to install `wrangler` the first time — say yes.
- It opens a browser window to log in to Cloudflare — click **Allow**.
- Come back to Terminal.

When it finishes it prints something like:

```
Deployed dawghouse-duel-relay
  https://dawghouse-duel-relay.YOURNAME.workers.dev
```

**Copy that URL.** `YOURNAME` is a subdomain Cloudflare assigns you — it may not
be `robwizzie`.

**Check it:**

```bash
curl https://dawghouse-duel-relay.YOURNAME.workers.dev/health
```

You want `{"ok":true}` back.

---

## Step 6 — Tell the app where the relay is

Open [`js/config.js`](js/config.js) and change one line — the URL from step 5,
but with **`wss://`** instead of `https://`:

```js
relay: 'wss://dawghouse-duel-relay.YOURNAME.workers.dev',
```

Then:

```bash
cd ~/Desktop/Dawghouse-Duel
git add js/config.js
git commit -m "Point at my relay"
git push
```

Cloudflare redeploys the site automatically.

---

## Step 7 — Pair your phone

1. On the laptop, open <https://dawghouseduel.com>. The pairing panel at the
   bottom of the setup screen shows a four-letter code and should say
   **waiting for the host**.
2. On your phone, open <https://dawghouseduel.com/host>
3. Type the four letters → **JOIN**.
4. The laptop now says **phone connected**, and your phone shows the answer plus
   the big CORRECT / WRONG / PASS buttons.

If the laptop still says *relay offline*, the URL in step 6 is wrong — check
it's `wss://` and matches exactly what wrangler printed.

---

## Shoot-day routine

1. Laptop on `dawghouseduel.com`, under the camera, press `F` for full screen.
2. Note the four-letter code.
3. Phone on `dawghouseduel.com/host`, type the code, **JOIN**.
4. Hand the dawgs the mouse — one click is a pass.

The room code sticks between reloads, so if the laptop reloads mid-shoot the
phone reconnects on its own. If the phone drops off entirely, the duel keeps
running on the laptop and `H` opens the backup Host View window.

---

## Troubleshooting

**Domain still shows my Squarespace site** — the old Squarespace DNS records are
still there. Go back to step 3b and delete them.

**"relay offline" on the pairing panel** — either the relay isn't deployed
(step 5) or `js/config.js` has the wrong URL (step 6). It must start `wss://`.

**Phone says "no connection — check the code"** — the code is case-insensitive
but must match. Tap the code on the laptop's setup screen to re-read it, or hit
**new code** there and re-enter it.

**Pictures don't load** — check the deploy actually finished in the Cloudflare
Pages dashboard; the image upload is the slow part of the first deploy.

**Site is showing an old version** — Cloudflare caches artwork hard but never
caches the app itself (see `_headers`). Hard-refresh with Cmd-Shift-R.

## What it costs

Nothing at this scale. Pages is free with unlimited bandwidth for static sites,
Workers gives 100,000 requests a day free, and a Durable Object only exists while
somebody is actually connected to a room.
