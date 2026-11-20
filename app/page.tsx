import { ResearchExplorer } from "@/components/interactive/ResearchExplorer";
import { EngineeringTimeline } from "@/components/interactive/EngineeringTimeline";
import { Research } from "@/components/sections/Research";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { About } from "@/components/sections/About";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Leadership } from "@/components/sections/Leadership";
import { Philosophy } from "@/components/sections/Philosophy";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="content">
        <Hero />
        <Projects />
        <Research />
        <details className="portfolio-disclosure"><summary>Explore the connections between projects and research</summary><ResearchExplorer /></details>
        <section className="section wrap" id="experience" aria-labelledby="experience-title"><p className="eyebrow">Experience</p><h2 id="experience-title">Engineering in real operations.</h2><div className="research-grid"><article><h3>L&amp;L Products</h3><p>IT Intern · May–August 2026</p><p>Production-label migration, JavaScript and SQL validation, Oracle collection plans and user acceptance testing.</p></article><article><h3>Prabha Engineering</h3><p>Data Analytics Intern · June–August 2025</p><p>Python and Pandas reporting workflows, scenario analysis and management dashboards.</p></article></div><details><summary>Read the engineering responsibilities</summary><Experience /></details></section>
        <section className="section wrap" id="leadership" aria-labelledby="leadership-title"><p className="eyebrow">Teaching & leadership</p><h2 id="leadership-title">Helping people reason independently.</h2><p className="section-intro">Head CS Tutor at SJSU, with undergraduate teaching roles in Python, Java and machine learning. Technical leadership through the AI/ML Club and ACM, alongside residential mentorship and hackathon organization.</p><details><summary>Explore teaching, mentorship and community roles</summary><Leadership /></details></section>
        <details className="portfolio-disclosure"><summary>Follow the academic and engineering timeline</summary><EngineeringTimeline /></details>
        <Achievements />
        <div id="about"><details className="portfolio-disclosure"><summary>About, education and technical skills</summary><About /><Education /><Skills /><Philosophy /></details></div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
