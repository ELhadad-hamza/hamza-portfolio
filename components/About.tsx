import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";

import { personalInfo, socials } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32"
    >
      <Reveal>
        <div className="border-b border-white/[0.08] pb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            À propos
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            Une approche technique avec une vraie{" "}
            <span className="text-zinc-500">
              attention au produit.
            </span>
          </h2>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        {/* PHOTO */}

        <Reveal y={30}>
          <div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#101214]">
              <Image
                src="/profile-new.jpg"
                alt={personalInfo.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 text-sm text-zinc-300">
                  <MapPin size={15} />
                  {personalInfo.location}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* CONTENT */}

        <div>
          <Reveal delay={0.08}>
            <p className="text-2xl font-medium leading-[1.55] tracking-[-0.025em] text-zinc-200 sm:text-3xl">
              Je suis{" "}
              <span className="text-white">
                Hamza El Hadad
              </span>
              , élève ingénieur à l&apos;EMSI, avec un parcours initial en
              Mathématiques et Informatique.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-8 space-y-6 text-base leading-8 text-zinc-500">
              <p>
                Mon parcours m&apos;a permis de développer une approche à la
                fois analytique et pratique du développement logiciel. J&apos;aime
                comprendre un besoin, structurer une solution puis transformer
                cette réflexion en une application claire et utilisable.
              </p>

              <p>
                Je travaille aussi bien sur la partie frontend que backend,
                avec un intérêt particulier pour les applications métier,
                l&apos;architecture des données et les expériences utilisateur
                simples et efficaces.
              </p>

              <p>
                À travers mes projets académiques, personnels et mon expérience
                de stage, je cherche à construire des solutions qui ne sont pas
                seulement fonctionnelles, mais également propres,
                maintenables et pertinentes pour l&apos;utilisateur.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-200"
              >
                LinkedIn

                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-zinc-300 transition hover:border-white/20 hover:text-white"
              >
                GitHub
                <ArrowUpRight size={15} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}