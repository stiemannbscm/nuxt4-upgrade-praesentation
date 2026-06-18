# Projektpräsentation – Nuxt 4 Upgrade CLI

Interaktive HTML-Präsentation (1920×1080) für die FIAE-Abschlussprüfung.

## Live-Ansicht

Nach Aktivierung von GitHub Pages:

**https://stiemannbscm.github.io/nuxt4-upgrade-praesentation/**

## Dateien

| Datei | Inhalt |
|-------|--------|
| `index.html` | Folieninhalt (Markup) |
| `styles.css` | Layout und Typografie |
| `app.js` | Navigation, Agenda-Leiste, Sprechernotizen |
| `presenter.html` | Presenter-Ansicht (Notizen, Hilfe, Steuerung) |
| `presenter.css` / `presenter.js` | Styling und Logik für das Presenter-Fenster |
| `assets/` | Logos und Folienbilder (PNG) |

## Zwei-Bildschirm-Modus

Beim Öffnen von `index.html` startet automatisch ein **Presenter-Fenster** mit Sprechernotizen, Kurzhilfe und Navigation. Empfohlen:

1. Präsentation auf Beamer/Zweitmonitor → **F** für Vollbild
2. Presenter-Fenster auf Laptop → Fokus hier lassen und mit **← / →** steuern

Falls der Browser Pop-ups blockiert: Button **„Presenter öffnen“** oben in der Präsentation klicken.

## Bedienung

- **→ / Leertaste** – nächste Folie
- **←** – vorherige Folie
- **F** – Vollbild
- **N** – Sprechernotizen ein/aus
- Klick links/rechts am Bildrand – vor/zurück
- Agenda-Leiste unten – direkt zu einer Folie springen

## GitHub Pages aktivieren

1. Repository **Settings** → **Pages**
2. **Build and deployment** → Source: **Deploy from a branch**
3. Branch: **main**, Folder: **/ (root)**
4. Speichern – nach 1–2 Minuten ist die URL erreichbar

## Aktualisieren

Die Quelle liegt im lokalen Doku-Projekt. Nach Änderungen:

```bash
cd /pfad/zum/Doku
python3 build_praesentation.py
cd praesentation
git add index.html styles.css app.js assets/
git commit -m "Update presentation"
git push
```
