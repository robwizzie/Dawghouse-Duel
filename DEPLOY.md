# Putting Dawg House Duel on dawghouseduel.com

A complete walkthrough. Nothing here costs money — Cloudflare's free tiers cover
all of it comfortably.

There are two pieces, and **you only need the first one**:

| | What it is | Needed for |
| --- | --- | --- |
| **The site** | The game itself, on Cloudflare Pages | Everything |
| **The relay** | A small Cloudflare Worker | Marking from your **phone**, online duels, and **sharing decks** |

Anyone visiting the site can play **Duel** and **Solo** without the relay,
because typed mode means the game marks its own answers. The relay is needed
for two things:

- **Online Duel** — two people in different places
- **Say it out loud** — the answer key on a phone while you film
- **Sharing a deck** — publishing one you made so other people can play it

Skip it and both still work locally: `H` opens the marking view in a second
window on the same machine.

Steps 1–5 are the site. Steps 6–8 are the phone relay.
Budget about 30 minutes, most of it waiting for DNS.

---

## Before you start

Check the game runs on your machine, so that if something breaks after
deploying you know it's the deploy and not the game:

```bash
cd ~/Desktop/Dawghouse-Duel && node .server.js
```

Open <http://localhost:8777>, play one round, then stop it with `Ctrl-C`.

---

## Step 1 — Make a Cloudflare account

1. Go to <https://dash.cloudflare.com/sign-up>
2. Sign up with your email. Free plan, no card needed.
3. Verify the email they send you.

---

## Step 2 — Move the domain's DNS to Cloudflare

**Do this before creating the site.** It saves a real headache later.

The reason: `dawghouseduel.com` with no `www` in front is an *apex* domain, and
the DNS standard doesn't allow apex domains to point at a hostname the way
`www` can. Squarespace's DNS has no way around that, so if you leave DNS at
Squarespace, `www.dawghouseduel.com` will work and `dawghouseduel.com` won't.
Cloudflare works around it automatically, but only if Cloudflare is running the
DNS.

1. In the Cloudflare dashboard, click **Add a domain**.
2. Type `dawghouseduel.com` → **Continue**.
3. Choose the **Free** plan → **Continue**.
4. Cloudflare scans your existing records and shows them. Click **Continue**.
5. Cloudflare now shows **two nameservers**, something like:

   ```
   dana.ns.cloudflare.com
   rick.ns.cloudflare.com
   ```

   Leave this page open.

6. In another tab go to <https://account.squarespace.com/domains>
7. Click **dawghouseduel.com** → **DNS** → **Nameservers**.
8. Switch from Squarespace's nameservers to **Use custom nameservers**.
9. Paste in Cloudflare's two. Save.
10. Back on Cloudflare, click **Check nameservers now**.

This takes anywhere from ten minutes to a few hours. Cloudflare emails you when
the domain is **Active**. You can carry on with steps 3 and 4 while you wait.

> **If the domain currently serves a Squarespace site you still want**, don't do
> this step — skip to *Keeping DNS at Squarespace* at the bottom instead.

---

## Step 3 — Connect the repo to Cloudflare Pages

1. In the Cloudflare dashboard, click **Workers & Pages** in the sidebar.
2. **Create** → the **Pages** tab → **Connect to Git**.
3. **Connect GitHub** and authorise Cloudflare. When GitHub asks which
   repositories, you can grant just `Dawghouse-Duel`.
4. Pick **`robwizzie/Dawghouse-Duel`** → **Begin setup**.
5. Fill in:

   | Field | What to put |
   | --- | --- |
   | Project name | `dawghouse-duel` |
   | Production branch | `main` |
   | Framework preset | **None** |
   | Build command | **leave completely empty** |
   | Build output directory | `/` |

   There is no build step. It's plain HTML, CSS and JavaScript on purpose.

6. **Save and Deploy**.

The first deploy uploads about 1,600 files and 310 MB of artwork, so give it a
few minutes. Later deploys only upload what changed and take seconds.

When it finishes you get a URL like `https://dawghouse-duel.pages.dev`.

**Check it:** open that URL. You should get the welcome screen. Press **PLAY**,
walk through to a category, and start a round — make sure pictures load.

---

