import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { expertisePages } from "@/lib/expertise-content";
import { Button } from "@/ui/Button";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Capabilities, Prozess, Qualität und Standort – die Substanz hinter unseren Leistungen. Schweizer Pharma-Standard, dokumentiert und auditierbar.",
  alternates: { canonical: "/expertise" },
};

export default function ExpertiseHubPage() {
  return (
    <>
      <section className="border-b border-[var(--color-stone-200)] bg-[var(--color-off-white)]">
        <div className="container-editorial py-20 lg:py-28">
          <div className="max-w-[60ch]">
            <span className="eyebrow">Expertise</span>
            <h1 className="mt-8 text-[clamp(2.5rem,5.5vw,4rem)] leading-[1.05] tracking-[-0.015em]">
              Was uns zu einem Schweizer Hersteller macht.
            </h1>
            <p className="mt-8 text-[19px] leading-[1.55] text-[var(--color-stone-700)]">
              Vier Dimensionen, die uns als verlässlichen Full-Service-Partner ausweisen:
              technische Capabilities, ein klar definierter Prozess, dokumentierte
              Qualitätsstandards und ein konzentrierter Schweizer Standort.
            </p>
            <div className="mt-10">
              <Button href="/kontakt?type=consultation" variant="primary" arrow>
                Werks-Besuch vereinbaren
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-py border-b border-[var(--color-stone-200)] bg-[var(--color-paper)]">
        <div className="container-editorial">
          <div className="grid gap-px overflow-hidden border border-[var(--color-stone-200)] sm:grid-cols-2">
            {expertisePages.map((p) => (
              <Link
                key={p.slug}
                href={`/expertise/${p.slug}`}
                className="group relative flex flex-col gap-6 bg-[var(--color-paper)] p-8 lg:p-10 transition-colors duration-300 hover:bg-[var(--color-off-white)]"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-[var(--font-mono)] text-[12px] tracking-[0.1em] text-[var(--color-swiss-red)]">
                    {p.number}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--color-stone-400)]">
                    {p.eyebrow}
                  </span>
                </div>
                <h2 className="text-[26px] leading-[1.2] tracking-[-0.005em]">{p.title}</h2>
                <p className="text-[14.5px] leading-[1.6] text-[var(--color-stone-700)]">
                  {p.lead}
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
