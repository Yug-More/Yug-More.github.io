export const connections = [
  { id:"security", label:"AI agent security", question:"What an agent remembers must remain separate from what it may do.", methods:["Provenance tracking","Retrieval authorization","Exact approval","Python / SQLite"], links:[
    {name:"MemoryFence", href:"/projects/memoryfence/", relationship:"Studies incomplete recorded ancestry, deletion and retrievable poisoned descendants.", evidence:"https://github.com/Yug-More/memoryfence/blob/f51a8360aca39a428ca41bfc9afe10447d175d72/docs/research/FINAL_BOUNDED_PROTOCOL.md"},
    {name:"Parallel", href:"/projects/parallel/", relationship:"Uses current workspace authority, source revocation and owner-approved native payloads.", evidence:"https://github.com/Yug-More/Parallel/blob/fb3b3fb75cd381103cf9fc39755e4f4d2aad6e38/docs/ARCHITECTURE.md"},
  ]},
  { id:"evaluation", label:"Empirical evaluation", question:"Does a promising result survive a fair baseline and a clearly defined experiment?", methods:["Walk-forward validation","Synthetic holdouts","Paired comparisons","Python / scikit-learn"], links:[
    {name:"MarketPulse", href:"/projects/marketpulse/", relationship:"Compares five forecasting procedures at shared origins with multiple-testing correction.", evidence:"https://github.com/Yug-More/MarketPulse/blob/d2ce4c25506a291b0c69254a8127419795a64123/docs/FINAL_RESEARCH_RESULTS.md"},
    {name:"Parallel", href:"/projects/parallel/", relationship:"Evaluates lexical retrieval on a frozen developer-created 40-query holdout.", evidence:"https://github.com/Yug-More/Parallel/blob/fb3b3fb75cd381103cf9fc39755e4f4d2aad6e38/docs/EVALUATION.md"},
    {name:"MemoryFence", href:"/projects/memoryfence/", relationship:"Separates genuine model calls from reused state views and actual tool effects.", evidence:"https://github.com/Yug-More/memoryfence/blob/f51a8360aca39a428ca41bfc9afe10447d175d72/docs/research/COMPLETION_REPORT.md"},
  ]},
  { id:"oversight", label:"Human oversight", question:"Where should a system stop and ask a person to decide?", methods:["Approval boundaries","Evidence review","Auditable decisions","FastAPI / SQLAlchemy"], links:[
    {name:"SafetyLens", href:"/projects/safetylens/", relationship:"Connects video evidence and procedures to human review before simulated response actions.", evidence:"https://github.com/Yug-More/SafetyLens/blob/178f0f8a77f2f6c664822fe6ef09f62ff6342f15/README.md"},
    {name:"Parallel", href:"/projects/parallel/", relationship:"Binds owner approval to an exact native plan that the worker revalidates.", evidence:"https://github.com/Yug-More/Parallel/blob/fb3b3fb75cd381103cf9fc39755e4f4d2aad6e38/docs/ARCHITECTURE.md"},
  ]},
  { id:"engineering", label:"Reliable software", question:"How do we turn a workflow into something inspectable, testable and maintainable?", methods:["Python / SQL","Validation and UAT","Explicit state transitions","React / FastAPI"], links:[
    {name:"Parallel", href:"/projects/parallel/", relationship:"Combines a modular API, migrated SQL store and leased worker with inspectable receipts.", evidence:"https://github.com/Yug-More/Parallel/blob/fb3b3fb75cd381103cf9fc39755e4f4d2aad6e38/docs/ARCHITECTURE.md"},
    {name:"L&L Products", href:"/#experience", relationship:"Production-label migration, SQL validation and user acceptance testing. Experience description is owner-supplied; no private employer artifacts are published.", evidence:null},
    {name:"Technical teaching", href:"/#leadership", relationship:"Programming, design and debugging developed through Python, Java and ML teaching roles. Role history is owner-supplied.", evidence:null},
  ]},
] as const;
