import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { produkte } from "@/lib/site";
import { Button } from "@/ui/Button";

export const metadata: Metadata = {
  title: "Produkte",
  description:
    "Sechs Longevity-Produkte unter Schweizer Eigenmarke. Wissenschaftlich fundiert, Schweizer produziert, kompromisslos rein.",
  alternates: { canonical: "/produkte" },
};

export default function ProdukteHubPage() {
  return (
    <>
      <section className="border-b border-[var(--color-stone-200)] bg-[var(--color-off-white)]">
        <div className="container-editorial py-20 lg:py-28">
          <div className="max-w-[60ch]">
            <span className="eyebrow">Eigene Marke</span>
            <h1 className="mt-8 text-[clamp(2.5rem,5.5vw,4rem)] leading-[1.05] tracking-[-0.015em]">
              Sechs Produkte. Eine Schweizer Linie.
            </h1>
            <p className="mt-8 text-[19px] leading-[1.55] text-[var(--color-stone-700)]">
              Die Substanz, die wir für andere fertigen — auch in unserer eigenen Linie.
              Wissenschaftlich fundiert, in der Schweiz produziert, frei von unnötigen
              Hilfsstoffen.
            </p>
            <p className="mt-6 inline-flex items-center gap-3 border-l-2 border-[var(--color-swiss-red)] pl-4 text-[14px] text-[var(--color-stone-400)]">
              <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em]">
                Shop in Phase 2
              </span>
              <span>· aktuell Vorab-Anfragen und Warteliste</span>
            </p>
          </div>
        </div>
      </section>

      <section className="section-py border-b border-[var(--color-stone-200)] bg-[var(--color-paper)]">
        <div className="container-editorial">
          <div className="grid gap-px border border-[var(--color-stone-200)] sm:grid-cols-2 lg:grid-cols-3">
            {produkte.map((p) => (
              <Link
                key={p.slug}
                href={`/produkte/${p.slug}`}
                className="group flex flex-col bg-[var(--color-paper)] transition-colors duration-300 hover:bg-[var(--color-off-white)]"
              >
                <div
                  aria-hidden
                  className="relative aspect-[4/5] border-b border-[var(--color-stone-200)]"
                  style={{ background: "var(--color-stone-100)" }}
                >
                  <div
                    className="absolute top-5 left-5 h-8 w-8"
                    style={{ background: "var(--color-swiss-red)" }}
                  />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--color-stone-400)]">
                      Produktfoto · Phase 3
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-8">
                  <div className="flex items-baseline gap-3">
                    <span className="font-[var(--font-mono)] text-[12px] tracking-[0.1em] text-[var(--color-swiss-red)]">
                      {p.number}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--color-stone-400)]">
                      {p.category}
                    </span>
                  </div>

                  <h2 className="text-[22px] leading-[1.2] tracking-[-0.005em]">{p.name}</h2>
                  <p className="font-[var(--font-display)] italic text-[16px] leading-[1.4] text-[var(--color-stone-700)]">
                    {p.tagline}
                  </p>
                  <p className="text-[14px] leading-[1.6] text-[var(--color-stone-700)]">
                    {p.short}
                  </p>

                  <div className="mt-auto flex items-center gap-2 text-[13px] font-medium text-[var(--color-ink)] group-hover:text-[var(--color-swiss-red)] transition-colors duration-300">
                    Mehr erfahren
                    <ArrowRight
                      size={14}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-[var(--color-off-white)]">
        <div className="container-editorial flex flex-col items-start gap-6">
          <h2 className="text-[clamp(1.75rem,2.5vw,2.25rem)] leading-[1.2] max-w-[28ch]">
            Interessiert an einem Produkt? Lassen Sie sich auf die Warteliste setzen.
          </h2>
          <Button href="/kontakt?type=product" variant="primary" arrow>
            Auf Warteliste
          </Button>
        </div>
      </section>
    </>
  );
}
