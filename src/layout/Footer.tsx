import Link from "next/link";
import { Logo } from "@/ui/Logo";
import { leistungen, site } from "@/lib/site";

const columns = [
  {
    title: "Leistungen",
    links: leistungen.map((l) => ({ label: l.title, href: `/leistungen/${l.slug}` })),
  },
  {
    title: "Expertise",
    links: [
      { label: "Capabilities", href: "/expertise/capabilities" },
      { label: "Prozess", href: "/expertise/prozess" },
      { label: "Qualität", href: "/expertise/qualitaet" },
      { label: "Standort", href: "/expertise/standort" },
    ],
  },
  {
    title: "Unternehmen",
    links: [
      { label: "Story", href: "/unternehmen/story" },
      { label: "Team", href: "/unternehmen/team" },
      { label: "Karriere", href: "/unternehmen/karriere" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
  {
    title: "Wissen",
    links: [
      { label: "Forschung", href: "/wissen/forschung" },
      { label: "Akademische Partner", href: "/wissen/partner" },
      { label: "Insights", href: "/wissen/insights" },
    ],
  },
];

const legalLinks = [
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "Impressum", href: "/impressum" },
  { label: "AGB", href: "/agb" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-stone-200)] bg-[var(--color-off-white)]">
      <div className="container-editorial py-20">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Logo />
            <p className="mt-6 max-w-[28ch] text-[14px] leading-[1.6] text-[var(--color-stone-700)]">
              Schweizer Full-Service-Partner für Longevity-Produkte.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--color-stone-700)] font-[var(--font-sans)]">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-[var(--color-ink)] hover:text-[var(--color-swiss-red)] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[var(--color-stone-200)] pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-[12px] text-[var(--color-stone-400)]">
            © {new Date().getFullYear()} {site.name}. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[12px] text-[var(--color-stone-400)] hover:text-[var(--color-ink)]"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
