"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, ListChecks, BarChart2, Clock } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const items = [
  { icon: ShieldCheck, label: "Méthode basée sur les 5 obligations CAI pour les sites web" },
  { icon: ListChecks, label: "Rapport structuré avec priorisation claire des corrections" },
  { icon: BarChart2, label: "Bannière non conforme détectée dans la majorité des sites audités" },
  { icon: Clock, label: "Pré-audit livré en 48h — garanti" },
];

export function TrustStrip() {
  const prefersReducedMotion = useReducedMotion();
  const animProps = prefersReducedMotion
    ? {}
    : { variants: fadeUp, initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-80px" } };

  return (
    <div
      aria-label="Indicateurs de confiance"
      className="border-y border-white/5 bg-[#0d1526]/50 py-6"
    >
      <motion.div
        className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-10 gap-y-4 px-4 sm:px-6"
        {...(!prefersReducedMotion && {
          variants: container,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
        })}
      >
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              {...animProps}
              className="flex items-center gap-2 text-sm text-slate-400"
            >
              <Icon className="h-4 w-4 shrink-0 text-sky-400" />
              <span>{item.label}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
