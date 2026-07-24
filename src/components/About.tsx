import { profile, experience, education } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="mb-12">
        <p className="font-mono text-xs uppercase tracking-widest text-emerald-400">
          / about
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Who I am
        </h2>
      </div>

      <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
        {/* bio */}
        <div>
          <p className="text-base leading-relaxed text-zinc-400">{profile.bio}</p>

          <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <h3 className="font-mono text-sm text-zinc-300">Education</h3>
            <p className="mt-3 text-sm font-medium text-zinc-200">{education.degree}</p>
            <p className="text-sm text-zinc-500">{education.school}</p>
            <p className="font-mono text-xs text-zinc-600">{education.period}</p>
            <div className="mt-4 space-y-2">
              {education.certs.map((c) => (
                <div key={c} className="flex gap-2 text-sm text-zinc-400">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* experience timeline */}
        <div>
          <h3 className="font-mono text-sm text-zinc-300">Experience</h3>
          <div className="mt-5 space-y-8 border-l border-white/10 pl-6">
            {experience.map((job) => (
              <div key={job.company} className="relative">
                <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-emerald-400 bg-[#0a0a0c]" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="text-base font-semibold text-white">
                    {job.role} · {job.company}
                  </h4>
                  <span className="font-mono text-xs text-zinc-500">{job.period}</span>
                </div>
                <ul className="mt-3 space-y-2">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-zinc-400">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
