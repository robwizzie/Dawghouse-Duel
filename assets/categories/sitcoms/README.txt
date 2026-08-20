DROP SITCOM CHARACTER IMAGES IN THIS FOLDER
====================================

Name each file after the answer's slug. The app checks
.jpg .png .jpeg .webp .avif .gif — in that order.

  michael-scott.jpg
  cosmo-kramer.jpg
  bender.jpg
  moira-rose.jpg

Open the app, click "Image Library", and hit "Copy filename list"
to get every slug for this category in one paste.

Any answer without a file here still plays — it shows a clue card
instead of a picture, so you can rehearse before the art is ready.

After adding or renaming files, run ./tools/build-manifest.sh from the
project root. Optional, but it stops the app guessing at extensions.

These come from 29 different show wikis via tools/fetch-wiki-images.js —
each answer names its own wiki. Placeholder stills; swap in art you have
the rights to before publishing.
