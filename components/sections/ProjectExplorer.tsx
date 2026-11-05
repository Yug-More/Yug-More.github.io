"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
type Work = {slug:string; name:string; category:string; summary:string; image:string; stack:string};
export function ProjectExplorer({ work }: {work: Work[]}) {
  const [filter,setFilter] = useState("All work");
  const visible = work.filter(p=>filter === "All work" || (filter === "Research" ? ["memoryfence","marketpulse"].includes(p.slug) : ["parallel","safetylens"].includes(p.slug)));
  return <><div className="project-filters" role="group" aria-label="Filter selected projects">{["All work","Intelligent systems","Research"].map(label=><button type="button" key={label} aria-pressed={filter===label} onClick={()=>setFilter(label)}>{label}</button>)}</div><p className="sr-only" role="status">Showing {visible.length} projects</p>
    <div className="work-list">{visible.map(project=><article className="work-item" key={project.slug}>
      <Link className="work-visual" href={`/projects/${project.slug}/`} aria-label={`Read the ${project.name} case study`}><Image src={project.image} alt={project.slug === "safetylens" ? "SafetyLens explanatory architecture diagram" : `${project.name} — original ${project.slug === "parallel" ? "application capture with synthetic records" : "research figure"}`} width={800} height={500} sizes="(max-width: 640px) 95vw, 540px" unoptimized /></Link>
      <div className="work-copy"><span className="work-number">{project.category}</span><h3>{project.name}</h3><p>{project.summary}</p><p className="work-meta">{project.stack}</p><Link className="text-link" href={`/projects/${project.slug}/`}>Read the case study ↗</Link></div>
    </article>)}</div></>;
}
