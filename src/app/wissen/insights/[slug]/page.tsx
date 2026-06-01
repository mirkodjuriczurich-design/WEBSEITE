import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getInsight, getInsightSlugs, getAllInsights } from "@/lib/content";
import { buildArticleJsonLd } from "@/lib/seo";
import { Button } from "@/ui/Button";

export function generateStaticParams() {
  return getInsightSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getInsight(slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.excerpt,
    alternates: { canonical: `/wissen/insights/${a.slug}` },
    openGraph: {
      type: "article",
      title: a.title,
      description: a.excerpt,
      publishedTime: a.date,
      authors: [a.author],
    },
  };
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) notFound();

  const articleJsonLd = buildArticleJsonLd({
    title: article.title,
    excerpt: article.excerpt,
    slug: article.slug,
    authorName: article.author,
    authorRole: article.authorRole,
    date: article.date,
    section: article.tag,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article>
        <section className="border-b border-[var(--color-stone-200)] bg-[var(--color-off-white)]">
          <div className="container-editorial py-20 lg:py-28">
            <Link
              href="/wissen/insights"
              className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.15em] text-[var(--color-stone-400)] hover:text-[var(--color-swiss-red)]"
            >
              ← Alle Insights
            </Link>

            <div className="mt-12 max-w-[60ch]">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="inline-block h-1.5 w-1.5"
                  style={{ background: "var(--color-swiss-red)" }}
                />
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-stone-700)]">
                  {article.tag}
                </span>
              </div>

              <h1 className="mt-8 text-[clamp(2.5rem,5.5vw,4rem)] leading-[1.05] tracking-[-0.015em]">
                {article.title}
              </h1>

              <p className="mt-8 text-[19px] leading-[1.55] text-[var(--color-stone-700)]">
                {article.excerpt}
              </p>

              <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-[var(--color-stone-200)] pt-8 sm:grid-cols-3 max-w-[60ch]">
                <div>
                  <dt className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.12em] text-[var(--color-stone-400)]">
                    Autor:in
                  </dt>
                  <dd className="mt-2 text-[14px] text-[var(--color-ink)]">
                    {article.author}
                    <span className="block text-[12px] text-[var(--color-stone-700)] mt-0.5">
                      {article.authorRole}
                    </span>
                  </dd>
                </div>
                <div>
                  <dt className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.12em] text-[var(--color-stone-400)]">
                    Veröffentlicht
                  </dt>
                  <dd className="mt-2 font-[var(--font-mono)] text-[13px] text-[var(--color-ink)]">
                    {article.date}
                  </dd>
                </div>
                <div>
                  <dt className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.12em] text-[var(--color-stone-400)]">
                    Lesezeit
                  </dt>
                  <dd className="mt-2 font-[var(--font-mono)] text-[13px] text-[var(--color-ink)]">
                    {article.readTime}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--color-stone-200)] bg-[var(--color-paper)]">
          <div className="container-editorial py-16 lg:py-24">
            <div
              className="prose-editorial mx-auto max-w-[64ch]"
              dangerouslySetInnerHTML={{ __html: article.bodyHtml }}
            />
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
                  Konkret werden
                </span>
                <h2
                  className="mt-6 max-w-[22ch] text-[clamp(1.875rem,3vw,2.75rem)] leading-[1.1] tracking-[-0.015em]"
                  style={{ color: "var(--color-paper)" }}
                >
                  Brauchen Sie zu diesem Thema einen Sparringspartner?
                </h2>
              </div>
              <div className="lg:col-span-5">
                <Button href="/kontakt?type=consultation" variant="primary" arrow>
                  Ich wünsche eine Beratung
                </Button>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

export { getAllInsights };
