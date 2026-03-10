import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          Expériences
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          Parcours & expérience
        </h2>
      </div>

      <div className="space-y-6">
        {experiences.map((item) => (
          <div
            key={`${item.period}-${item.title}`}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <p className="text-sm font-medium text-cyan-400">{item.period}</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{item.title}</h3>
            <p className="mt-1 text-slate-400">{item.company}</p>
            <p className="mt-4 leading-8 text-slate-300">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}