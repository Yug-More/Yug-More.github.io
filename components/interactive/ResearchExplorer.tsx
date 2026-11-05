"use client";
import { useState } from "react";
import Link from "next/link";
import { connections } from "@/lib/connections";
export function ResearchExplorer() {
  const [selected,setSelected] = useState(0);
  const topic = connections[selected];
  return <section className="section explorer-section" id="explorer" aria-labelledby="explorer-title"><div className="wrap">
    <div className="section-head"><p className="eyebrow">Engineering & research explorer</p><h2 id="explorer-title">Different projects. Connected questions.</h2><p className="section-intro">Trace an interest to the systems, methods and evidence behind it. These are conceptual relationships grounded in the work—not claims of shared experimental findings.</p></div>
    <div className="knowledge-map"><div className="map-topics" role="group" aria-label="Explore a technical interest">{connections.map((item,index)=><button type="button" key={item.id} aria-pressed={selected===index} aria-controls="connection-panel" onClick={()=>setSelected(index)}><span>0{index+1}</span>{item.label}<span aria-hidden="true">↗</span></button>)}</div>
    <div id="connection-panel" className="connection-panel" aria-live="polite"><div className="connection-content" key={topic.id}><p className="eyebrow">{topic.label}</p><h3>{topic.question}</h3><ul className="method-tags" aria-label="Connected methods and technologies">{topic.methods.map(method=><li key={method}>{method}</li>)}</ul><div className="connection-links">{topic.links.map(link=><article key={link.name}><Link href={link.href}>{link.name} ↗</Link><p>{link.relationship}</p>{link.evidence&&<a className="evidence-inline" href={link.evidence}>Inspect supporting source ↗</a>}</article>)}</div></div></div></div>
    <details className="map-alternative"><summary>Read every connection as a list</summary>{connections.map(item=><article key={item.id}><h3>{item.label}</h3><p>{item.question}</p><p className="method-note">{item.methods.join(" · ")}</p><ul>{item.links.map(link=><li key={link.name}><Link href={link.href}>{link.name}</Link> — {link.relationship} {link.evidence&&<a href={link.evidence}>Supporting source ↗</a>}</li>)}</ul></article>)}</details>
  </div></section>;
}
