"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question:
      "Qu'est-ce que je reçois exactement dans le rapport d'audit complet ?",
    answer:
      "Le rapport est un document PDF structuré en quatre parties : (1) cartographie de tous les cookies et scripts tiers actifs sur votre site, (2) analyse de chaque formulaire et du parcours de consentement, (3) revue de vos contenus légaux (politique de confidentialité, mentions), et (4) plan d'action avec chaque correctif classé par priorité et par niveau d'effort. Une séance de restitution à distance est incluse pour passer en revue les points clés et répondre à vos questions.",
  },
  {
    question: "Combien de temps dure l'audit une fois commandé ?",
    answer:
      "Pour un site vitrine ou un OBNL typique (jusqu'à 30 pages), le délai de livraison est généralement de 5 à 10 jours ouvrables après la confirmation de la commande et le cadrage de la portée. Pour un site plus complexe (boutique, espace membres, sous-domaines multiples), le délai est précisé dans le devis. Les délais sont toujours confirmés avant de commencer.",
  },
  {
    question: "Est-ce que vous accédez à notre site ou à nos serveurs ?",
    answer:
      "Non. L'audit est entièrement réalisé en lecture seule, côté utilisateur : nous analysons votre site tel qu'un visiteur le voit, sans accès à votre hébergement, à votre CMS ni à vos bases de données. Les correctifs proposés dans le rapport sont ensuite appliqués par votre équipe ou votre agence web.",
  },
  {
    question:
      "Notre site a été construit par une agence — l'audit est-il quand même possible ?",
    answer:
      "Oui, et c'est même la situation la plus courante. L'audit ne nécessite aucun accès technique de votre part. Le rapport inclut des recommandations formulées de façon à être directement transmissibles à votre agence ou à votre développeur, avec les corrections concrètes à apporter.",
  },
  {
    question:
      "Le rapport peut-il être partagé avec notre direction, notre CA ou nos bailleurs ?",
    answer:
      "Oui. Le rapport est conçu pour être lisible par des non-spécialistes et peut être partagé librement en interne. Si vous avez besoin d'un format adapté à une présentation spécifique (CA, rapport annuel, financement), signalez-le lors du cadrage et nous ajusterons le livrable en conséquence.",
  },
  {
    question: "Comment se calcule le prix d'un audit complet ?",
    answer:
      "Le prix dépend principalement du nombre de pages analysées, du nombre de formulaires et de la complexité des scripts tiers en place. Pour la majorité des sites vitrines et des OBNL, l'audit complet se situe entre 450 $ et 900 $. Le devis précis vous est remis après le pré-audit gratuit — vous avez donc déjà une vision des enjeux avant de vous engager financièrement.",
  },
  {
    question:
      "Que se passe-t-il si on modifie notre site après l'audit ?",
    answer:
      "Le rapport couvre l'état de votre site au moment de l'audit. Si des changements importants sont apportés après livraison (refonte, ajout de formulaires, migration d'outils), nous pouvons réaliser un audit de suivi ciblé sur les nouvelles zones, à un tarif réduit. Les conditions sont précisées dans le devis initial.",
  },
];

export function OfferFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      aria-labelledby="offer-faq-heading"
      className="mt-16 rounded-3xl bg-slate-950/70 p-6 ring-1 ring-slate-800 md:p-8"
    >
      <header className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
          FAQ
        </p>
        <h2
          id="offer-faq-heading"
          className="mt-2 text-2xl font-bold tracking-tight text-slate-50"
        >
          Vos questions sur l&apos;audit Loi&nbsp;25 de votre site
        </h2>
      </header>

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
