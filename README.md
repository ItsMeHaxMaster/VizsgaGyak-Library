# Konyvtár (Library) — demo

Ez a kis mappa egy egyszerű, Bootstrap-alapú könyvtári demóoldalt tartalmaz, amely gyakorlásra és oktatási célokra készült.

Fájlok röviden

- `konyvek.html` — a könyvek listáját mutatja táblázatban.
- `new.html` — (opcionális) új könyv felvételére szolgáló űrlap.
- `kep.html` — borítók feltöltésének/módosításának demója.
- `style.css` — egyedi stílusok (háttér, táblázat színezése, gombok).
- `bootstrap/` — helyi Bootstrap CSS/JS (váltható CDN-re a gyorsabb indításhoz).

Gyors indítás

1. Nyisd meg a mappát a terminálban:

   ```bash
   cd VizsgaGyak/Konyvtar
   ```

2. Indíts egy egyszerű HTTP szervert (Python 3):

   ```bash
   python3 -m http.server 8000
   ```

3. Nyisd meg a böngészőt: http://localhost:8000/konyvek.html

Megjegyzések

- A `style.css` tartalmaz a táblázat és a háttér színeit; ha a navigációs sávot középre szeretnéd, a `style.css`-ben található `.navbar .container-fluid` szabály segít (flex, center alignment).
- Ha szeretnéd, átválthatom a helyi Bootstrap hivatkozásokat CDN-re, vagy hozzáadok egy rövid JavaScript példát a `konyvek.html`-hez, amely betölti a `konyvak.json`-t/`kutyak.json`-t (ha van ilyen).

Licenc

- Oktatási és demó célokra szabadon használható. Adj hozzá `LICENSE` fájlt, ha más licencek érdekelnek.
