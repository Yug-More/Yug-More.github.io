"use client";
import { contributions } from "@/lib/contributions";
import Image from "next/image";
import Link from "next/link";
const previews: Record<string,{result:string;status:string}> = {
 parallel:{result:"40-query author-curated holdout: 0.900 macro recall@5 and 0.818 MRR.",status:"Collaborative workspace · bounded local agents"},
 memoryfence:{result:"At nominal LF0.5, six of six attack descendants survived recorded-cascade deletion across three generated chains.",status:"Independent study · not peer reviewed"},
 marketpulse:{result:"355,320 saved forecasts across 282 folds; no ML gain survived the expanded multiple-comparison correction.",status:"Retrospective research study"},
 safetylens:{result:"Demonstrable evidence-to-review workflow with policy citations, simulated actions and an audit report.",status:"Hackathon prototype · simulated external actions"},
};
type Work = {slug:string; name:string; category:string; summary:string; image:string; stack:string};
export function ProjectExplorer({ work }: {work: Work[]}) {
  return <>
    <div className="work-list">{work.map((project,index)=><article className="work-item" key={project.slug} style={{animationDelay:`${index*45}ms`}}>
      <Link className="work-visual" href={`/projects/${project.slug}/`} aria-label={`Read the ${project.name} case study`}><Image src={project.image} alt={project.slug === "safetylens" ? "SafetyLens explanatory architecture diagram" : `${project.name} — original ${project.slug === "parallel" ? "application capture with synthetic records" : "research figure"}`} width={800} height={500} sizes="(max-width: 640px) 95vw, 540px" unoptimized /></Link>
      <div className="work-copy"><span className="work-number">{project.category}</span><h3>{project.name}</h3><p>{project.summary}</p><p className="project-status">{previews[project.slug].status}</p><dl className="project-proof"><dt>My contribution</dt><dd>{contributions[project.slug].summary}</dd><dt>Result</dt><dd>{previews[project.slug].result}</dd></dl><Link className="text-link" href={`/projects/${project.slug}/`}>Project details</Link>{project.slug === "parallel" && <Link className="text-link pitch-card-link" href="/projects/parallel/#application-pitch">Watch the YC application pitch</Link>}</div>
    </article>)}</div></>;
}
