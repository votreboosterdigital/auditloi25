import type { Metadata } from "next";
import Link from "next/link";
import { ShoppingCart, CreditCard, AlertTriangle, CheckCircle2, ArrowLeft } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Loi 25 pour les boutiques en ligne au Québec | auditloi25.ca",
  description:
    "Vous vendez en ligne au Québec ? Commandes, emails marketing, cookies de remarketing — voici ce que votre boutique e-commerce doit respecter pour être conforme à la Loi 25.",
  alternates: { canonical: "https://auditloi25.ca/ressources/loi-25-ecommerce-quebec" },
};

export default function Loi25EcommercePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Loi 25 pour les boutiques en ligne au Québec",
    description:
      "Vous vendez en ligne au Québec ? Commandes, emails marketing, cookies de remarketing — voici ce que votre boutique e-commerce doit respecter pour être conforme à la Loi 25.",
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
      "@id": "https://auditloi25.ca/ressources/loi-25-ecommerce-quebec",
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
        { name: "Loi 25 pour le e-commerce québécois", href: "/ressources/loi-25-ecommerce-quebec" },
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
          <span className="text-slate-400">Loi 25 et e-commerce</span>
        </nav>

        {/* En-tête */}
        <header className="mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-300 ring-1 ring-sky-500/30">
            <ShoppingCart size={11} aria-hidden="true" />
            Pour les boutiques en ligne québécoises
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl">
            Loi&nbsp;25 et e-commerce : votre boutique collecte plus de données que vous ne le croyez
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Adresse de livraison, courriel, historique de commandes, comportement de navigation, panier abandonné — une boutique en ligne québécoise est l&apos;un des environnements les plus denses en collecte de données personnelles. La Loi 25 s&apos;y applique intégralement.
          </p>
          <p className="mt-3 text-xs text-slate-500">5 min de lecture</p>
        </header>

        {/* Section 1 — Hook storytelling */}
        <section className="mb-12" aria-labelledby="section-hook">
          <h2 id="section-hook" className="mb-4 text-xl font-bold text-slate-50">
            « On envoie juste des emails de relance de panier — c&apos;est standard. »
          </h2>
          <div className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50 text-sm leading-relaxed text-slate-300 space-y-4">
            <p>
              Une boutique Shopify québécoise qui vend des produits de beauté. Klaviyo installé, emails automatiques de panier abandonné actifs, pixel Meta pour le remarketing, Google Analytics pour les rapports. Tout est configuré par défaut.
            </p>
            <p>
              Le problème : aucun des clients n&apos;a explicitement consenti à être reciblé publicitairement. La bannière de cookies présente sur le site ne permet pas de refuser les cookies de tracking. L&apos;email de panier abandonné n&apos;indique pas comment se désabonner des communications transactionnelles vs. marketing.
            </p>
            <p className="font-medium text-slate-200">
              Ce qui est &quot;standard dans l&apos;industrie&quot; n&apos;est pas nécessairement conforme à la Loi 25. Le standard québécois, c&apos;est le consentement explicite.
            </p>
          </div>
        </section>

        {/* Section 2 — Ce que dit la loi */}
        <section className="mb-12" aria-labelledby="section-loi">
          <h2 id="section-loi" className="mb-6 text-xl font-bold text-slate-50">
            Ce que la Loi&nbsp;25 implique pour une boutique en ligne
          </h2>
          <div className="space-y-3">
            {[
              {
                texte: "L'adresse de livraison, le numéro de téléphone, le courriel, l'historique d'achat et le comportement de navigation sont tous des renseignements personnels — chacun d'eux déclenche les obligations de la Loi 25.",
              },
              {
                texte: "Le consentement au marketing par courriel doit être distinct du consentement au traitement de la commande. Votre client peut vous donner son adresse pour recevoir sa livraison sans accepter vos newsletters.",
              },
              {
                texte: "Les cookies de remarketing (Meta Pixel, Google Ads, Pinterest Tag) nécessitent un consentement préalable explicite — pas une simple mention dans les conditions générales.",
              },
              {
                texte: "Si vous utilisez Shopify, WooCommerce ou une autre plateforme hébergée hors Québec, vous devez indiquer à vos clients que leurs données sont traitées à l'extérieur du Canada — et quelles protections s'appliquent.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 rounded-xl bg-slate-900/60 p-4 ring-1 ring-slate-700/40">
                <ShoppingCart size={15} className="mt-0.5 shrink-0 text-sky-400" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-slate-300">{item.texte}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 — 4 situations typiques */}
        <section className="mb-12" aria-labelledby="section-situations">
          <h2 id="section-situations" className="mb-6 text-xl font-bold text-slate-50">
            Les 4 situations à risque dans une boutique e-commerce
          </h2>
          <div className="space-y-4">
            {[
              {
                icon: <ShoppingCart size={18} className="text-sky-400" aria-hidden="true" />,
                titre: "Formulaire de commande et création de compte",
                texte: "Lors d'une commande, vous collectez le nom, l'adresse, le courriel et les informations de paiement. Ces données doivent être collectées uniquement pour finaliser la commande — pas automatiquement ajoutées à votre liste marketing sans consentement séparé et explicite.",
                question: "À vérifier : la case d'inscription à la newsletter est-elle pré-cochée dans votre formulaire de commande ?",
              },
              {
                icon: <AlertTriangle size={18} className="text-amber-400" aria-hidden="true" />,
                titre: "Emails de relance (panier abandonné, win-back)",
                texte: "Les emails de panier abandonné sont très efficaces — mais ils impliquent que vous avez tracké le comportement de navigation d'un visiteur et que vous l'avez associé à son courriel. Ce type de suivi nécessite un consentement explicite préalable, pas seulement une politique de confidentialité accessible.",
                question: "À vérifier : vos visiteurs ont-ils consenti au tracking comportemental avant que vous ne leurs envoyiez des relances ?",
              },
              {
                icon: <CreditCard size={18} className="text-emerald-400" aria-hidden="true" />,
                titre: "Intégration Stripe, PayPal ou autre passerelle de paiement",
                texte: "Ces plateformes reçoivent et traitent les données de paiement de vos clients. Vous devez informer vos clients que leurs données sont transmises à ces tiers, dans quel pays elles sont traitées, et quelles protections s'appliquent. Une mention dans les CGV enfouies dans le footer n'est pas suffisante.",
                question: "À vérifier : votre page de paiement mentionne-t-elle clairement les tiers qui reçoivent les données de transaction ?",
              },
              {
                icon: <CheckCircle2 size={18} className="text-emerald-400" aria-hidden="true" />,
                titre: "Pixels publicitaires et remarketing",
                texte: "Meta Pixel, Google Ads Tag, Pinterest Tag — ces outils suivent vos visiteurs sur d'autres sites après leur départ de votre boutique. Ce type de tracking est soumis à consentement préalable au Québec. Une bannière qui charge ces pixels avant que le visiteur ait eu le temps de choisir n'est pas conforme.",
                question: "À vérifier : vos pixels publicitaires se chargent-ils uniquement après consentement explicite de l'utilisateur ?",
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
            Ce que votre boutique doit vérifier en priorité
          </h2>
          <div className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50 space-y-3">
            {[
              "La case d'inscription à la newsletter n'est pas pré-cochée dans le formulaire de commande",
              "Votre bannière de cookies permet de refuser les cookies de tracking en un seul clic",
              "Vos pixels publicitaires (Meta, Google) ne se chargent qu'après consentement",
              "Votre politique de confidentialité mentionne les pays où vos données sont hébergées (Shopify = USA)",
              "Vos clients peuvent demander la suppression de leur compte et de leurs données facilement",
              "Vos emails de marketing ont un lien de désabonnement fonctionnel et visible",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-0.5 h-4 w-4 shrink-0 rounded border border-slate-600 bg-slate-800" aria-hidden="true" />
                <p className="text-sm text-slate-300">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Pour aller plus loin :{" "}
            <Link href="/ressources/banniere-cookies-loi-25" className="text-sky-400 underline underline-offset-2 hover:text-sky-300">
              Comment créer une bannière de cookies conforme à la Loi 25
            </Link>
          </p>
        </section>

        {/* Section 5 — Service adapté */}
        <section className="mb-12" aria-labelledby="section-service">
          <h2 id="section-service" className="mb-4 text-xl font-bold text-slate-50">
            Un audit pensé pour les e-commerçants québécois
          </h2>
          <div className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50 text-sm leading-relaxed text-slate-300 space-y-3">
            <p>
              En quelques secondes, le pré-audit d&apos;auditloi25.ca analyse les pages publiques de votre boutique : page d&apos;accueil, panier, page de paiement, politique de confidentialité. Il identifie les zones à risque et vous dit quoi corriger en premier.
            </p>
            <p>
              Pas besoin d&apos;être développeur. Le rapport est pensé pour les propriétaires de boutique — avec des recommandations concrètes, pas du jargon légal.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="mb-12 rounded-2xl bg-slate-900 p-8 ring-1 ring-slate-700 text-center">
          <p className="text-lg font-bold text-slate-50">
            Votre boutique collecte des données à chaque commande. Assurez-vous que c&apos;est conforme.
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
              Voir l&apos;offre d&apos;audit Loi 25 pour e-commerce →
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
