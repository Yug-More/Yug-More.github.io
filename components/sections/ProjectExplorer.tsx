"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const previews: Record<string,{role:string;result:string;status:string}> = {
 parallel:{role:"Original frontend lead; product and demonstration contributions.",result:"40-query author-curated holdout: 0.900 macro recall@5 and 0.818 MRR.",status:"Collaborative workspace · bounded local agents"},
 memoryfence:{role:"Independent experimental research on agent memory and authorization.",result:"At nominal LF0.5, six of six attack descendants survived recorded-cascade deletion across three generated chains.",status:"Independent study · not peer reviewed"},
 marketpulse:{role:"Course project subsequently expanded into a retrospective empirical study; contributor boundaries are documented in the case study.",result:"355,320 saved forecasts across 282 folds; no ML gain survived the expanded multiple-comparison correction.",status:"Retrospective research study"},
 safetylens:{role:"Backend, video ingestion, policy retrieval, approvals and shared frontend integration in a three-person team.",result:"Demonstrable evidence-to-review workflow with policy citations, simulated actions and an audit report.",status:"Hackathon prototype · simulated external actions"},
};
type Work = {slug:string; name:string; category:string; summary:string; image:string; stack:string};
export function ProjectExplorer({ work }: {work: Work[]}) {
  const [filter,setFilter] = useState("All work");
  const visible = work.filter(p=>filter === "All work" || (filter === "Research" ? ["memoryfence","marketpulse"].includes(p.slug) : ["parallel","safetylens"].includes(p.slug)));
  return <><div className="project-filters" role="group" aria-label="Filter selected projects">{["All work","Intelligent systems","Research"].map(label=><button type="button" key={label} aria-pressed={filter===label} onClick={()=>setFilter(label)}>{label}</button>)}</div><p className="sr-only" role="status">Showing {visible.length} projects</p>
    <div className="work-list" key={filter}>{visible.map((project,index)=><article className="work-item" key={project.slug} style={{animationDelay:`${index*45}ms`}}>
      <Link className="work-visual" href={`/projects/${project.slug}/`} aria-label={`Read the ${project.name} case study`}><Image src={project.image} alt={project.slug === "safetylens" ? "SafetyLens explanatory architecture diagram" : `${project.name} — original ${project.slug === "parallel" ? "application capture with synthetic records" : "research figure"}`} width={800} height={500} sizes="(max-width: 640px) 95vw, 540px" unoptimized /></Link>
      <div className="work-copy"><span className="work-number">{project.category}</span><h3>{project.name}</h3><p>{project.summary}</p><p className="project-status">{previews[project.slug].status}</p><dl className="project-proof"><dt>My contribution</dt><dd>{previews[project.slug].role}</dd><dt>Evidence-backed result</dt><dd>{previews[project.slug].result}</dd></dl><Link className="text-link" href={`/projects/${project.slug}/`}>Read the case study ↗</Link></div>
    </article>)}</div></>;
}
