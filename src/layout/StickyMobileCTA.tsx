"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.4);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-stone-200)] bg-[var(--color-paper)] p-3 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="container-editorial flex gap-3">
        <Link
          href="/kontakt?type=enquiry"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[var(--color-swiss-red)] px-5 py-3 text-[14px] font-medium text-[var(--color-paper)]"
        >
          <span aria-hidden>▸</span> Anfrage starten
        </Link>
        <Link
          href="/kontakt?type=consultation"
          className="inline-flex items-center justify-center border border-[var(--color-ink)] px-4 py-3 text-[13px] font-medium text-[var(--color-ink)]"
        >
          Beratung
        </Link>
      </div>
    </div>
  );
}
