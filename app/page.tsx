import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { TeachingPreview } from "@/components/sections/TeachingPreview";
import { site } from "@/lib/site";
export default function HomePage() {
 return <><Nav/><main id="content"><Hero/><Projects/><Achievements/>
 <section className="section wrap" id="experience" aria-labelledby="experience-title"><p className="eyebrow">Experience</p><h2 id="experience-title">Experience</h2><div className="experience-brief"><article><span>May–August 2026</span><h3>L&amp;L Products</h3><p>IT internship: production-label migration, JavaScript and SQL validation, Oracle collection plans and user acceptance testing.</p></article><article><span>June–August 2025</span><h3>Prabha Engineering</h3><p>Data analytics internship: Python/Pandas reporting workflows, scenario analysis and management dashboards.</p></article></div><a className="text-link" href="/about/#experience-detail">Experience details ↗</a></section>
 <TeachingPreview/>
 <section className="wrap concise-contact" id="contact" aria-labelledby="contact-title"><p className="eyebrow">Contact</p><h2 id="contact-title">Contact</h2><a href={`mailto:${site.email}`}>{site.email}</a></section>
 </main><Footer/></>;
}
