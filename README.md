# kwharrison13.com

Personal site for Kyle Harrison. Built with [Astro](https://astro.build), deployed to [Cloudflare Pages](https://pages.cloudflare.com) (auto-deploys on push to `main`).

Inspired by [sj.land](https://sj.land) — a productivity-app-style personal site with sidebar navigation, keyboard shortcuts, and instant page switching.

## ⚠️ Content is generated — do not hand-edit `src/content/`

This site is the **public half of a two-repo system.** The private half is [`kwharrison13-wiki`](https://github.com/kwharrison13/kwharrison13-wiki) (`~/kwharrison13-wiki`), which is the **single source of truth for all content** — books, essays, concepts, people, long-reads, learning, the anti-library, and tweet feeds.

Everything in `src/content/` (and `src/data/antilibrary.json`, the tweet feeds in `src/data/portfolio-ideas.json`) is a **build artifact synced from the wiki.** Hand-edits get overwritten on the next sync. To change content, edit the markdown in the wiki and run `./scripts/publish.sh` there — it syncs every collection, rebuilds, and pushes both repos.

**Agents working in this repo: read [`CLAUDE.md`](./CLAUDE.md) first.** Edit code/layout/styles here; never edit content here.

## What lives where

| Surface | Generated from (in the wiki) | Sync script |
|---|---|---|
| `src/content/books/` → `/books/<slug>` | `wiki/books/*.md` (`publish: true`) | `scripts/sync-from-wiki.mjs` |
| `src/content/essays/` → `/essays/<slug>` | `wiki/essays/*.md` | `scripts/sync-essays-from-wiki.mjs` |
| `src/content/notes/` → `/notes/<slug>` | `wiki/concepts/` + `people/` + `long-reads/` + `books-to-read/` | `scripts/sync-notes-from-wiki.mjs` |
| `src/content/learning/` → `/learning/<slug>` | `wiki/learning/*.md` | `scripts/sync-learning-from-wiki.mjs` |
| `src/data/antilibrary.json` → Anti-Library tab | `wiki/books-to-read/*.md` | `scripts/sync-antilibrary-from-wiki.mjs` |
| `src/data/portfolio-ideas.json` feeds → Portfolio feeds | `wiki/tweets/*.md` (gated by `portfolio_ideas:`) | `scripts/sync-tweets-from-wiki.mjs` |

The hand-curated fields in `portfolio-ideas.json` (descriptions/essays/projects) are NOT touched by sync — only the `feed` arrays are.

## Setup

```bash
npm install
npm run dev      # local dev
npm run build    # production build (also how publish.sh verifies)
```

## Features

- **Sidebar navigation** with keyboard shortcuts (1–9, 0, / to jump between pages)
- **Light / Dark / Auto theme** with localStorage persistence
- **Contact modal** (press `/`)
- **Backlinks** computed at build time (`src/lib/backlinks.ts`) — "Referenced in" on every book/essay/note page
- **Wikilink resolver** in the sync scripts turns `[[X]]`/`#[[X]]`/`#tag` into real links and heals stale URLs
- **Mobile responsive**

## Project structure (code, not content)

```
src/
├── components/     UI components (Sidebar, ContactModal, …)
├── content/        GENERATED — synced from the wiki, do not hand-edit
│   └── config.ts   collection schemas: essays, books, notes, learning
├── data/           GENERATED data surfaces (antilibrary.json, portfolio feeds)
├── layouts/        app shell
├── lib/            backlinks.ts, bookSlug.ts (slug rules: kebab-case, & → "and")
├── pages/          routes (/books, /essays, /notes, /learning, /portfolio, …)
└── styles/         global.css + theme variables
scripts/            sync-*-from-wiki.mjs, import-readwise.mjs
```

For the content model, schema, and the rules behind all of this, see the wiki's `CLAUDE.md`.
