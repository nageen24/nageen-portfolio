import Link from "next/link";

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
          className="group flex h-8 w-8 shrink-0 items-center justify-center"
        >
          <span className="pulse-dot h-3 w-3 rounded-full bg-gradient-to-br from-accent-light to-accent shadow-[0_0_10px_2px_rgba(220,150,90,0.55)] transition-transform group-hover:scale-125" />
        </Link>

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
