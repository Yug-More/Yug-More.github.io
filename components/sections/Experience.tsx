import { Section } from "@/components/layout/Section";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Industry work, in real operations."
      intro="Two internships so far: manufacturing technology at L&L Products, and data work at Prabha Engineering."
    >
      <div className="timeline">
        <article className="role">
          <div className="role-meta">
            <p>May 2026 – Aug 2026</p>
            <p>Romeo, Michigan</p>
          </div>
          <div>
            <h3>IT Intern</h3>
            <p className="org">L&amp;L Products</p>
            <ul>
              <li>
                Worked on the production-label migration from Loftware to
                CODESOFT, including 200 templates and JavaScript and SQL for
                barcodes and customer data.
              </li>
              <li>
                Built and tested three collection plans for an Oracle production
                recording system, using SQL validation so quality checks could
                move off paper, then joined production teams for UAT.
              </li>
              <li>
                Worked on a four-stage HubSpot-to-Oracle integration with Airbyte
                and MySQL, covering mappings, cleansing, and validation.
              </li>
              <li>
                Mapped employee, payroll, and tax data for an Oracle-to-Paylocity
                HCM transition and checked the REST APIs in Postman.
              </li>
              <li>Worked through analysis of more than 80,000 transactions.</li>
            </ul>
            <ul className="chips" aria-label="Tools used at L&L Products">
              {[
                "Oracle",
                "Paylocity",
                "HubSpot",
                "Loftware",
                "CODESOFT",
                "Airbyte",
                "SQL",
                "MySQL",
                "JavaScript",
                "Postman",
              ].map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </article>

        <article className="role">
          <div className="role-meta">
            <p>Jun 2025 – Aug 2025</p>
            <p>Pune, India</p>
          </div>
          <div>
            <h3>Data Analytics Intern</h3>
            <p className="org">Prabha Engineering Private Limited</p>
            <ul>
              <li>
                Built a Python and Pandas reporting workflow to clean, aggregate,
                and check monthly financial data, cutting recurring manual
                reporting effort by 38%.
              </li>
              <li>
                Modeled revenue, cost, and profitability scenarios with NumPy and
                scikit-learn for European automotive market-entry questions.
              </li>
              <li>
                Assembled Looker Studio dashboards so leadership could read
                financial, operational, and market numbers in one place.
              </li>
            </ul>
            <ul className="chips" aria-label="Tools used at Prabha Engineering">
              {["Python", "Pandas", "NumPy", "scikit-learn", "Looker Studio"].map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </Section>
  );
}
