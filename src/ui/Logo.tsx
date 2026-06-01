import Link from "next/link";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-3 group" aria-label="Swiss Longevity Labs AG — zur Startseite">
      <span
        className="inline-flex h-10 w-10 items-center justify-center font-[var(--font-display)] text-[var(--color-paper)] text-[20px] leading-none font-medium"
        style={{ background: "var(--color-swiss-red)" }}
        aria-hidden
      >
        LL
      </span>
      <span
        className="hidden sm:inline-flex flex-col leading-[1.1]"
        style={{ color: inverse ? "var(--color-paper)" : "var(--color-ink)" }}
      >
        <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "var(--color-swiss-red)" }}>
          Swiss
        </span>
        <span className="text-[11px] font-semibold tracking-[0.18em] uppercase">
          Longevity Labs <span style={{ color: "var(--color-swiss-red)" }}>AG</span>
        </span>
      </span>
    </Link>
  );
}
