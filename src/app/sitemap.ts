import type { MetadataRoute } from "next";
import { getLocaleContent } from "@/content";
import { supportedLocales } from "@/lib/constants/locales";
import { siteMetadata } from "@/lib/seo/site-metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const localizedHome = supportedLocales.map((locale) => ({
    url: `${siteMetadata.url}/${locale}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 1,
  }));
  const projectPages = supportedLocales.flatMap((locale) =>
    getLocaleContent(locale).projects.map((project) => ({
      url: `${siteMetadata.url}/${locale}/projects/${project.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  );

  return [...localizedHome, ...projectPages];
}
