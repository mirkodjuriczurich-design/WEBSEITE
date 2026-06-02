import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Unternehmen",
  description: "Story, Team und Karriere bei Swiss Longevity Labs AG.",
  alternates: { canonical: "/unternehmen" },
};

const sections = [
  {
    slug: "story",
    number: "01",
    title: "Story",
    description:
      "Wie wir gestartet sind, was uns antreibt und wie wir die nächsten Jahre denken.",
  },
  {
    slug: "team",
    number: "02",
    title: "Team",
    description:
      "Die Personen hinter dem Unternehmen – Wissenschaft, Produktion, Regulatorik, Strategie.",
  },
  {
    slug: "karriere",
    number: "03",
    title: "Karriere",
    description:
      "Offene Positionen und initiative Bewerbungen. Wir suchen kontinuierlich Talente.",
  },
];

export default function UnternehmenHubPage() {
  return (
    <>
      <section className="border-b border-[var(--color-stone-200)] bg-[var(--color-off-white)]">
        <div className="container-editorial py-20 lg:py-28">
          <div className="max-w-[60ch]">
            <span className="eyebrow">Unternehmen</span>
            <h1 className="mt-8 text-[clamp(2.5rem,5.5vw,4rem)] leading-[1.05] tracking-[-0.015em]">
              Wer wir sind, woran wir glauben.
            </h1>
            <p className="mt-8 text-[19px] leading-[1.55] text-[var(--color-stone-700)]">
              Hinter jeder Rezeptur, jedem Audit-Bericht und jeder Submission stehen Menschen mit
              Verantwortung. Hier finden Sie unsere Story, das Team und offene Stellen.
            </p>
          </div>
        </div>
      </section>

      <section className="section-py border-b border-[var(--color-stone-200)] bg-[var(--color-paper)]">
        <div className="container-editorial">
          <div className="grid gap-px border border-[var(--color-stone-200)] md:grid-cols-3">
            {sections.map((s) => (
              <Link
                key={s.slug}
                href={`/unternehmen/${s.slug}`}
                className="group flex flex-col gap-5 bg-[var(--color-paper)] p-8 lg:p-10 transition-colors hover:bg-[var(--color-off-white)]"
              >
                <span className="font-[var(--font-mono)] text-[12px] tracking-[0.1em] text-[var(--color-swiss-red)]">
                  {s.number}
                </span>
                <h2 className="text-[24px] leading-[1.2] tracking-[-0.005em]">{s.title}</h2>
                <p className="text-[14.5px] leading-[1.6] text-[var(--color-stone-700)]">
                  {s.description}
                </p>
                <div className="mt-auto inline-flex items-center gap-2 text-[13px] font-medium text-[var(--color-ink)] group-hover:text-[var(--color-swiss-red)]">
                  Bereich öffnen
                  <ArrowRight
                    size={14}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
