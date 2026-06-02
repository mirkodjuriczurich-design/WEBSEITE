import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { leistungen } from "@/lib/site";
import { Button } from "@/ui/Button";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Sechs Full-Solution-Säulen für Longevity: Private Label, White Label, Full Service & R&D, Produktentwicklung, Regulatorik und Distribution. Einzeln buchbar oder integriert.",
  alternates: { canonical: "/leistungen" },
};

export default function LeistungenHubPage() {
  return (
    <>
      <section className="section-py border-b border-[var(--color-stone-200)] bg-[var(--color-off-white)]">
        <div className="container-editorial">
          <div className="max-w-[60ch]">
            <span className="eyebrow">Leistungen</span>
            <h1 className="mt-8 text-[clamp(2.5rem,5.5vw,4rem)] leading-[1.05] tracking-[-0.015em]">
              Die ganze Wertschöpfungskette – oder genau die Stufe, die Sie brauchen.
            </h1>
            <p className="mt-8 text-[18px] leading-[1.6] text-[var(--color-stone-700)]">
              Sechs Leistungen, einzeln buchbar, integriert orchestriert. Was wir für unsere
              Eigenmarke tun, tun wir auch für Sie – wenn Sie das möchten, vom ersten Konzept bis
              zur globalen Markteinführung.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/kontakt?type=partnership" variant="primary" arrow>
                Partnerschaft anfragen
              </Button>
              <Button href="/kontakt?type=consultation" variant="ghost" arrow>
                Ich wünsche eine Beratung
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-py border-b border-[var(--color-stone-200)] bg-[var(--color-paper)]">
        <div className="container-editorial">
          <div className="grid gap-px overflow-hidden border border-[var(--color-stone-200)] sm:grid-cols-2 lg:grid-cols-3">
            {leistungen.map((l) => (
              <Link
                key={l.slug}
                href={`/leistungen/${l.slug}`}
                className="group relative flex flex-col gap-6 bg-[var(--color-paper)] p-8 lg:p-10 transition-colors duration-300 hover:bg-[var(--color-off-white)]"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-[var(--font-mono)] text-[12px] tracking-[0.1em] text-[var(--color-swiss-red)]">
                    {l.number}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--color-stone-400)]">
                    Leistung
                  </span>
                </div>

                <div>
                  <h2 className="text-[26px] leading-[1.2] tracking-[-0.005em]">{l.title}</h2>
                  <p className="mt-2 font-[var(--font-display)] italic text-[17px] leading-[1.4] text-[var(--color-stone-700)]">
                    {l.tagline}
                  </p>
                </div>

                <p className="text-[14.5px] leading-[1.6] text-[var(--color-stone-700)]">
                  {l.short}
                </p>

                <div className="mt-auto flex items-center gap-2 text-[13px] font-medium text-[var(--color-ink)] group-hover:text-[var(--color-swiss-red)] transition-colors duration-300">
                  Im Detail ansehen
                  <ArrowRight
                    size={14}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>

                <div
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-[3px] bg-[var(--color-swiss-red)] origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
