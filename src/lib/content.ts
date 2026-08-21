export const NAV_LINKS = [
  { label: "Work", href: "#selected-work" },
  { label: "Engineering", href: "#engineering" },
  { label: "Writing", href: "#writing" },
  { label: "About", href: "#about" },
] as const;

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  index: string;
  name: string;
  description: string;
  links: ProjectLink[];
};

export const PROJECTS: Project[] = [
  {
    index: "01",
    name: "Ship-or-Skip",
    description:
      "An AI-assisted decision engine that turns a feature idea into a structured Ship, Refine, or Skip call.",
    links: [
      { label: "Live", href: "https://shiporskipbuild.vercel.app/" },
      { label: "Code", href: "https://github.com/joshuaearlsultan/ship-or-skip" },
    ],
  },
  {
    index: "02",
    name: "Pulse",
    description:
      "A discipleship tracker for church leaders, turning participation and follow-up into something they can actually see.",
    links: [],
  },
  {
    index: "03",
    name: "Compass",
    description:
      "A tool for leadership continuity, built around direction, continuity, and care as teams and seasons change.",
    links: [],
  },
];

export type EngineeringCategory = {
  title: string;
  items: string[];
};

export const ENGINEERING_CATEGORIES: EngineeringCategory[] = [
  {
    title: "Mobile",
    items: ["iOS", "Android", "React Native", "Flutter"],
  },
  {
    title: "SDKs & Security",
    items: ["Mobile SDKs", "Authentication", "FIDO2", "Passkeys", "UMFA"],
  },
  {
    title: "Engineering",
    items: ["Architecture", "CI/CD", "Reliability", "Modernization"],
  },
  {
    title: "Product",
    items: ["Problem solving", "UX", "Product thinking", "End-to-end development"],
  },
];

export type WritingSample = {
  title: string;
  description: string;
};

// Placeholder titles standing in for real published articles.
export const WRITING_SAMPLES: WritingSample[] = [
  {
    title: "Why the simplest fix is usually the right one",
    description: "On resisting the urge to over-engineer a solution to a small problem.",
  },
  {
    title: "What fourteen years of mobile taught me about product thinking",
    description: "Lessons from shipping and maintaining software long past launch day.",
  },
  {
    title: "Shipping less, and why that's the point",
    description: "A case for narrower scope as a way of moving faster, not slower.",
  },
];

export const CONNECT_LINKS = [
  { label: "Email", href: "mailto:joshuaearlsultan@gmail.com" },
  { label: "GitHub", href: "https://github.com/joshuaearlsultan" },
] as const;
