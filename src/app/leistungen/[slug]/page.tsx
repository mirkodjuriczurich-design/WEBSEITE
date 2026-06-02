import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { leistungen } from "@/lib/site";
import { leistungsContent, leistungsSlugs } from "@/lib/leistungen-content";
import { Button } from "@/ui/Button";

export function generateStaticParams() {
  return leistungsSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = leistungsContent[slug];
  if (!content) return {};
  return {
    title: content.title,
    description: content.lead,
    alternates: { canonical: `/leistungen/${content.slug}` },
  };
}

export default async function LeistungDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = leistungsContent[slug];
  const meta = leistungen.find((l) => l.slug === slug);
  if (!content || !meta) notFound();

  const cross = content.crossSell
    .map((slug) => leistungen.find((l) => l.slug === slug))
    .filter((l): l is (typeof leistungen)[number] => Boolean(l));

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* 1. HERO */}
      <section className="border-b border-[var(--color-stone-200)] bg-[var(--color-off-white)]">
        <div className="container-editorial pt-20 pb-24 lg:pt-28 lg:pb-28">
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.15em] text-[var(--color-stone-400)] hover:text-[var(--color-swiss-red)] transition-colors"
          >
            ← Alle Leistungen
          </Link>

          <div className="mt-12 grid gap-16 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <span className="eyebrow">
                Leistung {content.number} · {content.eyebrow}
              </span>
              <h1 className="mt-8 text-[clamp(2.5rem,5.5vw,4rem)] leading-[1.05] tracking-[-0.015em]">
                {content.title}
              </h1>
              <p className="mt-8 max-w-[58ch] text-[19px] leading-[1.55] text-[var(--color-stone-700)]">
                {content.lead}
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button href={`/kontakt?type=enquiry&service=${content.slug}`} variant="primary" arrow>
                  Anfrage starten
                </Button>
                <Button href="/kontakt?type=partnership" variant="ghost" arrow>
                  Partnerschaft anfragen
                </Button>
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div
                className="aspect-[4/5] w-full overflow-hidden border border-[var(--color-stone-200)]"
                style={{ background: "var(--color-stone-100)" }}
              >
                <div className="relative h-full w-full">
                  <div
                    aria-hidden
                    className="absolute top-6 left-6 h-10 w-10"
                    style={{ background: "var(--color-swiss-red)" }}
                  />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--color-stone-400)]">
                      Editorial-Bild · Phase 3
                    </span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 2. WAS WIR BIETEN */}
      <section className="section-py border-b border-[var(--color-stone-200)] bg-[var(--color-paper)]">
        <div className="container-editorial">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <span className="eyebrow">Was wir bieten</span>
            </div>
            <div className="lg:col-span-8 space-y-14">
              {content.whatWeOffer.map((block) => (
                <div key={block.heading}>
                  <h2 className="text-[28px] leading-[1.2] tracking-[-0.005em]">{block.heading}</h2>
                  <div className="mt-6 space-y-5">
                    {block.paragraphs.map((p, i) => (
                      <p key={i} className="text-[17px] leading-[1.65] text-[var(--color-stone-700)]">
                        {p}
                      </p>
                    ))}
                  </div>
                  {block.bullets && (
                    <ul className="mt-6 space-y-3 border-t border-[var(--color-stone-200)] pt-6">
                      {block.bullets.map((b, i) => (
                        <li key={i} className="flex gap-4 text-[15.5px] leading-[1.55] text-[var(--color-ink)]">
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

      {/* 3. WIE WIR ES TUN – Process */}
      <section className="section-py border-b border-[var(--color-stone-200)] bg-[var(--color-off-white)]">
        <div className="container-editorial">
          <div className="max-w-[60ch]">
            <span className="eyebrow">Wie wir es tun</span>
            <h2 className="mt-6 text-[clamp(1.875rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.01em]">
              Fünf klare Schritte, ein definiertes Ergebnis.
            </h2>
          </div>

          <ol className="mt-16 grid gap-px border border-[var(--color-stone-200)] sm:grid-cols-2 lg:grid-cols-5">
            {content.process.map((s) => (
              <li key={s.step} className="flex flex-col gap-4 bg-[var(--color-off-white)] p-8">
                <span className="font-[var(--font-mono)] text-[12px] tracking-[0.15em] text-[var(--color-swiss-red)]">
                  {s.step}
                </span>
                <h3 className="text-[20px] leading-[1.25] tracking-[-0.005em]">{s.title}</h3>
                <p className="text-[14px] leading-[1.6] text-[var(--color-stone-700)]">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4. WANN ES PASST */}
      <section className="section-py border-b border-[var(--color-stone-200)] bg-[var(--color-paper)]">
        <div className="container-editorial">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <span className="eyebrow">Wann es passt</span>
              <h2 className="mt-6 text-[clamp(1.875rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.01em]">
                {content.title} ist die richtige Wahl, wenn…
              </h2>
            </div>
            <ul className="lg:col-span-7 divide-y divide-[var(--color-stone-200)] border-y border-[var(--color-stone-200)]">
              {content.useCases.map((u, i) => (
                <li key={i} className="flex gap-6 py-6">
                  <span className="font-[var(--font-mono)] text-[12px] tracking-[0.1em] text-[var(--color-swiss-red)] pt-1 min-w-[28px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[16.5px] leading-[1.55] text-[var(--color-ink)]">
                    <strong className="font-medium">{u.label}</strong>{" "}
                    <span className="text-[var(--color-stone-700)]">{u.body}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. WAS SIE BEKOMMEN – Deliverables */}
      <section
        className="section-py border-b border-[var(--color-stone-200)]"
        style={{ background: "var(--color-stone-100)" }}
      >
        <div className="container-editorial">
          <div className="max-w-[60ch]">
            <span className="eyebrow">Was Sie bekommen</span>
            <h2 className="mt-6 text-[clamp(1.875rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.01em]">
              Deliverables, Zeitachse, Quality Gates.
            </h2>
          </div>

          <div className="mt-12 overflow-x-auto border border-[var(--color-stone-200)] bg-[var(--color-paper)]">
            <table className="w-full text-[14.5px]">
              <thead>
                <tr className="text-left">
                  <th className="border-b border-[var(--color-stone-200)] px-6 py-4 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--color-stone-400)]">
                    Output
                  </th>
                  <th className="border-b border-[var(--color-stone-200)] px-6 py-4 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--color-stone-400)]">
                    Zeit
                  </th>
                  <th className="border-b border-[var(--color-stone-200)] px-6 py-4 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--color-stone-400)]">
                    Format
                  </th>
                  <th className="border-b border-[var(--color-stone-200)] px-6 py-4 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--color-stone-400)]">
                    Quality Gate
                  </th>
                </tr>
              </thead>
              <tbody>
                {content.deliverables.map((d, i) => (
                  <tr key={i} className="align-top">
                    <td className="border-b border-[var(--color-stone-200)] px-6 py-5 font-medium text-[var(--color-ink)]">
                      {d.output}
                    </td>
                    <td className="border-b border-[var(--color-stone-200)] px-6 py-5 font-[var(--font-mono)] text-[13px] text-[var(--color-stone-700)]">
                      {d.timing}
                    </td>
                    <td className="border-b border-[var(--color-stone-200)] px-6 py-5 text-[var(--color-stone-700)]">
                      {d.format}
                    </td>
                    <td className="border-b border-[var(--color-stone-200)] px-6 py-5 text-[var(--color-stone-700)]">
                      {d.qualityGate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. REFERENZEN / CASES */}
      <section className="section-py border-b border-[var(--color-stone-200)] bg-[var(--color-paper)]">
        <div className="container-editorial">
          <div className="max-w-[60ch]">
            <span className="eyebrow">Aus der Praxis</span>
            <h2 className="mt-6 text-[clamp(1.875rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.01em]">
              Anonymisierte Projekt-Beispiele.
            </h2>
            <p className="mt-4 text-[14px] leading-[1.55] text-[var(--color-stone-400)]">
              Branche, Aufgabe, Lösung, Resultat. Kundennamen aus NDA-Gründen anonymisiert.
            </p>
          </div>

          <div className="mt-12 grid gap-px border border-[var(--color-stone-200)] sm:grid-cols-2">
            {content.cases.map((c, i) => (
              <article key={i} className="flex flex-col gap-5 bg-[var(--color-paper)] p-8 lg:p-10">
                <span className="font-[var(--font-mono)] text-[11px] tracking-[0.12em] uppercase text-[var(--color-swiss-red)]">
                  Case {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[18px] font-medium leading-[1.3] text-[var(--color-ink)] font-[var(--font-sans)]">
                    {c.branche}
                  </h3>
                </div>
                <div className="space-y-3 text-[14.5px] leading-[1.6] text-[var(--color-stone-700)]">
                  <p>
                    <span className="font-[var(--font-mono)] text-[10px] tracking-[0.1em] uppercase text-[var(--color-stone-400)] block mb-1">
                      Aufgabe
                    </span>
                    {c.aufgabe}
                  </p>
                  <p>
                    <span className="font-[var(--font-mono)] text-[10px] tracking-[0.1em] uppercase text-[var(--color-stone-400)] block mb-1">
                      Lösung
                    </span>
                    {c.loesung}
                  </p>
                  <p>
                    <span className="font-[var(--font-mono)] text-[10px] tracking-[0.1em] uppercase text-[var(--color-stone-400)] block mb-1">
                      Resultat
                    </span>
                    <span className="text-[var(--color-ink)]">{c.resultat}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CROSS-SELL */}
      {cross.length > 0 && (
        <section className="section-py border-b border-[var(--color-stone-200)] bg-[var(--color-off-white)]">
          <div className="container-editorial">
            <div className="max-w-[60ch]">
              <span className="eyebrow">Häufig kombiniert mit</span>
              <h2 className="mt-6 text-[clamp(1.625rem,2.5vw,2.25rem)] leading-[1.2] tracking-[-0.01em]">
                Diese Leistungen ergänzen sich besonders gut.
              </h2>
            </div>
            <div className="mt-12 grid gap-px border border-[var(--color-stone-200)] md:grid-cols-3">
              {cross.map((c) => (
                <Link
                  key={c.slug}
                  href={`/leistungen/${c.slug}`}
                  className="group flex flex-col gap-4 bg-[var(--color-paper)] p-8 transition-colors hover:bg-[var(--color-off-white)]"
                >
                  <span className="font-[var(--font-mono)] text-[12px] tracking-[0.1em] text-[var(--color-swiss-red)]">
                    {c.number}
                  </span>
                  <h3 className="text-[20px] leading-[1.25] tracking-[-0.005em]">{c.title}</h3>
                  <p className="font-[var(--font-display)] italic text-[15px] text-[var(--color-stone-700)]">
                    {c.tagline}
                  </p>
                  <div className="mt-auto inline-flex items-center gap-2 text-[13px] font-medium text-[var(--color-ink)] group-hover:text-[var(--color-swiss-red)]">
                    Mehr
                    <ArrowUpRight size={14} strokeWidth={1.5} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. FAQ */}
      <section className="section-py border-b border-[var(--color-stone-200)] bg-[var(--color-paper)]">
        <div className="container-editorial">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <span className="eyebrow">Häufig gefragt</span>
              <h2 className="mt-6 text-[clamp(1.875rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.01em]">
                Antworten auf die wichtigsten Fragen.
              </h2>
            </div>
            <dl className="lg:col-span-8 divide-y divide-[var(--color-stone-200)] border-y border-[var(--color-stone-200)]">
              {content.faqs.map((f, i) => (
                <div key={i} className="py-8">
                  <dt className="font-[var(--font-display)] text-[20px] leading-[1.3] tracking-[-0.005em] text-[var(--color-ink)]">
                    {f.q}
                  </dt>
                  <dd className="mt-4 text-[16px] leading-[1.65] text-[var(--color-stone-700)]">
                    {f.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section
        className="section-py text-[var(--color-paper)]"
        style={{ background: "var(--color-navy)" }}
      >
        <div className="container-editorial">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <span className="eyebrow" style={{ color: "#B8C2D6" }}>
                Klingt nach Ihrem Vorhaben?
              </span>
              <h2
                className="mt-6 max-w-[20ch] text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] tracking-[-0.015em]"
                style={{ color: "var(--color-paper)" }}
              >
                Lassen Sie uns über {content.title} sprechen.
              </h2>
            </div>
            <div className="lg:col-span-5 flex flex-col items-start gap-4">
              <p className="text-[17px] leading-[1.6]" style={{ color: "#B8C2D6" }}>
                Wir melden uns innerhalb von zwei Werktagen mit einem ersten Einschätzungs-Termin.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button
                  href={`/kontakt?type=partnership&service=${content.slug}`}
                  variant="primary"
                  arrow
                >
                  Partnerschaft anfragen
                </Button>
                <Button
                  href="/kontakt?type=consultation"
                  variant="secondary"
                  arrow
                  className="border-[#2F4566] text-[var(--color-paper)] hover:bg-[#173158]"
                >
                  Ich wünsche eine Beratung
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
