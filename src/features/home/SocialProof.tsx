const certifications = [
  "Swissmedic",
  "GMP",
  "ISO 22000",
  "ISO 13485",
  "HACCP",
  "GDP",
];

export function SocialProof() {
  return (
    <section
      className="section-py border-b border-[var(--color-stone-200)]"
      style={{ background: "var(--color-paper)" }}
    >
      <div className="container-editorial">
        <div className="flex flex-col gap-6 border-t border-[var(--color-stone-200)] pt-10 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-[var(--color-stone-400)]">
            Zertifiziert nach
          </span>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {certifications.map((c, i) => (
              <span key={c} className="flex items-center gap-8">
                <span className="font-[var(--font-mono)] text-[13px] text-[var(--color-stone-700)]">
                  {c}
                </span>
                {i < certifications.length - 1 && (
                  <span aria-hidden className="text-[var(--color-stone-200)]">
                    ·
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
