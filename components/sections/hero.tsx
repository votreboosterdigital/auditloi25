"use client";

import Link from "next/link";
import { ShieldIcon } from "@/components/shield-icon";
import { CheckCircle2 } from "lucide-react";

const heroSubtitle =
  "Nous analysons votre site — cookies, formulaires, bannière, contenus légaux — et vous livrons un rapport clair avec les corrections prioritaires. Pas de jargon, pas de flou : juste ce que vous devez corriger, dans l'ordre.";

const deliverables = [
  "Carte complète des cookies et scripts tiers actifs.",
  "Analyse de vos formulaires, bannière de consentement et politiques.",
  "Rapport synthèse avec score de risque et zones prioritaires.",
  "Liste d'actions classées par priorité et par effort réaliste.",
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
            Pour PME et OBNL québécois · Aligné CAI
          </span>
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 font-semibold text-emerald-300 ring-1 ring-emerald-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Audit indépendant
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
            Obtenir mon pré‑audit gratuit
          </a>
          <Link
            href="/offre"
            className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-sky-300 transition-colors hover:text-sky-200"
          >
            Voir l&apos;offre d&apos;audit Loi&nbsp;25
            <span className="text-[11px]">→</span>
          </Link>
        </div>

        {/* Trust pills */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 sm:text-sm">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-950/80 px-3 py-1 ring-1 ring-slate-700">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
            Audit indépendant · Québec
          </span>
          <span className="rounded-full bg-slate-950/70 px-3 py-1 ring-1 ring-slate-700">
            Pré‑audit 100 % gratuit
          </span>
          <span className="rounded-full bg-slate-950/70 px-3 py-1 ring-1 ring-slate-700">
            Retour sous 48 h
          </span>
        </div>

        {/* Encadré prix */}
        <div className="rounded-xl bg-slate-900/70 p-4 ring-1 ring-slate-800 text-sm text-slate-300">
          <p>
            Pré-audit{" "}
            <span className="font-semibold text-emerald-400">gratuit</span>
            {", sans engagement. "}Audit complet dès{" "}
            <span className="font-semibold text-sky-400">450&nbsp;$</span>
            {" — devis fourni après le pré-audit."}
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Vous recevez d&apos;abord un portrait clair de votre site, puis vous décidez.
          </p>
          <Link
            href="/offre"
            className="mt-2 inline-flex text-xs text-sky-400 hover:text-sky-300"
          >
            Voir l&apos;offre d&apos;audit Loi&nbsp;25 →
          </Link>
        </div>
      </div>

      {/* Colonne droite — carte "Ce que vous obtenez" */}
      <aside className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-900/85 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.9)]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-400">
          Inclus dans votre pré-audit
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
          Commencez gratuitement — vous recevez un premier bilan clair avant de
          décider si vous souhaitez aller plus loin.
        </p>
        <p className="mt-3 text-[11px] text-slate-500">
          Pas encore prêt&nbsp;? Commencez par la checklist gratuite&nbsp;:
        </p>
        <Link
          href="/ressources/checklist-loi-25-site-web"
          className="inline-flex items-center gap-2 text-xs font-semibold text-sky-300 hover:text-sky-200"
        >
          Checklist Loi 25 pour votre site web
          <span className="text-[10px]">→</span>
        </Link>
      </aside>
    </section>
  );
}
