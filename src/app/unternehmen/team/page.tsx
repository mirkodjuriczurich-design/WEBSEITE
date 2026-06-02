import type { Metadata } from "next";
import { Button } from "@/ui/Button";

export const metadata: Metadata = {
  title: "Team",
  description: "Die Personen hinter Swiss Longevity Labs AG – Wissenschaft, Produktion, Strategie.",
  alternates: { canonical: "/unternehmen/team" },
};

const teamGroups = [
  {
    title: "Wissenschaft & Forschung",
    description:
      "Unsere Forschungs-Mannschaft kombiniert pharmazeutische, biochemische und galenische Expertise. Mehrere Personen mit Promotion und langjähriger Pharma-Erfahrung.",
  },
  {
    title: "Produktion & Qualität",
    description:
      "Erfahrene GMP-Produktions-Leitung mit pharmazeutischem Hintergrund. Qualitätssicherung mit eigener QA-Abteilung, unabhängig von der Produktions-Leitung.",
  },
  {
    title: "Regulatorik",
    description:
      "Dediziertes Regulatorik-Team mit Erfahrung in Swissmedic-, EFSA- und FDA-Submissions. Internationaler Backgrounds für die verschiedenen Zielmärkte.",
  },
  {
    title: "Strategie & Partnerships",
    description:
      "Geschäftsleitung mit Hintergrund in CDMO, Pharma und Health-Brands. Verantwortlich für strategische Kundenbeziehungen und das Wachstum des Hauses.",
  },
];

export default function TeamPage() {
  return (
    <>
      <section className="border-b border-[var(--color-stone-200)] bg-[var(--color-off-white)]">
        <div className="container-editorial py-20 lg:py-28">
          <div className="max-w-[64ch]">
            <span className="eyebrow">Unternehmen · 02 · Team</span>
            <h1 className="mt-8 text-[clamp(2.5rem,5.5vw,4rem)] leading-[1.05] tracking-[-0.015em]">
              Personen, die Verantwortung übernehmen.
            </h1>
            <p className="mt-8 text-[19px] leading-[1.55] text-[var(--color-stone-700)]">
              Swiss Longevity Labs ist die Summe der Menschen, die hier arbeiten. Wissenschaft,
              Produktion, Qualität, Regulatorik und Strategie – vier funktionale Bereiche, ein
              integriertes Team.
            </p>
            <p className="mt-6 inline-flex items-center gap-3 border-l-2 border-[var(--color-swiss-red)] pl-4 text-[14px] text-[var(--color-stone-400)]">
              <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em]">
                Personen-Portraits in Phase 3
              </span>
              <span>· echte Portraits und Bios folgen mit der Foto-Phase</span>
            </p>
          </div>
        </div>
      </section>

      <section className="section-py border-b border-[var(--color-stone-200)] bg-[var(--color-paper)]">
        <div className="container-editorial">
          <div className="grid gap-px border border-[var(--color-stone-200)] md:grid-cols-2">
            {teamGroups.map((g, i) => (
              <article
                key={g.title}
                className="flex flex-col gap-5 bg-[var(--color-paper)] p-8 lg:p-10"
              >
                <span className="font-[var(--font-mono)] text-[12px] tracking-[0.1em] text-[var(--color-swiss-red)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-[22px] leading-[1.25]">{g.title}</h2>
                <p className="text-[15px] leading-[1.65] text-[var(--color-stone-700)]">
                  {g.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-[var(--color-off-white)]">
        <div className="container-editorial">
          <div className="flex flex-col gap-6 max-w-[60ch]">
            <h2 className="text-[clamp(1.75rem,2.5vw,2.25rem)] leading-[1.2]">
              Sie wollen Teil des Teams werden?
            </h2>
            <p className="text-[16.5px] leading-[1.65] text-[var(--color-stone-700)]">
              Wir suchen kontinuierlich nach Menschen mit pharmazeutischer, biochemischer oder
              regulatorischer Expertise – und nach Personen, die strategisch und kommerziell denken.
            </p>
            <div>
              <Button href="/unternehmen/karriere" variant="primary" arrow>
                Zur Karriere-Seite
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
