# Release verification

November 4, 2026. Tested the actual `out/` static export over localhost.

- Clean `npm ci`, ESLint, TypeScript, production build and export validator passed. The release lockfile was regenerated from the manifest in an isolated directory after CI exposed missing optional runtime records.
- Six portfolio routes plus a branded warm-white 404 fallback: home, résumé, Parallel, MemoryFence, MarketPulse, SafetyLens.
- All six routes checked at 360, 390, 768 and 1440 px: no document horizontal overflow; correct titles and one h1 per page.
- Desktop hero and Parallel case study, mobile SafetyLens and research text visually inspected.
- Project Research filter changed the selected-work count from four to two.
- MarketPulse controls changed from NASDAQ-100/1 to S&P 500/20; rendered metrics matched the saved CSV (historical mean RMSE 0.043674 ranks first for that cell).
- Architecture disclosure opened with its component description.
- Mobile menu opened and Escape closed it; expanded state updated correctly.
- Body background verified as rgb(247,245,239); locally hosted fonts loaded.
- Export validator checked 202 local link/asset references before the final architecture addition, all fragment targets, and prohibited content. Rerun count is printed by the command.
- All pinned case-study evidence paths checked against the downloaded source revisions.
- No GPA, telephone link or prohibited fall-detection image in exported pages. SafetyLens uses a labeled original architecture illustration.
- No Lighthouse score or full independent accessibility certification is claimed. Keyboard controls, semantic structure, focus styling, touch targets and reduced-motion CSS were reviewed; browser checks are bounded functional/layout verification.

The export validator also checks the 404 page and rejects the framework’s default dark-mode fallback.

The GitHub Pages workflow runs lint, typecheck, build and export validation before deployment. Deployment result and live verification are reported in the completion message.
