export const site = {
  name: "Yug More",
  title: "Yug More | Software Engineer & Computer Science Student",
  description:
    "Yug More is a Computer Science student at San José State University building software across AI, full-stack engineering, and real-world systems.",
  email: "yugmore20@gmail.com",
  github: "https://github.com/Yug-More",
  linkedin: "https://www.linkedin.com/in/yugmore13",
  location: "San José, California",
  school: "San José State University",
  degree: "Bachelor of Science in Computer Science",
  graduation: "Expected May 2027",
} as const;

export const nav = [
  { href: "/#projects", label: "Selected work" },
  { href: "/#research", label: "Research" },
  { href: "/#experience", label: "Experience" },
  { href: "/#leadership", label: "Teaching" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;

export const highlights = [
  { label: "Intelligent systems", detail: "Agents, memory & human oversight" },
  { label: "Independent research", detail: "Security & empirical evaluation" },
  { label: "Head CS Tutor", detail: "San José State University" },
  { label: "Enterprise engineering", detail: "Manufacturing & data systems" },
] as const;
