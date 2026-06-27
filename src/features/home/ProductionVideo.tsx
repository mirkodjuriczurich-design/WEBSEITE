export function ProductionVideo() {
  return (
    <section className="section-py border-b border-[var(--color-stone-200)] bg-[var(--color-paper)]">
      <div className="container-editorial">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.01em]">
              Ein Blick hinter die Tür, die für Sie offensteht.
            </h2>
            <p className="mt-6 text-[17px] leading-[1.6] text-[var(--color-stone-700)]">
              Vom Wirkstoff-Eingang über die Reinraum-Produktion bis zum versandfertigen Karton:
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
            <div className="w-full overflow-hidden border border-[var(--color-stone-200)]">
              <video
                src="/videos/section-labor.mp4"
                controls
                playsInline
                preload="metadata"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
