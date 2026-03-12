"use client";

import { useEffect, useState } from "react";
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

  return (
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
      </div>
    </header>
  );
}