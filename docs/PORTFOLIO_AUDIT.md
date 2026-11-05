# Portfolio audit and evidence decisions

Inspected November 4, 2026, starting from b27b16e on main with a clean working tree.

## Existing implementation

Next.js App Router, React, TypeScript, plain global CSS, next/font, static export, GitHub Pages Actions deployment. No backend or test runner. Existing components, portrait, personal links, education, internships and teaching history were retained and edited. Live HTML matched the prior section structure. Git history preserves the original HTML/CSS/JS site and the subsequent Next.js organization.

The initial baseline command stopped because dependencies were absent (`eslint: command not found`). After installation the current lint/type/build/export checks passed. Google font downloads failed in the restricted build environment, so the same font families are now locally hosted with their OFL licenses. Next.js 16.3.6 had a critical dependency advisory; Next.js and matching lint configuration were upgraded to 16.4.5 and compatible transitive fixes applied. The remaining audit findings at that point were eight moderate development-tool findings rooted in minimatch; the suggested automatic resolution would downgrade the lint framework and was not applied.

## Source revisions

- SafetyLens: 178f0f8a77f2f6c664822fe6ef09f62ff6342f15.
- Parallel: fb3b3fb75cd381103cf9fc39755e4f4d2aad6e38.
- MemoryFence: f51a8360aca39a428ca41bfc9afe10447d175d72.
- MarketPulse: d2ce4c25506a291b0c69254a8127419795a64123. Old Stock-Market-CS171 name resolves to MarketPulse; canonical links use the latter.

The public repositories were downloaded for inspection. READMEs, architecture, evaluation/handoff reports, implementation paths and original media were reviewed. The website does not claim those project test suites were freshly run. All published code/document evidence links are pinned to the inspected revisions.

## Content corrections and gaps

- Parallel's current runtime differs substantially from historical agent/voice/vector-search descriptions. Current lexical retrieval, native task approval and worker boundaries are used. The saved 40-query holdout reports recall .900, MRR .818; the final handoff reports 214 backend tests and 16 browser journeys. These are attributed repository results.
- MemoryFence's final study separates 72 actual responses, 108 declared state views and 36 extra views. LF0.5 is edge-retention probability. Six surviving poisoned descendants are not evidence of unauthorized tool execution. The final attack cells report zero objective effects. Historical conflicting software counts are omitted.
- MarketPulse's 355,320 forecasts, 282 folds and horizons are confirmed in current documentation. The explorer reproduces all 30 rows of paper/tables/native_metrics.csv, without inventing data. Retrospective and data-provenance limits remain prominent.
- SafetyLens is a prototype with configured demo analysis, optional vision analysis and simulated external actions. PPE review is on demand, not a continuous specialized detector. No footwear claim is made. The fall capture is excluded from source and export, per the updated brief; an original labeled explanatory SVG is used instead.
- SafetyLens first place is corroborated by owner/team public posts and the repository. Participant totals conflict with the event partner's reported attendance; totals are omitted. The owner specifies AWS credits, while public posts say only a prize; the amount is omitted rather than represented as cash.
- Parallel competition placements/prize totals differ between historical sources. They are withheld pending primary competition records.
- Employer productivity numbers have no public corroboration; 200/176/38% and internal transaction counts are omitted. Enterprise descriptions distinguish migration/UAT/support/design; no private employer artifacts are included.
- Teaching, leadership and academic honors originate in the owner's brief and existing portfolio, not independent institutional records. No student data is included. Additional institution-issued evidence would strengthen these claims.
- FindIt, PixelSense, AdvisrAI and Orch are concise secondary entries grounded in public READMEs, with maturity limitations. PixelSense's deterministic instructions and pending device save verification replace inaccurate semantic AI assumptions. FlowChain has no identified public repository and is not featured. No unknown role-specific contributions are invented.
- The résumé is a new print-friendly HTML summary using conservative portfolio content, not an uploaded original résumé. No GPA or telephone number is included in visible content, metadata or structured data.

## Identity and delivery

Configured identity: Yug-More <yugmore20@gmail.com>. Existing repository history uses that email; GitHub's commit API associates it with account Yug-More. The email-list API is unavailable with the current token scopes; no additional access was requested. No author history or co-author trailers are changed. GitHub Pages uses workflow deployment from main. Branch protection and ruleset inspection found no required review rule; no protections are bypassed.

## Validation

Run `npm run lint`, `npm run typecheck`, `npm run build`, and `npm run verify:export`. The export validator checks six portfolio pages, local assets/links and anchor targets, single h1 headings, and prohibited content/media. Browser QA uses the actual static export rather than a server-only route implementation. See the final completion report for deployment outcome.
