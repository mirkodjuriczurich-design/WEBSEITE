/**
 * i18n configuration.
 *
 * Phase D foundation. EN is declared but not yet active – only DE
 * resolves to a real locale prefix. Activation happens by:
 *   1. Translating the JSON files under src/i18n/en/.
 *   2. Flipping `active: true` on the EN entry below.
 *   3. Adding the next-intl middleware to middleware.ts and updating
 *      next.config.ts.
 *
 * Until then components keep their inline German strings, but the
 * folder structure and JSON shape are already in place so the
 * migration is a mechanical refactor rather than a redesign.
 */

export const defaultLocale = "de" as const;

export const locales = ["de", "en"] as const;

export type Locale = (typeof locales)[number];

export const localeMeta: Record<Locale, { name: string; bcp47: string; active: boolean }> = {
  de: { name: "Deutsch", bcp47: "de-CH", active: true },
  en: { name: "English", bcp47: "en", active: false },
};

export function isActiveLocale(locale: string): locale is Locale {
  return (locales as readonly string[]).includes(locale) && localeMeta[locale as Locale].active;
}
