import type { Metadata } from "next";
import Link from "next/link";
import { ShieldIcon } from "@/components/shield-icon";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Sources — Loi 25 et conformité web | auditloi25.ca",
  description:
    "Références légales et institutionnelles citées sur auditloi25.ca : Loi 25, Commission d'accès à l'information (CAI), sondages.",
  alternates: { canonical: "https://auditloi25.ca/ressources/sources-loi-25" },
};

type Source = {
  id: string;
  label: string;
  citation: string;
  note: string;
  url: string;
  urlLabel: string;
};

const sources: Source[] = [
  {
    id: "loi25-art90-92",
    label: "Amendes administratives et pénales",
    citation:
      "Loi modernisant des dispositions législatives en matière de protection des renseignements personnels (L.Q. 2021, c. 25), articles 90 et 92.",
    note:
      "Les amendes administratives peuvent atteindre 10 M$ ou 2 % du chiffre d'affaires mondial ; les amendes pénales peuvent atteindre 25 M$ ou 4 % du chiffre d'affaires mondial pour les infractions les plus graves.",
    url: "https://www.legisquebec.gouv.qc.ca/fr/document/lc/P-39.1",
    urlLabel: "Texte complet sur LégisQuébec (P-39.1)",
  },
  {
    id: "cai-sondage-2023",
    label: "Préoccupations des Québécois sur la vie privée",
    citation:
      "Commission d'accès à l'information du Québec (CAI). Sondage sur la vie privée des Québécois, 2023.",
    note:
      "81 % des répondants se déclarent préoccupés par la manière dont leurs renseignements personnels sont collectés et utilisés en ligne par les entreprises et organismes.",
    url: "https://www.cai.gouv.qc.ca",
    urlLabel: "Site de la CAI — cai.gouv.qc.ca",
  },
  {
    id: "cai-lignes-directrices-temoins",
    label: "Surveillance des sites web et lignes directrices sur les témoins",
    citation:
      "Commission d'accès à l'information du Québec (CAI). Lignes directrices sur les témoins de connexion (cookies), 2023.",
    note:
      "La CAI a publié des lignes directrices précisant les obligations des organisations québécoises en matière de témoins de connexion, applicables aux PME comme aux grandes organisations. Les organisations doivent notamment offrir la possibilité de refuser les témoins aussi facilement que de les accepter.",
    url: "https://www.cai.gouv.qc.ca/uploads/pdfs/CAI_Criteres_Validite_Consentement.pdf?v=1705425983",
    urlLabel: "Critères de validité du consentement (PDF) — CAI",
  },
];

export default function SourcesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Sources — Loi 25 et conformité web",
    description:
      "Références légales et institutionnelles citées sur auditloi25.ca : Loi 25, Commission d'accès à l'information (CAI), sondages.",
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
      "@id": "https://auditloi25.ca/ressources/sources-loi-25",
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
        { name: "Sources Loi 25", href: "/ressources/sources-loi-25" },
      ]} />
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">

        {/* Navbar minimale */}
        <div className="mb-10 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold text-slate-100"
          >
            <ShieldIcon
              size={18}
              className="shrink-0 text-sky-400 drop-shadow-[0_0_6px_rgba(56,189,248,0.5)]"
            />
            auditloi25.ca
          </Link>
        </div>

        {/* Breadcrumb */}
        <nav aria-label="Fil d'Ariane" className="mb-8 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-300 transition-colors">
            Accueil
          </Link>
          <span className="mx-2" aria-hidden="true">·</span>
          <span className="text-slate-400">Sources et références</span>
        </nav>

        {/* En-tête */}
        <header className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
            Transparence
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-50">
            Sources et références
          </h1>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-400">
            Les statistiques et obligations légales citées sur auditloi25.ca
            proviennent de sources officielles québécoises. Voici les
            références complètes pour chaque donnée.
          </p>
        </header>

        {/* Liste des sources */}
        <ol className="space-y-6" aria-label="Sources citées">
          {sources.map((source, index) => (
            <li
              key={source.id}
              className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50"
            >
              <div className="flex items-start gap-4">
                <span
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-400/10 text-xs font-semibold text-sky-300 ring-1 ring-sky-500/30"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="text-base font-semibold text-slate-100">
                    {source.label}
                  </h2>
                  <p className="mt-2 text-sm italic text-slate-300">
                    {source.citation}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {source.note}
                  </p>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex cursor-pointer items-center gap-1.5 text-xs text-sky-400 underline underline-offset-4 decoration-sky-400/40 transition-colors hover:text-sky-300 hover:decoration-sky-300/60"
                  >
                    {source.urlLabel}
                    <ExternalLink size={11} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ol>

        {/* Note de bas de page */}
        <div className="mt-12 rounded-xl bg-slate-900/40 p-5 ring-1 ring-slate-800 text-xs text-slate-500">
          <p className="leading-relaxed">
            <span className="font-medium text-slate-400">Avertissement&nbsp;:</span>{" "}
            Ces sources sont fournies à titre informatif uniquement. Elles ne
            constituent pas un avis juridique. Pour toute question de
            conformité spécifique à votre organisation, consultez un
            professionnel du droit qualifié.
          </p>
        </div>

        {/* Lien retour */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-sky-300 transition-colors hover:text-sky-200"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            Retour à l&apos;accueil
          </Link>
        </div>

      </div>
    </main>
  );
}
