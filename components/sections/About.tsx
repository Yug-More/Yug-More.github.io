import { Section } from "@/components/layout/Section";

const interests = [
  "Software engineering",
  "Artificial intelligence and machine learning",
  "Full-stack product development",
  "Technical teaching and mentorship",
  "Software reliability and evaluation",
];

export function About() {
  return (
    <Section
      id="about-detail"
      eyebrow="About"
      title="About"
      intro="I study computer science at San José State University, with graduation expected in May 2027."
    >
      <div className="about-grid">
        <div className="prose">
          <p>My projects include a collaborative AI workspace, a workplace-safety prototype and experimental studies of agent memory and financial forecasting.</p>
          <p>I have worked in manufacturing IT and data analytics, and teach programming and machine learning as an undergraduate teaching assistant and Head CS Tutor.</p>
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
