# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

This repository exists for the owner to **learn React** by following Scrimba's Advanced React course (https://scrimba.com/advanced-react-c02h/~02j), building the Van Life app step by step. It is a personal learning exercise, not production code — when helping here, favor explanations and letting the owner practice course concepts over silently rewriting things to be "better".

**Current progress**: just learned React Router **Outlets** — nested routes with `<Outlet>`, and passing data to nested routes via `<Outlet context>` / `useOutletContext` (see the `HostVanDetail` → `HostVanInfo`/`HostVanPhotos`/`HostVanPricing` pages).

Stack: Vite + React 19 + React Router v6, plain JavaScript (JSX, no TypeScript), no test framework.

## Commands

```bash
npm run dev      # Dev server with hot reload (also: npm start)
npm run build    # Production build to dist/
npm run lint     # ESLint (flat config, eslint.config.js)
npm run preview  # Preview the production build
```

There are no tests.

Git hooks (lefthook): pre-commit runs `npm run lint` on staged JS/JSX files; pre-push runs `npm run build`. If a push fails, the build is broken.

## Architecture

- **Entry point is `src/index.jsx`** — it contains the entire route tree inline (no separate router file) and renders the app. All routes are nested under a `Layout` component (Header/Footer + `<Outlet>`); host routes are further nested under `HostLayout`.
- **`src/server.js` is a MirageJS in-browser mock API**, imported for its side effect in `index.jsx`. It intercepts `fetch` calls to `/api/vans`, `/api/vans/:id`, `/api/host/vans`, `/api/host/vans/:id` and seeds 6 vans. The host endpoints hard-code `hostId: "123"`. There is no real backend — all data lives here.
- **Data fetching pattern**: pages fetch from the Mirage API in `React.useEffect` with local `useState`. Nested host van pages (`HostVanInfo`, `HostVanPhotos`, `HostVanPricing`) receive the van via `<Outlet context={{ van }} />` / `useOutletContext` from `HostVanDetail` instead of refetching.
- **Routing conventions**: relative paths and relative links are used deliberately (e.g. `<Link to=".." relative="path">`, `<NavLink to="." end>`), per recent refactors.
- **Base path**: `vite.config.js` sets `base: "scrimba-van-life-project"` for GitHub Pages, and `BrowserRouter` gets `basename={import.meta.env.BASE_URL}`. Keep these in sync when touching routing or deploy config.
- Pages live in `src/pages/` (with `Host/` and `Vans/` subfolders), shared layout components in `src/components/`, styles in a single `src/styles/index.css`, images in `src/assets/`.

Note: there are two `VanDetail.jsx` files — the router imports `src/pages/VanDetail.jsx` (has a skeleton loading state); `src/pages/Vans/VanDetail.jsx` is an older unused copy.

## Deploy

Pushing to `master` deploys to GitHub Pages via `.github/workflows/static.yml`.

## Tooling

- Node 24.6.0 (`.tool-versions`, asdf)
- `dist/` is committed build output — don't edit it by hand.
