import { Button } from "@/ui/Button";

interface Props {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
}

export function PageStub({
  eyebrow,
  title,
  description,
  primaryHref = "/kontakt",
  primaryLabel = "Anfrage starten",
}: Props) {
  return (
    <section className="border-b border-[var(--color-stone-200)] bg-[var(--color-off-white)]">
      <div className="container-editorial py-24 lg:py-32">
        <div className="max-w-[60ch]">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-8 text-[clamp(2.5rem,5.5vw,4rem)] leading-[1.05] tracking-[-0.015em]">
            {title}
          </h1>
          <p className="mt-8 text-[19px] leading-[1.55] text-[var(--color-stone-700)]">
            {description}
          </p>
          <p className="mt-6 inline-flex items-center gap-3 border-l-2 border-[var(--color-swiss-red)] pl-4 text-[14px] text-[var(--color-stone-400)]">
            <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em]">
              In Entwicklung
            </span>
            <span>· dieser Bereich wird in der nächsten Phase ausgebaut</span>
          </p>
          <div className="mt-10">
            <Button href={primaryHref} variant="primary" arrow>
              {primaryLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
