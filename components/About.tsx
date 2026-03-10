import { personalInfo } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">À propos</p>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          Qui suis-je ?
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="text-lg leading-8 text-slate-300">{personalInfo.about}</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <ul className="space-y-4 text-slate-300">
            <li>
              <span className="font-semibold text-white">Nom :</span>{" "}
              {personalInfo.name}
            </li>
            <li>
              <span className="font-semibold text-white">Rôle :</span>{" "}
              {personalInfo.role}
            </li>
            <li>
              <span className="font-semibold text-white">Localisation :</span>{" "}
              {personalInfo.location}
            </li>
            <li>
              <span className="font-semibold text-white">Email :</span>{" "}
              {personalInfo.email}
            </li>
            <li>
              <span className="font-semibold text-white">Téléphone :</span>{" "}
              {personalInfo.phone}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}