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
  cvSummary: "Backend Developer with 3 years of experience building production-ready systems in Python and Node.js, and 6 months of applied machine learning experience. Experienced in owning backend infrastructure from requirements through deployment. Built a FastAPI algorithm visualizer, a CNN+LSTM audio classification system achieving 88.75% recall, and a fraud detection pipeline evaluated on 284K+ real transactions. Core expertise includes Python, FastAPI, Node.js, Machine Learning, and end-to-end reliable delivery.",
  interests: [
    "Machine learning",
    "Deep learning",
    "LLM engineering",
    "Backend architecture",
    "API design",
  ],
};

export const education = [
  {
    degree: "B.Sc. in Software Engineering",
    school: "Technical and Vocational University (TVU) of Kermanshah, Iran",
    date: "November 2025"
  },
  {
    degree: "Associate Degree in Computer Software Engineering",
    school: "Technical and Vocational University (TVU) of Kermanshah, Iran",
    date: "October 2023"
  }
];

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
    name: "LumenRetreat",
    year: "2025",
    status: "Completed",
    subtitle: "hotel management dashboard",
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
    description: [
      "Designing and implementing a production-oriented AI backend with multi-provider LLM routing, automatic failover, provider health management, and quota-aware request handling.",
      "Built a provider abstraction layer supporting cloud and self-hosted models through a unified AI gateway.",
      "Implemented idempotent request handling, structured-output validation, bounded retries, and normalized provider error handling."
    ],
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
    description: [
      "Developed AffectCare — a CNN+LSTM audio classification system using MFCC spectrogram features, achieving 88.75% recall and 77.6% F1 through evaluation-driven model selection.",
      "Developed FraudFlux — a fraud detection pipeline on 284,807 real transactions, comparing models under severe class imbalance and selecting a deployment-oriented model based on precision/recall trade-offs.",
      "Created StudySprout and Lumen Retreat — full-stack applications featuring authentication, dashboards, CRUD workflows, and responsive production-ready interfaces.",
      "Built InsightGraph — a full-stack algorithm visualizer using React and FastAPI with step-by-step execution, comparison mode, 16 algorithms, reusable components, and 34 automated tests."
    ],
  },
  {
    role: "Software Engineer",
    company: "Private SaaS Company",
    period: "Sep 2023 — Jan 2025",
    type: "Full-time · Remote",
    description: [
      "Collaborated in a fully remote environment, independently delivering software features while coordinating with teammates on data migration and cross-feature development.",
      "Owned end-to-end delivery across React frontends and Python backends from requirement clarification through testing and production deployment under real traffic.",
      "Built and maintained React interfaces and backend services with focus on performance, reusable architecture, clean APIs, and reliability.",
      "Contributed to internal platforms including KnowledgeBase and HG-db (hypergraph visualization with Rust performance bridge)."
    ],
  },
];

export const skillGroups = [
  {
    name: "ML / DL",
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
      "Express",
      "FastAPI",
      "REST APIs",
      "PostgreSQL",
      "MongoDB",
      "Authentication",
      "Docker",
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