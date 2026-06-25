import Image from "next/image";
import { Button } from "@/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-stone-200)] bg-[var(--color-off-white)]">
      <div className="container-editorial relative pt-20 pb-24 lg:pt-32 lg:pb-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="eyebrow">Schweizer Full-Service-Partner für Longevity</span>

            <h1 className="mt-8 max-w-[26ch] text-[clamp(1.5rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.015em]">
              Von der Idee bis zum Markterfolg von Longevity-, Health-, Performance-, Beauty- und Nutraceutical-Produkten.
            </h1>

            <p className="mt-8 max-w-[52ch] text-[19px] leading-[1.55] text-[var(--color-stone-700)]">
              Die gesamte Wertschöpfungskette aus einer Hand – von der wissenschaftlichen Validierung über Formulierung und Herstellung bis hin zu Branding, Vertrieb und internationaler Markteinführung.
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
    <div className="sticky top-32 w-full" style={{ width: "100%", aspectRatio: "1000 / 1250" }}>
      <Image
        src="/hero-1000x1250.png"
        alt="Swiss Longevity Labs AG – Longevity Product Creation Blueprint"
        width={1000}
        height={1250}
        className="w-full h-auto"
        priority
        sizes="(max-width: 1024px) 0px, 40vw"
      />
    </div>
  );
}
