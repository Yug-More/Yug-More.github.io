"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion } from "@/lib/motion";

export function MotionSystem() {
  const pathname = usePathname();
  const progress = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    const reduced = () => preference.matches || document.documentElement.dataset.motion === "reduced";
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        if (reduced()) continue;
        const element = entry.target as HTMLElement;
        const index = Array.from(element.parentElement?.children ?? []).indexOf(element);
        const animation = element.animate([
          { opacity: .65, transform: `translateY(${motion.distance}px)` },
          { opacity: 1, transform: "translateY(0)" },
        ], { duration: motion.reveal, delay: Math.min(index, 3) * motion.stagger, easing: motion.ease });
        animations.add(animation);
        animation.finished.then(() => animations.delete(animation)).catch(() => {});
      }
    }, { threshold: .08 });
    document.querySelectorAll(".section-head, .work-item, .research-grid article, .case-section, .lead-card, .milestone, .case-header").forEach(element => observer.observe(element));
    const stop = () => { if (reduced()) animations.forEach(animation => animation.cancel()); };
    preference.addEventListener("change", stop);
    window.addEventListener("portfolio-motion-change", stop);
    let frame = 0;
    const update = () => {
      frame = 0;
      const range = document.documentElement.scrollHeight - innerHeight;
      if (progress.current) progress.current.style.transform = `scaleX(${range > 0 ? scrollY / range : 0})`;
      document.querySelectorAll<HTMLElement>(".journey").forEach(element => {
        const rect = element.getBoundingClientRect();
        const amount = Math.max(0, Math.min(1, (innerHeight * .65 - rect.top) / rect.height));
        element.style.setProperty("--journey-progress", String(amount));
      });
    };
    const scroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    const resizeObserver = new ResizeObserver(scroll);
    const main = document.querySelector("main");
    if (main) resizeObserver.observe(main);
    update();
    addEventListener("scroll", scroll, { passive: true });
    addEventListener("resize", scroll);
    return () => { resizeObserver.disconnect(); observer.disconnect(); animations.forEach(animation => animation.cancel()); cancelAnimationFrame(frame); removeEventListener("scroll", scroll); removeEventListener("resize", scroll); preference.removeEventListener("change", stop); window.removeEventListener("portfolio-motion-change", stop); };
  }, [pathname]);
  return <div className="reading-progress" ref={progress} aria-hidden="true" />;
}
