window.PRESENTER_GUIDE = {
  0: {
    glossary: [
      { term: "CLI", desc: "Command Line Interface — Werkzeug für die Kommandozeile, hier ohne grafische Oberfläche." },
      { term: "Nuxt 4", desc: "Aktuelle Hauptversion des Vue.js-Frameworks Nuxt für Webanwendungen und SSR." },
      { term: "Migration", desc: "Überführung bestehender Software von Nuxt 3 auf Nuxt 4." }
    ]
  },
  1: {
    glossary: [
      { term: "Agenda", desc: "Überblick über den Aufbau der Präsentation in sechs Kapiteln." }
    ]
  },
  2: {
    glossary: [
      { term: "FIAE", desc: "Fachinformatiker für Anwendungsentwicklung — IHK-Ausbildungsberuf." },
      { term: "Fullstack Developer", desc: "Entwicklung von Frontend und Backend; in deiner Ausbildung Schwerpunkt auf Anwendungsentwicklung." },
      { term: "PIM", desc: "Product Information Management — Verwaltung und Ausspielung von Produktdaten." }
    ]
  },
  3: {
    glossary: [
      { term: "Projektumfeld", desc: "Organisatorischer und technischer Rahmen: Zielgruppe, Prozesse, Schnittstellen, Technologie." },
      { term: "Organisatorische Schnittstelle", desc: "Menschliche Ansprechpartner im Projekt — hier: Projektbetreuer." },
      { term: "Technische Schnittstelle", desc: "Systeme, mit denen das Werkzeug arbeitet — z. B. Git/GitHub, Nuxt-Projekte, Node/npm." },
      { term: "Zielgruppe", desc: "Adressaten des Werkzeugs — Development-Team, nicht zwingend aktive Projektbeteiligte." },
      { term: "Projektbetreuer", desc: "Einzige direkte menschliche Schnittstelle: Begleitung, Review und Abnahme." }
    ]
  },
  4: {
    glossary: [
      { term: "EOL (End of Life)", desc: "Ende des offiziellen Supports — für Nuxt 3 zum 31.07.2026; danach keine Sicherheitsupdates mehr." },
      { term: "Nuxt 3 / Nuxt 4", desc: "Versionen des Nuxt-Frameworks; Nuxt 4 bringt Breaking Changes und neue Projektstrukturen." },
      { term: "Modul-Inventar", desc: "Liste aller eingesetzten Nuxt-Module mit Version und Migrationsstatus." },
      { term: "Release Notes", desc: "Offizielle Änderungsdokumentation einer Software-Version." }
    ]
  },
  5: {
    glossary: [
      { term: "Abgrenzung", desc: "Bewusster Ausschluss von Funktionen — zeigt, was das Projekt nicht leisten soll." },
      { term: "Teilautomatisierung", desc: "Wiederkehrende Schritte automatisiert, Entscheidungen beim Menschen." },
      { term: "Orchestrierung", desc: "Steuerung und Reihenfolge vorhandener Tools — hier ohne eigene Migrations-Engine." },
      { term: "Codemods", desc: "Automatisierte Code-Transformationen, z. B. durch offizielle Nuxt-Werkzeuge." }
    ]
  },
  6: {
    glossary: [
      { term: "Make-or-Buy", desc: "Entscheidung zwischen Eigenentwicklung und Anschaffung externer Lösung." },
      { term: "Amortisation", desc: "Zeitpunkt, ab dem Einsparungen die einmaligen Entwicklungskosten ausgleichen." },
      { term: "Stundensatz", desc: "Kalkulatorischer Wert pro Arbeitsstunde — hier 110 € (Auszubildender) und 170 € (Entwickler)." }
    ]
  },
  7: {
    glossary: [
      { term: "Wasserfallmodell", desc: "Phasenorientiertes Vorgehen: Analyse → Entwurf → Implementierung → Test → Doku." },
      { term: "Erweitertes Wasserfallmodell", desc: "Klare Phasen, aber iterative Feinjustierung innerhalb der Implementierung an Testprojekten." },
      { term: "Risikopuffer", desc: "Eingeplante Reservezeit (8 h) für unvorhergesehene Anpassungen, z. B. Agenten-Pivot." },
      { term: "@clack/prompts", desc: "Node.js-Bibliothek für interaktive CLI-Eingaben (Auswahl, Bestätigung)." }
    ]
  },
  8: {
    glossary: [
      { term: "Modulare Architektur", desc: "Getrennte Bausteine (CLI, Analyse, Modul-Workflow …) mit klaren Schnittstellen." },
      { term: "nuxi upgrade", desc: "Offizielles Nuxt-CLI-Kommando zum Version-Upgrade." },
      { term: "Typecheck", desc: "Statische Typprüfung via TypeScript — Validierung nach Migrationsschritten." },
      { term: "Artefakte", desc: "Dateien wie Logs, Reports und Inventare, die ein Lauf erzeugt." }
    ]
  },
  9: {
    glossary: [
      { term: "Projektanalyse", desc: "Automatische Erkennung von Nuxt-Version, Modulen, Package Manager und Projektstruktur." },
      { term: "Package Manager", desc: "npm, pnpm, yarn oder bun — verwaltet Abhängigkeiten im Node-Projekt." },
      { term: "future.compatibilityVersion", desc: "Nuxt-Konfiguration zur schrittweisen Vorbereitung auf Version 4." },
      { term: "Workflow", desc: "Auswählbarer Ablauf: nur Kern-Upgrade, nur Module oder kombiniert." }
    ]
  },
  10: {
    glossary: [
      { term: "Modul-Workflow", desc: "Strukturierter Ablauf zum Inventarisieren und Bearbeiten offizieller Nuxt-Module." },
      { term: "Playbook / Inventar", desc: "Generierter Bericht über Module, Versionen und Migrationshinweise." },
      { term: "Coding Agent", desc: "KI-gestütztes Werkzeug in der IDE/CLI für begrenzte Folgeaufgaben — nicht autonom." },
      { term: "Scope", desc: "Eingegrenzter Auftrag an den Agenten — kein generelles Refactoring." }
    ]
  },
  11: {
    glossary: [
      { term: "Validierung", desc: "Prüfung durch Typecheck und Build nach Migrationsschritten." },
      { term: "Exitcodes", desc: "Rückgabewerte von Programmen — 0 = Erfolg, ungleich 0 = Fehler." },
      { term: "Happy Path", desc: "Idealfall ohne Fehler — reicht für Tests nicht aus." },
      { term: "Qualitätssicherung (QS)", desc: "Maßnahmen zur Sicherstellung der Softwarequalität im Prozess." }
    ]
  },
  12: {
    glossary: [
      { term: "Soll-Ist-Vergleich", desc: "Abgleich geplanter Projektziele (Soll) mit dem tatsächlichen Ergebnis (Ist)." },
      { term: "Pflichtenheft", desc: "Dokument mit Anforderungen und Zielen — Grundlage der Abnahme." },
      { term: "Abnahme", desc: "Formale Bestätigung durch den Projektbetreuer nach erfolgreichen Testläufen." }
    ]
  },
  13: {
    glossary: [
      { term: "Lessons Learned", desc: "Erkenntnisse aus dem Projektverlauf für künftige Arbeit." },
      { term: "npm-Paket", desc: "Veröffentlichung als installierbares Node-Paket im Unternehmen — geplanter Ausblick." },
      { term: "Prompt Engineering", desc: "Gezielte Formulierung von Anweisungen an KI-Agenten für brauchbare Ergebnisse." }
    ]
  },
  14: {
    glossary: []
  }
};
