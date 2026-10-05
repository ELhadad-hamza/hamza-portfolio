import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

import { projects } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

export default function Projects() {
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  const featuredHasDemo =
    featuredProject.demo && featuredProject.demo !== "#";

  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32"
    >
      {/* ================= HEADER ================= */}

      <Reveal>
        <div className="flex flex-col gap-8 border-b border-white/[0.08] pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Selected Work
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Des projets pensés pour résoudre des{" "}
              <span className="text-zinc-500">
                problèmes concrets.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-zinc-500">
            Une sélection de projets qui reflètent ma manière de concevoir,
            structurer et développer des applications web et logicielles.
          </p>
        </div>
      </Reveal>

      {/* ================= FEATURED PROJECT ================= */}

      <Reveal delay={0.08}>
        <article className="group mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
          {/* IMAGE */}

          <Link
            href={`/projects/${featuredProject.slug}`}
            className="relative block overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#101214]"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={featuredProject.image}
                alt={featuredProject.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>

            <div className="absolute left-5 top-5">
              <span className="rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                Projet phare
              </span>
            </div>
          </Link>

          {/* CONTENT */}

          <div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-zinc-600">
                01
              </span>

              <div className="h-px w-10 bg-white/10" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                {featuredProject.category}
              </span>
            </div>

            <h3 className="mt-7 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              {featuredProject.title}
            </h3>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              {featuredProject.description}
            </p>

            {/* ROLE */}

            <div className="mt-8 border-y border-white/[0.08] py-5">
              <div className="grid gap-4 sm:grid-cols-[120px_1fr]">
                <p className="text-sm text-zinc-600">
                  Mon rôle
                </p>

                <p className="text-sm font-medium text-zinc-300">
                  {featuredProject.role}
                </p>
              </div>
            </div>

            {/* STACK */}

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
                Technologies
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {featuredProject.stack.map((tech, techIndex) => (
                  <span
                    key={`${featuredProject.slug}-${tech}-${techIndex}`}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* BUTTONS */}

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/projects/${featuredProject.slug}`}
                className="group/button inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-cyan-200"
              >
                Voir l&apos;étude de cas

                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                />
              </Link>

              <a
                href={featuredProject.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm font-medium text-zinc-300 transition hover:border-white/20 hover:text-white"
              >
                <Github size={16} />
                GitHub
              </a>

              {featuredHasDemo && (
                <a
                  href={featuredProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm font-medium text-zinc-300 transition hover:border-white/20 hover:text-white"
                >
                  Démo
                  <ArrowUpRight size={15} />
                </a>
              )}
            </div>
          </div>
        </article>
      </Reveal>

      {/* ================= OTHER PROJECTS ================= */}

      <div className="mt-24">
        <Reveal>
          <div className="mb-10 flex items-end justify-between border-b border-white/[0.08] pb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-600">
                Plus de projets
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                Autres réalisations
              </h3>
            </div>

            <span className="hidden text-sm text-zinc-600 sm:block">
              {String(otherProjects.length).padStart(2, "0")} projets
            </span>
          </div>
        </Reveal>

        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          {otherProjects.map((project, index) => {
            const hasDemo = project.demo && project.demo !== "#";

            return (
              <Reveal
                key={project.slug}
                delay={index * 0.08}
              >
                <article className="group">
                  {/* PROJECT IMAGE */}

                  <Link
                    href={`/projects/${project.slug}`}
                    className="relative block overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#101214]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition duration-700 ease-out group-hover:scale-[1.045]"
                      />

                      <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />
                    </div>

                    <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
                      <ArrowUpRight size={17} />
                    </div>
                  </Link>

                  {/* PROJECT CONTENT */}

                  <div className="mt-6">
                    <div className="flex items-center justify-between gap-6">
                      <p className="text-xs font-medium text-zinc-600">
                        {String(index + 2).padStart(2, "0")}
                      </p>

                      <div className="h-px flex-1 bg-white/[0.06]" />

                      <p className="text-xs uppercase tracking-[0.15em] text-zinc-600">
                        {project.category}
                      </p>
                    </div>

                    <Link href={`/projects/${project.slug}`}>
                      <h4 className="mt-5 text-3xl font-semibold tracking-[-0.035em] text-white transition group-hover:text-cyan-200">
                        {project.title}
                      </h4>
                    </Link>

                    <p className="mt-4 max-w-xl leading-7 text-zinc-500">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                      {project.stack.map((tech, techIndex) => (
                        <span
                          key={`${project.slug}-${tech}-${techIndex}`}
                          className="text-sm text-zinc-500"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-5">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="group/link inline-flex items-center gap-2 text-sm font-medium text-white"
                      >
                        Voir le projet

                        <ArrowUpRight
                          size={15}
                          className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                        />
                      </Link>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white"
                      >
                        <Github size={14} />
                        GitHub
                      </a>

                      {hasDemo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-zinc-500 transition hover:text-white"
                        >
                          Live
                          <ArrowUpRight size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}