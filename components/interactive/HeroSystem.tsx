"use client";
import { useRef, useState } from "react";
const nodes = [
  {label:"Question", copy:"Start with a concrete question. Define the task before choosing the model or the tool."},
  {label:"Evidence", copy:"Retrieve relevant source records. A matching passage is evidence to inspect, not authority to act."},
  {label:"Memory & context", copy:"Keep the source, its history and its authorization boundaries attached to persistent context."},
  {label:"Bounded agents", copy:"Use bounded workflows to organize reasoning, dependencies and proposed work."},
  {label:"Human review", copy:"Review an exact plan before a consequential native change. Approval is an explicit system boundary."},
  {label:"Tools & receipts", copy:"Inspect authorized tool effects and their receipts. Evaluate what actually happened; separate observed outcomes from proposed work."},
];
export function HeroSystem() {
  const [active,setActive] = useState(0);
  const visual = useRef<HTMLDivElement>(null);
  return <div className="wrap system-sketch" aria-label="Interactive intelligent systems sketch">
    <div className="sketch-heading"><p className="eyebrow">A system is more than a model.</p><span>Interactive sketch · illustrative, not a live agent</span></div>
    <div ref={visual} className="sketch-visual" onPointerMove={event=>{
      if (document.documentElement.dataset.motion === "reduced" || matchMedia("(prefers-reduced-motion: reduce)").matches || event.pointerType !== "mouse") return;
      const box=event.currentTarget.getBoundingClientRect();
      visual.current?.style.setProperty("--sketch-x",`${((event.clientX-box.left)/box.width-.5)*4}px`);
      visual.current?.style.setProperty("--sketch-y",`${((event.clientY-box.top)/box.height-.5)*4}px`);
    }} onPointerLeave={()=>{visual.current?.style.setProperty("--sketch-x","0px");visual.current?.style.setProperty("--sketch-y","0px");}}>
      <svg className="sketch-lines" viewBox="0 0 1000 100" preserveAspectRatio="none" aria-hidden="true"><path d="M80 50H920"/><path className="signal-line" d="M80 50H920"/></svg>
      <div className="sketch-nodes">{nodes.map((node,index)=><button type="button" key={node.label} aria-pressed={active===index} aria-controls="sketch-description" onClick={()=>setActive(index)}><span className="node-dot" aria-hidden="true"/><small>0{index+1}</small>{node.label}</button>)}</div>
    </div>
    <div className="sketch-description" id="sketch-description" aria-live="polite"><strong>{nodes[active].label}</strong><p>{nodes[active].copy}</p><button type="button" className="quiet-button" onClick={()=>setActive((active+1)%nodes.length)}>Follow the flow <span aria-hidden="true">→</span></button></div>
    <noscript><p>Question → evidence → persistent context → coordination → human review → verified outcome. This conceptual sketch connects the portfolio’s research interests; it is not a running system.</p></noscript>
  </div>;
}
