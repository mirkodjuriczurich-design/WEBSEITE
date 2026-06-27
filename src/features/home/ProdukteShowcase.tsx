import Link from "next/link";
import Image from "next/image";
import { produkte } from "@/lib/site";
import { amp } from "@/lib/render";

const produktBilder: Record<string, string> = {
  "deep-sleep": "/images/produkt-deep-sleep.png",
  "resiliencerx21": "/images/produkt-resiliencerx21.png",
  "renewxa": "/images/produkt-renewxa.png",
};

export function ProdukteShowcase() {
  return (
    <section id="produkte" className="section-py border-b border-[var(--color-stone-200)] bg-[var(--color-paper)]">
      <div className="container-editorial">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[64ch]">
            <h2 className="text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.01em]">
              Was wir für uns bauen,<br />
              <span className="text-[clamp(1.5rem,2.5vw,2rem)]">bauen wir für Sie.</span>
            </h2>
            <p className="mt-6 text-[18px] leading-[1.6] text-[var(--color-stone-700)]">
              Diese drei Produkte haben wir für unsere eigene Marke entwickelt und produziert - mit denselben Prozessen, denselben Standards, derselben Schweizer Infrastruktur, die für Ihre Marke zur Verfügung steht. {amp("White & Private Label")} aus einer Hand.
            </p>
          </div>

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
                {produktBilder[p.slug] ? (
                  <Image
                    src={produktBilder[p.slug]}
                    alt={p.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <>
                    <div
                      className="absolute top-5 left-5 h-8 w-8"
                      style={{ background: "var(--color-swiss-red)" }}
                    />
                    <div className="absolute inset-0 grid place-items-center">
                      <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--color-stone-400)]">
                        Produktfoto · Phase 3
                      </span>
                    </div>
                  </>
                )}
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

              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
