import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { produkte } from "@/lib/site";
import { Button } from "@/ui/Button";
import { amp } from "@/lib/render";

export function ProdukteShowcase() {
  return (
    <section className="section-py border-b border-[var(--color-stone-200)] bg-[var(--color-paper)]">
      <div className="container-editorial">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[64ch]">
            <span className="eyebrow">Unsere Longevity Produkte</span>
            <h2 className="mt-6 text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.01em]">
              Ihre Longevity-Marke.<br />
              <span className="text-[clamp(1.5rem,2.5vw,2rem)]">{amp("Als White & Private Label aus der Schweiz.")}</span>
            </h2>
            <p className="mt-6 text-[18px] leading-[1.6] text-[var(--color-stone-700)]">
              Als Schweizer White Label- und Private Label-Hersteller entwickeln und produzieren wir wissenschaftlich fundierte Longevity-Produkte nach höchsten GMP-Qualitätsstandards. Von individuellen Rezepturen über Kapseln und Nahrungsergänzungsmittel bis hin zur kompletten Produktlinie erhalten Sie eine schlüsselfertige Lösung aus einer Hand – entwickelt, produziert und begleitet in der Schweiz.
            </p>
          </div>

          <Button href="/produkte" variant="ghost" arrow>
            Alle Produkte ansehen
          </Button>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-[var(--color-stone-200)] sm:grid-cols-2 lg:grid-cols-3">
          {produkte.map((p) => (
            <Link
              key={p.slug}
              href={`/produkte/${p.slug}`}
              className="group relative flex flex-col bg-[var(--color-paper)] transition-colors duration-300 hover:bg-[var(--color-off-white)]"
            >
              <div
                aria-hidden
                className="relative aspect-[4/5] w-full overflow-hidden border-b border-[var(--color-stone-200)]"
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

                <div>
                  <h3 className="text-[22px] leading-[1.2] tracking-[-0.005em]">{p.name}</h3>
                  <p className="mt-2 font-[var(--font-display)] italic text-[16px] leading-[1.4] text-[var(--color-stone-700)]">
                    {p.tagline}
                  </p>
                </div>

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
  );
}
