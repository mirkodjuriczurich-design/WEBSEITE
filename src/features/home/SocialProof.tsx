const press = [
  {
    tag: "Forbes Pharma",
    headline: "Swiss Made trifft Longevity-Tech.",
    sub: "Wie ein Schweizer Hersteller die ganze Wertschöpfungskette unter einem Dach orchestriert.",
  },
  {
    tag: "Handelszeitung",
    headline: "Diskreter Wachstumsmarkt aus Zentralschweiz.",
    sub: "Vom Pilot-Batch zur globalen Skalierung – ohne Auslagerung.",
  },
  {
    tag: "Pharma Manufacturing",
    headline: "Editorial-Pharma als Markenstrategie.",
    sub: "Warum sich Brands für einen Schweizer Full-Service-Partner entscheiden.",
  },
];

import { PortraitAvatar } from "@/ui/PortraitAvatar";

const testimonials = [
  {
    name: "Anna Berger",
    role: "EU Mid-Cap · Premium-Linie",
    quote:
      "Wir hatten zwei Hersteller. Mit SLL haben wir einen – und sind schneller im Markt als je zuvor.",
  },
  {
    name: "Jonas Keller",
    role: "Longevity-Startup · DACH",
    quote:
      "Die wissenschaftliche Tiefe ist eine andere Liga. Wir konnten Health-Claims belegen, die wir vorher nicht einmal verhandeln durften.",
  },
  {
    name: "Dr. Lena Frei",
    role: "Premium-Klinik · Schweiz",
    quote:
      "Endlich ein Partner, der unsere Compliance-Anforderungen versteht, ohne dass wir sie erklären müssen.",
  },
  {
    name: "Marc Hofmann",
    role: "Family Office · Health-Portfolio",
    quote:
      "Schweizer Substanz statt Marketing-Geräusch. So baut man eine Brand, die zehn Jahre hält.",
  },
];

const certifications = [
  "Swissmedic",
  "GMP",
  "ISO 22000",
  "ISO 13485",
  "HACCP",
  "GDP",
];

export function SocialProof() {
  return (
    <section
      className="section-py border-b border-[var(--color-stone-200)]"
      style={{ background: "var(--color-paper)" }}
    >
      <div className="container-editorial">
        <div className="max-w-[64ch]">
          <span className="eyebrow">Vertrauen, das Substanz hat</span>
          <h2 className="mt-6 text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.01em]">
            Der neue Standard für Schweizer Longevity-Produktion.
          </h2>
          <p className="mt-6 text-[18px] leading-[1.6] text-[var(--color-stone-700)]">
            Wir reden weniger über uns, als unsere Partner über uns reden. Hier eine Auswahl
            redaktioneller Erwähnungen und Stimmen aus der Zusammenarbeit.
          </p>
        </div>

        {/* Press cards – editorial dark style à la Function Health */}
        <div className="mt-16 grid gap-px overflow-hidden border border-[var(--color-stone-200)] sm:grid-cols-3">
          {press.map((p) => (
            <article
              key={p.tag}
              className="flex flex-col gap-6 p-8 lg:p-10 text-[var(--color-paper)]"
              style={{ background: "var(--color-stone-900)" }}
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="inline-block h-1.5 w-1.5"
                  style={{ background: "var(--color-swiss-red)" }}
                />
                <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em]" style={{ color: "#B8C2D6" }}>
                  {p.tag}
                </span>
              </div>
              <h3 className="font-[var(--font-display)] text-[22px] leading-[1.25] tracking-[-0.005em]">
                {p.headline}
              </h3>
              <p className="text-[14px] leading-[1.6]" style={{ color: "#B8C2D6" }}>
                {p.sub}
              </p>
            </article>
          ))}
        </div>

        {/* Testimonials block */}
        <div className="mt-24 max-w-[60ch]">
          <span className="eyebrow">Echte Stimmen</span>
          <h3 className="mt-6 text-[clamp(1.75rem,2.75vw,2.25rem)] leading-[1.2] tracking-[-0.01em]">
            Was unsere Partner sagen.
          </h3>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-[var(--color-stone-200)] sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              className="flex flex-col gap-5 bg-[var(--color-paper)] p-7"
            >
              <PortraitAvatar name={t.name} variant={i} />
              <blockquote className="font-[var(--font-display)] italic text-[16px] leading-[1.45] text-[var(--color-ink)]">
                „{t.quote}“
              </blockquote>
              <div className="mt-auto border-t border-[var(--color-stone-200)] pt-4">
                <p className="text-[13px] font-medium text-[var(--color-ink)]">{t.name}</p>
                <p className="font-[var(--font-mono)] text-[10.5px] uppercase tracking-[0.1em] text-[var(--color-stone-400)] mt-1">
                  {t.role}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Certifications bar */}
        <div className="mt-20 flex flex-col gap-6 border-t border-[var(--color-stone-200)] pt-10 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-[var(--color-stone-400)]">
            Zertifiziert nach
          </span>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {certifications.map((c, i) => (
              <span key={c} className="flex items-center gap-8">
                <span className="font-[var(--font-mono)] text-[13px] text-[var(--color-stone-700)]">
                  {c}
                </span>
                {i < certifications.length - 1 && (
                  <span aria-hidden className="text-[var(--color-stone-200)]">
                    ·
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
