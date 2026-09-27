# Excel Institute — Computer Institute

Deploy steps for **Vercel** are below. This is a TanStack Start (React 19 + Vite) project that
renders pages on the server, so it needs a host that runs server code — Vercel works, plain
static hosting does not.

## Deploy to Vercel

### Option A — from GitHub (recommended)
1. Push this folder to a GitHub repository.
2. In Vercel: **Add New → Project** and import the repository.
3. Vercel auto-detects the framework settings. Confirm:
   - **Build Command:** `npm run build`
   - **Output:** auto-detected (Vercel preset is built in)
   - **Install Command:** `npm install`
4. Click **Deploy**. Every future push to GitHub redeploys automatically.

### Option B — Vercel CLI
```sh
npm i -g vercel
cd <this-folder>
npm install
vercel        # preview deploy
vercel --prod # production deploy
```

## Local development
```sh
npm install
npm run dev     # http://localhost:8080
```

## Notes
- **Node 20+** required (use Node 22 on Vercel if asked to pick).
- No environment variables are needed — this site has no backend secrets.
- If you deploy to a platform other than Vercel/Netlify/Cloudflare Pages, add
  `nitro: { preset: "<platform>" }` inside `defineConfig(...)` in `vite.config.ts`.
- `src/routeTree.gen.ts` is generated automatically during the build; it is safe to delete
  from version control (a fresh one is created).

## Project structure
- `src/routes/index.tsx` — the single-page site (hero, courses, typing game, reviews, gallery, contact)
- `src/components/site/` — one file per page section
- `src/styles.css` — design tokens (dark theme, electric blue accents)
- `src/assets/` — images used by the site
