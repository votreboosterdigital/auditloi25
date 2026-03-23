"use client";
import Link from "next/link";
import { fireOfferClickConversion } from "@/lib/gtag";
import { CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

type Plan = {
  name: string;
  price: string;
  priceNote: string | null;
  badge: string | null;
  highlighted: boolean;
  cta: { label: string; href: string };
  features: string[];
};

const plans: Plan[] = [
  {
    name: "Pré-audit",
    price: "Gratuit",
    priceNote: "Idéal pour un premier état des lieux",
    badge: null,
    highlighted: false,
    cta: { label: "Commencer gratuitement", href: "#formulaire" },
    features: [
      "Détection des cookies et scripts tiers actifs sur votre site",
      "Vérification de la présence et du comportement de la bannière de consentement",
      "Premier portrait des zones à risque les plus visibles",
    ],
  },
  {
    name: "Audit complet",
    price: "À partir de 450 $",
    priceNote: "selon la taille du site · devis après pré-audit",
    badge: "Le plus populaire",
    highlighted: true,
    cta: { label: "Démarrer mon audit", href: "#formulaire" },
    features: [
      "Tout ce qui est inclus dans le pré-audit",
      "Analyse approfondie de chaque formulaire et du parcours de consentement",
      "Vérification complète des contenus légaux : politique, mentions, droits",
      "Rapport synthèse avec score de risque par zone et par priorité",
      "Plan d'action classé par effort réaliste, adapté à vos ressources",
    ],
  },
  {
    name: "Audit + Accompagnement",
    price: "Sur devis",
    priceNote: "adapté à votre organisation",
    badge: "Sur mesure",
    highlighted: false,
    cta: { label: "Discuter de mon projet", href: "#formulaire" },
    features: [
      "Tout ce qui est inclus dans l'audit complet",
      "Session de travail avec votre équipe ou votre fournisseur web",
      "Révision des correctifs une fois mis en œuvre",
      "Synthèse claire transmissible à votre direction ou CA",
      "Coordination avec vos partenaires juridiques ou TI",
      "Suivi personnalisé selon vos délais et contraintes",
    ],
  },
];

export function Pricing() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section aria-labelledby="pricing-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          variants={fadeUp}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
            Tarifs
          </p>
          <h2
            id="pricing-heading"
            className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl"
          >
            Commencez gratuitement — avancez à votre rythme
          </h2>
          <p className="mt-3 max-w-xl text-slate-400">
            Le pré-audit Loi&nbsp;25 est gratuit et sans engagement. Vous
            passez à l&apos;étape suivante seulement si vous le souhaitez, sur
            la base d&apos;un devis précis.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-3"
          variants={container}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true }}
        >
          {plans.map((plan) =>
            plan.highlighted ? (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                className="rounded-xl border border-sky-500/40 bg-[#0d1526] p-6 ring-1 ring-sky-500/30 shadow-[0_0_60px_rgba(56,189,248,0.1)] flex flex-col sm:scale-105"
              >
                {plan.badge && (
                  <span className="inline-flex items-center rounded-full bg-sky-500/10 px-2.5 py-0.5 text-xs font-medium text-sky-400 border border-sky-500/20 mb-3">
                    {plan.badge}
                  </span>
                )}

                <p className="text-lg font-bold text-white">{plan.name}</p>
                <p className="text-3xl font-black text-white mt-2">{plan.price}</p>
                {plan.priceNote && (
                  <p className="text-sm text-slate-400">{plan.priceNote}</p>
                )}

                <ul className="mt-4 space-y-2 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.cta.href}
                  className="mt-6 w-full rounded-lg bg-emerald-500 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all hover:bg-emerald-400 hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] inline-flex items-center justify-center"
                >
                  {plan.cta.label}
                </a>
              </motion.div>
            ) : (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                className="rounded-xl border border-white/8 bg-[#0d1526] p-6 ring-1 ring-white/5 flex flex-col"
              >
                {plan.badge && (
                  <span className="inline-flex items-center rounded-full bg-sky-500/10 px-2.5 py-0.5 text-xs font-medium text-sky-400 border border-sky-500/20 mb-3">
                    {plan.badge}
                  </span>
                )}

                <p className="text-lg font-bold text-white">{plan.name}</p>
                <p className="text-3xl font-black text-white mt-2">{plan.price}</p>
                {plan.priceNote && (
                  <p className="text-sm text-slate-400">{plan.priceNote}</p>
                )}

                <ul className="mt-4 space-y-2 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.cta.href}
                  className="mt-6 w-full rounded-lg border border-white/10 bg-white/5 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:border-white/20 hover:text-white inline-flex items-center justify-center"
                >
                  {plan.cta.label}
                </a>
              </motion.div>
            )
          )}
        </motion.div>

        {/* Note transparence */}
        <p className="mt-6 text-center text-xs text-slate-500">
          Devis précis fourni après le pré-audit, sans engagement.{" "}
          <Link
            href="/offre"
            onClick={fireOfferClickConversion}
            className="text-sky-400 underline underline-offset-4 decoration-sky-400/40 hover:text-sky-300"
          >
            Voir le détail de l&apos;offre d&apos;audit →
          </Link>
        </p>
      </div>
    </section>
  );
}
