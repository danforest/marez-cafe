#!/bin/bash
set -euo pipefail

cd "$(dirname "$0")/.."
PORT="${1:-3333}"

echo "→ Stopping old servers on ports 3000 and ${PORT}..."
for p in 3000 "$PORT"; do
  lsof -ti :"$p" | xargs kill -9 2>/dev/null || true
done
sleep 2

echo "→ Fresh build (clears stale CSS)..."
rm -rf .next
npm run build

echo ""
echo "→ Starting at http://127.0.0.1:${PORT}"
echo "   Keep this window open. Hard-refresh the browser (Cmd+Shift+R)."
echo ""

exec npx next start --hostname 127.0.0.1 -p "$PORT"
