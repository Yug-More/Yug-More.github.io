"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { GithubIcon, LinkedinIcon } from "@/components/layout/Icons";
import { nav, site } from "@/lib/site";

export function Nav() {
  const pathname = usePathname();
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 8);
      const sections = nav.map(item => document.getElementById(item.href.split("#")[1])).filter((item): item is HTMLElement => !!item);
      let current = "";
      for (const section of sections) if (section.getBoundingClientRect().top <= 160) current = section.id;
      setActive(current);
    };
    const scroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", scroll, { passive: true });
    return () => { window.removeEventListener("scroll", scroll); cancelAnimationFrame(frame); };
  }, [pathname]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <div className="nav-inner">
        <Link className="brand" href="/#top" onClick={() => setOpen(false)}>
          {site.name}
        </Link>
        <nav aria-label="Primary">
          <button
            ref={menuButton}
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
                <a href={item.href} aria-current={(pathname.startsWith("/projects/") ? item.href === "/#projects" : active === item.href.split("#")[1]) ? "location" : undefined} onClick={() => setOpen(false)}>
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
