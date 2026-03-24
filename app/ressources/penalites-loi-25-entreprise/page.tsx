import type { Metadata } from "next";
import Link from "next/link";
import { ShieldAlert, CheckCircle2, AlertTriangle, ArrowLeft } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Amendes Loi 25 pour les PME : ce que risque votre organisation | auditloi25.ca",
  description:
    "Quelles sont les vraies sanctions prévues par la Loi 25 pour les PME québécoises ? On vous explique ce qui peut déclencher une enquête de la CAI — et comment l'éviter.",
  alternates: { canonical: "https://auditloi25.ca/ressources/penalites-loi-25-entreprise" },
};

export default function PenalitesLoi25Page() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Amendes Loi 25 pour les PME : ce que risque votre organisation",
    description:
      "Quelles sont les vraies sanctions prévues par la Loi 25 pour les PME québécoises ? On vous explique ce qui peut déclencher une enquête de la CAI — et comment l'éviter.",
    datePublished: "2026-03-01",
    dateModified: "2026-03-18",
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
      "@id": "https://auditloi25.ca/ressources/penalites-loi-25-entreprise",
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
        { name: "Amendes et sanctions Loi 25", href: "/ressources/penalites-loi-25-entreprise" },
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
          <Link href="/ressources/checklist-loi-25-site-web" className="transition-colors hover:text-slate-300">Ressources</Link>
          <span className="mx-2" aria-hidden="true">·</span>
          <span className="text-slate-400">Amendes et sanctions Loi 25</span>
        </nav>

        {/* En-tête */}
        <header className="mb-12">
          <span className="inline-flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-300 ring-1 ring-sky-500/30">
            Conformité Loi 25
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl">
            Amendes Loi&nbsp;25 : ce que risque votre PME si votre site n&apos;est pas conforme
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            La Loi 25 est en vigueur. La CAI surveille. Et contrairement à ce que beaucoup pensent, les petites organisations ne sont pas à l&apos;abri.
          </p>
          <p className="mt-3 text-xs text-slate-500">4 min de lecture</p>
        </header>

        {/* Section 1 — Hook */}
        <section className="mb-12" aria-labelledby="section-hook">
          <h2 id="section-hook" className="mb-4 text-xl font-bold text-slate-50">
            « On n&apos;a pas encore été contacté — donc on est correct ? »
          </h2>
          <div className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50 text-sm leading-relaxed text-slate-300 space-y-4">
            <p>
              C&apos;est le raisonnement de la grande majorité des PME et OBNL québécois. Et c&apos;est compréhensible — quand rien ne se passe, on suppose qu&apos;on est dans les règles.
            </p>
            <p>
              Mais voici comment ça peut basculer : un client visite votre site, remarque que des cookies se déclenchent avant même qu&apos;il ait cliqué sur quoi que ce soit. Il ne dit rien sur le moment. Puis, quelques semaines plus tard, il dépose une plainte auprès de la CAI.
            </p>
            <p>
              La CAI ouvre un dossier. Ce n&apos;est pas une amende automatique — mais c&apos;est une enquête. Ça demande du temps, de l&apos;énergie, des explications à fournir. Et si les pratiques ne sont pas corrigées, les sanctions deviennent possibles.
            </p>
            <p className="font-medium text-slate-200">
              Ne pas avoir été contacté, c&apos;est de la chance — pas de la conformité.
            </p>
          </div>
        </section>

        {/* Section 2 — Les deux types de sanctions */}
        <section className="mb-12" aria-labelledby="section-sanctions">
          <h2 id="section-sanctions" className="mb-6 text-xl font-bold text-slate-50">
            Les deux types de sanctions prévues par la loi
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50">
              <div className="flex items-center gap-2 mb-4">
                <ShieldAlert size={18} className="text-amber-400" aria-hidden="true" />
                <p className="font-semibold text-slate-100">Sanctions administratives</p>
              </div>
              <p className="text-3xl font-extrabold text-amber-400 tabular-nums">10 M$</p>
              <p className="mt-1 text-xs text-slate-400">ou 2 % du chiffre d&apos;affaires mondial</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>· Décidées directement par la CAI</li>
                <li>· Applicables même sans intention malveillante</li>
                <li>· La CAI peut ordonner de corriger les pratiques</li>
              </ul>
            </div>
            <div className="rounded-xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50">
              <div className="flex items-center gap-2 mb-4">
                <ShieldAlert size={18} className="text-red-400" aria-hidden="true" />
                <p className="font-semibold text-slate-100">Sanctions pénales</p>
              </div>
              <p className="text-3xl font-extrabold text-red-400 tabular-nums">25 M$</p>
              <p className="mt-1 text-xs text-slate-400">ou 4 % du chiffre d&apos;affaires mondial</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>· Réservées aux infractions graves ou répétées</li>
                <li>· Les montants les plus élevés de la loi</li>
                <li>· Source : Loi 25, art. 90 et 92</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 rounded-xl bg-slate-800/40 px-4 py-3 text-xs text-slate-400 ring-1 ring-slate-700/30">
            <strong className="text-slate-300">À retenir :</strong> Ces montants sont les maximums légaux. Les sanctions pour les PME sont proportionnelles à la situation — mais elles existent, et une plainte suffit à ouvrir un dossier.
          </div>
        </section>

        {/* Section 3 — Ce qui déclenche une enquête */}
        <section className="mb-12" aria-labelledby="section-declencheurs">
          <h2 id="section-declencheurs" className="mb-6 text-xl font-bold text-slate-50">
            Qu&apos;est-ce qui peut déclencher une enquête de la CAI&nbsp;?
          </h2>
          <ol className="space-y-4">
            {[
              {
                titre: "Une plainte d'un client ou visiteur",
                texte: "Le déclencheur le plus fréquent. Un visiteur insatisfait peut déposer une plainte directement sur le site de la CAI en quelques minutes.",
              },
              {
                titre: "Un incident de confidentialité non signalé",
                texte: "Si votre organisation subit une fuite de données et ne le signale pas à la CAI (obligation légale), c'est une infraction en soi — distincte de l'incident original.",
              },
              {
                titre: "Une enquête proactive de la CAI",
                texte: "La CAI peut auditer un secteur ou type d'organisations de sa propre initiative, sans qu'une plainte soit nécessaire.",
              },
              {
                titre: "Un signalement externe",
                texte: "Un partenaire, concurrent ou journaliste peut attirer l'attention de la CAI sur des pratiques problématiques.",
              },
            ].map((item, i) => (
              <li key={i} className="flex gap-4 rounded-xl bg-slate-900/60 p-5 ring-1 ring-slate-700/40">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-400/10 text-xs font-bold text-sky-300">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-slate-100">{item.titre}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{item.texte}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Section 4 — Ce que la CAI regarde */}
        <section className="mb-12" aria-labelledby="section-cai-regarde">
          <h2 id="section-cai-regarde" className="mb-6 text-xl font-bold text-slate-50">
            Ce que la CAI regarde en premier sur votre site
          </h2>
          <div className="space-y-3">
            {[
              {
                titre: "La bannière de cookies",
                texte: "Peut-on refuser aussi facilement qu'accepter ? Les cookies se déclenchent-ils avant le consentement ?",
              },
              {
                titre: "Les formulaires",
                texte: "Expliquez-vous pourquoi vous collectez nom, courriel, téléphone ? Comment ces données sont-elles utilisées ?",
              },
              {
                titre: "La politique de confidentialité",
                texte: "Existe-t-elle ? Est-elle à jour, rédigée en français, accessible depuis toutes les pages ?",
              },
              {
                titre: "Les outils tiers actifs",
                texte: "Google Analytics, pixels, outils d'infolettre — sont-ils déclarés et consentis avant de se déclencher ?",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 rounded-xl bg-slate-900/60 p-4 ring-1 ring-slate-700/40">
                <AlertTriangle size={16} className="mt-0.5 shrink-0 text-amber-400" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-slate-100">{item.titre}</p>
                  <p className="mt-0.5 text-sm text-slate-400">{item.texte}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5 — La bonne nouvelle */}
        <section className="mb-12" aria-labelledby="section-bonne-nouvelle">
          <h2 id="section-bonne-nouvelle" className="mb-4 text-xl font-bold text-slate-50">
            La bonne nouvelle
          </h2>
          <div className="rounded-2xl bg-emerald-950/30 p-6 ring-1 ring-emerald-500/20 text-sm leading-relaxed text-slate-300 space-y-3">
            <div className="flex gap-3">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-400" aria-hidden="true" />
              <p>La plupart des non-conformités sur les sites de PME et OBNL sont <strong className="text-slate-100">corrigeables rapidement</strong> — souvent sans refaire le site au complet.</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-400" aria-hidden="true" />
              <p>La CAI ne cherche pas à punir les organisations de bonne foi. Une organisation qui prend des mesures concrètes est dans une position bien meilleure qu&apos;une qui ignore le problème.</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-400" aria-hidden="true" />
              <p>Le premier pas n&apos;a pas à être parfait. Il doit être <strong className="text-slate-100">réel</strong>.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="mb-6 rounded-2xl bg-slate-900 p-8 ring-1 ring-slate-700 text-center">
          <p className="text-lg font-bold text-slate-50">
            Vous ne savez pas où vous en êtes avec la Loi&nbsp;25&nbsp;?
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Notre pré-audit gratuit analyse votre site et vous indique clairement les zones à risque — sans jargon, sans engagement.
          </p>
          <Link
            href="/#formulaire"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_24px_rgba(16,185,129,0.25)] transition-colors hover:bg-emerald-400 hover:text-white"
          >
            Obtenir mon pré‑audit gratuit
          </Link>
          <p className="mt-3 text-xs text-slate-500">Rapport instantané · Sans engagement · Aucune carte requise</p>
        </div>

        {/* Lien vers l'offre complète */}
        <div className="mb-12 rounded-xl border border-sky-500/20 bg-sky-500/5 px-6 py-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-slate-200">
              Vous voulez savoir précisément où vous en êtes avant une enquête CAI&nbsp;?
            </p>
            <p className="mt-1 text-xs text-slate-400">
              L&apos;audit complet vous donne un rapport détaillé avec score de risque par zone et plan de correction priorisé — à partir de 450&nbsp;$.
            </p>
          </div>
          <Link
            href="/offre"
            className="shrink-0 inline-flex items-center gap-1 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors"
          >
            Voir l&apos;offre →
          </Link>
        </div>

        <RelatedArticles
          slugs={[
            "cout-audit-loi-25-entreprise",
            "cai-inspection-site-web-comment-se-preparer",
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
