import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://auditloi25.ca";

  return [
    {
      url: base,
      lastModified: "2026-03-18",
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${base}/offre`,
      lastModified: "2026-03-15",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/ressources`,
      lastModified: "2026-03-10",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/ressources/checklist-loi-25-site-web`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/ressources/sources-loi-25`,
      lastModified: "2026-02-01",
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${base}/ressources/banniere-cookies-loi-25`,
      lastModified: "2026-03-05",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/ressources/penalites-loi-25-entreprise`,
      lastModified: "2026-03-05",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/ressources/audit-loi-25-obnl`,
      lastModified: "2026-03-08",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/a-propos`,
      lastModified: "2026-02-15",
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${base}/politique-de-confidentialite`,
      lastModified: "2026-02-01",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/actualites`,
      lastModified: "2026-03-18",
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${base}/actualites/loi-25-quest-ce-que-cest-guide-pme`,
      lastModified: "2026-03-18",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/actualites/cookies-consentement-loi-25-2026`,
      lastModified: "2026-03-18",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/actualites/cai-inspection-site-web-comment-se-preparer`,
      lastModified: "2026-03-18",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/actualites/politique-confidentialite-loi-25-rediger`,
      lastModified: "2026-03-18",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/actualites/banniere-cookies-loi-25-site-web`,
      lastModified: "2026-03-23",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/actualites/loi-25-obnl-quebec-obligations`,
      lastModified: "2026-03-23",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/actualites/cout-audit-loi-25-entreprise`,
      lastModified: "2026-03-23",
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
