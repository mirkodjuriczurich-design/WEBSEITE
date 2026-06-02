import type { Metadata } from "next";
import { LegalPage } from "@/features/shared/LegalPage";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der Swiss Longevity Labs AG nach DSGVO und revDSG.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: true, follow: false },
};

export default function DatenschutzPage() {
  return (
    <LegalPage
      eyebrow="Datenschutz"
      title="Wie wir mit Ihren Daten umgehen."
      lastUpdated="28. Mai 2026"
      sections={[
        {
          heading: "Verantwortliche Stelle",
          body: [
            "Verantwortlich für die Datenverarbeitung auf dieser Website ist die Swiss Longevity Labs AG mit Sitz in der Schweiz. Konkrete Kontaktdaten finden Sie im Impressum.",
            "Bei Fragen zum Datenschutz erreichen Sie uns unter datenschutz@swisslongevitylab.com.",
          ],
        },
        {
          heading: "Erhebung personenbezogener Daten",
          body: [
            "Wir erheben personenbezogene Daten nur dann, wenn Sie uns diese im Rahmen einer Kontaktanfrage, Beratung oder Partnerschaftsanbahnung freiwillig zur Verfügung stellen.",
            "Dies sind in der Regel: Vorname, Nachname, E-Mail-Adresse, optional Telefonnummer und Firma sowie die von Ihnen verfasste Nachricht.",
          ],
        },
        {
          heading: "Zweck der Datenverarbeitung",
          body: [
            "Ihre Daten verwenden wir ausschliesslich zur Bearbeitung Ihrer Anfrage, zur internen Dokumentation des Vorgangs und gegebenenfalls zur Anbahnung einer Geschäftsbeziehung.",
            "Eine Weitergabe an Dritte erfolgt nur, soweit dies gesetzlich erforderlich ist oder Sie ausdrücklich zugestimmt haben.",
          ],
        },
        {
          heading: "Cookies und Tracking",
          body: [
            "Diese Website verwendet ausschliesslich technisch notwendige Cookies. Wir setzen keine Tracking-Cookies und keine Werbe-Cookies ein.",
            "Für Reichweitenmessung nutzen wir privacy-first Analytics (Plausible Analytics) – ohne IP-Speicherung, ohne Cookies, vollständig DSGVO-konform.",
          ],
        },
        {
          heading: "Speicherdauer",
          body: [
            "Wir speichern Ihre Daten so lange, wie dies für die Bearbeitung Ihrer Anfrage und gegebenenfalls einer daraus entstehenden Geschäftsbeziehung notwendig ist, und darüber hinaus nur dann, wenn gesetzliche Aufbewahrungspflichten dies vorsehen.",
          ],
        },
        {
          heading: "Ihre Rechte",
          body: [
            "Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch gegen die Verarbeitung Ihrer Daten.",
            "Für eine entsprechende Anfrage genügt eine formlose E-Mail an datenschutz@swisslongevitylab.com.",
          ],
        },
        {
          heading: "Beschwerderecht",
          body: [
            "Sie haben das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren – in der Schweiz beim Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB), in der EU bei der jeweils zuständigen Landesbehörde.",
          ],
        },
        {
          heading: "Hinweis zu diesem Dokument",
          body: [
            "Diese Datenschutzerklärung ist ein Platzhalter und wird vor dem produktiven Launch durch eine vollständige, rechtsgeprüfte Version ersetzt.",
          ],
        },
      ]}
    />
  );
}
