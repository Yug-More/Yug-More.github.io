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
          <p className="intro">
            I study computer science at San José State University. I build software for team collaboration and workplace safety, and study AI-agent memory security and machine-learning evaluation.
          </p>
          <div className="actions">
            <a className="button button-primary" href="#projects">
              Projects
            </a>
            <a className="button button-secondary" href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <Link className="text-link resume-link" href="/resume/">Résumé</Link><a className="text-link resume-link" href="#contact">Contact</a>
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
