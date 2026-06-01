import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { produkte, site } from "@/lib/site";
import { Button } from "@/ui/Button";

export function generateStaticParams() {
  return produkte.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = produkte.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.name,
    description: p.tagline,
    alternates: { canonical: `/produkte/${p.slug}` },
  };
}

export default async function ProduktDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = produkte.find((x) => x.slug === slug);
  if (!p) notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Product", "DietarySupplement"],
    name: p.name,
    description: p.tagline,
    brand: { "@type": "Brand", name: site.shortName },
    manufacturer: { "@type": "Organization", name: site.name, url: site.url },
    category: p.category,
    audience: { "@type": "PeopleAudience", suggestedAge: p.targetGroup },
    activeIngredient: p.ingredients.map((i) => `${i.name} ${i.dose}`).join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      {/* HERO */}
      <section className="border-b border-[var(--color-stone-200)] bg-[var(--color-off-white)]">
        <div className="container-editorial pt-16 pb-24 lg:pt-24 lg:pb-28">
          <Link
            href="/produkte"
            className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.15em] text-[var(--color-stone-400)] hover:text-[var(--color-swiss-red)]"
          >
            ← Alle Produkte
          </Link>

          <div className="mt-12 grid gap-16 lg:grid-cols-12 lg:gap-12">
            <aside className="lg:col-span-5">
              <div
                className="aspect-square w-full border border-[var(--color-stone-200)] relative"
                style={{ background: "var(--color-stone-100)" }}
                aria-hidden
              >
                <div
                  className="absolute top-6 left-6 h-10 w-10"
                  style={{ background: "var(--color-swiss-red)" }}
                />
                <div className="absolute inset-0 grid place-items-center px-6">
                  <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--color-stone-400)] text-center">
                    Produktfoto · Phase 3
                    <br />
                    {p.format ?? "Premium-Verpackung"}
                  </span>
                </div>
              </div>

              <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-[var(--color-stone-200)] pt-6 text-[13px]">
                <dt className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.12em] text-[var(--color-stone-400)]">
                  Zielgruppe
                </dt>
                <dd className="text-[var(--color-ink)]">{p.targetGroup}</dd>
                <dt className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.12em] text-[var(--color-stone-400)]">
                  Kanal
                </dt>
                <dd className="text-[var(--color-ink)]">{p.channel}</dd>
                <dt className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.12em] text-[var(--color-stone-400)]">
                  Preis
                </dt>
                <dd className="text-[var(--color-ink)] font-[var(--font-mono)]">
                  {p.pricePerMonth}
                </dd>
                <dt className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.12em] text-[var(--color-stone-400)]">
                  Verfügbarkeit
                </dt>
                <dd className="text-[var(--color-ink)]">{p.developmentTime}</dd>
              </dl>
            </aside>

            <div className="lg:col-span-7">
              <div className="flex items-baseline gap-3">
                <span className="font-[var(--font-mono)] text-[12px] tracking-[0.1em] text-[var(--color-swiss-red)]">
                  {p.number}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--color-stone-400)]">
                  {p.category}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--color-ink)] border-l border-[var(--color-stone-200)] pl-3">
                  {p.stufe}
                </span>
              </div>
              <h1 className="mt-6 text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.015em]">
                {p.name}
              </h1>
              <p className="mt-4 font-[var(--font-display)] italic text-[22px] leading-[1.4] text-[var(--color-stone-700)]">
                {p.tagline}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Button
                  href={`/kontakt?type=product&product=${p.slug}`}
                  variant="primary"
                  arrow
                >
                  Auf Warteliste
                </Button>
                <Button
                  href={`/kontakt?type=partnership&product=${p.slug}`}
                  variant="ghost"
                  arrow
                >
                  B2B-Partnerschaft anfragen
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WAS DAHINTER STECKT */}
      <section className="section-py border-b border-[var(--color-stone-200)] bg-[var(--color-paper)]">
        <div className="container-editorial">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <span className="eyebrow">Worum es geht</span>
              <h2 className="mt-6 text-[clamp(1.875rem,3vw,2.25rem)] leading-[1.2] tracking-[-0.01em]">
                {p.pitch}
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-[17px] leading-[1.7] text-[var(--color-stone-700)]">
              <p>{p.description}</p>
              <blockquote className="border-l-2 border-[var(--color-swiss-red)] pl-5 font-[var(--font-display)] italic text-[19px] leading-[1.5] text-[var(--color-ink)]">
                Marktlücke · {p.marketGap}
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* REZEPTUR */}
      <section
        className="section-py border-b border-[var(--color-stone-200)]"
        style={{ background: "var(--color-stone-100)" }}
      >
        <div className="container-editorial">
          <div className="max-w-[60ch]">
            <span className="eyebrow">Rezeptur</span>
            <h2 className="mt-6 text-[clamp(1.875rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.01em]">
              {p.ingredients.length} Wirkstoffe, klinische Dosierungen.
            </h2>
          </div>

          <div className="mt-12 overflow-x-auto border border-[var(--color-stone-200)] bg-[var(--color-paper)]">
            <table className="w-full text-[14.5px]">
              <thead>
                <tr className="text-left">
                  <th className="border-b border-[var(--color-stone-200)] px-6 py-4 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--color-stone-400)]">
                    Inhaltsstoff
                  </th>
                  <th className="border-b border-[var(--color-stone-200)] px-6 py-4 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--color-stone-400)]">
                    Dosis
                  </th>
                  <th className="border-b border-[var(--color-stone-200)] px-6 py-4 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--color-stone-400)]">
                    Funktion
                  </th>
                </tr>
              </thead>
              <tbody>
                {p.ingredients.map((i, idx) => (
                  <tr key={idx} className="align-top">
                    <td className="border-b border-[var(--color-stone-200)] px-6 py-4 font-medium text-[var(--color-ink)]">
                      {i.name}
                    </td>
                    <td className="border-b border-[var(--color-stone-200)] px-6 py-4 font-[var(--font-mono)] text-[13px] text-[var(--color-swiss-red)] whitespace-nowrap">
                      {i.dose}
                    </td>
                    <td className="border-b border-[var(--color-stone-200)] px-6 py-4 text-[var(--color-stone-700)]">
                      {i.function}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* POSITIONIERUNG & STRATEGIE */}
      <section className="section-py border-b border-[var(--color-stone-200)] bg-[var(--color-paper)]">
        <div className="container-editorial">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <span className="eyebrow">Positionierung</span>
              <h2 className="mt-6 font-[var(--font-display)] italic text-[clamp(1.75rem,2.75vw,2.5rem)] leading-[1.25] tracking-[-0.01em]">
                {p.positioning}
              </h2>
            </div>
            <ul className="lg:col-span-7 divide-y divide-[var(--color-stone-200)] border-y border-[var(--color-stone-200)]">
              {p.strategicNotes.map((s, i) => (
                <li key={i} className="flex gap-6 py-6">
                  <span className="font-[var(--font-mono)] text-[12px] tracking-[0.1em] text-[var(--color-swiss-red)] pt-1 min-w-[28px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[16.5px] leading-[1.6] text-[var(--color-ink)]">{s}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="section-py text-[var(--color-paper)]"
        style={{ background: "var(--color-navy)" }}
      >
        <div className="container-editorial">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <span className="eyebrow" style={{ color: "#B8C2D6" }}>
                Interesse an {p.name}?
              </span>
              <h2
                className="mt-6 max-w-[22ch] text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] tracking-[-0.015em]"
                style={{ color: "var(--color-paper)" }}
              >
                Privat reservieren oder als B2B distribuieren?
              </h2>
            </div>
            <div className="lg:col-span-5 flex flex-col items-start gap-4">
              <div className="flex flex-wrap gap-3">
                <Button
                  href={`/kontakt?type=product&product=${p.slug}`}
                  variant="primary"
                  arrow
                >
                  Auf Warteliste
                </Button>
                <Button
                  href={`/kontakt?type=partnership&product=${p.slug}`}
                  variant="secondary"
                  arrow
                  className="border-[#2F4566] text-[var(--color-paper)] hover:bg-[#173158]"
                >
                  B2B-Anfrage
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
