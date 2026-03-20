# Konyvtár (Library) — Project Overview

This folder contains small demo projects for a library ("Könyvtár") exercise intended for learning and practice.

Contents

- `web/` — a static Bootstrap-based demo site. See [web README](web/README.md) for details and quick start.
- `frontend/` — a React + Vite starter template for building a frontend. See [frontend README](frontend/README.md).

Quick start

- To view the static demo site:

  ```bash
  cd VizsgaGyak/Konyvtar/web
  python3 -m http.server 8000
  # then open http://localhost:8000/konyvek.html
  ```

- To run the React frontend (if you want to develop it):

  ```bash
  cd VizsgaGyak/Konyvtar/frontend
  npm install
  npm run dev
  ```

Notes

- These are educational/demo projects. Feel free to switch local Bootstrap files to CDN links, add a `LICENSE`, or request extra features like JSON data loading or sample API backends.

License

- Free for educational and demo purposes unless otherwise specified.
