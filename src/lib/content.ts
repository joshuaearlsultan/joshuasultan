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
    name: "Ship or Skip",
    description:
      "An AI-assisted decision engine for product teams. It evaluates feature ideas, product changes, and strategic concepts through a structured framework, combining AI-generated reasoning with deterministic scoring to produce a Ship, Refine, or Skip verdict.",
    links: [
      { label: "Live", href: "https://shiporskipbuild.vercel.app/" },
      {
        label: "Code",
        href: "https://github.com/joshuaearlsultan/ship-or-skip",
      },
    ],
  },
  {
    index: "02",
    name: "Pulse",
    description:
      "A leadership platform helping churches understand and care for their people. Built around discipleship visibility, member records, dashboards, and follow-up, giving church leaders a clearer view of where people are and where care may be needed.",
    links: [],
  },
  {
    index: "03",
    name: "Compass",
    description:
      "A leadership platform for preserving direction, continuity, and care across ministries and changing seasons. A shared place for plans, activities, updates, meetings, decisions, and follow-through—helping important ministry context remain available when leaders change.",
    links: [],
  },
];

export const ENGINEERING_INTRO = [
  "I've spent more than a decade building mobile software across iOS, Android, React Native, and Flutter. My work has grown beyond application development into SDKs, authentication and security, architecture, CI/CD, reliability, and product thinking.",
  "Today, mobile remains my professional foundation. Alongside it, I'm exploring product engineering and applied AI through the things I build and experiment with on my own.",
] as const;

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
    items: [
      "Problem solving",
      "UX",
      "Product thinking",
      "End-to-end development",
    ],
  },
];

export type WritingSample = {
  title: string;
  description: string;
  href: string;
};

export const WRITING_SAMPLES: WritingSample[] = [
  {
    title: "Building Ship or Skip",
    description:
      "What creating an AI-assisted product validation tool taught me about building in the age of AI.",
    href: "https://thesimpleengineer.substack.com/p/building-ship-or-skip",
  },
  {
    title: "Simplicity Is Not a Shortcut (It’s a Responsibility)",
    description: "Why simple solutions age better than complex ones.",
    href: "https://thesimpleengineer.substack.com/p/simplicity-is-not-a-shortcut-its",
  },
  {
    title: "What 13 Years of Mobile Taught Me About Staying Relevant",
    description: "Lessons on adapting, learning, and growing through change.",
    href: "https://thesimpleengineer.substack.com/p/what-13-years-of-mobile-taught-me",
  },
];

export const CONNECT_LINKS = [
  { label: "Email", href: "mailto:joshuaearlsultan@gmail.com" },
  { label: "GitHub", href: "https://github.com/joshuaearlsultan" },
] as const;
