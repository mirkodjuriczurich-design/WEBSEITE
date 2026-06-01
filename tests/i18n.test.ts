import { describe, it, expect } from "vitest";
import { locales, localeMeta, defaultLocale, isActiveLocale } from "@/i18n/config";
import { translations, getTranslation, t } from "@/i18n/translations";

describe("i18n config", () => {
  it("declares de and en", () => {
    expect(locales).toContain("de");
    expect(locales).toContain("en");
  });

  it("defaults to de", () => {
    expect(defaultLocale).toBe("de");
  });

  it("marks only de as active for now", () => {
    expect(localeMeta.de.active).toBe(true);
    expect(localeMeta.en.active).toBe(false);
  });

  it("isActiveLocale returns true only for active locales", () => {
    expect(isActiveLocale("de")).toBe(true);
    expect(isActiveLocale("en")).toBe(false);
    expect(isActiveLocale("fr")).toBe(false);
  });
});

describe("translations", () => {
  it("provides parallel keys for de and en", () => {
    const deKeys = Object.keys(translations.de.common);
    const enKeys = Object.keys(translations.en.common);
    expect(deKeys.sort()).toEqual(enKeys.sort());
  });

  it("nav block has matching keys", () => {
    const deNav = Object.keys(translations.de.common.nav).sort();
    const enNav = Object.keys(translations.en.common.nav).sort();
    expect(deNav).toEqual(enNav);
  });

  it("default t exposes de strings", () => {
    expect(t.common.nav.kontakt).toBe("Kontakt");
  });

  it("getTranslation returns the requested locale", () => {
    expect(getTranslation("en").common.nav.kontakt).toBe("Contact");
  });
});
