import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckSquare, ToggleLeft, ShieldAlert, Heart, BookOpen } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Ressources Loi 25 pour PME et OBNL | auditloi25.ca",
  description:
    "Guides pratiques sur la conformité Loi 25 pour votre site web : bannière de cookies, amendes, checklist, obligations des OBNL. Expliqués clairement, sans jargon.",
  alternates: { canonical: "https://auditloi25.ca/ressources" },
};

const ressources = [
  {
    href: "/ressources/checklist-loi-25-site-web",
    badge: "Outil pratique",
    badgeColor: "bg-emerald-500/10 text-emerald-300 ring-emerald-500/30",
    icon: <CheckSquare size={22} className="text-emerald-400" aria-hidden="true" />,
    iconBg: "bg-emerald-500/10",
    titre: "Checklist Loi 25 pour votre site web",
    description:
      "Vérifiez point par point si votre site respecte les exigences clés : cookies, formulaires, infolettre, politique de confidentialité, droits des personnes.",
    temps: "10 min",
    cta: "Accéder à la checklist",
  },
  {
    href: "/ressources/banniere-cookies-loi-25",
    badge: "Guide pratique",
    badgeColor: "bg-sky-400/10 text-sky-300 ring-sky-500/30",
    icon: <ToggleLeft size={22} className="text-sky-400" aria-hidden="true" />,
    iconBg: "bg-sky-400/10",
    titre: "Bannière de cookies et Loi 25 : est-ce que la vôtre est conforme ?",
    description:
      "La plupart des bannières de cookies ne respectent pas les nouvelles exigences de la CAI. Découvrez les 5 critères à vérifier — et les 3 erreurs les plus fréquentes.",
    temps: "5 min de lecture",
    cta: "Lire le guide",
  },
  {
    href: "/ressources/penalites-loi-25-entreprise",
    badge: "À savoir",
    badgeColor: "bg-amber-500/10 text-amber-300 ring-amber-500/30",
    icon: <ShieldAlert size={22} className="text-amber-400" aria-hidden="true" />,
    iconBg: "bg-amber-500/10",
    titre: "Amendes Loi 25 : ce que risque votre PME",
    description:
      "Jusqu'à 25 M$ d'amende pénale — mais les vraies questions sont : qu'est-ce qui déclenche une enquête de la CAI, et comment l'éviter ? On vous explique clairement.",
    temps: "4 min de lecture",
    cta: "Lire le guide",
  },
  {
    href: "/ressources/audit-loi-25-obnl",
    badge: "Pour les OBNL",
    badgeColor: "bg-sky-400/10 text-sky-300 ring-sky-500/30",
    icon: <Heart size={22} className="text-sky-400" aria-hidden="true" />,
    iconBg: "bg-sky-400/10",
    titre: "Loi 25 et OBNL : votre organisme est-il à l'abri ?",
    description:
      "La Loi 25 s'applique aux OBNL autant qu'aux entreprises. Formulaires de dons, inscriptions, infolettres — voici ce que votre organisme doit vérifier en priorité.",
    temps: "5 min de lecture",
    cta: "Lire le guide",
  },
  {
    href: "/ressources/sources-loi-25",
    badge: "Références",
    badgeColor: "bg-slate-700/60 text-slate-300 ring-slate-600/40",
    icon: <BookOpen size={22} className="text-slate-400" aria-hidden="true" />,
    iconBg: "bg-slate-700/30",
    titre: "Sources et références légales",
    description:
      "Les textes officiels et publications de la CAI cités sur auditloi25.ca : Loi 25, critères de validité du consentement, sondages.",
    temps: "Références",
    cta: "Voir les sources",
  },
];

export default function RessourcesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <BreadcrumbJsonLd items={[
        { name: "Accueil", href: "/" },
        { name: "Ressources", href: "/ressources" },
      ]} />
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">

        {/* Navbar minimale */}
        <div className="mb-10">
          <Link href="/" className="text-sm font-semibold text-slate-100 hover:text-white transition-colors">
            auditloi25.ca
          </Link>
        </div>

        {/* Breadcrumb */}
        <nav aria-label="Fil d'Ariane" className="mb-8 text-xs text-slate-500">
          <Link href="/" className="transition-colors hover:text-slate-300">Accueil</Link>
          <span className="mx-2" aria-hidden="true">·</span>
          <span className="text-slate-400">Ressources</span>
        </nav>

        {/* En-tête */}
        <header className="mb-12">
          <span className="inline-flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-300 ring-1 ring-sky-500/30">
            Guides et outils gratuits
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl">
            Ressources Loi&nbsp;25 pour PME et OBNL
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Tout ce qu&apos;il faut savoir sur la conformité Loi&nbsp;25 de votre site web — expliqué clairement, sans jargon juridique.
          </p>
        </header>

        {/* Liste des ressources */}
        <ol className="space-y-4" aria-label="Ressources disponibles">
          {ressources.map((r) => (
            <li key={r.href}>
              <Link
                href={r.href}
                className="group flex gap-5 rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50 transition-all hover:ring-sky-500/30 hover:shadow-[0_8px_32px_rgba(56,189,248,0.06)]"
              >
                {/* Icône */}
                <div className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${r.iconBg}`}>
                  {r.icon}
                </div>

                {/* Contenu */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold ring-1 ${r.badgeColor}`}>
                      {r.badge}
                    </span>
                    <span className="text-[11px] text-slate-500">{r.temps}</span>
                  </div>
                  <h2 className="text-base font-semibold text-slate-100 group-hover:text-sky-300 transition-colors">
                    {r.titre}
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                    {r.description}
                  </p>
                  <p className="mt-3 text-xs font-medium text-sky-400 group-hover:text-sky-300 transition-colors">
                    {r.cta} →
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ol>

        {/* CTA */}
        <div className="mt-12 rounded-2xl bg-slate-900 p-8 ring-1 ring-slate-700 text-center">
          <p className="text-lg font-bold text-slate-50">
            Prêt à vérifier votre site&nbsp;?
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Le pré-audit est gratuit. On analyse vos pages et on vous remet un rapport clair sous 48 h.
          </p>
          <Link
            href="/#formulaire"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_24px_rgba(16,185,129,0.25)] transition-colors hover:bg-emerald-400 hover:text-white"
          >
            Obtenir mon pré‑audit gratuit
          </Link>
          <p className="mt-3 text-xs text-slate-500">Sans engagement · Retour sous 48 h</p>
        </div>

        {/* Footer */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-8 text-xs text-slate-500">
          <Link href="/" className="inline-flex items-center gap-2 text-sky-300 hover:text-sky-200 transition-colors font-medium">
            <ArrowLeft size={13} aria-hidden="true" />
            Retour à l&apos;accueil
          </Link>
          <Link href="/offre" className="text-slate-400 hover:text-slate-200 transition-colors">
            Voir l&apos;offre d&apos;audit Loi 25 →
          </Link>
        </div>

      </div>
    </main>
  );
}
