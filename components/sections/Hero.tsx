import Image from "next/image";
import { highlights, site } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="kicker">Computer Science · {site.school}</p>
          <h1 id="hero-title">{site.name}</h1>
          <p className="roles">Builder, software engineer, and technical educator.</p>
          <p className="intro">
            I build software where AI, engineering, and real problems meet. That has
            meant industrial systems, a first-place hackathon product, and several
            years of teaching computer science.
          </p>
          <div className="actions">
            <a className="button button-primary" href="#projects">
              Explore My Work
            </a>
            <a className="button button-secondary" href={site.github} target="_blank" rel="noreferrer">
              View GitHub
            </a>
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
