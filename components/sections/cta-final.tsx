"use client";
import { motion, useReducedMotion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export function CtaFinal() {
  const prefersReducedMotion = useReducedMotion();
  const animProps = prefersReducedMotion
    ? {}
    : { variants: fadeUp, initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-80px" } };

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Gradient mesh background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020817] via-[#0d1526] to-[#020817]" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute left-1/4 top-1/4 h-[300px] w-[300px] rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <motion.div {...animProps}>
          <h2
            id="cta-bottom-heading"
            className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Votre pré‑audit Loi&nbsp;25 est gratuit — et ça prend 2 minutes
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Remplissez le formulaire maintenant. Vous recevez instantanément un premier bilan clair de votre site — zones à risque, points prioritaires, estimation pour l&apos;audit complet. Sans engagement.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            {/* Primary CTA */}
            <a
              href="#formulaire"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_40px_rgba(16,185,129,0.3)] transition-all hover:bg-emerald-400 hover:shadow-[0_0_60px_rgba(16,185,129,0.5)]"
            >
              Obtenir mon pré‑audit gratuit
            </a>

            {/* Secondary CTA */}
            <a
              href="/ressources/checklist-loi-25-site-web"
              className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-medium text-slate-300 backdrop-blur-sm transition-colors hover:border-white/20 hover:text-white"
            >
              Checklist Loi&nbsp;25 pour votre site web
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
