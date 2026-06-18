window.PRESENTER_GUIDE = {
  0: {
    glossary: [
      { term: "CLI", desc: "Command Line Interface — Werkzeug für die Kommandozeile, hier ohne grafische Oberfläche." },
      { term: "Nuxt 4", desc: "Aktuelle Hauptversion des Vue.js-Frameworks Nuxt für Webanwendungen und SSR." },
      { term: "Migration", desc: "Überführung bestehender Software von Nuxt 3 auf Nuxt 4." }
    ],
    faq: [
      { q: "Warum heißt es Update-Agent im Titel, aber CLI in der Präsentation?", a: "Der Titel ist formal aus dem Antrag. Inhaltlich ist es ein CLI-Werkzeug; Agenten unterstützen optional bei Folgeaufgaben." },
      { q: "Wie lange dauert der Vortrag?", a: "Etwa 12–13 Minuten Präsentation, danach bis zu 30 Minuten Fachgespräch." }
    ]
  },
  1: {
    glossary: [
      { term: "Agenda", desc: "Überblick über den Aufbau der Präsentation in sechs Kapiteln." }
    ],
    faq: [
      { q: "Warum so viele Folien?", a: "Strukturierte IHK-Gliederung; Schwerpunkt liegt auf Implementierung und Soll-Ist." }
    ]
  },
  2: {
    glossary: [
      { term: "FIAE", desc: "Fachinformatiker für Anwendungsentwicklung — IHK-Ausbildungsberuf." },
      { term: "Fullstack Developer", desc: "Entwicklung von Frontend und Backend; in deiner Ausbildung Schwerpunkt auf Anwendungsentwicklung." },
      { term: "PIM", desc: "Product Information Management — Verwaltung und Ausspielung von Produktdaten." }
    ],
    faq: [
      { q: "Warum nennen Sie sich Fullstack Developer statt FIAE?", a: "FIAE ist der formelle Beruf; Fullstack beschreibt den fachlichen Schwerpunkt im Entwicklungsteam." }
    ]
  },
  3: {
    glossary: [
      { term: "Projektumfeld", desc: "Organisatorischer und technischer Rahmen: wer beteiligt ist, wo das Projekt stattfindet, welche Prozesse gelten." },
      { term: "Development-Team", desc: "Entwicklerinnen und Entwickler bei basecom, die Kundenprojekte betreuen — Zielgruppe des Werkzeugs." },
      { term: "Projektbetreuer", desc: "Fachlicher Ansprechpartner im Betrieb für Beratung, Reviews und Abnahme des Abschlussprojekts." },
      { term: "Code Review", desc: "Gegenseitige Prüfung von Code-Änderungen im Team vor dem Merge." }
    ],
    faq: [
      { q: "Was war Ihre konkrete Rolle im Projekt?", a: "Eigenverantwortliche Entwicklung des CLI-Werkzeugs im Austausch mit Team und Projektbetreuer." },
      { q: "Warum kein reines Einzelprojekt?", a: "Das Werkzeug soll im Team-Alltag genutzt werden — deshalb enge Einbindung in bestehende Prozesse." },
      { q: "Welche Nuxt-Projekte meinen Sie?", a: "Interne und Kundenprojekte im Team-Portfolio mit Nuxt als Basis — ohne konkrete Kundennamen nennen, falls unklar." }
    ]
  },
  4: {
    glossary: [
      { term: "EOL (End of Life)", desc: "Ende des offiziellen Supports — für Nuxt 3 zum 31.07.2026; danach keine Sicherheitsupdates mehr." },
      { term: "Nuxt 3 / Nuxt 4", desc: "Versionen des Nuxt-Frameworks; Nuxt 4 bringt Breaking Changes und neue Projektstrukturen." },
      { term: "Modul-Inventar", desc: "Liste aller eingesetzten Nuxt-Module mit Version und Migrationsstatus." },
      { term: "Release Notes", desc: "Offizielle Änderungsdokumentation einer Software-Version." }
    ],
    faq: [
      { q: "Warum nicht einfach warten?", a: "EOL bedeutet fehlende Patches; für produktive Kundenprojekte ist rechtzeitige Migration nötig." },
      { q: "Können Entwickler nicht einfach die Nuxt-Doku lesen?", a: "Ja, aber jeder macht es anders — das kostet Zeit und führt zu uneinheitlichen Ergebnissen." },
      { q: "Was meinen Sie mit Nachvollziehbarkeit im Code Review?", a: "Reviewende sehen oft nicht, welche Migrationsschritte und Modulprüfungen durchgeführt wurden." }
    ]
  },
  5: {
    glossary: [
      { term: "Abgrenzung", desc: "Bewusster Ausschluss von Funktionen — zeigt, was das Projekt nicht leisten soll." },
      { term: "Teilautomatisierung", desc: "Wiederkehrende Schritte automatisiert, Entscheidungen beim Menschen." },
      { term: "Orchestrierung", desc: "Steuerung und Reihenfolge vorhandener Tools — hier ohne eigene Migrations-Engine." },
      { term: "Codemods", desc: "Automatisierte Code-Transformationen, z. B. durch offizielle Nuxt-Werkzeuge." }
    ],
    faq: [
      { q: "Warum keine GUI?", a: "Zielgruppe sind Entwickler; die Arbeit findet in Terminal, Git und IDE statt." },
      { q: "Warum keine Vollautomatisierung?", a: "Drittanbieter-Module und projektspezifische Fälle erfordern menschliche Entscheidungen." },
      { q: "Ersetzt das Tool den Entwickler?", a: "Nein — es führt durch den Prozess; kritische Schritte werden bestätigt und geprüft." }
    ]
  },
  6: {
    glossary: [
      { term: "Make-or-Buy", desc: "Entscheidung zwischen Eigenentwicklung und Anschaffung externer Lösung." },
      { term: "Amortisation", desc: "Zeitpunkt, ab dem Einsparungen die einmaligen Entwicklungskosten ausgleichen." },
      { term: "Stundensatz", desc: "Kalkulatorischer Wert pro Arbeitsstunde — hier 110 € (Auszubildender) und 170 € (Entwickler)." }
    ],
    faq: [
      { q: "Woher die 3 Stunden Einsparung?", a: "Schätzung aus Projektdokumentation im Vergleich manueller Recherche vs. geführtem CLI-Ablauf." },
      { q: "Lohnt sich das bei wenigen Migrationen?", a: "Rechnung: ab ca. 20. Migrationen; qualitativer Nutzen (Standard, Nachvollziehbarkeit) entsteht aber sofort." },
      { q: "Gibt es keine fertige Lösung?", a: "Keine deckt Nuxt-Kern, Modul-Inventar und flexible Agenten-Orchestrierung im betrieblichen Kontext ab." },
      { q: "Warum 9.735 €?", a: "80 h Entwicklung × 110 € + 5,5 h Betreuung × 170 € laut Projektdokumentation." }
    ]
  },
  7: {
    glossary: [
      { term: "Wasserfallmodell", desc: "Phasenorientiertes Vorgehen: Analyse → Entwurf → Implementierung → Test → Doku." },
      { term: "Erweitertes Wasserfallmodell", desc: "Klare Phasen, aber iterative Feinjustierung innerhalb der Implementierung an Testprojekten." },
      { term: "Risikopuffer", desc: "Eingeplante Reservezeit (8 h) für unvorhergesehene Anpassungen, z. B. Agenten-Pivot." },
      { term: "@clack/prompts", desc: "Node.js-Bibliothek für interaktive CLI-Eingaben (Auswahl, Bestätigung)." }
    ],
    faq: [
      { q: "Warum Wasserfall und nicht Scrum?", a: "Betriebliches Pflichtenheft mit klaren Zielen; passt zur IHK-Dokumentationspflicht." },
      { q: "Was war der Agenten-Pivot?", a: "Statt fester KI-API → Erkennung installierter Agenten-CLIs (Cursor, Claude Code etc.)." },
      { q: "Sind 80 Stunden realistisch?", a: "Ja — laut Soll-Ist eingehalten; Puffer für Architekturanpassung genutzt." }
    ]
  },
  8: {
    glossary: [
      { term: "Modulare Architektur", desc: "Getrennte Bausteine (CLI, Analyse, Modul-Workflow …) mit klaren Schnittstellen." },
      { term: "nuxi upgrade", desc: "Offizielles Nuxt-CLI-Kommando zum Version-Upgrade." },
      { term: "Typecheck", desc: "Statische Typprüfung via TypeScript — Validierung nach Migrationsschritten." },
      { term: "Artefakte", desc: "Dateien wie Logs, Reports und Inventare, die ein Lauf erzeugt." }
    ],
    faq: [
      { q: "Warum keine eigene Migrations-Engine?", a: "Weniger Wartung; offizielle Nuxt-Tools bleiben bei API-Änderungen die Quelle der Wahrheit." },
      { q: "Was sind die fünf Bausteine?", a: "CLI, Projektanalyse, Modul-Workflow, Artefakterzeugung, Agenten-Anbindung." },
      { q: "Ist das Diagramm ein Architekturdiagramm?", a: "Aktuell Sequenzdiagramm (Ablauf); Schichtenmodell mündlich ergänzen oder späteres Bild nutzen." }
    ]
  },
  9: {
    glossary: [
      { term: "Projektanalyse", desc: "Automatische Erkennung von Nuxt-Version, Modulen, Package Manager und Projektstruktur." },
      { term: "Package Manager", desc: "npm, pnpm, yarn oder bun — verwaltet Abhängigkeiten im Node-Projekt." },
      { term: "future.compatibilityVersion", desc: "Nuxt-Konfiguration zur schrittweisen Vorbereitung auf Version 4." },
      { term: "Workflow", desc: "Auswählbarer Ablauf: nur Kern-Upgrade, nur Module oder kombiniert." }
    ],
    faq: [
      { q: "Zeigen Sie die CLI live?", a: "Optional im Fachgespräch; in der Präsentation reicht Screenshot + Ablauferklärung." },
      { q: "Warum Bestätigung vor jedem Schritt?", a: "Transparenz und Kontrolle — kein blindes Überschreiben von Projektdateien." },
      { q: "Unterstützt es alle Package Manager?", a: "Ja — npm, pnpm, yarn und bun werden erkannt." }
    ]
  },
  10: {
    glossary: [
      { term: "Modul-Workflow", desc: "Strukturierter Ablauf zum Inventarisieren und Bearbeiten offizieller Nuxt-Module." },
      { term: "Playbook / Inventar", desc: "Generierter Bericht über Module, Versionen und Migrationshinweise." },
      { term: "Coding Agent", desc: "KI-gestütztes Werkzeug in der IDE/CLI für begrenzte Folgeaufgaben — nicht autonom." },
      { term: "Scope", desc: "Eingegrenzter Auftrag an den Agenten — kein generelles Refactoring." }
    ],
    faq: [
      { q: "Ersetzen Agenten den Modul-Workflow?", a: "Nein — Agenten nur für optional verbleibende Aufgaben nach strukturiertem Kern." },
      { q: "Warum anbieterunabhängige Agenten?", a: "Flexibler im Betrieb; keine Abhängigkeit von einer festen API." },
      { q: "Was ist der aufwendigste Teil?", a: "Modul-Workflow — viele Module, unterschiedliche Migrationshinweise." }
    ]
  },
  11: {
    glossary: [
      { term: "Validierung", desc: "Prüfung durch Typecheck und Build nach Migrationsschritten." },
      { term: "Exitcodes", desc: "Rückgabewerte von Programmen — 0 = Erfolg, ungleich 0 = Fehler." },
      { term: "Happy Path", desc: "Idealfall ohne Fehler — reicht für Tests nicht aus." },
      { term: "Qualitätssicherung (QS)", desc: "Maßnahmen zur Sicherstellung der Softwarequalität im Prozess." }
    ],
    faq: [
      { q: "Reicht ein Test am Ende?", a: "Nein — Validierung ist in den Workflow eingebaut, nicht nur Abschlusstest." },
      { q: "Welche Test-Repositories?", a: "Mehrere interne Nuxt-3-Repos mit unterschiedlicher Modul-Komplexität." },
      { q: "Was bringen Artefakte im Alltag?", a: "Nachweis im Code Review, weniger Rückfragen zwischen Projekten." }
    ]
  },
  12: {
    glossary: [
      { term: "Soll-Ist-Vergleich", desc: "Abgleich geplanter Projektziele (Soll) mit dem tatsächlichen Ergebnis (Ist)." },
      { term: "Pflichtenheft", desc: "Dokument mit Anforderungen und Zielen — Grundlage der Abnahme." },
      { term: "Abnahme", desc: "Formale Bestätigung durch Projektbetreuer nach erfolgreichen Testläufen." }
    ],
    faq: [
      { q: "Wurden alle Ziele erreicht?", a: "Ja — Agenten-Anbindung angepasst (flexibel statt fester API), nicht aufgegeben." },
      { q: "Gab es Zeitüberschreitung?", a: "Nein — 80 h wie geplant; Risikopuffer für Pivot verwendet." },
      { q: "Wie wurde abgenommen?", a: "Testläufe an realitätsnahen Repositories, Feedback durch Projektbetreuer im Team-Kontext." }
    ]
  },
  13: {
    glossary: [
      { term: "Lessons Learned", desc: "Erkenntnisse aus dem Projektverlauf für künftige Arbeit." },
      { term: "npm-Paket", desc: "Veröffentlichung als installierbares Node-Paket im Unternehmen — geplanter Ausblick." },
      { term: "Prompt Engineering", desc: "Gezielte Formulierung von Anweisungen an KI-Agenten für brauchbare Ergebnisse." }
    ],
    faq: [
      { q: "Würden Sie das Projekt wieder so machen?", a: "Ja — modularer Aufbau und frühe Tests an echten Repos haben sich bewährt." },
      { q: "Was würden Sie anders machen?", a: "Noch früher Agenten-Strategie klären; Modulregeln schrittweise erweitern." },
      { q: "Kommt das Tool in Produktion?", a: "Ausblick: npm-Paket im Unternehmen nach erfolgreicher Pilotphase." }
    ]
  },
  14: {
    glossary: [],
    faq: [
      { q: "Worauf soll ich mich im Fachgespräch vorbereiten?", a: "Architektur, Wirtschaftlichkeit (3 h / 510 €), Agenten-Pivot, Abgrenzung GUI/Vollautomatisierung, Code-Beispiele." }
    ]
  }
};
