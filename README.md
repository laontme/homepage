# Laon - Reproducible Platform Engineer Website

A pure static Hugo site with Tailwind CSS v4. No Node.js required.

## Quick Start

```bash
nix develop
just dev
```

Dev server available at http://localhost:1313

## Commands

```bash
just dev      # Hugo server + Tailwind watch
just build    # Production build
just serve    # Hugo server only
just clean    # Clean build artifacts
```

## Project Structure

```
├── assets/css/main.css    # Tailwind input CSS with @theme variables
├── content/              # Hugo content files
├── layouts/              # Hugo templates
│   ├── index.html        # Home layout
│   ├── _default/         # Base templates
│   └── partials/         # Reusable partials + components
├── static/               # Static files (404, archive)
├── flake.nix             # Nix flake with dev shell
├── hugo.toml             # Hugo configuration
└── justfile              # Dev commands
```

## Tailwind CSS

Theme variables in `assets/css/main.css`:
- Colors: `flixie-bg`, `flixie-surface`, `flixie-accent`, etc.
- Fonts: `headline` (Satoshi), `body` (DM Sans), `mono` (JetBrains Mono)

## Nix Flake Dev Shell

```nix
packages = with pkgs; [
  go_1_25
  hugo
  just
  tailwindcss_4
];
```

## Troubleshooting

### Port already in use

```bash
just serve -- --port 1314
```





 CCC   IIIII   We implement Nix flakes
C   C    I     it's not flaky anymore

CICI   We implement Nix flakes
CICI   it's not flaky anymore
