import Link from "next/link";
import { profile } from "@/data/portfolio";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#stack", label: "Stack" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-ink/90 p-1.5 shadow-lg shadow-black/30 backdrop-blur-md">
        <Link
          href="/#top"
          aria-label="Home"
          className="group flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-white/10"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 text-accent-light transition-transform group-hover:scale-110"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          >
            <path d="M12 2 L20.66 7 L20.66 17 L12 22 L3.34 17 L3.34 7 Z" />
          </svg>
        </Link>

        {profile.available && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/5 px-2.5 py-1.5 text-xs font-medium text-accent-light">
            <span className="pulse-dot h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span className="hidden sm:inline">Available for work</span>
          </span>
        )}

        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="rounded-full px-3 py-1.5 text-sm text-zinc-400 transition-colors hover:text-white"
          >
            {l.label}
          </Link>
        ))}

        <Link
          href="/#contact"
          className="rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-sm font-medium text-accent transition-colors hover:bg-accent/20"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
