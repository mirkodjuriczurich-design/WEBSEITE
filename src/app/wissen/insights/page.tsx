import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllInsights } from "@/lib/content";

const insightsArticles = getAllInsights();

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Editorial-Artikel zu Regulatorik, Wissenschaft und Branchenentwicklung im Schweizer Longevity-Markt.",
  alternates: { canonical: "/wissen/insights" },
};

export default function InsightsListPage() {
  return (
    <>
      <section className="border-b border-[var(--color-stone-200)] bg-[var(--color-off-white)]">
        <div className="container-editorial py-20 lg:py-28">
          <div className="max-w-[64ch]">
            <span className="eyebrow">Wissen · 03 · Insights</span>
            <h1 className="mt-8 text-[clamp(2.5rem,5.5vw,4rem)] leading-[1.05] tracking-[-0.015em]">
              Editorial aus Labor, Markt und Regulatorik.
            </h1>
            <p className="mt-8 text-[19px] leading-[1.55] text-[var(--color-stone-700)]">
              Wir veröffentlichen regelmässig Artikel zu wissenschaftlichen, regulatorischen und
              branchenspezifischen Themen aus der Longevity-Welt — mit dem Anspruch, Substanz vor
              Schnelligkeit zu stellen.
            </p>
          </div>
        </div>
      </section>

      <section className="section-py border-b border-[var(--color-stone-200)] bg-[var(--color-paper)]">
        <div className="container-editorial">
          <div className="grid gap-px border border-[var(--color-stone-200)] md:grid-cols-2 lg:grid-cols-3">
            {insightsArticles.map((a) => (
              <Link
                key={a.slug}
                href={`/wissen/insights/${a.slug}`}
                className="group flex flex-col gap-5 bg-[var(--color-paper)] p-8 lg:p-10 transition-colors hover:bg-[var(--color-off-white)]"
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
                <h2 className="text-[22px] leading-[1.25] tracking-[-0.005em]">{a.title}</h2>
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
    </>
  );
}
