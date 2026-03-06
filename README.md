# 1-hour-mail

🗑️ **Trash Mails** — Secure temporary email service. Generate disposable email addresses instantly to protect your privacy and keep your inbox clean.

## Quick Start

```bash
# Install dependencies
npm install

# Build and start (production)
npm start
```

Then open **http://localhost:3001** in your browser.

## Development

Run the API server and Vite dev server in two separate terminals:

```bash
# Terminal 1 — API server
npm run server

# Terminal 2 — Frontend dev server (with hot reload)
npm run dev
```

The Vite dev server (http://localhost:5173) automatically proxies `/api` requests to the Express server on port 3001.

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Build frontend and start the server |
| `npm run dev` | Start Vite dev server with hot reload |
| `npm run server` | Start Express API server |
| `npm run build` | Build frontend for production |