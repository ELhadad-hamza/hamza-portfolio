import { personalInfo, socials } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {personalInfo.name}. Tous droits réservés.</p>

        <div className="flex gap-4">
          <a href={socials.github} target="_blank" className="hover:text-cyan-400">
            GitHub
          </a>
          <a href={socials.linkedin} target="_blank" className="hover:text-cyan-400">
            LinkedIn
          </a>
          <a href={socials.email} className="hover:text-cyan-400">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}