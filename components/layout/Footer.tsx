import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div>
          <strong>{site.name}</strong>
          <p>Computer Science · {site.location}</p>
          <p>© {new Date().getFullYear()}</p>
        </div>
        <nav className="footer-links" aria-label="Footer">
          <a href={site.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${site.email}`}>Email</a>
        </nav>
      </div>
    </footer>
  );
}
