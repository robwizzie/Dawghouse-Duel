Drop the dawghouse wordmark here as:

  logo.png     (transparent PNG, lime lettering, ~600px wide)

The app picks it up automatically on the setup screen and in the
duel top bar. Until then it falls back to a CSS wordmark in the
same lime (#d2f050) on indigo (#3830a0).

For the wordmark font, drop it here as brand.woff2 (or brand.otf /
brand.ttf) and uncomment the @font-face block at the top of
css/dhd.css. It is commented out so the browser isn't asking for a
file that isn't there on every page load.
