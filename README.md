# BeyondChats — Assignment 

This repository contains a small multi-component project created as a BeyondChats assignment. It includes:

- `beyond-backend` — a Laravel PHP backend (API + app assets).
- `beyond-node` — a Node.js service (likely used for real-time features / websockets or a small server).
- `beyond-frontend` — static HTML frontend (index.html and article.html).

I inspected the repository at commit `bd207c87c8f033d22e09c45798dfc578cd8ad85d` and created this README to help you run each component and to show the file structure.

---

## Quick summary 

You built a small full-stack application split into three parts:

1. A Laravel-based backend (API/web application) in `beyond-backend`. It contains typical Laravel files and asset tooling (composer files, `artisan`, `phpunit.xml`, a `.env.example`, and front-end tooling config).
2. A Node.js service in `beyond-node` (with `index.js` and a `package.json`). This is likely intended for real-time functionality or an auxiliary API/service.
3. A simple static frontend in `beyond-frontend` (two HTML files) to present the UI; it probably talks to the backend and/or the Node service for dynamic features.

Together these pieces form a demo/assignment app demonstrating an API backend, a Node service, and a static frontend that consumes them.

---
---

## 🎥 Demo Video (Working Project Proof)

To quickly see the application working end-to-end, watch the demo video below:

[![Demo Video](assets/demo-thumbnail.png)](https://drive.google.com/file/d/1hGRc30L7NE_Dgo23a04AJPNSwXfXMrRe/view?usp=drive_link)

The video demonstrates:
- Laravel backend running
- Node script fetching and processing blogs with AI rewriting
- Frontend displaying Updated and Non-Updated blogs
- Full article view with references


---
## File structure (as found in the repo)

The tree below reflects the files and directories present in the repository at the inspected commit.

```text
beyondchats-assignment/               (repo root)
├─ beyond-backend/
│  ├─ .editorconfig
│  ├─ .env.example
│  ├─ .gitattributes
│  ├─ .gitignore
│  ├─ README.md
│  ├─ artisan
│  ├─ composer.json
│  ├─ composer.lock
│  ├─ package.json
│  ├─ phpunit.xml
│  ├─ vite.config.js
│  ├─ app/                (Laravel app directory)
│  ├─ bootstrap/
│  ├─ config/
│  ├─ database/
│  ├─ public/
│  ├─ resources/
│  ├─ routes/
│  ├─ storage/
│  └─ tests/
├─ beyond-node/
│  ├─ .env
│  ├─ index.js
│  ├─ package.json
│  ├─ package-lock.json
│  └─ node_modules/
├─ beyond-frontend/
│  ├─ index.html
│  └─ article.html
└─ README.md              (this file)
```

Notes:
- Some directories (like `app/`, `config/`, etc.) contain many Laravel framework files; they are listed as directories here for brevity.
- `beyond-node/node_modules/` is present (likely from local installs); you should not commit `node_modules` in general, but it's present in the inspected tree.

---

## Prerequisites

- Git
- PHP 8.0+ (or the version required by `beyond-backend/composer.json`)
- Composer
- Node.js 16+ and npm (or yarn)
- A database compatible with Laravel (MySQL, MariaDB, PostgreSQL, or SQLite)
- A browser for the frontend

---

## Setup & run (recommended order)

1. Clone the repository
   ```bash
   git clone https://github.com/AlexZx-05/beyondchats-assignment.git
   cd beyondchats-assignment
   ```

2. Backend — beyond-backend (Laravel)
   ```bash
   cd beyond-backend
   composer install
   cp .env.example .env
   # Edit .env: set DB_*, other values
   php artisan key:generate
   php artisan migrate
   npm install
   npm run dev   # or npm run build
   php artisan serve
   ```
   - Default Laravel dev server: http://127.0.0.1:8000

3. Node service — beyond-node
   ```bash
   cd ../beyond-node
   npm install
   # edit .env if needed
   npm start       # or `node index.js`
   ```
   - Ensure the Node service runs on a port that does not conflict with Laravel.

4. Frontend — beyond-frontend
   - Open `beyond-frontend/index.html` in a browser, or serve it:
     ```bash
     cd ../beyond-frontend
     # serve statically (Python)
     python -m http.server 3000
     # or use a node static server
     npx serve -s .
     ```
   - Edit the HTML if you need to update API endpoints or socket URLs to point at the running backend/Node service.

---

## Environment & configuration pointers

- `beyond-backend/.env.example` — copy to `.env` and fill values (APP_KEY, DB settings, etc).
- `beyond-node/.env` — review and update service-specific config (ports, hostnames).
- `beyond-frontend/index.html` — may contain hardcoded API or socket URLs — update them if required.

If you want, I can extract and list the exact environment variables from `beyond-backend/.env.example` and show the values the frontend and node service expect.

---

## Troubleshooting

- DB connection errors: verify DB host, port, credentials, and that your DB server is running.
- Laravel migration fails: confirm DB permissions.
- CORS errors: either serve the frontend from same host/port or configure CORS in Laravel (`config/cors.php`) to allow origin.
- Port conflicts: ensure services run on different ports.
- Missing dependencies: run `composer install` and `npm install` in respective folders.

---

