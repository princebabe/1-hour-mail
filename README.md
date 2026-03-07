# 🗑️ Trash Mails — 1-hour Disposable Email

A secure, no-signup temporary email service.  
Live demo: **https://princebabe.github.io/1-hour-mail/**

## ⚡ GitHub Pages (Static Demo)

The site deploys automatically to GitHub Pages via GitHub Actions on every push to `main`.

> **One-time setup** — In your GitHub repo go to  
> **Settings → Pages → Source → GitHub Actions**  
> then push to `main` (or trigger the workflow manually).

On GitHub Pages, the app runs in **demo mode**: a disposable email address is generated
in your browser and simulated emails are stored in `localStorage`. No backend required.

## 🖥️ Self-hosting (Full functionality)

For real incoming emails you need to run the Express + SQLite backend.

```bash
# Install dependencies
npm install

# Development (two terminals)
npm run dev      # Vite dev server  → http://localhost:5173
npm run server   # Express API      → http://localhost:3001

# Production (single server, builds frontend first)
npm start        # → http://localhost:3001
```

Default admin credentials: `admin` / `admin123`
