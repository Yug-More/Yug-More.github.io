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
  return <><Nav /><main id="content" className="wrap case">
    <Link className="text-link" href="/#projects">← Selected work</Link>
    <header className="case-header">
      <p className="eyebrow">{project.category}</p>
      <h1>{project.name}</h1><p className="lede">{project.summary}</p>
      <p className="case-facts">{project.stack}</p>
      <a className="text-link" href={`https://github.com/Yug-More/${project.repo}`}>Explore the repository ↗</a>
      <nav className="case-nav" aria-label="Case study"><a href="#overview">Overview</a><a href="#implementation">Implementation</a><a href="#architecture">Architecture</a><a href="#results">Evaluation</a><a href="#limits">Limitations</a><a href="#evidence">Evidence</a></nav>
      <figure className="case-media"><Image src={project.image} alt={`${project.name}: ${project.caption}`} width={1440} height={900} sizes="(max-width: 900px) 95vw, 900px" priority unoptimized /><figcaption>{project.caption}</figcaption></figure>
    </header>
    <section className="case-section" id="overview"><p className="eyebrow">01 / Context</p><h2>The problem & contribution</h2><p>{project.problem}</p><h3>My role & attribution</h3><p>{project.role}</p></section>
    <section className="case-section" id="implementation"><p className="eyebrow">02 / Engineering</p><h2>How the system works</h2>{project.implementation.map(text => <p key={text}>{text}</p>)}</section>
    <section className="case-section" id="architecture"><p className="eyebrow">03 / Architecture</p><h2>Follow the workflow</h2><p>A reading-order map of the implemented system. Open a component to inspect its responsibility. See the linked source architecture for full relationships.</p>{project.slug === "parallel" && <figure className="case-media"><Image src="/images/projects/parallel-architecture.svg" alt="Parallel architecture: React and FastAPI modules share SQL storage with a revalidating worker" width={1000} height={520} unoptimized /><figcaption>Explanatory diagram based on the current modular monolith and worker architecture.</figcaption></figure>}{(project.slug === "parallel" || project.slug === "safetylens" || project.slug === "memoryfence") && <CaseLab project={project.slug} />}<div className="architecture">{project.nodes.map(node => <details key={node.title}><summary>{node.title}</summary><p>{node.description}</p></details>)}</div></section>
    <section className="case-section" id="results"><p className="eyebrow">04 / Evaluation</p><h2>What the evidence supports</h2>{project.results.map(text => <p key={text}>{text}</p>)}{project.slug === "marketpulse" && <ResultsExplorer />}</section>
    {project.slug === "parallel" && <figure className="case-media"><Image src="/images/projects/parallel-approval.png" alt="Parallel’s real owner-approval interface with synthetic task-plan data" width={1440} height={900} sizes="(max-width: 900px) 95vw, 900px" unoptimized /><figcaption>Exact-plan review in the real application. Synthetic walkthrough data; approval precedes native task creation.</figcaption></figure>}
    <section className="case-section" id="limits"><p className="eyebrow">05 / Boundaries</p><h2>Limitations & next questions</h2><ul>{project.limitations.map(text => <li key={text}>{text}</li>)}</ul></section>
    <section className="case-section" id="evidence"><p className="eyebrow">06 / Source record</p><h2>Inspect the evidence</h2><p>Sources inspected November 4, 2026. Links are pinned to repository revision <code>{project.revision.slice(0, 7)}</code>. Reported evaluation outcomes are distinguished from checks rerun for this website.</p><ul className="evidence-list">{project.sources.map(source => <li key={source.path}><a href={sourceUrl(project, source.path)}>{source.label} ↗</a><small>{source.claim}</small></li>)}</ul></section>
    <section className="case-section"><h2>Continue exploring</h2><div className="case-nav">{projects.filter(p => p.slug !== slug).map(p => <Link key={p.slug} href={`/projects/${p.slug}/`}>{p.name} ↗</Link>)}</div></section>
  </main><Footer /></>;
}
