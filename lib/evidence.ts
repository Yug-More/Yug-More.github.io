import { projects, sourceUrl } from "./projects";
export type EvidenceItem = {
  claimId: string;
  subject: string;
  claim: string;
  source: string;
  verification: "repository-inspected" | "owner-supplied" | "awaiting-confirmation";
  disclosurePermitted: boolean;
  lastVerified: string | null;
};
// Public case-study sources are rendered directly from this same project record.
// A repository-reported test run is not a fresh execution or independent validation.
export const evidence: EvidenceItem[] = [
  ...projects.flatMap(project => project.sources.map((source, index) => ({
    claimId: `${project.slug}-${index + 1}`, subject: project.name, claim: source.claim,
    source: sourceUrl(project, source.path), verification: "repository-inspected" as const,
    disclosurePermitted: true, lastVerified: "2026-11-04",
  }))),
  { claimId: "safetylens-placement", subject: "SafetyLens", claim: "First place at The Executable World, September 2026", source: "https://www.linkedin.com/posts/yugmore13_hackathon-artificialintelligence-computervision-activity-7507927503395717120-ArCc", verification: "owner-supplied", disclosurePermitted: true, lastVerified: "2026-11-04" },
  { claimId: "safetylens-award", subject: "SafetyLens", claim: "First place; $25,000 AWS credits; approximately 384 participants", source: "Owner brief; README describes prize without specifying credits", verification: "awaiting-confirmation", disclosurePermitted: true, lastVerified: null },
  { claimId: "parallel-awards", subject: "Parallel", claim: "Conflicting placement and prize descriptions across portfolio and project history", source: "Parallel/docs/PROJECT_HISTORY.md; original website", verification: "awaiting-confirmation", disclosurePermitted: true, lastVerified: null },
  { claimId: "industry-metrics", subject: "Experience", claim: "200 templates, 176 hours, 38% reporting reduction", source: "Owner brief and original website; no public supporting record", verification: "owner-supplied", disclosurePermitted: false, lastVerified: null },
  { claimId: "teaching-scale", subject: "Teaching", claim: "800+ students and six tutor mentees", source: "Owner brief and original website; no public supporting record", verification: "owner-supplied", disclosurePermitted: true, lastVerified: null },
];
