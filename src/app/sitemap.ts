import type { MetadataRoute } from "next";
import { site, leistungen, produkte } from "@/lib/site";
import { getInsightSlugs } from "@/lib/content";

const BASE = site.url;

const EXPERTISE_SLUGS = ["capabilities", "prozess", "qualitaet", "standort"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/leistungen`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/expertise`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/produkte`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/wissen`, lastModified: now, changeFrequency: "weekly", priority: 0.75 },
    { url: `${BASE}/wissen/forschung`, lastModified: now, changeFrequency: "monthly", priority: 0.65 },
    { url: `${BASE}/wissen/partner`, lastModified: now, changeFrequency: "monthly", priority: 0.65 },
    { url: `${BASE}/wissen/insights`, lastModified: now, changeFrequency: "weekly", priority: 0.75 },
    { url: `${BASE}/unternehmen`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/unternehmen/story`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/unternehmen/team`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/unternehmen/karriere`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/kontakt`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    { url: `${BASE}/datenschutz`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/impressum`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/agb`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const leistungsPages: MetadataRoute.Sitemap = leistungen.map((l) => ({
    url: `${BASE}/leistungen/${l.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const expertisePages: MetadataRoute.Sitemap = EXPERTISE_SLUGS.map((slug) => ({
    url: `${BASE}/expertise/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const produktPages: MetadataRoute.Sitemap = produkte.map((p) => ({
    url: `${BASE}/produkte/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const insightPages: MetadataRoute.Sitemap = getInsightSlugs().map((slug) => ({
    url: `${BASE}/wissen/insights/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...leistungsPages, ...expertisePages, ...produktPages, ...insightPages];
}
