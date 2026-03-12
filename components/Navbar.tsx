import { personalInfo } from "@/data/portfolio";

const links = [
  { label: "Accueil", href: "#home" },
  { label: "À propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Compétences", href: "#skills" },
  { label: "Expériences", href: "#experience" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="text-lg font-extrabold tracking-wide text-white transition hover:text-cyan-400"
        >
          {personalInfo.name}
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}

          <a
            href={personalInfo.cvUrl}
            target="_blank"
            className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400 hover:text-slate-950"
          >
            Mon CV
          </a>
        </nav>
      </div>
    </header>
  );
}