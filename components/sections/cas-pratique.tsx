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

export function CasPratique() {
  const prefersReducedMotion = useReducedMotion();

  const anim = prefersReducedMotion
    ? {}
    : { variants: fadeUp, initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-80px" } };

  return (
    <section aria-labelledby="cas-pratique-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">

        {/* En-tête */}
        <motion.div {...anim}>
          <span className="inline-flex items-center rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/20 mb-4">
            Cas pratique — Audit réel
          </span>
          <h2
            id="cas-pratique-heading"
            className="text-3xl font-black tracking-tight text-white sm:text-4xl"
          >
            « Je pensais être dans les règles. Je ne l&apos;étais pas. »
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl">
            Mehdi gère zeroabo.fr, un répertoire de logiciels sans abonnement. Pas de formulaire, pas de Google Analytics, pas de boutique. Il était convaincu que la Loi 25 ne le concernait pas vraiment.
          </p>
        </motion.div>

        {/* Carte principale */}
        <motion.div
          {...(prefersReducedMotion ? {} : {
            variants: fadeUp,
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true, margin: "-80px" },
          })}
          className="mt-12 rounded-2xl border border-white/8 bg-[#0d1526] p-8 ring-1 ring-white/5"
        >
          <div className="grid gap-10 lg:grid-cols-2">

            {/* Colonne gauche — histoire */}
            <div className="flex flex-col gap-6">

              {/* Étape 1 */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">La situation de départ</p>
                <p className="text-sm leading-relaxed text-slate-300">
                  Mehdi avait déjà des mentions légales sur son site. Pas de cookies publicitaires, pas de formulaire de collecte. Il pensait avoir fait le tour. Il a quand même demandé le pré-audit gratuit — <em className="text-slate-400">« juste pour confirmer »</em>.
                </p>
              </div>

              {/* Étape 2 */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Ce que le pré-audit a révélé</p>
                <p className="text-sm leading-relaxed text-slate-300">
                  Son site utilisait Vercel Analytics — un outil de mesure de trafic actif sur toutes les pages, jamais déclaré à ses visiteurs. Sa page de mentions légales ne mentionnait aucun droit d&apos;accès, de rectification ou de suppression. Deux infractions à la Loi 25, sans le savoir.
                </p>
              </div>

              {/* Étape 3 */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">La décision</p>
                <p className="text-sm leading-relaxed text-slate-300">
                  <em className="text-slate-400">« Le pré-audit m&apos;a montré exactement où j&apos;étais non conforme. J&apos;ai commandé l&apos;audit complet pour avoir le plan de correction et les documents à jour. »</em>
                </p>
              </div>

              {/* Attribution */}
              <div className="border-t border-white/5 pt-5 mt-auto">
                <p className="text-sm font-semibold text-slate-100">Mehdi B.</p>
                <p className="mt-0.5 text-xs text-slate-500">Fondateur, zeroabo.fr — Québec — Mars 2026</p>
              </div>
            </div>

            {/* Colonne droite — résultats */}
            <div className="flex flex-col gap-5">

              {/* Scores avant/après */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/8 bg-slate-900/60 p-4 text-center">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Score initial</p>
                  <p className="text-4xl font-black text-slate-200">3<span className="text-xl text-slate-500">/5</span></p>
                </div>
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4 text-center">
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1">Score final</p>
                  <p className="text-4xl font-black text-emerald-400">5<span className="text-xl text-emerald-600">/5</span></p>
                </div>
              </div>

              {/* Problèmes détectés */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Lacunes détectées</p>
                <ul className="flex flex-col gap-2">
                  <li className="flex items-start gap-2.5 rounded-lg border border-red-500/20 bg-red-500/5 px-3 py-2.5">
                    <span className="mt-0.5 text-[11px] font-bold text-red-400 shrink-0">ÉLEVÉ</span>
                    <span className="text-xs text-slate-300">Droits des utilisateurs absents des mentions légales</span>
                  </li>
                  <li className="flex items-start gap-2.5 rounded-lg border border-amber-500/20 bg-amber-500/5 px-3 py-2.5">
                    <span className="mt-0.5 text-[11px] font-bold text-amber-400 shrink-0">MOYEN</span>
                    <span className="text-xs text-slate-300">Vercel Analytics actif sans déclaration aux visiteurs</span>
                  </li>
                  <li className="flex items-start gap-2.5 rounded-lg border border-slate-500/20 bg-slate-500/5 px-3 py-2.5">
                    <span className="mt-0.5 text-[11px] font-bold text-slate-400 shrink-0">FAIBLE</span>
                    <span className="text-xs text-slate-300">Cookies des liens affiliés non encadrés</span>
                  </li>
                </ul>
              </div>

              {/* Livrables reçus */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Livrables de l&apos;audit complet</p>
                <ul className="flex flex-col gap-1.5">
                  {[
                    "Plan de correction priorisé avec code exact à copier",
                    "Modèle de politique de confidentialité Loi 25",
                    "Attestation de conformité post-corrections",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-emerald-400 shrink-0 mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href="#formulaire"
                className="mt-auto inline-flex items-center justify-center rounded-xl bg-sky-500 px-5 py-3 text-sm font-bold text-white shadow-[0_0_24px_rgba(14,165,233,0.25)] transition-all hover:bg-sky-400 hover:shadow-[0_0_32px_rgba(14,165,233,0.35)]"
              >
                Demander mon pré-audit gratuit →
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
