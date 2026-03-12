import { Mail, BriefcaseBusiness, MessageCircleMore } from "lucide-react";
import Reveal from "@/components/Reveal";
import { personalInfo } from "@/data/portfolio";

export default function Availability() {
  return (
    <section id="availability" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <div className="overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-900/80 to-blue-500/10 p-8 backdrop-blur-sm md:p-12">
          <div className="grid items-center gap-10 md:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                Disponibilité
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl">
                Ouvert aux opportunités, aux collaborations et aux nouveaux
                projets
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                Je suis actuellement disponible pour échanger autour d’un stage,
                d’un projet académique, d’une collaboration ou d’une opportunité
                liée au développement web et logiciel.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <BriefcaseBusiness size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Stage</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Ouvert aux opportunités professionnelles dans le
                    développement web et logiciel.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <MessageCircleMore size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Collaboration
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Disponible pour échanger, apprendre et participer à des
                    projets concrets.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <Mail size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Contact</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Réponse rapide par email pour toute demande sérieuse ou prise
                    de contact.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-8 shadow-2xl shadow-cyan-500/10">
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                  Contact rapide
                </p>

                <h3 className="mt-4 text-2xl font-bold text-white">
                  Discutons ensemble
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  Vous pouvez me contacter directement par email ou consulter mes
                  profils professionnels.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="mt-1 font-semibold text-white">
                      {personalInfo.email}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-slate-400">Téléphone</p>
                    <p className="mt-1 font-semibold text-white">
                      {personalInfo.phone}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-slate-400">Localisation</p>
                    <p className="mt-1 font-semibold text-white">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#contact"
                    className="rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-300"
                  >
                    Me contacter
                  </a>

                  <a
                    href={personalInfo.cvUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
                  >
                    Voir mon CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}