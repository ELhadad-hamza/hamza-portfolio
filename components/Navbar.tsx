import { personalInfo } from "@/data/portfolio";

const links = [
  { label: "Accueil", href: "#home" },
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Expériences", href: "#experience" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <a href="#home" className="text-lg font-bold tracking-wide text-white">
          {personalInfo.name}
        </a>

        <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href={personalInfo.cvUrl}
            target="_blank"
            className="rounded-full border border-cyan-400 px-4 py-2 font-medium text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            Mon CV
          </a>
        </nav>
      </div>
    </header>
  );
}