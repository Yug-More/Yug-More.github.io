import { Section } from "@/components/layout/Section";

const secondary = [
  {
    place: "Two tracks",
    title: "Google DeepMind Continual Learning Hackathon",
    detail:
      "Best Use of Composio and Best Voice Agent, using Plivo, for Parallel. February 2026.",
  },
  {
    place: "Grand Prize",
    title: "TRAE Friends @ Silicon Valley",
    detail:
      "$2,000 grand prize for Parallel’s MVP, presented at Plug and Play. December 2025.",
  },
  {
    place: "2nd Place",
    title: "SJSU × IBM Hackathon",
    detail:
      "AdvisrAI, an academic advising assistant on IBM watsonx Orchestrate. One of 63 participants selected from more than 700 applicants.",
  },
  {
    place: "Finalist",
    title: "MCP Apps Hackathon at Y Combinator",
    detail: "Orch, a multi-agent workspace built independently. February 2026.",
  },
  {
    place: "Top 100",
    title: "DevHouse SF",
    detail: "Selected among the Top 100 Builders at DevHouse SF.",
  },
];

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Competitions, named specifically."
      intro="Results from competitions and builder programs, with the project named beside each one."
    >
      <div className="awards">
        <article className="award major">
          <p className="place">1st</p>
          <div>
            <h3>The Executable World</h3>
            <p>
              $25,000 with SafetyLens. First place among about 384 participants.
              September 2026.
            </p>
          </div>
        </article>
        <article className="award major">
          <p className="place">Top 20</p>
          <div>
            <h3>Scoop AI Hackathon · Berkeley</h3>
            <p>Parallel. Top 20 finalist from about 65 teams. November 2025.</p>
          </div>
        </article>
        {secondary.map((item) => (
          <article className="award" key={item.title}>
            <p className="status">{item.place}</p>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
