import Link from "next/link";
import { BLOG_POSTS } from "@/app/data/blog";

type Props = {
  slugs: string[];
  heading?: string;
};

export function RelatedArticles({ slugs, heading = "Pour approfondir" }: Props) {
  const posts = slugs
    .map((slug) => BLOG_POSTS.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  if (posts.length === 0) return null;

  return (
    <div className="mt-8 rounded-xl bg-slate-900/50 p-5 ring-1 ring-slate-800">
      <p className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-3">
        {heading}
      </p>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/actualites/${post.slug}`}
              className="text-sm text-slate-300 hover:text-sky-300 transition-colors"
            >
              → {post.titre}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
