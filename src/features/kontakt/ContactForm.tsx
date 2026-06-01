"use client";

import { useState } from "react";
import { Button } from "@/ui/Button";
import { leistungen } from "@/lib/site";

const intents = [
  { value: "enquiry", label: "Allgemeine Anfrage stellen" },
  { value: "partnership", label: "Partnerschaft anbahnen" },
  { value: "consultation", label: "Beratungstermin vereinbaren" },
  { value: "product", label: "Produkt-Anfrage / Warteliste" },
  { value: "other", label: "Etwas anderes" },
];

interface Props {
  initialType?: string;
  initialService?: string;
  initialProduct?: string;
}

export function ContactForm({ initialType, initialService, initialProduct }: Props) {
  const [intent, setIntent] = useState(initialType ?? "enquiry");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage(null);

    const form = new FormData(e.currentTarget);
    const payload = {
      intent,
      firstName: String(form.get("firstName") ?? "").trim(),
      lastName: String(form.get("lastName") ?? "").trim(),
      email: String(form.get("email") ?? "").trim(),
      phone: String(form.get("phone") ?? "").trim() || undefined,
      company: String(form.get("company") ?? "").trim() || undefined,
      service: String(form.get("service") ?? "").trim() || undefined,
      product: initialProduct,
      message: String(form.get("message") ?? "").trim(),
      consent: form.get("consent") === "on",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setErrorMessage(data.error ?? "Wir konnten Ihre Anfrage nicht zustellen.");
        setStatus("error");
        return;
      }
      setStatus("done");
    } catch {
      setErrorMessage("Verbindung zum Server fehlgeschlagen.");
      setStatus("error");
    }
  }

  const submitted = status === "done";

  if (submitted) {
    return (
      <div className="max-w-[60ch] py-12">
        <span className="eyebrow" style={{ "--marker": "var(--color-success)" } as React.CSSProperties}>
          Anfrage gesendet
        </span>
        <h2 className="mt-6 text-[clamp(1.875rem,3vw,2.5rem)] leading-[1.15]">
          Vielen Dank — wir melden uns innerhalb von zwei Werktagen.
        </h2>
        <p className="mt-6 text-[17px] leading-[1.65] text-[var(--color-stone-700)]">
          Sie erhalten parallel eine Bestätigung per E-Mail. Falls Ihre Anfrage zeitkritisch ist,
          schreiben Sie uns gerne direkt an{" "}
          <a
            href="mailto:hello@swisslongevitylab.com"
            className="text-[var(--color-swiss-red)] underline decoration-1 underline-offset-4"
          >
            hello@swisslongevitylab.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-16 lg:grid-cols-12 lg:gap-20">
      <div className="lg:col-span-4">
        <span className="eyebrow">Formular</span>
        <h2 className="mt-6 text-[clamp(1.875rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.01em]">
          Was kann ich für Sie tun?
        </h2>
        <p className="mt-6 text-[15.5px] leading-[1.6] text-[var(--color-stone-700)]">
          Je präziser Sie uns informieren, desto fundierter ist unsere erste Rückmeldung. Pflichtfelder
          sind mit * markiert.
        </p>
      </div>

      <div className="lg:col-span-8 space-y-10">
        {/* Intent */}
        <fieldset>
          <legend className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--color-stone-400)] mb-4">
            Anliegen *
          </legend>
          <div className="grid gap-2 sm:grid-cols-2">
            {intents.map((i) => (
              <label
                key={i.value}
                className={`flex cursor-pointer items-center gap-3 border px-4 py-3 text-[14.5px] transition-colors ${
                  intent === i.value
                    ? "border-[var(--color-swiss-red)] bg-[var(--color-off-white)]"
                    : "border-[var(--color-stone-200)] hover:border-[var(--color-stone-400)]"
                }`}
              >
                <input
                  type="radio"
                  name="intent"
                  value={i.value}
                  checked={intent === i.value}
                  onChange={() => setIntent(i.value)}
                  className="sr-only"
                />
                <span
                  aria-hidden
                  className={`inline-block h-2 w-2 ${
                    intent === i.value ? "bg-[var(--color-swiss-red)]" : "bg-[var(--color-stone-200)]"
                  }`}
                />
                {i.label}
              </label>
            ))}
          </div>
        </fieldset>

        {/* Name */}
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--color-stone-400)]"
            >
              Vorname *
            </label>
            <input id="firstName" name="firstName" required className="input-editorial mt-2" />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--color-stone-400)]"
            >
              Nachname *
            </label>
            <input id="lastName" name="lastName" required className="input-editorial mt-2" />
          </div>
        </div>

        {/* Email + Phone */}
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <label
              htmlFor="email"
              className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--color-stone-400)]"
            >
              E-Mail *
            </label>
            <input id="email" name="email" type="email" required className="input-editorial mt-2" />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--color-stone-400)]"
            >
              Telefon
            </label>
            <input id="phone" name="phone" type="tel" className="input-editorial mt-2" />
          </div>
        </div>

        {/* Conditional: Partnership / Service */}
        {(intent === "partnership" || intent === "enquiry") && (
          <>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="company"
                  className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--color-stone-400)]"
                >
                  Firma {intent === "partnership" && "*"}
                </label>
                <input
                  id="company"
                  name="company"
                  required={intent === "partnership"}
                  className="input-editorial mt-2"
                />
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--color-stone-400)]"
                >
                  Leistung von Interesse
                </label>
                <select
                  id="service"
                  name="service"
                  defaultValue={initialService ?? ""}
                  className="input-editorial mt-2 appearance-none"
                >
                  <option value="">Bitte wählen</option>
                  {leistungen.map((l) => (
                    <option key={l.slug} value={l.slug}>
                      {l.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </>
        )}

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--color-stone-400)]"
          >
            Ihre Nachricht *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="input-editorial mt-2 resize-none"
          />
        </div>

        {/* Consent */}
        <label className="flex items-start gap-3 text-[13.5px] leading-[1.55] text-[var(--color-stone-700)]">
          <input type="checkbox" name="consent" required className="mt-1" />
          <span>
            Ich habe die{" "}
            <a href="/datenschutz" className="underline decoration-1 underline-offset-4">
              Datenschutzerklärung
            </a>{" "}
            gelesen und stimme der Verarbeitung meiner Anfrage zu. *
          </span>
        </label>

        <div className="pt-4 flex flex-col gap-3">
          <Button type="submit" variant="primary" arrow>
            {status === "sending" ? "Wird gesendet…" : "Anfrage senden"}
          </Button>
          {status === "error" && errorMessage && (
            <p
              role="alert"
              className="text-[13.5px] text-[var(--color-error)]"
            >
              {errorMessage} Sie können uns alternativ direkt an{" "}
              <a href="mailto:hello@swisslongevitylab.com" className="underline underline-offset-4">
                hello@swisslongevitylab.com
              </a>{" "}
              schreiben.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
