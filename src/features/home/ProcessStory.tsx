const steps = [
  {
    number: "01",
    title: "Konzept",
    description:
      "Gemeinsam mit Ihnen entwickeln wir die wissenschaftliche und strategische Basis Ihres Produkts – von der Wirkstoff-Auswahl bis zur Marktpositionierung.",
  },
  {
    number: "02",
    title: "Formulierung",
    description:
      "In unseren Schweizer Labors entsteht die Rezeptur – abgestimmt auf Wirksamkeit, Galenik, Stabilität und Verträglichkeit.",
  },
  {
    number: "03",
    title: "Validierung",
    description:
      "Klinische Studien, Stabilitäts- und Belastungstests sichern Qualität, Wirkung und Marktreife jeder einzelnen Charge.",
  },
  {
    number: "04",
    title: "Produktion",
    description:
      "GMP-zertifizierte Lohnproduktion in der Schweiz – vom Pilot-Batch bis zur globalen Skalierung, ohne Auslagerung.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "Regulatorik, Compliance und die globale Markteinführung in Ihren Zielmärkten – Swissmedic, EFSA, FDA und mehr.",
  },
];

export function ProcessStory() {
  return (
    <section className="section-py border-b border-[var(--color-stone-200)] bg-[var(--color-off-white)]">
      <div className="container-editorial">
        <div className="max-w-[64ch]">
          <span className="eyebrow">Vom Konzept zum globalen Produkt</span>
          <h2 className="mt-6 text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.01em]">
            Wie wir Ihre Idee zur Marktreife bringen.
          </h2>
          <p className="mt-6 text-[18px] leading-[1.6] text-[var(--color-stone-700)]">
            Jeder Schritt unter einem Dach – abgestimmt, rückverfolgbar, kompromisslos
            schweizerisch.
          </p>
        </div>

        {/* Desktop: 5-col stepper with top connector line */}
        <div className="mt-20 hidden lg:block">
          <div className="relative">
            <div
              aria-hidden
              className="absolute left-0 right-0 top-[12px] h-px"
              style={{
                background:
                  "linear-gradient(to right, var(--color-stone-200) 0%, var(--color-stone-200) 100%)",
              }}
            />
            <ol className="relative grid grid-cols-5 gap-8">
              {steps.map((step) => (
                <li key={step.number} className="flex flex-col">
                  <div className="relative mb-8 flex items-center">
                    <span
                      aria-hidden
                      className="absolute -left-1 top-[10px] block h-1.5 w-1.5"
                      style={{ background: "var(--color-swiss-red)" }}
                    />
                    <span className="ml-4 font-[var(--font-mono)] text-[14px] tracking-[0.15em] text-[var(--color-stone-400)]">
                      Schritt {step.number}
                    </span>
                  </div>
                  <h3 className="text-[24px] leading-[1.2] tracking-[-0.005em]">{step.title}</h3>
                  <p className="mt-4 text-[14.5px] leading-[1.6] text-[var(--color-stone-700)]">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Mobile / Tablet: vertical timeline */}
        <ol className="mt-12 space-y-12 lg:hidden">
          {steps.map((step, idx) => (
            <li key={step.number} className="relative flex gap-6">
              <div className="flex flex-col items-center">
                <span
                  aria-hidden
                  className="block h-1.5 w-1.5"
                  style={{ background: "var(--color-swiss-red)" }}
                />
                {idx < steps.length - 1 && (
                  <span
                    aria-hidden
                    className="mt-2 block w-px flex-1"
                    style={{ background: "var(--color-stone-200)" }}
                  />
                )}
              </div>
              <div className="flex-1 pb-2">
                <span className="font-[var(--font-mono)] text-[12px] tracking-[0.15em] text-[var(--color-stone-400)]">
                  Schritt {step.number}
                </span>
                <h3 className="mt-2 text-[22px] leading-[1.2]">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-[var(--color-stone-700)]">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
