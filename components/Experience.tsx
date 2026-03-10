import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          Expériences
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          Parcours & expérience
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
          Voici les principales étapes de mon parcours académique et
          professionnel, ainsi que les expériences qui ont renforcé mes
          compétences techniques et ma vision du développement.
        </p>
      </div>

      <div className="space-y-6">
        {experiences.map((item) => (
          <div
            key={`${item.period}-${item.title}`}
            className="rounded-3xl border border-white/10 border-l-4 border-l-cyan-400 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-500/10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              {item.period}
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white">
              {item.title}
            </h3>

            <p className="mt-2 text-base font-medium text-slate-400">
              {item.company}
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}