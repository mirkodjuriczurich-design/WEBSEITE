import { Button } from "@/ui/Button";

const highlights = [
  {
    title: "NAD⁺ Bioverfügbarkeit",
    excerpt:
      "Wie sich verschiedene NAD⁺-Vorstufen im klinischen Vergleich unterscheiden - und warum Galenik den Unterschied macht.",
    meta: "Forschungsdossier · 2025",
  },
  {
    title: "Senolytika in der Klinik",
    excerpt:
      "Aktuelle Studienlage zu pflanzlichen Senolytika und deren Rolle bei der zellulären Erneuerung.",
    meta: "Wissenschafts-Review · 2024",
  },
  {
    title: "Schweizer Produktionsstandard",
    excerpt:
      "Was GMP nach Swissmedic in der Praxis bedeutet - und warum es für Longevity-Produkte unverzichtbar ist.",
    meta: "Methoden-Paper · 2024",
  },
];

export function WissenTeaser() {
  return (
    <section className="section-py border-b border-[var(--color-stone-200)] bg-[var(--color-off-white)]">
      <div className="container-editorial">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="eyebrow">Wissenschaft trifft Anwendung</span>
            <h2 className="mt-6 text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.01em]">
              Was wir wissen - und was uns weiter antreibt.
            </h2>
            <p className="mt-6 text-[17px] leading-[1.6] text-[var(--color-stone-700)]">
              Unser Forschungsteam veröffentlicht regelmässig Reviews, Methoden-Papers und
              klinische Studien-Synthesen. Damit Sie als Partner oder Käufer:in jederzeit auf
              überprüfbarer Substanz aufbauen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/wissen" variant="secondary" arrow>
                Zur Wissensplattform
              </Button>
              <Button href="/wissen/forschung" variant="ghost" arrow>
                Forschung im Detail
              </Button>
            </div>
          </div>

          <ol className="lg:col-span-7 divide-y divide-[var(--color-stone-200)] border-y border-[var(--color-stone-200)]">
            {highlights.map((h, idx) => (
              <li key={h.title} className="group flex gap-8 py-8">
                <span className="font-[var(--font-mono)] text-[12px] tracking-[0.1em] text-[var(--color-swiss-red)] pt-1">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <span className="font-[var(--font-mono)] text-[11px] tracking-[0.12em] uppercase text-[var(--color-stone-400)]">
                    {h.meta}
                  </span>
                  <h3 className="mt-2 text-[22px] leading-[1.25] tracking-[-0.005em]">
                    {h.title}
                  </h3>
                  <p className="mt-3 text-[15.5px] leading-[1.6] text-[var(--color-stone-700)]">
                    {h.excerpt}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
