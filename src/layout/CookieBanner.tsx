"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

const STORAGE_KEY = "sll-cookie-ack-v1";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const ack = window.localStorage.getItem(STORAGE_KEY);
      if (!ack) setVisible(true);
    } catch {
      // localStorage may be unavailable (privacy mode); render anyway
      setVisible(true);
    }
  }, []);

  function acknowledge() {
    try {
      window.localStorage.setItem(STORAGE_KEY, new Date().toISOString());
    } catch {
      /* swallow */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Datenschutz-Hinweis"
      className="fixed bottom-4 left-4 right-4 z-[60] mx-auto max-w-3xl border border-[var(--color-stone-200)] bg-[var(--color-paper)] p-5 shadow-[0_10px_40px_rgba(11,11,11,0.06)] sm:bottom-6 sm:left-6 sm:right-6 sm:p-6"
    >
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <p className="font-[var(--font-mono)] text-[10.5px] uppercase tracking-[0.15em] text-[var(--color-swiss-red)]">
            Datenschutz
          </p>
          <p className="mt-2 text-[14px] leading-[1.55] text-[var(--color-stone-700)]">
            Diese Website setzt keine Tracking- oder Werbe-Cookies. Reichweiten-Messung erfolgt mit{" "}
            <strong className="font-medium text-[var(--color-ink)]">Plausible Analytics</strong> —
            cookieless, ohne IP-Speicherung, DSGVO-konform. Mehr in unserer{" "}
            <Link
              href="/datenschutz"
              className="underline decoration-1 underline-offset-2 hover:text-[var(--color-swiss-red)]"
            >
              Datenschutzerklärung
            </Link>
            .
          </p>
          <div className="mt-4">
            <button
              type="button"
              onClick={acknowledge}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-medium bg-[var(--color-swiss-red)] text-[var(--color-paper)] hover:bg-[var(--color-swiss-red-hover)] transition-colors duration-200"
            >
              Verstanden
            </button>
          </div>
        </div>
        <button
          type="button"
          onClick={acknowledge}
          aria-label="Hinweis schliessen"
          className="text-[var(--color-stone-400)] hover:text-[var(--color-ink)] transition-colors"
        >
          <X size={18} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
