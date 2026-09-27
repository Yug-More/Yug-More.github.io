import { Section } from "@/components/layout/Section";

const interests = [
  "Software engineering",
  "Artificial intelligence and machine learning",
  "Full-stack product development",
  "Technical teaching and mentorship",
  "Building tools people can actually use",
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineering, teaching, and the habit of shipping."
      intro="I’m a computer science student at San José State University. The work I care about sits between writing software, understanding a product, and helping other people get unstuck."
    >
      <div className="about-grid">
        <div className="prose">
          <p>
            I like environments where engineering, product judgment, and fast
            iteration happen in the same room. That has included IT and
            manufacturing systems, full-stack and AI projects, hackathons, and a
            long stretch of teaching in the computer science department.
          </p>
          <p>
            Longer term, I want to found a technology company. The way there is
            more time building in industry: systems that have users, constraints,
            and consequences.
          </p>
        </div>
        <aside className="interest-panel" aria-label="Interests">
          <h3>Interests</h3>
          <ul>
            {interests.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}
