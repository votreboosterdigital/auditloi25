"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ShieldIcon } from "@/components/shield-icon";

const navLinks = [
  { href: "/offre", label: "Voir l'offre" },
  { href: "/ressources/checklist-loi-25-site-web", label: "Checklist Loi 25" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold tracking-tight text-slate-100"
          >
            <ShieldIcon
              size={20}
              className="shrink-0 text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]"
            />
            auditloi25.ca
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Navigation principale" className="hidden items-center gap-4 text-xs text-slate-300 sm:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full bg-slate-900/60 px-3 py-1 font-medium ring-1 ring-slate-700 transition-colors hover:bg-slate-900 hover:text-slate-50"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#formulaire"
              className="inline-flex cursor-pointer items-center justify-center rounded-full bg-emerald-500 px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-sm transition-colors hover:bg-emerald-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
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
            className="cursor-pointer rounded-md p-1.5 text-slate-300 hover:text-slate-50 sm:hidden"
          >
            <Menu size={22} aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Mobile overlay — full-screen, z-50 */}
      {isOpen && (
        <div
          id="mobile-nav-overlay"
          className="fixed inset-0 z-50 flex flex-col bg-slate-950 px-6 py-6"
        >
          {/* Header overlay */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-sm font-semibold text-slate-100"
            >
              <ShieldIcon size={18} className="text-sky-400" />
              auditloi25.ca
            </Link>
            <button
              type="button"
              aria-label="Fermer le menu"
              onClick={() => setIsOpen(false)}
              className="cursor-pointer rounded-md p-1.5 text-slate-300 hover:text-slate-50"
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
                className="rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-slate-100 ring-1 ring-slate-800 hover:bg-slate-800"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#formulaire"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex cursor-pointer items-center justify-center rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
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
