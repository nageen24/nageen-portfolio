import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";
import ProjectDetailGallery from "@/components/ProjectDetailGallery";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Nageen Abid`,
    description: project.blurb,
    openGraph: { title: project.title, description: project.blurb },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="mx-auto max-w-5xl px-5 pb-28 pt-24 sm:px-8 sm:pt-28">
      <Link
        href="/#work"
        className="inline-flex items-center gap-1.5 text-sm text-zinc-400 transition-colors hover:text-white"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M11 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back to projects
      </Link>

      {/* hero gallery */}
      <div className="mt-6">
        {project.images?.length ? (
          <ProjectDetailGallery images={project.images} status={project.status} />
        ) : (
          <div
            className={`relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br sm:aspect-[16/8] ${project.accent}`}
          >
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                className="object-cover"
                sizes="100vw"
              />
            ) : (
              <>
                <div className="bg-grid absolute inset-0 opacity-40" />
                <span className="relative font-mono text-sm text-zinc-500">screenshot / demo →</span>
              </>
            )}
            <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-xs font-medium text-zinc-200 backdrop-blur">
              {project.status}
            </span>
          </div>
        )}
      </div>

      {/* header */}
      <div className="mt-10 max-w-3xl">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">{project.category}</p>
          {project.country && (
            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-zinc-400">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="9.5" r="2.3" />
              </svg>
              {project.country}
            </span>
          )}
        </div>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{project.title}</h1>
        <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">{project.blurb}</p>

        {project.myRole && (
          <div className="mt-6 rounded-xl border border-accent/20 bg-accent/5 p-4 text-sm leading-relaxed text-zinc-300">
            <span className="font-semibold text-accent-light">My role — </span>
            {project.myRole}
          </div>
        )}

        {/* tech chips */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-zinc-400"
            >
              {t}
            </span>
          ))}
        </div>

        {/* demo / code links */}
        {(project.demoUrl || project.codeUrl) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-light"
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
        )}
      </div>

      {/* detailed tech stack breakdown */}
      {project.techStack?.length ? (
        <div className="mt-16 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">/ tech stack</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">Under the hood</h2>
          <ul className="mt-6 space-y-4">
            {project.techStack.map((item) => (
              <li key={item.label} className="flex gap-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>
                  <span className="font-semibold text-zinc-100">{item.label} — </span>
                  {item.detail}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {/* workflow / how it works */}
      {project.workflow?.length ? (
        <div className="mt-16 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">/ how it works</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">End-to-end workflow</h2>

          <div className="relative mt-8 space-y-6 border-l border-white/10 pl-8">
            {project.workflow.map((phase) => (
              <div key={phase.title} className="relative">
                <span className="absolute -left-[2.35rem] top-0.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-ink" />
                <h3 className="text-base font-semibold text-zinc-100">{phase.title}</h3>
                {Array.isArray(phase.detail) ? (
                  <ul className="mt-2 space-y-2">
                    {phase.detail.map((line) => (
                      <li key={line} className="flex gap-2.5 text-sm leading-relaxed text-zinc-400">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                        {line}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{phase.detail}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-16 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">/ highlights</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">What it does</h2>
          <ul className="mt-6 space-y-3">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
