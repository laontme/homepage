# LAONTME

Source for [laont.me](https://laont.me/), Stanislav Smirnov’s personal website. Built with Hugo, Tailwind CSS v4, and a pinned Nix development environment. No Node.js required.

## Local development

```sh
nix develop
just dev
```

The preview runs at <http://localhost:1313/> and rebuilds on changes. Draft content is excluded by default.

## Build

```sh
nix develop -c just build
```

The production site is written to `public/`. The build clears stale output files.

To build the site as a Nix package:

```sh
nix build
```

The output is available through `result/`.

## Commands

| Command | Purpose |
| --- | --- |
| `just dev` | Run the Hugo preview with live rebuilding |
| `just build` | Build the production site |
| `just clean` | Remove generated build artifacts |

For a different preview port, run `hugo server --port 1314 --disableFastRender` inside the development shell.

## Content and URLs

| Source | Public URL |
| --- | --- |
| `content/_index.md` | `/` |
| `content/companies/_index.md` | `/work/` |
| `content/companies/` | `/work/companies/<slug>/` |
| `content/projects/` | `/work/projects/<slug>/` |
| `content/stories/` | `/work/stories/<slug>/` |
| `content/topics/` | `/work/topics/<slug>/` |

Companies describe roles, projects describe products, and stories describe specific engineering contributions. The `topics` front-matter field groups relevant companies, projects, and stories into shared topic pages. Relations between entries use `related_work`, `related_projects`, and `related_case_studies` with content filename stems.

The homepage selects featured and compact stories explicitly through `work_proof` in `content/_index.md`. The full timeline is on `/work/` and uses `timeline_date`, `timeline_summary`, and `timeline_detail`; an optional `evidence` field supplies supporting figures. Entries marked `draft: true` are excluded from normal builds. Private writing drafts and research remain Git-ignored and are not part of the public source.

## Layout and styling

- `layouts/home.html`: homepage composition.
- `layouts/baseof.html`: shared document structure and metadata.
- `layouts/_partials/`: navigation, footer, and reusable components.
- `layouts/companies/`, `layouts/projects/`, `layouts/stories/`: work pages and listings.
- `layouts/topics/`: topic pages.
- `assets/css/main.css`: Tailwind input, theme tokens, and component styles.
- `assets/images/`: image assets processed by Hugo.
- `hugo.toml`: site configuration, URL structure, and subscription settings.

The site follows the system light/dark preference. Typography uses Satoshi, DM Sans, JetBrains Mono, and Space Grotesk. Small inline scripts handle timeline dragging and the cursor-reactive capability rail.

UI icons are vendored Siemens Industrial Experience SVGs in `assets/icons/ix/`, with their upstream MIT license and source attribution. `layouts/_partials/icon.html` inlines them at build time; icons work without JavaScript or Iconify API requests. Refresh the selected assets explicitly with `bash scripts/update-icons.sh`; normal builds are offline for icons. Navigation arrows use these SVGs; arrows used as notation inside article bodies remain text.

Social-share covers are generated deterministically as 1200 × 630 PNGs by Hugo's native image pipeline (`layouts/_partials/social-image.html`). Each page supplies its title and description. No AI, external rendering service, or browser JavaScript is involved. Bundled Space Grotesk fonts retain their OFL license in `assets/fonts/`. To change the geometric background, edit and run `python3 scripts/social-background.py`; ordinary builds need only Hugo. The same setup works in the existing Nix build without a separate VPS service.

Use `social_subtitle` in page front matter to give a cover its own subtitle instead of reusing its description. Favicons are simplified from the existing portrait; regenerate their checked-in PNG/ICO files with `bash scripts/favicon.sh` (requires ImageMagick). Normal builds do not require ImageMagick.

Email updates use a Listmonk subscription form. `/index.xml` remains available as an empty RSS feed while writing is unpublished.

The shared bottom widget combines contact and updates. Contact submits email/message fields directly to self-hosted Formlander using a native HTML POST, with a honeypot and invisible Cloudflare Turnstile protection. Turnstile requires JavaScript; direct email remains available as an alternative. The submission endpoint and public captcha site key are configured in `hugo.toml`. Newsletter subscriptions are a separate form and continue to use Listmonk.

## License

Code is licensed under [MIT](LICENSE-MIT). Original site content by Stanislav Smirnov is licensed under [Creative Commons Attribution 4.0 International](LICENSE-CC-BY-4.0) ([CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)).

Content includes prose and editorial metadata in `content/`, original reader-facing copy in templates, this documentation, and original images or illustrations owned by the author. Template structure, CSS, JavaScript, configuration, and build tooling remain MIT. Code examples in content and documentation are also available under MIT. Third-party material retains its own licenses or permissions.

When sharing content, credit **Stanislav Smirnov (yo@laont.me)**, link to the original page and CC BY 4.0, retain applicable notices, and indicate modifications. Individual content pages display this notice; home and listing pages do not. See [LICENSE](LICENSE) for the full scope and an attribution example.
