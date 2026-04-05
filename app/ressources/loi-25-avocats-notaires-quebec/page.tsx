import type { Metadata } from "next";
import Link from "next/link";
import { Scale, ShieldCheck, CheckCircle2, AlertTriangle, ArrowLeft } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Loi 25 pour les avocats et notaires au Québec | auditloi25.ca",
  description:
    "Cabinet d'avocats ou étude notariale au Québec — vos obligations Loi 25 sont renforcées par votre devoir de confidentialité professionnel. Voici ce que votre site doit respecter.",
  alternates: { canonical: "https://auditloi25.ca/ressources/loi-25-avocats-notaires-quebec" },
};

export default function Loi25AvocatsNotairesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Loi 25 pour les avocats et notaires au Québec",
    description:
      "Cabinet d'avocats ou étude notariale au Québec — vos obligations Loi 25 sont renforcées par votre devoir de confidentialité professionnel.",
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
      "@id": "https://auditloi25.ca/ressources/loi-25-avocats-notaires-quebec",
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
        { name: "Loi 25 pour avocats et notaires", href: "/ressources/loi-25-avocats-notaires-quebec" },
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
          <span className="text-slate-400">Loi 25 pour avocats et notaires</span>
        </nav>

        <header className="mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-300 ring-1 ring-sky-500/30">
            <Scale size={11} aria-hidden="true" />
            Pour les avocats, notaires et juristes
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl">
            Loi&nbsp;25 pour les avocats et notaires : obligations et points de vigilance
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Les professionnels du droit québécois sont déjà soumis à un strict devoir de confidentialité. La Loi 25 y ajoute des obligations spécifiques sur la collecte, la conservation et la destruction des renseignements personnels — y compris sur votre site web.
          </p>
          <p className="mt-3 text-xs text-slate-500">5 min de lecture</p>
        </header>

        {/* Section 1 — Hook */}
        <section className="mb-12" aria-labelledby="section-hook">
          <h2 id="section-hook" className="mb-4 text-xl font-bold text-slate-50">
            « On est déjà tenus au secret professionnel — la Loi 25 n&apos;ajoute rien. »
          </h2>
          <div className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50 text-sm leading-relaxed text-slate-300 space-y-4">
            <p>
              Un cabinet d&apos;avocats en droit familial de Québec. Site vitrine avec formulaire de demande de consultation, page de contact, section blog sur le droit familial québécois. Simple.
            </p>
            <p>
              Mais ce formulaire de demande de consultation demande la situation familiale, des éléments de contexte du dossier, parfois des détails financiers. Ces données sont parmi les plus sensibles visées par la Loi 25 — et elles arrivent dans une boîte courriel partagée entre secrétaire et avocats, sans chiffrement, sans durée de conservation définie.
            </p>
            <p className="font-medium text-slate-200">
              Le secret professionnel couvre la relation avocat-client. La Loi 25 couvre la collecte, le stockage et la destruction des renseignements personnels sur votre site et vos systèmes. Ce sont deux obligations distinctes, complémentaires.
            </p>
          </div>
        </section>

        {/* Section 2 — Obligations */}
        <section className="mb-12" aria-labelledby="section-loi">
          <h2 id="section-loi" className="mb-6 text-xl font-bold text-slate-50">
            Ce que la Loi&nbsp;25 implique pour un cabinet ou une étude
          </h2>
          <div className="space-y-3">
            {[
              {
                texte: "Tout formulaire de prise de contact ou de demande de consultation collectant des renseignements personnels (nom, situation familiale, contexte du dossier) doit être accompagné d'un avis de collecte clair.",
              },
              {
                texte: "Vous devez désigner un responsable de la protection des renseignements personnels (RPRP) au sein de votre cabinet — même si c'est vous-même — et le rendre joignable facilement.",
              },
              {
                texte: "Les logiciels de gestion de dossiers (Clio, PCLaw, Juris...) hébergés hors du Canada doivent faire l'objet d'une évaluation des facteurs relatifs à la vie privée (EFVP).",
              },
              {
                texte: "Les données personnelles de clients doivent être détruites selon un calendrier de conservation défini — vous ne pouvez pas les garder indéfiniment.",
              },
              {
                texte: "En cas de violation de confidentialité impliquant des renseignements personnels, vous devez en aviser la Commission d'accès à l'information (CAI) dans les 72 heures.",
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
            Les 4 zones de risque sur le site d&apos;un cabinet ou d&apos;une étude
          </h2>
          <div className="space-y-4">
            {[
              {
                icon: <Scale size={18} className="text-sky-400" aria-hidden="true" />,
                titre: "Formulaire de prise de contact ou de consultation",
                texte: "C'est le point d'entrée principal de renseignements personnels sur votre site. Un formulaire qui demande la nature du dossier (divorce, litige commercial, succession...) collecte des données potentiellement sensibles. L'avis de collecte et la politique de confidentialité doivent être visibles avant la soumission.",
                question: "À vérifier : votre formulaire de contact mentionne-t-il l'usage des données et le droit de retrait ?",
              },
              {
                icon: <CheckCircle2 size={18} className="text-emerald-400" aria-hidden="true" />,
                titre: "Logiciel de gestion de dossiers",
                texte: "Clio, MyCase, PCLaw — la plupart des outils de gestion de pratique juridique sont hébergés aux États-Unis. Transférer des renseignements personnels de clients québécois vers ces systèmes sans évaluation de risque constitue un risque de non-conformité depuis 2023.",
                question: "À vérifier : votre logiciel de gestion de dossiers est-il couvert par un accord de traitement des données conforme à la Loi 25 ?",
              },
              {
                icon: <AlertTriangle size={18} className="text-amber-400" aria-hidden="true" />,
                titre: "Communications par courriel non chiffrées",
                texte: "Si des clients vous transmettent des documents sensibles par courriel ordinaire (pièces d'identité, relevés bancaires, actes notariés), l'absence de chiffrement est un point de vulnérabilité. La Loi 25 exige des mesures de sécurité adaptées à la sensibilité des données.",
                question: "À vérifier : votre cabinet dispose-t-il d'un protocole pour la transmission sécurisée de documents sensibles ?",
              },
              {
                icon: <ShieldCheck size={18} className="text-emerald-400" aria-hidden="true" />,
                titre: "Page de blog et contenu juridique",
                texte: "Un blog sur le droit familial ou les successions attire du trafic. Si vous y intégrez des formulaires d'abonnement ou de contact, les mêmes obligations s'appliquent. Et si vous utilisez Google Analytics pour mesurer ce trafic, la bannière de consentement est obligatoire.",
                question: "À vérifier : votre bannière de cookies couvre-t-elle bien les pages de blog et de contenu ?",
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
            Ce que votre cabinet ou étude doit vérifier en priorité
          </h2>
          <div className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50 space-y-3">
            {[
              "Un responsable de la protection des renseignements personnels (RPRP) est désigné et joignable",
              "Vos formulaires de contact incluent un avis de collecte et un lien vers la politique de confidentialité",
              "Votre politique de confidentialité décrit la durée de conservation des données clients",
              "Votre logiciel de gestion de dossiers fait l'objet d'un accord de traitement des données",
              "Votre bannière de cookies est conforme et couvre toutes les pages du site",
              "Vous avez un protocole pour aviser la CAI en cas de violation de données",
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
            Un audit de site web pour vous concentrer sur votre pratique
          </h2>
          <div className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50 text-sm leading-relaxed text-slate-300 space-y-3">
            <p>
              Notre audit ne couvre pas la gouvernance interne de votre cabinet — c&apos;est le rôle d&apos;un consultant en protection des données. Nous nous concentrons sur ce qui est visible et vérifié en priorité par la CAI : votre site web, vos formulaires, votre bannière de consentement et vos politiques publiées.
            </p>
            <p>
              Le pré-audit gratuit vous donne un premier portrait en quelques minutes. L&apos;audit complet fournit un rapport détaillé avec plan d&apos;action priorisé — sans jargon, sans facturation à l&apos;heure.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="mb-12 rounded-2xl bg-slate-900 p-8 ring-1 ring-slate-700 text-center">
          <p className="text-lg font-bold text-slate-50">
            Votre site collecte des informations sur vos clients. Vérifiez qu&apos;il est conforme Loi 25.
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
              Voir l&apos;offre d&apos;audit Loi 25 pour cabinets juridiques →
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
