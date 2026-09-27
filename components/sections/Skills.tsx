import { Section } from "@/components/layout/Section";

const groups = [
  {
    title: "Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "C", "C++", "SQL", "HTML/CSS"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    items: ["FastAPI", "Flask", "REST APIs", "SQLAlchemy", "Node.js"],
  },
  {
    title: "Data & AI",
    items: [
      "Machine learning",
      "Computer vision",
      "MediaPipe",
      "OpenCV",
      "Pandas",
      "NumPy",
      "scikit-learn",
    ],
  },
  {
    title: "Data stores",
    items: ["PostgreSQL", "MySQL", "SQLite", "Oracle"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Docker", "Postman", "Airbyte", "Pytest"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I have actually used."
      intro="Grouped by where they show up in projects, classes, or internships. No proficiency bars."
    >
      <div className="skill-grid">
        {groups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
