import type { Metadata } from "next";
import { Button } from "@/ui/Button";

export const metadata: Metadata = {
  title: "Akademische Partner",
  description:
    "Unsere akademischen Partnerschaften mit Schweizer Universitäten und spezialisierten Forschungs-Instituten.",
  alternates: { canonical: "/wissen/partner" },
};

const partners = [
  {
    title: "Schweizer Universitäten",
    body:
      "Wir arbeiten mit Forschungsgruppen an Schweizer Universitäten zusammen — sowohl an grundlagenwissenschaftlichen Fragen als auch an anwendungsnaher Validierung unserer Rezepturen.",
  },
  {
    title: "Klinische Studienzentren",
    body:
      "Für die klinische Validierung neuer Formulierungen kooperieren wir mit etablierten Studienzentren in der Schweiz und im EU-Raum.",
  },
  {
    title: "Analytische Spezial-Labore",
    body:
      "Bestimmte hoch-spezialisierte Analytik führen wir bei externen Partner-Laboren durch — zur Validierung unserer eigenen Methoden und zur Erweiterung des analytischen Spektrums.",
  },
  {
    title: "Regulatorische Berater:innen",
    body:
      "Für Märkte ausserhalb der Schweiz, EU und USA arbeiten wir mit kuratierten Regulatorik-Partnern, die wir zentral steuern und qualitätssichern.",
  },
];

export default function PartnerPage() {
  return (
    <>
      <section className="border-b border-[var(--color-stone-200)] bg-[var(--color-off-white)]">
        <div className="container-editorial py-20 lg:py-28">
          <div className="max-w-[64ch]">
            <span className="eyebrow">Wissen · 02 · Akademische Partner</span>
            <h1 className="mt-8 text-[clamp(2.5rem,5.5vw,4rem)] leading-[1.05] tracking-[-0.015em]">
              Wir arbeiten nicht alleine.
            </h1>
            <p className="mt-8 text-[19px] leading-[1.55] text-[var(--color-stone-700)]">
              Unsere wissenschaftliche und regulatorische Tiefe basiert auch auf einem kuratierten
              Netzwerk akademischer und spezialisierter Partner. Konkrete Institutionen nennen wir
              nach Rücksprache und unter Beachtung bestehender NDAs.
            </p>
          </div>
        </div>
      </section>

      <section className="section-py border-b border-[var(--color-stone-200)] bg-[var(--color-paper)]">
        <div className="container-editorial">
          <div className="grid gap-px border border-[var(--color-stone-200)] md:grid-cols-2">
            {partners.map((p, i) => (
              <article key={p.title} className="flex flex-col gap-4 bg-[var(--color-paper)] p-8">
                <span className="font-[var(--font-mono)] text-[12px] tracking-[0.1em] text-[var(--color-swiss-red)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[22px] leading-[1.25]">{p.title}</h3>
                <p className="text-[15px] leading-[1.6] text-[var(--color-stone-700)]">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-[var(--color-off-white)]">
        <div className="container-editorial">
          <div className="flex flex-col gap-6 max-w-[60ch]">
            <h2 className="text-[clamp(1.75rem,2.5vw,2.25rem)] leading-[1.2]">
              Akademische Kooperation aufbauen?
            </h2>
            <p className="text-[16.5px] leading-[1.65] text-[var(--color-stone-700)]">
              Wenn Sie an einer wissenschaftlichen Zusammenarbeit interessiert sind — als
              Forschungsgruppe, klinisches Studienzentrum oder spezialisiertes Labor — kontaktieren
              Sie uns direkt.
            </p>
            <div>
              <Button href="/kontakt?type=partnership" variant="primary" arrow>
                Kooperation anfragen
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
