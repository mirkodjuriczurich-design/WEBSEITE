/**
 * Plausible Analytics wrapper.
 *
 * Privacy-first, cookieless, GDPR-compliant. Activated once
 * NEXT_PUBLIC_PLAUSIBLE_DOMAIN is set in the Vercel environment.
 */
import { env } from "@/lib/env";

export function isAnalyticsEnabled(): boolean {
  return Boolean(env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN);
}

export function getPlausibleScriptProps(): { src: string; "data-domain": string } | null {
  if (!env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN) return null;
  return {
    src: "https://plausible.io/js/script.js",
    "data-domain": env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN,
  };
}

/**
 * Fire a custom Plausible event from the client. No-op if analytics not
 * enabled. Safe to call without checking — never throws.
 */
export function trackEvent(name: string, props?: Record<string, string | number>) {
  if (typeof window === "undefined") return;
  const plausible = (window as unknown as { plausible?: (name: string, opts?: object) => void })
    .plausible;
  if (!plausible) return;
  try {
    plausible(name, props ? { props } : undefined);
  } catch {
    /* swallow */
  }
}
