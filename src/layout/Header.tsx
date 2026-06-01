"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Logo } from "@/ui/Logo";
import { Button } from "@/ui/Button";
import { nav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[var(--color-stone-200)]/60 bg-[color-mix(in_srgb,var(--color-off-white)_92%,transparent)] backdrop-blur-md">
        <div className="container-editorial flex h-[72px] items-center justify-between gap-8">
          <Logo />

          <nav aria-label="Hauptnavigation" className="hidden lg:flex items-center gap-10">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[14px] font-medium text-[var(--color-stone-700)] hover:text-[var(--color-ink)] transition-colors duration-200 relative"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button href="/kontakt" variant="primary" className="hidden sm:inline-flex">
              Kontakt
            </Button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Menü öffnen"
              aria-expanded={open}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center text-[var(--color-ink)]"
            >
              <span className="sr-only">Menü</span>
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden>
                <path d="M0 1h20M0 7h20M0 13h14" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      {open && (
        <div
          className="fixed inset-0 z-[60] flex flex-col bg-[var(--color-off-white)] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Menü"
        >
          <div className="container-editorial flex h-[72px] items-center justify-between border-b border-[var(--color-stone-200)]">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Menü schliessen"
              className="inline-flex h-10 w-10 items-center justify-center text-[var(--color-ink)]"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          <nav
            aria-label="Mobile Hauptnavigation"
            className="container-editorial flex flex-col gap-0 overflow-y-auto pt-8 pb-12"
          >
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline justify-between border-b border-[var(--color-stone-200)] py-5"
              >
                <span className="flex items-baseline gap-5">
                  <span className="font-[var(--font-mono)] text-[11px] tracking-[0.1em] text-[var(--color-swiss-red)] min-w-[24px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-[var(--font-display)] text-[28px] leading-[1.1] tracking-[-0.01em] text-[var(--color-ink)] group-hover:text-[var(--color-swiss-red)] transition-colors">
                    {item.label}
                  </span>
                </span>
              </Link>
            ))}

            <div className="mt-10">
              <Button
                href="/kontakt"
                variant="primary"
                arrow
                className="w-full justify-center sm:w-auto"
                onClick={() => setOpen(false)}
              >
                Kontakt aufnehmen
              </Button>
            </div>

            <p className="mt-12 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-[var(--color-stone-400)]">
              Swiss Longevity Labs AG · Schweiz
            </p>
          </nav>
        </div>
      )}
    </>
  );
}
