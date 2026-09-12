import Image from "next/image";
import { projects, type Project } from "@/data/portfolio";
import ProjectGallery from "./ProjectGallery";

function LinkIcon({ type }: { type: Project["links"][number]["type"] }) {
  if (type === "code") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "demo") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="6 4 20 12 6 20 6 4" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 === 1;
  return (
    <article className="grid gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 md:grid-cols-2 md:items-center md:gap-8 md:p-8">
      {/* media panel */}
      <div className={reversed ? "md:order-2" : ""}>
        {project.images?.length ? (
          <ProjectGallery images={project.images} status={project.status} />
        ) : (
          <div
            className={`relative flex aspect-video items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${project.accent}`}
          >
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            ) : (
              <>
                <div className="bg-grid absolute inset-0 opacity-40" />
                <span className="relative font-mono text-xs text-zinc-500">
                  screenshot / demo →
                </span>
              </>
            )}
            <span className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] font-medium text-zinc-300 backdrop-blur">
              {project.status}
            </span>
          </div>
        )}
      </div>

      {/* text */}
      <div className={reversed ? "md:order-1" : ""}>
        <p className="font-mono text-xs uppercase tracking-widest text-emerald-400">
          {project.category}
        </p>
        <h3 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">{project.blurb}</p>

        <ul className="mt-4 space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2 text-sm text-zinc-400">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-zinc-400"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                link.type === "code"
                  ? "border border-white/10 text-zinc-200 hover:border-white/25 hover:bg-white/5"
                  : "bg-emerald-400 text-black hover:bg-emerald-300"
              }`}
            >
              <LinkIcon type={link.type} />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="border-y border-white/5 bg-[#0b0b0e]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-emerald-400">
            / work
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Projects
          </h2>
          <p className="mt-3 max-w-xl text-zinc-400">
            End-to-end AI products — shipped and running in production.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
