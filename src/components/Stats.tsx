import { marqueeSkills } from "@/data/portfolio";

export default function Stats() {
  const doubled = [...marqueeSkills, ...marqueeSkills];
  return (
    <section className="border-b border-white/5">
      {/* marquee */}
      <div className="marquee-mask overflow-hidden py-5">
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
