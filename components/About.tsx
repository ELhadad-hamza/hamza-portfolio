import { ArrowUpRight } from "lucide-react";

import { personalInfo, socials } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32"
    >
      {/* HEADER */}
      <Reveal>
        <div className="grid gap-8 border-b border-white/[0.08] pb-12 lg:grid-cols-[0.35fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              02 / À propos
            </p>
          </div>

          <h2 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            J&apos;aime comprendre un problème avant de{" "}
            <span className="text-zinc-500">
              construire la solution.
            </span>
          </h2>
        </div>
      </Reveal>

      {/* MAIN CONTENT */}
      <div className="grid gap-12 py-14 lg:grid-cols-[0.35fr_1fr] lg:gap-16">
        {/* LEFT */}
        <Reveal>
          <div className="lg:sticky lg:top-32">
            <p className="text-sm text-zinc-600">
              Profil
            </p>

            <p className="mt-3 text-lg font-medium text-white">
              Software Engineering Student
            </p>

            <p className="mt-1 text-sm text-zinc-500">
              {personalInfo.location}
            </p>
          </div>
        </Reveal>

        {/* RIGHT */}
        <div>
          <Reveal delay={0.08}>
            <p className="max-w-4xl text-2xl font-medium leading-[1.55] tracking-[-0.025em] text-zinc-200 sm:text-3xl">
              Je suis{" "}
              <span className="text-white">
                Hamza El Hadad
              </span>
              , élève ingénieur à l&apos;EMSI et développeur full-stack.
              Mon parcours en Mathématiques, Informatique et ingénierie
              logicielle m&apos;a appris à aborder un projet avec méthode :
              analyser, structurer, développer puis améliorer.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-10 grid gap-8 border-t border-white/[0.08] pt-10 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
                  Ce que je construis
                </p>

                <p className="mt-4 leading-8 text-zinc-400">
                  Des applications web et métier qui associent une interface
                  claire, une logique backend structurée et une gestion
                  cohérente des données.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
                  Ma manière de travailler
                </p>

                <p className="mt-4 leading-8 text-zinc-400">
                  Je privilégie une architecture compréhensible, du code
                  maintenable et des choix techniques adaptés au besoin réel
                  plutôt que la complexité inutile.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 grid gap-8 border-t border-white/[0.08] pt-10 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
                  Aujourd&apos;hui
                </p>

                <p className="mt-4 leading-8 text-zinc-400">
                  Je développe mes compétences à travers ma formation
                  d&apos;ingénieur, mes projets personnels et des applications
                  métier réalisées dans un contexte professionnel.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
                  Mon objectif
                </p>

                <p className="mt-4 leading-8 text-zinc-400">
                  Continuer à progresser sur des projets exigeants et rejoindre
                  des équipes où je peux apporter mes compétences tout en
                  renforçant mon expérience en ingénierie logicielle.
                </p>
              </div>
            </div>
          </Reveal>

          {/* LINKS */}
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-200"
              >
                Voir mon LinkedIn

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-zinc-300 transition hover:border-white/20 hover:text-white"
              >
                Explorer mon GitHub

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <Reveal delay={0.28}>
        <div className="border-t border-white/[0.08] pt-8">
          <p className="max-w-3xl text-sm leading-7 text-zinc-600">
            Intéressé par le développement full-stack, les applications métier,
            l&apos;architecture logicielle et la création de produits numériques
            utiles.
          </p>
        </div>
      </Reveal>
    </section>
  );
}