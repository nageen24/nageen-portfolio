import { stats, marqueeSkills } from "@/data/portfolio";

export default function Stats() {
  const doubled = [...marqueeSkills, ...marqueeSkills];
  return (
    <section className="border-b border-white/5">
      {/* stat numbers */}
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-white/5 px-5 sm:px-8 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-[#0a0a0c] px-4 py-8 text-center sm:py-10">
            <div className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {s.value}
            </div>
            <div className="mt-1 text-xs text-zinc-500 sm:text-sm">{s.label}</div>
          </div>
        ))}
      </div>

      {/* marquee */}
      <div className="marquee-mask overflow-hidden border-t border-white/5 py-5">
        <div className="animate-marquee flex w-max gap-3">
          {doubled.map((skill, i) => (
            <span
              key={i}
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-xs text-zinc-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
