import { colors } from "@/design/tokens";
import { Check, X } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";

interface Row {
  criterion: string;
  generic: string;
  sll: string;
}

const rows: Row[] = [
  {
    criterion: "Wertschöpfungstiefe",
    generic: "Eine Stufe, meist nur Lohnproduktion oder nur Branding",
    sll: "Alle sechs Stufen unter einem Schweizer Dach",
  },
  {
    criterion: "Wissenschaftliche Eigenständigkeit",
    generic: "Externe R&D, fremde Studienlage, eingekaufte Rezepturen",
    sll: "Eigenes R&D-Team, eigene Labors, eigene publizierte Forschung",
  },
  {
    criterion: "Regulatorische Tiefe",
    generic: "Compliance reaktiv, wenn Behörde nachfragt",
    sll: "Regulatorik proaktiv, Dossier vor Submission validiert",
  },
  {
    criterion: "Produktions-Standort",
    generic: "Verteilt auf Niedriglohnländer, Lieferketten fragmentiert",
    sll: "100% Schweiz: Forschung, Produktion, QA an einem Ort",
  },
  {
    criterion: "Skalierungs-Brüche",
    generic: "Re-Qualifizierung beim Wechsel Pilot → Serie",
    sll: "Von der Pilot-Charge bis zur globalen Skalierung, ohne Standort- oder Spec-Wechsel",
  },
  {
    criterion: "Eigenmarken-Beleg",
    generic: "Nur CDMO, keine eigenen Produkte am Markt",
    sll: "Drei eigene Longevity-Produkte als Beweis der Substanz",
  },
];

export function Comparison() {
  return (
    <section
      className="section-py border-b border-[var(--color-stone-200)]"
      style={{ background: colors.offWhite }}
    >
      <div className="container-editorial">
        <FadeUp className="max-w-[64ch]">
          <h2 className="text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.01em]">
            Was Sie riskieren, wenn der Partner nicht liefert.
          </h2>
          <p className="mt-6 text-[18px] leading-[1.6] text-[var(--color-stone-700)]">
            Viele Hersteller versprechen Schweizer Qualität. Substanziell unterscheiden wir uns
            in sechs Dimensionen, die in der Praxis darüber entscheiden, ob ein
            Longevity-Produkt zehn Jahre Markt überlebt - oder nicht.
          </p>
        </FadeUp>

        {/* Desktop: 3-column comparison */}
        <div className="mt-16 hidden overflow-hidden border border-[var(--color-stone-200)] lg:block">
          {/* Header row */}
          <div
            className="grid grid-cols-[1.2fr_1fr_1fr] gap-px"
            style={{ background: colors.stone200 }}
          >
            <div
              className="px-8 py-6 font-[var(--font-mono)] text-[14px] uppercase tracking-[0.15em] text-[var(--color-stone-400)]"
              style={{ background: colors.offWhite }}
            >
              Kriterium
            </div>
            <div
              className="px-8 py-6 font-[var(--font-mono)] text-[14px] uppercase tracking-[0.15em]"
              style={{ background: colors.stone100, color: colors.stone400 }}
            >
              Typischer CDMO
            </div>
            <div
              className="flex items-center gap-3 px-8 py-6"
              style={{ background: colors.navy }}
            >
              <span
                aria-hidden
                className="inline-block h-2 w-2"
                style={{ background: colors.swissRed }}
              />
              <span
                className="font-[var(--font-mono)] text-[14px] uppercase tracking-[0.15em]"
                style={{ color: colors.navySoft }}
              >
                Swiss Longevity Labs
              </span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row) => (
            <div
              key={row.criterion}
              className="grid grid-cols-[1.2fr_1fr_1fr] gap-px"
              style={{ background: colors.stone200 }}
            >
              <div
                className="flex items-center px-8 py-7 font-[var(--font-display)] text-[19px] leading-[1.3] tracking-[-0.005em]"
                style={{ background: colors.paper, color: colors.ink }}
              >
                {row.criterion}
              </div>
              <div
                className="flex items-start gap-3 px-8 py-7 text-[14.5px] leading-[1.6]"
                style={{ background: colors.paper, color: colors.stone700 }}
              >
                <X
                  size={16}
                  strokeWidth={1.5}
                  className="mt-1 flex-shrink-0"
                  style={{ color: colors.stone400 }}
                />
                <span>{row.generic}</span>
              </div>
              <div
                className="flex items-start gap-3 px-8 py-7 text-[14.5px] leading-[1.6]"
                style={{ background: colors.paper, color: colors.ink }}
              >
                <Check
                  size={16}
                  strokeWidth={2}
                  className="mt-1 flex-shrink-0"
                  style={{ color: colors.swissRed }}
                />
                <span>{row.sll}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile / tablet: stacked cards */}
        <div className="mt-12 grid gap-6 lg:hidden">
          {rows.map((row, i) => (
            <article
              key={row.criterion}
              className="border border-[var(--color-stone-200)] bg-[var(--color-paper)]"
            >
              <div className="border-b border-[var(--color-stone-200)] px-6 py-4">
                <span className="font-[var(--font-mono)] text-[11px] tracking-[0.1em] text-[var(--color-swiss-red)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-[20px] leading-[1.25] tracking-[-0.005em]">
                  {row.criterion}
                </h3>
              </div>
              <div className="grid gap-4 px-6 py-5 sm:grid-cols-2 sm:gap-8">
                <div>
                  <div className="flex items-center gap-2 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-[var(--color-stone-400)]">
                    <X size={12} strokeWidth={1.5} /> Typischer CDMO
                  </div>
                  <p className="mt-2 text-[14px] leading-[1.55] text-[var(--color-stone-700)]">
                    {row.generic}
                  </p>
                </div>
                <div>
                  <div
                    className="flex items-center gap-2 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.15em]"
                    style={{ color: colors.swissRed }}
                  >
                    <Check size={12} strokeWidth={2} /> SLL
                  </div>
                  <p className="mt-2 text-[14px] leading-[1.55] text-[var(--color-ink)]">
                    {row.sll}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
