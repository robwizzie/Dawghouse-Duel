#!/bin/bash
# Lists what's actually in each category folder so the app doesn't have to
# guess. Run it after you add or rename images:
#
#     ./tools/build-manifest.sh
#
# Optional — without a manifest the app probes for files instead, which works
# fine, just noisier in the console.
cd "$(dirname "$0")/.." || exit 1
shopt -s nullglob nocaseglob
total=0
for dir in assets/categories/*/; do
  [ -d "$dir" ] || continue
  cat="$(basename "$dir")"
  files=("$dir"*.jpg "$dir"*.jpeg "$dir"*.png "$dir"*.webp "$dir"*.avif "$dir"*.svg "$dir"*.gif)
  if [ ${#files[@]} -eq 0 ]; then
    rm -f "$dir/index.json"
    echo "  $cat: no images (no manifest written)"
    continue
  fi
  {
    printf '{"files":['
    sep=""
    for f in "${files[@]}"; do
      printf '%s"%s"' "$sep" "$(basename "$f")"
      sep=","
    done
    printf ']}\n'
  } > "$dir/index.json"
  echo "  $cat: ${#files[@]} images"
  total=$((total + ${#files[@]}))
done
echo "Wrote manifests for $total images."
