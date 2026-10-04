import type { MetadataRoute } from "next";
import { getSiteOrigin, sitemapEntries } from "@/config/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteOrigin = getSiteOrigin();
  const lastModified = new Date();

  return sitemapEntries.map((entry) => ({
    url: `${siteOrigin}${entry.path === "/" ? "" : entry.path}`,
    lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
