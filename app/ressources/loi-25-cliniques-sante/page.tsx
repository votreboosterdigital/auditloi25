import type { Metadata } from "next";
import Link from "next/link";
import { Stethoscope, ShieldCheck, CheckCircle2, AlertTriangle, ArrowLeft } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Loi 25 pour les cliniques et professionnels de santé au Québec | auditloi25.ca",
  description:
    "Clinique de physio, ostéo, dentiste, médecin — la Loi 25 s'applique à vous aussi. Voici ce que votre site et vos formulaires doivent respecter pour être conformes.",
  alternates: { canonical: "https://auditloi25.ca/ressources/loi-25-cliniques-sante" },
};

export default function Loi25CliniqueSantePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Loi 25 pour les cliniques et professionnels de santé au Québec",
    description:
      "Clinique de physio, ostéo, dentiste, médecin — la Loi 25 s'applique à vous aussi. Voici ce que votre site et vos formulaires doivent respecter pour être conformes.",
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
      "@id": "https://auditloi25.ca/ressources/loi-25-cliniques-sante",
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
        { name: "Loi 25 pour les cliniques de santé", href: "/ressources/loi-25-cliniques-sante" },
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
          <span className="text-slate-400">Loi 25 et cliniques de santé</span>
        </nav>

        {/* En-tête */}
        <header className="mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-300 ring-1 ring-sky-500/30">
            <Stethoscope size={11} aria-hidden="true" />
            Pour les cliniques et professionnels de santé
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl">
            Loi&nbsp;25 et cliniques de santé : êtes-vous vraiment conformes&nbsp;?
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Les données de santé sont parmi les plus sensibles qui soient. Pourtant, beaucoup de cliniques québécoises collectent des informations sur leurs patients via leur site web sans respecter les exigences de la Loi 25 — souvent sans le savoir.
          </p>
          <p className="mt-3 text-xs text-slate-500">5 min de lecture</p>
        </header>

        {/* Section 1 — Hook storytelling */}
        <section className="mb-12" aria-labelledby="section-hook">
          <h2 id="section-hook" className="mb-4 text-xl font-bold text-slate-50">
            « On a un formulaire de prise de rendez-vous en ligne — c&apos;est tout. »
          </h2>
          <div className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50 text-sm leading-relaxed text-slate-300 space-y-4">
            <p>
              Une clinique de physiothérapie de Longueuil. Site refait en 2024, formulaire de prise de RDV en ligne, quelques photos de l&apos;équipe. Rien de compliqué. Mais ce formulaire demande le nom, le numéro de téléphone, l&apos;adresse courriel — et la raison de la consultation.
            </p>
            <p>
              La raison de la consultation, c&apos;est une donnée de santé. Stocker une donnée de santé sans politique de confidentialité claire, sans mention d&apos;usage, sans consentement explicite : c&apos;est une non-conformité directe à la Loi 25.
            </p>
            <p className="font-medium text-slate-200">
              Chaque formulaire de contact, chaque prise de RDV en ligne, chaque infolettre patients — ce sont des points d&apos;entrée de données personnelles qui tombent sous la Loi 25.
            </p>
          </div>
        </section>

        {/* Section 2 — Ce que dit la loi */}
        <section className="mb-12" aria-labelledby="section-loi">
          <h2 id="section-loi" className="mb-6 text-xl font-bold text-slate-50">
            Ce que la Loi&nbsp;25 implique pour une clinique de santé
          </h2>
          <div className="space-y-3">
            {[
              {
                texte: "Les données de santé (motif de consultation, condition médicale, historique de traitement) sont des renseignements personnels sensibles — elles bénéficient d'une protection renforcée.",
              },
              {
                texte: "Tout formulaire en ligne collectant ces données doit informer clairement le patient : pourquoi, comment, combien de temps ces données sont conservées, et par qui.",
              },
              {
                texte: "Si vous utilisez un logiciel tiers (Jane App, Cliniko, Calendly, Google Forms...), vous êtes responsable de la conformité de ce sous-traitant — même si c'est lui qui héberge les données.",
              },
              {
                texte: "Vos patients ont le droit de demander à consulter, corriger ou supprimer leurs données. Votre site doit indiquer comment exercer ce droit.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 rounded-xl bg-slate-900/60 p-4 ring-1 ring-slate-700/40">
                <ShieldCheck size={15} className="mt-0.5 shrink-0 text-sky-400" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-slate-300">{item.texte}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 — 4 situations typiques */}
        <section className="mb-12" aria-labelledby="section-situations">
          <h2 id="section-situations" className="mb-6 text-xl font-bold text-slate-50">
            Les 4 situations à risque dans une clinique de santé
          </h2>
          <div className="space-y-4">
            {[
              {
                icon: <Stethoscope size={18} className="text-sky-400" aria-hidden="true" />,
                titre: "Prise de rendez-vous en ligne",
                texte: "Votre formulaire de RDV collecte nom, courriel, téléphone, et souvent la raison de la visite. Ces données sont-elles envoyées directement dans votre boîte courriel ? Stockées dans un Google Sheet ? Transmises à un logiciel tiers ? Chaque maillon doit être déclaré.",
                question: "À vérifier : votre formulaire de RDV mentionne-t-il comment les données seront utilisées et par qui ?",
              },
              {
                icon: <CheckCircle2 size={18} className="text-emerald-400" aria-hidden="true" />,
                titre: "Logiciels de gestion de clinique (Jane, Cliniko, etc.)",
                texte: "Ces outils hébergent des dossiers patients complets — antécédents, notes de traitement, coordonnées. En tant que clinique, vous êtes le responsable du traitement. Votre contrat avec le logiciel doit prévoir des garanties de conformité. Sont-ils hébergés au Canada ?",
                question: "À vérifier : avez-vous signé un accord de traitement des données avec votre logiciel de gestion ?",
              },
              {
                icon: <AlertTriangle size={18} className="text-amber-400" aria-hidden="true" />,
                titre: "Infolettre et rappels de rendez-vous",
                texte: "Vos patients reçoivent-ils des rappels par courriel ou SMS ? Ont-ils consenti explicitement à recevoir ces communications — séparément du consentement aux soins ? Le consentement aux soins ne vaut pas consentement aux communications marketing.",
                question: "À vérifier : le consentement à l'infolettre est-il distinct et révocable facilement ?",
              },
              {
                icon: <ShieldCheck size={18} className="text-emerald-400" aria-hidden="true" />,
                titre: "Google Analytics et outils de suivi sur votre site",
                texte: "Si votre site utilise Google Analytics, Meta Pixel ou tout autre outil de suivi, vos visiteurs doivent pouvoir refuser ces cookies aussi facilement qu'ils peuvent les accepter. Un bandeau qui cache le bouton « refuser » ou qui demande plusieurs clics pour décliner n'est pas conforme.",
                question: "À vérifier : votre bannière de cookies permet-elle de refuser en un seul clic ?",
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
            Ce que votre clinique doit vérifier en priorité
          </h2>
          <div className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50 space-y-3">
            {[
              "Vos formulaires de RDV expliquent pourquoi les données sont collectées et comment elles sont utilisées",
              "Votre politique de confidentialité est accessible depuis toutes les pages du site",
              "Votre bannière de cookies permet de refuser aussi facilement qu'accepter",
              "Vos patients savent comment exercer leur droit d'accès, de correction et de suppression",
              "Vous avez vérifié où sont hébergées les données de votre logiciel de gestion (Canada ou hors Canada ?)",
              "Le consentement à l'infolettre est distinct du formulaire de prise de RDV",
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
            Un audit pensé pour les cliniques sans équipe juridique
          </h2>
          <div className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50 text-sm leading-relaxed text-slate-300 space-y-3">
            <p>
              La plupart des cliniques de santé au Québec n&apos;ont pas de juriste ni de responsable conformité en interne. Le pré-audit gratuit d&apos;auditloi25.ca a été conçu pour ça.
            </p>
            <p>
              On analyse les pages critiques de votre site — formulaire de RDV, page de contact, pied de page — et on vous remet un rapport clair sur ce qui est conforme, ce qui ne l&apos;est pas, et dans quel ordre corriger. Sans jargon légal. Sans facturation à l&apos;heure.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="mb-12 rounded-2xl bg-slate-900 p-8 ring-1 ring-slate-700 text-center">
          <p className="text-lg font-bold text-slate-50">
            Votre clinique collecte des données de santé. Vérifiez que c&apos;est fait dans les règles.
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
              Voir l&apos;offre d&apos;audit Loi 25 pour cliniques →
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
