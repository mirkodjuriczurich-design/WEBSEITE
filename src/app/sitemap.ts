import type { MetadataRoute } from "next";
import { site, leistungen, produkte } from "@/lib/site";

const BASE = site.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/expertise`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/produkte`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/wissen`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/unternehmen`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/kontakt`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    { url: `${BASE}/datenschutz`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/impressum`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/agb`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const leistungsPages: MetadataRoute.Sitemap = leistungen.map((l) => ({
    url: `${BASE}/services/${l.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const produktPages: MetadataRoute.Sitemap = produkte.map((p) => ({
    url: `${BASE}/produkte/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticPages, ...leistungsPages, ...produktPages];
}
