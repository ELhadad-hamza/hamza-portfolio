"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const links = [
  { label: "Projets", target: "projects" },
  { label: "À propos", target: "about" },
  { label: "Expertise", target: "skills" },
  { label: "Parcours", target: "education" },
  { label: "Contact", target: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const getHref = (target: string) => {
    return isHomePage ? `#${target}` : `/#${target}`;
  };

  const closeMenu = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-white/[0.08] bg-[#08090a]/90 backdrop-blur-xl"
            : "border-transparent bg-[#08090a]/70 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* LOGO */}
          <Link
            href={isHomePage ? "#home" : "/#home"}
            onClick={closeMenu}
            className="group flex items-center"
          >
            <span className="text-xl font-black tracking-[-0.05em] text-white">
              HAMZA
            </span>

            <span className="ml-1.5 h-2 w-2 rounded-full bg-cyan-300 transition-transform duration-300 group-hover:scale-150" />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <Link
                key={link.target}
                href={getHref(link.target)}
                className="rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition hover:bg-white/[0.05] hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CV */}
          <div className="hidden lg:block">
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:border-white/20 hover:bg-white/[0.08]"
            >
              Télécharger CV

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white lg:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 bg-[#08090a]/95 px-6 pt-28 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-xl flex-col">
          {links.map((link, index) => (
            <Link
              key={link.target}
              href={getHref(link.target)}
              onClick={closeMenu}
              className="flex items-center justify-between border-b border-white/[0.08] py-5"
            >
              <span className="text-3xl font-semibold tracking-tight text-white">
                {link.label}
              </span>

              <span className="text-xs text-zinc-600">
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
            onClick={closeMenu}
            className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-black"
          >
            Télécharger mon CV
            <ArrowUpRight size={17} />
          </a>

          <p className="mt-6 text-sm text-zinc-500">
            {personalInfo.location} · Développement web & logiciel
          </p>
        </div>
      </div>
    </>
  );
}