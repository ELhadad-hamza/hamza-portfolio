import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { personalInfo, socials } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08]">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3 md:items-end">
          {/* BRAND */}

          <div>
            <Link
              href="/#home"
              className="group inline-flex items-center"
            >
              <span className="text-xl font-black tracking-[-0.05em] text-white">
                HAMZA
              </span>

              <span className="ml-1.5 h-2 w-2 rounded-full bg-cyan-300 transition-transform duration-300 group-hover:scale-150" />
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-600">
              Ingénierie logicielle, développement full-stack et création
              d&apos;applications métier.
            </p>
          </div>

          {/* NAVIGATION */}

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm md:justify-center">
            <Link
              href="/#projects"
              className="text-zinc-500 transition hover:text-white"
            >
              Projets
            </Link>

            <Link
              href="/#about"
              className="text-zinc-500 transition hover:text-white"
            >
              À propos
            </Link>

            <Link
              href="/#skills"
              className="text-zinc-500 transition hover:text-white"
            >
              Expertise
            </Link>

            <Link
              href="/#education"
              className="text-zinc-500 transition hover:text-white"
            >
              Parcours
            </Link>

            <Link
              href="/#contact"
              className="text-zinc-500 transition hover:text-white"
            >
              Contact
            </Link>
          </div>

          {/* SOCIAL */}

          <div className="md:text-right">
            <div className="flex flex-wrap gap-4 md:justify-end">
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 text-sm text-zinc-500 transition hover:text-white"
              >
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
                className="group inline-flex items-center gap-1.5 text-sm text-zinc-500 transition hover:text-white"
              >
                LinkedIn

                <ArrowUpRight
                  size={13}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            <p className="mt-4 text-xs text-zinc-700">
              © {year} {personalInfo.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}