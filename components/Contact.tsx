import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { personalInfo, socials } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const phoneHref = `tel:${personalInfo.phone.replace(/\s/g, "")}`;

  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32"
    >
      {/* ================= TOP ================= */}

      <Reveal>
        <div className="border-t border-white/[0.08] pt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            05 / Contact
          </p>
        </div>
      </Reveal>

      {/* ================= MAIN CTA ================= */}

      <div className="mt-12 grid gap-14 lg:grid-cols-[1fr_0.55fr] lg:items-end lg:gap-20">
        <div>
          <Reveal delay={0.06}>
            <h2 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[5.5rem]">
              Construisons quelque chose{" "}
              <span className="text-zinc-500">
                d&apos;utile.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
              Vous avez une opportunité, un projet, une proposition de stage ou
              simplement envie d&apos;échanger autour du développement
              logiciel ? Je serai ravi d&apos;en discuter avec vous.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-10">
              <a
                href={socials.email}
                className="group inline-flex items-center gap-4 rounded-full bg-white px-7 py-4 text-base font-semibold text-black transition duration-300 hover:bg-cyan-200"
              >
                <Mail size={18} />

                Me contacter par email

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </Reveal>
        </div>

        {/* ================= CONTACT INFO ================= */}

        <Reveal delay={0.14} y={20}>
          <div className="border-t border-white/[0.08]">
            {/* EMAIL */}

            <a
              href={socials.email}
              className="group flex items-center justify-between gap-6 border-b border-white/[0.08] py-6"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-500 transition group-hover:border-cyan-300/20 group-hover:text-cyan-300">
                  <Mail size={16} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-medium text-zinc-300 transition group-hover:text-white">
                    {personalInfo.email}
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={16}
                className="text-zinc-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
              />
            </a>

            {/* PHONE */}

            <a
              href={phoneHref}
              className="group flex items-center justify-between gap-6 border-b border-white/[0.08] py-6"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-500 transition group-hover:border-cyan-300/20 group-hover:text-cyan-300">
                  <Phone size={16} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
                    Téléphone
                  </p>

                  <p className="mt-1 text-sm font-medium text-zinc-300 transition group-hover:text-white">
                    {personalInfo.phone}
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={16}
                className="text-zinc-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
              />
            </a>

            {/* LOCATION */}

            <div className="flex items-center gap-4 border-b border-white/[0.08] py-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-500">
                <MapPin size={16} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
                  Localisation
                </p>

                <p className="mt-1 text-sm font-medium text-zinc-300">
                  {personalInfo.location}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ================= SOCIALS ================= */}

      <Reveal delay={0.22}>
        <div className="mt-16 flex flex-col gap-6 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-600">
            Retrouvez également mon travail et mon parcours en ligne.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-zinc-400 transition hover:border-white/20 hover:text-white"
            >
              <Github size={15} />
              GitHub
              <ArrowUpRight
                size={13}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-zinc-400 transition hover:border-white/20 hover:text-white"
            >
              <Linkedin size={15} />
              LinkedIn
              <ArrowUpRight
                size={13}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}