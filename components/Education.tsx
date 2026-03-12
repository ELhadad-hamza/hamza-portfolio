import { GraduationCap, CalendarDays, FolderKanban } from "lucide-react";

const educationItems = [
  {
    title: "Cycle Ingénieur en Informatique et Réseaux",
    school: "EMSI Rabat",
    period: "En cours",
    description:
      "Formation d’ingénieur orientée développement logiciel, technologies web, bases de données, architecture applicative et bonnes pratiques de conception.",
    icon: GraduationCap,
  },
  {
    title: "Licence en Mathématiques et Informatique",
    school: "Faculté des Sciences de Rabat",
    period: "2023 - 2024",
    description:
      "Acquisition de bases solides en algorithmique, logique, programmation, modélisation et résolution de problèmes.",
    icon: GraduationCap,
  },
  {
    title: "Projet de Fin d’Études — Licence",
    school: "Système de gestion des travaux de construction et d’aménagement",
    period: "2023 - 2024",
    description:
      "Conception d’une plateforme collaborative pour améliorer la gestion des tâches, la communication entre acteurs et le suivi des projets de construction.",
    icon: FolderKanban,
  },
];

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          Formation
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          Parcours académique
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
          Mon parcours combine une base scientifique solide, une formation
          d’ingénieur orientée développement et des projets appliqués centrés
          sur des besoins réels.
        </p>
      </div>

      <div className="space-y-6">
        {educationItems.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <Icon size={26} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white transition group-hover:text-cyan-300">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-base font-medium text-slate-300">
                      {item.school}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-4 py-2 text-sm text-slate-300">
                  <CalendarDays size={16} className="text-cyan-300" />
                  {item.period}
                </div>
              </div>

              <p className="mt-5 max-w-4xl leading-8 text-slate-400">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-slate-400">École actuelle</p>
          <p className="mt-2 text-lg font-semibold text-white">EMSI Rabat</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-slate-400">Diplôme obtenu</p>
          <p className="mt-2 text-lg font-semibold text-white">
            Licence Mathématiques & Informatique
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-slate-400">Projet marquant</p>
          <p className="mt-2 text-lg font-semibold text-white">
            PFE en gestion de projets de construction
          </p>
        </div>
      </div>
    </section>
  );
}