import { Button } from "@/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-stone-200)] bg-[var(--color-off-white)]">
      <div className="container-editorial relative pt-20 pb-24 lg:pt-32 lg:pb-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="eyebrow">Schweizer Full-Solution-Partner für Longevity</span>

            <h1 className="mt-8 max-w-[14ch] text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.015em]">
              Schweizer Präzision für die Wissenschaft des längeren Lebens.
            </h1>

            <p className="mt-8 max-w-[52ch] text-[19px] leading-[1.55] text-[var(--color-stone-700)]">
              Die ganze Wertschöpfungskette unter einem Dach – oder genau die Stufe, die Sie brauchen.
              Von der ersten Idee bis zur globalen Markteinführung.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/kontakt?type=enquiry" variant="primary" arrow>
                Anfrage starten
              </Button>
              <Button href="/leistungen" variant="ghost" arrow>
                Leistungen entdecken
              </Button>
            </div>

            <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[var(--color-stone-200)] pt-8">
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-stone-400)]">
                Zertifiziert nach
              </span>
              <span className="font-[var(--font-mono)] text-[13px] text-[var(--color-stone-700)]">Swissmedic</span>
              <span className="text-[var(--color-stone-200)]">·</span>
              <span className="font-[var(--font-mono)] text-[13px] text-[var(--color-stone-700)]">GMP</span>
              <span className="text-[var(--color-stone-200)]">·</span>
              <span className="font-[var(--font-mono)] text-[13px] text-[var(--color-stone-700)]">ISO 22000</span>
              <span className="text-[var(--color-stone-200)]">·</span>
              <span className="font-[var(--font-mono)] text-[13px] text-[var(--color-stone-700)]">ISO 13485</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="sticky top-32 aspect-[4/5] w-full overflow-hidden border border-[var(--color-stone-200)] bg-[var(--color-stone-100)]">
      <div className="relative h-full w-full">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in srgb, var(--color-stone-100) 100%, transparent) 0%, color-mix(in srgb, var(--color-stone-200) 100%, transparent) 100%)",
          }}
        />
        <div className="absolute inset-0 grid place-items-center">
          <div className="text-center px-8">
            <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-[var(--color-stone-400)]">
              Hero-Bild · Platzhalter
            </span>
            <p className="mt-4 font-[var(--font-display)] text-[20px] leading-[1.2] text-[var(--color-stone-700)]">
              Editorial-Photography aus dem Schweizer Labor –<br />
              Phase 3 generiert
            </p>
          </div>
        </div>
        <div
          aria-hidden
          className="absolute top-6 left-6 h-10 w-10"
          style={{ background: "var(--color-swiss-red)" }}
        />
      </div>
    </div>
  );
}
