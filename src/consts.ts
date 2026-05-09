export const SITE = {
  name: "Arun Setty Kodavali",
  shortName: "Arun Setty",
  initials: "A·S·K",
  title: "Arun Setty Kodavali | Storyteller, tinkerer, engineer",
  description: "A·S·K — Arun Setty Kodavali. Storyteller, tinkerer, thinker, engineer. Human with the excellence reflex. Building Broken (no-code). Writing daily at Ephemeral Thoughts. Logging everything I read and watch.",
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
  blurb: "Films, shows, anime, books, games — episode-level when something hits, with what I was thinking at the time.",
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
    company: "Broken",
    url: "https://brokenatom.io",
    time: "Jun 2022 - Present",
    position: "Software Developer",
    points: [
      "Been involved in the development of main product for the company.",
      "Developed a no-code system which can successfully create a structural application from scratch given the specifications from the user.",
    ],
  },
  {
    company: "Foxsense Innovations",
    url: "https://www.foxsense.io",
    time: "Jan - Apr 2022",
    position: "Software Developer",
    points: [
      "Designed and Developed a service which accurately determines the Application Health analysing each of the APIs and their dependencies.",
      "Integrated the service with the existing monitoring system to provide a holistic view of the application health.",
      "Designed a fully integratable user system for the service which can be used by other services to provide a unified user experience.",
      "Developed a notification system which can be used by other services to notify the user about any changes in the application health.",
    ],
  },
  {
    company: "Hotstar",
    url: "https://www.hotstar.com/in",
    time: "May - Jul 2021",
    position: "Software Developer",
    points: [
      "Designed and developed a service which handles the whole spectrum of activities from dawn of a project through its entire lifecycle using GoCD pipelines.",
      "Integrated various github APIs ranging from generating a repo to setting up checks for its content with the aforementioned service to build a state maintained system for tracking all the changes in the organisation.",
      "Designed the service to be OpenAPI compliant so that it could be transitioned into a CLI tool.",
    ],
  },
  {
    company: "Inscripta",
    url: "https://inscripta.ai",
    time: "Nov 2020 - Jan 2021",
    position: "AI Developer",
    points: [
      "Created an API which collects details from a conversation and searches for most suitable product in scraped data from a wide range of articles gathered from various sources.",
    ],
  },
  {
    company: "Oficio Cloud Software",
    url: "https://talkingmart.com",
    time: "May - Jul 2020",
    position: "AI Developer",
    points: [
      "Developed APIs that enable creation and management of events in Google Calendar.",
      "Integrated the aforementioned APIs with an AI powered conversational bot using RASA system.",
      "Interpreted the data models and designed the bot with ability to handle various conversations and reply in given context by gathering sufficient information from the ongoing discussion.",
    ],
  },
  {
    company: "The Right Doctors",
    url: "https://therightdoctors.com",
    time: "Dec 2019 - Jan 2020",
    position: "MEAN Stack Developer",
    points: [
      "Implemented a pipeline for automated continuous integration and continuous deployment for a web application built on MEAN Stack using CIRCLE CI and bitbucket integration in GCP.",
      "Wrote testcases for testing functionality and UI of the web application using Protractor and Jasmine.",
      "Built and developed Auto Draft Saving System and Payment Integration for web application.",
      "Developed a custom mailer for sending mails automatically during a period of time with a chosen frequency.",
    ],
  },
  {
    company: "MyTutor 247",
    url: "https://www.mytutor247.in/",
    time: "Jul - Nov 2019",
    position: "Mentor",
    points: [
      "Mentored a group of 83 students preparing for JEE through the platform.",
      "Created a suitable time table for each student on daily basis to excel in their preparation.",
      "Taught and cleared the doubts in various topics for all the students during the period.",
    ],
  },
  {
    company: "Dubbtr",
    url: "https://in.linkedin.com/company/dubbtr-edu",
    time: "Nov 2018 - May 2019",
    position: "Mentor",
    points: [
      "Managed critical project impacting thousands of students, demonstrating strong project management skills.",
      "Recognized for creativity, independent thinking, and a passion for learning, showcasing a strong inclination towards innovation.",
      "Highly valued team member with excellent interpersonal skills, indicating effective collaboration and teamwork abilities.",
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
      "Platform for creating forms and surveys with built-in analytics — graphs and charts over MySQL — and granular sharing controls (public, organization, or specific users).",
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
      "Internal interpreter for Racket using the environment model of execution — frames, pointers, and lexical scope from scratch.",
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
