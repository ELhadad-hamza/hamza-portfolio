import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          Projets
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          Mes réalisations
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
          Une sélection de projets qui reflètent mon approche du développement :
          des interfaces modernes, une structure claire et des solutions pensées
          pour répondre à des besoins concrets.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => {
          const hasDemo = project.demo && project.demo !== "#";

          return (
            <article
              key={project.title}
              className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="mb-6 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-blue-500/10 p-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    Projet {index + 1}
                  </span>

                  <span className="text-sm font-medium text-slate-400">
                    {project.stack[0]}
                  </span>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-white transition group-hover:text-cyan-300">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Application web moderne • Interface responsive • Structure
                    professionnelle
                  </p>
                </div>
              </div>

              <p className="leading-7 text-slate-300">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15 hover:text-cyan-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400 hover:text-slate-950"
                >
                  Voir GitHub
                </a>

                {hasDemo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
                  >
                    Voir la démo
                  </a>
                ) : (
                  <span className="rounded-full border border-white/10 bg-slate-900/60 px-5 py-2.5 text-sm font-semibold text-slate-500">
                    Démo bientôt
                  </span>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}