/**
 * JSON-LD structured data — homepage
 * 3 schémas : FAQPage, LocalBusiness, Service
 * Rendu côté serveur, invisible dans l'UI, lu par Google.
 */

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Le pré-audit est vraiment gratuit ? Qu'est-ce que vous attendez en retour ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, entièrement gratuit — aucune carte de crédit, aucun engagement. Le pré-audit nous permet de vous montrer concrètement ce que nous faisons. Si vous souhaitez aller plus loin avec un audit complet, vous recevrez un devis précis. Vous décidez librement.",
      },
    },
    {
      "@type": "Question",
      name: "On n'a pas d'équipe TI ni de responsable juridique — est-ce que ça nous convient quand même ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "C'est exactement pour vous. Notre service est conçu pour les organisations sans équipe dédiée. Vous n'avez pas besoin de comprendre les rouages techniques ou juridiques : on vous explique clairement ce qui pose problème et comment le corriger, en termes accessibles.",
      },
    },
    {
      "@type": "Question",
      name: "On n'a pas encore été contacté par la CAI — est-ce vraiment urgent ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ne pas avoir reçu d'avis ne signifie pas être conforme. La CAI peut agir sur plainte ou de sa propre initiative. Les obligations liées aux cookies et au consentement sont actives depuis 2023 — chaque mois qui passe représente une période d'exposition au risque.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle est la différence entre le pré-audit et l'audit complet ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le pré-audit est gratuit : à partir du formulaire, nous produisons un premier portrait des zones à risque sur votre site. L'audit complet est une analyse approfondie avec rapport détaillé, score de risque par zone et plan d'action priorisé. Le pré-audit vous permet d'évaluer la pertinence de l'audit complet avant de vous engager.",
      },
    },
    {
      "@type": "Question",
      name: "Est-ce que cet audit me rend entièrement « conforme Loi 25 » ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non — et nous le disons clairement. L'audit porte sur votre site web (cookies, formulaires, contenus légaux) et couvre les obligations les plus visibles et les plus vérifiées. La conformité globale inclut aussi vos processus internes, vos contrats et votre gouvernance des données, qui dépassent le périmètre du site.",
      },
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "auditloi25.ca",
  description:
    "Service d'audit de conformité Loi 25 pour sites web. Spécialisé PME, OBNL et organismes locaux québécois.",
  url: "https://auditloi25.ca",
  email: "votreboosterdigital@outlook.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Montréal",
    addressRegion: "QC",
    addressCountry: "CA",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Québec, Canada",
  },
  priceRange: "$$",
  knowsLanguage: "fr-CA",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Audit de conformité Loi 25 pour sites web",
  alternateName: "Pré-audit Loi 25 gratuit",
  description:
    "Analyse complète de votre site web pour vérifier la conformité à la Loi 25 (Québec) : cookies et témoins de connexion, bannière de consentement, formulaires, politiques de confidentialité et contenus légaux. Pré-audit gratuit, audit complet à partir de 450 $.",
  provider: {
    "@type": "LocalBusiness",
    name: "auditloi25.ca",
    url: "https://auditloi25.ca",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Québec, Canada",
  },
  audience: {
    "@type": "Audience",
    audienceType: "PME, OBNL, organismes locaux québécois",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Pré-audit Loi 25",
      price: "0",
      priceCurrency: "CAD",
      description:
        "Premier portrait des zones à risque sur votre site web. Gratuit, sans engagement, retour sous 48 h ouvrables.",
    },
    {
      "@type": "Offer",
      name: "Audit complet Loi 25",
      price: "450",
      priceCurrency: "CAD",
      description:
        "Analyse approfondie avec rapport détaillé, score de risque par zone et plan d'action priorisé.",
    },
  ],
  serviceType: "Audit de conformité Loi 25",
  url: "https://auditloi25.ca/offre",
};

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
