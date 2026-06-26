import type { Metadata } from "next";
import { Button } from "@/ui/Button";

export const metadata: Metadata = {
  title: "Story",
  description:
    "Wie Swiss Longevity Labs entstanden ist, was uns antreibt und wie wir die nächsten Jahre denken.",
  alternates: { canonical: "/unternehmen/story" },
};

const milestones = [
  {
    year: "Gründung",
    title: "Eine Schweizer Idee",
    body:
      "Swiss Longevity Labs entsteht aus der Beobachtung, dass im wachsenden Longevity-Markt Schweizer Qualitätsstandards systematisch unterrepräsentiert sind – und dass dies ein strategisches Vakuum darstellt.",
  },
  {
    year: "Aufbau",
    title: "Labor, Linie, Team",
    body:
      "Aufbau der analytischen Infrastruktur, Inbetriebnahme der ersten GMP-Produktionslinien, Einstellung der wissenschaftlichen Kernmannschaft. Erste Pilot-Projekte mit Schweizer Brands.",
  },
  {
    year: "Marktvalidierung",
    title: "Erste Marktzulassungen",
    body:
      "Erfolgreiche Notifizierungen. Erste Kundenanforderungen erfolgreich umgesetzt. Lancierung der ersten drei Produkte. Weitere innovative Produkte befinden sich in der Entwicklungs- und Markteinführungspipeline.",
  },
  {
    year: "Heute",
    title: "Full-Service-Partner",
    body:
      "Swiss Longevity Labs deckt heute die gesamte Wertschöpfungskette ab – von der wissenschaftlichen Konzeption über die GMP-Produktion bis zur globalen Distribution. Mit sechs eigenen Markenprodukten und einer wachsenden Zahl B2B-Partnerschaften.",
  },
];

export default function StoryPage() {
  return (
    <>
      <section className="border-b border-[var(--color-stone-200)] bg-[var(--color-off-white)]">
        <div className="container-editorial py-20 lg:py-28">
          <div className="max-w-[64ch]">
            <span className="eyebrow">Unternehmen · 01 · Story</span>
            <h1 className="mt-8 text-[clamp(2.5rem,5.5vw,4rem)] leading-[1.05] tracking-[-0.015em]">
              Schweizer Substanz für eine globale Frage.
            </h1>
            <p className="mt-8 text-[19px] leading-[1.55] text-[var(--color-stone-700)]">
              Longevity ist global. Schweizer Qualitätsmassstäbe sind es nicht – sie sind eine
              kulturelle und industrielle Eigenheit, die in dieser Welt eine eigene Rolle spielen
              kann. Genau hier setzen wir an.
            </p>
          </div>
        </div>
      </section>

      <section className="section-py border-b border-[var(--color-stone-200)] bg-[var(--color-paper)]">
        <div className="container-editorial">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <span className="eyebrow">Unsere Haltung</span>
            </div>
            <div className="lg:col-span-8 space-y-7 text-[17px] leading-[1.7] text-[var(--color-stone-700)]">
              <p>
                Wer ein Longevity-Produkt herstellt, übernimmt eine Verantwortung, die über die
                klassische Lebensmittelproduktion deutlich hinausgeht. Menschen nehmen unsere
                Produkte über Jahre, vertrauen auf Wirksamkeit und Sicherheit, und gehen damit
                stillschweigend ein Risiko ein, das die meisten Anbieter weder bezeichnen noch
                tragen.
              </p>
              <p>
                Unsere Antwort darauf ist ein nüchterner, fast altmodischer Anspruch: Wir
                produzieren so, wie ein Schweizer Pharmaunternehmen ein Medikament produziert.
                Dokumentiert, validiert, rückverfolgbar. Auch dort, wo die Regulatorik weniger
                verlangen würde.
              </p>
              <p>
                Das macht uns langsamer und teurer als viele Mitbewerber. Es ist aber das, was
                Kund:innen und Partner zu uns bringt – und was uns selbst nachts ruhig schlafen
                lässt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section-py border-b border-[var(--color-stone-200)]"
        style={{ background: "var(--color-stone-100)" }}
      >
        <div className="container-editorial">
          <div className="max-w-[60ch]">
            <span className="eyebrow">Meilensteine</span>
            <h2 className="mt-6 text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.15]">
              Vier Stationen auf dem Weg hierher.
            </h2>
          </div>

          <ol className="mt-16 grid gap-px border border-[var(--color-stone-200)] sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m) => (
              <li key={m.year} className="flex flex-col gap-5 bg-[var(--color-paper)] p-8">
                <span className="font-[var(--font-mono)] text-[12px] tracking-[0.15em] text-[var(--color-swiss-red)]">
                  {m.year}
                </span>
                <h3 className="text-[20px] leading-[1.25]">{m.title}</h3>
                <p className="text-[14px] leading-[1.65] text-[var(--color-stone-700)]">{m.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="section-py text-[var(--color-paper)]"
        style={{ background: "var(--color-navy)" }}
      >
        <div className="container-editorial">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <span className="eyebrow" style={{ color: "#B8C2D6" }}>
                Persönlich
              </span>
              <h2
                className="mt-6 max-w-[22ch] text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] tracking-[-0.015em]"
                style={{ color: "var(--color-paper)" }}
              >
                Klingt das, wie Sie auch denken? Sprechen wir.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <Button href="/kontakt?type=consultation" variant="primary" arrow>
                Gespräch vereinbaren
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
