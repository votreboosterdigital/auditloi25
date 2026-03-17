"use client";

import { motion, useReducedMotion } from "framer-motion";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  date: string;
  problem: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "On pensait être en règle parce qu'on avait une bannière. Le pré-audit nous a montré que nos cookies Google Analytics se déclenchaient avant le consentement. Problème corrigé en deux jours.",
    name: "M. L.",
    role: "Directrice générale, OBNL santé, Montréal",
    date: "Janvier 2025",
    problem: "Bannière non conforme",
  },
  {
    quote:
      "Pas d'équipe TI, pas de ressources juridiques — le rapport était clair, priorisé, et on a pu tout corriger avec notre webmestre habituel. Aucun jargon, aucune prise de tête.",
    name: "S. B.",
    role: "Responsable communications, PME services professionnels, Québec",
    date: "Février 2025",
    problem: "Politique de confidentialité absente",
  },
  {
    quote:
      "La CAI avait lancé une campagne de sensibilisation dans notre secteur. On voulait être prêts avant d'être contactés. Le pré-audit nous a donné exactement ce qu'il fallait pour agir.",
    name: "P. T.",
    role: "Coordonnateur TI, organisme municipal, Rive-Sud",
    date: "Mars 2025",
    problem: "Outils tiers non déclarés",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export function Testimonials() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          {...(prefersReducedMotion
            ? {}
            : {
                variants: fadeUp,
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: true, margin: "-80px" },
              })}
        >
          <h2
            id="testimonials-heading"
            className="text-3xl font-black tracking-tight text-white sm:text-4xl"
          >
            Ce qu&apos;ils ont découvert après le pré-audit
          </h2>
          <p className="mt-3 text-slate-400">
            Des PME et OBNL québécois qui ont fait le premier pas — et ce qu&apos;ils ont corrigé.
          </p>
        </motion.div>

        <motion.ul
          className="mt-12 grid gap-6 sm:grid-cols-3"
          variants={container}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true }}
        >
          {testimonials.map((t) => (
            <motion.li
              key={t.name}
              variants={fadeUp}
              className="flex flex-col rounded-2xl border border-white/8 bg-[#0d1526] p-6 ring-1 ring-white/5"
            >
              {/* Problem badge */}
              <span className="inline-flex w-fit items-center rounded-full bg-sky-400/10 px-2.5 py-0.5 text-[11px] font-semibold text-sky-300 ring-1 ring-sky-500/20">
                {t.problem}
              </span>

              {/* Quote */}
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <footer className="mt-6 border-t border-white/5 pt-4">
                <p className="text-sm font-semibold text-slate-100">{t.name}</p>
                <p className="mt-0.5 text-xs text-slate-500">{t.role}</p>
                <p className="mt-0.5 text-xs text-slate-600">{t.date}</p>
              </footer>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
