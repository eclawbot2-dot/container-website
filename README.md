# The Container — Jeddah · Red Sea Port

Bilingual (EN / AR) marketing site for **The Container**, Jeddah's raw, industrial
techno & house venue inside Shams Container Terminal on the Red Sea port.

## Stack
- Next.js 14 (App Router) + React 18 + TypeScript
- Tailwind CSS
- Static export (`output: 'export'`) — no backend required

## Bilingual / RTL
- Clickable language toggle (globe button, top-right) switches **all** copy between
  English (LTR) and Modern Standard Arabic (full RTL).
- Choice persists in `localStorage` and sets `<html lang/dir>`.
- Translations live in `lib/i18n.ts`.

## Configurable placeholders
Edit `lib/config.ts`:
- `INSTAGRAM_HANDLE` — currently `thecontainer.jed` (placeholder, confirm real handle)
- `CONTACT_EMAIL` — currently `info@container.jahdev.com` (placeholder)

## Develop
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Photography
Self-hosted in `public/images` (Unsplash, license-free). Lineup data in `lib/config.ts`
reflects real confirmed shows (Anja Schneider, Cassy) — lineup subject to change.
