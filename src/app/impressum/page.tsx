import type { Metadata } from "next";
import { LegalPage } from "@/features/shared/LegalPage";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Swiss Longevity Labs AG.",
  alternates: { canonical: "/impressum" },
  robots: { index: true, follow: false },
};

export default function ImpressumPage() {
  return (
    <LegalPage
      eyebrow="Impressum"
      title="Angaben gemäss Schweizer Recht."
      lastUpdated="27. Juni 2026"
      sections={[
        {
          heading: "Anbieterin",
          body: [
            "Swiss Longevity Labs AG",
            "Sihlbruggstrasse 105",
            "6340 Baar",
            "Schweiz",
          ],
        },
        {
          heading: "Kontakt",
          body: [
            "E-Mail: miroslav.vuletic@swisslongevitylabs.ch",
          ],
        },
        {
          heading: "Handelsregisterauszugsnummer",
          body: [
            "CHE-427.358.353",
          ],
        },
        {
          heading: "Mehrwertsteuer-Identifikationsnummer",
          body: ["CHE-XXX.XXX.XXX MWST"],
        },
        {
          heading: "Vertretungsberechtigte Personen",
          body: [
            "Miroslav Vuletic, Geschäftsführer",
          ],
        },
        {
          heading: "Haftungsausschluss",
          body: [
            "Der Inhalt dieser Website wurde mit grösstmöglicher Sorgfalt erstellt. Wir übernehmen jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte.",
            "Für direkte oder indirekte Schäden, die sich aus der Nutzung dieser Website ergeben, übernehmen wir keine Haftung – soweit gesetzlich zulässig.",
          ],
        },
        {
          heading: "Urheberrecht",
          body: [
            "Alle Inhalte dieser Website (Texte, Bilder, Grafiken, Layouts, Quellcode) sind urheberrechtlich geschützt. Eine Verwendung ausserhalb der vorgesehenen Nutzung der Website bedarf der vorherigen schriftlichen Zustimmung.",
          ],
        },
      ]}
    />
  );
}
