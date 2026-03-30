import type { Metadata } from "next";
import Link from "next/link";
import { Globe, Code2, AlertTriangle, CheckCircle2, ArrowLeft } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Loi 25 pour les agences web et marketing au Québec | auditloi25.ca",
  description:
    "Agence web ou marketing au Québec ? La Loi 25 vous concerne doublement : pour votre propre site, et pour les sites de vos clients. Ce que vous devez savoir et vérifier.",
  alternates: { canonical: "https://auditloi25.ca/ressources/loi-25-agence-web-marketing" },
};

export default function Loi25AgenceWebPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Loi 25 pour les agences web et marketing au Québec",
    description:
      "Agence web ou marketing au Québec ? La Loi 25 vous concerne doublement : pour votre propre site, et pour les sites de vos clients. Ce que vous devez savoir et vérifier.",
    datePublished: "2026-03-30",
    dateModified: "2026-03-30",
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
      "@id": "https://auditloi25.ca/ressources/loi-25-agence-web-marketing",
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
        { name: "Loi 25 pour les agences web et marketing", href: "/ressources/loi-25-agence-web-marketing" },
      ]} />
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">

        {/* Navbar minimale */}
        <div className="mb-10 flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold text-slate-100 hover:text-white transition-colors">
            auditloi25.ca
          </Link>
        </div>

        {/* Breadcrumb */}
        <nav aria-label="Fil d'Ariane" className="mb-8 text-xs text-slate-500">
          <Link href="/" className="transition-colors hover:text-slate-300">Accueil</Link>
          <span className="mx-2" aria-hidden="true">·</span>
          <Link href="/ressources" className="transition-colors hover:text-slate-300">Ressources</Link>
          <span className="mx-2" aria-hidden="true">·</span>
          <span className="text-slate-400">Loi 25 et agences web</span>
        </nav>

        {/* En-tête */}
        <header className="mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-300 ring-1 ring-sky-500/30">
            <Globe size={11} aria-hidden="true" />
            Pour les agences web et marketing
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl">
            Loi&nbsp;25 et agences web : vous êtes exposés deux fois
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            En tant qu&apos;agence, la Loi 25 vous touche à deux niveaux : votre propre site, et les sites que vous gérez pour vos clients. Si un site que vous avez livré n&apos;est pas conforme, la responsabilité peut remonter jusqu&apos;à vous.
          </p>
          <p className="mt-3 text-xs text-slate-500">5 min de lecture</p>
        </header>

        {/* Section 1 — Hook storytelling */}
        <section className="mb-12" aria-labelledby="section-hook">
          <h2 id="section-hook" className="mb-4 text-xl font-bold text-slate-50">
            « On a livré le site, maintenant c&apos;est leur problème. »
          </h2>
          <div className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50 text-sm leading-relaxed text-slate-300 space-y-4">
            <p>
              Une agence de Montréal livre un site WordPress pour une PME québécoise. Google Analytics installé, pixel Meta en place, formulaire de contact connecté à un CRM. Le client est content.
            </p>
            <p>
              Six mois plus tard, un visiteur se plaint à la Commission d&apos;accès à l&apos;information : aucune bannière de cookies, données transmises à des serveurs américains sans mention, aucune politique de confidentialité. L&apos;agence est mentionnée comme le prestataire technique. Le contrat ne précisait pas qui était responsable de la conformité.
            </p>
            <p className="font-medium text-slate-200">
              Si votre contrat ne spécifie pas que le client prend en charge la conformité Loi 25 après livraison, vous restez exposé en tant que sous-traitant.
            </p>
          </div>
        </section>

        {/* Section 2 — Ce que dit la loi */}
        <section className="mb-12" aria-labelledby="section-loi">
          <h2 id="section-loi" className="mb-6 text-xl font-bold text-slate-50">
            Ce que la Loi&nbsp;25 implique pour une agence web
          </h2>
          <div className="space-y-3">
            {[
              {
                texte: "Une agence qui a accès aux données personnelles des clients de son client (via un CRM, Google Analytics, un formulaire) est considérée comme un « sous-traitant » au sens de la Loi 25.",
              },
              {
                texte: "Le sous-traitant doit respecter des exigences de confidentialité équivalentes à celles du responsable principal — et le contrat doit le prévoir explicitement.",
              },
              {
                texte: "Installer un pixel Meta ou Google Analytics sans bannière de consentement sur le site d'un client, c'est une non-conformité — même si c'est « standard dans le milieu ».",
              },
              {
                texte: "Votre propre site (formulaire de demande de devis, newsletter, contact) est aussi concerné. Les données de vos prospects ont les mêmes droits que celles de n'importe quel consommateur québécois.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 rounded-xl bg-slate-900/60 p-4 ring-1 ring-slate-700/40">
                <Code2 size={15} className="mt-0.5 shrink-0 text-sky-400" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-slate-300">{item.texte}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 — 4 situations typiques */}
        <section className="mb-12" aria-labelledby="section-situations">
          <h2 id="section-situations" className="mb-6 text-xl font-bold text-slate-50">
            Les 4 situations à risque dans une agence web
          </h2>
          <div className="space-y-4">
            {[
              {
                icon: <Globe size={18} className="text-sky-400" aria-hidden="true" />,
                titre: "Pixels et outils de tracking sur les sites clients",
                texte: "Vous installez Google Analytics, Meta Pixel, Hotjar ou d'autres outils sur les sites de vos clients. Ces outils collectent des données personnelles sur les visiteurs. Sans bannière de consentement conforme, chaque visite est une collecte non autorisée — et vous en êtes l'installateur.",
                question: "À vérifier : avez-vous mis en place une bannière de cookies conforme sur chaque site client que vous gérez ?",
              },
              {
                icon: <Code2 size={18} className="text-emerald-400" aria-hidden="true" />,
                titre: "Accès aux données clients via CRM ou rapports",
                texte: "Votre agence a souvent accès à HubSpot, Mailchimp, ou d'autres outils qui contiennent des listes de contacts appartenant à vos clients. Cet accès vous place automatiquement dans la chaîne de traitement des données. Vos contrats le prévoient-ils ?",
                question: "À vérifier : vos contrats définissent-ils clairement vos obligations en tant que sous-traitant de données ?",
              },
              {
                icon: <AlertTriangle size={18} className="text-amber-400" aria-hidden="true" />,
                titre: "Formulaires de contact et demandes de devis sur votre propre site",
                texte: "Votre formulaire de contact collecte le nom, le courriel, parfois l'entreprise et le téléphone de vos prospects. Ces données sont-elles stockées dans un CRM sécurisé ? Pendant combien de temps ? Vos prospects savent-ils comment demander leur suppression ?",
                question: "À vérifier : votre politique de confidentialité couvre-t-elle les données collectées via votre formulaire de contact ?",
              },
              {
                icon: <CheckCircle2 size={18} className="text-emerald-400" aria-hidden="true" />,
                titre: "Envois d'emails et campagnes pour vos clients",
                texte: "Quand vous gérez des campagnes d'emailing pour vos clients, vous traitez leurs listes de contacts. Ces listes ont-elles été constituées avec un consentement explicite ? Les destinataires peuvent-ils se désabonner facilement ? La conformité de la liste n'est pas uniquement la responsabilité de votre client.",
                question: "À vérifier : les listes d'emailing de vos clients ont-elles été collectées avec un consentement conforme à la Loi 25 ?",
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
            Ce que votre agence doit vérifier en priorité
          </h2>
          <div className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50 space-y-3">
            {[
              "Vos contrats clients définissent qui est responsable de la conformité Loi 25 après livraison",
              "Tous les sites que vous gérez ont une bannière de cookies permettant de refuser en un clic",
              "Votre propre site a une politique de confidentialité à jour couvrant les formulaires de contact",
              "Vous avez un accord de traitement des données avec chaque outil tiers que vous utilisez (CRM, analytics, emailing)",
              "Les listes d'emailing de vos clients ont été constituées avec un consentement explicite et documenté",
              "Vos employés qui accèdent aux données clients sont sensibilisés aux obligations de la Loi 25",
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

        {/* Section 5 — Service adapté */}
        <section className="mb-12" aria-labelledby="section-service">
          <h2 id="section-service" className="mb-4 text-xl font-bold text-slate-50">
            Audit pour votre agence — et pour les sites de vos clients
          </h2>
          <div className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50 text-sm leading-relaxed text-slate-300 space-y-3">
            <p>
              auditloi25.ca permet d&apos;analyser n&apos;importe quel site québécois — le vôtre ou celui d&apos;un client — en quelques secondes. Idéal pour intégrer un pré-audit systématique dans votre processus de livraison.
            </p>
            <p>
              Plusieurs agences utilisent notre rapport comme point de départ pour proposer un service de mise en conformité à leurs clients existants. C&apos;est aussi une façon de se différencier à la signature d&apos;un nouveau contrat.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="mb-12 rounded-2xl bg-slate-900 p-8 ring-1 ring-slate-700 text-center">
          <p className="text-lg font-bold text-slate-50">
            Votre agence gère des données pour ses clients. Vérifiez que vous êtes couverts.
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
              Voir l&apos;offre d&apos;audit Loi 25 pour agences →
            </Link>
          </div>
        </div>

        <RelatedArticles
          slugs={[
            "banniere-cookies-loi-25",
            "penalites-loi-25-entreprise",
          ]}
          heading="Articles liés"
        />

        {/* Footer */}
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
