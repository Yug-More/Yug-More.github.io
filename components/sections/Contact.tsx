import { site } from "@/lib/site";

export function Contact() {
  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <div className="contact">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Let&apos;s build something.</h2>
          <p className="section-intro">
            I&apos;m interested in people working on ambitious problems in
            software, AI, and technology — teams, labs, and founders included.
          </p>
          <div className="contact-links">
            <a className="button button-primary" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className="button button-secondary" href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="button button-secondary" href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="button button-secondary" href={site.phoneHref}>
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
