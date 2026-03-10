import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Projets</p>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          Mes réalisations
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-cyan-400/40"
          >
            <h3 className="text-2xl font-semibold text-white">{project.title}</h3>

            <p className="mt-4 leading-7 text-slate-300">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-4">
              <a
                href={project.github}
                target="_blank"
                className="font-medium text-cyan-400 hover:text-cyan-300"
              >
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                className="font-medium text-white hover:text-cyan-300"
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