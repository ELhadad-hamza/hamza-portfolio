import {
  MonitorSmartphone,
  ServerCog,
  Database,
  Rocket,
} from "lucide-react";

const services = [
  {
    title: "Développement Frontend",
    description:
      "Création d’interfaces modernes, responsives et élégantes avec une attention particulière à l’expérience utilisateur et à la qualité visuelle.",
    icon: MonitorSmartphone,
    points: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Développement Backend",
    description:
      "Conception de la logique serveur, structuration des API et mise en place de solutions backend robustes, maintenables et bien organisées.",
    icon: ServerCog,
    points: ["Node.js", ".NET", "Spring Boot"],
  },
  {
    title: "Gestion de Bases de Données",
    description:
      "Modélisation et gestion des données pour des applications web et logicielles avec des solutions adaptées aux besoins du projet.",
    icon: Database,
    points: ["MongoDB", "MySQL", "SQL Server"],
  },
  {
    title: "Déploiement & Intégration",
    description:
      "Mise en ligne de projets, intégration de contenu, optimisation de l’interface et création d’un rendu final professionnel et prêt à être présenté.",
    icon: Rocket,
    points: ["Vercel", "GitHub", "Portfolio & apps web"],
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          Services
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          Ce que je peux réaliser
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
          Je conçois des solutions web modernes, structurées et orientées
          performance, en combinant développement, design d’interface et mise en
          production.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article
              key={service.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition group-hover:bg-cyan-400/15">
                  <Icon size={26} />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white transition group-hover:text-cyan-300">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-300">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.points.map((point) => (
                  <span
                    key={point}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}