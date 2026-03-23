import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, XCircle, AlertTriangle, ArrowLeft } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Bannière de cookies et Loi 25 : est-ce que la vôtre est vraiment conforme ? | auditloi25.ca",
  description:
    "Votre bannière de cookies est-elle conforme à la Loi 25 ? Découvrez ce qu'exige la CAI pour les PME et OBNL québécois — expliqué clairement, sans jargon.",
  alternates: { canonical: "https://auditloi25.ca/ressources/banniere-cookies-loi-25" },
};

export default function BanniereCookiesLoi25Page() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Bannière de cookies et Loi 25 : est-ce que la vôtre est vraiment conforme ?",
    description:
      "Votre bannière de cookies est-elle conforme à la Loi 25 ? Découvrez ce qu'exige la CAI pour les PME et OBNL québécois — expliqué clairement, sans jargon.",
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
      "@id": "https://auditloi25.ca/ressources/banniere-cookies-loi-25",
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
        { name: "Bannière de cookies et Loi 25", href: "/ressources/banniere-cookies-loi-25" },
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
          <span className="text-slate-400">Bannière de cookies et Loi 25</span>
        </nav>

        {/* En-tête */}
        <header className="mb-12">
          <span className="inline-flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-300 ring-1 ring-sky-500/30">
            Conformité Loi 25
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl">
            Bannière de cookies et Loi&nbsp;25 : est-ce que la vôtre est vraiment conforme&nbsp;?
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            La plupart des organisations québécoises ont une bannière de cookies. Beaucoup pensent que ça suffit. Ce n&apos;est souvent pas le cas.
          </p>
          <p className="mt-3 text-xs text-slate-500">5 min de lecture</p>
        </header>

        {/* Section 1 — Hook storytelling */}
        <section className="mb-12" aria-labelledby="section-probleme">
          <h2 id="section-probleme" className="mb-4 text-xl font-bold text-slate-50">
            Le problème que personne ne voit
          </h2>
          <div className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50 text-sm leading-relaxed text-slate-300 space-y-4">
            <p>
              Imaginez une directrice d&apos;un organisme communautaire de Montréal. Il y a deux ans, son webmestre a installé une bannière sur le site : <em className="text-slate-200">&quot;Nous utilisons des cookies pour améliorer votre expérience. [OK]&quot;</em>. Elle a coché la case dans sa tête. Problème réglé.
            </p>
            <p>
              Mais en 2023, la Commission d&apos;accès à l&apos;information (CAI) a précisé ses attentes : cette bannière-là ne suffit plus. Pourquoi ? Parce que donner son accord doit être un vrai choix — et <strong className="text-slate-100">refuser les cookies doit être aussi facile qu&apos;accepter</strong>. Un seul bouton &quot;OK&quot; ne laisse aucune option.
            </p>
            <p>
              Ce n&apos;est pas une subtilité technique réservée aux grandes entreprises. C&apos;est une exigence concrète qui s&apos;applique à votre site, maintenant.
            </p>
          </div>
        </section>

        {/* Section 2 — Ce que la Loi 25 exige */}
        <section className="mb-12" aria-labelledby="section-exigences">
          <h2 id="section-exigences" className="mb-6 text-xl font-bold text-slate-50">
            Ce que la Loi&nbsp;25 exige vraiment pour votre bannière
          </h2>
          <p className="mb-6 text-sm text-slate-400">
            Voici les 5 points que la CAI met de l&apos;avant pour les sites web québécois. Pas de jargon — juste ce qui compte.
          </p>
          <ol className="space-y-4">
            {[
              {
                num: "1",
                titre: "Un vrai bouton « Refuser »",
                texte: "Le visiteur doit pouvoir refuser les cookies non essentiels d'un seul clic — de la même façon qu'il peut les accepter. Cacher le refus dans un menu ou l'appeler « Fermer » ne compte pas.",
              },
              {
                num: "2",
                titre: "Les cookies se déclenchent après le choix, pas avant",
                texte: "Les cookies non nécessaires (analytics, pixels publicitaires, outils tiers) ne doivent pas se lancer tant que le visiteur n'a pas donné son accord. Si vos cookies partent dès l'ouverture du site, vous n'êtes pas conforme.",
              },
              {
                num: "3",
                titre: "Une explication en français clair",
                texte: "\"We use cookies to improve your experience\" ne suffit pas — ni dans la langue, ni dans le contenu. Votre bannière doit expliquer à quoi servent vos cookies, en termes compréhensibles.",
              },
              {
                num: "4",
                titre: "Un lien vers votre politique de confidentialité",
                texte: "La bannière doit permettre au visiteur d'en savoir plus avant de décider. Un lien vers une politique à jour est indispensable.",
              },
              {
                num: "5",
                titre: "La possibilité de changer d'avis",
                texte: "Après avoir fermé la bannière, votre visiteur doit pouvoir accéder à ses préférences de cookies à tout moment — pas seulement au premier chargement.",
              },
            ].map((item) => (
              <li key={item.num} className="flex gap-4 rounded-xl bg-slate-900/60 p-5 ring-1 ring-slate-700/40">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-400/10 text-xs font-bold text-sky-300 ring-1 ring-sky-500/30">
                  {item.num}
                </span>
                <div>
                  <p className="font-semibold text-slate-100">{item.titre}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{item.texte}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Section 3 — Exemples concrets */}
        <section className="mb-12" aria-labelledby="section-exemples">
          <h2 id="section-exemples" className="mb-6 text-xl font-bold text-slate-50">
            Ce que ça ressemble en pratique
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Non conforme */}
            <div className="rounded-xl bg-red-950/30 p-5 ring-1 ring-red-500/20">
              <div className="flex items-center gap-2 mb-3">
                <XCircle size={16} className="text-red-400" aria-hidden="true" />
                <p className="text-xs font-semibold uppercase tracking-wide text-red-400">Ce qui ne suffit plus</p>
              </div>
              <div className="rounded-lg bg-slate-800/60 p-3 text-xs text-slate-300 space-y-2">
                <p>Ce site utilise des cookies pour améliorer votre expérience.</p>
                <button className="rounded bg-slate-600 px-3 py-1 text-xs text-white" disabled>OK</button>
              </div>
              <ul className="mt-3 space-y-1 text-xs text-slate-400">
                <li>· Un seul bouton, aucune option de refus</li>
                <li>· Cookies déjà chargés avant le choix</li>
                <li>· Pas de lien vers la politique</li>
              </ul>
            </div>

            {/* Conforme */}
            <div className="rounded-xl bg-emerald-950/30 p-5 ring-1 ring-emerald-500/20">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 size={16} className="text-emerald-400" aria-hidden="true" />
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400">Ce que la CAI attend</p>
              </div>
              <div className="rounded-lg bg-slate-800/60 p-3 text-xs text-slate-300 space-y-2">
                <p>Nous utilisons des témoins pour mémoriser vos préférences. <span className="text-sky-400 underline cursor-pointer">Politique de confidentialité</span></p>
                <div className="flex gap-2">
                  <button className="rounded bg-emerald-600 px-3 py-1 text-xs text-white" disabled>Tout accepter</button>
                  <button className="rounded bg-slate-600 px-3 py-1 text-xs text-white" disabled>Tout refuser</button>
                </div>
              </div>
              <ul className="mt-3 space-y-1 text-xs text-slate-400">
                <li>· Refus aussi visible que l&apos;acceptation</li>
                <li>· Cookies bloqués jusqu&apos;au choix</li>
                <li>· Lien vers la politique accessible</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4 — 3 erreurs courantes */}
        <section className="mb-12" aria-labelledby="section-erreurs">
          <h2 id="section-erreurs" className="mb-6 text-xl font-bold text-slate-50">
            Les 3 erreurs les plus courantes chez les PME et OBNL
          </h2>
          <ol className="space-y-5">
            {[
              {
                num: "01",
                titre: "Une bannière qui ne bloque rien",
                texte: "La bannière s'affiche, mais les scripts Google Analytics, les pixels et les outils tiers se lancent déjà en arrière-plan. Le consentement affiché est cosmétique — pas réel.",
              },
              {
                num: "02",
                titre: "Le bouton « Refuser » qui disparaît ou se cache",
                texte: "Il est en tout petit, dans un menu secondaire, ou appelé « Personnaliser » sans jamais offrir un vrai refus global. L'effort pour refuser est bien plus grand que pour accepter — c'est exactement ce que la CAI interdit.",
              },
              {
                num: "03",
                titre: "Une politique de confidentialité absente ou périmée",
                texte: "La bannière renvoie vers une page vide, introuvable, ou rédigée avant l'entrée en vigueur de la Loi 25. Le lien est là, mais le contenu ne remplit pas les obligations de transparence.",
              },
            ].map((item) => (
              <li key={item.num} className="flex gap-4">
                <AlertTriangle size={18} className="mt-0.5 shrink-0 text-amber-400" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-slate-100">{item.titre}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{item.texte}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Section 5 — Par où commencer */}
        <section className="mb-12" aria-labelledby="section-debut">
          <h2 id="section-debut" className="mb-4 text-xl font-bold text-slate-50">
            Par où commencer&nbsp;?
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-slate-400">
            Pas besoin d&apos;être expert TI pour corriger votre bannière. Deux chemins s&apos;offrent à vous.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-slate-900/60 p-5 ring-1 ring-slate-700/40">
              <p className="font-semibold text-slate-100">Option rapide — outil spécialisé</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Des outils comme CookieYes (plan gratuit disponible) peuvent générer une bannière conforme si correctement configurés : langue française, boutons équilibrés, blocage des scripts, lien vers la politique.
              </p>
            </div>
            <div className="rounded-xl bg-slate-900/60 p-5 ring-1 ring-slate-700/40">
              <p className="font-semibold text-slate-100">Option complète — vérification professionnelle</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Un regard externe sur l&apos;ensemble de la configuration — bannière, cookies actifs, politique de confidentialité, formulaires — vous donne un portrait précis de ce qui est conforme et de ce qui doit être corrigé.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="mb-6 rounded-2xl bg-slate-900 p-8 ring-1 ring-slate-700 text-center">
          <p className="text-lg font-bold text-slate-50">
            Vous ne savez pas si votre bannière est conforme&nbsp;?
          </p>
          <p className="mt-2 text-sm text-slate-400">
            On analyse votre site et on vous remet un premier bilan clair — cookies actifs, comportement de la bannière, zones à corriger.
          </p>
          <Link
            href="/#formulaire"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_24px_rgba(16,185,129,0.25)] transition-colors hover:bg-emerald-400 hover:text-white"
          >
            Obtenir mon pré‑audit gratuit
          </Link>
          <p className="mt-3 text-xs text-slate-500">Retour sous 48 h · Sans engagement · Aucune carte requise</p>
        </div>

        {/* Lien vers l'offre complète */}
        <div className="mb-12 rounded-xl border border-sky-500/20 bg-sky-500/5 px-6 py-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-slate-200">
              Vous voulez un audit complet de votre bannière et de l&apos;ensemble de votre site&nbsp;?
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Rapport PDF, score de risque par zone, plan d&apos;action — à partir de 450&nbsp;$.
            </p>
          </div>
          <Link
            href="/offre"
            className="shrink-0 inline-flex items-center gap-1 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors"
          >
            Voir l&apos;offre →
          </Link>
        </div>

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
