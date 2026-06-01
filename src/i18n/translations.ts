/**
 * Build-time translation loader.
 *
 * Reads the JSON locale files and exposes them as typed records. Until
 * next-intl middleware is wired up, components import `t` (the default
 * locale’s translations) directly. After activation, this module will
 * delegate to next-intl’s `useTranslations` hook.
 */
import deCommon from "./de/common.json";
import enCommon from "./en/common.json";
import { defaultLocale, type Locale } from "./config";

export const translations = {
  de: { common: deCommon },
  en: { common: enCommon },
} as const;

export type TranslationKey = typeof translations;

export function getTranslation<L extends Locale>(locale: L): (typeof translations)[L] {
  return translations[locale];
}

/**
 * Convenience for the current default locale. Phase D upgrade swaps this
 * for next-intl’s hook so locale comes from the request.
 */
export const t = translations[defaultLocale];
