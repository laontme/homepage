#!/usr/bin/env bash
# Refresh only the explicitly selected Siemens icons; never used during builds.
set -euo pipefail
cd "$(dirname "$0")/.."
for name in arrow-down arrow-left arrow-right arrow-diagonal-top-right mail live-feed; do
  curl --fail --silent --show-error --location --max-time 30 \
    "https://api.iconify.design/ix/${name}.svg" -o "assets/icons/ix/${name}.svg"
done
curl --fail --silent --show-error --location --max-time 30 \
  https://raw.githubusercontent.com/siemens/ix-icons/main/LICENSE.md \
  -o assets/icons/ix/LICENSE.md
