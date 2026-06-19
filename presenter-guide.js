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
      { term: "Rein manuelle Migration", desc: "Jeder Schritt wird per Hand ausgeführt — Recherche, Anpassung, Validierung ohne geführten Standard." },
      { term: "Prompting", desc: "Formulierung von Anweisungen an Coding-Agenten — ohne Standard entstehen unterschiedliche Ergebnisse." },
      { term: "Modul-Inventar", desc: "Liste aller eingesetzten Nuxt-Module mit Version und Migrationsstatus." }
    ]
  },
  5: {
    glossary: [
      { term: "Abgrenzung", desc: "Bewusster Ausschluss von Funktionen — zeigt, was das Projekt nicht leisten soll." },
      { term: "Teilautomatisierung", desc: "Wiederkehrende Schritte automatisiert, Entscheidungen beim Menschen." },
      { term: "Orchestrierung", desc: "Steuerung und Reihenfolge vorhandener Tools — hier ohne eigene Migrations-Engine." },
      { term: "Scope", desc: "Klare Begrenzung optionaler Agenten auf definierte Folgeaufgaben — kein generelles Refactoring." },
      { term: "Codemods", desc: "Automatisierte Code-Transformationen, z. B. durch offizielle Nuxt-Werkzeuge." }
    ]
  },
  6: {
    glossary: [
      { term: "Projektkosten", desc: "Einmalige Entwicklungskosten — hier 9.735 € laut Projektdokumentation." },
      { term: "Stundensatz", desc: "Kalkulatorischer Wert pro Arbeitsstunde — 110 €/h (Auszubildender) und 170 €/h (Entwickler)." },
      { term: "Gesamtkosten", desc: "Summe aus Entwicklung (8.800 €) und Betreuung (935 €)." }
    ]
  },
  7: {
    glossary: [
      { term: "Amortisation", desc: "Zeitpunkt, ab dem Einsparungen die einmaligen Entwicklungskosten ausgleichen — ab ca. 20. Migration." },
      { term: "Zeitersparnis", desc: "3 Stunden pro Migration (8 h manuell minus ca. 5 h mit CLI)." },
      { term: "Make-or-Buy", desc: "Entscheidung zwischen Eigenentwicklung und Anschaffung externer Lösung — hier Eigenentwicklung." }
    ]
  },
  8: {
    glossary: [
      { term: "Wasserfallmodell", desc: "Klassisch phasenorientiert: Analyse → Entwurf → Implementierung → Test → Dokumentation. Jede Phase wird weitgehend abgeschlossen, bevor die nächste startet — gut bei festen Anforderungen." },
      { term: "Erweitertes Wasserfallmodell", desc: "Wie Wasserfall mit klaren Phasen, aber iterative Feinjustierung innerhalb der Implementierung an Test-Repositories — Erkenntnisse fließen zurück in Code und Planung." },
      { term: "Scrum", desc: "Agiles Framework in festen Sprints (1–4 Wochen): Product Backlog → Sprint Planning → Daily Scrum → Sprint Review → Retrospektive. Anforderungen können sich laufend anpassen." },
      { term: "Kanban", desc: "Flussorientiert ohne Sprints: Aufgaben auf einem Board (To Do → In Arbeit → Erledigt), WIP-Limits begrenzen parallele Arbeit. Kontinuierliche Lieferung statt Sprint-Rhythmus." },
      { term: "V-Modell XT", desc: "Deutscher Standard für IT-Projekte: links Spezifikationsstufen (Anforderungen → System → Software), rechts passende Teststufen — zusammen ein V. Jede Stufe hat eine zugehörige Prüfstufe." },
      { term: "Spiralmodell", desc: "Risikogetriebene Zyklen: Ziel festlegen → Risiken analysieren → Prototyp/Engineering → Bewerten → nächste Runde. Sinnvoll bei hoher technischer Unsicherheit, planungsintensiver." },
      { term: "Warum hier Wasserfall?", desc: "Pflichtenheft, IHK-Dokumentation und feste Projektziele von Beginn an — planbare Phasen passen besser als Scrum/Kanban. Iteration nur dort, wo technische Details an echten Repos validiert werden mussten." },
      { term: "Projektumfang", desc: "Geplanter Gesamtaufwand 80 Stunden — laut Planung eingehalten." },
      { term: "Risikopuffer", desc: "8 h Reserve für unvorhergesehene Anpassungen im Projektverlauf." }
    ]
  },
  9: {
    glossary: [
      { term: "Modulare Architektur", desc: "Fünf getrennte Bausteine mit klaren Schnittstellen — im Schichtendiagramm dargestellt." },
      { term: "Orchestrierung", desc: "Steuerung offizieller Nuxt-Kommandos — das Werkzeug ersetzt sie nicht." },
      { term: "nuxi upgrade", desc: "Offizielles Nuxt-CLI-Kommando zum Version-Upgrade." },
      { term: "Stateless", desc: "Keine Datenbank — Laufzeitdaten aus package.json, Lockfiles und Kommandoausgaben." }
    ]
  },
  10: {
    glossary: [
      { term: "Projektanalyse", desc: "Automatische Erkennung von Nuxt-Version, Modulen, Package Manager und Projektstruktur." },
      { term: "Package Manager", desc: "npm, pnpm, yarn oder bun — verwaltet Abhängigkeiten im Node-Projekt." },
      { term: "future.compatibilityVersion", desc: "Nuxt-Konfiguration zur schrittweisen Vorbereitung auf Version 4." },
      { term: "Workflow", desc: "Auswählbarer Ablauf: nur Kern-Upgrade, nur Module oder kombiniert." }
    ]
  },
  11: {
    glossary: [
      { term: "Modul-Workflow", desc: "Strukturierter Ablauf zum Inventarisieren und Bearbeiten offizieller Nuxt-Module." },
      { term: "Playbook / Inventar", desc: "Generierter Bericht über Module, Versionen und Migrationshinweise." },
      { term: "Coding Agent", desc: "KI-gestütztes Werkzeug in der IDE/CLI für begrenzte Folgeaufgaben — nicht autonom." },
      { term: "Scope", desc: "Eingegrenzter Auftrag an den Agenten — kein generelles Refactoring." }
    ]
  },
  12: {
    glossary: [
      { term: "Validierung", desc: "Prüfung durch Typecheck und Build nach Migrationsschritten." },
      { term: "Exitcodes", desc: "Rückgabewerte von Programmen — 0 = Erfolg, ungleich 0 = Fehler." },
      { term: "Happy Path", desc: "Idealfall ohne Fehler — reicht für Tests nicht aus." },
      { term: "Qualitätssicherung (QS)", desc: "Maßnahmen zur Sicherstellung der Softwarequalität im Prozess." }
    ]
  },
  13: {
    glossary: [
      { term: "Soll-Ist-Vergleich", desc: "Abgleich geplanter Projektziele (Soll) mit dem tatsächlichen Ergebnis (Ist)." },
      { term: "Pflichtenheft", desc: "Dokument mit Anforderungen und Zielen — Grundlage der Abnahme." },
      { term: "Abnahme", desc: "Formale Bestätigung durch den Projektbetreuer nach erfolgreichen Testläufen." }
    ]
  },
  14: {
    glossary: [
      { term: "Lessons Learned", desc: "Erkenntnisse aus dem Projektverlauf für künftige Arbeit." },
      { term: "npm-Paket", desc: "Veröffentlichung als installierbares Node-Paket im Unternehmen — geplanter Ausblick." },
      { term: "Prompt Engineering", desc: "Gezielte Formulierung von Anweisungen an KI-Agenten für brauchbare Ergebnisse." }
    ]
  },
  15: {
    glossary: []
  }
};
