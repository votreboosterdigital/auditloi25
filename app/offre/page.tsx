import type { Metadata } from "next";
import Link from "next/link";
import { Check, ShieldCheck, FileSearch, FileText, BarChart2 } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { OfferFaq } from "@/components/offer/offer-faq";
import { StripeCheckoutButton } from "@/components/stripe-checkout-button";

export const metadata: Metadata = {
  title:
    "Offre d'audit Loi 25 pour site web | Prix et livrables – auditloi25.ca",
  description:
    "Découvrez notre offre d'audit de conformité Loi 25 pour PME et OBNL québécois : livrables détaillés, tarifs transparents, processus clair. Pré-audit gratuit — audit complet à partir de 450 $.",
  alternates: { canonical: "https://auditloi25.ca/offre" },
};

// ── Livrables ────────────────────────────────────────────────────────────────
const deliverables = [
  {
    icon: ShieldCheck,
    label: "1. Cartographie cookies & scripts",
    items: [
      "Inventaire complet des cookies déposés sur votre site (nécessaires, analytiques, publicitaires).",
      "Identification de tous les scripts tiers et outils de suivi actifs sur vos pages.",
      "Vérification des fournisseurs et des transferts de données potentiels hors Québec.",
    ],
  },
  {
    icon: FileSearch,
    label: "2. Formulaires & parcours de consentement",
    items: [
      "Analyse de chaque formulaire collectant des données personnelles (contact, inscription, don, paiement).",
      "Vérification de la présence et de la conformité des mentions d'information Loi 25.",
      "Évaluation du parcours de consentement et des mécanismes de retrait.",
    ],
  },
  {
    icon: FileText,
    label: "3. Bannière & contenus légaux",
    items: [
      "Évaluation de la bannière de consentement : configuration, clarté, facilité de refus.",
      "Revue de la politique de confidentialité et des mentions légales liées au site.",
      "Vérification de l'accessibilité des contenus légaux depuis l'ensemble des pages.",
    ],
  },
  {
    icon: BarChart2,
    label: "4. Rapport synthèse & plan d'action",
    items: [
      "Score de risque par zone : faible, modéré ou élevé.",
      "Liste des correctifs concrets classés par priorité et par niveau d'effort réaliste.",
      "Recommandations sur les prochaines étapes — techniques, légales ou organisationnelles.",
    ],
  },
];

// ── Processus ─────────────────────────────────────────────────────────────────
const steps = [
  {
    title: "Pré-audit gratuit via le formulaire.",
    description:
      "Vous décrivez votre site, vos pages clés et vos outils. Nous réalisons un premier pré-audit Loi 25 et vous envoyons instantanément un bilan des zones à risque — sans engagement.",
  },
  {
    title: "Devis précis et cadrage de la portée.",
    description:
      "Sur la base du pré-audit, nous vous proposons un devis adapté à votre site. Nous définissons ensemble les pages, sous-domaines et formulaires à inclure. Vous validez avant de commencer.",
  },
  {
    title: "Analyse complète du site.",
    description:
      "Audit en lecture seule : cookies, scripts, formulaires, bannière, contenus légaux. Sans accès à votre hébergement ni à vos systèmes. Des échanges courts par courriel peuvent être nécessaires pour clarifier certains points.",
  },
  {
    title: "Remise du rapport + séance de questions-réponses.",
    description:
      "Vous recevez le rapport PDF avec le plan d'action priorisé, suivi d'une rencontre à distance pour passer en revue les risques principaux, répondre à vos questions et identifier les prochaines étapes.",
  },
];

// ── Pour qui ──────────────────────────────────────────────────────────────────
const audiences = [
  {
    label: "PME de services et cabinets",
    description:
      "Votre site présente vos services, génère des demandes de soumission ou des prises de rendez-vous. Vous utilisez Google Analytics, des formulaires de contact, une infolettre — et vous voulez savoir ce qu'il faut corriger en priorité.",
  },
  {
    label: "OBNL, associations et fondations",
    description:
      "Vous collectez des données de membres, bénévoles ou donateurs via le site (inscriptions, dons, infolettre). La confiance de votre communauté est un actif essentiel — une non-conformité peut l'ébranler rapidement.",
  },
  {
    label: "Organisations publiques locales",
    description:
      "Municipalités, bibliothèques, organismes paramunicipaux : vous devez montrer que vous prenez la Loi 25 au sérieux. L'audit vous donne une base documentée sans avoir à mobiliser des ressources internes importantes.",
  },
  {
    label: "Équipes sans ressource juridique interne",
    description:
      "Vous voulez comprendre les enjeux avant d'impliquer un cabinet d'avocats. L'audit vous prépare à ces échanges et vous évite de payer des honoraires pour obtenir des informations de base sur votre propre site.",
  },
];

