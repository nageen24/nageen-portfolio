import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="mb-12">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          / stack
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Tools I build with
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-white/20"
          >
            <h3 className="font-mono text-sm text-zinc-300">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 text-xs text-zinc-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
