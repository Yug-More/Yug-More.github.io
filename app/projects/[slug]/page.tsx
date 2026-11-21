import { contributions } from "@/lib/contributions";
import { projectBriefs } from "@/lib/project-briefs";
import { CaseLab } from "@/components/interactive/CaseLab";
import { ResultsExplorer } from "@/components/sections/ResultsExplorer";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { projects, sourceUrl } from "@/lib/projects";

export const dynamicParams = false;
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  const title = `${project?.name ?? "Project"} — Yug More`;
  const image = project?.image.endsWith(".png") ? project.image : "/images/yug-professional.jpg";
  return { title, description: project?.summary, alternates: { canonical: `/projects/${slug}/` },
    openGraph: { title, description: project?.summary, type: "website", url: `/projects/${slug}/`, images: [{url: image, alt: project?.name ?? "Yug More"}] },
    twitter: { card: "summary_large_image", title, description: project?.summary, images: [image] },
  };
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) notFound();
  const brief = projectBriefs[slug];
  const contribution = contributions[slug];
  return <><Nav /><main id="content" className="wrap case">
    <Link className="text-link" href="/#projects">Projects</Link>
    <header className="case-header">
      <p className="eyebrow">{project.category}</p>
      <h1>{project.name}</h1><p className="lede">{project.summary}</p>
      <p className="case-facts">{project.stack}</p>
      <a className="text-link" href={`https://github.com/Yug-More/${project.repo}`}>GitHub</a>
      <nav className="case-nav" aria-label="Case study"><a href="#overview">Overview</a><a href="#results">Evaluation</a><a href="#evidence">Evidence</a></nav>
    {project.slug === "parallel" && <section className="case-section yc-pitch" id="application-pitch" aria-labelledby="pitch-title"><div className="yc-pitch-heading"><span className="yc-mark" aria-label="Y Combinator">Y</span><p className="eyebrow">Y Combinator · application video</p></div><h2 id="pitch-title">Y Combinator — Application Pitch</h2><p>Parallel’s Spring 2026 YC application video, presented by Yug More and Sean Aminov.</p><a className="pitch-preview" href="https://www.youtube.com/watch?v=BCP2kmdBVRU" target="_blank" rel="noreferrer"><Image src="https://i.ytimg.com/vi/BCP2kmdBVRU/hqdefault.jpg" alt="YouTube thumbnail for Parallel’s application video, presented by Yug More and Sean Aminov" width={480} height={360} unoptimized/><span>▶ Watch: Parallel | YC Spring 2026 Application Video</span></a></section>}
      <details className="case-media-reference"><summary>View the original {project.slug === "parallel" ? "product screenshot" : "project visual"}</summary><figure className="case-media"><Image src={project.image} alt={`${project.name}: ${project.caption}`} width={1440} height={900} sizes="(max-width: 900px) 95vw, 900px" unoptimized /><figcaption>{project.caption}</figcaption></figure></details>
    </header>

    {project.slug === "safetylens" && <section className="case-section" id="pitch" aria-labelledby="safety-pitch-title"><p className="eyebrow">Team pitch / public video</p><h2 id="safety-pitch-title">SafetyLens — Pitch Video</h2><p>“Safety Lens Final,” published on Sean Aminov’s YouTube channel. A team presentation of the workplace-safety prototype; the case study below distinguishes implemented features, configured demonstrations and simulated actions.</p><a className="button button-secondary" href="https://www.youtube.com/watch?v=8DRMEeQYebk" target="_blank" rel="noreferrer">▶ Watch the SafetyLens pitch</a></section>}
    <section className="case-section brief-overview" id="overview"><p className="eyebrow">Overview</p><h2>Project overview</h2><p>{project.problem}</p><dl className="case-brief"><dt>My contribution</dt><dd>{contribution.summary}</dd><dt>Technical approach</dt><dd>{brief.approach}</dd></dl><details><summary>Contribution details & team</summary><p>{contribution.detail}</p><ul className="contribution-sources">{contribution.sources.map(source=><li key={source.url}><a href={source.url}>{source.label}</a></li>)}</ul><p className="method-note">Contribution history reviewed November 20, 2026. Study results below retain their named experimental conditions and pinned sources.</p></details></section>
    <section className="case-section brief-result" id="results"><p className="eyebrow">Results</p><h2>{brief.result}</h2><p className="brief-boundary" id="limits">{brief.boundary}</p><details><summary>Evaluation method, complete results & limitations</summary>{project.results.map(text=><p key={text}>{text}</p>)}<ul>{project.limitations.map(text=><li key={text}>{text}</li>)}</ul>{project.slug === "marketpulse" && <ResultsExplorer />}</details></section>
    <details className="case-deep-dive"><summary>Implementation & architecture</summary>
    <section className="case-section" id="implementation"><p className="eyebrow">02 / Engineering</p><h2>How the system works</h2>{project.implementation.map(text => <p key={text}>{text}</p>)}</section>
    <section className="case-section" id="architecture"><p className="eyebrow">03 / Architecture</p><h2>Follow the workflow</h2><p>A reading-order map of the implemented system. Open a component to inspect its responsibility. See the linked source architecture for full relationships.</p>{project.slug === "parallel" && <figure className="case-media"><Image src="/images/projects/parallel-architecture.svg" alt="Parallel architecture: React and FastAPI modules share SQL storage with a revalidating worker" width={1000} height={520} unoptimized /><figcaption>Explanatory diagram based on the current modular monolith and worker architecture.</figcaption></figure>}{(project.slug === "parallel" || project.slug === "safetylens" || project.slug === "memoryfence") && <CaseLab project={project.slug} />}<div className="architecture">{project.nodes.map(node => <details key={node.title}><summary>{node.title}</summary><p>{node.description}</p></details>)}</div></section>
    {project.slug === "parallel" && <figure className="case-media"><Image src="/images/projects/parallel-approval.png" alt="Parallel owner approval with synthetic walkthrough data" width={1440} height={900} unoptimized/><figcaption>Original application capture: exact-plan approval using synthetic demonstration records.</figcaption></figure>}
    </details>
    <section className="case-section" id="evidence"><h2>Sources</h2><p><a className="text-link" href={sourceUrl(project,project.sources[0].path)}>{project.sources[0].label}</a></p><details><summary>All source references & verification notes</summary><p>Sources inspected November 4, 2026. Links are pinned to repository revision <code>{project.revision.slice(0, 7)}</code>. Reported evaluation outcomes are distinguished from checks rerun for this website.</p><ul className="evidence-list">{project.sources.map(source => <li key={source.path}><a href={sourceUrl(project, source.path)}>{source.label}</a><small>{source.claim}</small></li>)}</ul></details></section>
    <section className="case-section"><h2>Other projects</h2><div className="case-nav">{projects.filter(p => p.slug !== slug).map(p => <Link key={p.slug} href={`/projects/${p.slug}/`}>{p.name}</Link>)}</div></section>
  </main><Footer /></>;
}
