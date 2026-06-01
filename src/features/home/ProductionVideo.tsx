import { Play } from "lucide-react";

export function ProductionVideo() {
  return (
    <section className="section-py border-b border-[var(--color-stone-200)] bg-[var(--color-paper)]">
      <div className="container-editorial">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <span className="eyebrow">Sehen statt lesen</span>
            <h2 className="mt-6 text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.01em]">
              Ein Blick in unsere Schweizer Produktion.
            </h2>
            <p className="mt-6 text-[17px] leading-[1.6] text-[var(--color-stone-700)]">
              Vom Wirkstoff-Eingang über die Reinraum-Produktion bis zum versandfertigen Karton —
              drei Minuten, die mehr erzählen als hundert Zeilen Text.
            </p>
            <ul className="mt-8 space-y-3 border-t border-[var(--color-stone-200)] pt-6">
              <li className="flex gap-4 text-[15px] leading-[1.55] text-[var(--color-ink)]">
                <span
                  aria-hidden
                  className="mt-[10px] inline-block h-1 w-1 flex-shrink-0"
                  style={{ background: "var(--color-swiss-red)" }}
                />
                Reinraum-Klassen ISO 7 und 8
              </li>
              <li className="flex gap-4 text-[15px] leading-[1.55] text-[var(--color-ink)]">
                <span
                  aria-hidden
                  className="mt-[10px] inline-block h-1 w-1 flex-shrink-0"
                  style={{ background: "var(--color-swiss-red)" }}
                />
                Eigenes analytisches Labor mit HPLC, LC-MS/MS, NMR
              </li>
              <li className="flex gap-4 text-[15px] leading-[1.55] text-[var(--color-ink)]">
                <span
                  aria-hidden
                  className="mt-[10px] inline-block h-1 w-1 flex-shrink-0"
                  style={{ background: "var(--color-swiss-red)" }}
                />
                Acht GMP-zertifizierte Produktionslinien
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div
              aria-hidden
              className="relative aspect-video w-full overflow-hidden border border-[var(--color-stone-200)]"
              style={{ background: "var(--color-stone-900)" }}
            >
              <div
                className="absolute top-6 left-6 h-10 w-10"
                style={{ background: "var(--color-swiss-red)" }}
              />
              <div className="absolute inset-0 grid place-items-center">
                <div className="flex flex-col items-center gap-6 text-center px-6">
                  <span
                    className="inline-flex h-20 w-20 items-center justify-center rounded-full border-2"
                    style={{ borderColor: "#B8C2D6" }}
                  >
                    <Play size={28} strokeWidth={1.5} className="ml-1 text-[var(--color-paper)]" />
                  </span>
                  <div>
                    <p
                      className="font-[var(--font-display)] text-[18px] leading-[1.3]"
                      style={{ color: "var(--color-paper)" }}
                    >
                      Werks-Tour Schweiz · 3:24 Min
                    </p>
                    <p
                      className="mt-2 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em]"
                      style={{ color: "#B8C2D6" }}
                    >
                      Video · Phase 3
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
