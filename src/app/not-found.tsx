import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/ui/Button";

const suggestions = [
  {
    label: "Services",
    href: "/services",
    description: "Die sechs Säulen unseres Full-Service-Angebots.",
  },
  {
    label: "Produkte",
    href: "/produkte",
    description: "Unsere sechs Eigenmarken-Produkte im Überblick.",
  },
  {
    label: "Kontakt",
    href: "/kontakt",
    description: "Sprechen Sie mit unserem Team – wir antworten in 2 Werktagen.",
  },
];

export default function NotFound() {
  return (
    <section className="min-h-[80vh] border-b border-[var(--color-stone-200)] bg-[var(--color-off-white)]">
      <div className="container-editorial flex flex-col py-20 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20 items-start">
          <div className="lg:col-span-7">
            <span
              className="font-[var(--font-mono)] text-[12px] uppercase tracking-[0.18em]"
              style={{ color: "var(--color-swiss-red)" }}
            >
              404 · Seite nicht gefunden
            </span>

            <h1 className="mt-8 text-[clamp(2.75rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.015em]">
              Diese Seite existiert nicht.
              <br />
              <span className="font-[var(--font-display)] italic text-[var(--color-stone-700)]">
                Aber das hier vielleicht.
              </span>
            </h1>

            <p className="mt-8 max-w-[52ch] text-[18px] leading-[1.6] text-[var(--color-stone-700)]">
              Vielleicht ist der Link veraltet, ein Tippfehler hat sich eingeschlichen, oder die
              Seite wurde verschoben. Unten finden Sie die wahrscheinlichsten Wegweiser.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/" variant="primary" arrow>
                Zur Startseite
              </Button>
              <Button href="/kontakt" variant="ghost" arrow>
                Etwas Bestimmtes gesucht?
              </Button>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <span className="eyebrow">Empfehlungen</span>
            <ul className="mt-6 divide-y divide-[var(--color-stone-200)] border-y border-[var(--color-stone-200)]">
              {suggestions.map((s, i) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="group flex items-start justify-between gap-6 py-5"
                  >
                    <div className="flex items-baseline gap-5">
                      <span className="font-[var(--font-mono)] text-[12px] tracking-[0.1em] text-[var(--color-swiss-red)] min-w-[24px]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="font-[var(--font-display)] text-[22px] leading-[1.2] text-[var(--color-ink)] group-hover:text-[var(--color-swiss-red)] transition-colors">
                          {s.label}
                        </p>
                        <p className="mt-1 text-[13.5px] leading-[1.5] text-[var(--color-stone-700)]">
                          {s.description}
                        </p>
                      </div>
                    </div>
                    <ArrowRight
                      size={16}
                      strokeWidth={1.5}
                      className="mt-2 text-[var(--color-stone-400)] group-hover:text-[var(--color-swiss-red)] group-hover:translate-x-1 transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
