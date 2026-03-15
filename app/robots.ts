import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/merci"],
    },
    sitemap: "https://auditloi25.ca/sitemap.xml",
  };
}
