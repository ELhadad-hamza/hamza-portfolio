import { personalInfo } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          À propos
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          Qui suis-je ?
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
          Découvrez mon profil, mon approche du développement et les éléments
          clés qui définissent mon parcours et ma vision professionnelle.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-500/10">
          <h3 className="mb-5 text-2xl font-semibold text-white">
            Mon profil
          </h3>
          <p className="text-lg leading-8 text-slate-300">
            {personalInfo.about}
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-500/10">
          <h3 className="mb-5 text-2xl font-semibold text-white">
            Informations
          </h3>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
              <p className="text-sm text-slate-400">Nom</p>
              <p className="mt-1 font-semibold text-white">
                {personalInfo.name}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
              <p className="text-sm text-slate-400">Rôle</p>
              <p className="mt-1 font-semibold text-white">
                {personalInfo.role}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
              <p className="text-sm text-slate-400">Localisation</p>
              <p className="mt-1 font-semibold text-white">
                {personalInfo.location}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
              <p className="text-sm text-slate-400">Email</p>
              <p className="mt-1 font-semibold text-white">
                {personalInfo.email}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4 sm:col-span-2">
              <p className="text-sm text-slate-400">Téléphone</p>
              <p className="mt-1 font-semibold text-white">
                {personalInfo.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}