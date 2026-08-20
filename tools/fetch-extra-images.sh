#!/bin/bash
# The six answers that aren't in the superhero-api dataset. Sourced from
# Wikipedia and the relevant Fandom wikis, converted with sips, and cropped
# where the source was a two-panel comparison or had the title printed on it.
#
#   ./tools/fetch-extra-images.sh
#
# Placeholder stills, same caveat as tools/fetch-images.js — swap in art you
# have the rights to before anything goes out publicly.
set -u
cd "$(dirname "$0")/.." || exit 1
D=assets/categories/superheroes
TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT
UA="dawghouse-duel/1.0"

grab () { curl -sSL -m 40 -A "$UA" -o "$TMP/$1" "$2" || echo "  ! failed: $1"; }

echo "Fetching the six that superhero-api doesn't carry…"
grab miles.bin   "https://static.wikia.nocookie.net/marveldatabase/images/3/39/Miles_Morales_Spider-Man_Vol_3_1_Textless.jpg/revision/latest/scale-to-width-down/1000"
grab booster.bin "https://static.wikia.nocookie.net/marvel_dc/images/4/4f/Booster_Gold_v.2_32_virgin.jpg/revision/latest/scale-to-width-down/1000"
grab moon.bin    "https://static.wikia.nocookie.net/marveldatabase/images/f/f0/Fantastic_Four_Vol_6_41_Black_History_Month_Variant_Textless.jpg/revision/latest/scale-to-width-down/900"
grab omni.bin    "https://upload.wikimedia.org/wikipedia/en/2/22/Omni-Man.jpg"
grab home.bin    "https://static.wikia.nocookie.net/amazons-the-boys/images/d/d4/The_Homelander_S5.png/revision/latest/scale-to-width-down/900"
grab invin.bin   "https://static.wikia.nocookie.net/amazon-invincible/images/a/a3/Invincible_%28Mark_Grayson%29.png/revision/latest/scale-to-width-down/900"

sips -s format jpeg -s formatOptions 88 "$TMP/miles.bin"   --out "$D/miles-morales.jpg" >/dev/null 2>&1
sips -s format jpeg -s formatOptions 88 "$TMP/booster.bin" --out "$D/booster-gold.jpg"  >/dev/null 2>&1
sips -s format jpeg -s formatOptions 88 "$TMP/moon.bin"    --out "$D/moon-girl.jpg"     >/dev/null 2>&1
sips -s format jpeg -s formatOptions 92 "$TMP/omni.bin"    --out "$D/omni-man.jpg"      >/dev/null 2>&1

# Homelander render carries a wide transparent margin — trim to the figure.
sips -s format png "$TMP/home.bin" --out "$TMP/home.png" >/dev/null 2>&1
sips -c 671 525 --cropOffset 29 97 "$TMP/home.png" --out "$D/homelander.png" >/dev/null 2>&1

# Invincible render is 900x2812 — a full-body sliver that would show up tiny on
# the board, and the Wikipedia alternative has INVINCIBLE printed across it.
# Crop to head-and-torso.
sips -s format png "$TMP/invin.bin" --out "$TMP/invin.png" >/dev/null 2>&1
sips -c 1150 872 --cropOffset 9 13 "$TMP/invin.png" --out "$D/invincible.png" >/dev/null 2>&1

for f in miles-morales.jpg booster-gold.jpg moon-girl.jpg omni-man.jpg homelander.png invincible.png; do
  if [ -s "$D/$f" ]; then
    printf "  %-20s %s\n" "$f" "$(sips -g pixelWidth -g pixelHeight "$D/$f" 2>/dev/null | tr -d ' \n' | sed 's/.*pixelWidth:/w=/;s/pixelHeight:/ h=/')"
  else
    printf "  %-20s MISSING\n" "$f"
  fi
done
echo
echo "Now run ./tools/build-manifest.sh"
