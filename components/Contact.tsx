"use client";

import { FormEvent, useState } from "react";
import { personalInfo } from "@/data/portfolio";

type Status = {
  type: "idle" | "loading" | "success" | "error";
  message: string;
};

export default function Contact() {
  const [status, setStatus] = useState<Status>({
    type: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: "loading", message: "Envoi en cours..." });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Une erreur est survenue.");
      }

      setStatus({
        type: "success",
        message: "Message envoyé avec succès.",
      });

      form.reset();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Erreur inconnue.";

      setStatus({
        type: "error",
        message,
      });
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          Contact
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          Parlons de votre projet
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
          Vous souhaitez collaborer, discuter d’une opportunité ou me confier
          un projet ? Envoyez-moi un message.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-500/10">
          <h3 className="text-2xl font-semibold text-white">Coordonnées</h3>

          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
              <p className="text-sm text-slate-400">Email</p>
              <p className="mt-1 font-semibold text-white">
                {personalInfo.email}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
              <p className="text-sm text-slate-400">Téléphone</p>
              <p className="mt-1 font-semibold text-white">
                {personalInfo.phone}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
              <p className="text-sm text-slate-400">Localisation</p>
              <p className="mt-1 font-semibold text-white">
                {personalInfo.location}
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-500/10"
        >
          <div className="grid gap-4">
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Votre email"
              className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Sujet"
              className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
            />

            <textarea
              name="message"
              placeholder="Votre message"
              rows={6}
              className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              required
            />

            <button
              type="submit"
              disabled={status.type === "loading"}
              className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02] disabled:opacity-70"
            >
              {status.type === "loading" ? "Envoi..." : "Envoyer"}
            </button>

            {status.message && (
              <p
                className={`text-sm ${
                  status.type === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {status.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}