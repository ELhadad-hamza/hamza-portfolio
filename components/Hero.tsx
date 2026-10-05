import Image from "next/image";

import {
  ArrowDownRight,
  Download,
  Github,
  Linkedin,
  MapPin,
} from "lucide-react";

import { personalInfo, socials } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  ".NET",
  "Spring Boot",
  "MongoDB",
  "SQL Server",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-8 lg:pb-32 lg:pt-24"
    >
      {/* ================= HERO CONTENT ================= */}

      <div className="grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
        {/* ================= LEFT ================= */}

        <div>
          <Reveal>
            <div className="flex items-center gap-3 text-sm text-zinc-500">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>

              Disponible pour de nouvelles opportunités
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Software Engineering · Full Stack
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-5 max-w-4xl text-[3.3rem] font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[5.2rem]">
              Je transforme des idées en{" "}
              <span className="text-zinc-500">
                expériences numériques.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
              Je suis{" "}
              <span className="font-medium text-white">
                Hamza El Hadad
              </span>
              , élève ingénieur et développeur full-stack basé à Rabat. Je
              conçois des applications web modernes, de l&apos;interface
              jusqu&apos;au backend, avec une attention particulière portée à
              la qualité du code, à la structure et à l&apos;expérience
              utilisateur.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition duration-300 hover:bg-cyan-200"
              >
                Découvrir mes projets

                <ArrowDownRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </a>

              <a
                href={personalInfo.cvUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-white transition duration-300 hover:border-white/20 hover:bg-white/[0.08]"
              >
                <Download size={16} />

                Télécharger CV
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <MapPin size={15} />

                {personalInfo.location}
              </div>

              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition hover:text-white"
              >
                <Github size={15} />

                GitHub
              </a>

              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition hover:text-white"
              >
                <Linkedin size={15} />

                LinkedIn
              </a>
            </div>
          </Reveal>
        </div>

        {/* ================= PHOTO ================= */}

        <Reveal delay={0.12} y={30}>
          <div className="relative mx-auto aspect-square w-full max-w-[470px]">
            {/* GLOW */}

            <div className="absolute inset-4 rounded-full bg-cyan-300/[0.08] blur-3xl" />

            {/* PHOTO */}

            <div className="relative aspect-square overflow-hidden rounded-full border border-white/[0.10] bg-[#101214] shadow-2xl shadow-black/40">
              <Image
                src="/profile-new.jpg"
                alt={personalInfo.name}
                fill
                priority
                sizes="(max-width: 1024px) 85vw, 470px"
                className="object-cover"
              />
            </div>

            {/* FOCUS BADGE */}

            <div className="absolute -left-3 top-12 hidden rounded-2xl border border-white/10 bg-[#0d0f11]/90 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600">
                Focus
              </p>

              <p className="mt-1.5 text-sm font-medium text-white">
                Full-Stack Development
              </p>
            </div>

            {/* CURRENTLY BADGE */}

            <div className="absolute bottom-4 right-0 hidden rounded-2xl border border-white/10 bg-[#0d0f11]/90 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600">
                Currently
              </p>

              <p className="mt-1.5 text-sm font-medium text-white">
                Engineering Student @ EMSI
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ================= TECHNOLOGIES ================= */}

      <Reveal delay={0.3}>
        <div className="mt-20 border-y border-white/[0.08] py-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <p className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-600">
              Core stack
            </p>

            <div className="flex flex-wrap gap-x-7 gap-y-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="text-sm font-medium text-zinc-400 transition hover:text-white"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}