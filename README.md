# Dawg House Duel

Head-to-head category battle for the Dawg House page, built to run exactly like
the duels on *The Floor* — two clocks, one image, last dawg standing.

![indigo #3830a0 / lime #d2f050](https://img.shields.io/badge/brand-%233830a0%20%2F%20%23d2f050-d2f050?style=flat-square)

## Live

<https://dawghouseduel.com> — see [DEPLOY.md](DEPLOY.md) for how it's wired up
(Cloudflare Pages for the site, a Worker for phone pairing, DNS pointed from
Squarespace).

## Run it

```bash
./start.command
```

That serves the folder on <http://localhost:8777> and opens it (python3 if you
have it, node otherwise). Any static server works — `npx serve`, Netlify, GitHub Pages.
Opening `index.html` straight off disk mostly works too, but Chrome blocks the
image folder over `file://`, so use the server on shoot day.

## The rules

Both dawgs get the same clock — **45 seconds** is the show standard. One picture
on screen at a time, and only the dawg with **CONTROL** has a running clock.

| | What happens |
| --- | --- |
| **Correct** | Answer flashes up, then **control hands over** to the other dawg with a fresh picture. Your clock stops. |
| **Wrong** | **−3 seconds.** Same picture, still your turn. Guess again. |
| **Pass** | Answer is revealed and you get a different picture — but it costs **−2 seconds**, and it is **still your turn and still your clock**. |

Only a correct answer gets you off the clock. First one to hit **00.0** loses,
and the other dawg takes the house.

Both penalties come straight off the clock with a big red number on the board,
a kick on the clock digits, and a mechanical thunk — and either one can finish a
duel outright. Wrong-answer cost, pass cost (both 0/2/3/5s) and reveal length are
set on the setup screen.

The reveal beat freezes both clocks while the answer is on screen, so the
flourish never costs anybody time.

## Judging answers — the Host View

The answer key can't live on the screen the dawgs are reading, so it gets its
own screen. Two ways to run it.

**On your phone** — the setup screen shows a four-letter room code. Open
`dawghouseduel.com/host` on your phone, type the code, done. Best setup for
filming: the laptop faces the dawgs and you judge from your hand.

**On the same computer** — hit **Host View** on setup (or <kbd>H</kbd> mid-duel)
for a second window. No pairing, no internet needed at all.

Either way you get:

- **the answer**, big, plus the alternate names that also count
- the picture the dawgs are looking at, and **what's next up**
- both clocks and who has control
- big **CORRECT / WRONG −3s / PASS −2s** buttons, plus skip and pause

The duel screen is the one actually running the game. The host end is a remote
control: if the phone loses signal or the relay goes down mid-duel, the clocks
keep running on the laptop and the phone reconnects on its own. Worst case,
<kbd>H</kbd> on the laptop is the backup.

Same-machine pairing goes over a BroadcastChannel with no server involved.
Phone pairing goes through a small Cloudflare Worker — see
[DEPLOY.md](DEPLOY.md) and [worker/](worker/).

## Running the room

Put the laptop directly under the lens so the dawgs read the screen and look
down the barrel. Hand the mouse to whoever has control — **one click is a pass**.
You run the Host View off to the side.

| Key | What it does |
| --- | --- |
| `Click` / `Space` | Pass — reveal the answer, −2s, new picture, same turn |
| `Z` / `M` | Left / right dawg passes — for two separate clickers |
| `Enter` / `→` | Correct — reveal, hand off, new picture |
| `X` | Wrong — −3s, same picture |
| `S` | Skip an unusable picture (no reveal, no cost) |
| `P` | Pause both clocks |
| `A` | Peek the answer (careful — it's on the contestants' screen) |
| `F` | Full screen |
| `R` | Restart the duel |
| `H` | Open the Host View window |
| `Esc` | Back to setup |

If you want each dawg on their own physical button, a cheap USB clicker or
foot pedal mapped to `Z` and `M` gives them a real podium buzzer.

## Sound

Every cue is synthesized in the browser at runtime — no audio files to lose, no
CDN to fail on shoot day. Ten cues: countdown, go, correct, hand-off, pass,
wrong, penalty thunk, clock tick, time-out klaxon, winner fanfare. They are
level-matched so the tick sits under everything and the klaxon sits on top.

