import { skills } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32"
    >
      <Reveal>
        <div className="grid gap-8 border-b border-white/[0.08] pb-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Expertise
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              Les technologies derrière{" "}
              <span className="text-zinc-500">
                mes projets.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-zinc-500">
            Je choisis les technologies en fonction du besoin du projet, avec
            une attention particulière portée à la structure, la maintenabilité
            et la qualité de l&apos;expérience utilisateur.
          </p>
        </div>
      </Reveal>

      <div className="mt-6">
        {skills.map((group, index) => (
          <Reveal
            key={group.title}
            delay={index * 0.06}
          >
            <div className="group grid gap-5 border-b border-white/[0.08] py-8 transition lg:grid-cols-[80px_0.7fr_1.3fr] lg:items-center">
              <p className="text-xs font-medium text-zinc-700">
                {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="text-2xl font-medium tracking-[-0.025em] text-white transition group-hover:text-cyan-200">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {group.items.map((item, itemIndex) => (
                  <span
                    key={`${group.title}-${item}-${itemIndex}`}
                    className="text-sm text-zinc-500 transition group-hover:text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}