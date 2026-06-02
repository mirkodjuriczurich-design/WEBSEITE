import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/ui/Button";

const articles = [
  {
    slug: "swissmedic-zulassung-longevity",
    tag: "Regulatorik",
    title: "Swissmedic-Zulassung für Longevity-Produkte – was sich 2026 verändert.",
    excerpt:
      "Neue regulatorische Leitplanken in der Schweiz und der EU. Was Hersteller und Brands jetzt vorbereiten sollten.",
    date: "12. Mai 2026",
    readTime: "8 Min Lesezeit",
  },
  {
    slug: "nmn-vs-nr-klinik",
    tag: "Wissenschaft",
    title: "NMN, NR oder NAD⁺ direkt – was die klinische Datenlage wirklich sagt.",
    excerpt:
      "Ein evidenzbasierter Vergleich der drei populärsten NAD⁺-Vorstufen. Bioverfügbarkeit, Studienqualität und Empfehlungen.",
    date: "28. April 2026",
    readTime: "11 Min Lesezeit",
  },
  {
    slug: "white-label-time-to-market",
    tag: "Branche",
    title: "White Label in Longevity – Time-to-Market unter neun Monaten.",
    excerpt:
      "Wie sich der typische Launch-Prozess komprimieren lässt – ohne bei Qualität, Compliance oder Branding Kompromisse einzugehen.",
    date: "8. April 2026",
    readTime: "6 Min Lesezeit",
  },
];

export function InsightsPreview() {
  return (
    <section
      className="section-py border-b border-[var(--color-stone-200)]"
      style={{ background: "var(--color-stone-100)" }}
    >
      <div className="container-editorial">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[64ch]">
            <span className="eyebrow">Insights</span>
            <h2 className="mt-6 text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.01em]">
              Aktuelles aus Labor, Markt und Regulatorik.
            </h2>
          </div>

          <Button href="/wissen/insights" variant="ghost" arrow>
            Alle Insights ansehen
          </Button>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-[var(--color-stone-200)] md:grid-cols-3">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/wissen/insights/${a.slug}`}
              className="group flex flex-col gap-6 bg-[var(--color-paper)] p-8 transition-colors duration-300 hover:bg-[var(--color-off-white)] lg:p-10"
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="inline-block h-1.5 w-1.5"
                  style={{ background: "var(--color-swiss-red)" }}
                />
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-stone-700)]">
                  {a.tag}
                </span>
              </div>

              <h3 className="text-[22px] leading-[1.25] tracking-[-0.005em]">{a.title}</h3>

              <p className="text-[14.5px] leading-[1.6] text-[var(--color-stone-700)]">
                {a.excerpt}
              </p>

              <div className="mt-auto flex items-center justify-between border-t border-[var(--color-stone-200)] pt-5">
                <div className="flex flex-col gap-0.5">
                  <span className="font-[var(--font-mono)] text-[11px] tracking-[0.08em] text-[var(--color-stone-400)]">
                    {a.date}
                  </span>
                  <span className="font-[var(--font-mono)] text-[11px] tracking-[0.08em] text-[var(--color-stone-400)]">
                    {a.readTime}
                  </span>
                </div>
                <ArrowRight
                  size={16}
                  strokeWidth={1.5}
                  className="text-[var(--color-ink)] group-hover:text-[var(--color-swiss-red)] group-hover:translate-x-1 transition-all duration-300"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
