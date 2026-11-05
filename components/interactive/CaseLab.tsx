"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
const loading = () => <p className="lab-loading" role="status">Preparing the explanatory walkthrough… No live project system is connected.</p>;
const FlowWalkthrough = dynamic(()=>import("./FlowWalkthrough").then(module=>module.FlowWalkthrough),{loading});
const ProvenanceLab = dynamic(()=>import("./ProvenanceLab").then(module=>module.ProvenanceLab),{loading});
export function CaseLab({project}:{project:"parallel"|"memoryfence"|"safetylens"}) {
  const [loaded,setLoaded]=useState(false);
  return <details className="case-lab" onToggle={event=>{if(event.currentTarget.open) setLoaded(true);}}><summary>{project==="memoryfence"?"Explore provenance & cascade deletion":"Follow an interactive execution walkthrough"}<span>Optional illustration · inspect and step through</span></summary>
    <noscript><p>The interactive illustration requires JavaScript. The complete implementation references, measured results and evidence remain available below.</p></noscript>
    {loaded && (project==="memoryfence"?<ProvenanceLab />:<FlowWalkthrough project={project}/>)}
  </details>;
}
