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

function LinkIcon({ type }: { type: "live" | "code" | "demo" }) {
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

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== project.slug);

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
        <p className="font-mono text-xs uppercase tracking-widest text-accent">{project.category}</p>
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

        {/* links */}
        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                link.type === "code"
                  ? "border border-white/10 text-zinc-200 hover:border-white/25 hover:bg-white/5"
                  : "bg-accent text-white hover:bg-accent-light"
              }`}
            >
              <LinkIcon type={link.type} />
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* workflow / how it works */}
      {project.workflow?.length ? (
        <div className="mt-16 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">/ how it works</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">End-to-end workflow</h2>

          <div className="relative mt-8 space-y-6 border-l border-white/10 pl-8">
            {project.workflow.map((phase) => (
              <div key={phase.title} className="relative">
                <span className="absolute -left-[2.35rem] top-0.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-[#08080f]" />
                <h3 className="text-base font-semibold text-zinc-100">{phase.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{phase.detail}</p>
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

      {/* other projects */}
      <div className="mt-20 border-t border-white/5 pt-10">
        <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">/ more projects</p>
        <div className="mt-4 flex flex-wrap gap-3">
          {others.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-accent/40 hover:text-white"
            >
              {p.title}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
