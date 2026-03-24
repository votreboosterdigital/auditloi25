"use client";

import Link from "next/link";
import { ShieldIcon } from "@/components/shield-icon";
import { CheckCircle2, TriangleAlert, Shield, Clock } from "lucide-react";
import { fireOfferClickConversion } from "@/lib/gtag";
import { motion, useReducedMotion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const heroSubtitle =
  "Nous analysons votre site — cookies, formulaires, bannière, contenus légaux — et vous livrons un rapport clair avec les corrections prioritaires. Pas de jargon, pas de flou : juste ce que vous devez corriger, dans l'ordre.";

const deliverables = [
  "Carte complète des cookies et scripts tiers actifs.",
  "Analyse de vos formulaires, bannière de consentement et politiques.",
  "Rapport synthèse avec score de risque et zones prioritaires.",
  "Liste d'actions classées par priorité et par effort réaliste.",
];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const animProps = prefersReducedMotion
    ? {}
    : {
        variants: fadeUp,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-80px" },
      };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      {/* Gradient mesh blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Sky blob top-right */}
        <div className="absolute -top-40 -right-32 h-[500px] w-[500px] rounded-full bg-sky-500/20 blur-3xl" />
        {/* Emerald blob bottom-left */}
        <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-emerald-500/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
        <div className="grid gap-10 md:grid-cols-[minmax(0,3fr),minmax(0,2.4fr)] md:items-center">
          {/* Colonne gauche */}
          <div className="space-y-6">
            {/* Badges */}
            <motion.div {...animProps} className="flex flex-wrap items-center gap-3 text-[11px]">
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
            </motion.div>

            {/* Alerte pill */}
            <motion.div {...animProps} className="flex justify-center md:justify-start">
              <span className="inline-flex items-center rounded-full border border-amber-700 bg-amber-950 px-3 py-1.5 text-xs font-medium text-amber-300">
                <TriangleAlert size={14} className="mr-1.5 shrink-0" aria-hidden="true" />
                La CAI peut inspecter votre site sans préavis — amendes jusqu&apos;à 25&nbsp;M$
              </span>
            </motion.div>

            {/* H1 */}
            <div className="space-y-4">
              <motion.h1
                id="hero-heading"
                {...animProps}
                className="text-balance text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl"
                style={{ letterSpacing: "-0.02em" }}
              >
                Votre site web est-il{" "}
                <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
                  conforme à la Loi&nbsp;25
                </span>
                &nbsp;?
              </motion.h1>

              <motion.p {...animProps} className="mt-4 max-w-xl text-lg leading-relaxed text-slate-400 sm:max-w-2xl">
                {heroSubtitle}
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div {...animProps} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#formulaire"
                className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_40px_rgba(16,185,129,0.3)] transition-all hover:bg-emerald-400 hover:shadow-[0_0_60px_rgba(16,185,129,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Obtenir mon pré‑audit gratuit
              </a>
            </motion.div>

            {/* Trust pills */}
            <motion.div {...animProps} className="flex flex-wrap items-center gap-3 text-xs text-slate-300 sm:text-sm">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-950/80 px-3 py-1 ring-1 ring-slate-700">
                <Shield size={12} className="shrink-0 text-slate-400" aria-hidden="true" />
                Basé sur le Guide officiel de la CAI
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-950/70 px-3 py-1 ring-1 ring-slate-700">
                <CheckCircle2 size={12} className="shrink-0 text-slate-400" aria-hidden="true" />
                Pré‑audit gratuit — aucun engagement
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-950/70 px-3 py-1 ring-1 ring-slate-700">
                <Clock size={12} className="shrink-0 text-slate-400" aria-hidden="true" />
                Rapport instantané
              </span>
            </motion.div>

            {/* Encadré prix */}
            <motion.div {...animProps} className="rounded-xl border border-white/8 bg-[#0d1526]/80 ring-1 ring-white/5 backdrop-blur-sm p-5 text-sm text-slate-300">
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
                onClick={fireOfferClickConversion}
                className="mt-2 inline-flex text-xs text-sky-400 hover:text-sky-300"
              >
                Voir l&apos;offre d&apos;audit Loi&nbsp;25 →
              </Link>
            </motion.div>
          </div>

          {/* Colonne droite — carte "Ce que vous obtenez" */}
          <motion.aside
            {...animProps}
            className="space-y-4 rounded-xl border border-white/8 bg-[#0d1526]/80 ring-1 ring-white/5 backdrop-blur-sm p-5 shadow-[0_24px_80px_rgba(15,23,42,0.9)]"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-400">
              Inclus dans votre pré-audit
            </p>
            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-2 space-y-2.5"
            >
              {deliverables.map((item) => (
                <motion.li key={item} variants={fadeUp} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-emerald-400"
                    aria-hidden="true"
                  />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
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
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
