import { ArrowUpRight, BriefcaseBusiness, GraduationCap } from "lucide-react";

import { journey } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

export default function Journey() {
  return (
    <section
      id="education"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32"
    >
      {/* ================= HEADER ================= */}

      <Reveal>
        <div className="grid gap-8 border-b border-white/[0.08] pb-12 lg:grid-cols-[0.35fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              04 / Parcours
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              De la formation à des{" "}
              <span className="text-zinc-500">
                projets concrets.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-500">
              Mon parcours combine une base académique solide, une formation
              d&apos;ingénieur et des expériences pratiques autour du
              développement d&apos;applications web et métier.
            </p>
          </div>
        </div>
      </Reveal>

      {/* ================= TIMELINE ================= */}

      <div className="mt-6">
        {journey.map((item, index) => {
          const isExperience = item.type === "Expérience";

          return (
            <Reveal
              key={`${item.period}-${item.title}-${index}`}
              delay={index * 0.07}
            >
              <article
                className={`group grid gap-8 border-b border-white/[0.08] py-12 lg:grid-cols-[0.35fr_1fr] ${
                  item.featured ? "relative" : ""
                }`}
              >
                {/* LEFT */}

                <div>
                  <div className="lg:sticky lg:top-32">
                    <p className="text-sm font-medium text-zinc-500">
                      {item.period}
                    </p>

                    <div className="mt-4 flex items-center gap-2">
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-full border ${
                          item.featured
                            ? "border-cyan-300/20 bg-cyan-300/[0.08] text-cyan-300"
                            : "border-white/10 bg-white/[0.03] text-zinc-500"
                        }`}
                      >
                        {isExperience ? (
                          <BriefcaseBusiness size={14} />
                        ) : (
                          <GraduationCap size={14} />
                        )}
                      </span>

                      <span
                        className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                          item.featured
                            ? "text-cyan-300"
                            : "text-zinc-600"
                        }`}
                      >
                        {item.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* RIGHT */}

                <div>
                  {item.featured && (
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-3 py-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />

                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
                        Expérience récente
                      </span>
                    </div>
                  )}

                  <h3 className="max-w-4xl text-3xl font-semibold tracking-[-0.035em] text-white transition group-hover:text-cyan-100 sm:text-4xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium text-zinc-500">
                    {item.organization}
                  </p>

                  <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400">
                    {item.description}
                  </p>

                  {/* HIGHLIGHTS */}

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {item.highlights.map((highlight, highlightIndex) => (
                      <div
                        key={`${item.title}-${highlight}-${highlightIndex}`}
                        className="flex items-start gap-3 border-t border-white/[0.07] pt-4"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600 transition group-hover:bg-cyan-300" />

                        <p className="text-sm leading-6 text-zinc-500 transition group-hover:text-zinc-300">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* LINK FOR STAGE */}

                  {item.featured && (
                    <div className="mt-8">
                      <a
                        href="/#projects"
                        className="group/link inline-flex items-center gap-2 text-sm font-medium text-white"
                      >
                        Voir le projet Gestion de Stock

                        <ArrowUpRight
                          size={15}
                          className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                        />
                      </a>
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      {/* ================= FOOT ================= */}

      <Reveal delay={0.12}>
        <div className="grid gap-6 pt-10 lg:grid-cols-[0.35fr_1fr]">
          <div />

          <p className="max-w-3xl text-sm leading-7 text-zinc-600">
            Ce parcours continue d&apos;évoluer au fil de mes projets,
            expériences professionnelles et apprentissages en ingénierie
            logicielle.
          </p>
        </div>
      </Reveal>
    </section>
  );
}