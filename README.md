# Dawg House Duel

Head-to-head category battle for the Dawg House page, built to run exactly like
the duels on *The Floor* — two clocks, one image, last dawg standing.

![indigo #3830a0 / lime #d2f050](https://img.shields.io/badge/brand-%233830a0%20%2F%20%23d2f050-d2f050?style=flat-square)

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
own window. Hit **Host View** on setup (or <kbd>H</kbd> mid-duel) and a second
window opens with:

- **the answer**, big, plus the alternate names that also count
- the picture the dawgs are looking at, and **what's next up**
- both clocks and who has control
- big **CORRECT / WRONG −3s / PASS −2s** buttons, plus skip and pause

Put it on a second monitor, a second laptop, or the corner of your own screen.
Every button and key in it drives the duel screen live over a BroadcastChannel —
no server, no setup, no lag. Close it and the duel carries on regardless.

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

| Category | Answers | Pictures |
| --- | --- | --- |
| Superheroes | 113 | 113 |
| Disney Characters | 152 | 152 |

Each is one file in `js/data/`, registered with a `<script>` tag in
`index.html`. Difficulty tiers (`easy` / `mid` / `deep`) let the **deep cuts**
toggle drop the hard third for a friendlier round.

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

## Adding a category

Copy `js/data/disney.js`, change the `id`/`name`/`wiki`, and add a `<script>`
tag for it in `index.html`. It shows up in the dropdown automatically, and
`node tools/fetch-wiki-images.js <id>` will go and get the artwork.

```js
window.DHD_CATEGORIES.push({
  id: 'one-hit-wonders',
  name: 'One-Hit Wonders',
  blurb: 'They had exactly one.',
  wiki: 'music.fandom.com',            // optional, for the image fetcher
  items: [
    {slug:'macarena', name:'Macarena', alt:['Los del Rio'], tier:'easy',
     clue:'1996. Everyone at the wedding still knows the arm moves.',
     page:'Los del Río'}               // optional lookup override
  ]
});
```

`tier` is `easy` | `mid` | `deep`. The **deep cuts** toggle on setup drops the
`deep` tier when you want a friendlier round.

## Files

```
index.html            stage markup — setup, duel, image library, overlays
host.html             the host's answer-key + control window
css/dhd.css           brand tokens + all styling
css/host.css          host window styling
js/data/superheroes.js  113 answers with alt names, difficulty tiers, fallback clues
js/store.js           image resolution: uploads → assets folder → clue card
js/audio.js           synthesized buzzers and stings — no audio files to lose
js/app.js             clocks, control, pass logic, screens, host link
js/host.js            host window controller
js/data/disney.js     152 Disney answers
tools/build-manifest.sh   regenerates the folder listing after you add images
tools/fetch-images.js     pulls placeholder art for a category from superhero-api
tools/fetch-extra-images.sh  the six the dataset doesn't carry
tools/fetch-wiki-images.js   pulls a category's art from a Fandom wiki
assets/brand/           the wordmark, plus a slot for a real brand font
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
