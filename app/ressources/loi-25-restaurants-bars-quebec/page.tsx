import type { Metadata } from "next";
import Link from "next/link";
import { UtensilsCrossed, ShieldCheck, CheckCircle2, AlertTriangle, ArrowLeft } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Loi 25 pour les restaurants et bars au Québec | auditloi25.ca",
  description:
    "Restaurant ou bar au Québec — réservations en ligne, WiFi client et programme de fidélité vous soumettent à la Loi 25. Voici ce que votre site doit respecter.",
  alternates: { canonical: "https://auditloi25.ca/ressources/loi-25-restaurants-bars-quebec" },
};

export default function Loi25RestaurantsBarsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Loi 25 pour les restaurants et bars au Québec",
    description:
      "Restaurant ou bar au Québec — réservations en ligne, WiFi client et programme de fidélité vous soumettent à la Loi 25.",
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
      "@id": "https://auditloi25.ca/ressources/loi-25-restaurants-bars-quebec",
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
        { name: "Loi 25 pour restaurants et bars", href: "/ressources/loi-25-restaurants-bars-quebec" },
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
          <span className="text-slate-400">Loi 25 pour restaurants et bars</span>
        </nav>

        <header className="mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-300 ring-1 ring-sky-500/30">
            <UtensilsCrossed size={11} aria-hidden="true" />
            Pour les restaurants, bars et brasseries
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl">
            Loi&nbsp;25 pour les restaurants et bars : ce que votre site doit respecter
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            On ne pense pas spontanément à la conformité Loi 25 quand on gère un restaurant. Pourtant, dès que vous prenez des réservations en ligne, gérez une infolettre ou offrez le WiFi à vos clients, vous collectez des renseignements personnels — et la loi s&apos;applique.
          </p>
          <p className="mt-3 text-xs text-slate-500">4 min de lecture</p>
        </header>

        {/* Section 1 — Hook */}
        <section className="mb-12" aria-labelledby="section-hook">
          <h2 id="section-hook" className="mb-4 text-xl font-bold text-slate-50">
            « On prend les réservations par OpenTable — c&apos;est leur problème, pas le nôtre. »
          </h2>
          <div className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50 text-sm leading-relaxed text-slate-300 space-y-4">
            <p>
              Un restaurant de Montréal. Site vitrine avec module de réservation OpenTable intégré, lien Facebook, infolettre mensuelle sur les événements spéciaux. Rien d&apos;exceptionnel.
            </p>
            <p>
              Sauf qu&apos;OpenTable collecte le nom, le courriel, le numéro de téléphone et les préférences alimentaires de vos clients — et les stocke sur des serveurs aux États-Unis. En intégrant ce module sur votre site, vous devenez co-responsable du traitement de ces données aux yeux de la Loi 25.
            </p>
            <p className="font-medium text-slate-200">
              Utiliser un outil tiers ne vous exempte pas de vos obligations. Le restaurant qui intègre un système de réservation sur son site reste responsable de la conformité de cette collecte.
            </p>
          </div>
        </section>

        {/* Section 2 — Obligations */}
        <section className="mb-12" aria-labelledby="section-loi">
          <h2 id="section-loi" className="mb-6 text-xl font-bold text-slate-50">
            Ce que la Loi&nbsp;25 implique pour un restaurant ou un bar
          </h2>
          <div className="space-y-3">
            {[
              {
                texte: "Tout système de réservation en ligne collectant des renseignements personnels (nom, courriel, téléphone, préférences) doit être accompagné d'un avis de collecte visible.",
              },
              {
                texte: "Si vous utilisez OpenTable, Yelp Reservations, Resy ou tout autre outil tiers, vous devez informer vos clients que leurs données peuvent être traitées par ces plateformes, potentiellement hors du Canada.",
              },
              {
                texte: "Un programme de fidélité ou une carte membre collecte des données d'habitudes de consommation — des renseignements personnels qui nécessitent un consentement explicite et une politique de confidentialité claire.",
              },
              {
                texte: "Le WiFi client qui demande un courriel pour l'accès constitue une collecte de renseignements personnels. L'usage de cet email (marketing, revente...) doit être déclaré au moment de la collecte.",
              },
              {
                texte: "Votre bannière de cookies est obligatoire si votre site utilise des outils de tracking (Google Analytics, Meta Pixel, pixels publicitaires).",
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
            Les 4 situations à risque pour un restaurant ou un bar
          </h2>
          <div className="space-y-4">
            {[
              {
                icon: <UtensilsCrossed size={18} className="text-sky-400" aria-hidden="true" />,
                titre: "Système de réservation en ligne (OpenTable, Resy, Yelp...)",
                texte: "Ces plateformes collectent le nom, courriel, téléphone, taille du groupe, préférences et parfois les allergies alimentaires de vos clients. Ce sont des données personnelles — certaines même sensibles (allergies = donnée de santé). En intégrant ce widget, vous devenez coresponsable de la collecte.",
                question: "À vérifier : votre site mentionne-t-il que les données de réservation sont traitées par une plateforme tierce, potentiellement aux États-Unis ?",
              },
              {
                icon: <CheckCircle2 size={18} className="text-emerald-400" aria-hidden="true" />,
                titre: "Infolettre et liste d'événements",
                texte: "Collecter des courriels pour prévenir de vos soirées spéciales, menus saisonniers ou promotions est courant dans la restauration. Mais chaque inscription nécessite un consentement explicite — et les clients doivent pouvoir se désinscrire facilement, à tout moment.",
                question: "À vérifier : vos formulaires d'inscription à l'infolettre sont-ils distincts des formulaires de réservation et incluent-ils un lien de désinscription ?",
              },
              {
                icon: <AlertTriangle size={18} className="text-amber-400" aria-hidden="true" />,
                titre: "WiFi client avec capture de courriel",
                texte: "Certains systèmes WiFi (Unifi, Meraki, Hotspotsystem...) demandent un courriel pour l'accès réseau. Si cet email est ensuite utilisé pour du marketing ou partagé avec un tiers, c'est une collecte de renseignements personnels soumise à la Loi 25 — avec obligation d'avis de collecte au moment de la connexion.",
                question: "À vérifier : votre portail WiFi informe-t-il clairement de l'usage du courriel avant la connexion ?",
              },
              {
                icon: <ShieldCheck size={18} className="text-emerald-400" aria-hidden="true" />,
                titre: "Programme de fidélité ou carte membre",
                texte: "Un programme de points ou une carte membre collecte des données d'habitudes de consommation (fréquence des visites, montants dépensés, plats commandés). Ces données créent un profil personnel de votre client — soumis à des droits d'accès, de correction et de retrait.",
                question: "À vérifier : vos membres du programme de fidélité savent-ils comment consulter, modifier ou supprimer leurs données ?",
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
            Ce que votre restaurant ou bar doit vérifier en priorité
          </h2>
          <div className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50 space-y-3">
            {[
              "Votre système de réservation en ligne mentionne que les données sont traitées par une plateforme tierce",
              "Votre politique de confidentialité est accessible depuis toutes les pages du site",
              "Votre bannière de cookies permet de refuser en un seul clic (Google Analytics, Meta Pixel...)",
              "Les inscriptions à l'infolettre sont distinctes des réservations et incluent un désabonnement facile",
              "Votre portail WiFi informe de l'usage du courriel avant la connexion (si applicable)",
              "Les membres de votre programme de fidélité savent comment exercer leurs droits sur leurs données",
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
            Un audit rapide pour vous concentrer sur votre cuisine — pas sur la conformité
          </h2>
          <div className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50 text-sm leading-relaxed text-slate-300 space-y-3">
            <p>
              La conformité Loi 25 n&apos;est pas votre métier. On le sait. C&apos;est pourquoi le pré-audit d&apos;auditloi25.ca prend 2 minutes à remplir — et vous retourne un rapport clair, sans jargon légal, sur ce que votre site doit corriger.
            </p>
            <p>
              On vérifie votre bannière de cookies, vos formulaires, votre politique de confidentialité et vos intégrations tierces (OpenTable, Google Analytics, Meta...). Vous recevez un rapport priorisé avec les actions à poser — pas une facture d&apos;avocat.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="mb-12 rounded-2xl bg-slate-900 p-8 ring-1 ring-slate-700 text-center">
          <p className="text-lg font-bold text-slate-50">
            Votre restaurant collecte des données clients. Vérifiez en 2 minutes si votre site est conforme.
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
              Voir l&apos;offre d&apos;audit Loi 25 pour restaurants →
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
