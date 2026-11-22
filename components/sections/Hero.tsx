import Image from "next/image";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="kicker">Full-stack engineering · AI systems</p>
          <h1 id="hero-title">{site.name}</h1>
          <p className="hero-position">Full-stack developer.<br />Computer science educator.</p>
          <p className="hero-credentials">Pursuing a B.S. in Computer Science · San José State University<br />Undergraduate Teaching Assistant &amp; Head CS Tutor</p>
          <p className="intro">
            I’m a computer science undergraduate at San José State University, where I serve as an Undergraduate Teaching Assistant and Head CS Tutor. My work spans full-stack development, AI-agent security research and industry experience in enterprise systems and data analytics.
          </p>
          <div className="actions">
            <a className="button button-primary" href="#projects">
              Explore my work
            </a>
            <a className="button button-secondary" href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="text-link resume-link" href="#contact">Contact</a>
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
