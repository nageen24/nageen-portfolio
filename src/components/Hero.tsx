import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/5"
    >
      {/* backdrop glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute top-10 right-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-3xl px-5 pt-28 pb-16 text-center sm:px-8 sm:pt-36 sm:pb-24">
        <div className="fade-up flex flex-col items-center">
          {profile.available && (
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium text-accent-light">
              <span className="pulse-dot h-2 w-2 rounded-full bg-accent" />
              Available for work
            </span>
          )}

          <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 font-mono text-sm text-accent-light sm:text-base">
            {profile.role} · {profile.location}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            {profile.tagline}
          </p>

          <a
            href="#work"
            className="mt-8 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03] hover:bg-accent-light"
          >
            View my work
          </a>
        </div>
      </div>
    </section>
  );
}
