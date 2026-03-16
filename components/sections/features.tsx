"use client";
import { motion, useReducedMotion } from "framer-motion";
import {
  Cookie,
  FileText,
  BookOpen,
  ToggleLeft,
  Activity,
  BarChart2,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const features: Feature[] = [
  {
    icon: Cookie,
    title: "Cookies & scripts tiers",
    description:
      "Identification et catégorisation des cookies et scripts tiers actifs — une obligation centrale de l'audit Loi 25 pour votre site web.",
  },
  {
    icon: FileText,
    title: "Formulaires & consentement",
    description:
      "Analyse de la conformité Loi 25 de vos formulaires de contact, d'inscription et des parcours de collecte de données personnelles.",
  },
  {
    icon: BookOpen,
    title: "Contenus légaux",
    description:
      "Vérification de la politique de confidentialité, des mentions légales et de leur accessibilité.",
  },
  {
    icon: ToggleLeft,
    title: "Bannière de cookies",
    description:
      "Évaluation de la bannière de consentement selon les critères Loi 25 : présence, clarté et facilité de refus équivalente à l'acceptation.",
  },
  {
    icon: Activity,
    title: "Outils de suivi",
    description:
      "Recensement des scripts de mesure d'audience, de publicité et de partage social actifs sur vos pages.",
  },
  {
    icon: BarChart2,
    title: "Rapport priorisé",
    description:
      "Synthèse claire avec score de risque par zone et liste d'actions classées par priorité et par effort.",
  },
];

export function Features() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section aria-labelledby="features-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          variants={fadeUp}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
            Ce qu&apos;on analyse
          </p>
          <h2
            id="features-heading"
            className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl"
          >
            Six zones vérifiées dans chaque audit Loi&nbsp;25 de votre site
          </h2>
          <p className="mt-3 text-slate-400">
            Chaque zone correspond à des exigences clés de la conformité
            Loi&nbsp;25 mises de l&apos;avant par la CAI pour les sites web québécois.
          </p>
        </motion.div>

        <motion.ul
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true }}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.li
                key={feature.title}
                variants={fadeUp}
                className="group rounded-xl border border-white/8 bg-[#0d1526] p-6 ring-1 ring-white/5 transition-all hover:ring-sky-500/30 hover:shadow-[0_8px_32px_rgba(56,189,248,0.1)]"
                whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10">
                  <Icon className="h-5 w-5 text-sky-400" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-white">{feature.title}</h3>
                <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
