import { site } from "@/lib/site";

type JsonLd = Record<string, unknown> & { "@context": "https://schema.org" };

interface OrganizationOptions {
  logoUrl?: string;
  sameAs?: string[];
}

export function buildOrganizationJsonLd(options: OrganizationOptions = {}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "Manufacturer"],
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    logo: options.logoUrl ?? `${site.url}/icon.svg`,
    description: site.description,
    foundingLocation: { "@type": "Country", name: "Schweiz" },
    address: { "@type": "PostalAddress", addressCountry: "CH" },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "hello@swisslongevitylab.com",
        availableLanguage: ["German", "English"],
        areaServed: ["CH", "EU", "UK", "US"],
      },
    ],
    award: [
      "Swissmedic-konforme Produktion",
      "GMP-Zertifizierung",
      "ISO 22000",
      "ISO 13485",
    ],
    sameAs: options.sameAs ?? [],
  };
}

interface FAQ {
  q: string;
  a: string;
}

export function buildFaqJsonLd(faqs: FAQ[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

interface ArticleOptions {
  title: string;
  excerpt: string;
  slug: string;
  authorName: string;
  authorRole: string;
  date: string;
  section: string;
}

export function buildArticleJsonLd(opts: ArticleOptions): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.excerpt,
    author: {
      "@type": "Person",
      name: opts.authorName,
      jobTitle: opts.authorRole,
      worksFor: { "@type": "Organization", name: site.name },
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    datePublished: opts.date,
    dateModified: opts.date,
    articleSection: opts.section,
    mainEntityOfPage: `${site.url}/wissen/insights/${opts.slug}`,
  };
}

interface ProductOptions {
  name: string;
  description: string;
  category: string;
  targetGroup: string;
  ingredients: { name: string; dose: string }[];
}

export function buildProductJsonLd(opts: ProductOptions): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": ["Product", "DietarySupplement"],
    name: opts.name,
    description: opts.description,
    brand: { "@type": "Brand", name: site.shortName },
    manufacturer: { "@type": "Organization", name: site.name, url: site.url },
    category: opts.category,
    audience: { "@type": "PeopleAudience", suggestedAge: opts.targetGroup },
    activeIngredient: opts.ingredients.map((i) => `${i.name} ${i.dose}`).join(", "),
  };
}

/**
 * Renders a JSON-LD script tag. Use inside React tree.
 */
export function jsonLdScript(data: object): string {
  return JSON.stringify(data);
}
