import { personalInfo, socials } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid min-h-[92vh] max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2"
    >
      <div>
        <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Disponible pour de nouveaux projets
        </div>

        <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">
          {personalInfo.name.split(" ")[0]} {personalInfo.name.split(" ")[1]}{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            {personalInfo.name.split(" ").slice(2).join(" ")}
          </span>
        </h1>

        <h2 className="mt-5 text-2xl font-semibold text-slate-200 md:text-3xl">
          {personalInfo.role}
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          {personalInfo.tagline} Je développe des interfaces modernes,
          responsives et professionnelles avec une attention particulière à la
          qualité du code, à la performance et à l’expérience utilisateur.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02] hover:bg-cyan-300"
          >
            Voir mes projets
          </a>

          <a
            href={personalInfo.cvUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
          >
            Télécharger mon CV
          </a>

          <a
            href="#contact"
            className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-3 font-semibold text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400 hover:text-slate-950"
          >
            Me contacter
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
          >
            GitHub
          </a>

          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
          >
            LinkedIn
          </a>

          <a
            href={socials.email}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
          >
            Email
          </a>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
            <p className="text-2xl font-bold text-white">4+</p>
            <p className="text-sm text-slate-400">Projets réalisés</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
            <p className="text-2xl font-bold text-white">Full Stack</p>
            <p className="text-sm text-slate-400">Web & software</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
            <p className="text-2xl font-bold text-white">100%</p>
            <p className="text-sm text-slate-400">Responsive design</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 rounded-[2rem] bg-cyan-400/10 blur-3xl" />

        <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md md:p-8">
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                  Profil
                </p>
                <h3 className="mt-3 text-3xl font-bold text-white">
                  Développeur web moderne
                </h3>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-xl font-bold text-cyan-300">
                H
              </div>
            </div>

            <p className="mt-5 leading-8 text-slate-400">
              Je conçois des applications web modernes, structurées et orientées
              performance. Mon objectif est de créer des solutions utiles avec
              une interface propre, une architecture claire et une vraie valeur
              utilisateur.
            </p>

            <div className="mt-8 space-y-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-300">
                Frontend moderne avec React, Next.js et Tailwind CSS
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-300">
                Backend structuré avec Node.js, .NET, Java et Spring Boot
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-300">
                Gestion de bases de données avec MongoDB, MySQL et SQL Server
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <p className="text-sm text-slate-400">Localisation</p>
                <p className="mt-1 font-semibold text-white">
                  {personalInfo.location}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <p className="text-sm text-slate-400">Contact</p>
                <p className="mt-1 font-semibold text-white">
                  {personalInfo.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}