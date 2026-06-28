"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { X, ArrowUpRight } from "lucide-react";
import { Logo } from "@/ui/Logo";
import { Button } from "@/ui/Button";
import { navGroups, type NavGroup } from "@/lib/site";

const CLOSE_DELAY = 120;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function openMenu(i: number) {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setActiveIndex(i);
  }

  function scheduleClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveIndex(null), CLOSE_DELAY);
  }

  function closeMenuNow() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveIndex(null);
  }

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b border-[var(--color-stone-200)]/60 bg-[color-mix(in_srgb,var(--color-off-white)_92%,transparent)] backdrop-blur-md"
        onMouseLeave={scheduleClose}
      >
        <div className="container-editorial flex h-[72px] items-center justify-between gap-8">
          <Logo />

          <nav aria-label="Hauptnavigation" className="hidden lg:flex items-center gap-10">
            {navGroups.map((group, i) => {
              const isActive = activeIndex === i;
              return (
                <div
                  key={group.href}
                  className="relative"
                  onMouseEnter={() => openMenu(i)}
                  onFocus={() => openMenu(i)}
                >
                  <Link
                    href={group.href}
                    aria-haspopup="true"
                    aria-expanded={isActive}
                    className={`relative flex items-center gap-1.5 text-[14px] font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-[var(--color-ink)]"
                        : "text-[var(--color-stone-700)] hover:text-[var(--color-ink)]"
                    }`}
                  >
                    {group.label}
                    <span
                      aria-hidden
                      className={`block h-1 w-1 transition-opacity duration-200 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                      style={{ background: "var(--color-swiss-red)" }}
                    />
                  </Link>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Button href="/kontakt" variant="primary" className="hidden sm:inline-flex">
              Kontakt
            </Button>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Menü öffnen"
              aria-expanded={mobileOpen}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center text-[var(--color-ink)]"
            >
              <span className="sr-only">Menü</span>
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden>
                <path d="M0 1h20M0 7h20M0 13h14" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop dropdown panel */}
        {activeIndex !== null && (
          <DropdownPanel
            group={navGroups[activeIndex]}
            onClose={closeMenuNow}
            onMouseEnter={() => {
              if (closeTimer.current) {
                clearTimeout(closeTimer.current);
                closeTimer.current = null;
              }
            }}
          />
        )}
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col bg-[var(--color-off-white)] lg:hidden overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Menü"
        >
          <div className="container-editorial flex h-[72px] items-center justify-between border-b border-[var(--color-stone-200)] sticky top-0 bg-[var(--color-off-white)] z-10">
            <Logo />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Menü schliessen"
              className="inline-flex h-10 w-10 items-center justify-center text-[var(--color-ink)]"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          <nav
            aria-label="Mobile Hauptnavigation"
            className="container-editorial pt-6 pb-16"
          >
            {navGroups.map((group, i) => (
              <div
                key={group.href}
                className="border-b border-[var(--color-stone-200)] py-5"
              >
                <Link
                  href={group.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-baseline gap-5"
                >
                  <span className="font-[var(--font-mono)] text-[11px] tracking-[0.1em] text-[var(--color-swiss-red)] min-w-[24px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-[var(--font-display)] text-[24px] leading-[1.1] tracking-[-0.01em] text-[var(--color-ink)]">
                    {group.label}
                  </span>
                </Link>
                <ul className="mt-3 ml-[44px] flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-1 text-[14px] text-[var(--color-stone-700)] hover:text-[var(--color-swiss-red)] transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="mt-10">
              <Button
                href="/kontakt"
                variant="primary"
                arrow
                onClick={() => setMobileOpen(false)}
              >
                Kontakt aufnehmen
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

interface DropdownProps {
  group: NavGroup;
  onClose: () => void;
  onMouseEnter: () => void;
}

function DropdownPanel({ group, onClose, onMouseEnter }: DropdownProps) {
  return (
    <div
      className="absolute left-0 right-0 top-full hidden lg:block"
      onMouseEnter={onMouseEnter}
    >
      <div className="border-b border-[var(--color-stone-200)] bg-[var(--color-paper)] shadow-[0_24px_60px_-24px_rgba(11,11,11,0.08)]">
        <div className="container-editorial py-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-3 flex flex-col gap-3">
              <span className="eyebrow">{group.label}</span>
              <p className="font-[var(--font-display)] text-[20px] leading-[1.3] tracking-[-0.005em] text-[var(--color-ink)] max-w-[24ch]">
                {group.intro}
              </p>
              <Link
                href={group.href}
                onClick={onClose}
                className="mt-2 inline-flex items-center gap-2 text-[12.5px] font-medium text-[var(--color-ink)] hover:text-[var(--color-swiss-red)]"
              >
                Übersicht ansehen
                <ArrowUpRight size={14} strokeWidth={1.5} />
              </Link>
            </div>

            <ul
              className={`lg:col-span-9 grid gap-x-10 gap-y-5 ${
                group.items.length > 4 ? "lg:grid-cols-3" : "lg:grid-cols-2"
              }`}
            >
              {group.items.map((item, i) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="group flex items-start gap-4 py-1"
                  >
                    <span className="font-[var(--font-mono)] text-[11px] tracking-[0.1em] text-[var(--color-swiss-red)] pt-1 min-w-[24px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-[var(--font-display)] text-[17px] leading-[1.3] tracking-[-0.005em] text-[var(--color-ink)] group-hover:text-[var(--color-swiss-red)] transition-colors">
                        {item.label}
                      </p>
                      <p className="mt-1 text-[13px] leading-[1.5] text-[var(--color-stone-700)]">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
