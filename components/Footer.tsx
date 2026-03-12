import { socials } from "@/data/portfolio";

const footerLinks = [
  { label: "Accueil", href: "#home" },
  { label: "À propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Compétences", href: "#skills" },
  { label: "Formation", href: "#education" },
  { label: "Expériences", href: "#experience" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/50 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
              Portfolio
            </p>
            <h3 className="mt-3 text-2xl font-bold text-white">
              EL HADAD HAMZA
            </h3>
            <p className="mt-4 max-w-sm leading-7 text-slate-400">
              Portfolio personnel dédié à la présentation de mon profil, de mes
              projets, de mes compétences et de mes coordonnées
              professionnelles.
            </p>

            <div className="mt-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
              hamzaelhadad.com
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
              Navigation
            </p>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-slate-300 transition hover:text-cyan-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
              Réseaux
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
              >
                GitHub
              </a>

              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
              >
                LinkedIn
              </a>

              <a
                href={socials.email}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
              >
                Email
              </a>
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-400">
              Basé à Rabat, Maroc • Disponible pour de nouveaux projets et
              collaborations.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 EL HADAD HAMZA. Tous droits réservés.</p>
          <p>Conçu avec Next.js, TypeScript et Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}