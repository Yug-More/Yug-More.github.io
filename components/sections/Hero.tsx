import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="kicker">Computer Science · {site.school}</p>
          <h1 id="hero-title">{site.name}</h1>
          <p className="roles">Software engineer. Emerging researcher. Technical educator.</p>
          <p className="intro">
            I’m a computer science student building reliable AI agents and intelligent software systems. My work connects source-linked collaboration, human-reviewed workflows and the security of persistent agent memory.
          </p>
          <div className="actions">
            <a className="button button-primary" href="#projects">
              Explore selected work ↗
            </a>
            <a className="button button-secondary" href={site.github} target="_blank" rel="noreferrer">
              View GitHub
            </a>
            <Link className="text-link resume-link" href="/resume/">Résumé ↗</Link><a className="text-link resume-link" href="#contact">Contact ↗</a>
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
    </section>
  );
}
