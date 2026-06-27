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
            "[Strasse, Hausnummer]",
            "[PLZ Ort]",
            "Schweiz",
          ],
        },
        {
          heading: "Kontakt",
          body: [
            "Telefon: +41 00 000 00 00",
            "E-Mail: hello@swisslongevitylabs.com",
          ],
        },
        {
          heading: "Eintrag im Handelsregister",
          body: [
            "Handelsregister-Eintragung beim Handelsregisteramt des Kantons [Kanton].",
            "Handelsregisternummer: CHE-XXX.XXX.XXX",
          ],
        },
        {
          heading: "Mehrwertsteuer-Identifikationsnummer",
          body: ["CHE-XXX.XXX.XXX MWST"],
        },
        {
          heading: "Vertretungsberechtigte Personen",
          body: [
            "[Vorname Nachname], Verwaltungsratspräsident:in",
            "[Vorname Nachname], Geschäftsführer:in",
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
        {
          heading: "Hinweis zu diesem Dokument",
          body: [
            "Dieses Impressum ist ein Platzhalter und wird vor dem produktiven Launch mit den finalen Unternehmensangaben gefüllt.",
          ],
        },
      ]}
    />
  );
}
