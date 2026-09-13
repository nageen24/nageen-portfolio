import type { IconType } from "react-icons";
import {
  SiClaude,
  SiLangchain,
  SiPython,
  SiTypescript,
  SiNodedotjs,
  SiFastapi,
  SiNextdotjs,
  SiReact,
  SiElectron,
  SiTanstack,
  SiMongodb,
  SiSqlite,
  SiQdrant,
  SiAirtable,
  SiN8N,
  SiMake,
  SiZapier,
  SiTrello,
  SiDocker,
  SiVercel,
  SiGithub,
  SiBun,
  SiGoogledrive,
  SiGmail,
  SiStripe,
} from "react-icons/si";

// The full toolset actually used across my projects (see src/data/portfolio.ts
// `tech` + `skillGroups`), scrolling in the ticker below the hero.
// A few providers (OpenAI, Groq, ChromaDB, Slack) have no brand icon in
// Simple Icons — they fall back to a plain monogram badge instead.
//
// `color` is each brand's official hex (from the simple-icons dataset).
// A few brands ship pure/near-black marks (Next.js, Vercel, Bun, GitHub) —
// those use the brand's own white variant instead, since true black would
// be invisible on this site's dark chips.
export type Tool = { label: string; icon?: IconType; color?: string; abbr?: string };

export const tools: Tool[] = [
  { label: "Claude", icon: SiClaude, color: "#D97757" },
  { label: "OpenAI (GPT)", abbr: "AI" },
  { label: "Groq", abbr: "Gq" },
  { label: "LangChain", icon: SiLangchain, color: "#7FC8FF" },
  { label: "Python", icon: SiPython, color: "#3776AB" },
  { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { label: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { label: "FastAPI", icon: SiFastapi, color: "#009688" },
  { label: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { label: "React", icon: SiReact, color: "#61DAFB" },
  { label: "Electron", icon: SiElectron, color: "#47848F" },
  { label: "TanStack", icon: SiTanstack, color: "#ECE8D1" },
  { label: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { label: "SQLite", icon: SiSqlite, color: "#003B57" },
  { label: "ChromaDB", abbr: "Ch" },
  { label: "Qdrant", icon: SiQdrant, color: "#DC244C" },
  { label: "Airtable", icon: SiAirtable, color: "#18BFFF" },
  { label: "n8n", icon: SiN8N, color: "#EA4B71" },
  { label: "Make.com", icon: SiMake, color: "#6D00CC" },
  { label: "Zapier", icon: SiZapier, color: "#FF4F00" },
  { label: "Trello", icon: SiTrello, color: "#0052CC" },
  { label: "Docker", icon: SiDocker, color: "#2496ED" },
  { label: "Vercel", icon: SiVercel, color: "#FFFFFF" },
  { label: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { label: "Bun", icon: SiBun, color: "#FFFFFF" },
  { label: "Google Drive", icon: SiGoogledrive, color: "#4285F4" },
  { label: "Gmail", icon: SiGmail, color: "#EA4335" },
  { label: "Stripe", icon: SiStripe, color: "#635BFF" },
  { label: "Slack", abbr: "Sl" },
];

// Looks up a tool by exact label first ("GitHub"), then by substring
// for compound skill labels ("Git / GitHub", "Serverless (Vercel, Mangum)").
// Used by the Skills section to icon-match skillGroups items without
// duplicating this data there.
export function findTool(label: string): Tool | undefined {
  const needle = label.toLowerCase();
  return (
    tools.find((t) => t.label.toLowerCase() === needle) ??
    tools.find((t) => needle.includes(t.label.toLowerCase()))
  );
}
