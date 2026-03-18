import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS } from "@/app/data/blog";
import { BreadcrumbJsonLd } from "@/components/json-ld";

const siteUrl = "https://auditloi25.ca";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.titre} | auditloi25.ca`,
    description: post.description,
    alternates: {
      canonical: `${siteUrl}/actualites/${post.slug}`,
    },
    openGraph: {
      type: "article",
      locale: "fr_CA",
      url: `${siteUrl}/actualites/${post.slug}`,
      siteName: "auditloi25.ca",
      title: post.titre,
      description: post.description,
      publishedTime: post.date,
    },
  };
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("fr-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ActualiteArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.titre,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "auditloi25.ca",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "auditloi25.ca",
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/actualites/${post.slug}`,
    },
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: "Actualités", href: "/actualites" },
          { name: post.titre, href: `/actualites/${post.slug}` },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
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
          <Link
            href="/actualites"
            className="transition-colors hover:text-slate-300"
          >
            Actualités
          </Link>
          <span className="mx-2" aria-hidden="true">
            ·
          </span>
          <span className="text-slate-400 line-clamp-1">{post.titre}</span>
        </nav>

        {/* En-tête article */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.tempsLecture} min de lecture</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl">
            {post.titre}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            {post.description}
          </p>
        </header>

        {/* Contenu HTML */}
        <div
          className="prose prose-invert prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-100 prose-h2:text-xl prose-h3:text-base prose-p:text-slate-300 prose-p:leading-relaxed prose-li:text-slate-300 prose-strong:text-slate-100 prose-a:text-sky-400 prose-a:no-underline hover:prose-a:text-sky-300"
          dangerouslySetInnerHTML={{ __html: post.contenu }}
        />

        {/* CTA principal */}
        <div className="mt-16 rounded-2xl bg-slate-900 p-8 ring-1 ring-slate-700 text-center">
          <p className="text-lg font-bold text-slate-50">
            Vous voulez vérifier la conformité de votre site&nbsp;?
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Pré-audit gratuit — un premier bilan clair sous 48 heures, sans
            engagement.
          </p>
          <Link
            href="/#formulaire"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_24px_rgba(16,185,129,0.25)] transition-colors hover:bg-emerald-400 hover:text-white"
          >
            Obtenir mon pré-audit gratuit
          </Link>
          <p className="mt-3 text-xs text-slate-500">
            Retour sous 48 h · Sans engagement · Aucune carte requise
          </p>
        </div>

        {/* Lien vers l'offre */}
        <div className="mt-6 rounded-xl border border-sky-500/20 bg-sky-500/5 px-6 py-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-slate-200">
              Prêt à aller plus loin avec un audit complet&nbsp;?
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Rapport PDF, score de risque par zone, plan d&apos;action — à
              partir de 450&nbsp;$.
            </p>
          </div>
          <Link
            href="/offre"
            className="shrink-0 inline-flex items-center gap-1 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors"
          >
            Voir l&apos;offre →
          </Link>
        </div>

        {/* Articles liés */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-lg font-bold text-slate-100 mb-6">
              Articles liés
            </h2>
            <div className="space-y-4">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/actualites/${related.slug}`}
                  className="group block rounded-xl bg-slate-900/60 p-5 ring-1 ring-slate-800 transition-colors hover:ring-slate-700"
                >
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-2">
                    <time dateTime={related.date}>{formatDate(related.date)}</time>
                    <span aria-hidden="true">·</span>
                    <span>{related.tempsLecture} min</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                    {related.titre}
                  </p>
                  <p className="mt-1 text-xs text-slate-400 line-clamp-2">
                    {related.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Footer minimal */}
        <div className="mt-12 border-t border-slate-800/70 pt-6 text-xs text-slate-500">
          <p>
            Cet article est fourni à titre informatif. Il ne constitue pas un
            avis juridique.
          </p>
        </div>
      </div>
    </main>
  );
}
