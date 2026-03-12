import Image from "next/image";
import { projects } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import MotionCard from "@/components/MotionCard";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Projets
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Mes réalisations
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
            Une sélection de projets qui reflètent mon approche du développement :
            interface moderne, structure claire et solutions adaptées à des besoins
            concrets.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => {
          const hasDemo = project.demo && project.demo !== "#";

          return (
            <Reveal key={project.title} delay={index * 0.08}>
  <MotionCard>
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition duration-300 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/10">
      <div className="relative h-56 w-full overflow-hidden border-b border-white/10">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-cyan-400/10 via-slate-900 to-blue-500/10" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

        <div className="absolute left-4 top-4">
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Projet {index + 1}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-8">
        <h3 className="text-2xl font-bold text-white transition group-hover:text-cyan-300">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-slate-300">
          {project.description}
        </p>

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
      </div>
    </article>
  </MotionCard>
</Reveal>
          );
        })}
      </div>
    </section>
  );
}