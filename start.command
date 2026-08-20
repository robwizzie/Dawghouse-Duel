#!/bin/bash
# Double-click to run Dawg House Duel.
cd "$(dirname "$0")" || exit 1
PORT=8777
echo ""
echo "  DAWG HOUSE DUEL  ->  http://localhost:$PORT"
echo "  (leave this window open while you shoot; Ctrl-C to stop)"
echo ""
( sleep 1; open "http://localhost:$PORT" ) &
if command -v python3 >/dev/null 2>&1 && python3 -c "import http.server" >/dev/null 2>&1; then
  exec python3 -m http.server "$PORT"
elif command -v node >/dev/null 2>&1; then
  exec node .server.js
else
  echo "Need python3 or node to serve the folder." >&2
  read -r -p "Press return to close."
  exit 1
fi