Hit **Sound Check** on setup to play the whole kit back to back before you roll.
It also unlocks audio, which browsers gate until the first click.

## Categories

| Category | Answers | Pictures | Source |
| --- | --- | --- | --- |
| Superheroes | 113 | 113 | superhero-api + Wikipedia/Fandom |
| Disney Characters | 152 | 152 | Disney Wiki |
| Animals | 170 | 170 | Wikipedia |
| Star Wars | 147 | 147 | Wookieepedia |
| Sitcom Characters | 103 | 103 | per-show wikis, live action only |
| Pokémon | 179 | 179 | PokeAPI official artwork |
| Video Game Characters | 89 | 89 | 40 franchise wikis |
| Cartoon Characters | 232 | 232 | 68 network + show wikis |
| Dog Breeds | 128 | 128 | Wikipedia |
| NBA — Today | 129 | 129 | Wikipedia |
| NBA — All-Time Greats | 115 | 115 | Wikipedia |
| Attack on Titan | 46 | 46 | Attack on Titan Wiki |
| SpongeBob | 37 | 37 | Encyclopedia SpongeBobia |
| Celebrities | 97 | 97 | Wikipedia |
| Streamers | 39 | 39 | Wikipedia |
| Musicals | 102 | — | songs, no artwork by design |

**1,776 pictures across fifteen picture decks — every answer has a picture.**
A sixteenth, Musicals, is deliberately text: songs, not artwork.

Each is one file in `js/data/`, registered with a `<script>` tag in
`index.html`. Difficulty tiers (`easy` / `mid` / `deep`) let the **deep cuts**
toggle drop the hard third for a friendlier round.

## Decks people make themselves

A deck somebody builds is the same shape a built-in category is, so once it's
registered the engine can't tell the difference. The only real difference is
where the pictures come from: a shipped deck reads
`assets/categories/<id>/<slug>.jpg`; a custom one carries its picture on the
item as `imgUrl` — a `data:` URL while it's yours alone, the relay's
`/img/...` once published.

**Building one.** Last card in the category gallery. Each row is one answer
with either a picture or a line of text. Mix them and it plays as a picture
deck with text where the pictures aren't. Photos are scaled to 900px on the
way in — a deck of forty phone photos would blow both `localStorage` and the
upload limit. *Paste a list* builds a text deck quickly. Right-click your own
deck in the gallery to edit it.

**Sharing one.** *Share* uploads the pictures, then the deck, and hands back a
six-character code. The alphabet has no vowels and no look-alikes, so a code
read down a phone can't be mistyped and can't spell anything. Opening
`?deck=CODE` offers to add it.

**Plays and votes.** A published deck counts how many times it's been played
and carries a thumbs up/down, shown on its gallery card and asked for on the
card at the end of a round. Counters need to be atomic, so they live in a
Durable Object keyed on the code. One vote per browser; press the same thumb
again to take it back.

**The limits are the whole defence** — there are no accounts, and adding them
to a party game isn't worth it. 300 answers, 512KB of deck JSON, 3MB an
image, and the server rebuilds every deck from only the fields it can play
rather than trusting what a client sent.

## The text deck

**Musicals** is the one category with no pictures in it, and that is on
purpose. A musical is almost always photographed as a poster or a playbill,
and both have the answer printed across them — which makes for a very short
round. Songs don't have that problem: everyone knows the number, far fewer
people can place the show.

So the board shows the song where the artwork usually goes, and the answer is
the musical. Everything else is identical — same clocks, same rally, same
pass, same recap, which shows the song on the tile and the show underneath.
Picture modes are locked to Normal and say why, since there is no picture to
put a silhouette on.

Song *titles*, deliberately, not lyrics. A title is a name; lyrics are
somebody's copyrighted text and not ours to ship.

A deck becomes a text deck by setting `text: true` on the category and giving
each item a `prompt`. Nothing else in the engine needs to know.

## Images

Superheroes ships with **113 answers and 113 pictures** in
`assets/categories/superheroes/`.

