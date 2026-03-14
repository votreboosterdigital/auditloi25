"use client";

import Link from "next/link";
import { ShieldIcon } from "@/components/shield-icon";
import { CheckCircle2 } from "lucide-react";

// OPTION A — angle livrables (recommandé pour clarté immédiate)
const heroSubtitle =
  "Nous auditons vos pages clés, cookies et formulaires, puis vous livrons un rapport priorisé des corrections à apporter — adapté à la réalité des PME et OBNL québécois.";

const deliverables = [
  "Portrait des cookies, scripts tiers et outils de suivi.",
  "Analyse des formulaires, contenus légaux et parcours de consentement.",
  "Rapport synthèse avec score de risque par zone.",
  "Plan d'action priorisé, adapté à vos ressources.",
];

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="mt-8 grid gap-10 md:grid-cols-[minmax(0,3fr),minmax(0,2.4fr)] md:items-center"
    >
      {/* Colonne gauche */}
      <div className="space-y-6">
        {/* Badges */}
        <div className="flex flex-wrap items-center gap-3 text-[11px]">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-sky-400/15 px-3 py-1 font-semibold text-sky-300 ring-1 ring-sky-500/30">
            <ShieldIcon
              size={16}
              className="shrink-0 text-sky-400 drop-shadow-[0_0_6px_rgba(56,189,248,0.5)]"
            />
            Audit Loi 25 · Aligné CAI
          </span>
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 font-semibold text-emerald-300 ring-1 ring-emerald-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Service indépendant
          </span>
        </div>

        {/* H1 */}
        <div className="space-y-4">
          <h1
            id="hero-heading"
            className="text-balance text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl md:text-5xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            Votre site web est-il conforme à la Loi&nbsp;25&nbsp;?
          </h1>

          {/* BEFORE: texte placeholder / AFTER: heroSubtitle option A */}
          <p className="max-w-xl text-[17px] leading-relaxed text-slate-300 sm:text-lg">
            {heroSubtitle}
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#formulaire"
            className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_24px_rgba(16,185,129,0.25)] transition-colors duration-200 hover:bg-emerald-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Demander mon pré‑audit gratuit
          </a>
          <Link
            href="/offre"
            className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-sky-300 transition-colors hover:text-sky-200"
          >
            Voir l&apos;offre détaillée
            <span className="text-[11px]">→</span>
          </Link>
        </div>

        {/* Trust pills */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 sm:text-sm">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-950/80 px-3 py-1 ring-1 ring-slate-700">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
            Service privé indépendant
          </span>
          <span className="rounded-full bg-slate-950/70 px-3 py-1 ring-1 ring-slate-700">
            Pré‑audit gratuit
          </span>
          <span className="rounded-full bg-slate-950/70 px-3 py-1 ring-1 ring-slate-700">
            Retour sous 48h
          </span>
        </div>

        {/* Encadré prix */}
        <div className="rounded-xl bg-slate-900/70 p-4 ring-1 ring-slate-800 text-sm text-slate-300">
          <p>
            Pré-audit{" "}
            <span className="font-semibold text-emerald-400">gratuit</span>
            {" · "}Audit complet à partir de{" "}
            <span className="font-semibold text-sky-400">450&nbsp;$</span>{" "}
            selon la taille de votre site.
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Devis précis fourni après le pré-audit, sans engagement.
          </p>
          <Link
            href="/offre"
            className="mt-2 inline-flex text-xs text-sky-400 hover:text-sky-300"
          >
            Voir l&apos;offre détaillée →
          </Link>
        </div>
      </div>

      {/* Colonne droite — carte "Ce que vous obtenez" */}
      <aside className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-900/85 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.9)]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-400">
          Ce que vous obtenez
        </p>
        <ul className="mt-2 space-y-2.5">
          {deliverables.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-slate-200">
              <CheckCircle2
                size={16}
                className="mt-0.5 shrink-0 text-emerald-400"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-slate-500">
          Vous recevez d&apos;abord un pré‑audit gratuit, puis une proposition
          claire pour l&apos;audit complet si vous souhaitez aller plus loin.
        </p>
        <p className="mt-3 text-[11px] text-slate-500">
          Checklist Loi 25 pour préparer votre site&nbsp;:
        </p>
        <Link
          href="/ressources/checklist-loi-25-site-web"
          className="inline-flex items-center gap-2 text-xs font-semibold text-sky-300 hover:text-sky-200"
        >
          Voir la checklist Loi 25
          <span className="text-[10px]">→</span>
        </Link>
      </aside>
    </section>
  );
}
