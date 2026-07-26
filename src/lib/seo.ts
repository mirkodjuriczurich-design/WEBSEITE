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
    "@id": `${site.url}/#organization`,
    name: site.name,
    legalName: "Swiss Longevity Labs AG",
    alternateName: [site.shortName, "SLL"],
    url: site.url,
    logo: {
      "@type": "ImageObject",
      url: options.logoUrl ?? `${site.url}/icon.svg`,
      contentUrl: options.logoUrl ?? `${site.url}/icon.svg`,
    },
    description: site.llmDescription,
    taxID: "CHE-427.358.353",
    foundingLocation: { "@type": "Country", name: "Schweiz" },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sihlbruggstrasse 105",
      addressLocality: "Baar",
      postalCode: "6340",
      addressCountry: "CH",
    },
    areaServed: ["CH", "EU", "UK", "US"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "hello@swisslongevitylabs.com",
        availableLanguage: ["German", "English"],
        areaServed: ["CH", "EU", "UK", "US"],
      },
    ],
    knowsAbout: [
      "Longevity-Wissenschaft",
      "Nahrungsergänzungsmittel",
      "Dietary Supplements",
      "GMP-Produktion",
      "Pharmazeutische Galenik",
      "Swissmedic-Regulatorik",
      "EFSA Health Claims",
      "NAD⁺-Metabolismus",
      "Spermidin",
      "Senolytika",
      "NMN",
      "Autophagie",
      "Private Label Supplements",
      "CDMO Pharma Schweiz",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "GMP-Zertifizierung",
        credentialCategory: "Manufacturing Certification",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "ISO 22000",
        credentialCategory: "Food Safety Certification",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "ISO 13485",
        credentialCategory: "Medical Device Quality Certification",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Swissmedic-konforme Produktion",
        credentialCategory: "Regulatory Compliance",
      },
    ],
    sameAs: options.sameAs ?? [],
  };
}

export function buildWebSiteJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: "de-CH",
    publisher: { "@id": `${site.url}/#organization` },
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
  imageUrl?: string;
  about?: string[];
}

const sectionToAbout: Record<string, string[]> = {
  Wissenschaft: [
    "NAD⁺-Metabolismus",
    "Longevity-Wissenschaft",
    "Nahrungsergänzungsmittel",
    "Anti-Aging",
  ],
  Regulatorik: [
    "Swissmedic",
    "EFSA Health Claims",
    "Regulatorik Nahrungsergänzungsmittel",
    "Schweizer Heilmittelrecht",
  ],
  Branche: [
    "Longevity-Markt",
    "Supplement-Industrie",
    "Private Label Supplements",
    "CDMO",
  ],
};

export function buildArticleJsonLd(opts: ArticleOptions): JsonLd {
  const about = opts.about ?? sectionToAbout[opts.section] ?? ["Longevity", "Nahrungsergänzungsmittel"];
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.excerpt,
    image: opts.imageUrl ?? `${site.url}/opengraph-image`,
    about: about.map((t) => ({ "@type": "Thing", name: t })),
    author: {
      "@type": "Person",
      name: opts.authorName,
      jobTitle: opts.authorRole,
      worksFor: {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
      },
    },
    publisher: {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
    },
    datePublished: opts.date,
    dateModified: opts.date,
    articleSection: opts.section,
    mainEntityOfPage: `${site.url}/wissen/insights/${opts.slug}`,
    isPartOf: { "@id": `${site.url}/#website` },
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
