const stats = [
  { value: "27", suffix: "+", label: "Jahre Forschungs­erfahrung", note: "Im Team verankert" },
  { value: "12", suffix: "", label: "Internationale Märkte", note: "Aktive Zulassungen" },
  { value: "100", suffix: "%", label: "Swiss Made", note: "Produktion im Inland" },
  { value: "4", suffix: "", label: "GMP & ISO Zertifizierungen", note: "Regelmässig auditiert" },
];

export function TrustNumbers() {
  return (
    <section
      className="section-py border-b border-[var(--color-stone-200)]"
      style={{ background: "var(--color-stone-100)" }}
    >
      <div className="container-editorial">
        <div className="max-w-[64ch]">
          <span className="eyebrow">Belegbar, nicht behauptet</span>
          <h2 className="mt-6 text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.01em]">
            Schweizer Substanz in Zahlen.
          </h2>
        </div>

        <dl className="mt-16 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col border-t border-[var(--color-stone-200)] pt-6">
              <dt className="order-2 mt-4 text-[15.5px] leading-[1.45] text-[var(--color-ink)]">
                {s.label}
              </dt>
              <dd className="order-1 flex items-baseline gap-1 text-[var(--color-ink)]">
                <span className="font-[var(--font-display)] text-[clamp(3rem,6vw,5rem)] leading-[1] tracking-[-0.02em]">
                  {s.value}
                </span>
                <span className="font-[var(--font-display)] text-[clamp(1.5rem,3vw,2.25rem)] leading-[1] text-[var(--color-swiss-red)]">
                  {s.suffix}
                </span>
              </dd>
              <p className="order-3 mt-2 font-[var(--font-mono)] text-[11.5px] tracking-[0.05em] text-[var(--color-stone-400)]">
                {s.note}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
