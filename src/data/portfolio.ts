export const profile = {
  name: "Nageen Abid",
  role: "AI Engineer",
  location: "Pakistan",
  email: "nageenabid0624@gmail.com",
  phone: "+92 312 6243067",
  whatsapp:
    "https://wa.me/923126243067?text=" +
    encodeURIComponent("Hi Nageen, I saw your portfolio and would like to connect."),
  linkedin: "https://linkedin.com/in/nageen-abid",
  github: "https://github.com/nageen24",
  available: true,
  tagline:
    "I build multi-agent AI systems, RAG pipelines, and LLM-powered backends that run live in production.",
  bio: "AI Engineer with 2+ years of production experience shipping end-to-end AI products — from a fully automated property-management platform that runs every booking, invoice, and smart-lock access with zero manual steps, to self-hosted multi-agent workflows and grounded RAG chatbots.",
};

export const skillGroups = [
  {
    title: "LLMs & Agents",
    items: [
      "Multi-agent orchestration",
      "Function calling / tool use",
      "RAG",
      "Prompt engineering",
      "Structured outputs",
      "Claude",
      "OpenAI (GPT)",
      "Llama",
      "Groq",
      "Whisper",
    ],
  },
  {
    title: "RAG & Data",
    items: [
      "Embeddings",
      "ChromaDB",
      "Chunking & retrieval",
      "PDF/DOCX pipelines",
      "SQLite",
      "Airtable",
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      "Python (FastAPI)",
      "Node.js",
      "TypeScript",
      "REST API design",
      "Webhook orchestration",
      "Serverless (Vercel, Mangum)",
    ],
  },
  {
    title: "Automation & Integrations",
    items: ["n8n", "Make.com", "Zapier", "Stripe", "Beds24", "Seam", "Slack", "Trello"],
  },
  {
    title: "DevOps & Cloud",
    items: ["Docker", "Git / GitHub", "CI/CD", "Vercel Functions", "Self-hosting", "Electron"],
  },
];

// marquee tickers (short labels)
export const marqueeSkills = [
  "Claude",
  "GPT",
  "Llama",
  "Groq",
  "Whisper",
  "FastAPI",
  "Python",
  "TypeScript",
  "ChromaDB",
  "RAG",
  "n8n",
  "Docker",
  "Stripe",
  "Airtable",
  "Vercel",
  "LangChain",
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  status: string;
  blurb: string;
  highlights: string[];
  tech: string[];
  links: { label: string; href: string; type: "live" | "code" | "demo" }[];
  accent: string; // tailwind gradient classes for the mock panel
  image?: string; // optional single screenshot, public/projects/<slug>/<file>
  images?: { src: string; caption: string }[]; // optional gallery, overrides `image`
};