## Step 4 — Attach the domain

1. In your Pages project, open the **Custom domains** tab.
2. **Set up a custom domain** → `dawghouseduel.com` → **Continue** → **Activate**.
3. Do it again for `www.dawghouseduel.com`.

Because Cloudflare is now running your DNS (step 2), it adds the records itself.
You don't touch DNS by hand, and the apex domain just works.

SSL is automatic. Give it a few minutes and both addresses will be `https`.

---

## Step 5 — You're live

Open <https://dawghouseduel.com>.

From now on **every push to `main` redeploys the site within a minute.** Nothing
else to do, ever.

**If you only wanted the site, stop here.** Typed duels, Solo, the daily
challenge, all sixteen categories, silhouette and zoom modes — all working. What needs the relay is
Online Duel and marking from a phone.

---

## Step 6 — Deploy the relay

This is what lets your phone drive the laptop during a shoot, and what
stores decks people make.

First make the bucket the decks live in. Once, ever:

```bash
cd ~/Desktop/Dawghouse-Duel/worker && npx wrangler r2 bucket create dawghouse-duel-decks
```

If you skip it the relay still deploys and everything else works — the
publish button just says deck storage isn't configured.

Then deploy:

```bash
cd ~/Desktop/Dawghouse-Duel/worker && npx wrangler deploy
```

- It offers to install `wrangler` the first time — say yes.
- It opens a browser to log in to Cloudflare — click **Allow**.
- Back in Terminal, it prints something like:

  ```
  Deployed dawghouse-duel-relay
    https://dawghouse-duel-relay.YOURNAME.workers.dev
  ```

**Copy that URL.** `YOURNAME` is the subdomain Cloudflare assigned you — it may
not be `robwizzie`.

Confirm it's alive:

```bash
curl https://dawghouse-duel-relay.YOURNAME.workers.dev/health
```

You want `{"ok":true}`.

---

## What publishing a deck stores

Worth knowing before you turn it on, because it is your bucket.

When someone publishes a deck, the relay mints an **edit key**, keeps only
its SHA-256, and hands the key back once. Editing or deleting that deck
means presenting the key again. There are no accounts, no emails and no
passwords anywhere in this — the key unlocks one deck and nothing else, so
there is nothing worth stealing and nothing for you to protect. The trade
is that somebody who loses their key can't edit their deck any more; it
stays up, read-only.

**Unlisted** decks get a twelve-character code instead of six and are never
listed anywhere. That is unguessable rather than access-controlled, which is
the honest description: anyone with the link can play it.

Uploaded pictures are checked against their actual bytes, not the
content-type the uploader claimed, and served back with `nosniff` and a
locked-down CSP. SVG is refused — it can carry script. Publishing and
uploading are rate limited per caller; playing a deck never is.

To take something down yourself:

```bash
cd ~/Desktop/Dawghouse-Duel/worker && npx wrangler r2 object delete dawghouse-duel-decks/deck/CODE.json
```

---

## Step 7 — Tell the app where the relay is

Open [`js/config.js`](js/config.js) and set one line to the URL from step 6, but
with **`wss://`** in place of `https://`:

```js
relay: 'wss://dawghouse-duel-relay.YOURNAME.workers.dev',
```

Then push it:

```bash
cd ~/Desktop/Dawghouse-Duel && git add js/config.js && git commit -m "Point at my relay" && git push
```

Cloudflare redeploys automatically.

---

## Step 8 — Check online play

1. On one machine: **PLAY → Online Duel →** pick a category → **START**. The
   Ready screen shows a four-letter code and a *Copy the link* button.
2. On another device, open <https://dawghouseduel.com/play> and enter the code.
3. Their board should fill in — picture, both clocks, whose turn it is — and
   the first screen should say *they are in*.

## Step 9 — Check deck sharing

1. On the site: **PLAY → Duel →** scroll to the end of the categories and
   press **Make your own**.
2. Give it a name and two or three answers — a line of text each is enough
   to test with. **Save deck**, then **Share**.
3. You get a six-letter code and a link. Open that link on your phone: it
   should offer the deck and drop you on the category screen with it added.

If **Share** says storage isn't configured, the bucket in step 6 wasn't
created — make it and redeploy.

