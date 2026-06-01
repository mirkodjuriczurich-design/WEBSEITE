import { describe, it, expect } from "vitest";
import {
  buildOrganizationJsonLd,
  buildFaqJsonLd,
  buildArticleJsonLd,
  buildProductJsonLd,
} from "@/lib/seo";

describe("seo JSON-LD builders", () => {
  it("builds Organization+Manufacturer with required fields", () => {
    const org = buildOrganizationJsonLd() as Record<string, unknown>;
    expect(org["@context"]).toBe("https://schema.org");
    expect(org["@type"]).toEqual(["Organization", "Manufacturer"]);
    expect(org.name).toMatch(/Swiss Longevity Labs/);
    expect(org.url).toMatch(/^https:\/\//);
    expect(Array.isArray(org.award)).toBe(true);
  });

  it("builds FAQPage with each Q&A mapped", () => {
    const faq = buildFaqJsonLd([
      { q: "What?", a: "A test answer." },
      { q: "How?", a: "Another answer." },
    ]) as Record<string, unknown>;
    expect(faq["@type"]).toBe("FAQPage");
    const entities = faq.mainEntity as Array<{ acceptedAnswer: { text: string } }>;
    expect(entities).toHaveLength(2);
    expect(entities[0].acceptedAnswer.text).toBe("A test answer.");
  });

  it("builds Article with author Person nested", () => {
    const a = buildArticleJsonLd({
      title: "T",
      excerpt: "X",
      slug: "s",
      authorName: "Dr. A",
      authorRole: "Head",
      date: "2026-05-01",
      section: "Test",
    }) as Record<string, unknown>;
    expect(a["@type"]).toBe("Article");
    expect((a.author as { "@type": string })["@type"]).toBe("Person");
    expect(a.mainEntityOfPage).toContain("/wissen/insights/s");
  });

  it("builds Product+DietarySupplement with ingredients concatenated", () => {
    const p = buildProductJsonLd({
      name: "Test",
      description: "T",
      category: "Cat",
      targetGroup: "35-65",
      ingredients: [
        { name: "NMN", dose: "500 mg" },
        { name: "Glycin", dose: "3000 mg" },
      ],
    }) as Record<string, unknown>;
    expect(p["@type"]).toEqual(["Product", "DietarySupplement"]);
    expect(p.activeIngredient).toBe("NMN 500 mg, Glycin 3000 mg");
  });
});
