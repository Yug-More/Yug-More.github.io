import { HeroSystem } from "@/components/interactive/HeroSystem";
import Image from "next/image";
import Link from "next/link";
import { highlights, site } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="kicker">Computer Science · {site.school}</p>
          <h1 id="hero-title">{site.name}</h1>
          <p className="roles">Software engineer. Emerging researcher. Technical educator.</p>
          <p className="intro">
            I build intelligent systems and study the boundaries that make them trustworthy—from human-reviewed safety workflows to the security of persistent agent memory.
          </p>
          <div className="actions">
            <a className="button button-primary" href="#projects">
              Explore selected work ↗
            </a>
            <a className="button button-secondary" href={site.github} target="_blank" rel="noreferrer">
              View GitHub
            </a>
            <Link className="text-link resume-link" href="/resume/">Résumé ↗</Link>
          </div>
        </div>
        <figure className="portrait-frame">
          <Image
            src="/images/yug-professional.jpg"
            alt="Professional portrait of Yug More"
            width={1200}
            height={1800}
            priority
            sizes="(max-width: 800px) 85vw, 380px"
            className="portrait"
          />
          <figcaption className="portrait-caption">{site.location}</figcaption>
        </figure>
      </div>
      <HeroSystem />
      <div className="wrap">
        <ul className="facts">
          {highlights.map((item) => (
            <li key={item.label}>
              <strong>{item.label}</strong>
              <span>{item.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
