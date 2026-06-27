import { describe, it, expect } from "vitest";
import { leistungen, produkte, nav, site } from "@/lib/site";

describe("site config", () => {
  it("defines the brand identity", () => {
    expect(site.name).toMatch(/Swiss Longevity Labs/);
    expect(site.domain).toBe("swisslongevitylabs.com");
    expect(site.url).toMatch(/^https:\/\//);
  });

  it("exposes a primary nav", () => {
    expect(nav.length).toBeGreaterThan(3);
    nav.forEach((item) => {
      expect(item.href.startsWith("/")).toBe(true);
      expect(item.label.length).toBeGreaterThan(0);
    });
  });
});

describe("leistungen", () => {
  it("has exactly six service pillars", () => {
    expect(leistungen).toHaveLength(6);
  });

  it("each pillar has unique slug, number, title and short text", () => {
    const slugs = new Set<string>();
    const numbers = new Set<string>();
    leistungen.forEach((l) => {
      expect(slugs.has(l.slug)).toBe(false);
      expect(numbers.has(l.number)).toBe(false);
      slugs.add(l.slug);
      numbers.add(l.number);
      expect(l.title).toBeTruthy();
      expect(l.tagline).toBeTruthy();
      expect(l.short.length).toBeGreaterThan(20);
    });
  });
});

describe("produkte", () => {
  it("has exactly six products", () => {
    expect(produkte).toHaveLength(6);
  });

  it("each product has a non-empty ingredient list", () => {
    produkte.forEach((p) => {
      expect(p.ingredients.length).toBeGreaterThanOrEqual(5);
      p.ingredients.forEach((ing) => {
        expect(ing.name).toBeTruthy();
        expect(ing.dose).toBeTruthy();
        expect(ing.function).toBeTruthy();
      });
    });
  });

  it("each product has a slug, price band and target group", () => {
    produkte.forEach((p) => {
      expect(p.slug).toMatch(/^[a-z0-9-]+$/);
      expect(p.pricePerMonth).toMatch(/CHF/);
      expect(p.targetGroup).toBeTruthy();
    });
  });
});
