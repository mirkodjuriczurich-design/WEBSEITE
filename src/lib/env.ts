import { z } from "zod";

/**
 * Typed environment variables.
 *
 * Validates at module-load time so a misconfigured deploy fails fast,
 * not when the first request tries to use the variable.
 *
 * Server-only and public variables are split because Next.js only exposes
 * NEXT_PUBLIC_ prefixed values to the browser bundle.
 */

const serverSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  RESEND_API_KEY: z.string().optional(),
  CONTACT_TO_EMAIL: z.string().email().default("hello@swisslongevitylab.com"),
  CONTACT_FROM_EMAIL: z.string().email().default("form@swisslongevitylab.com"),
});

const publicSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default("https://swisslongevitylab.com"),
  NEXT_PUBLIC_PLAUSIBLE_DOMAIN: z.string().optional(),
  NEXT_PUBLIC_GOOGLE_VERIFICATION: z.string().optional(),
  NEXT_PUBLIC_BING_VERIFICATION: z.string().optional(),
});

const serverEnv = serverSchema.safeParse({
  NODE_ENV: process.env.NODE_ENV,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL,
  CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL,
});

const publicEnv = publicSchema.safeParse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_PLAUSIBLE_DOMAIN: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN,
  NEXT_PUBLIC_GOOGLE_VERIFICATION: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  NEXT_PUBLIC_BING_VERIFICATION: process.env.NEXT_PUBLIC_BING_VERIFICATION,
});

if (!serverEnv.success) {
  console.error("❌ Invalid server environment variables:", serverEnv.error.flatten().fieldErrors);
  throw new Error("Invalid server environment configuration");
}

if (!publicEnv.success) {
  console.error("❌ Invalid public environment variables:", publicEnv.error.flatten().fieldErrors);
  throw new Error("Invalid public environment configuration");
}

export const env = {
  ...serverEnv.data,
  ...publicEnv.data,
} as const;

export type Env = typeof env;
