"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "Est-ce que cet audit me rend « conforme Loi 25 » à lui seul ?",
    answer:
      "Non. L'audit se concentre sur votre site web (cookies, formulaires, contenus) et vous aide à corriger les risques les plus visibles. La conformité globale Loi 25 inclut aussi vos processus internes, vos contrats, votre gouvernance des données et d'autres aspects qui dépassent le seul site web.",
  },
  {
    question: "Quels sont les risques si on ne fait rien ?",
    answer:
      "Au-delà de l'image et de la confiance des clients, la Loi 25 prévoit des amendes administratives pouvant aller jusqu'à 10 M$ (ou 2 % du chiffre d'affaires mondial) et des amendes pénales pouvant atteindre 25 M$ (ou 4 % du CA) pour les infractions les plus graves.",
  },
  {
    question: "Combien de temps prend un pré-audit et un audit complet ?",
    answer:
      "Le pré-audit basé sur ce formulaire permet un premier retour en quelques jours ouvrables pour un site typique de PME ou d'OBNL. Un audit complet se planifie ensuite selon la taille du site et vos échéances.",
  },
  {
    question: "À qui s'adresse ce service ?",
    answer:
      "Aux PME de services, OBNL, organismes locaux, fédérations et petites municipalités québécoises qui doivent se structurer face à la Loi 25 avec des ressources limitées, sans équipe juridique ou TI dédiée.",
  },
  {
    question: "Quelle est la différence entre un pré-audit et un audit complet ?",
    answer:
      "Le pré-audit est gratuit : à partir du formulaire, nous produisons un premier portrait des zones à risque sur votre site. L'audit complet est une analyse approfondie avec rapport détaillé, score de risque par zone et plan d'action priorisé. Le pré-audit vous permet d'évaluer la pertinence de l'audit complet avant de vous engager.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      aria-labelledby="faq-heading"
      className="mt-16 rounded-3xl bg-slate-950/70 p-6 ring-1 ring-slate-800 md:p-8"
    >
      <h2
        id="faq-heading"
        className="mb-6 text-2xl font-bold tracking-tight text-slate-50"
      >
        Questions fréquentes
      </h2>

      <dl className="divide-y divide-slate-700/60">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.question} className="py-4">
              <dt>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-start justify-between gap-4 text-left"
                >
                  <span className="text-sm font-medium text-slate-100">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={16}
                    aria-hidden="true"
                    className={[
                      "mt-0.5 shrink-0 text-slate-400 motion-safe:transition-transform motion-safe:duration-200",
                      isOpen ? "rotate-180" : "",
                    ].join(" ")}
                  />
                </button>
              </dt>
              <dd
                className={[
                  "overflow-hidden motion-safe:transition-all motion-safe:duration-300 motion-reduce:transition-none",
                  isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0",
                ].join(" ")}
              >
                <p className="pt-3 text-sm leading-relaxed text-slate-400">
                  {faq.answer}
                </p>
              </dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
}
