"use client";

import Link from "next/link";
import { ShieldAlert, Users, Scale, type LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

// ── Types ──────────────────────────────────────────────────────────────────────
type WhyCard = {
  icon: LucideIcon;
  title: string;
  stat: string;
  statColor: "sky" | "emerald";
  content: string;
  source: string;
};

// ── Animations ──────────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ── Données ────────────────────────────────────────────────────────────────────
// BEFORE: stats codées en dur dans le JSX
// AFTER: tableau structuré avec sources reformulées (Loi 25, CAI)
const cards: WhyCard[] = [
  {
    icon: ShieldAlert,
    title: "Amendes pénales prévues par la loi",
    stat: "25 M$",
    statColor: "sky",
    content:
      "ou 4 % du chiffre d'affaires mondial pour les infractions les plus graves — aucune organisation n'est exemptée.",
    source: "Loi 25 (L.Q. 2021, c. 25), art. 90 et 92",
  },
  {
    icon: Users,
    title: "Perte de confiance mesurable",
    stat: "81 %",
    statColor: "emerald",
    content:
      "des consommateurs québécois se disent préoccupés par l'usage de leurs données — un site non conforme fragilise votre réputation.",
    source: "Sondage sur la vie privée, CAI, 2023",
  },
  {
    icon: Scale,
    title: "Surveillance active de la CAI",
    stat: "Maintenant",
    statColor: "sky",
    content:
      "La CAI surveille activement les sites web québécois. Attendre ne réduit pas le risque — ça l'augmente.",
    source: "Lignes directrices de la CAI sur les témoins, 2023",
  },
];

// ── Composant ──────────────────────────────────────────────────────────
export function WhyActNow() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="why-act-heading"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true }}
        >
          <h2
            id="why-act-heading"
            className="text-3xl font-black tracking-tight text-white sm:text-4xl"
          >
            Ces risques concernent votre organisation — quelle que soit sa taille
          </h2>
          <p className="mt-3 text-slate-400">
            Pourquoi agir maintenant
          </p>
        </motion.div>

        {/* Grille de cards avec animation staggered */}
        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-3"
          variants={container}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true }}
        >
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                variants={fadeUp}
                className="rounded-xl border border-white/8 bg-[#0d1526] p-6 ring-1 ring-white/5"
              >
                {/* Icône */}
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10 mb-4">
                  <Icon className="h-5 w-5 text-sky-400" aria-hidden="true" />
                </div>

                {/* Stat */}
                <p className="text-3xl font-black text-white">
                  {card.stat}
                </p>

                {/* Titre */}
                <p className="mt-1 font-semibold text-slate-200">
                  {card.title}
                </p>

                {/* Contenu */}
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  {card.content}
                </p>

                {/* Source */}
                {card.source && (
                  <p className="mt-3 text-xs text-slate-500">
                    {card.source}
                  </p>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Lien "Voir les sources détaillées" */}
        <motion.div
          className="mt-8 flex justify-center"
          variants={fadeUp}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true }}
        >
          <Link
            href="/ressources/sources-loi-25"
            className="inline-flex cursor-pointer items-center gap-1.5 text-xs text-sky-400 underline underline-offset-4 decoration-sky-400/40 transition-colors duration-150 hover:text-sky-300 hover:decoration-sky-300/60"
          >
            Voir les sources détaillées
            <span className="text-[10px]" aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
