import { Section } from "@/components/layout/Section";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Products with a user, a constraint, and a deadline."
      intro="SafetyLens is the project I want people to look at first. Parallel is the collaboration product that has followed me through more than one AI competition."
    >
      <div className="projects">
        <article className="feature flagship">
          <p className="feature-kicker">Flagship · Executable World</p>
          <h3 className="feature-title">SafetyLens</h3>
          <p className="lede">
            A workplace safety system for factories, warehouses, and similar
            floors. Cameras already record what happens. SafetyLens is built to
            notice a possible incident, keep the evidence, pull the relevant
            procedure, and stop before any response runs without a person.
          </p>
          <ul className="badges" aria-label="SafetyLens highlights">
            <li className="badge badge-solid">1st Place</li>
            <li className="badge badge-solid">$25K Prize</li>
            <li className="badge">AI</li>
            <li className="badge">Computer Vision</li>
            <li className="badge">Full Stack</li>
          </ul>
          <div className="feature-layout">
            <div className="copy">
              <h4>The problem</h4>
              <p>
                After something goes wrong, someone still has to find the right
                camera, the right clip, and the right safety procedure, then
                coordinate people who are not in the same tool. That delay is
                the product.
              </p>
              <h4>What we built</h4>
              <p>
                A lightweight local detector watches posture with MediaPipe and
                can flag a sustained person-down event. Deeper multimodal
                analysis runs on the evidence, not on every frame.                 Incidents
                carry location, confidence, and severity. The operator gets the
                matching SOP, reviews a cited plan, and approves or rejects each
                action. In the hackathon demo, approved alerts and tickets are
                labeled as simulations. A separate PPE review workflow reviews
                footage on demand.
              </p>
              <p>
                The backend is FastAPI, SQLAlchemy, and SQLite. The dashboard is
                Next.js, React, and TypeScript. OpenCV handles video, and the app
                and API can run with Docker. Thirty-five backend pytest tests
                passed, and the frontend was checked with lint, types, and a
                production build.
              </p>
              <p>
                Team: Yug More, Abhinav GS, and Sean Aminov. First place among
                about 384 participants at The Executable World, with a $25,000
                prize.
              </p>
              <a
                className="text-link"
                href="https://github.com/Yug-More/SafetyLens"
                target="_blank"
                rel="noreferrer"
              >
                View SafetyLens on GitHub
              </a>
            </div>
            <aside className="meta-card">
              <p className="label">Result</p>
              <p className="value">1st place · $25,000 · ~384 participants</p>
              <p className="label">Team</p>
              <p className="value">Yug More, Abhinav GS, Sean Aminov</p>
              <p className="label">Stack</p>
              <p className="value">
                Next.js, React, TypeScript, FastAPI, SQLAlchemy, SQLite,
                MediaPipe, OpenCV, Docker
              </p>
            </aside>
          </div>
        </article>

        <article className="feature">
          <p className="feature-kicker">Featured · Scoop AI, Berkeley</p>
          <h3 className="feature-title">Parallel</h3>
          <p className="lede">
            A shared workspace where each person has an AI agent in the same
            room as the team. Agents see the conversation, tasks can be created
            from that context, and the product has been taken into several AI
            competitions.
          </p>
          <ul className="badges" aria-label="Parallel highlights">
            <li className="badge badge-solid">Top 20 Finalist</li>
            <li className="badge">AI</li>
            <li className="badge">Full Stack</li>
          </ul>
          <div className="feature-layout">
            <div className="copy">
              <h4>My role</h4>
              <p className="role-note">
                I primarily led the frontend. I also contributed to backend
                ideas, product decisions, and the presentation and demo.
              </p>
              <h4>The product</h4>
              <p>
                Parallel pairs teammates with dedicated agents inside shared
                rooms, with task tracking and live updates. The repository also
                includes memory with embeddings, Composio connections to tools
                such as Google Docs and Drive, and a voice path using Pipecat,
                Gemini Live, Plivo, and Whisper. My main work on the project was
                the interface, along with product decisions and the demo.
              </p>
              <p>
                At the Scoop AI Hackathon in Berkeley, the team reached the top
                20 from about 65 teams. The team was Yug More, Sean Aminov,
                Severin Spagnola, and Nayab Hossain. Parallel has also been
                recognized at the Google DeepMind Continual Learning Hackathon
                and at TRAE Friends in Silicon Valley. Those are listed under
                Achievements.
              </p>
              <a
                className="text-link"
                href="https://github.com/Yug-More/Parallel-AI"
                target="_blank"
                rel="noreferrer"
              >
                View Parallel on GitHub
              </a>
            </div>
            <aside className="meta-card">
              <p className="label">Scoop AI</p>
              <p className="value">Top 20 finalist · about 65 teams</p>
              <p className="label">Team</p>
              <p className="value">Yug More, Sean Aminov, Severin Spagnola, Nayab Hossain</p>
              <p className="label">Stack</p>
              <p className="value">React, FastAPI, PostgreSQL, SQLAlchemy, Docker, Python</p>
            </aside>
          </div>
        </article>

        <div className="project-grid">
          <article className="project-card">
            <p className="status">Course project · 2026</p>
            <h3>FlowChain</h3>
            <p>
              A food redistribution app connecting donor organizations with
              recipient centers. Donation listings, discovery, claims, session
              login, and separate donor and recipient roles. Java, JSP, JSTL,
              MySQL, Maven, and Apache Tomcat.
            </p>
            <ul className="chips" aria-label="FlowChain technologies">
              {["Java", "JSP", "MySQL", "Tomcat"].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="project-card">
            <p className="status">Hackathon · SJSU × IBM</p>
            <h3>AdvisrAI</h3>
            <p>
              An academic advising assistant that recommends courses from a
              student’s situation. Built with IBM watsonx Orchestrate. Second
              place at the SJSU × IBM Hackathon, as one of 63 selected
              participants from more than 700 applicants.
            </p>
            <a
              className="text-link"
              href="https://github.com/Yug-More/AdvisrAI-IBMWatson-Orchestrate"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
          </article>

          <article className="project-card">
            <p className="status">Built independently</p>
            <h3>Orch</h3>
            <p>
              A multi-agent workspace for planning work, routing models and
              tools, and keeping shared memory across a run. Selected as a
              finalist at the MCP Apps Hackathon at Y Combinator.
            </p>
            <a
              className="text-link"
              href="https://github.com/Yug-More/orch"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
          </article>

          <article className="project-card">
            <p className="status">In progress</p>
            <h3>SnapSearch</h3>
            <p>
              A personal search idea for notes, bookmarks, and PDFs: private
              where it can be, able to take in more than one source, and
              rankable by the person searching. This is a direction, not a
              finished product. A likely stack is React, TypeScript, FastAPI,
              PostgreSQL, and vector search. None of that is claimed as shipped.
            </p>
          </article>
        </div>
      </div>
    </Section>
  );
}
