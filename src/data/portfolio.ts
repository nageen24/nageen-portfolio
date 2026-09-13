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
    "AI Engineer in Pakistan, building agentic AI systems, RAG pipelines, and LLM-powered backends with Python, n8n, Make & Zapier — shipping multi-agent automations and SaaS products that run live in production.",
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

export type Project = {
  slug: string;
  title: string;
  category: string;
  status: string;
  blurb: string;
  myRole?: string; // what I personally built, shown on the detail page
  highlights: string[];
  workflow?: { title: string; detail: string | string[] }[]; // optional "how it works" phases, detail page only — string[] renders as bullets
  techStack?: { label: string; detail: string }[]; // optional detailed tech breakdown (what + why), detail page only
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
      "Designed and built all 5 workflows end-to-end — the Claude agent prompts, n8n orchestration, and the Trello/Gmail/Drive REST tool layer each agent calls. Also self-hosted n8n on a VPS behind a domain-mapped HTTPS/TLS endpoint for the webhooks.",
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
      {
        src: "/projects/trello-meeting-automation/05-email-agent-no-match-slack.jpeg",
        caption: "Slack — the email-reply agent's fallback notice when no Trello project matches",
      },
      {
        src: "/projects/trello-meeting-automation/06-trello-board-from-meeting.jpeg",
        caption: "Trello — a board and topic lists created straight from a meeting transcript",
      },
    ],
  },
  {
    slug: "rag-chatbot",
    title: "RAG Support Widget — Grounded Q&A",
    category: "Embeddable AI Widget · RAG Backend · FastAPI",
    status: "In Production",
    blurb:
      "An embeddable support-chat widget that answers strictly from a company's own documents. FastAPI, BM25 keyword retrieval (no embeddings, no vector DB), and Groq's GPT-OSS 20B behind a 4-way intent router. A strict, word-capped brand-voice persona is enforced twice — in the prompt, and again in post-processing.",
    myRole:
      "Built solo end-to-end: scraped the client's site into a structured knowledge base, wrote the ingestion/chunking pipeline, the BM25 retrieval + intent-routing RAG core with a swappable LLM provider (Groq / Ollama), the embeddable vanilla-JS widget, and the Mangum/Vercel serverless deployment.",
    highlights: [],
    techStack: [
      {
        label: "Backend",
        detail: "FastAPI (Python) — three routes: POST /chat, GET /health, POST /ingest.",
      },
      {
        label: "LLM / inference",
        detail:
          "Groq API running openai/gpt-oss-20b, reasoning_effort=\"low\" with generous max_completion_tokens so hidden reasoning tokens never empty the response.",
      },
      {
        label: "Intent routing",
        detail:
          "One classification call sorts each message first — only a real company question ever triggers retrieval.",
      },
      {
        label: "Retrieval — no embeddings, no vector DB",
        detail: "BM25Okapi (rank-bm25) lexical scoring over chunked text — chunks.json is the entire index.",
      },
      {
        label: "Ingestion",
        detail: "python-docx / pypdf extract text; a custom chunker splits it into 400-char windows, 80-char overlap.",
      },
      {
        label: "Response shaping",
        detail: "A strict 2-sentence brand-voice persona enforced in the prompt, then hard-trimmed again in post-processing.",
      },
      {
        label: "Frontend",
        detail: "One static HTML file, vanilla JS, Tailwind via CDN — no framework, no build step.",
      },
      {
        label: "Deployment",
        detail: "Vercel serverless — api/index.py wraps FastAPI with Mangum; vercel.json routes /chat, /health, /ingest to it.",
      },
      {
        label: "Config & CORS",
        detail: "python-dotenv loads GROQ_API_KEY from env; CORS wide open so it can embed on any client domain.",
      },
    ],
    workflow: [
      {
        title: "Ask → retrieve → answer",
        detail: [
          "You ask a question in the chat widget.",
          "BM25 retrieves the most relevant chunks from the company's own docs.",
          "gpt-oss-20b answers strictly from that context — 2 sentences, grounded, no hallucination.",
        ],
      },
    ],
    tech: [
      "Python",
      "FastAPI",
      "Groq API (GPT-OSS 20B)",
      "BM25 (rank-bm25)",
      "python-docx / pypdf",
      "Vercel Serverless (Mangum)",
      "Vanilla JS",
      "Tailwind CSS",
    ],
    demoUrl: "https://rag-chatbot-pink-psi.vercel.app/",
    accent: "from-sky-500/20 to-cyan-500/10",
    images: [
      {
        src: "/projects/rag-chatbot/01-live-chat.png",
        caption: "A real grounded answer — retrieved from company docs, word-limit persona intact",
      },
    ],
  },
  {
    slug: "meeting-notetaker",
    title: "Meeting Transcriber — Auto-Record & Summarize",
    category: "Desktop App Automation · Electron · Local-First AI",
    status: "Windows · macOS · Linux",
    blurb:
      "A cross-platform desktop app that auto-detects a meeting and records it locally with zero manual action — on Windows, via the same mic-privacy signal Windows itself uses. Groq Whisper transcribes a 1-hour meeting in ~25s (with a fully offline fallback), and an LLM summarizes it and auto-files it into the right project. Finished notes push out to your automation stack by signed webhook.",
    myRole:
      "Built solo end-to-end: every isolated module (meeting detection, audio capture/storage, Groq transcription + WASM fallback, AI summary, project classifier, SQLite, Google Drive sync, webhook sender), plus the full Electron main/preload/renderer app, IPC bridge, and React UI.",
    highlights: [],
    workflow: [
      {
        title: "1. Detecting a meeting",
        detail: [
          "Polls for known meeting apps, plus — on Windows — the OS's own mic-privacy registry key.",
          "Debounced over 2 polls, then a floating banner confirms or auto-starts the recording.",
        ],
      },
      {
        title: "2. Local audio capture",
        detail: [
          "MediaRecorder mixes mic + system-loopback audio into ~1-second chunks.",
          "Chunks stream to disk as WebM/Opus through a serialized writer — memory stays bounded.",
        ],
      },
      {
        title: "3. Transcription",
        detail: [
          "Groq Whisper (whisper-large-v3-turbo) returns a 1-hour transcript in ~25s.",
          "No API key? A fully offline WASM Whisper fallback transcribes on-device instead.",
        ],
      },
      {
        title: "4. AI summary + auto-filing",
        detail: [
          "Groq's llama-3.3-70b-versatile drafts a structured summary — owners, decisions, open questions.",
          "A second call auto-files the meeting into an existing or new project.",
        ],
      },
      {
        title: "5. Notes, sync, and webhook out",
        detail: [
          "A TipTap editor lets you refine notes; Drive sync stays in each user's own private folder.",
          "A signed webhook POSTs the finished summary to any URL — e.g. an n8n automation.",
        ],
      },
    ],
    techStack: [
      {
        label: "Desktop shell",
        detail: "Electron 33, built with electron-vite + Vite 5, packaged via electron-builder (NSIS / DMG / AppImage).",
      },
      {
        label: "Process model",
        detail: "Main (Node) owns recording, detection, DB, Groq, Drive, and webhooks; preload bridges IPC; React renders the UI plus a separate floating-banner window.",
      },
      {
        label: "Meeting detection",
        detail: "Process-list polling (Zoom/Teams/Meet/Slack/Discord) plus, on Windows, the OS's own mic-privacy registry key — both debounced to avoid flapping.",
      },
      {
        label: "Audio capture",
        detail: "MediaRecorder mixes mic + system-loopback into WebM/Opus, streamed in ~1s chunks to a serialized disk writer.",
      },
      {
        label: "Transcription",
        detail: "Groq Whisper (whisper-large-v3-turbo) by default; an on-device WASM Whisper fallback keeps it fully offline with no API key.",
      },
      {
        label: "AI summary & classification",
        detail: "Groq llama-3.3-70b-versatile, forced-JSON prompts for both the structured summary and the auto-project-filing call.",
      },
      {
        label: "Storage",
        detail: "better-sqlite3 — embedded, native, versioned schema migrations, zero server.",
      },
      {
        label: "Sync & webhook out",
        detail: "Per-user Google Drive appDataFolder via Desktop OAuth; HMAC-signed webhook POSTs with retry/backoff to any URL.",
      },
      {
        label: "Editor & UI",
        detail: "TipTap 3 (ProseMirror) notes editor, Tailwind CSS, system tray, and a floating detection banner.",
      },
      {
        label: "Secrets & updates",
        detail: "Groq key encrypted via Electron safeStorage (DPAPI / Keychain / libsecret); electron-updater ships updates from GitHub Releases.",
      },
    ],
    tech: [
      "Electron",
      "React",
      "TypeScript",
      "Groq Whisper",
      "Groq (Llama 3.3 70B)",
      "better-sqlite3",
      "Google Drive API",
      "TipTap",
      "electron-builder",
    ],
    accent: "from-amber-500/20 to-orange-500/10",
    images: [
      {
        src: "/projects/meeting-notetaker/01-home.png",
        caption: "Home — recent recordings, grouped by day",
      },
      {
        src: "/projects/meeting-notetaker/02-meeting-detail.png",
        caption: "Meeting detail — AI summary, action items with owners, decisions, open questions",
      },
      {
        src: "/projects/meeting-notetaker/03-followup-projects.png",
        caption: "Meetings Follow-up — meetings auto-clustered into projects by an LLM",
      },
      {
        src: "/projects/meeting-notetaker/04-settings.png",
        caption: "Settings — auto-record, webhooks, Groq key, all stored locally",
      },
    ],
  },
  {
    slug: "family-office-intelligence",
    title: "Family Office Intelligence — AI Data Pipeline + Micro-RAG",
    category: "Agentic AI · Micro-RAG Search · FastAPI",
    status: "Live Demo · Deployed on Vercel",
    blurb:
      "An agentic AI pipeline — a drafter-and-reviewer LLM pair checking every answer — that discovers, enriches, and proof-gates family-office records from public filings, then serves them through an idempotent, replayable Micro-RAG search app.",
    myRole:
      "Built solo end-to-end: the multi-source discovery + enrichment pipeline, the proof/validation gates and escalation queue, the idempotent GitHub Actions scheduler with committed replay state, and the Micro-RAG (hybrid retrieval + two-LLM grounding control) deployed as a FastAPI/Vercel search app.",
    highlights: [],
    workflow: [
      {
        title: "1. Multi-source discovery",
        detail:
          "Six free sources feed one deduped candidate pool — SEC CIK registry, SEC EDGAR full-text search, SEC Form ADV roster, Wikidata SPARQL (instance-of \"family office\"), Google News RSS, and ProPublica Form 990 — interleaved so no single source (SEC filings) dominates the mix.",
      },
      {
        title: "2. Proof, not vibes",
        detail:
          "Before a firm counts, an LLM must locate and code must confirm a verbatim sentence — from the firm's own site or filing — establishing it actually functions as a family office; every high-value cell (email, phone, AUM, website) then carries its own source, method, confidence, and fact/inference/speculation label, verified by MX/SMTP checks and direct-fetch name matching rather than trusted on sight.",
      },
      {
        title: "3. Honest gaps over guessed values",
        detail:
          "A cell that can't be verified — an email an SMTP probe can't confirm, a firm type the text can't disambiguate — ships blank and labelled \"could not verify\" instead of a guessed placeholder; ambiguous records are routed to an escalation queue for a human decision instead of self-resolved.",
      },
      {
        title: "4. Idempotent, scheduled pipeline",
        detail:
          "A GitHub Actions cron job climbs the candidate pool in restart-safe batches keyed by a stable firm key, committing state after every batch — a crash loses at most the in-flight batch, and an already-attempted firm is never reprocessed on rerun.",
      },
      {
        title: "5. Micro-RAG ingest",
        detail:
          "Each qualified record becomes one self-contained blurb carrying every high-value cell, embedded with model2vec's keyless, pure-NumPy static embeddings into an in-memory Qdrant store rebuilt in ~1s at cold start — chosen after torch/onnxruntime/fastembed all failed to load on the target runtime.",
      },
      {
        title: "6. Hybrid retrieval",
        detail:
          "A structured pre-filter (firm type, has-email) combines with semantic search, named-firm injection (so a proper noun a weak static embedding would miss still reaches the model), and a minimum-similarity score gate that declines rather than answer from weak matches; list/rank/count questions retrieve the whole corpus instead of a top-k slice.",
      },
      {
        title: "7. Agentic AI, pair #1 — the Search page (answerer + reviewer)",
        detail:
          "An answerer LLM drafts strictly from the retrieved records; a second, independent reviewer LLM audits that draft against the same records and returns approve / refine / decline — nothing reaches the user unchecked. Deterministic questions (counts, type lists) skip the LLM path entirely, so they can't hallucinate and can't time out.",
      },
      {
        title: "8. Agentic AI, pair #2 — the Agent page (worker + authority)",
        detail:
          "Give the Agent page an open research goal and a bounded planner LLM runs a tool loop over a fixed set of read-only record tools, gathering evidence step by step. It never gets to decide its own outcome: a separate reviewer LLM authority is the only thing allowed to set release — approving, escalating an ambiguous case to a human queue, or declining — so the worker that did the research can't also grade its own work.",
      },
    ],
    techStack: [
      {
        label: "Discovery",
        detail: "SEC CIK, SEC EDGAR, SEC Form ADV, Wikidata SPARQL, Google News RSS, ProPublica Form 990.",
      },
      {
        label: "Enrichment & proof",
        detail: "SEC 13F filings, SEC submissions JSON, Serper + browser rendering, MX/SMTP email checks.",
      },
      {
        label: "Validation & escalation",
        detail: "Firm- and cell-level proof gates with a human escalation queue.",
      },
      {
        label: "Orchestration & state",
        detail: "GitHub Actions scheduled, idempotent batch pipeline with committed JSON/JSONL state.",
      },
      {
        label: "Retrieval",
        detail: "model2vec embeddings, in-memory Qdrant, hybrid structured + semantic search.",
      },
      {
        label: "Agentic AI (two agent pairs)",
        detail: "Search: answerer + reviewer LLMs. Agent: worker + authority LLMs.",
      },
      {
        label: "LLM providers",
        detail: "Groq (dual keys), Cerebras, Gemini — all free-tier.",
      },
      {
        label: "Backend & deploy",
        detail: "FastAPI on Vercel serverless, vanilla-JS frontend.",
      },
    ],
    tech: [
      "Python",
      "FastAPI",
      "Qdrant",
      "model2vec",
      "Groq API (Llama 3.3 70B)",
      "SEC EDGAR / 13F / Form ADV",
      "Wikidata SPARQL",
      "GitHub Actions",
      "Vercel Serverless",
      "Vanilla JS",
    ],
    demoUrl: "https://family-office-intelligence.vercel.app/",
    accent: "from-emerald-500/20 to-teal-500/10",
    images: [
      {
        src: "/projects/family-office-intelligence/01-search-two-agent-check.png",
        caption: "Search — \"Two AI agents check each answer: one drafts, one verifies against the records\"",
      },
      {
        src: "/projects/family-office-intelligence/02-research-agent-worker-reviewer.png",
        caption: "Agent — a bounded worker researches; a separate reviewer alone can authorize or decline",
      },
    ],
  },
  {
    slug: "textured-hair-directory",
    title: "Automated Scrape Pipeline — Live Local Business Directory",
    category: "Verified Local Directory · Automated Data Pipeline · MongoDB",
    status: "Private Beta",
    blurb:
      "A deterministic, zero-hallucination directory of verified textured-hair practitioners across four cities — an Apify scraping pipeline merges listings into MongoDB, then a rule-based classifier and a confidence-decay engine score how trustworthy each one still is.",
    myRole:
      "I own the data pipeline and backend, not the UI: the multi-source Apify scraping + dedup engine, the relevance classifier, the taxonomy/pricing mapping, the confidence-decay scoring, and the MongoDB schema plus the webhook-driven GitHub Actions automation around it.",
    highlights: [],
    workflow: [
      {
        title: "1. Multi-source discovery",
        detail:
          "Apify actors scrape StyleSeat + Booksy, TikTok, and Instagram hashtags across Atlanta, New York, Bangkok, and Tel Aviv on their own independent 15-day schedule. Search terms and neighborhood/area lists are curated per city so a query set doesn't quietly default everything to Atlanta.",
      },
      {
        title: "2. Cross-source dedup",
        detail:
          "Records are merged by normalized phone/domain/name matching that deliberately ignores shared aggregator domains — Yelp, Instagram, Booksy, Linktree — since those are shared by hundreds of businesses, not proof of a match. A real bug this caught: a Yelp tracking-link false match once merged 90 unrelated salons into one record.",
      },
      {
        title: "3. Relevance gate",
        detail:
          "A listing only counts as a real hair business if it clears three gates — a real name, a real contact, and its own bio/category (never caption text) actually claiming hair work. Rebuilt after the first version let customer and influencer accounts through purely because their captions happened to mention braids.",
      },
      {
        title: "4. Taxonomy + pricing",
        detail:
          "Listing text is matched against a service/substrate taxonomy (silk press, locs, 4C, and more) using longest-term-first matching so \"box braids\" wins over a bare \"braids.\" Real structured prices from booking platforms are used whenever a source provides them, ahead of inferring anything.",
      },
      {
        title: "5. Confidence-decay engine",
        detail:
          "Each verification signal — human check, Instagram activity, community referral, booking-endpoint check — carries its own weight and half-life, decaying on a saturating curve so no single signal alone can push a score to certainty. Scores band into verified / likely current / unconfirmed, never a flat yes-or-no.",
      },
      {
        title: "6. Honest scarcity",
        detail:
          "Search results are labelled dense (10+), thin (2–9), bare (1), or empty rather than padded to look fuller than the data supports. The assistant is deliberately deterministic, not an LLM — it answers only from the index and states plainly when it has no verified match, rather than risk inventing one.",
      },
      {
        title: "7. Resilient pipeline",
        detail:
          "A Vercel webhook reacts the instant an Apify task finishes, success or failure, dispatching GitHub Actions to ingest the dataset or log-and-alert. Runs blocked by exhausted Apify usage credit land in a pending-work queue that a 30-minute cron auto-resumes once budget is back.",
      },
    ],
    techStack: [
      {
        label: "Automation pipeline",
        detail: "25+ Bun scripts (scripts/) for discovery, dedup, classification, enrichment, and image rehosting, orchestrated by 2 GitHub Actions workflows.",
      },
      {
        label: "Discovery",
        detail: "Apify actors scraping StyleSeat/Booksy, TikTok, and Instagram hashtags across 4 cities on their own independent 15-day schedule.",
      },
      {
        label: "Dedup & merge",
        detail: "matchRules.mjs — normalized phone/domain/name matching with a shared-aggregator-domain blocklist (Yelp, Instagram, Booksy, and more).",
      },
      {
        label: "Relevance filter",
        detail: "classify.mjs — a 3-gate check (real name + real contact + bio/category hair signal) that keeps customer and influencer accounts out.",
      },
      {
        label: "Taxonomy + pricing",
        detail: "The ingestion mapper — term-to-service-node mapping plus real structured prices from booking platforms when available.",
      },
      {
        label: "Confidence engine",
        detail: "Per-signal half-life decay on a saturating curve, computed in the app's shared data module.",
      },
      {
        label: "Resilience",
        detail: "A Vercel webhook plus a billing-aware retry queue (scripts/retry-pending.mjs) auto-resumes failed runs every 30 minutes.",
      },
      {
        label: "Backend & data",
        detail: "Bun runtime, MongoDB schema, TanStack Start server functions.",
      },
    ],
    tech: [
      "Apify",
      "MongoDB",
      "TanStack Start",
      "React 19",
      "Bun",
      "GitHub Actions",
      "Vercel",
      "Tailwind CSS",
    ],
    accent: "from-rose-500/20 to-purple-500/10",
    images: [
      {
        src: "/projects/textured-hair-directory/01-apify-scraper-tasks.png",
        caption: "Apify — per-city, per-platform scraper tasks (StyleSeat/Booksy, TikTok, Instagram hashtag) all green",
      },
      {
        src: "/projects/textured-hair-directory/02-mongodb-practitioner-record.png",
        caption: "MongoDB — a merged practitioner record: sources, raw evidence, and dedup keys, in a 834-document collection",
      },
    ],
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
