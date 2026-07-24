import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/5 bg-[#0b0b0e]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-emerald-400">
            / contact
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Let&apos;s build something that ships.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-zinc-400">
            Open to AI Engineer roles and freelance builds. Fastest way to reach me is email.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
            >
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-white/25 hover:bg-white/5"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-white/25 hover:bg-white/5"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-8 text-sm text-zinc-600 sm:flex-row">
          <span className="font-mono">
            <span className="text-emerald-400">~/</span>nageen · AI Engineer
          </span>
          <span>© {new Date().getFullYear()} {profile.name}. Built with Next.js.</span>
        </div>
      </div>
    </footer>
  );
}
