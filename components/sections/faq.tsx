"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";

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
  {
    question: "Qui s'occupe de corriger les problèmes trouvés ?",
    answer:
      "C'est vous ou votre équipe web qui effectuez les corrections. Notre rapport priorise les actions avec des instructions claires et adaptées à votre contexte. Si vous avez besoin d'aide pour l'implémentation, notre offre Audit + Accompagnement couvre cet aspect.",
  },
  {
    question: "Combien de temps faut-il pour se mettre en conformité ?",
    answer:
      "Les corrections prioritaires — bannière de cookies et formulaires de consentement — se règlent généralement en 1 à 3 jours avec un développeur. Une mise en conformité complète prend en moyenne 2 à 4 semaines selon la complexité du site.",
  },
  {
    question: "Est-ce que le pré-audit suffit pour être conforme à la Loi 25 ?",
    answer:
      "Non. Le pré-audit identifie vos principales zones à risque et vous donne une première vision claire. Seul l'audit complet couvre l'ensemble des obligations Loi 25 avec un plan d'action détaillé et des recommandations priorisées.",
  },
  {
    question: "Que se passe-t-il si on n'est pas d'accord avec les résultats ?",
    answer:
      "Chaque point de notre rapport est appuyé sur une source officielle — texte de loi, guides de la CAI ou jurisprudence. Nous vous invitons à discuter de tout résultat qui vous semble incorrect : cette révision est incluse dans le service.",
  },
  {
    question: "Travaillez-vous avec des organismes à but non lucratif (OBNL) ?",
    answer:
      "Oui. Les OBNL sont soumis à la Loi 25 au même titre que les entreprises privées. Nous offrons une approche adaptée à leur réalité. Consultez notre page dédiée pour en savoir plus.",
  },
  {
    question: "Pouvez-vous auditer plusieurs sites en même temps ?",
    answer:
      "Oui, nous proposons des forfaits multi-sites pour les organisations qui gèrent plusieurs propriétés web. Contactez-nous pour discuter d'un devis personnalisé.",
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

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section aria-labelledby="faq-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div
          variants={fadeUp}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2
            id="faq-heading"
            className="text-3xl font-black tracking-tight text-white sm:text-4xl"
          >
            Questions posées avant de commencer
          </h2>
        </motion.div>

        <div className="mt-8 divide-y divide-white/8">
          {faqs.map((faq, index) => (
            <div key={index} className="py-4">
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 text-left"
                aria-expanded={open === index}
              >
                <span className="font-medium text-slate-200">{faq.question}</span>
                <motion.span
                  animate={{ rotate: open === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 text-sky-400"
                >
                  <Plus className="h-5 w-5" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open === index && (
                  <motion.div
                    key="answer"
                    initial={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                    animate={prefersReducedMotion ? undefined : { height: "auto", opacity: 1 }}
                    exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                    className="overflow-hidden"
                  >
                    <p className="pt-3 text-sm text-slate-400 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
