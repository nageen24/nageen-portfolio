import { tools } from "./toolIcons";

export default function Stats() {
  const doubled = [...tools, ...tools];
  return (
    <section className="border-b border-white/5">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* tool marquee */}
        <div className="marquee-mask overflow-hidden py-5">
          <div className="animate-marquee flex w-max gap-3">
            {doubled.map((tool, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-xs text-zinc-400"
              >
                {tool.icon ? (
                  <tool.icon className="h-3.5 w-3.5 text-zinc-500" />
                ) : (
                  <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white/10 text-[8px] font-bold leading-none text-zinc-500">
                    {tool.abbr}
                  </span>
                )}
                {tool.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
