"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const navigation = [
  {
    label: "Projets",
    target: "projects",
    sections: ["projects"],
  },
  {
    label: "À propos",
    target: "about",
    sections: ["about"],
  },
  {
    label: "Expertise",
    target: "skills",
    sections: ["services", "skills"],
  },
  {
    label: "Parcours",
    target: "education",
    sections: ["education", "experience"],
  },
  {
    label: "Contact",
    target: "contact",
    sections: ["contact"],
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 30);

      if (!isHomePage) return;

      const position = window.scrollY + 180;

      let current = "home";

      for (const item of navigation) {
        for (const sectionId of item.sections) {
          const section = document.getElementById(sectionId);

          if (!section) continue;

          if (position >= section.offsetTop) {
            current = item.target;
          }
        }
      }

      setActiveSection(current);
    }

    if (!isHomePage && pathname.startsWith("/projects/")) {
      setActiveSection("projects");
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage, pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function getHref(target: string) {
    return isHomePage ? `#${target}` : `/#${target}`;
  }

  function closeMenu() {
    setMobileOpen(false);
  }

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-white/[0.08] bg-[#08090a]/85 backdrop-blur-xl"
            : "border-transparent bg-[#08090a]/60 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link
            href={isHomePage ? "#home" : "/#home"}
            onClick={closeMenu}
            className="group flex items-center gap-2"
          >
            <span className="text-xl font-black tracking-[-0.04em] text-white">
              HAMZA
            </span>

            <span className="h-2 w-2 rounded-full bg-cyan-300 transition-transform duration-300 group-hover:scale-150" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const active = activeSection === item.target;

              return (
                <Link
                  key={item.target}
                  href={getHref(item.target)}
                  className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                    active
                      ? "text-white"
                      : "text-zinc-500 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/[0.08]"
            >
              Télécharger CV

              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            aria-label={
              mobileOpen ? "Fermer la navigation" : "Ouvrir la navigation"
            }
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white lg:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-[#08090a]/95 px-6 pt-28 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-xl flex-col">
          {navigation.map((item, index) => (
            <Link
              key={item.target}
              href={getHref(item.target)}
              onClick={closeMenu}
              className="flex items-center justify-between border-b border-white/[0.08] py-5 text-3xl font-semibold tracking-tight text-white"
            >
              <span>{item.label}</span>

              <span className="text-sm font-normal text-zinc-600">
                0{index + 1}
              </span>
            </Link>
          ))}
        </nav>

        <div className="mx-auto mt-10 max-w-xl">
          <a
            href={personalInfo.cvUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-black"
          >
            Télécharger mon CV
            <ArrowUpRight size={17} />
          </a>

          <p className="mt-6 text-sm leading-6 text-zinc-500">
            {personalInfo.location} · Développement web & logiciel
          </p>
        </div>
      </div>
    </>
  );
}