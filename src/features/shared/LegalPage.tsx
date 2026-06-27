interface Section {
  heading: string;
  body: string[];
}

interface Props {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  sections: Section[];
}

export function LegalPage({ eyebrow, title, lastUpdated, sections }: Props) {
  return (
    <section className="bg-[var(--color-off-white)] border-b border-[var(--color-stone-200)]">
      <div className="container-editorial py-20 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <aside className="lg:col-span-3">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="mt-8 text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.01em]">
              {title}
            </h1>
            <p className="mt-8 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--color-stone-400)]">
              Zuletzt aktualisiert · {lastUpdated}
            </p>
            <nav className="mt-12 hidden lg:block" aria-label="Inhalt">
              <ol className="space-y-3 text-[13px]">
                {sections.map((s, i) => (
                  <li key={s.heading}>
                    <a
                      href={`#section-${i + 1}`}
                      className="text-[var(--color-stone-700)] hover:text-[var(--color-swiss-red)] transition-colors"
                    >
                      {String(i + 1).padStart(2, "0")} · {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="lg:col-span-9 space-y-12">
            {sections.map((s, i) => (
              <article key={s.heading} id={`section-${i + 1}`}>
                <h2 className="text-[24px] leading-[1.25] tracking-[-0.005em]">
                  <span className="font-[var(--font-mono)] text-[14px] text-[var(--color-swiss-red)] mr-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.heading}
                </h2>
                <div className="mt-5 space-y-4 text-[15.5px] leading-[1.7] text-[var(--color-stone-700)]">
                  {s.body.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
