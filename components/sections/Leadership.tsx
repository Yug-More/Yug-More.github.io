import { Section } from "@/components/layout/Section";

export function Leadership() {
  return (
    <Section
      id="leadership"
      eyebrow="Leadership & Teaching"
      title="Teaching is a long thread, not a side role."
      intro="I started as an undergraduate teaching assistant in January 2024 and have stayed in the department since. In 2026 I was promoted to Head Computer Science Tutor."
    >
      <div className="lead-grid">
        <article className="lead-card primary">
          <p className="promo">Promoted · August 2026</p>
          <h3>Head Computer Science Tutor</h3>
          <p className="dates">SJSU Computer Science Study Lab · August 2026 – Present</p>
          <p>
            Promoted from Computer Science Tutor after one semester in the lab.
            I mentor tutors, help coordinate lab operations, and still sit with
            students on programming, object-oriented design, data structures,
            algorithms, and machine learning coursework when it comes up.
          </p>
          <ul>
            <li>Debugging code that fails for a reason the error message does not name.</li>
            <li>Walking through time and space complexity without turning it into a formula to memorize.</li>
            <li>Pushing on edge cases until the student can see the bug before I point at it.</li>
          </ul>
        </article>

        <div className="teach-grid">
          <article>
            <h3>Computer Science Tutor</h3>
            <p className="dates">CSSL · January 2026 – May 2026</p>
            <p>
              Individual help on algorithms, object-oriented programming, Python,
              Java, databases, and machine learning. The job was to compare
              approaches with the student and leave them able to finish the next
              problem alone.
            </p>
          </article>
          <article>
            <h3>Teaching Assistant · CS 22A</h3>
            <p className="dates">Python programming · January 2024 – Present · six semesters</p>
            <p>
              Supported introductory Python across six semesters, including
              debugging, file handling, data analysis, and small projects.
              Mentoring in this course has reached more than 800 students.
              Grading has been a large part of the work every term.
            </p>
          </article>
          <article>
            <h3>Teaching Assistant · CS 46A</h3>
            <p className="dates">Java · August 2025 – December 2025</p>
            <p>
              About 80 students. Classes, inheritance, polymorphism, data
              structures, and the usual confusion between a design problem and a
              syntax problem.
            </p>
          </article>
          <article>
            <h3>Teaching Assistant · CS 171</h3>
            <p className="dates">Machine learning · Spring 2026</p>
            <p>
              About 80 students. Regression, trees, ensembles, nearest neighbors,
              SVMs, neural nets, clustering, and how to tell whether a model
              result means anything.
            </p>
          </article>
        </div>

        <div className="split later">
          <div className="aside-list">
            <article>
              <h3>AI Lead · AI &amp; Machine Learning Club</h3>
              <p className="dates">San José State University · January 2026 – Present</p>
              <p>
                Workshops on machine learning and generative AI, and project
                mentorship from an experiment through to something that can be
                shown.
              </p>
            </article>
            <article>
              <h3>Technology Lead · Computer Science Club (ACM)</h3>
              <p className="dates">San José State University · October 2025 – Present</p>
              <p>
                Technical workshops across software engineering, full-stack
                development, and AI, including React and Docker as tools people
                can run, not as a topic list.
              </p>
            </article>
          </div>
          <div className="aside-list">
            <article>
              <h3>Lead Organizer · Cyber Hacks 2025</h3>
              <p className="dates">San José State University · December 2025</p>
              <p>
                Raised $1,500 from the Computer Science department and ran a
                cybersecurity hackathon for nearly 80 students. Challenges covered
                systems security, memory protection, secure coding, input
                validation, and cryptography.
              </p>
            </article>
            <article>
              <h3>Resident Advisor</h3>
              <p className="dates">University Housing Services · July 2024 – May 2026</p>
              <p>
                Supported a residential community of more than 1,000 students:
                conflict, incidents, and policy, plus more than 25 community
                programs each semester.
              </p>
            </article>
          </div>
        </div>
      </div>
    </Section>
  );
}
