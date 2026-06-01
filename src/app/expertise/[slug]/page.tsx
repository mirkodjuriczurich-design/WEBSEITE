import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { expertisePages } from "@/lib/expertise-content";
import { Button } from "@/ui/Button";

export function generateStaticParams() {
  return expertisePages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = expertisePages.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.lead,
    alternates: { canonical: `/expertise/${page.slug}` },
  };
}

export default async function ExpertiseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = expertisePages.find((p) => p.slug === slug);
  if (!page) notFound();

  return (
    <>
      <section className="border-b border-[var(--color-stone-200)] bg-[var(--color-off-white)]">
        <div className="container-editorial py-20 lg:py-28">
          <Link
            href="/expertise"
            className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.15em] text-[var(--color-stone-400)] hover:text-[var(--color-swiss-red)]"
          >
            ← Expertise-Übersicht
          </Link>

          <div className="mt-12 max-w-[64ch]">
            <span className="eyebrow">
              {page.eyebrow} · {page.number}/04
            </span>
            <h1 className="mt-8 text-[clamp(2.5rem,5.5vw,4rem)] leading-[1.05] tracking-[-0.015em]">
              {page.title}
            </h1>
            <p className="mt-8 text-[19px] leading-[1.55] text-[var(--color-stone-700)]">
              {page.lead}
            </p>
          </div>

          {page.stats && (
            <dl className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 border-t border-[var(--color-stone-200)] pt-12">
              {page.stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-[13.5px] leading-[1.4] text-[var(--color-ink)] order-2">
                    {s.label}
                  </dt>
                  <dd className="font-[var(--font-display)] text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1] tracking-[-0.02em] text-[var(--color-ink)]">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </section>

      <section className="section-py border-b border-[var(--color-stone-200)] bg-[var(--color-paper)]">
        <div className="container-editorial">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <span className="eyebrow">Im Detail</span>
            </div>
            <div className="lg:col-span-8 space-y-14">
              {page.sections.map((s) => (
                <div key={s.heading}>
                  <h2 className="text-[26px] leading-[1.2] tracking-[-0.005em]">{s.heading}</h2>
                  <div className="mt-5 space-y-5">
                    {s.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className="text-[16.5px] leading-[1.65] text-[var(--color-stone-700)]"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                  {s.bullets && (
                    <ul className="mt-6 space-y-3 border-t border-[var(--color-stone-200)] pt-6">
                      {s.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="flex gap-4 text-[15px] leading-[1.55] text-[var(--color-ink)]"
                        >
                          <span
                            aria-hidden
                            className="mt-[10px] inline-block h-1 w-1 flex-shrink-0"
                            style={{ background: "var(--color-swiss-red)" }}
                          />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="section-py text-[var(--color-paper)]"
        style={{ background: "var(--color-navy)" }}
      >
        <div className="container-editorial">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <span className="eyebrow" style={{ color: "#B8C2D6" }}>
                Werks-Besuch
              </span>
              <h2
                className="mt-6 max-w-[20ch] text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] tracking-[-0.015em]"
                style={{ color: "var(--color-paper)" }}
              >
                Lieber selbst sehen, als nur lesen.
              </h2>
            </div>
            <div className="lg:col-span-5 flex flex-col items-start gap-4">
              <p className="text-[17px] leading-[1.6]" style={{ color: "#B8C2D6" }}>
                Wir empfangen Sie gerne vor Ort. Eine geführte Tour durch Labor, Produktion und
                Lager dauert typisch zwei bis drei Stunden.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button href="/kontakt?type=consultation" variant="primary" arrow>
                  Werks-Besuch vereinbaren
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