// ── Grille tarifaire ──────────────────────────────────────────────────────────
const pricingRows = [
  {
    type: "Site vitrine simple (moins de 10 pages)",
    preaudit: "Gratuit",
    audit: "450 $ – 600 $",
  },
  {
    type: "Site avec formulaires multiples (10 à 30 pages)",
    preaudit: "Gratuit",
    audit: "600 $ – 750 $",
  },
  {
    type: "Site OBNL avec espace membres ou dons en ligne",
    preaudit: "Gratuit",
    audit: "700 $ – 900 $",
  },
  {
    type: "Site complexe (boutique, intranet, sous-domaines)",
    preaudit: "Gratuit",
    audit: "Sur devis",
  },
];

export default function OffrePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Qu'est-ce que je reçois exactement dans le rapport d'audit complet ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le rapport est un document PDF structuré en quatre parties : (1) cartographie de tous les cookies et scripts tiers actifs sur votre site, (2) analyse de chaque formulaire et du parcours de consentement, (3) revue de vos contenus légaux (politique de confidentialité, mentions), et (4) plan d'action avec chaque correctif classé par priorité et par niveau d'effort. Une séance de restitution à distance est incluse pour passer en revue les points clés et répondre à vos questions.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de temps dure l'audit une fois commandé ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pour un site vitrine ou un OBNL typique (jusqu'à 30 pages), le délai de livraison est généralement de 5 à 10 jours ouvrables après la confirmation de la commande et le cadrage de la portée. Pour un site plus complexe (boutique, espace membres, sous-domaines multiples), le délai est précisé dans le devis. Les délais sont toujours confirmés avant de commencer.",
        },
      },
      {
        "@type": "Question",
        name: "Est-ce que vous accédez à notre site ou à nos serveurs ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non. L'audit est entièrement réalisé en lecture seule, côté utilisateur : nous analysons votre site tel qu'un visiteur le voit, sans accès à votre hébergement, à votre CMS ni à vos bases de données. Les correctifs proposés dans le rapport sont ensuite appliqués par votre équipe ou votre agence web.",
        },
      },
      {
        "@type": "Question",
        name: "Notre site a été construit par une agence — l'audit est-il quand même possible ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, et c'est même la situation la plus courante. L'audit ne nécessite aucun accès technique de votre part. Le rapport inclut des recommandations formulées de façon à être directement transmissibles à votre agence ou à votre développeur, avec les corrections concrètes à apporter.",
        },
      },
      {
        "@type": "Question",
        name: "Le rapport peut-il être partagé avec notre direction, notre CA ou nos bailleurs ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Le rapport est conçu pour être lisible par des non-spécialistes et peut être partagé librement en interne. Si vous avez besoin d'un format adapté à une présentation spécifique (CA, rapport annuel, financement), signalez-le lors du cadrage et nous ajusterons le livrable en conséquence.",
        },
      },
      {
        "@type": "Question",
        name: "Comment se calcule le prix d'un audit complet ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le prix dépend principalement du nombre de pages analysées, du nombre de formulaires et de la complexité des scripts tiers en place. Pour la majorité des sites vitrines et des OBNL, l'audit complet se situe entre 450 $ et 900 $. Le devis précis vous est remis après le pré-audit gratuit — vous avez donc déjà une vision des enjeux avant de vous engager financièrement.",
        },
      },
      {
        "@type": "Question",
        name: "Que se passe-t-il si on modifie notre site après l'audit ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le rapport couvre l'état de votre site au moment de l'audit. Si des changements importants sont apportés après livraison (refonte, ajout de formulaires, migration d'outils), nous pouvons réaliser un audit de suivi ciblé sur les nouvelles zones, à un tarif réduit. Les conditions sont précisées dans le devis initial.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />

      <main className="relative min-h-screen bg-slate-950 text-slate-50">
        {/* Fond décoratif */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-x-[-40%] top-[-25%] h-[360px] bg-gradient-to-br from-sky-500/20 via-emerald-500/10 to-transparent blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-10">
          {/* ── Hero ─────────────────────────────────────────────────────── */}
          <section
            aria-labelledby="offer-hero-heading"
            className="mt-10 grid gap-10 md:grid-cols-[minmax(0,3fr),minmax(0,2fr)] md:items-center"
          >
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
                Offre d&apos;audit Loi 25
              </p>
              <h1
                id="offer-hero-heading"
                className="text-balance text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl md:text-[42px]"
                style={{ letterSpacing: "-0.02em" }}
              >
                Audit Loi&nbsp;25 de votre site web : rapport clair, corrections concrètes.
              </h1>
              <p className="max-w-xl text-[17px] leading-relaxed text-slate-300">
                Nous vérifions ce que la CAI attend de votre site&nbsp;:
                cookies, formulaires, bannière de consentement et contenus
                légaux. Vous recevez un rapport avec un score de risque par zone
                et un plan d&apos;action dans l&apos;ordre des priorités.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/#formulaire"
                  className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_24px_rgba(16,185,129,0.25)] transition-colors hover:bg-emerald-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  Obtenir mon pré‑audit gratuit
                </Link>
                <a
                  href="#tarifs"
                  className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-sky-300 transition-colors hover:text-sky-200"
                >
                  Voir les tarifs
                  <span className="text-[11px]">↓</span>
                </a>
              </div>
            </div>

            {/* Encadré résumé */}
            <aside className="rounded-2xl border border-slate-800/80 bg-slate-900/85 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.9)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                En bref
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "Pré-audit gratuit — résultat instantané.",
                  "Audit complet à partir de 450 $ (devis après pré-audit).",
                  "Rapport PDF + séance de restitution incluse.",
                  "Aucun accès à vos serveurs ou à votre CMS requis.",
                  "Corrections transmissibles à votre agence ou développeur.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-slate-200"
                  >
                    <Check
                      size={14}
                      className="mt-0.5 shrink-0 text-emerald-400"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5 border-t border-slate-700/50 pt-4">
                <p className="text-[11px] text-slate-500">
                  Checklist Loi 25 gratuite pour préparer votre site&nbsp;:
                </p>
                <Link
                  href="/ressources/checklist-loi-25-site-web"
                  className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-sky-300 hover:text-sky-200"
                >
                  Checklist Loi&nbsp;25 pour votre site web
                  <span className="text-[10px]">→</span>
                </Link>
              </div>
            </aside>
          </section>

          {/* ── Livrables ────────────────────────────────────────────────── */}
          <section
            aria-labelledby="deliverables-heading"
            className="mt-16"
          >
            <header className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
                Livrables
              </p>
              <h2
                id="deliverables-heading"
                className="mt-2 text-2xl font-bold tracking-tight text-slate-50"
              >
                Ce que contient l&apos;audit Loi&nbsp;25 de votre site web
              </h2>
              <p className="mt-2 max-w-xl text-base text-slate-300">
                Quatre modules structurés, couvrant l&apos;ensemble des zones
                vérifiées par la CAI pour les sites web québécois.
              </p>
            </header>

            <div className="grid gap-6 md:grid-cols-2">
              {deliverables.map((d) => {
                const Icon = d.icon;
                return (
                  <div
                    key={d.label}
                    className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-400/10">
                      <Icon
                        size={20}
                        className="text-sky-400"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="mt-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-sky-400">
                      {d.label}
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {d.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-slate-300"
                        >
                          <Check
                            size={13}
                            className="mt-0.5 shrink-0 text-emerald-400"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ── Processus ────────────────────────────────────────────────── */}
          <section
            aria-labelledby="process-heading"
            className="mt-16 rounded-3xl bg-slate-900/60 p-6 ring-1 ring-slate-800 md:p-8"
          >
            <header className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
                Déroulement
              </p>
              <h2
                id="process-heading"
                className="mt-2 text-2xl font-bold tracking-tight text-slate-50"
              >
                Comment se déroule l&apos;audit Loi&nbsp;25 de votre site, concrètement
              </h2>
            </header>

            <ol className="space-y-5 text-sm text-slate-200">
              {steps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/40">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-100">{step.title}</p>
                    <p className="mt-1 text-slate-400">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8">
              <Link
                href="/#formulaire"
                className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-colors hover:bg-emerald-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Commencer par le pré‑audit gratuit
              </Link>
            </div>
          </section>

          {/* ── Pour qui ─────────────────────────────────────────────────── */}
          <section
            aria-labelledby="audience-heading"
            className="mt-16"
          >
            <header className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
                Pour qui
              </p>
              <h2
                id="audience-heading"
                className="mt-2 text-2xl font-bold tracking-tight text-slate-50"
              >
                Cette offre est faite pour vous si…
              </h2>
              <p className="mt-2 max-w-xl text-base text-slate-300">
                Vous n&apos;avez pas besoin d&apos;un programme de conformité complet —
                vous voulez d&apos;abord savoir où vous en êtes, concrètement, sur
                votre site web.
              </p>
            </header>

            <div className="grid gap-4 sm:grid-cols-2">
              {audiences.map((a) => (
                <div
                  key={a.label}
                  className="rounded-2xl bg-slate-900/70 p-5 ring-1 ring-slate-700/50"
                >
                  <h3 className="text-sm font-semibold text-slate-100">
                    {a.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {a.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Tarifs ───────────────────────────────────────────────────── */}
          <section
            id="tarifs"
            aria-labelledby="pricing-detail-heading"
            className="mt-16 rounded-3xl bg-slate-950/70 p-6 ring-1 ring-slate-800 md:p-8"
          >
            <header className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
                Tarifs
              </p>
              <h2
                id="pricing-detail-heading"
                className="mt-2 text-2xl font-bold tracking-tight text-slate-50"
              >
                Tarifs de l&apos;audit de conformité Loi&nbsp;25 — PME et OBNL
              </h2>
              <p className="mt-2 max-w-xl text-base text-slate-300">
                Le pré-audit est toujours gratuit. Les fourchettes ci-dessous
                sont indicatives&nbsp;: un devis précis vous est remis après le
                pré-audit, avant tout engagement.
              </p>
            </header>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700/60">
                    <th className="pb-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                      Type de site
                    </th>
                    <th className="pb-3 pl-4 text-left text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                      Pré-audit
                    </th>
                    <th className="pb-3 pl-4 text-left text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                      Audit complet
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {pricingRows.map((row) => (
                    <tr key={row.type}>
                      <td className="py-3.5 text-slate-200">{row.type}</td>
                      <td className="py-3.5 pl-4 font-semibold text-emerald-400">
                        {row.preaudit}
                      </td>
                      <td className="py-3.5 pl-4 font-semibold text-sky-400">
                        {row.audit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 rounded-xl bg-slate-900/60 p-4 ring-1 ring-slate-700/50 text-sm text-slate-300">
              <p>
                <span className="font-semibold text-slate-100">
                  Option accompagnement&nbsp;:
                </span>{" "}
                session de travail avec votre équipe ou votre agence, révision
                des correctifs après mise en œuvre, synthèse transmissible à
                votre CA ou vos bailleurs — sur devis, selon vos besoins.
              </p>
            </div>

            <div className="mt-6 rounded-xl bg-slate-800/40 p-4 text-xs text-slate-500 ring-1 ring-slate-700/40">
              <p>
                <span className="font-medium text-slate-400">À noter&nbsp;:</span>{" "}
                cet audit ne remplace pas un avis juridique. Il couvre les
                obligations les plus visibles et vérifiées par la CAI pour les
                sites web. Pour les aspects contractuels, de gouvernance des
                données ou de gestion des incidents, un conseiller juridique
                spécialisé en protection des données reste recommandé.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/#formulaire"
                className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-colors hover:bg-emerald-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Obtenir mon pré‑audit gratuit
              </Link>
              <Link
                href="/ressources/sources-loi-25"
                className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-sky-300 transition-colors hover:text-sky-200"
              >
                Sources et références Loi&nbsp;25
                <span className="text-[11px]">→</span>
              </Link>
            </div>
          </section>

          {/* ── FAQ ──────────────────────────────────────────────────────── */}
          <OfferFaq />

          {/* ── CTA Final ────────────────────────────────────────────────── */}
          <section
            aria-labelledby="offer-cta-heading"
            className="mb-10 mt-16 rounded-3xl bg-gradient-to-br from-sky-500/10 via-slate-950/90 to-emerald-500/10 p-8 text-center ring-1 ring-sky-500/20"
          >
            <h2
              id="offer-cta-heading"
              className="text-2xl font-bold tracking-tight text-slate-50"
            >
              Commencez par le pré‑audit — c&apos;est gratuit et sans engagement
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-slate-200">
              En 2 minutes, vous nous donnez les informations essentielles sur
              votre site. Vous recevez instantanément un premier bilan clair
              avec les zones à risque et une estimation pour l&apos;audit complet.
              Vous décidez ensuite.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#formulaire"
                className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_24px_rgba(16,185,129,0.25)] transition-colors hover:bg-emerald-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Obtenir mon pré‑audit gratuit
              </Link>
              <StripeCheckoutButton />
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </>
  );
}
