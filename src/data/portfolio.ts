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
  myRole?: string; // what I personally built, shown on the detail page
  highlights: string[];
  workflow?: { title: string; detail: string }[]; // optional "how it works" phases, detail page only
  tech: string[];
  demoUrl?: string; // real live demo link, shown as "View Demo" on card + detail page
  codeUrl?: string; // real public repo link, shown as "View Code" on card + detail page
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
    myRole:
      "I built the backend end-to-end: the Vercel serverless API (signup, login, session auth, onboarding, account) backed by Airtable, plus the Make.com automation layer wiring 15+ production scenarios across Beds24, Stripe, Seam, and OpenAI.",
    highlights: [
      "Booking → door PIN → guest message → PDF invoice → email, with zero manual steps",
      "GPT agents parse guest messages and route by intent & severity",
      "Fault-tolerant Beds24 ⇄ Airtable ⇄ Stripe sync with retry + token refresh",
    ],
    workflow: [
      {
        title: "1. Owner onboarding & billing setup",
        detail:
          "An owner registers with personal/business/tax details, then links a card via a Stripe SetupIntent. The Stripe Customer ID is written back to Airtable so future charges need zero manual entry.",
      },
      {
        title: "2. Property listing & channel sync",
        detail:
          "A 6-step wizard saves the property + starting inventory to Airtable, pairs the smart lock via Seam, and sends price limits to PriceLabs. Once admin-approved, an hourly robot registers the property on Beds24 and it goes live on Airbnb/Booking.com.",
      },
      {
        title: "3. Guest books → PIN → invoice",
        detail:
          "A Beds24 webhook fires the moment a guest books: Make.com logs the reservation in Airtable, Seam issues a scoped door PIN, OpenAI drafts a Lithuanian welcome message, and Gmail emails the guest their PIN, message, and PDF invoice — untouched by a human.",
      },
      {
        title: "4. Cleaning & the 1-strike policy",
        detail:
          "A nightly robot creates a cleaning job for every check-in; the cleaner claims it in-app and a second robot issues a fresh Seam code for the cleaning window. Cancelling 48h+ out reassigns with no penalty — under 48h or a no-show triggers an instant ban and revoked app access.",
      },
      {
        title: "5. Owner-stay blockouts",
        detail:
          "When an owner blocks personal dates, a robot closes them on Beds24, logs a €0 'Owner Stay' with zero management fee, still schedules the checkout clean for the next guest, and emails the owner their own door code.",
      },
      {
        title: "6. Issue reporting & maintenance",
        detail:
          "Cleaners report problems straight from the app; guest chat complaints are parsed by OpenAI for category and severity. Both paths land in an Airtable Issues table with admin escalation for anything urgent.",
      },
      {
        title: "7. Laundry & inventory floors",
        detail:
          "Every property has a minimum linen/towel stock. A daily robot flags anything under threshold for restocking and logs the cost as an unbilled expense against the owner's next invoice.",
      },
      {
        title: "8. Dynamic pricing",
        detail:
          "The owner sets a base/min/max price once; PriceLabs recalculates nightly rates from occupancy, demand, and local events and pushes them to Beds24. The dashboard shows live ADR, occupancy, and revenue gained.",
      },
      {
        title: "9. Monthly billing & VAT compliance",
        detail:
          "On the 1st, a robot builds each owner's invoice (20% management fee + cleaning + stock) and emails it; unpaid invoices are auto-charged via Stripe on the 4th. Platform invoices follow strict sequential VAT numbering for Lithuanian tax compliance.",
      },
      {
        title: "10. 30-day offboarding",
        detail:
          "On notice, the owner keeps earning — and paying commission — for 30 more days. A nightly robot detects day 30, bills only the remaining unbilled days, and closes the account.",
      },
    ],
    tech: [
      "Node.js",
      "Vercel Serverless Functions",
      "REST APIs",
      "Make.com",
      "Beds24 API",
      "Airtable API",
      "Stripe API",
      "Seam API",
      "OpenAI API",
      "PriceLabs",
      "TanStack Start",
      "TypeScript",
    ],
    demoUrl: "https://demo.nestly.lt/dashboard",
    accent: "from-accent/20 to-violet-500/10",
    images: [
      {
        src: "/projects/nestly/01-automations-library.png",
        caption: "Make.com — the automation library running the business",
      },
      {
        src: "/projects/nestly/02-automation-stripe-charge.jpeg",
        caption: "Make.com — Stripe auto-charge on day 4 of the billing cycle",
      },
      {
        src: "/projects/nestly/03-dashboard-overview.png",
        caption: "Owner dashboard — live revenue, occupancy & channel mix",
      },
      {
        src: "/projects/nestly/10-reservations.png",
        caption: "Reservations — guest bookings across every channel",
      },
      {
        src: "/projects/nestly/04-properties.png",
        caption: "Properties — listings synced from Beds24",
      },
      {
        src: "/projects/nestly/11-calendar.png",
        caption: "Calendar — monthly availability across every property",
      },
      {
        src: "/projects/nestly/05-cleaning-kanban.png",
        caption: "Cleaning schedule — kanban by status with live alerts",
      },
      {
        src: "/projects/nestly/12-financials.png",
        caption: "Financials — monthly billing breakdown & payout ledger",
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
        src: "/projects/nestly/13-cleaner-tasks.png",
        caption: "Cleaner app — all tasks, upcoming & completed",
      },
      {
        src: "/projects/nestly/14-cleaner-earnings.png",
        caption: "Cleaner app — earnings & payout history",
      },
      {
        src: "/projects/nestly/08-automation-offboarding.jpeg",
        caption: "Make.com — 30-day owner offboarding & final invoice flow",
      },
      {
        src: "/projects/nestly/09-automation-property-sync.jpeg",
        caption: "Make.com — syncing a new property to Beds24 & PriceLabs",
      },
      {
        src: "/projects/nestly/15-automation-finance-invoice.jpeg",
        caption: "Make.com — monthly invoice generation scenario",
      },
      {
        src: "/projects/nestly/16-automation-scenarios-2.png",
        caption: "Make.com — more of the automation library (pricing, finance, webhooks)",
      },
    ],
  },
  {
    slug: "trello-meeting-automation",
    title: "Meeting & Task Automation Suite",
    category: "n8n Automation · Also Built for Asana & Monday.com",
    status: "Self-hosted · n8n",
    blurb:
      "Five n8n + Claude workflows that turn meeting transcripts, inbound email, and Slack chat into structured project-board tasks — built for Trello, and just as portable to Asana or Monday.com.",
    myRole:
      "Designed and built all 5 workflows end-to-end — the Claude agent prompts and structured-output schemas, the n8n orchestration logic, and the direct Trello/Gmail/Drive REST tool layer each agent calls.",
    highlights: [
      "Read.ai transcript → Claude summary → full Trello board (lists, cards, comments), zero manual entry",
      "Gmail inbox watched end-to-end: AI classifies, matches the project, and drafts context-aware replies",
      "Slack-native Claude agent with 12 direct Trello REST tools — full board/list/card CRUD by chat",
    ],
    workflow: [
      {
        title: "1. Meeting → Trello board",
        detail:
          "A Read.ai webhook delivers the raw meeting transcript. Claude summarizes it into a validated JSON structure, then the workflow creates a full Trello board — a Topic list plus Overview, Action Items, Decisions, Blockers, and Follow-ups cards — and uploads a formatted meeting-minutes doc to Google Drive. Two Claude agents (a Board Matcher and a Smart Card Creator) decide whether to reuse an existing board and handle the list/card creation with their own Trello API tools.",
      },
      {
        title: "2. Meeting → Trello + drafted emails",
        detail:
          "The superset pipeline: everything above, plus an intent-detection step that flags which follow-ups need an email. A Claude drafting agent pulls supporting context from Google Drive and the matched Trello board, writes the reply, and saves it straight into Gmail as a draft — then pings Slack that drafts are ready for review.",
      },
      {
        title: "3. Inbound email → AI-drafted reply",
        detail:
          "A Gmail trigger watches the inbox. Claude first classifies whether an email is worth replying to, then a Project Resolver agent matches it to the right Trello board using its own set of Trello + Drive tools (boards, lists, cards, comments, checklists, members, doc search). A second agent drafts a context-aware reply into Gmail, and Slack is notified either way — draft ready, or no project match found.",
      },
      {
        title: "4. Pending-tasks Slack bot",
        detail:
          "Three triggers feed one pipeline: a new Google Drive file, a 10 AM daily schedule, or a direct Slack request. A router agent with conversational memory decides whether to run the full pipeline or just send a quick reply. Drive documents are converted, deduplicated, and categorized by one Claude agent; a second agent matches them to the right Trello board; a third composes the final pending-tasks summary and posts it to Slack.",
      },
      {
        title: "5. Conversational Slack ⇄ Trello agent",
        detail:
          "A Slack-native Claude agent with 12 direct Trello REST tools — create/delete boards, create/rename/archive lists, create/update/move/delete cards. It resolves plain-English names to Trello IDs itself (never asks the user for an ID), replies in-thread in a natural, human tone, and ignores its own bot messages to avoid reply loops.",
      },
    ],
    tech: [
      "n8n",
      "Claude (Anthropic)",
      "LangChain Agents",
      "Trello REST API",
      "Slack API",
      "Gmail API",
      "Google Drive API",
      "Read.ai Webhooks",
      "Asana API",
      "Monday.com API",
    ],
    codeUrl: "https://github.com/nageen24/trello-meeting-trello-automation-n8n",
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
