import { personalInfo, socials } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid min-h-[92vh] max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2"
    >
      <div>
        <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Bienvenue sur mon portfolio
        </div>

        <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">
          EL HADAD{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            HAMZA
          </span>
        </h1>

        <h2 className="mt-5 text-2xl font-semibold text-slate-200 md:text-3xl">
          Ingénieur & Développeur
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Je conçois et développe des solutions web modernes, performantes et
          orientées expérience utilisateur avec une approche propre, claire et
          professionnelle.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]"
          >
            Voir mes projets
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
          >
            Me contacter
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-400">
          <a href={socials.github} target="_blank" className="hover:text-cyan-400">
            GitHub
          </a>
          <a href={socials.linkedin} target="_blank" className="hover:text-cyan-400">
            LinkedIn
          </a>
          <a href={socials.email} className="hover:text-cyan-400">
            Email
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
            <p className="text-2xl font-bold text-white">3+</p>
            <p className="text-sm text-slate-400">Projets solides</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
            <p className="text-2xl font-bold text-white">Modern</p>
            <p className="text-sm text-slate-400">Web stack</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
            <p className="text-2xl font-bold text-white">100%</p>
            <p className="text-sm text-slate-400">Responsive</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 rounded-[2rem] bg-cyan-400/10 blur-3xl" />
        <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md">
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
              Profil
            </p>
            <h3 className="mt-4 text-3xl font-bold text-white">
              Développement web moderne
            </h3>
            <p className="mt-4 leading-8 text-slate-400">
              Je construis des interfaces élégantes, des expériences fluides et
              des applications bien structurées avec un souci du détail et de la
              performance.
            </p>

            <div className="mt-8 space-y-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-300">
                Frontend propre & moderne
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-300">
                Backend structuré
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-300">
                Responsive design
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}