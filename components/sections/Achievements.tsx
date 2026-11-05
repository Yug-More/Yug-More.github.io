import { Section } from "@/components/layout/Section";
export function Achievements() {
  return <Section id="achievements" eyebrow="Recognition" title="Academic commitment.">
    <div className="awards"><article className="award major"><p className="place">1st</p><div><h3>SafetyLens · The Executable World</h3><p>September 2026 · Team project with Abhinav GS and Sean Aminov.</p><a className="text-link" href="https://www.linkedin.com/posts/yugmore13_hackathon-artificialintelligence-computervision-activity-7507927503395717120-ArCc">Competition record ↗</a></div></article><article className="award"><p className="status">San José State University</p><h3>President’s Scholar</h3><p>Academic honor.</p></article><article className="award"><p className="status">San José State University</p><h3>Dean’s Scholar</h3><p>Academic honor.</p></article></div>
  </Section>;
}