107 came from the open
[superhero-api](https://github.com/akabab/superhero-api) dataset:

```bash
node tools/fetch-images.js superheroes
```

It writes a `sources.json` next to the images recording which dataset record
each answer matched, so a wrong picture is easy to trace. Names the dataset
reuses across characters (Captain Marvel, Green Lantern, The Atom) are pinned to
explicit record ids in that script.

> **These are placeholder stills for building and rehearsing the format.** They
> are comic-book art of trademarked characters from a third-party dataset —
> swap in art you have the rights to before anything goes out publicly.

The other six aren't in that dataset — Miles Morales, Homelander, Invincible,
Omni-Man, Booster Gold, Moon Girl. They come from Wikipedia and the relevant
Fandom wikis:

```bash
./tools/fetch-extra-images.sh
```

Two needed work: the Homelander source was a comic-vs-TV split panel, and the
obvious Invincible source had **INVINCIBLE** printed across the top — an instant
giveaway. Both are cropped in that script.

Disney's 152 come from the Disney Wiki, which keeps a clean portrait for
basically every character:

```bash
node tools/fetch-wiki-images.js disney
```

A dozen answers there share a name with their own film — a bare lookup for
"Dumbo" or "Moana" lands on the *film* page, whose lead image is a poster with
the answer printed across it. Those carry an explicit `page: 'Dumbo (character)'`
in the data file. Every image in both categories was eyeballed on a contact
sheet; the script also flags any answer that resolved to a differently-named
page so a wrong picture is easy to spot.

Animals come from Wikipedia:

```bash
node tools/fetch-wiki-images.js animals
```

This is the one category whose pictures are genuinely reusable — they're mostly
CC-BY-SA and public-domain photographs, and the fetcher records the licence and
photographer for each one in `sources.json`. Wikimedia rate-limits a sweep this
size, so the script backs off and retries; re-run it and it picks up where it
stopped.

Because a lot of animals share a name with something broader, the answer is what
you'd actually shout and the article is pinned separately — `name: 'Penguin'`
with `page: 'Emperor penguin'`, and "Emperor penguin" accepted as an alternate.

Star Wars comes from Wookieepedia:

```bash
node tools/fetch-wiki-images.js starwars
```

Two answers pin an exact image rather than a page, because the article's lead
picture is the wrong picture of the right character: Darth Vader's article opens
on Anakin's unmasked face, and Jango Fett's shows him out of the armour. There's
an `image:` field for exactly this. "The Mandalorian" needed
`page: 'Din Djarin'` too — the plain name matched the *show*, whose lead image
is the title card with the answer written across it.

Sitcoms are characters, not shows — a show's own wiki page leads with its logo,
which has the answer written across it. Each answer names its own wiki, because
sitcom characters live one wiki per show:

```bash
node tools/fetch-wiki-images.js sitcoms
```

Seven answers pin an exact image. The whole *It's Always Sunny* cast came back
as their opening-credits cards with **the actor's name printed across them**,
and Frasier's page leads with a DVD cover carrying Kelsey Grammer's name. The
obvious replacement had both Crane brothers in one shot, and Niles is a separate
answer, so that needed pinning too.

Sitcom answers also carry a `show` field. It isn't an accepted answer — it shows
up in the Host View under the character's name so you have the context while
judging.

The two NBA decks are split rather than combined, so you can run a duel that's
purely current players or purely history — the overlap (LeBron, Curry, Durant)
sits in both, which is correct, since they belong in both conversations.

Basketball photos are the cleanest-licensed set here: mostly CC BY and CC BY-SA
press and Olympic shots, with a chunk of public domain for the older greats.
A handful of very recent players have no free photo anywhere and were left out
rather than carried as dead entries.

If any answer ever loses its picture, the deck setting **Images only** (the
default) simply doesn't deal it.

### Adding or replacing pictures

**Drop them in the folder** — name files after the slug and put them in
`assets/categories/superheroes/`:

```
superman.jpg   black-panther.jpg   doctor-strange.png   thor.svg
```

`.jpg` `.png` `.jpeg` `.webp` `.avif` `.svg` `.gif` all work.

**Or drag them into the app** — open **Image Library**, drop a whole folder on
the top zone and filenames get matched to answers automatically
(`Black Panther (1).JPG` → Black Panther). Those live in the browser on that
machine, so the folder route is the one to use for anything you want in git.

After you add or rename files in the folder, run:

```bash
./tools/build-manifest.sh
```

That writes an `index.json` listing so the app knows the folder contents in one
request instead of guessing at extensions. Optional — skip it and everything
still works, just with more 404 chatter in the console. If you forget it after
adding files, **Rescan folder** in the Image Library picks them up anyway.

Set the deck to **Everything** on setup if you want answers without artwork
dealt too — they show a typographic clue card instead of a picture, which is
useful for rehearsing before art exists.

## Picture modes

A setup dropdown that changes how the picture arrives, and it works on every
deck you already have:

| Mode | What happens |
| --- | --- |
| **Normal** | The picture, straight away. |
| **Silhouette** | Solid black shape, colour drops in after the reveal window. |
| **Extreme zoom** | Starts at 7× and pulls back. |
| **Blurred** | Starts unreadable and sharpens up. |

On a **correct answer or a pass** the picture drops to plain for the reveal
beat, whatever mode is running — a black shape next to the words "IT WAS
SNORLAX" tells nobody anything.

The point is to move the tension from *who reads fastest* to *who calls it
first*. The window is seven seconds, or 28% of the clock on a short duel,
whichever is less — no sense spending twelve seconds unblurring on a 30-second
round.

Two decks carry cut-out artwork and so offer silhouette: **Pokémon** and
**Video Game Characters**. Eleven game characters only exist as flat images on
their wiki; they're marked `flat: true` and sit out silhouette rounds rather
than turning up as a black rectangle. The fetcher checks the alpha channel
after every `keepAlpha` download and names any that came back flat.

**Silhouette is only offered on decks whose artwork is cut out.** On a
photograph it would render a black rectangle, so the option greys itself out and
says why. Right now that means Pokémon, whose art comes from the PokeAPI sprite
repo as transparent PNGs — which is also why the category sets `keepAlpha` to
stop the fetcher flattening it to JPEG.

The reveal freezes whenever the clocks do: during the intro countdown, during
the answer-reveal beat, and on pause. Without that, the first picture of every
duel would burn its whole window behind the 3-2-1.

## Setting up a game

The app started as a tool for one operator who knew the keyboard. Somebody
arriving from a video knows none of it, so setup is a sequence of single
questions rather than one dense form:

1. **How you want to play** — Duel, Online Duel, or Solo
2. **Category** — a gallery of all sixteen decks with cover art, answer counts,
   and what you've played on each
3. **Settings** — how answers get marked, names, clock; anything with a
   sensible default hides behind *More options*
4. **Ready** — it reads the setup back to you, with the rules, then starts

Nothing is pre-selected at any step, and **Next** stays disabled until you
choose. An already-ticked option reads as a recommendation, and the point of
the wizard is that the player decides. Choosing advances automatically.

Anyone who has played before gets a *Play again* button on the welcome screen
that skips the lot.

## Two ways to answer

**Type it in** — the game marks the answer, so nobody else is needed. Matching
is handled by `js/match.js`, which is deliberately forgiving about how people
type and strict about ambiguity: accents and punctuation are ignored, typos
within a length-scaled edit distance pass, and a single distinctive word counts
(*jokic*, *spongebob*, *doc ock*). What it will **not** accept is a word two
answers share — typing "green" in a deck holding both Draymond and Jalen Green
is wrong, because there's no way to know which was meant.

**Say it out loud** — someone marks it from the Host View. This is the filming
mode, and it's what the keyboard shortcuts are for. In typed mode those
shortcuts are switched off, since the app is the judge.

## Online Duel

Two people, two places, one duel. The person who sets it up gets a four-letter
code; the other opens `/play`, enters it, and their screen mirrors the board —
picture, both clocks, whose turn it is.

The duel screen stays the only authority. The remote player's device renders
what it's sent and sends back one thing: what they typed. Clocks are
interpolated locally between frames so the tenths still move smoothly rather
than stepping eight times a second.

**The answer is never sent to a player.** The relay routes frames by audience:
the marking view gets a frame containing the answer and the alternates, the
player gets a redacted one. That's a property of the relay, not of the client
being polite — see `to: 'host' | 'player'` in `worker/src/index.js`.

## Solo

The setup screen picks between **Duel** (two dawgs, two clocks) and **Solo**
(one clock, one player, how many can you get). Solo hides the second
pod, keeps you on the clock through a correct answer instead of handing over,
and ends on a score card built to be screenshotted: category, clock, correct,
best streak.

It exists so a viewer can play too. Watching is a view; playing is a share.

## The daily challenge

One puzzle a day, the same one for everybody: **ten pictures, one 60-second
clock**. The category rotates daily too, so Tuesday might be Pokémon and
Wednesday Attack on Titan.

There is no server behind it. The deck is derived from the date alone with a
fixed hash (`js/daily.js`), which is what makes a shared score mean anything —
two people on opposite sides of the world get an identical ten. For the same
reason the build reads only the shipped category data, never what's cached in
your browser: a puzzle that varied per device wouldn't be comparable.

It ends when the deck runs out or the clock does, whichever comes first, and
the result is saved so the button reads *done* for the rest of the day.
Consecutive days build a **streak**.

## Sharing a result

**SHARE RESULT** on the score card copies a spoiler-free block — the picture
names never appear, only whether each one landed:

```
Dawg House Duel — Day 233
NBA — Today · 7/10
🟩🟩⬛🟩🟩🟩⬛🟩🟩🟩
4 day streak
dawghouseduel.com
```

On a phone it opens the native share sheet instead. Duel and Solo runs share
too, with the score line instead of the grid.

## The tutorial

Four slides — one picture at a time, only your clock runs, wrong answers cost
you, first to zero loses. It opens **once**, on a first visit, before anyone
reaches a game.

After that it stays behind **How to play** on the welcome screen. Skip is
always available on the first slide, so anyone who doesn't want it never sees
it twice.

## Personal bests

Each category card carries its own history: **times played**, whether those
were Solo or Duel, and the **longest rally** you've managed there. Stored in
`localStorage` under `dhd.*`; clearing site data resets it.

## When you're close

In typed mode a wrong answer that happens to name *another* picture in the deck
says so — *"That's Pikachu — but not this one"* — rather than a flat **Not
quite**. It's the difference between "you don't know this" and "you know it,
wrong card".

## The end-of-round card

Two things sit under the score, both there to settle arguments.

**The last picture.** When a clock hits zero there is always a picture on the
board nobody answered. The answer goes up on the board first — *TIME — IT WAS
Iceman* — and then again on the result card with its thumbnail, so nobody has
to scrub back through the footage asking what the last one was. If the round
ended by running out of deck instead, it just reads *last picture*.

**Every picture of the round**, behind *See every picture*. Each tile is the
artwork, the answer, who was on the clock for it, and how it went. A key sits
above the grid so none of it needs explaining:

| | |
| --- | --- |
| lime, ✓ | got it |
| amber, → | passed |
| red, ✕ | the clock ran out on this one |

In a duel the two players get a colour each — the name sits in a filled pill on
the tile and tints its edge, so one player's run reads as a block and you can
settle who had which picture at a glance. Outcome lives on the badge top-left
and the player on the pill top-right, so the two never compete for the same
signal. Solo and the daily have nobody to tell apart, so the pills don't appear.

Wrong guesses don't end a picture, so they're counted on the tile instead —
*Ultron · 2 wrong* means two misses before somebody passed it.

It's collapsed by default so it doesn't bury the winner, and opening it scrolls
the buttons back into view. **Tap any tile** to see that picture full size with
its answer, and step through the round with the arrows or the ← → keys. Escape
closes it.

## Muting

Bottom-left corner, on every screen, including mid-round. It's the same setting
as the sound checkbox in the wizard — the two stay in step — and it's
remembered. There's deliberately no keyboard shortcut for it: `M` is already
the pass key for the right-hand player.

## The rally counter

A two-line chip on its own row between the category and the board:
**consecutive correct answers with no wrong and no pass**. Each player keeps
their own — one player's wrong answer can't wipe out the other's run — and the
chip names whose streak is showing.

It sits in its own row rather than over the picture so the clocks and the
picture frame line up to exactly the same height, and so the category title,
the rally and the board all share one centre line.

It goes lime-bright at five. Mostly it means you stop hunting through footage
for the good moment — the number tells you where it is.

## Adding a category

Copy `js/data/starwars.js`, change the `id`/`name`/`wiki`, and add a `<script>`
tag for it in `index.html`. It shows up in the dropdown automatically, and
`node tools/fetch-wiki-images.js <id>` will go and get the artwork.

Then **look at every picture on a contact sheet before using it.** Roughly one
answer in twenty comes back wrong in a way no script can catch — a poster with
the answer printed on it, a pair shot where the answer is ambiguous, or simply a
different character with the same name.

```js
window.DHD_CATEGORIES.push({
  id: 'one-hit-wonders',
  name: 'One-Hit Wonders',
  blurb: 'They had exactly one.',
  wiki: 'music.fandom.com',            // optional, for the image fetcher
  items: [
    {slug:'macarena', name:'Macarena', alt:['Los del Rio'], tier:'easy',
     clue:'1996. Everyone at the wedding still knows the arm moves.',
     page:'Los del Río',               // optional: pin the wiki article
     image:'https://…/pic.jpg',        // optional: pin an exact picture
     wiki:'music.fandom.com',          // optional: per-answer wiki override
     note:'1996 single'}               // optional: context shown to the host
  ]
});
```

`tier` is `easy` | `mid` | `deep`. The **deep cuts** toggle on setup drops the
`deep` tier when you want a friendlier round.

## Files

```
index.html            stage markup — setup, duel, image library, overlays
host.html             the marking view: answer key + control buttons
play.html             player two's mirrored board, for online duels
css/dhd.css           brand tokens + all styling
css/host.css          host window styling
js/data/superheroes.js  113 answers with alt names, difficulty tiers, fallback clues
js/store.js           image resolution: uploads → assets folder → clue card
js/audio.js           synthesized buzzers and stings — no audio files to lose
js/app.js             clocks, control, pass logic, screens, host link
js/host.js            marking view controller
js/play.js            mirrored board for the remote player
js/match.js           typed-answer matching
js/data/disney.js     152 Disney answers
js/data/animals.js    170 animal answers
js/data/starwars.js   147 Star Wars answers
js/data/sitcoms.js    135 sitcom answers across 29 shows
js/data/pokemon.js    179 Pokémon, transparent official artwork
js/data/videogames.js 89 game characters, cut-out renders
js/data/cartoons.js   89 cartoon characters, every era
js/data/dogs.js       128 dog breeds
js/data/nba-today.js  129 current NBA players
js/data/nba-goats.js  115 all-time NBA greats
js/data/aot.js        46 Attack on Titan characters, Titans and references
js/data/spongebob.js  37 SpongeBob characters and Bikini Bottom landmarks
js/daily.js           the date-seeded daily puzzle, streaks and saved results
js/net.js             local channel + relay transport
js/config.js          relay URL and host URL — the one file to edit on deploy
worker/               the Cloudflare Worker that pairs a phone to a duel screen
tools/build-manifest.sh   regenerates the folder listing after you add images
tools/fetch-images.js     pulls placeholder art for a category from superhero-api
tools/fetch-extra-images.sh  the six the dataset doesn't carry
tools/fetch-wiki-images.js   pulls a category's art from a Fandom wiki or Wikipedia
tools/search-commons.js      finds text-free photos on Wikimedia Commons
assets/brand/           the wordmark, plus a slot for a real brand font
assets/icons/           Lucide icons (ISC), vendored rather than CDN-loaded
assets/categories/<cat>/
  *.jpg / *.png           the pictures
  index.json              folder listing (generated)
  sources.json            what each answer matched (generated)
```

## Brand

Colours sampled straight out of the wordmark:

| | |
| --- | --- |
| Indigo | `#32328d` |
| Lime | `#deff66` |

`assets/brand/logo-source.png` is the original artwork; `logo.png` is the same
mark with the background knocked out so it sits on any surface, and it's what
the app actually uses on setup, in the duel top bar, on the winner card and in
the Host View.

Display type is **Luckiest Guy**, the closest widely-available match to the
hand-lettered mark. If you have the real brand face, drop it in as
`assets/brand/brand.woff2` (`.otf` / `.ttf` also work) and the `@font-face` at
the top of `css/dhd.css` picks it up everywhere with no other change.
