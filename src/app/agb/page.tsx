import type { Metadata } from "next";
import { LegalPage } from "@/features/shared/LegalPage";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen",
  description: "Allgemeine Geschäftsbedingungen der Swiss Longevity Labs AG.",
  alternates: { canonical: "/agb" },
  robots: { index: true, follow: false },
};

export default function AGBPage() {
  return (
    <LegalPage
      eyebrow="AGB"
      title="Allgemeine Geschäftsbedingungen."
      lastUpdated="28. Mai 2026"
      sections={[
        {
          heading: "Geltungsbereich",
          body: [
            "Diese Allgemeinen Geschäftsbedingungen (AGB) regeln das Verhältnis zwischen der Swiss Longevity Labs AG (nachfolgend „SLL“) und ihren Geschäfts- und Privatkund:innen (nachfolgend „Kund:innen“).",
            "Mit Beauftragung einer Leistung oder Bestellung eines Produkts akzeptieren Kund:innen diese AGB in ihrer zum Zeitpunkt der Beauftragung gültigen Fassung.",
          ],
        },
        {
          heading: "Vertragsschluss",
          body: [
            "Verträge kommen durch schriftliche Auftragsbestätigung durch SLL zustande. Mündliche Nebenabreden sind nur dann verbindlich, wenn sie schriftlich bestätigt wurden.",
          ],
        },
        {
          heading: "Leistungsumfang",
          body: [
            "Der konkrete Leistungsumfang ergibt sich aus der jeweiligen Auftragsbestätigung. Allgemeine Beschreibungen auf dieser Website sind unverbindlich.",
          ],
        },
        {
          heading: "Preise und Zahlungsbedingungen",
          body: [
            "Alle Preise verstehen sich in Schweizer Franken zuzüglich Mehrwertsteuer, sofern nicht ausdrücklich anders ausgewiesen.",
            "Zahlungen sind innerhalb von 30 Tagen ab Rechnungsdatum ohne Abzug fällig, sofern keine abweichende Vereinbarung getroffen wurde.",
          ],
        },
        {
          heading: "Vertraulichkeit",
          body: [
            "Beide Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit erhaltenen vertraulichen Informationen – insbesondere Rezepturen, Geschäftspläne und technische Daten – vertraulich zu behandeln.",
            "Auf Wunsch schliessen wir eine separate Vertraulichkeitsvereinbarung (NDA) ab; dies ist im B2B-Bereich auch unsere Standardpraxis.",
          ],
        },
        {
          heading: "Gewährleistung",
          body: [
            "SLL gewährleistet, dass die erbrachten Leistungen und gelieferten Produkte den vereinbarten Spezifikationen und den anwendbaren regulatorischen Anforderungen entsprechen.",
            "Gewährleistungsansprüche müssen unverzüglich nach Entdeckung des Mangels, spätestens jedoch innerhalb der gesetzlichen Fristen geltend gemacht werden.",
          ],
        },
        {
          heading: "Haftung",
          body: [
            "Die Haftung von SLL ist – ausser bei Vorsatz und grober Fahrlässigkeit – auf den vertragstypisch vorhersehbaren Schaden beschränkt.",
            "Eine Haftung für entgangenen Gewinn, mittelbare Schäden oder Folgeschäden wird im gesetzlich zulässigen Rahmen ausgeschlossen.",
          ],
        },
        {
          heading: "Anwendbares Recht und Gerichtsstand",
          body: [
            "Auf alle Rechtsbeziehungen findet ausschliesslich Schweizer Recht Anwendung – unter Ausschluss des UN-Kaufrechts.",
            "Gerichtsstand ist der Sitz der SLL. SLL behält sich vor, Kund:innen auch an deren Sitz oder Wohnsitz zu belangen.",
          ],
        },
        {
          heading: "Hinweis zu diesem Dokument",
          body: [
            "Diese AGB sind ein Platzhalter und werden vor dem produktiven Launch durch eine vollständige, rechtsgeprüfte Version ersetzt.",
          ],
        },
      ]}
    />
  );
}
