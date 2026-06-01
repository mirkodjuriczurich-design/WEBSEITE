import type { Metadata } from "next";
import { Button } from "@/ui/Button";

export const metadata: Metadata = {
  title: "Forschung",
  description:
    "Eigene Studien, Methoden-Reviews und wissenschaftliche Synthesen aus der SLL-Forschungs-Abteilung.",
  alternates: { canonical: "/wissen/forschung" },
};

const themes = [
  {
    title: "NAD⁺-Pharmakokinetik",
    body:
      "Vergleichende klinische Auswertungen verschiedener NAD⁺-Vorstufen, mit Fokus auf Bioverfügbarkeit und Wirkungs-Dauer.",
  },
  {
    title: "Senolytika in Kombinations-Formulierungen",
    body:
      "Untersuchung synergetischer Wirkungen pflanzlicher Senolytika in standardisierter Galenik.",
  },
  {
    title: "Spermidin aus Schweizer Weizen",
    body:
      "Stabilitäts- und Reinheits-Studien zu nativ extrahiertem Spermidin im Vergleich zu synthetischen Varianten.",
  },
  {
    title: "Galenik für sensitive Wirkstoffe",
    body:
      "Methodisches Paper zu magensaftresistenter Verkapselung und Bioverfügbarkeits-Optimierung.",
  },
];

export default function ForschungPage() {
  return (
    <>
      <section className="border-b border-[var(--color-stone-200)] bg-[var(--color-off-white)]">
        <div className="container-editorial py-20 lg:py-28">
          <div className="max-w-[64ch]">
            <span className="eyebrow">Wissen · 01 · Forschung</span>
            <h1 className="mt-8 text-[clamp(2.5rem,5.5vw,4rem)] leading-[1.05] tracking-[-0.015em]">
              Eigene Forschung. Veröffentlicht.
            </h1>
            <p className="mt-8 text-[19px] leading-[1.55] text-[var(--color-stone-700)]">
              Wir betreiben in unserer Abteilung anwendungsorientierte Forschung an
              Longevity-Wirkstoffen und ihren Formulierungen. Die wichtigsten Erkenntnisse
              veröffentlichen wir laufend als Methoden-Reviews und Studien-Synthesen.
            </p>
          </div>
        </div>
      </section>

      <section className="section-py border-b border-[var(--color-stone-200)] bg-[var(--color-paper)]">
        <div className="container-editorial">
          <div className="max-w-[60ch]">
            <span className="eyebrow">Aktuelle Forschungs-Themen</span>
            <h2 className="mt-6 text-[clamp(1.875rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.01em]">
              Vier Schwerpunkte, an denen wir aktiv arbeiten.
            </h2>
          </div>

          <div className="mt-12 grid gap-px border border-[var(--color-stone-200)] md:grid-cols-2">
            {themes.map((t, i) => (
              <article key={t.title} className="flex flex-col gap-4 bg-[var(--color-paper)] p-8">
                <span className="font-[var(--font-mono)] text-[12px] tracking-[0.1em] text-[var(--color-swiss-red)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[22px] leading-[1.25]">{t.title}</h3>
                <p className="text-[15px] leading-[1.6] text-[var(--color-stone-700)]">{t.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-[var(--color-off-white)]">
        <div className="container-editorial">
          <div className="max-w-[60ch]">
            <span className="eyebrow">Publikationen</span>
            <h2 className="mt-6 text-[clamp(1.875rem,3vw,2.5rem)] leading-[1.15]">
              Studien- und Methoden-Papers folgen in Phase 2.
            </h2>
            <p className="mt-6 text-[16.5px] leading-[1.65] text-[var(--color-stone-700)]">
              Aktuelle Editorial-Artikel zur Forschung finden Sie in unseren Insights. Für Anfragen
              zu spezifischen Themen oder akademische Kooperationen melden Sie sich direkt.
            </p>
            <div className="mt-8">
              <Button href="/wissen/insights" variant="primary" arrow>
                Zu den Insights
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
