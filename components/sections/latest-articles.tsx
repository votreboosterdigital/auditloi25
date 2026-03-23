import Link from "next/link";
import { BLOG_POSTS } from "@/app/data/blog";

export function LatestArticles() {
  const latest = [...BLOG_POSTS]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <section aria-labelledby="latest-articles-heading" className="py-16 sm:py-20">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
            Guides et actualités
          </p>
          <h2
            id="latest-articles-heading"
            className="mt-2 text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl"
          >
            Comprendre la Loi&nbsp;25 en pratique
          </h2>
        </div>
        <Link
          href="/actualites"
          className="hidden sm:inline-flex text-sm text-sky-400 hover:text-sky-300 transition-colors shrink-0"
        >
          Tous les articles →
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {latest.map((post) => (
          <Link
            key={post.slug}
            href={`/actualites/${post.slug}`}
            className="group block rounded-xl bg-slate-900/60 p-5 ring-1 ring-slate-800 transition-colors hover:ring-sky-500/30"
          >
            <p className="text-[11px] text-slate-500 mb-2">{post.tempsLecture} min de lecture</p>
            <p className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors leading-snug">
              {post.titre}
            </p>
            <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed">
              {post.description}
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-sky-400 group-hover:text-sky-300 transition-colors">
              Lire →
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-4 sm:hidden text-center">
        <Link href="/actualites" className="text-sm text-sky-400 hover:text-sky-300 transition-colors">
          Tous les articles →
        </Link>
      </div>
    </section>
  );
}
