import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/5"
    >
      {/* backdrop glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-10 right-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pt-28 pb-16 sm:px-8 sm:pt-36 sm:pb-24 md:grid-cols-[1.4fr_1fr] md:items-center">
        {/* left: text */}
        <div className="fade-up">
          {profile.available && (
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 text-xs font-medium text-emerald-300">
              <span className="pulse-dot h-2 w-2 rounded-full bg-emerald-400" />
              Available for work
            </span>
          )}

          <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 font-mono text-sm text-emerald-400 sm:text-base">
            {profile.role} · {profile.location}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
            >
              View my work
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-white/25 hover:bg-white/5"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 text-sm text-zinc-500">
            <a href={profile.github} className="transition-colors hover:text-white">
              GitHub
            </a>
            <a href={profile.linkedin} className="transition-colors hover:text-white">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="transition-colors hover:text-white">
              Email
            </a>
          </div>
        </div>

        {/* right: terminal card */}
        <div className="fade-up hidden md:block">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#101014] shadow-2xl">
            <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
              <span className="ml-3 font-mono text-xs text-zinc-500">agent.py</span>
            </div>
            <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed text-zinc-300">
              <code>
{`> deploy multi-agent pipeline
`}<span className="text-emerald-400">✓</span>{` booking synced   (Beds24 → Airtable)
`}<span className="text-emerald-400">✓</span>{` door PIN issued  (Seam)
`}<span className="text-emerald-400">✓</span>{` invoice sent     (Stripe · PDF)
`}<span className="text-emerald-400">✓</span>{` guest messaged   (GPT · multilingual)

`}<span className="text-zinc-500">{`# 100% of lifecycle, 0 manual steps`}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
