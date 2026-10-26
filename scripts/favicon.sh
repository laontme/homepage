#!/usr/bin/env bash
# Deterministic favicon derived from the existing portrait. Requires ImageMagick.
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p static
# Reduce the alpha silhouette before tinting; remove fragile wisps and texture.
magick assets/images/hero-silhouette.png \
  -crop 1100x1140+60+60 +repage -alpha extract -threshold 45% \
  -morphology Close Disk:8 -resize 432x432 \
  -background black -gravity center -extent 512x512 \
  \( +clone -fill '#b9cde1' -colorize 100 \) \
  +swap -alpha off -compose CopyOpacity -composite \
  -background '#0d151c' -alpha remove -alpha off static/favicon-512.png
for size in 32 192; do
  magick static/favicon-512.png -resize "${size}x${size}" "static/favicon-${size}.png"
done
magick static/favicon-512.png -resize 180x180 static/apple-touch-icon.png
magick static/favicon-512.png -define icon:auto-resize=48,32,16 static/favicon.ico
