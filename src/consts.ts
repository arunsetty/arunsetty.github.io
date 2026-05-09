export const SITE = {
  name: "Arun Setty Kodavali",
  shortName: "Arun Setty",
  initials: "A·S·K",
  title: "Arun Setty Kodavali | Storyteller, tinkerer, engineer",
  description: "A·S·K, Arun Setty Kodavali. Storyteller, tinkerer, thinker, engineer. Human with the excellence reflex. Co-founder & CTO at Ur AI. Previously founding engineer at Trupeer and Brokenatom. Writing daily at Ephemeral Thoughts.",
  url: "https://arunsetty.github.io",
  email: "arunsetty1729@gmail.com",
  image: "/img/og.png",
  titles: ["Storyteller", "Tinkerer", "Thinker", "Engineer"],
  motto: "Human with the excellence reflex.",
} as const;

export const SOCIAL = [
  { name: "GitHub", url: "https://github.com/arunsetty", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/arun-setty-kodavali/", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com/a_s_k_af", icon: "twitter" },
  { name: "Instagram", url: "https://instagram.com/a_s_k_af", icon: "instagram" },
  { name: "Email", url: "mailto:arunsetty1729@gmail.com", icon: "email" },
] as const;

export const NAV_LINKS = [
  { name: "Thoughts", href: "/thoughts" },
  { name: "Work", href: "/work" },
  { name: "Log", href: "/log" },
  { name: "Journey", href: "/journey" },
  { name: "About", href: "/about" },
  { name: "Now", href: "/now" },
] as const;

export const THOUGHTS = {
  brand: "Ephemeral Thoughts",
  tagline: "Things I think before I forget.",
  blurb: "Short, often half-formed. Notes I'd rather catch than lose.",
  cadence: "New essay most days.",
} as const;

export const LOG = {
  brand: "Log",
  tagline: "Everything I watch, read, play.",
  blurb: "Films, shows, anime, books, games. Episode-level when something hits, with what I was thinking at the time.",
} as const;

export const NOW_UPDATED = "May 2026";

export const SKILLS = {
  languages: ["JavaScript (ES6)", "TypeScript", "HTML", "CSS", "Python", "SQL", "C", "C++", "Java", "Racket", "Prolog"],
  frameworks: ["Angular", "React", "Next.js", "Tailwind", "NestJS", "Node", "Django", "Vite"],
  tools: ["Bash", "Git & Github", "Postman", "MongoDB", "MySQL", "Postgres", "SQLite", "Docker", "Cloudflare"],
  design: ["Figma"],
} as const;

