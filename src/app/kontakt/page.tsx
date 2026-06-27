import type { Metadata } from "next";
import { ContactForm } from "@/features/kontakt/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Sprechen Sie mit unserem Team über Ihr Vorhaben. Anfrage, Partnerschaft, Beratung oder Produkt-Interesse – wir melden uns innerhalb von zwei Werktagen.",
  alternates: { canonical: "/kontakt" },
};

export default async function KontaktPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; service?: string; product?: string }>;
}) {
  const sp = await searchParams;
  return (
    <>
      <section className="border-b border-[var(--color-stone-200)] bg-[var(--color-off-white)]">
        <div className="container-editorial pt-20 pb-16 lg:pt-28 lg:pb-20">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="eyebrow">Kontakt</span>
              <h1 className="mt-8 text-[clamp(2.5rem,5.5vw,4rem)] leading-[1.05] tracking-[-0.015em]">
                Sprechen Sie mit uns.
              </h1>
              <p className="mt-8 max-w-[58ch] text-[19px] leading-[1.55] text-[var(--color-stone-700)]">
                Wir hören zu, fragen nach und melden uns innerhalb von zwei Werktagen mit einer
                ersten Einschätzung. Vertraulich, präzise, ohne Sales-Geräusche.
              </p>
            </div>
            <aside className="lg:col-span-5 lg:pl-16">
              <dl className="space-y-6 text-[15px]">
                <div>
                  <dt className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--color-stone-400)]">
                    Telefon
                  </dt>
                  <dd className="mt-2 font-[var(--font-mono)] text-[var(--color-ink)]">+41 00 000 00 00</dd>
                </div>
                <div>
                  <dt className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--color-stone-400)]">
                    E-Mail
                  </dt>
                  <dd className="mt-2 font-[var(--font-mono)] text-[var(--color-ink)]">
                    hello@swisslongevitylabs.com
                  </dd>
                </div>
                <div>
                  <dt className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--color-stone-400)]">
                    Adresse
                  </dt>
                  <dd className="mt-2 text-[var(--color-ink)]">
                    Swiss Longevity Labs AG
                    <br />
                    [Strasse]
                    <br />
                    [PLZ Ort], Schweiz
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-py border-b border-[var(--color-stone-200)] bg-[var(--color-paper)]">
        <div className="container-editorial">
          <ContactForm
            initialType={sp.type}
            initialService={sp.service}
            initialProduct={sp.product}
          />
        </div>
      </section>
    </>
  );
}
