# Library — demo

This small folder contains a simple Bootstrap-based library demo site intended for practice and educational purposes.

Files overview

- `konyvek.html` — displays the list of books in a table.
- `new.html` — (optional) a form for adding a new book.
- `kep.html` — demo for uploading or changing cover images.
- `style.css` — custom styles (background, table coloring, buttons).
- `bootstrap/` — local Bootstrap CSS/JS (can be switched to CDN for faster startup).

Quick start

1. Open the folder in a terminal:

   ```bash
   cd VizsgaGyak/Konyvtar
   ```

2. Start a simple HTTP server (Python 3):

   ```bash
   python3 -m http.server 8000
   ```

3. Open your browser: http://localhost:8000/konyvek.html

Notes

- `style.css` contains the table and background colors; to center the navigation bar, use the `.navbar .container-fluid` rule in `style.css` (flex, center alignment).
- If desired, local Bootstrap links can be replaced with CDN links, or a small JavaScript snippet can be added to `konyvek.html` to load `konyvak.json` / `kutyak.json` (if present).

License

- Free for educational and demo purposes. Add a `LICENSE` file if you require a different license.
