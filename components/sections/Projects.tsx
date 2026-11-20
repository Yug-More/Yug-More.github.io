import { Section } from "@/components/layout/Section";
import { ProjectExplorer } from "@/components/sections/ProjectExplorer";
import { projects } from "@/lib/projects";
const order = ["parallel","memoryfence","marketpulse","safetylens"];
export function Projects() {
  const work = order.map(slug=>projects.find(p=>p.slug===slug)!).map(({slug,name,category,summary,image,stack})=>({slug,name,category,summary,image,stack}));
  return <Section id="projects" eyebrow="01 / Selected work" title="Engineering & research" intro="Explore what I built, how it works and what the evidence supports.">
    <ProjectExplorer work={work} />
    <details className="additional-work"><summary>Secondary projects archive</summary><div className="project-grid">
      <article className="project-card"><p className="status">Course team project · In development</p><h3>FindIt</h3><p>React Native lost-and-found application with report browsing, matching and ownership-claim workflows. FastAPI, Supabase and Gemini embeddings; live submissions depend on configured backend services.</p><a className="text-link" href="https://github.com/Yug-More/find-it">Source & implementation status ↗</a></article>
      <article className="project-card"><p className="status">iPhone prototype · Device validation pending</p><h3>PixelSense</h3><p>SwiftUI photo editor for local color and tone adjustments. Typed instructions use deterministic rules. Edit recipes and PhotoKit save-back are implemented; physical-device save validation remains pending.</p><a className="text-link" href="https://github.com/Yug-More/PixelSense">Source & verification boundaries ↗</a></article>
      <article className="project-card"><p className="status">Hackathon prototype</p><h3>AdvisrAI</h3><p>A team-built academic planning assistant using IBM Watson Orchestrate. Built for course recommendation and advising workflows during the SJSU × IBM hackathon.</p><a className="text-link" href="https://github.com/Yug-More/AdvisrAI-IBMWatson-Orchestrate">Project documentation ↗</a></article>
      <article className="project-card"><p className="status">Orchestration experiment</p><h3>Orq / Orch</h3><p>An agent-workspace concept with a TypeScript MCP prototype. The public core implements fixed Planner, Builder and Reviewer steps, heuristic mode selection, templated execution traces and JSON-backed memory search. It does not establish live model orchestration or measured inference costs.</p><a className="text-link" href="https://drive.google.com/file/d/1IqZ9I2jWES_3BfMJYvlDvCESJnpShMEz/view" target="_blank" rel="noreferrer">Watch Orq competition demo ↗</a><a className="text-link" href="https://github.com/Yug-More/orch">Explore the repository ↗</a></article>
    </div></details>
  </Section>;
}
