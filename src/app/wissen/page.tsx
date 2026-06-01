import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllInsights } from "@/lib/content";

const insightsArticles = getAllInsights();

export const metadata: Metadata = {
  title: "Wissen",
  description:
    "Forschung, akademische Partnerschaften und Editorial-Insights aus der Schweizer Longevity-Welt.",
  alternates: { canonical: "/wissen" },
};

const pillars = [
  {
    slug: "forschung",
    number: "01",
    title: "Forschung",
    description:
      "Eigene Studien, Methoden-Reviews und wissenschaftliche Synthesen aus unserer Forschungs-Abteilung.",
  },
  {
    slug: "partner",
    number: "02",
    title: "Akademische Partner",
    description:
      "Mit Schweizer Universitäten und spezialisierten Instituten arbeiten wir kontinuierlich an aktuellen Forschungs-Themen.",
  },
  {
    slug: "insights",
    number: "03",
    title: "Insights",
    description:
      "Editorial-Artikel zu Regulatorik, Wissenschaft und Branchenentwicklung — von unserem Team kuratiert.",
  },
];

export default function WissenHubPage() {
  return (
    <>
      <section className="border-b border-[var(--color-stone-200)] bg-[var(--color-off-white)]">
        <div className="container-editorial py-20 lg:py-28">
          <div className="max-w-[60ch]">
            <span className="eyebrow">Wissen</span>
            <h1 className="mt-8 text-[clamp(2.5rem,5.5vw,4rem)] leading-[1.05] tracking-[-0.015em]">
              Wissenschaft, die wir publizieren.
            </h1>
            <p className="mt-8 text-[19px] leading-[1.55] text-[var(--color-stone-700)]">
              Forschung, Partnerschaften und Editorial-Insights. Damit Sie als Partner oder
              Käufer:in jederzeit auf überprüfbarer wissenschaftlicher Substanz aufbauen können.
            </p>
          </div>
        </div>
      </section>

      <section className="section-py border-b border-[var(--color-stone-200)] bg-[var(--color-paper)]">
        <div className="container-editorial">
          <div className="grid gap-px border border-[var(--color-stone-200)] sm:grid-cols-3">
            {pillars.map((p) => (
              <Link
                key={p.slug}
                href={`/wissen/${p.slug}`}
                className="group flex flex-col gap-5 bg-[var(--color-paper)] p-8 lg:p-10 transition-colors hover:bg-[var(--color-off-white)]"
              >
                <span className="font-[var(--font-mono)] text-[12px] tracking-[0.1em] text-[var(--color-swiss-red)]">
                  {p.number}
                </span>
                <h2 className="text-[24px] leading-[1.2] tracking-[-0.005em]">{p.title}</h2>
                <p className="text-[14.5px] leading-[1.6] text-[var(--color-stone-700)]">
                  {p.description}
                </p>
                <div className="mt-auto inline-flex items-center gap-2 text-[13px] font-medium text-[var(--color-ink)] group-hover:text-[var(--color-swiss-red)] transition-colors">
                  Bereich öffnen
                  <ArrowRight
                    size={14}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section-py border-b border-[var(--color-stone-200)]"
        style={{ background: "var(--color-stone-100)" }}
      >
        <div className="container-editorial">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[60ch]">
              <span className="eyebrow">Aktuelle Insights</span>
              <h2 className="mt-6 text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.01em]">
                Aktuelles aus Labor, Markt und Regulatorik.
              </h2>
            </div>
            <Link
              href="/wissen/insights"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-[var(--color-ink)] hover:text-[var(--color-swiss-red)]"
            >
              Alle Insights ansehen <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>

          <div className="mt-16 grid gap-px border border-[var(--color-stone-200)] md:grid-cols-3">
            {insightsArticles.map((a) => (
              <Link
                key={a.slug}
                href={`/wissen/insights/${a.slug}`}
                className="group flex flex-col gap-5 bg-[var(--color-paper)] p-8 transition-colors hover:bg-[var(--color-off-white)] lg:p-10"
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
                <h3 className="text-[20px] leading-[1.25] tracking-[-0.005em]">{a.title}</h3>
                <p className="text-[14px] leading-[1.6] text-[var(--color-stone-700)]">
                  {a.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-[var(--color-stone-200)] pt-5">
                  <span className="font-[var(--font-mono)] text-[11px] tracking-[0.08em] text-[var(--color-stone-400)]">
                    {a.date}
                  </span>
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
    </>
  );
}
