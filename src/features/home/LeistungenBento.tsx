import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { leistungen } from "@/lib/site";
import { Button } from "@/ui/Button";
import { amp } from "@/lib/render";
import { FadeUp } from "@/components/ui/FadeUp";

export function LeistungenBento() {
  return (
    <section className="section-py border-b border-[var(--color-stone-200)] bg-[var(--color-paper)]">
      <div className="container-editorial">
        <FadeUp className="max-w-[64ch]">
          <h2 className="text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.01em]">
            Die ganze Wertschöpfungskette - oder genau die Stufe, die Sie brauchen.
          </h2>
          <p className="mt-6 text-[18px] leading-[1.6] text-[var(--color-stone-700)]">
            Von der ersten Rezeptur bis zum globalen Rollout - unsere Kunden sind Pharma-Startups die schnell launchen wollen, Kliniken die eine Eigenmarke aufbauen, und Brands die von Lohnproduktion auf Schweizer Qualität upgraden. Jeder Service ist einzeln buchbar.
          </p>
        </FadeUp>

        <div className="mt-16 grid gap-px overflow-hidden border border-[var(--color-stone-200)] sm:grid-cols-2 lg:grid-cols-3">
          {leistungen.map((l) => (
            <Link
              key={l.slug}
              href={`/services/${l.slug}`}
              className="group relative flex flex-col gap-6 bg-[var(--color-paper)] p-8 lg:p-10 transition-colors duration-300 hover:bg-[var(--color-off-white)]"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-[var(--font-mono)] text-[12px] tracking-[0.1em] text-[var(--color-swiss-red)]">
                  {l.number}
                </span>
                <span className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[var(--color-stone-400)]">
                  Service
                </span>
              </div>

              <div>
                <h3 className="text-[24px] leading-[1.2] tracking-[-0.005em]">{amp(l.title)}</h3>
                <p className="mt-2 font-[var(--font-display)] italic text-[17px] leading-[1.4] text-[var(--color-stone-700)]">
                  {l.tagline}
                </p>
              </div>

              <p className="text-[14.5px] leading-[1.6] text-[var(--color-stone-700)]">
                {l.short}
              </p>

              <div className="mt-auto flex items-center gap-2 text-[13px] font-medium text-[var(--color-ink)] group-hover:text-[var(--color-swiss-red)] transition-colors duration-300">
                Mehr erfahren
                <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>

              <div
                aria-hidden
                className="absolute inset-y-0 left-0 w-[3px] bg-[var(--color-swiss-red)] origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100"
              />
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/services" variant="secondary" arrow>
            Alle Services ansehen
          </Button>
        </div>
      </div>
    </section>
  );
}
