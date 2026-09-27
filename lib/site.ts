export const site = {
  name: "Yug More",
  title: "Yug More | Software Engineer & Computer Science Student",
  description:
    "Yug More is a Computer Science student at San José State University building software across AI, full-stack engineering, and real-world systems.",
  email: "yugmore20@gmail.com",
  phoneDisplay: "+1 (813) 817-7538",
  phoneHref: "tel:+18138177538",
  github: "https://github.com/Yug-More",
  linkedin: "https://www.linkedin.com/in/yugmore13",
  location: "San José, California",
  school: "San José State University",
  degree: "Bachelor of Science in Computer Science",
  graduation: "Expected May 2027",
} as const;

export const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#leadership", label: "Leadership & Teaching" },
  { href: "#achievements", label: "Achievements" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

export const highlights = [
  { label: "1st Place", detail: "Executable World" },
  { label: "$25K Prize", detail: "SafetyLens" },
  { label: "Head CS Tutor", detail: "SJSU CSSL" },
  { label: "Industry experience", detail: "Software & IT" },
] as const;
