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
  workflow?: { title: string; detail: string | string[] }[]; // optional "how it works" phases, detail page only — string[] renders as bullets
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
    category: "AI Agents · n8n Automation · Trello, Asana & Monday.com",
    status: "Self-Hosted on a VPS",
    blurb:
      "Five AI Agents, orchestrated in n8n on a self-hosted VPS — reading meeting transcripts, inbound email, and Slack chat — that create, match, and manage tasks directly on Trello, Asana, or Monday.com boards.",
    myRole:
      "Designed and built all 5 workflows end-to-end — the Claude agent prompts and structured-output schemas, the n8n orchestration logic, and the direct Trello/Gmail/Drive REST tool layer each agent calls. Also provisioned the infrastructure itself: n8n self-hosted on a VPS, reachable over a domain-mapped HTTPS/TLS endpoint so the Read.ai webhook, Gmail trigger, and Slack Events subscription each have a secure, public target to call.",
    highlights: [
      "Meeting transcripts become a full Trello board (or get matched into an existing one), with follow-up emails drafted straight into Gmail",
      "Every inbound email is classified, matched to the right project, and answered with a context-aware drafted reply",
      "A Slack-native agent runs full Trello CRUD by chat, while a second bot reports pending tasks daily, on file upload, or on request",
    ],
    workflow: [
      {
        title: "1. Meeting → Trello board",
        detail: [
          "Read.ai webhook delivers the raw transcript; a Code node extracts it, builds the prompt, and a direct Anthropic API call summarizes it into a structured JSON (overview, participants, topics, highlights, action items, decisions, blockers, follow-ups) — validated before use.",
          "From that JSON, three things run in parallel: a formatted meeting-minutes Google Doc is built and uploaded (its Drive link extracted for later), a second and separate Claude call drafts a natural-language Slack recap, and AI Agent 1 (\"Board Matcher\") checks Trello for a board that already matches this meeting.",
          "Board found → AI Agent 2 (\"Smart Card Creator\") takes over: it can create lists/cards, but also pull existing cards, add comments, and update cards — so it extends the board instead of duplicating it.",
          "No board found → a fully deterministic fallback creates a brand-new board, a Topic list (Overview card + one Action Item card per action item, looped), and a Highlights list (Decisions, Blockers, Follow-ups cards) — no AI needed for this half.",
          "Everything converges into one Slack message built dynamically — \"Meeting added to existing board\" vs. \"New Meeting Summary Ready\" — with the title/date/participants, the Claude-written recap, the Drive doc link, and a direct link to whichever board was used, then the workflow responds to the original webhook.",
        ],
      },
      {
        title: "2. Meeting → Trello + drafted emails",
        detail: [
          "Everything from workflow #1, unchanged, plus a tail that runs once the meeting is fully processed: an intent-check decides whether any follow-ups actually need an email, then splits each one into its own item.",
          "For each item, the workflow searches Google Drive for supporting documents and builds a context block from what it finds.",
          "A Claude drafting agent writes the email using that Drive context plus a tool that pulls the matched Trello board's cards for reference, with a structured-output parser keeping the draft in a clean, savable shape.",
          "Each draft is saved directly into Gmail (not sent), then a separate Slack message tells the team the drafts are ready to review.",
        ],
      },
      {
        title: "3. Inbound email → AI-drafted reply",
        detail: [
          "A Gmail trigger fires on every new email; Claude classifies it by category first, and a \"Worth Replying?\" gate drops anything that doesn't need a response before it ever reaches an agent.",
          "Agent A (\"Project Resolver\") is the deep-context step — 8 tools: list Trello boards, get lists/cards/comments/checklists/members, and search + read Google Drive docs, all used to figure out which project this email actually belongs to.",
          "No match → Slack gets a \"no project match\" notice and the workflow stops there, so nothing gets drafted blind.",
          "Match found → Agent B (\"Email Drafter\") writes a context-aware reply using everything Agent A gathered, saves it as a Gmail draft, and Slack is notified the draft is ready.",
        ],
      },
      {
        title: "4. Pending-tasks Slack bot",
        detail: [
          "Three triggers converge on one pipeline: a new Google Drive file, a daily 10 AM schedule, or a Slack message. Slack requests go through a Router Agent first — a Claude agent with its own memory and a quick-reply tool — which decides whether to run the full pipeline or just answer directly, so casual questions don't trigger a full scan.",
          "Every Drive file is listed, routed by MIME type, and normalized to plain text — native Google Docs export directly, while other formats (e.g. an uploaded Word doc) are converted to a temporary Google Doc, exported, then the temp copy is deleted — the dedup + cleanup logic this workflow is named for.",
          "AI Agent 1 (\"Drive Categorizer\") groups the extracted text by project, Trello's full board list is pulled, and the workflow loops project-by-project through AI Agent 2 (\"Trello Matcher\"), which uses a get_board_detail tool to match each project to its board and pull the pending cards.",
          "Once every project's been checked, AI Agent 3 (\"Message Composer\") writes the final summary and posts it to Slack with its own send-to-Slack tool — or a plain \"nothing pending\" message if there's nothing to report.",
        ],
      },
      {
        title: "5. Conversational Slack ⇄ Trello agent",
        detail: [
          "A Slack Trigger fires on every message; the event is normalized and an IF gate drops the bot's own messages so it can never reply to itself.",
          "One Claude agent holds all 12 Trello REST tools directly — get/create/delete boards, get/create/rename/archive lists, get/create/update/move/delete cards.",
          "It never asks for an ID: given a name, it calls the matching \"get\" tool first, finds the item by name, and only then acts — resolving boards, then lists, then cards, in that order.",
          "Replies land back in the same Slack thread, written in a deliberately casual, human tone rather than a robotic confirmation.",
        ],
      },
    ],
    tech: [
      "AI Agents",
      "Anthropic API",
      "LangChain",
      "n8n",
      "Self-Hosted VPS",
      "HTTPS/TLS",
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
    images: [
      {
        src: "/projects/trello-meeting-automation/01-meeting-automation-canvas.jpeg",
        caption: "n8n — the core meeting → Trello pipeline (Read.ai → Claude → Trello → Slack)",
      },
      {
        src: "/projects/trello-meeting-automation/02-meeting-email-drafting-asana.jpeg",
        caption: "n8n — meeting automation + email drafting, ported to Asana",
      },
      {
        src: "/projects/trello-meeting-automation/03-email-reply-agent-asana.jpeg",
        caption: "n8n — inbound email reply agent (Gmail trigger, two Claude agents), ported to Asana",
      },
      {
        src: "/projects/trello-meeting-automation/04-trello-slack-chatbot.jpeg",
        caption: "n8n — the conversational Slack ⇄ Trello agent with 12 REST tools",
      },
    ],
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