export const projects: Project[] = [
  {
    slug: "nestly",
    title: "Nestly — SaaS Property Management System",
    category: "Property-Tech SaaS · Automation Backend",
    status: "Live in production",
    blurb:
      "A full property-management SaaS — owner dashboard, cleaner app, and public site — where Airtable, Make.com, Beds24, Stripe, Seam, and OpenAI run every booking, cleaning, and invoice automatically.",
    highlights: [
      "Booking → door PIN → guest message → PDF invoice → email, with zero manual steps",
      "GPT agents parse guest messages and route by intent & severity",
      "Fault-tolerant Beds24 ⇄ Airtable ⇄ Stripe sync with retry + token refresh",
    ],
    tech: [
      "TanStack Start",
      "TypeScript",
      "Airtable",
      "Make.com",
      "Beds24",
      "Stripe",
      "Seam",
      "OpenAI",
      "PriceLabs",
    ],
    links: [
      { label: "Demo", href: "#", type: "demo" },
      { label: "Code", href: "https://github.com/nageen24", type: "code" },
    ],
    accent: "from-emerald-500/20 to-teal-500/10",
    images: [
      {
        src: "/projects/nestly/01-automations-library.jpeg",
        caption: "Make.com — the automation library running the business",
      },
      {
        src: "/projects/nestly/02-automation-stripe-charge.png",
        caption: "Make.com — Stripe auto-charge on day 4 of the billing cycle",
      },
      {
        src: "/projects/nestly/03-dashboard-overview.png",
        caption: "Owner dashboard — live revenue, occupancy & channel mix",
      },
      {
        src: "/projects/nestly/04-properties.png",
        caption: "Properties — listings synced from Beds24",
      },
      {
        src: "/projects/nestly/05-cleaning-kanban.png",
        caption: "Cleaning schedule — kanban by status with live alerts",
      },
      {
        src: "/projects/nestly/06-invoices.png",
        caption: "Invoices — sequential VAT invoicing (PVM Sąskaita-Faktūra)",
      },
      {
        src: "/projects/nestly/07-cleaner-today.png",
        caption: "Cleaner app — today's job with live smart-lock door code",
      },
      {
        src: "/projects/nestly/08-automation-offboarding.jpeg",
        caption: "Make.com — 30-day owner offboarding & final invoice flow",
      },
      {
        src: "/projects/nestly/09-automations-library-2.jpeg",
        caption: "Make.com — pricing, finance & webhook scenarios",
      },
    ],
  },
  {
    slug: "meeting-to-action",
    title: "Meeting-to-Action AI Engine",
    category: "Multi-Agent Workflow",
    status: "Self-hosted",
    blurb:
      "Converts live meeting transcripts into actions across 6 parallel pipelines — summaries, email drafts, Trello tasks, Slack alerts, and a personal Slack Q&A agent.",
    highlights: [
      "Claude LLM with multi-agent tool-calling and structured output parsers",
      "Conversation memory over REST APIs",
      "Self-hosted on a live server via Docker",
    ],
    tech: ["Claude", "n8n", "Docker", "Slack", "Trello", "REST APIs"],
    links: [
      { label: "Demo", href: "#", type: "demo" },
      { label: "Code", href: "https://github.com/nageen24", type: "code" },
    ],
    accent: "from-violet-500/20 to-indigo-500/10",
  },
  {
    slug: "rag-chatbot",
    title: "RAG Chatbot — Grounded Q&A",
    category: "FastAPI · ChromaDB · Claude",
    status: "Live on Vercel",
    blurb:
      "Answers strictly from company documents via a FastAPI pipeline — PDF/DOCX → chunking → embedding retrieval → grounded Claude generation — with anti-hallucination fallbacks.",
    highlights: [
      "Embeddable JS widget deployed on serverless Vercel",
      "Intent routing, session memory, and integrated Calendly booking flow",
      "Grounded answers only — no hallucinated content",
    ],
    tech: ["FastAPI", "ChromaDB", "Claude", "Vercel", "TypeScript"],
    links: [
      { label: "Live", href: "#", type: "live" },
      { label: "Code", href: "https://github.com/nageen24", type: "code" },
    ],
    accent: "from-sky-500/20 to-cyan-500/10",
  },
  {
    slug: "meeting-notetaker",
    title: "AI Meeting Notetaker",
    category: "Cross-Platform Desktop App",
    status: "Electron · Desktop",
    blurb:
      "Auto-detects live Zoom/Teams/Meet calls, records system + mic audio, and produces diarized transcripts and structured summaries.",
    highlights: [
      "Whisper ASR via cloud Groq + on-device WASM; Llama-3.3-70B summaries",
      "SQLite storage with Google Drive sync",
      "Webhook output into downstream n8n automations",
    ],
    tech: ["Electron", "React", "Whisper", "Llama", "Groq", "SQLite"],
    links: [
      { label: "Demo", href: "#", type: "demo" },
      { label: "Code", href: "https://github.com/nageen24", type: "code" },
    ],
    accent: "from-amber-500/20 to-orange-500/10",
  },
];

export const experience = [
  {
    company: "EWDTech",
    role: "AI Engineer",
    period: "03/2026 – Present",
    points: [
      "Shipped 15+ production automation pipelines for a live property-management SaaS.",
      "Integrated LLM agents with function calling to classify and auto-respond to guest messages.",
      "Designed fault-tolerant Beds24 ⇄ Airtable ⇄ Stripe sync running unattended in production.",
    ],
  },
  {
    company: "Xorsel",
    role: "AI Engineer",
    period: "08/2024 – 03/2026",
    points: [
      "Built RAG systems end-to-end: ingestion, chunking, embeddings, ChromaDB retrieval.",
      "Delivered speech-to-text + summarization with Whisper ASR and Llama-3.3-70B.",
      "Shipped full-stack features in FastAPI, React, and TypeScript.",
    ],
  },
];

export const education = {
  degree: "B.Sc. Computer Science — CGPA 3.64 / 4",
  school: "Govt. College University Faisalabad",
  period: "2019 – 2023",
  certs: [
    "Agentic AI — DeepLearning.AI (Andrew Ng)",
    "Generative AI — Slearner (Australia)",
  ],
};
