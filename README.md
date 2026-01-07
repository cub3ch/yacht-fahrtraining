# Yacht Fahrtraining Website

Eine moderne, responsive Website für Yacht Fahrtraining mit Kursangeboten, Videos und Anmeldeformular.

## 🎯 Features

- **Responsive Design** - Funktioniert auf allen Geräten (Desktop, Tablet, Smartphone)
- **Kursübersicht** - 4 verschiedene Angebote übersichtlich dargestellt
- **Video-Integration** - Einbindung von YouTube-Videos möglich
- **Anmeldeformular** - Vollständiges Kontakt- und Anmeldeformular
- **Moderne Animationen** - Smooth Scrolling und Scroll-Animationen
- **Bildergalerie** - Ansprechende Bilder von Unsplash

## 📁 Struktur

```
yacht-fahrtraining/
├── index.html      # Hauptseite
├── styles.css      # CSS-Styling
├── script.js       # JavaScript-Funktionalität
└── README.md       # Diese Datei
```

## 🚀 Installation & Nutzung

1. Öffnen Sie die Datei `index.html` in einem modernen Browser
2. Die Website ist sofort einsatzbereit!

## 🎨 Anpassungen

### Bilder ändern

Die aktuellen Bilder stammen von Unsplash. Um eigene Bilder zu verwenden:
- Ersetzen Sie die URLs in den `<img src="...">` Tags in `index.html`
- Oder laden Sie Bilder in einen `images/` Ordner und passen Sie die Pfade an

### Videos einbinden

Um eigene YouTube-Videos einzubinden:
1. Gehen Sie zu Ihrem YouTube-Video
2. Klicken Sie auf "Teilen" → "Einbetten"
3. Kopieren Sie die Video-ID aus der URL
4. Ersetzen Sie `dQw4w9WgXcQ` in der `iframe src` mit Ihrer Video-ID

Beispiel:
```html
<iframe src="https://www.youtube.com/embed/IHRE-VIDEO-ID" ...>
```

### Farben anpassen

Im `styles.css` finden Sie am Anfang die CSS-Variablen:
```css
:root {
    --primary-color: #0066cc;    /* Hauptfarbe */
    --secondary-color: #004d99;  /* Sekundärfarbe */
    --accent-color: #ff6b35;     /* Akzentfarbe */
    ...
}
```

### Angebote anpassen

Die Angebote befinden sich in `index.html` im Bereich `<section id="angebote">`.
Jedes Angebot ist ein `.angebot-card` Element - kopieren und anpassen Sie diese nach Bedarf.

## 📧 Formular-Funktionalität

Das Formular ist aktuell mit JavaScript-Validierung ausgestattet. Die Daten werden in der Konsole ausgegeben.

Um die Daten an einen Server zu senden, passen Sie die `submit` Event-Handler in `script.js` an:

```javascript
// Beispiel mit fetch API
fetch('https://ihre-api.de/anmeldung', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
})
```

## 🌐 Browser-Unterstützung

- Chrome (empfohlen)
- Firefox
- Safari
- Edge
- Opera

## 📱 Mobile Optimierung

Die Website ist vollständig responsive und passt sich automatisch an:
- Smartphones (< 480px)
- Tablets (< 768px)
- Desktop (> 768px)

## 💡 Tipps

1. **Bilder optimieren**: Komprimieren Sie große Bilder für schnellere Ladezeiten
2. **SEO**: Fügen Sie Meta-Tags für bessere Suchmaschinen-Sichtbarkeit hinzu
3. **SSL**: Hosten Sie die Website mit HTTPS für Sicherheit
4. **Analytics**: Fügen Sie Google Analytics für Besucherstatistiken hinzu

## 🛠️ Zukünftige Erweiterungen

Mögliche Verbesserungen:
- Blog-Bereich für News und Tipps
- Buchungssystem mit Kalender
- Mehrsprachigkeit (DE/EN)
- Bildergalerie mit Lightbox
- Testimonials von Kursteilnehmern
- FAQ-Bereich

## 📄 Lizenz

Diese Website wurde für Yacht Fahrtraining erstellt.

---

**Viel Erfolg mit Ihrer Website! ⛵**
