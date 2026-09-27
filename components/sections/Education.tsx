import { Section } from "@/components/layout/Section";
import { site } from "@/lib/site";

const study = [
  "Software engineering",
  "Artificial intelligence and machine learning",
  "Algorithms and data structures",
  "Computer architecture and systems",
  "Databases and full-stack development",
];

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="San José State University"
    >
      <article className="edu-card">
        <div>
          <h3>{site.degree}</h3>
          <p>{site.school}</p>
          <p className="honors">
            President’s Scholar, Dean’s Scholar, and the Green Star Award.
          </p>
        </div>
        <div>
          <p>{site.graduation}</p>
          <p>{site.location}</p>
        </div>
      </article>
      <ul className="chips areas" aria-label="Areas of study">
        {study.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Section>
  );
}
