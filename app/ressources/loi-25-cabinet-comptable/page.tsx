import type { Metadata } from "next";
import Link from "next/link";
import { Calculator, FileText, AlertTriangle, CheckCircle2, ArrowLeft } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Loi 25 pour les cabinets comptables et conseillers financiers | auditloi25.ca",
  description:
    "Comptables, planificateurs financiers, conseillers en gestion — vous traitez des données financières ultra-sensibles. Voici ce que la Loi 25 exige de votre cabinet.",
  alternates: { canonical: "https://auditloi25.ca/ressources/loi-25-cabinet-comptable" },
};

export default function Loi25CabinetComptablePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Loi 25 pour les cabinets comptables et conseillers financiers",
    description:
      "Comptables, planificateurs financiers, conseillers en gestion — vous traitez des données financières ultra-sensibles. Voici ce que la Loi 25 exige de votre cabinet.",
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
      "@id": "https://auditloi25.ca/ressources/loi-25-cabinet-comptable",
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
        { name: "Loi 25 pour les cabinets comptables", href: "/ressources/loi-25-cabinet-comptable" },
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
          <span className="text-slate-400">Loi 25 et cabinets comptables</span>
        </nav>

        {/* En-tête */}
        <header className="mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-300 ring-1 ring-sky-500/30">
            <Calculator size={11} aria-hidden="true" />
            Pour les cabinets comptables et conseillers financiers
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl">
            Loi&nbsp;25 et cabinets comptables : des données financières sous haute responsabilité
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            NAS, revenus, actifs, dettes, relevés bancaires — les cabinets comptables et conseillers financiers québécois traitent certaines des données les plus sensibles qui existent. La Loi 25 impose des obligations strictes sur leur collecte, leur stockage et leur transmission.
          </p>
          <p className="mt-3 text-xs text-slate-500">5 min de lecture</p>
        </header>

        {/* Section 1 — Hook storytelling */}
        <section className="mb-12" aria-labelledby="section-hook">
          <h2 id="section-hook" className="mb-4 text-xl font-bold text-slate-50">
            « On envoie les dossiers par courriel depuis toujours — c&apos;est pratique. »
          </h2>
          <div className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50 text-sm leading-relaxed text-slate-300 space-y-4">
            <p>
              Un cabinet de comptabilité de Québec. Les associés envoient les états financiers par courriel à leurs clients, partagent des documents via un lien Dropbox, reçoivent les relevés par pièce jointe. Efficace. Rapide. Utilisé depuis 10 ans.
            </p>
            <p>
              Un client demande à savoir où sont stockées ses données financières et qui y a accès. Le cabinet n&apos;a pas de réponse claire. Les fichiers sont sur Dropbox (serveurs américains), les courriels sont sur Gmail sans chiffrement, et deux anciens employés ont potentiellement toujours accès au dossier partagé.
            </p>
            <p className="font-medium text-slate-200">
              La Loi 25 n&apos;exige pas la perfection technique. Elle exige que vous sachiez où sont vos données, qui y accède, et que vos clients en soient informés.
            </p>
          </div>
        </section>

        {/* Section 2 — Ce que dit la loi */}
        <section className="mb-12" aria-labelledby="section-loi">
          <h2 id="section-loi" className="mb-6 text-xl font-bold text-slate-50">
            Ce que la Loi&nbsp;25 implique pour un cabinet comptable
          </h2>
          <div className="space-y-3">
            {[
              {
                texte: "Les données financières personnelles (revenus, déclarations de revenus, NAS, états financiers personnels) sont des renseignements personnels sensibles qui bénéficient d'une protection renforcée.",
              },
              {
                texte: "Vous devez informer vos clients de l'endroit où leurs données sont stockées, qui y a accès, et pendant combien de temps elles sont conservées — y compris chez vos sous-traitants (logiciels cloud, portails clients).",
              },
              {
                texte: "Si vous utilisez des logiciels hébergés hors du Québec (TaxCycle, QuickBooks Online, Xero, Dropbox, Google Drive), vous devez en informer vos clients et vous assurer que ces fournisseurs offrent des protections équivalentes.",
              },
              {
                texte: "En cas d'incident de confidentialité (courriel envoyé à la mauvaise personne, accès non autorisé), vous avez l'obligation de le signaler à la CAI et d'en informer la personne concernée si le risque est sérieux.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 rounded-xl bg-slate-900/60 p-4 ring-1 ring-slate-700/40">
                <Calculator size={15} className="mt-0.5 shrink-0 text-sky-400" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-slate-300">{item.texte}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 — 4 situations typiques */}
        <section className="mb-12" aria-labelledby="section-situations">
          <h2 id="section-situations" className="mb-6 text-xl font-bold text-slate-50">
            Les 4 situations à risque dans un cabinet comptable
          </h2>
          <div className="space-y-4">
            {[
              {
                icon: <FileText size={18} className="text-sky-400" aria-hidden="true" />,
                titre: "Partage de documents par courriel ou cloud non sécurisé",
                texte: "Envoyer un état financier par courriel non chiffré ou partager un dossier via un lien Dropbox public expose des données ultra-sensibles. En cas d'interception ou d'accès non autorisé, votre cabinet est responsable. La Loi 25 exige des mesures de sécurité adaptées à la sensibilité des données.",
                question: "À vérifier : comment vos documents financiers clients sont-ils transmis et stockés ? Qui y a accès aujourd'hui ?",
              },
              {
                icon: <Calculator size={18} className="text-emerald-400" aria-hidden="true" />,
                titre: "Logiciels comptables hébergés hors Canada",
                texte: "QuickBooks Online (USA), Xero (Nouvelle-Zélande/USA), Sage (Europe) — ces outils hébergent des données de vos clients hors du Canada. La Loi 25 exige que vous informiez vos clients de ce transfert et que vous ayez évalué les protections offertes dans ces pays.",
                question: "À vérifier : vos clients savent-ils que leurs données financières sont hébergées hors du Québec ?",
              },
              {
                icon: <AlertTriangle size={18} className="text-amber-400" aria-hidden="true" />,
                titre: "Accès des employés et anciens employés aux dossiers",
                texte: "Dans un cabinet, plusieurs personnes accèdent aux dossiers clients — associés, techniciens comptables, stagiaires. Quand un employé quitte le cabinet, ses accès sont-ils révoqués immédiatement ? Avez-vous un registre des accès ? La Loi 25 exige un contrôle des accès proportionnel à la sensibilité des données.",
                question: "À vérifier : avez-vous un processus formalisé de révocation des accès lors du départ d'un employé ?",
              },
              {
                icon: <CheckCircle2 size={18} className="text-emerald-400" aria-hidden="true" />,
                titre: "Site web et formulaire de prise de contact",
                texte: "Même si votre site est \"juste une vitrine\", un formulaire de contact qui collecte le nom, le courriel et la situation financière d'un prospect est soumis à la Loi 25. Ces données doivent être protégées, non partagées sans consentement, et supprimées si le prospect en fait la demande.",
                question: "À vérifier : votre formulaire de contact mentionne-t-il comment les données des prospects sont utilisées et conservées ?",
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
            Ce que votre cabinet doit vérifier en priorité
          </h2>
          <div className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50 space-y-3">
            {[
              "Vous avez un inventaire des outils et logiciels qui traitent des données clients (avec les pays d'hébergement)",
              "Vos clients sont informés des pays où leurs données sont stockées",
              "Les accès aux dossiers sont restreints aux personnes qui en ont besoin — et révoqués à la fin de la relation",
              "Votre site a une politique de confidentialité couvrant les formulaires de contact et de demande de service",
              "Votre bannière de cookies permet de refuser en un clic si vous utilisez Google Analytics",
              "Vous avez un processus de signalement d'incident de confidentialité (même interne)",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-0.5 h-4 w-4 shrink-0 rounded border border-slate-600 bg-slate-800" aria-hidden="true" />
                <p className="text-sm text-slate-300">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Pour aller plus loin :{" "}
            <Link href="/ressources/penalites-loi-25-entreprise" className="text-sky-400 underline underline-offset-2 hover:text-sky-300">
              Amendes et sanctions Loi 25 pour les entreprises québécoises
            </Link>
          </p>
        </section>

        {/* Section 5 — Service adapté */}
        <section className="mb-12" aria-labelledby="section-service">
          <h2 id="section-service" className="mb-4 text-xl font-bold text-slate-50">
            Un premier diagnostic pour votre cabinet — sans juriste
          </h2>
          <div className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50 text-sm leading-relaxed text-slate-300 space-y-3">
            <p>
              Le pré-audit d&apos;auditloi25.ca analyse les pages publiques de votre site en quelques secondes : formulaire de contact, politique de confidentialité, bannière de cookies. Il identifie ce qui est conforme, ce qui ne l&apos;est pas, et dans quel ordre corriger.
            </p>
            <p>
              C&apos;est un point de départ — pas un audit légal complet. Mais pour la grande majorité des cabinets québécois, c&apos;est exactement là qu&apos;il faut commencer.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="mb-12 rounded-2xl bg-slate-900 p-8 ring-1 ring-slate-700 text-center">
          <p className="text-lg font-bold text-slate-50">
            Votre cabinet gère des données financières sensibles. Commencez par savoir où vous en êtes.
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
              Voir l&apos;offre d&apos;audit Loi 25 pour cabinets →
            </Link>
          </div>
        </div>

        <RelatedArticles
          slugs={[
            "penalites-loi-25-entreprise",
            "checklist-loi-25-site-web",
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
