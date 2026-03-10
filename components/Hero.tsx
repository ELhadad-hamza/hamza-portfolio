import { personalInfo, socials } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-[88vh] max-w-6xl items-center px-6 py-20"
    >
      <div className="max-w-3xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Bienvenue sur mon portfolio
        </p>

        <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
          {personalInfo.name}
        </h1>

        <h2 className="mt-4 text-xl font-semibold text-slate-300 md:text-2xl">
          {personalInfo.role}
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          {personalInfo.tagline}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
          >
            Voir mes projets
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
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
      </div>
    </section>
  );
}