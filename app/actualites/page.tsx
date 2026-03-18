import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/app/data/blog";
import { BreadcrumbJsonLd } from "@/components/json-ld";

const siteUrl = "https://auditloi25.ca";

export const metadata: Metadata = {
  title: "Actualités et guides Loi 25 | auditloi25.ca",
  description:
    "Guides pratiques et actualités sur la Loi 25 au Québec : cookies, consentement, politique de confidentialité, inspections CAI. Pour PME et OBNL.",
  alternates: {
    canonical: `${siteUrl}/actualites`,
  },
  openGraph: {
    type: "website",
    locale: "fr_CA",
    url: `${siteUrl}/actualites`,
    siteName: "auditloi25.ca",
    title: "Actualités et guides Loi 25 | auditloi25.ca",
    description:
      "Guides pratiques et actualités sur la Loi 25 au Québec : cookies, consentement, politique de confidentialité, inspections CAI. Pour PME et OBNL.",
  },
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("fr-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ActualitesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: "Actualités", href: "/actualites" },
        ]}
      />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Navbar minimale */}
        <div className="mb-10 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-semibold text-slate-100 hover:text-white transition-colors"
          >
            auditloi25.ca
          </Link>
          <Link
            href="/offre"
            className="text-sm text-slate-400 hover:text-slate-100 transition-colors"
          >
            Voir l&apos;offre
          </Link>
        </div>

        {/* Breadcrumb */}
        <nav aria-label="Fil d'Ariane" className="mb-8 text-xs text-slate-500">
          <Link href="/" className="transition-colors hover:text-slate-300">
            Accueil
          </Link>
          <span className="mx-2" aria-hidden="true">
            ·
          </span>
          <span className="text-slate-400">Actualités</span>
        </nav>

        {/* En-tête */}
        <header className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
            Guides et actualités
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl">
            Actualités et guides Loi&nbsp;25
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
            Guides pratiques, analyses et mises à jour sur la Loi 25 québécoise
            — pour que votre PME ou organisme sache exactement quoi faire, dans
            quel ordre.
          </p>
        </header>

        {/* Liste des articles */}
        <div className="space-y-6">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-800 transition-colors hover:ring-slate-700"
            >
              <Link href={`/actualites/${post.slug}`} className="group block">
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-3">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.tempsLecture} min de lecture</span>
                </div>
                <h2 className="text-lg font-semibold text-slate-100 group-hover:text-white transition-colors">
                  {post.titre}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {post.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-sky-400 group-hover:text-sky-300 transition-colors">
                  Lire l&apos;article
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-gradient-to-br from-sky-500/10 via-slate-950/80 to-emerald-500/10 p-8 text-center ring-1 ring-sky-500/20">
          <p className="text-lg font-bold text-slate-50">
            Vous voulez savoir où en est votre site&nbsp;?
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Pré-audit gratuit — un premier bilan clair sous 48 heures, sans
            engagement.
          </p>
          <Link
            href="/#formulaire"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_24px_rgba(16,185,129,0.25)] transition-colors hover:bg-emerald-400 hover:text-white"
          >
            Demander mon pré-audit gratuit
          </Link>
        </div>

        {/* Footer minimal */}
        <div className="mt-12 border-t border-slate-800/70 pt-6 text-xs text-slate-500">
          <p>
            Les articles publiés sur auditloi25.ca sont fournis à titre
            informatif. Ils ne constituent pas un avis juridique.
          </p>
        </div>
      </div>
    </main>
  );
}
