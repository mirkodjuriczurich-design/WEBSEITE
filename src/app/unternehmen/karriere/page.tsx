import type { Metadata } from "next";
import { Button } from "@/ui/Button";

export const metadata: Metadata = {
  title: "Karriere",
  description: "Offene Positionen und Initiativbewerbungen bei Swiss Longevity Labs AG.",
  alternates: { canonical: "/unternehmen/karriere" },
};

const principles = [
  {
    title: "Substanz vor Tempo",
    body:
      "Wir arbeiten an Themen, die Substanz brauchen – und nehmen uns die Zeit, die sie verdienen. Wer hier glücklich ist, mag gute Arbeit lieber als schnelle.",
  },
  {
    title: "Verantwortung pro Rolle",
    body:
      "Jede Rolle hat einen klaren Verantwortungsbereich. Innerhalb dieses Bereichs entscheiden Sie. Wir mikromanagen nicht.",
  },
  {
    title: "Lernen als Standard",
    body:
      "Wissenschaft und Regulatorik verändern sich. Wir budgetieren Lernzeit für jedes Teammitglied und unterstützen Weiterbildungen aktiv.",
  },
  {
    title: "Schweizer Arbeitskultur",
    body:
      "Direkt, präzise, kein Politikbusiness. Was zu sagen ist, wird gesagt. Wer Konflikten ausweicht, ist hier am falschen Ort.",
  },
];

export default function KarrierePage() {
  return (
    <>
      <section className="border-b border-[var(--color-stone-200)] bg-[var(--color-off-white)]">
        <div className="container-editorial py-20 lg:py-28">
          <div className="max-w-[64ch]">
            <span className="eyebrow">Unternehmen · 03 · Karriere</span>
            <h1 className="mt-8 text-[clamp(2.5rem,5.5vw,4rem)] leading-[1.05] tracking-[-0.015em]">
              Wir suchen Menschen, die Substanz mögen.
            </h1>
            <p className="mt-8 text-[19px] leading-[1.55] text-[var(--color-stone-700)]">
              Aktuelle offene Stellen veröffentlichen wir laufend. Wenn Sie sich initiativ
              bewerben möchten, lesen Sie zuerst, wie wir hier arbeiten – und entscheiden Sie dann,
              ob das zu Ihnen passt.
            </p>
          </div>
        </div>
      </section>

      <section className="section-py border-b border-[var(--color-stone-200)] bg-[var(--color-paper)]">
        <div className="container-editorial">
          <div className="max-w-[60ch]">
            <span className="eyebrow">Wie wir arbeiten</span>
            <h2 className="mt-6 text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.15]">
              Vier Prinzipien, die wir tatsächlich leben.
            </h2>
          </div>

          <div className="mt-12 grid gap-px border border-[var(--color-stone-200)] md:grid-cols-2">
            {principles.map((p, i) => (
              <article key={p.title} className="flex flex-col gap-4 bg-[var(--color-paper)] p-8">
                <span className="font-[var(--font-mono)] text-[12px] tracking-[0.1em] text-[var(--color-swiss-red)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[22px] leading-[1.25]">{p.title}</h3>
                <p className="text-[15px] leading-[1.65] text-[var(--color-stone-700)]">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-[var(--color-off-white)]">
        <div className="container-editorial">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <span className="eyebrow">Offene Positionen</span>
              <h2 className="mt-6 text-[clamp(1.875rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.01em]">
                Aktuell keine ausgeschriebenen Stellen – initiative Bewerbungen sind willkommen.
              </h2>
              <p className="mt-6 text-[16.5px] leading-[1.65] text-[var(--color-stone-700)]">
                Schreiben Sie uns kurz, wer Sie sind, was Sie können und warum Sie ausgerechnet zu
                uns passen würden. Lebenslauf reicht. Auf Standard-Motivations-Schreiben verzichten
                wir.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-4">
              <Button href="/kontakt?type=other" variant="primary" arrow>
                Initiativ bewerben
              </Button>
              <p className="text-[13px] text-[var(--color-stone-400)]">
                Wir antworten auf jede Bewerbung – typisch innerhalb von zwei Wochen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