export const EXPERIENCE = [
  {
    company: "Ur AI",
    url: "https://ur-ai.net",
    time: "Nov 2025 - Present",
    position: "Co-Founder & CTO",
    points: [
      "Building AI products focused on structured workflows: document intelligence, automation, the things knowledge workers actually do.",
      "Owning product, engineering, and system architecture end-to-end as the technical co-founder.",
    ],
  },
  {
    company: "Trupeer",
    url: "https://app.trupeer.ai",
    time: "Jan - Oct 2025",
    position: "Founding Engineer",
    points: [
      "Built core video, documentation, and search systems: transcription pipelines, low-latency retrieval, and AI features (docs, translation, voiceovers, avatars).",
      "Shipped a video-first knowledge system in under two days that generated $150K in revenue within its first week, with instant search and navigation inside videos through a custom low-latency transcription and indexing pipeline.",
      "Won the Salesforce AI Pitchfield with the team in 2025. Salesforce Ventures awarded $100K.",
    ],
  },
  {
    company: "Brokenatom",
    url: "https://brokenatom.io",
    time: "Jun 2022 - Dec 2024",
    position: "Founding Engineer",
    points: [
      "Built a full-stack no-code platform end-to-end in the pre-AI era: UI, backend, data flow, the whole stack from first principles, no AI assistance.",
      "Wrote a custom React parser that turned HTML-like input into React code in the browser, enabling Figma-style visual building that produced real, usable code.",
      "Designed the integration layer for state management, data flow, and backend connections.",
    ],
  },
  {
    company: "Foxsense Innovations",
    url: "https://www.foxsense.io",
    time: "Jan - Apr 2022",
    position: "Software Developer",
    points: [
      "Designed and developed a service to determine application health by analysing each API and its dependencies.",
      "Integrated the service with the existing monitoring system for a holistic view of application health.",
      "Designed a fully integratable user system that could be reused by other services for unified UX.",
      "Built a notification system used by other services to surface application-health changes.",
    ],
  },
  {
    company: "Disney Hotstar",
    url: "https://www.hotstar.com/in",
    time: "May - Jul 2021",
    position: "Software Intern",
    points: [
      "Built an internal tool to automate CI/CD and repo setup, reducing project setup time and enabling one-click secure onboarding for engineering teams.",
    ],
  },
  {
    company: "Inscripta",
    url: "https://inscripta.ai",
    time: "Nov 2020 - Jan 2021",
    position: "AI Developer",
    points: [
      "Built an API that extracted intent from a conversation and matched it against scraped product data sourced from a wide range of articles.",
    ],
  },
  {
    company: "Oficio Cloud Software",
    url: "https://talkingmart.com",
    time: "May - Jul 2020",
    position: "AI Developer",
    points: [
      "Built APIs for creating and managing Google Calendar events.",
      "Integrated those APIs with a RASA-based conversational bot capable of contextual dialogue.",
      "Designed the bot's data model and dialogue flow so it could pick up enough context from the conversation to respond usefully.",
    ],
  },
  {
    company: "The Right Doctors",
    url: "https://therightdoctors.com",
    time: "Dec 2019 - Jan 2020",
    position: "MEAN Stack Developer",
    points: [
      "Implemented a CI/CD pipeline for a MEAN-stack web app using CircleCI and Bitbucket on GCP.",
      "Wrote functional and UI tests using Protractor and Jasmine.",
      "Built an auto-draft saving system and payment integration.",
      "Built a custom mailer for scheduled, recurring emails.",
    ],
  },
  {
    company: "MyTutor 247",
    url: "https://www.mytutor247.in/",
    time: "Jul - Nov 2019",
    position: "Mentor",
    points: [
      "Mentored a group of 83 students preparing for JEE through the platform.",
      "Built a daily study plan tailored to each student's strengths and gaps.",
      "Held doubt sessions across topics throughout the program.",
    ],
  },
  {
    company: "Dubbtr",
    url: "https://in.linkedin.com/company/dubbtr-edu",
    time: "Nov 2018 - May 2019",
    position: "Mentor",
    points: [
      "Managed a critical project impacting thousands of students.",
      "Recognised for creativity, independent thinking, and a bias toward shipping.",
      "Worked closely with a small team to keep the program running smoothly.",
    ],
  },
] as const;

export const COLLEGE_PROJECTS = [
  {
    name: "Movie Recommendation System",
    description:
      "Web application that recommends movies based on user ratings, with a buddy system for sharing recommendations between friends.",
    tags: ["AngularJS", "Node.js", "JavaScript"],
  },
  {
    name: "Online Forms & Surveys",
    description:
      "Platform for creating forms and surveys with built-in analytics, graphs and charts over MySQL, and granular sharing controls (public, organization, or specific users).",
    tags: ["Django", "JavaScript", "MySQL"],
  },
  {
    name: "Grammar Correction Tool",
    description:
      "Offline grammar correction and word-prediction tool over a 250k+ word corpus, using an optimised Decision Tree algorithm and a Racket GUI.",
    tags: ["Racket", "Decision Trees", "NLP"],
  },
  {
    name: "Basic Machine Learning",
    description:
      "Decision-tree predictor in Racket using entropy reduction as the splitting criterion, with custom abstract data structures for the tree.",
    tags: ["Racket", "Decision Trees"],
  },
  {
    name: "Racket Interpreter",
    description:
      "Internal interpreter for Racket using the environment model of execution: frames, pointers, and lexical scope from scratch.",
    tags: ["Racket", "Interpreters"],
  },
  {
    name: "Cryptanalysis & Decryption",
    description:
      "Decrypted mono-alphabetic substitution ciphers using ETAOIN frequency analysis and common-word heuristics for finding the key.",
    tags: ["Racket", "Prolog", "Heuristics"],
  },
  {
    name: "C-like Language Interpreter",
    description:
      "Compiler/interpreter for a C-like language with AST generation and intermediate-code emission.",
    tags: ["Lex", "Yacc", "Compilers"],
  },
] as const;
