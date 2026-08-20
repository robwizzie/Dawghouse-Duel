DROP ANIMAL IMAGES IN THIS FOLDER
====================================

Name each file after the answer's slug. The app checks
.jpg .png .jpeg .webp .avif .gif — in that order.

  lion.jpg
  great-white-shark.jpg
  star-nosed-mole.jpg
  kakapo.jpg

Open the app, click "Image Library", and hit "Copy filename list"
to get every slug for this category in one paste.

Any answer without a file here still plays — it shows a clue card
instead of a picture, so you can rehearse before the art is ready.

After adding or renaming files, run ./tools/build-manifest.sh from the
project root. Optional, but it stops the app guessing at extensions.

These come from Wikipedia via tools/fetch-wiki-images.js and are mostly
CC-BY-SA or public domain. sources.json next to them records the licence
and photographer for each one.
