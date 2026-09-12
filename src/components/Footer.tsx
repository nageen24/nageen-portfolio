import { profile } from "@/data/portfolio";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.2-.1.2-.3.3-.4.1-.2 0-.4 0-.5 0-.1-.6-1.5-.9-2-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1 0 1.2.9 2.4 1 2.6.1.2 1.8 2.8 4.4 3.8.6.3 1.1.4 1.5.5.6.2 1.1.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z" />
      <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.6 1.4 5.1L2 22l5.1-1.3c1.4.8 3.1 1.2 4.9 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.6 0-3.2-.4-4.5-1.2l-.3-.2-3.1.8.8-3-.2-.3C3.9 14.9 3.5 13.5 3.5 12c0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5-3.8 8.5-8.5 8.5z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/5 bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          / contact
        </p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
          Let&apos;s work together.
        </h2>
        <p className="mt-2 max-w-md text-sm text-zinc-400">
          Open to AI Engineer roles and freelance work. WhatsApp is the fastest way to reach me.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03] hover:bg-accent-light"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-white/25 hover:bg-white/5"
          >
            Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-white/25 hover:bg-white/5"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-white/25 hover:bg-white/5"
          >
            GitHub
          </a>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-sm text-zinc-600 sm:flex-row">
          <span className="font-mono">{profile.name} · {profile.role}</span>
          <span>© {new Date().getFullYear()} {profile.name}</span>
        </div>
      </div>
    </footer>
  );
}
