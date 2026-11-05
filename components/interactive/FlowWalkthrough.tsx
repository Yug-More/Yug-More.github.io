"use client";
import { useState } from "react";
import { walkthroughs } from "@/lib/walkthroughs";
export function FlowWalkthrough({ project }: {project:"parallel"|"safetylens"}) {
  const flow=walkthroughs[project];
  const [active,setActive]=useState(0);
  return <div className="interactive-lab flow-lab">
    <div className="lab-heading"><p className="eyebrow">Guided execution / explanatory illustration</p><h3>{flow.title}</h3><p>{flow.example}</p></div>
    <ol className="flow-steps" aria-label={`${project} workflow components`}>{flow.steps.map((step,index)=><li key={step.label} data-state={index===active?"active":index<active?"visited":"upcoming"}><button type="button" aria-current={index===active?"step":undefined} aria-controls={`${project}-flow-detail`} onClick={()=>setActive(index)}><small>0{index+1}</small><span className="flow-dot" aria-hidden="true"/><span>{step.label}</span></button></li>)}</ol>
    <div id={`${project}-flow-detail`} className="flow-detail" aria-live="polite" aria-atomic="true"><div className="flow-copy" key={active}><span className="lab-step">Step {active+1} / {flow.steps.length}</span><h4>{flow.steps[active].label}</h4><p>{flow.steps[active].detail}</p><p className="boundary-note"><span>System boundary</span>{flow.steps[active].boundary}</p></div></div>
    <div className="lab-controls"><button type="button" className="quiet-button" disabled={active===0} onClick={()=>setActive(active-1)}>← Previous</button><button type="button" className="quiet-button" onClick={()=>setActive(active===flow.steps.length-1?0:active+1)}>{active===flow.steps.length-1?"Restart walkthrough":"Next step →"}</button></div>
    <details className="lab-transcript"><summary>Read the entire walkthrough</summary><ol>{flow.steps.map(step=><li key={step.label}><strong>{step.label}</strong><p>{step.detail} {step.boundary}</p></li>)}</ol></details>
  </div>;
}
