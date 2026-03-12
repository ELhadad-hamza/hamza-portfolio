"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const links = [
  { label: "Accueil", href: "#home", id: "home" },
  { label: "À propos", href: "#about", id: "about" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Compétences", href: "#skills", id: "skills" },
  { label: "Formation", href: "#education", id: "education" },
  { label: "Expériences", href: "#experience", id: "experience" },
  { label: "Projets", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 140;
      let currentSection = "home";

      for (const link of links) {
        const section = document.getElementById(link.id);
        if (!section) continue;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentSection = link.id;
        }
      }

      setActiveSection(currentSection);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function closeMobileMenu() {
    setMobileOpen(false);
  }

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-slate-950/80 shadow-lg shadow-black/10 backdrop-blur-xl"
            : "bg-slate-950/50 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#home"
            onClick={closeMobileMenu}
            className="text-lg font-extrabold tracking-wide text-white transition hover:text-cyan-400"
          >
            {personalInfo.name}
          </a>

          <nav className="hidden items-center gap-2 md:flex">
            {links.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-cyan-400/10 text-cyan-300"
                      : "text-slate-300 hover:bg-white/5 hover:text-cyan-300"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-1 h-[2px] rounded-full bg-cyan-400" />
                  )}
                </a>
              );
            })}

            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="ml-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400 hover:text-slate-950"
            >
              Mon CV
            </a>
          </nav>

          <button
            type="button"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:border-cyan-400/30 hover:text-cyan-300 md:hidden"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm transition duration-300 md:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={closeMobileMenu}
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[85%] max-w-sm border-l border-white/10 bg-slate-950/95 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl transition-transform duration-300 md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-white">Navigation</p>
          <button
            type="button"
            aria-label="Fermer le menu"
            onClick={closeMobileMenu}
            className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:border-cyan-400/30 hover:text-cyan-300"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mt-8 flex flex-col gap-2">
          {links.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMobileMenu}
                className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "border border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                    : "border border-transparent bg-white/5 text-slate-300 hover:border-cyan-400/20 hover:bg-cyan-400/5 hover:text-cyan-300"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="mt-8 border-t border-white/10 pt-6">
          <a
            href={personalInfo.cvUrl}
            target="_blank"
            rel="noreferrer"
            onClick={closeMobileMenu}
            className="block rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-center text-sm font-semibold text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400 hover:text-slate-950"
          >
            Voir mon CV
          </a>

          <p className="mt-5 text-sm leading-6 text-slate-400">
            Basé à {personalInfo.location} • Disponible pour de nouveaux projets
            et collaborations.
          </p>
        </div>
      </aside>
    </>
  );
}