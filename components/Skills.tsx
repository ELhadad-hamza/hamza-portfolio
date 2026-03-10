import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          Compétences
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          Mes technologies
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
          Voici les technologies et outils que j’utilise pour concevoir,
          développer et déployer des applications modernes, performantes et
          professionnelles.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-500/10"
          >
            <h3 className="mb-5 text-xl font-semibold text-white">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15 hover:text-cyan-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}