export type Project = {
  slug: string; name: string; category: string; summary: string; repo: string; revision: string;
  image: string; caption: string; role: string; stack: string; problem: string;
  implementation: string[]; results: string[]; limitations: string[];
  nodes: { title: string; description: string }[];
  sources: { path: string; label: string; claim: string }[];
};
export const projects: Project[] = [
  {
    slug: "safetylens", name: "SafetyLens", category: "Computer vision · Applied AI",
    summary: "From camera evidence to a policy-grounded response—with a person in control.",
    repo: "SafetyLens", revision: "178f0f8a77f2f6c664822fe6ef09f62ff6342f15",
    image: "/images/projects/safetylens.svg", caption: "Explanatory diagram drawn for this portfolio from the implemented prototype workflow. This is an architecture illustration, not a product screenshot.",
    role: "Backend, database, video ingestion, analysis providers, policy retrieval, approvals, reporting and shared frontend integration. Team: Yug More, Abhinav GS and Sean Aminov. Sean owned the local detector; Abhinav owned demo-help and demonstration documentation.",
    stack: "Next.js · TypeScript · FastAPI · SQLite · MediaPipe · OpenCV",
    problem: "Safety operators often need to find a camera clip, locate the appropriate procedure and coordinate a response in separate tools. SafetyLens explores a single review workflow that keeps evidence, policy and decisions together.",
    implementation: [
      "The local MediaPipe detector follows pose and temporal motion to identify sustained person-down events. A buffer saves evidence clips and event JSON. The live preview does not automatically submit incidents: operators upload clips or import detector events.",
      "FastAPI services prepare video frames and persist incidents with SQLAlchemy and SQLite. The default demo provider returns configured rehearsal results. An optional OpenAI provider interprets extracted frames when configured; these paths are explicitly distinct.",
      "Policy retrieval and citation verification support a draft response plan. Operators confirm or reject incidents and approve individual actions before simulated execution. The application records decisions and produces a PDF report.",
      "PPE review is a separate on-demand workflow with camera requirements and configured or provider-assisted observations. It is not a continuous PPE detector. The frontend is a Next.js operator dashboard."
    ],
    results: ["A complete demonstrable person-down review journey connects uploaded evidence, analysis, policy citations, operator approval, simulated actions and an audit report.", "The public repository includes backend pytest tests, detector unit tests and frontend lint, typecheck and build commands. Test counts are omitted here because a fresh project-suite run was not performed for this portfolio."],
    limitations: ["Hackathon prototype; not certified safety equipment or a production emergency response service.", "External alerts and tickets are simulated. The application does not contact emergency services.", "Camera angle, occlusion, lighting and pose quality affect detection. Fire, smoke and specialized PPE models remain future work."],
    nodes: [
      { title: "01 · Camera / video", description: "Local pose tracking preserves clips and JSON. Uploaded video can enter the backend independently of the detector." },
      { title: "02 · Evidence & analysis", description: "OpenCV extracts frames. A configured demo or optional vision provider produces structured observations." },
      { title: "03 · Incident store", description: "FastAPI and SQLAlchemy persist incident state in SQLite for the Next.js dashboard." },
      { title: "04 · Procedure retrieval", description: "Relevant SOP passages ground a draft response plan with verified citations." },
      { title: "05 · Human approval", description: "The operator reviews evidence, confirms the incident and selects permitted actions." },
      { title: "06 · Simulation & report", description: "Approved actions run in simulation; audit events and a PDF preserve the review history." }
    ],
    sources: [
      { path: "README.md", label: "System overview & prototype boundaries", claim: "Implemented workflow, provider modes, PPE scope and simulation limits" },
      { path: "docs/team/YUG_HANDOFF.md", label: "Team engineering handoff", claim: "Documented division of engineering responsibilities" },
      { path: "detector/src/safetylens_detector/state_machine.py", label: "Temporal detector state machine", claim: "Local sustained-event detection implementation" },
      { path: "backend/app/services", label: "Backend service implementation", claim: "Video, policy, approval and reporting services" },
      { path: "docs/DEMO_SCRIPT.md", label: "Demonstration walkthrough", claim: "Reproducible operator journey" }
    ]
  },
  {
    slug: "parallel", name: "Parallel", category: "AI agents · Software engineering",
    summary: "A shared workspace for source-linked decisions and bounded, human-controlled agents.",
    repo: "Parallel", revision: "fb3b3fb75cd381103cf9fc39755e4f4d2aad6e38",
    image: "/images/projects/parallel.png", caption: "Real application capture from the repository’s persisted release-review walkthrough. All accounts, messages and project records in this capture are synthetic.",
    role: "Originally led frontend development, with contributions to product decisions, backend ideas and the team demonstration. The current repository has evolved beyond the original hackathon prototype; this case study distinguishes current system behavior from that original role.",
    stack: "React 19 · Vite · FastAPI · SQLAlchemy · Alembic · SQLite / PostgreSQL",
    problem: "Team conversations, documents and decisions fragment across tools. Parallel keeps inspectable project context beside tasks and bounded agent workflows, with explicit authority for consequential changes.",
    implementation: [
      "A React workspace connects to a FastAPI modular monolith. Conversations, tasks, decisions, authorized source records and agent runs share a migrated SQL database. A separate leased worker handles queued work; the interface uses polling.",
      "Default retrieval uses deterministic lexical coverage ranking. Answers preserve matching source excerpts and immutable citation IDs within the authorized workspace. Optional model interpretation and trained retrieval require separate configuration and consent.",
      "Local agents compute bounded status, dependency, handoff and task-plan results. Owners approve an exact native payload; a worker rechecks current authority, context and expiry before committing native effects with an atomic receipt.",
      "Text, Markdown and extractable PDF ingestion and opt-in read-only GitHub imports provide bounded knowledge. Source revocation invalidates derived text. Voice, SMS, shell execution and external document or repository writes are unavailable in the current runtime."
    ],
    results: ["On a frozen 40-query developer-created holdout, lexical coverage ranking reports returned-set recall of 0.900 and MRR of 0.818 (precision 0.773). Recall measures how many labeled relevant records were returned. MRR averages the reciprocal rank of the first relevant result.", "These synthetic author-curated judgments measure retrieval on this fixture, not overall product accuracy or independent model quality.", "The repository’s final Phase 17 handoff records 214 passing backend tests and 16 passing browser journeys. These are dated repository-reported outcomes, not suites rerun during this portfolio build."],
    limitations: ["No production hosting, adoption or independent usability validation is claimed.", "Optional trained-model quality, live private GitHub authorization and production recovery remain unverified. Real email delivery is not implemented.", "Competition accounts differ between historical materials; award placements and prize totals are withheld pending primary evidence."],
    nodes: [
      { title: "01 · React workspace", description: "People work with conversations, tasks, decisions, evidence and run history." },
      { title: "02 · FastAPI access gate", description: "Live session, origin and membership checks authorize each workspace operation." },
      { title: "03 · Retrieval & sources", description: "Coverage ranking returns authorized excerpts. Optional model interpretation stays distinct from source evidence." },
      { title: "04 · Shared SQL store", description: "SQLAlchemy and Alembic support SQLite locally and PostgreSQL checks." },
      { title: "05 · Owner approval", description: "A proposal binds an exact native task or report payload to its context and expiry." },
      { title: "06 · Leased worker", description: "Revalidates authority and payload, then commits native effects and receipts atomically." }
    ],
    sources: [
      { path: "docs/ARCHITECTURE.md", label: "Current architecture", claim: "Modular monolith, worker and storage boundaries" },
      { path: "docs/EVALUATION.md", label: "Retrieval methodology", claim: "40-query fixture, metric definitions and limitations" },
      { path: "docs/evaluation-phase17.json", label: "Saved evaluation results", claim: "Recorded coverage-ranking results" },
      { path: "docs/FINAL_PRODUCT_HANDOFF.md", label: "Final product handoff", claim: "214 backend tests and 16 browser journeys, reported baseline" },
      { path: "docs/PROJECT_HISTORY.md", label: "History & attribution", claim: "Recognition claims and verification limits" }
    ]
  },
  {
    slug: "memoryfence", name: "MemoryFence", category: "Independent research · Agent security",
    summary: "What survives when an AI agent forgets a source, but keeps its descendants?",
    repo: "memoryfence", revision: "f51a8360aca39a428ca41bfc9afe10447d175d72",
    image: "/images/projects/memoryfence.svg", caption: "Original repository figure from the declared paired provenance and deletion study. These are memory-state measurements conditional on shared generated text, not independent model trials.",
    role: "Independent research project on persistent agent memory, recorded provenance and authorization. The repository includes the harness, frozen protocols, genuine response archives, independent verifiers and an unsubmitted manuscript; no peer review is claimed.",
    stack: "Python · Pydantic · SQLite · Ollama · Controlled experiments",
    problem: "Attacker-origin instructions can pass from a shared source into summaries and consolidated memories. Removing the original note may leave derived text retrievable, particularly when recorded ancestry is incomplete. The study separates memory exposure from actual authorized tool effects.",
    implementation: [
      "The harness separates true ancestry used by the evaluator from recorded provenance used by operational deletion and defenses. Workspace ACLs, immutable revisions and a retrieval authorization gateway keep operational decisions separate from evaluator knowledge.",
      "The software implements five deletion policies and DF0–DF5 controls. The final bounded experiment compares source-only and recorded-cascade deletion and DF0 versus DF2 retrieval, using six real generated chains and seeded loss of recorded edges.",
      "Nominal provenance fidelity is the configured probability of retaining a recorded parent edge. LF0.5 means a 0.5 retention probability, not exactly half of the edges in every short chain. True ancestry remains available only to evaluation.",
      "A 24-call qualification compared message ordering under the same exact task contract. After task-last qualified, the cycle used 12 transformation calls and 36 final agent calls: 72 genuine chat responses in total. Sandbox actions have harmless local effects."
    ],
    results: ["At complete recorded provenance, cascade deletion removed all attack descendants. At nominal LF0.5 it retained 6 of 6 attack descendants across three generated attack chains.", "All 36 final agent replies completed the exact legitimate tickets, including 18 poisoned-memory episodes. Each attack cell had zero of three objective attack proposals/effects; three free-text fields nevertheless repeated a canary.", "The declared matrix comprises 108 state views. An enum-iteration defect created 36 extra LF0.0 views, retained and labeled separately. Neither set represents that many new model trials."],
    limitations: ["Three seeds of one synthetic attack pattern do not establish general protection or a defense ranking.", "Missing provenance affected retrievability; final-study exposure did not establish unauthorized tool execution. Earlier experiments used different conditions and are not pooled with these findings.", "Operational deletion is not forensic erasure: evaluator snapshots and research journals retain evidence. The manuscript is not submitted or peer reviewed."],
    nodes: [
      { title: "01 · Synthetic source", description: "Clean or attacker-authored text enters an isolated collaborative workspace." },
      { title: "02 · Derived memories", description: "Real TT2 summaries and TT3 outputs preserve exact generated text and parent hashes." },
      { title: "03 · Recorded provenance", description: "Seeded edge loss changes recorded ancestry; true ancestry is reserved for evaluation." },
      { title: "04 · Deletion policy", description: "Source-only or recorded-cascade deletion acts on independent state snapshots." },
      { title: "05 · Retrieval & gateway", description: "DF0/DF2 retrieval and authorization checks mediate sandbox proposals and effects." },
      { title: "06 · Independent verifier", description: "Saved replies, graph reach, retrieval IDs and exact effects are checked independently of production scoring." }
    ],
    sources: [
      { path: "docs/research/FINAL_BOUNDED_PROTOCOL.md", label: "Frozen bounded protocol", claim: "72 calls, fidelity semantics and declared state matrix" },
      { path: "docs/research/COMPLETION_REPORT.md", label: "Completion report", claim: "Conditional findings and behavioral outcomes" },
      { path: "experiments/2026-10-25-bounded", label: "Genuine experiment archives", claim: "Raw evidence, derived analyses and original figures" },
      { path: "docs/research/FINAL_BOUNDED_DEVIATIONS.md", label: "Deviation log", claim: "Extra LF0.0 views and correction" },
      { path: "docs/architecture/overview.md", label: "System architecture", claim: "Provenance, storage, authorization and evaluator separation" }
    ]
  },
  {
    slug: "marketpulse", name: "MarketPulse", category: "Empirical research · Machine learning",
    summary: "Testing whether model complexity earns its place against simple forecasting baselines.",
    repo: "MarketPulse", revision: "d2ce4c25506a291b0c69254a8127419795a64123",
    image: "/images/projects/marketpulse.png", caption: "Genuine point-forecast skill figure generated from committed study results. Findings are retrospective and conditional on these stored index histories.",
    role: "A course project extended into an empirical research pipeline. Original contributor history is preserved in the repository; the study is presented as a retrospective investigation, with an unreviewed manuscript and explicit data-provenance limits.",
    stack: "Python · Pandas · scikit-learn · LSTM · Walk-forward evaluation",
    problem: "A complex forecasting model can look compelling without producing reliable gains over simple methods. MarketPulse asks how model comparisons change across market histories, prediction horizons and repeated chronological evaluation.",
    implementation: [
      "Two stored price-index histories cover NASDAQ-100 and S&P 500. The target is forward log change over 1, 5 or 20 trading sessions. Causal features and purged expanding-window folds separate training, validation and test windows.",
      "Five procedures share the same test origins: zero return, embargoed training-target mean, standardized linear regression, random forest and a one-layer sequence LSTM. The saved study contains 355,320 out-of-sample forecasts across 282 folds.",
      "Paired-loss analyses use dependence-aware HAC or moving-block calculations and Holm multiple-testing correction. Selected-fold seed checks probe stochastic sensitivity; they are not full-history repetitions.",
      "Committed prediction records support pooled and matched comparisons and prequential interval analyses. The workflow preserves negative findings and distinguishes chronological evaluation from a permanently unseen holdout."
    ],
    results: ["Random forest ranks first by native pooled RMSE in three of six index/horizon cells; a simple baseline ranks first in the other three. LSTM has the highest pooled RMSE in all six.", "No ML gain over a simple baseline survives the separate expanded 30-comparison Holm family. Nonsignificance does not establish equivalence or universal model inferiority.", "The meaningful outcome is a measured limit on added complexity in these experiments, not a claim of successful market prediction or trading profitability."],
    limitations: ["Data acquisition timestamps, precise source versions and licensing records are incomplete. The inputs are closing-price indexes, not total-return series.", "Both histories were used during the project; chronology does not prove previously unseen data. Early S&P history predates the modern index.", "Original execution revision and environment records are missing for 210 recovered folds. Prospective evidence and external scientific review remain necessary."],
    nodes: [
      { title: "01 · Stored index closes", description: "Validate NASDAQ-100 and S&P 500 histories while preserving provenance limitations." },
      { title: "02 · Causal features", description: "Create log-return targets at 1, 5 and 20 sessions without future-feature leakage." },
      { title: "03 · Purged folds", description: "Expanding training windows purge labels that overlap later validation and test blocks." },
      { title: "04 · Five procedures", description: "Compare two simple baselines with linear regression, random forest and LSTM at matched origins." },
      { title: "05 · Saved forecasts", description: "Preserve 355,320 prediction records across 282 chronological folds." },
      { title: "06 · Statistical audit", description: "Paired loss, multiple-testing correction, seed sensitivity and interval diagnostics qualify conclusions." }
    ],
    sources: [
      { path: "docs/WALKFORWARD_METHODOLOGY.md", label: "Walk-forward methodology", claim: "Targets, folds, shared origins and purging" },
      { path: "docs/FINAL_RESEARCH_RESULTS.md", label: "Final research findings", claim: "Forecast scale and corrected model comparisons" },
      { path: "docs/STATISTICAL_RELIABILITY.md", label: "Statistical reliability", claim: "Dependence-aware tests and comparison families" },
      { path: "paper/tables/native_metrics.csv", label: "Native model metrics", claim: "Committed numerical evidence underlying figures" },
      { path: "data/README.md", label: "Data provenance", claim: "Dataset scope and acquisition limitations" }
    ]
  }
];
export function sourceUrl(project: Project, path: string) {
  const kind = path.split("/").at(-1)?.includes(".") ? "blob" : "tree";
  return `https://github.com/Yug-More/${project.repo}/${kind}/${project.revision}/${path}`;
}
