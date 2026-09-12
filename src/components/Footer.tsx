import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 text-sm text-zinc-500 sm:flex-row sm:px-8">
        <span className="font-mono">
          <span className="text-emerald-400">~/</span>nageen · {profile.role}
        </span>

        <div className="flex items-center gap-5">
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-white">
            Email
          </a>
          <a href={profile.linkedin} className="transition-colors hover:text-white">
            LinkedIn
          </a>
          <a href={profile.github} className="transition-colors hover:text-white">
            GitHub
          </a>
        </div>

        <span>© {new Date().getFullYear()} {profile.name}</span>
      </div>
    </footer>
  );
}
