export type FlowStep = { label: string; detail: string; boundary: string };
export const walkthroughs: Record<string, { title: string; example: string; steps: FlowStep[] }> = {
  parallel: {
    title: "From a request to an inspectable outcome",
    example: "Illustrative request: prepare a handoff and propose two follow-up tasks. This is a website walkthrough, not a live agent run.",
    steps: [
      {label:"Request & access",detail:"A person submits a workspace request. FastAPI checks the live session, origin and current workspace membership.",boundary:"Profile labels do not grant permissions."},
      {label:"Authorized context",detail:"Lexical coverage retrieval returns matching workspace excerpts with stable citation IDs. Persistent decisions and source records remain inspectable.",boundary:"Optional read-only GitHub imports are separately enabled; connected applications do not grant external write access."},
      {label:"Bounded coordination",detail:"A local workflow computes a handoff and an exact proposed native task plan. Runs preserve inputs, child runs, failures and outcomes.",boundary:"A completed local computation does not mean the proposed tasks have been performed."},
      {label:"Owner approval",detail:"The owner reviews the proposed task payload, context and expiry before approving the exact native change.",boundary:"Source text and model interpretations cannot approve an action."},
      {label:"Worker revalidation",detail:"The leased worker rechecks authority, context and approved payload. It commits native task creation and the execution receipt atomically.",boundary:"New tasks start To do. Shell, SMS and external repository/document writes remain unavailable."},
      {label:"Source-linked result",detail:"The workspace exposes the result, authorized evidence and receipt. Optional model interpretation is separate from the deterministic local workflow.",boundary:"Proposed work, native changes and completed engineering work remain distinct."},
    ],
  },
  safetylens: {
    title:"Evidence → review → a controlled response",
    example:"Illustrative prototype journey using neutral pipeline components. No live video, incident or emergency service is connected to this portfolio.",
    steps:[
      {label:"Video evidence",detail:"A local pose detector preserves a clip and event JSON, or an operator uploads a video. The live preview does not automatically submit an incident.",boundary:"The portfolio uses diagrams only; no distressing demonstration imagery is shown."},
      {label:"Frame preparation",detail:"OpenCV extracts frames from submitted video. FastAPI persists the incident and evidence context.",boundary:"Camera angle, occlusion and lighting constrain useful evidence."},
      {label:"Configured analysis",detail:"The demo provider supplies rehearsal observations; an optional configured vision provider interprets extracted frames. PPE review is an independent on-demand workflow.",boundary:"Demo observations are not a continuously running PPE detection model."},
      {label:"Procedure & plan",detail:"Retrieved SOP passages ground a draft response plan. Citation verification keeps recommendations connected to procedure evidence.",boundary:"Insufficient policy or inconclusive footage requires review."},
      {label:"Human decision",detail:"An operator confirms or rejects the incident, reviews the plan and explicitly approves selected actions.",boundary:"A prediction alone cannot authorize a consequential action."},
      {label:"Simulation & audit",detail:"Approved actions execute in simulation. Reviewer decisions, policy citations and action history are retained in the audit trail and PDF report.",boundary:"The prototype does not contact emergency services."},
    ],
  },
};
