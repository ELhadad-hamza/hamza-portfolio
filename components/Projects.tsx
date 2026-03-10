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
          Une sélection de projets qui illustrent ma manière de concevoir des
          interfaces modernes, de structurer le code et de résoudre des besoins
          concrets.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/10"
          >
            <div className="mb-6 h-40 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-blue-500/10" />

            <h3 className="text-2xl font-bold text-white">{project.title}</h3>

            <p className="mt-4 leading-7 text-slate-300">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-5">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-cyan-400 transition hover:text-cyan-300"
              >
                GitHub
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-white transition hover:text-cyan-300"
              >
                Démo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}