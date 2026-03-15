"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "Le pré-audit est vraiment gratuit ? Qu'est-ce que vous attendez en retour ?",
    answer:
      "Oui, entièrement gratuit — aucune carte de crédit, aucun engagement. Le pré-audit nous permet de vous montrer concrètement ce que nous faisons. Si vous souhaitez aller plus loin avec un audit complet, vous recevrez un devis précis. Vous décidez librement.",
  },
  {
    question: "On n'a pas d'équipe TI ni de responsable juridique — est-ce que ça nous convient quand même ?",
    answer:
      "C'est exactement pour vous. Notre service est conçu pour les organisations sans équipe dédiée. Vous n'avez pas besoin de comprendre les rouages techniques ou juridiques : on vous explique clairement ce qui pose problème et comment le corriger, en termes accessibles.",
  },
  {
    question: "On n'a pas encore été contacté par la CAI — est-ce vraiment urgent ?",
    answer:
      "Ne pas avoir reçu d'avis ne signifie pas être conforme. La CAI peut agir sur plainte ou de sa propre initiative. Les obligations liées aux cookies et au consentement sont actives depuis 2023 — chaque mois qui passe représente une période d'exposition au risque.",
  },
  {
    question: "Quelle est la différence entre le pré-audit et l'audit complet ?",
    answer:
      "Le pré-audit est gratuit : à partir du formulaire, nous produisons un premier portrait des zones à risque sur votre site. L'audit complet est une analyse approfondie avec rapport détaillé, score de risque par zone et plan d'action priorisé. Le pré-audit vous permet d'évaluer la pertinence de l'audit complet avant de vous engager.",
  },
  {
    question: "Est-ce que cet audit me rend entièrement « conforme Loi 25 » ?",
    answer:
      "Non — et nous le disons clairement. L'audit porte sur votre site web (cookies, formulaires, contenus légaux) et couvre les obligations les plus visibles et les plus vérifiées. La conformité globale inclut aussi vos processus internes, vos contrats et votre gouvernance des données, qui dépassent le périmètre du site.",
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
        Questions posées avant de commencer
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
