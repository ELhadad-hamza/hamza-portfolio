import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailsPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const hasDemo = project.demo && project.demo !== "#";

  return (
    <main>
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Projet détaillé
          </p>
          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            {project.fullDescription}
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <div className="relative h-[260px] w-full md:h-[420px]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
              Problème
            </p>
            <p className="mt-4 leading-8 text-slate-300">{project.problem}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
              Solution
            </p>
            <p className="mt-4 leading-8 text-slate-300">{project.solution}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
              Résultat
            </p>
            <p className="mt-4 leading-8 text-slate-300">{project.impact}</p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-400">Rôle</p>
            <p className="mt-2 text-lg font-semibold text-white">
              {project.role}
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-400">Technologies</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-400">Liens</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
              >
                GitHub
              </a>

              {hasDemo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
                >
                  Démo
                </a>
              ) : (
                <span className="rounded-full border border-white/10 bg-slate-900/60 px-4 py-2 text-sm font-semibold text-slate-500">
                  Démo bientôt
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold text-white">
              Fonctionnalités principales
            </h2>

            <ul className="mt-5 space-y-3 text-slate-300">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-2xl border border-white/10 bg-slate-900/50 px-4 py-3"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold text-white">Bilan du projet</h2>
            <p className="mt-5 leading-8 text-slate-300">{project.result}</p>
          </div>
        </div>

        <div className="mt-10">
          <a
            href="/#projects"
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
          >
            Retour aux projets
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}