import type { Metadata } from "next";
import Link from "next/link";
import { Home, ShieldCheck, CheckCircle2, AlertTriangle, ArrowLeft } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Loi 25 pour les courtiers immobiliers au Québec | auditloi25.ca",
  description:
    "Courtier immobilier au Québec — vos formulaires de contact, évaluations en ligne et infolettres sont soumis à la Loi 25. Voici ce que votre site doit respecter.",
  alternates: { canonical: "https://auditloi25.ca/ressources/loi-25-courtiers-immobiliers" },
};

export default function Loi25CourtiersImmobiliersPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Loi 25 pour les courtiers immobiliers au Québec",
    description:
      "Courtier immobilier au Québec — vos formulaires de contact, évaluations en ligne et infolettres sont soumis à la Loi 25. Voici ce que votre site doit respecter.",
    datePublished: "2026-04-05",
    dateModified: "2026-04-05",
    author: {
      "@type": "Organization",
      name: "auditloi25.ca",
      url: "https://auditloi25.ca",
    },
    publisher: {
      "@type": "Organization",
      name: "auditloi25.ca",
      url: "https://auditloi25.ca",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://auditloi25.ca/ressources/loi-25-courtiers-immobiliers",
    },
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <BreadcrumbJsonLd items={[
        { name: "Accueil", href: "/" },
        { name: "Ressources", href: "/ressources" },
        { name: "Loi 25 pour les courtiers immobiliers", href: "/ressources/loi-25-courtiers-immobiliers" },
      ]} />
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">

        <div className="mb-10 flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold text-slate-100 hover:text-white transition-colors">
            auditloi25.ca
          </Link>
        </div>

        <nav aria-label="Fil d'Ariane" className="mb-8 text-xs text-slate-500">
          <Link href="/" className="transition-colors hover:text-slate-300">Accueil</Link>
          <span className="mx-2" aria-hidden="true">·</span>
          <Link href="/ressources" className="transition-colors hover:text-slate-300">Ressources</Link>
          <span className="mx-2" aria-hidden="true">·</span>
          <span className="text-slate-400">Loi 25 et courtiers immobiliers</span>
        </nav>

        <header className="mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-300 ring-1 ring-sky-500/30">
            <Home size={11} aria-hidden="true" />
            Pour les courtiers immobiliers
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl">
            Loi&nbsp;25 et courtiers immobiliers : votre site web est-il conforme&nbsp;?
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Un courtier immobilier au Québec collecte des informations personnelles à chaque interaction : formulaires d&apos;évaluation, demandes de visite, infolettres, systèmes CRM. La Loi 25 s&apos;applique à tout ça — et les risques sont concrets.
          </p>
          <p className="mt-3 text-xs text-slate-500">5 min de lecture</p>
        </header>

        {/* Section 1 — Hook */}
        <section className="mb-12" aria-labelledby="section-hook">
          <h2 id="section-hook" className="mb-4 text-xl font-bold text-slate-50">
            « Je collecte juste le nom et le courriel pour les visites. »
          </h2>
          <div className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50 text-sm leading-relaxed text-slate-300 space-y-4">
            <p>
              Un courtier de Laval. Site refait en 2023, formulaire de demande de visite, widget d&apos;évaluation gratuite de propriété, infolettre mensuelle sur le marché immobilier. Rien de sophistiqué.
            </p>
            <p>
              Mais ce formulaire d&apos;évaluation collecte l&apos;adresse de la propriété, la situation financière approximative du client, ses projets de vente. Ces données sont des renseignements personnels au sens de la Loi 25 — et elles sont probablement transmises à un CRM américain sans clause de conformité.
            </p>
            <p className="font-medium text-slate-200">
              Dans l&apos;immobilier québécois, chaque formulaire de contact, chaque demande d&apos;évaluation et chaque abonnement à une infolettre représente une collecte de renseignements personnels soumise à la Loi 25.
            </p>
          </div>
        </section>

        {/* Section 2 — Obligations */}
        <section className="mb-12" aria-labelledby="section-loi">
          <h2 id="section-loi" className="mb-6 text-xl font-bold text-slate-50">
            Ce que la Loi&nbsp;25 implique pour un courtier immobilier
          </h2>
          <div className="space-y-3">
            {[
              {
                texte: "Tout formulaire de contact ou d'évaluation doit informer clairement le client : pourquoi ces données sont collectées, qui y a accès, et combien de temps elles sont conservées.",
              },
              {
                texte: "Les systèmes CRM (HubSpot, Salesforce, Follow Up Boss...) hébergés aux États-Unis doivent faire l'objet d'une évaluation des facteurs relatifs à la vie privée si des données personnelles y sont transférées.",
              },
              {
                texte: "Les infolettres et listes de diffusion nécessitent un consentement explicite et révocable — distinct de la demande de service. Un désabonnement doit être simple et effectif.",
              },
              {
                texte: "Les acheteurs et vendeurs ont le droit de consulter, corriger ou faire supprimer leurs données. Votre site doit indiquer comment exercer ce droit.",
              },
              {
                texte: "Votre bannière de cookies doit permettre de refuser aussi facilement qu'accepter, notamment si vous utilisez Meta Pixel ou Google Ads sur votre site.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 rounded-xl bg-slate-900/60 p-4 ring-1 ring-slate-700/40">
                <ShieldCheck size={15} className="mt-0.5 shrink-0 text-sky-400" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-slate-300">{item.texte}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 — Situations à risque */}
        <section className="mb-12" aria-labelledby="section-situations">
          <h2 id="section-situations" className="mb-6 text-xl font-bold text-slate-50">
            Les 4 situations à risque pour un courtier immobilier
          </h2>
          <div className="space-y-4">
            {[
              {
                icon: <Home size={18} className="text-sky-400" aria-hidden="true" />,
                titre: "Formulaire d'évaluation de propriété",
                texte: "Ces formulaires collectent l'adresse du bien, la situation financière estimée, les motivations de vente. Ce sont des données sensibles transmises souvent à un CRM tiers. Sont-elles déclarées dans votre politique de confidentialité ? Le client sait-il où elles vont ?",
                question: "À vérifier : votre formulaire d'évaluation mentionne-t-il le traitement des données et l'accès par des tiers ?",
              },
              {
                icon: <CheckCircle2 size={18} className="text-emerald-400" aria-hidden="true" />,
                titre: "CRM immobilier (HubSpot, Follow Up Boss, Centris...)",
                texte: "La plupart des CRM immobiliers sont hébergés aux États-Unis. Transférer des données personnelles de clients québécois hors du Canada sans évaluation de risque ni contrat de traitement adéquat constitue une non-conformité directe à la Loi 25.",
                question: "À vérifier : votre contrat CRM prévoit-il des garanties de protection des données personnelles ?",
              },
              {
                icon: <AlertTriangle size={18} className="text-amber-400" aria-hidden="true" />,
                titre: "Infolettre et alertes marché immobilier",
                texte: "Envoyer des alertes de nouvelles propriétés ou des bilans du marché nécessite un consentement explicite — distinct du fait d'avoir rempli un formulaire de contact. Un simple courriel récupéré lors d'une visite ne suffit pas.",
                question: "À vérifier : l'inscription à vos alertes est-elle distincte de la demande de service et désactivable facilement ?",
              },
              {
                icon: <ShieldCheck size={18} className="text-emerald-400" aria-hidden="true" />,
                titre: "Meta Pixel, Google Ads et remarketing",
                texte: "Le remarketing immobilier est une pratique courante — mais chaque pixel de suivi sur votre site requiert un consentement explicite selon la Loi 25. Un visiteur qui n'a pas consenti ne peut pas être ciblé via Facebook ou Google Ads.",
                question: "À vérifier : votre bannière cookies désactive-t-elle bien les pixels Meta et Google en cas de refus ?",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50">
                <div className="flex items-center gap-2 mb-3">
                  {item.icon}
                  <h3 className="font-semibold text-slate-100">{item.titre}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-300">{item.texte}</p>
                <p className="mt-3 rounded-lg bg-slate-800/60 px-3 py-2 text-xs text-slate-400 ring-1 ring-slate-700/30">
                  {item.question}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 — Checklist */}
        <section className="mb-12" aria-labelledby="section-checklist">
          <h2 id="section-checklist" className="mb-6 text-xl font-bold text-slate-50">
            Ce que votre site de courtier doit vérifier en priorité
          </h2>
          <div className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50 space-y-3">
            {[
              "Vos formulaires de contact et d'évaluation mentionnent l'usage des données et les tiers qui y ont accès",
              "Votre politique de confidentialité est accessible depuis toutes les pages et à jour",
              "Votre bannière de cookies permet de refuser en un seul clic (Meta Pixel, Google Ads inclus)",
              "Les clients savent comment demander l'accès, la correction ou la suppression de leurs données",
              "Votre CRM ou logiciel de gestion prévoit des garanties contractuelles sur la protection des données",
              "Le consentement à l'infolettre est distinct et révocable indépendamment de la demande de service",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-0.5 h-4 w-4 shrink-0 rounded border border-slate-600 bg-slate-800" aria-hidden="true" />
                <p className="text-sm text-slate-300">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Pour aller plus loin :{" "}
            <Link href="/ressources/checklist-loi-25-site-web" className="text-sky-400 underline underline-offset-2 hover:text-sky-300">
              Checklist Loi 25 complète pour votre site
            </Link>
          </p>
        </section>

        {/* Section 5 — Service */}
        <section className="mb-12" aria-labelledby="section-service">
          <h2 id="section-service" className="mb-4 text-xl font-bold text-slate-50">
            Un audit adapté aux courtiers sans équipe conformité interne
          </h2>
          <div className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50 text-sm leading-relaxed text-slate-300 space-y-3">
            <p>
              La grande majorité des courtiers immobiliers au Québec travaillent seuls ou en petite équipe — sans juriste ni responsable protection des données. Le pré-audit gratuit d&apos;auditloi25.ca est conçu pour ça.
            </p>
            <p>
              On analyse les pages critiques de votre site — formulaires, politique de confidentialité, bannière de cookies — et on vous remet un rapport clair sur ce qui est conforme, ce qui ne l&apos;est pas, et dans quel ordre agir. Sans jargon. Sans facturation à l&apos;heure.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="mb-12 rounded-2xl bg-slate-900 p-8 ring-1 ring-slate-700 text-center">
          <p className="text-lg font-bold text-slate-50">
            Votre site collecte des données de clients acheteurs et vendeurs. Vérifiez que c&apos;est dans les règles.
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Pré-audit gratuit · Rapport instantané · Aucun engagement, aucune carte requise
          </p>
          <Link
            href="/#formulaire"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_24px_rgba(16,185,129,0.25)] transition-colors hover:bg-emerald-400 hover:text-white"
          >
            Obtenir mon pré‑audit gratuit
          </Link>
          <div className="mt-3">
            <Link href="/offre" className="text-xs text-sky-400 hover:text-sky-300 transition-colors">
              Voir l&apos;offre d&apos;audit Loi 25 pour courtiers →
            </Link>
          </div>
        </div>

        <RelatedArticles
          slugs={[
            "penalites-loi-25-entreprise",
            "banniere-cookies-loi-25",
          ]}
          heading="Articles liés"
        />

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-8 text-xs text-slate-500">
          <Link href="/" className="inline-flex items-center gap-2 text-sky-300 hover:text-sky-200 transition-colors font-medium">
            <ArrowLeft size={13} aria-hidden="true" />
            Retour à l&apos;accueil
          </Link>
          <Link href="/ressources/checklist-loi-25-site-web" className="text-slate-400 hover:text-slate-200 transition-colors">
            Checklist Loi 25 pour votre site →
          </Link>
        </div>

      </div>
    </main>
  );
}
