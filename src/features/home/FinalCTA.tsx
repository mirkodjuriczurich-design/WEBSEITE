import { Button } from "@/ui/Button";

export function FinalCTA() {
  return (
    <section
      className="section-py text-[var(--color-paper)]"
      style={{ background: "var(--color-navy)" }}
    >
      <div className="container-editorial">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow" style={{ color: "#B8C2D6" }}>
              Bereit anzufangen
            </span>
            <h2
              className="mt-6 max-w-[20ch] text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.015em]"
              style={{ color: "var(--color-paper)" }}
            >
              Bauen wir die nächste Longevity-Marke gemeinsam.
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start gap-4">
            <p className="text-[17px] leading-[1.6]" style={{ color: "#B8C2D6" }}>
              Sprechen Sie mit unserem Team über Ihr Vorhaben. Wir melden uns innerhalb von zwei
              Werktagen.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button href="/kontakt?type=partnership" variant="primary" arrow>
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
  );
}
