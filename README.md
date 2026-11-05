# Yug More

Portfolio published at [yug-more.github.io](https://yug-more.github.io/).

## Layout

- `app/` — page, layout, and styles
- `components/layout/` — navigation, footer, and section frame
- `components/sections/` — page sections
- `lib/` — site content and links
- `public/` — portrait and static files
- `.github/workflows/` — builds the site and publishes it to GitHub Pages

## Development and verification

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
npm run verify:export
```

The production export is `out/`. GitHub Actions runs all four checks before publishing. Project routes use trailing slashes so GitHub Pages serves their `index.html` directly.

`lib/projects.ts` contains case-study content and revision-pinned sources; `lib/evidence.ts` tracks verification/disclosure decisions. `lib/market-results.json` reproduces the committed MarketPulse native metric rows. Original media provenance is recorded in `public/images/projects/ATTRIBUTION.md`. Fonts are locally hosted with their licenses in `app/fonts/`.

See [the audit](docs/PORTFOLIO_AUDIT.md) for source revisions, corrected historical claims, evidence gaps and verification limits. Update evidence dates and source revisions together when reviewing project changes. Do not publish private employer/student materials or unsupported outcomes.

## Interactive portfolio

The hero sketch, research connections, timeline and optional case-study labs extend the existing static content. `lib/connections.ts` and `lib/walkthroughs.ts` hold the typed explanatory models. Optional case labs load when opened. The illustrations do not connect to live project backends.

Motion uses shared timings in `lib/motion.ts` and `app/motion.css`, with system reduced-motion support and a footer override. Essential methods, results and evidence remain server-rendered; the knowledge map has a complete native list alternative. See [the enhancement report](docs/PHASE_2_IMPLEMENTATION.md) for the phase-by-phase implementation, evidence boundaries and verification limits.
