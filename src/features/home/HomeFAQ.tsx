"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/ui/Button";

const faqs = [
  {
    q: "Was unterscheidet Swiss Longevity Labs von einem klassischen CDMO?",
    a: "Wir kombinieren wissenschaftliche Entwicklung, GMP-Produktion, Regulatorik und Distribution unter einem Schweizer Dach. Klassische CDMOs sind Lohnhersteller, klassische Marken sind reine Vermarkter – wir verbinden beides und bringen zusätzlich eine eigene Forschungs-Tiefe mit, die ein typischer Hersteller nicht bietet.",
  },
  {
    q: "Können wir bei euch nur eine einzelne Leistung buchen?",
    a: "Ja. Jede unserer sechs Leistungen – Private Label, White Label, Full Service & R&D, Produktentwicklung, Regulatorik und Distribution – ist einzeln buchbar. Viele Kunden starten mit einer Stufe und erweitern später. Volle Flexibilität, kein Komplett-Lock-in.",
  },
  {
    q: "Wie lange dauert ein typisches Projekt?",
    a: "White Label: 4–6 Wochen ab Bestellung. Private Label mit bestehender Rezeptur: 4–6 Monate. Full Service mit Custom-Entwicklung und globalem Launch: 14–22 Monate. Reine Produktentwicklung: 8–12 Monate. Genaue Zeitachsen klären wir im ersten Workshop.",
  },
  {
    q: "Wem gehört die Rezeptur am Ende?",
    a: "Bei Private-Label-Custom-Entwicklungen und reinen R&D-Aufträgen liegt das Eigentum vollständig beim Auftraggeber, vertraglich abgesichert. Bei White Label nutzen Sie unsere bestehenden Rezepturen. Wir können auch hybride Modelle abbilden – sprechen Sie uns an.",
  },
  {
    q: "Wie hoch ist die minimale Bestellmenge?",
    a: "White Label: ab 3’000 Einheiten. Private Label Pilot-Batches: ab 1’000 Einheiten. Serienproduktion: typisch 5’000–50’000 Einheiten pro Charge, abhängig von Darreichungsform und Verpackung. Skalierung bis 1 Million Einheiten ohne Standortwechsel.",
  },
  {
    q: "Was kostet eine Zusammenarbeit?",
    a: "Reine R&D-Aufträge starten bei CHF 35’000 für einfache Single-Compound-Rezepturen. Komplexe Multi-Wirkstoff-Formeln liegen zwischen CHF 80’000 und CHF 250’000. White-Label-Bestellungen rechnen sich pro Einheit nach Volumen. Full-Service-Mandate arbeiten typisch mit Phasen-Honoraren plus erfolgsabhängiger Komponente.",
  },
  {
    q: "In welchen Märkten könnt ihr regulatorisch unterstützen?",
    a: "Direkt: Schweiz, EU, UK und USA. Über kuratierte Partner: Japan, Singapur, Hongkong und ausgewählte ASEAN-Märkte. Für China, Korea und Naher Osten arbeiten wir mit spezialisierten Lokal-Partnern, die wir zentral steuern.",
  },
  {
    q: "Arbeitet ihr unter NDA?",
    a: "Standardmässig ja. Vor jeder inhaltlichen Diskussion über Rezepturen, Märkte oder Strategien schliessen wir eine beidseitige Vertraulichkeitsvereinbarung ab. Das ist Branchen-Standard und unsere Default-Praxis.",
  },
];

export function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="section-py border-b border-[var(--color-stone-200)] bg-[var(--color-off-white)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container-editorial">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <span className="eyebrow">Häufig gefragt</span>
            <h2 className="mt-6 text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.01em]">
              Acht Antworten, ohne Schnörkel.
            </h2>
            <p className="mt-6 text-[16.5px] leading-[1.65] text-[var(--color-stone-700)]">
              Die Fragen, die unsere Kunden uns am häufigsten stellen – gleich am Anfang
              beantwortet, damit Sie sich nicht durch Marketing-Text kämpfen müssen.
            </p>
            <div className="mt-8">
              <Button href="/kontakt?type=enquiry" variant="primary" arrow>
                Frage nicht dabei?
              </Button>
            </div>
          </div>

          <div className="lg:col-span-8">
            <ul className="border-t border-[var(--color-stone-200)]">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <li
                    key={i}
                    className="border-b border-[var(--color-stone-200)]"
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-start justify-between gap-6 py-6 text-left"
                      aria-expanded={isOpen}
                    >
                      <div className="flex gap-6">
                        <span className="font-[var(--font-mono)] text-[12px] tracking-[0.1em] text-[var(--color-swiss-red)] pt-1 min-w-[28px]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-[var(--font-display)] text-[20px] leading-[1.3] tracking-[-0.005em] text-[var(--color-ink)]">
                          {f.q}
                        </span>
                      </div>
                      <span
                        aria-hidden
                        className="mt-1 flex-shrink-0 text-[var(--color-stone-400)] group-hover:text-[var(--color-swiss-red)]"
                      >
                        {isOpen ? (
                          <Minus size={18} strokeWidth={1.5} />
                        ) : (
                          <Plus size={18} strokeWidth={1.5} />
                        )}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="grid grid-cols-[28px_1fr] gap-6 pb-6 pr-12 lg:pr-16">
                        <span />
                        <p className="text-[16px] leading-[1.65] text-[var(--color-stone-700)]">
                          {f.a}
                        </p>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