---

## Step 10 — Pair your phone for marking

1. Laptop: open <https://dawghouseduel.com>, press **PLAY**, choose **Duel**,
   then **Say it out loud**. Carry on to the setup step — the pairing panel
   there shows a four-letter code.
2. Phone: open <https://dawghouseduel.com/host>
3. Type the four letters → **JOIN**.
4. The laptop should say **phone connected**, and the phone shows the answer,
   the alternates that count, and big CORRECT / WRONG / PASS buttons.

---

## Shoot-day routine

1. Laptop on `dawghouseduel.com` under the camera. Press `F` for full screen.
2. Set up a duel in **say it out loud** mode. Note the four-letter code.
3. Phone on `dawghouseduel.com/host`, enter the code, **JOIN**.
4. Hand the players the mouse — one click is a pass.

The room code survives a reload, so if the laptop refreshes mid-shoot the phone
reconnects by itself. If the phone drops off entirely the duel carries on
regardless, and `H` opens the backup Host View window on the laptop.

---

## Keeping DNS at Squarespace

Only if you can't move the nameservers — for instance the domain is still
serving a Squarespace site you need.

You can point `www` at the game, but **not** the bare domain, for the apex
reason in step 2. So:

1. Skip step 2 entirely. Do steps 3 and 4, but only add
   `www.dawghouseduel.com` as the custom domain.
2. Cloudflare gives you a CNAME target. In Squarespace: **Domains →
   dawghouseduel.com → DNS → DNS Settings**, delete the existing `www` record,
   and add:

   | Type | Host | Data |
   | --- | --- | --- |
   | CNAME | `www` | `dawghouse-duel.pages.dev` |

3. Then use Squarespace's **domain forwarding** to send the bare
   `dawghouseduel.com` to `https://www.dawghouseduel.com`.

The result works, but every link is `www.dawghouseduel.com`, and forwarding is
slower than the real thing. Moving the nameservers is genuinely better.

---

## Troubleshooting

**The domain still shows my Squarespace site** — the nameserver change hasn't
propagated, or it didn't save. Check Cloudflare says **Active** for the domain.

**`www` works but `dawghouseduel.com` doesn't** — DNS is still at Squarespace.
That's the apex problem from step 2; move the nameservers.

**"relay offline" on the pairing panel** — either the relay isn't deployed
(step 6) or `js/config.js` has the wrong URL (step 7). It must start `wss://`,
not `https://`. This message is only a warning: the game plays fine without it.

**Phone says "no connection — check the code"** — codes are case-insensitive but
must match. Re-read it on the laptop, or hit **new code** and re-enter.

**Pictures don't load** — check the deploy actually finished in the Pages
dashboard. The artwork upload is the slow part of the first deploy.

**Site shows an old version** — artwork is cached hard, the app never is (see
[`_headers`](_headers)). Hard-refresh with Cmd-Shift-R.

**Share says deck storage is not configured** — the R2 bucket from step 6
doesn't exist, or the relay was deployed before it did. Create it, then
`npx wrangler deploy` again.

**One specific picture is broken** — its file extension probably doesn't match
its actual contents, and `_headers` sets `nosniff` so the browser refuses to
guess. Re-run `node tools/fetch-wiki-images.js <category>`; the fetcher checks
the real bytes and names files honestly.

---

## What it costs

Nothing at this scale.

- **Pages** — free, unlimited bandwidth for static sites. Limits are 20,000
  files and 25 MB per file; you're at ~1,500 files and the largest is 1.3 MB.
- **Workers** — 100,000 requests a day free. A duel is a handful of small
  messages a second between two people.
- **Durable Objects** — free tier, and a room only exists while somebody is
  connected to it. Deck vote counters are one tiny object per published deck.
- **R2** — 10 GB free. Pictures are scaled to 900px before they leave the
  browser, so a published deck of forty is a few megabytes.

One thing worth knowing: anyone with the link can publish a deck, and there
are no accounts. The limits are 300 answers, 3 MB a picture, and the server
keeps only the fields it can actually play. If something gets published you
don't want hosted, delete it from the bucket:

```bash
npx wrangler r2 object delete dawghouse-duel-decks/deck/CODE.json
```
