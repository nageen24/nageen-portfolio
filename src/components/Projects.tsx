import Image from "next/image";
import Link from "next/link";
import { projects, type Project } from "@/data/portfolio";
import ProjectGallery from "./ProjectGallery";

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
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          {project.category}
        </p>
        <h3 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">{project.blurb}</p>

        {project.highlights.length > 0 && (
          <ul className="mt-4 space-y-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2 text-sm text-zinc-400">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {h}
              </li>
            ))}
          </ul>
        )}

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
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03] hover:bg-accent-light"
          >
            View details
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-white/25 hover:bg-white/5"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="6 4 20 12 6 20 6 4" strokeLinejoin="round" />
              </svg>
              View Demo
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-white/25 hover:bg-white/5"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              View Code
            </a>
          )}
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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
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
