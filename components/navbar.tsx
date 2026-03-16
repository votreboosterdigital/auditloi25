"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ShieldIcon } from "@/components/shield-icon";

const navLinks = [
  { href: "/offre", label: "Voir l'offre" },
  { href: "/ressources", label: "Ressources" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#020817]/80 backdrop-blur-md border-b border-white/5">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <ShieldIcon
              size={20}
              className="shrink-0 text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]"
            />
            <span className="text-sm font-semibold text-slate-200 tracking-tight">auditloi25.ca</span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Navigation principale" className="hidden items-center gap-4 sm:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 hover:text-slate-100 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#formulaire"
              className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
            >
              Pré‑audit gratuit
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Ouvrir le menu"
            aria-expanded={isOpen}
            aria-controls="mobile-nav-overlay"
            onClick={() => setIsOpen(true)}
            className="text-slate-400 hover:text-slate-100 transition-colors md:hidden"
          >
            <Menu size={22} aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Mobile overlay — full-screen, z-40 */}
      {isOpen && (
        <div
          id="mobile-nav-overlay"
          className="fixed inset-0 z-40 bg-[#020817]/95 backdrop-blur-md flex flex-col p-6 md:hidden"
        >
          {/* Header overlay */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2"
            >
              <ShieldIcon size={18} className="text-sky-400" />
              <span className="text-sm font-semibold text-slate-200 tracking-tight">auditloi25.ca</span>
            </Link>
            <button
              type="button"
              aria-label="Fermer le menu"
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-100 transition-colors"
            >
              <X size={22} aria-hidden="true" />
            </button>
          </div>

          {/* Nav links */}
          <nav aria-label="Navigation mobile" className="mt-10 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-300 hover:text-white transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#formulaire"
              onClick={() => setIsOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:bg-emerald-400 transition-colors"
            >
              Demander un pré‑audit gratuit
            </a>
          </nav>

          {/* Backdrop tap zone (outside links) */}
          <div
            className="mt-auto"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        </div>
      )}
    </>
  );
}
