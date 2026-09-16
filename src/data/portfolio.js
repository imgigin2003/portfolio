// Centralized portfolio content — edit freely, presentation stays untouched.

export const profile = {
  name: "Negin Parseh",
  firstName: "Negin",
  lastName: "Parseh",
  role: "AI Engineer & Backend Developer",
  roles: ["AI Engineer", "Backend Developer", "ML Engineer"],
  thesis: "I build intelligent systems — and the backend that keeps them honest in production.",
  bio: "AI engineer and backend developer focused on machine learning, LLM engineering, and reliable backend architecture.",
  email: "Negin2003Parseh@gmail.com",
  github: "https://github.com/imgigin2003",
  linkedin: "https://www.linkedin.com/in/negin-parseh",
  signature: "Negin Parseh",
};

export const about = {
  statement:
    "I started out in full-stack development, but I've naturally gravitated toward AI engineering and backend systems. I really enjoy working on the infrastructure that makes smart models actually usable.",
  body: "Most of my time is spent on machine learning, LLMs, and the backend architecture needed to run AI reliably in production. For me, a good system isn't just about high accuracy on a test set—it's about being robust under real conditions and honest about its own limits.",
  interests: [
    "Machine learning",
    "Deep learning",
    "LLM engineering",
    "Backend architecture",
    "API design",
  ],
};

export const projects = [
  {
    id: "affectcare",
    index: "01",
    name: "AffectCare",
    year: "2025",
    status: "Completed",
    subtitle: "Vocal distress detection",
    summary:
      "CNN + LSTM audio classification system for vocal distress detection, using MFCC spectrogram features with evaluation-driven model selection.",
    metrics: [{ value: "88.8%", label: "Recall" }],
    tech: ["PyTorch", "CNN", "LSTM", "MFCC", "Audio Classification"],
    link: "https://affectcare-extended.pages.dev/",
    github: "https://github.com/imgigin2003/AffectCare",
  },
  {
    id: "fraudflux",
    index: "02",
    name: "FraudFlux",
    year: "2025",
    status: "Completed",
    subtitle: "Live fraud scoring",
    summary:
      "Fraud detection pipeline with a live transaction scoring stream, evaluated on 284,807 real transactions under severe class imbalance.",
    metrics: [{ value: "284,807", label: "Transactions evaluated" }],
    tech: ["Python", "scikit-learn", "Machine Learning", "Imbalanced Data"],
    link: "https://github.com/imgigin2003/FraudFlux#-the-problem-with-recall-over-precision-always",
    github: "https://github.com/imgigin2003/FraudFlux",
  },
  {
    id: "lumen",
    index: "03",
    name: "Lumen",
    year: "2025",
    status: "Completed",
    subtitle: "Retreat management dashboard",
    summary:
      "Full-stack dashboard for managing a retreat — bookings, cabins, guests, revenue, and occupancy in a single view.",
    metrics: [],
    tech: ["React", "TypeScript", "Node.js", "REST API", "PostgreSQL"],
    link: "https://lumen-retreat.vercel.app/login",
    github: "https://github.com/imgigin2003/LumenRetreat",
  },
  {
    id: "studysprout",
    index: "04",
    name: "StudySprout",
    year: "2025",
    status: "Completed",
    subtitle: "Knowledge garden",
    summary:
      "A gamified study companion that tracks mastery and streaks, growing a personal knowledge garden as you learn.",
    metrics: [],
    tech: ["React", "TypeScript", "Node.js", "MongoDB"],
    link: "https://studysprout.pages.dev",
    github: "https://github.com/imgigin2003/StudySprout",
  },
  {
    id: "insightgraph",
    index: "05",
    name: "InsightGraph",
    year: "2025",
    status: "Completed",
    subtitle: "Algorithm & graph explorer",
    summary:
      "A full-stack algorithm explorer where you can build graphs interactively and watch 16 algorithms run step-by-step with live pseudocode highlighting.",
    metrics: [],
    tech: ["React", "FastAPI", "NetworkX", "D3", "Zustand", "SQLite"],
    link: "https://insight-graph-alpha.vercel.app/",
    github: "https://github.com/imgigin2003/InsightGraph",
  },
];

export const experience = [
  {
    role: "AI Backend Engineer",
    company: "Daneshboom",
    period: "Aug 2026 — Present",
    type: "Full-time · Remote",
    description: "",
  },
  {
    role: "AI/ML Engineer — Volleyball Serve Analysis",
    company: "SS-Sport",
    period: "Aug 2026 — Present",
    type: "Contract",
    description:
      "Building the vision pipeline for serve analysis — detection, 3D reconstruction, and metric estimation from stereo video.",
  },
  {
    role: "Freelance Backend Developer",
    company: "Independent",
    period: "Jan 2025 — Present",
    type: "Freelance",
    description:
      "Delivering full-stack applications end-to-end — React, TypeScript, Python and Node.js — from requirements through testing and deployment. Built AffectCare, FraudFlux, and supporting production interfaces.",
  },
  {
    role: "Software Engineer",
    company: "Private SaaS Company",
    period: "Sep 2023 — Jan 2025",
    type: "Full-time · Remote",
    description:
      "Remote, end-to-end delivery across React frontends and Python backends under real traffic. Contributed to internal platforms including a hypergraph visualization tool with a Rust performance bridge.",
  },
];

export const skillGroups = [
  {
    name: "AI / ML",
    prominence: "high",
    skills: [
      "Python",
      "PyTorch",
      "scikit-learn",
      "Machine Learning",
      "Deep Learning",
      "CNN",
      "LSTM",
      "Model Evaluation",
    ],
  },
  {
    name: "AI Engineering",
    prominence: "high",
    skills: [
      "LLM APIs",
      "Structured Outputs",
      "Provider Routing",
      "Failover",
      "Retries",
      "Idempotency",
      "AI Backend Architecture",
    ],
  },
  {
    name: "Backend",
    prominence: "high",
    skills: [
      "Node.js",
      "TypeScript",
      "Express",
      "FastAPI",
      "REST APIs",
      "Authentication",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Git",
    ],
  },
  {
    name: "Frontend (AI-Assisted)",
    prominence: "low",
    skills: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Tailwind CSS",
      "Vite",
      "React Router",
      "Framer Motion",
    ],
  },
];

export const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];