"use client";

import { useEffect, useState } from "react";
import { GithubIcon, LinkedinIcon } from "@/components/layout/Icons";
import { nav, site } from "@/lib/site";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <div className="nav-inner">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          {site.name}
        </a>
        <nav aria-label="Primary">
          <button
            className="menu-button"
            type="button"
            aria-expanded={open}
            aria-controls="primary-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              {open ? (
                <path
                  d="M4 4l10 10M14 4L4 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              ) : (
                <path
                  d="M2 5h14M2 9h14M2 13h14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              )}
            </svg>
          </button>
          <ul id="primary-menu" className={`nav-links${open ? " is-open" : ""}`}>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
            <li className="nav-menu-social">
              <a href={site.github} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                GitHub
              </a>
            </li>
            <li className="nav-menu-social">
              <a href={site.linkedin} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
        <div className="nav-social">
          <a className="icon-link" href={site.github} target="_blank" rel="noreferrer">
            <span className="sr-only">GitHub</span>
            <GithubIcon />
          </a>
          <a className="icon-link" href={site.linkedin} target="_blank" rel="noreferrer">
            <span className="sr-only">LinkedIn</span>
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </header>
  );
}
