#!/bin/bash
# ── Mark Reid Site Restore ──────────────────────────────────────────────
# Run from workspace root:  bash .scratch/restore.sh
# Finds the most-recent backup archive and unpacks it, overwriting any
# files that git may have deleted or corrupted.
set -euo pipefail

BACKUP=$(ls -t .scratch/site-backup-*.tar.gz 2>/dev/null | head -1)
if [[ -z "$BACKUP" ]]; then
  echo "❌  No backup archive found in .scratch/"
  exit 1
fi

echo "✅  Restoring from: $BACKUP"
tar -xzf "$BACKUP"
echo "✅  Done. Restart both workflows to pick up the restored files."
