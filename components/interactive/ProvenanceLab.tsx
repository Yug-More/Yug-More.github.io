"use client";
import { useState } from "react";
export function ProvenanceLab() {
  const [complete,setComplete]=useState(true);
  const [deleted,setDeleted]=useState(false);
  return <div className="interactive-lab provenance-lab">
    <div className="lab-heading"><p className="eyebrow">Provenance / controlled comparison</p><h3>Delete the source. What remains?</h3><p>Explore recorded-cascade deletion (DS3). The three-node chain below is illustrative; the missing-edge position is not a replay of an individual trial.</p></div>
    <div className="project-filters" role="group" aria-label="Recorded provenance condition"><button type="button" aria-pressed={complete} onClick={()=>{setComplete(true);setDeleted(false);}}>Complete · LF1.0</button><button type="button" aria-pressed={!complete} onClick={()=>{setComplete(false);setDeleted(false);}}>Incomplete · nominal LF0.5</button></div>
    <div className={`provenance-chain ${complete?"complete":"incomplete"} ${deleted?"cascade-applied":""}`} aria-label="Illustrative source and derived memory chain">
      <div className={`memory-node ${deleted?"memory-removed":""}`}><span className="node-type">Original source</span><strong>Untrusted instruction</strong><small>{deleted?"Source removed":"Synthetic attacker-origin text"}</small></div>
      <div className="provenance-edge" aria-hidden="true"><span>{complete?"Recorded parent":"Missing parent edge"}</span><i/></div>
      <div className={`memory-node ${deleted?(complete?"memory-removed":"memory-survives"):""}`}><span className="node-type">TT2 summary</span><strong>Derived memory</strong><small>{deleted?(complete?"Removed by cascade":"Not reached by cascade"):"Generated from the source"}</small></div>
      <div className="provenance-edge recorded" aria-hidden="true"><span>Recorded parent</span><i/></div>
      <div className={`memory-node ${deleted?(complete?"memory-removed":"memory-survives"):""}`}><span className="node-type">TT3 output</span><strong>Derived memory</strong><small>{deleted?(complete?"Removed by cascade":"Not reached by cascade"):"Generated from the summary"}</small></div>
    </div>
    <div className="lab-controls"><button type="button" className="button button-primary" onClick={()=>setDeleted(!deleted)}>{deleted?"Reset source & memories":"Apply recorded-cascade deletion"}</button></div>
    <div className="provenance-outcome" role="status"><strong>{deleted?(complete?"The recorded graph reaches both descendants.":"The missing link leaves descendants outside recorded reach."):"The source is still present. Apply deletion to inspect recorded reach."}</strong><p>True ancestry remains known to the evaluator. Operational deletion follows recorded provenance; it cannot use that evaluator-only knowledge.</p></div>
    <div className="measured-result"><p className="eyebrow">Measured endpoint / separate from the illustration</p><strong>{complete?"0 of 6":"6 of 6"} attack descendants survived cascade deletion</strong><p>{complete?"At complete recorded provenance, DS3 removed all attack descendants.":"At nominal LF0.5, DS3 retained all six attack descendants across three generated attack chains."} Nominal fidelity is an edge-retention probability, not a promise that exactly half of each chain’s edges remain. These are conditional state measurements, not six independent model trials or evidence of unauthorized tool execution.</p><a className="text-link" href="https://github.com/Yug-More/memoryfence/blob/f51a8360aca39a428ca41bfc9afe10447d175d72/docs/research/COMPLETION_REPORT.md">Read the experiment report ↗</a></div>
  </div>;
}
