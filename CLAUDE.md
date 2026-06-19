# kwharrison13-website — agent contract

This is the **public Astro site** at [kwharrison13.com](https://www.kwharrison13.com). It is the public half of a two-repo system. The other half — and the **single source of truth for all content** — is `~/kwharrison13-wiki` (read its `CLAUDE.md` for the full content model).

## The one rule that matters most

**`src/content/` and the generated parts of `src/data/` are build artifacts. Never hand-edit them.**

All content originates in the wiki and is synced here by the wiki's `scripts/publish.sh`. Any edit you make to a synced file is silently overwritten on the next sync. If a piece of content is wrong, fix it in `~/kwharrison13-wiki` and run `./scripts/publish.sh` there.

What is generated (do not edit):
- `src/content/books/`, `src/content/essays/`, `src/content/notes/`, `src/content/learning/`
- `src/data/antilibrary.json`
- the `feed` arrays inside `src/data/portfolio-ideas.json` (the other fields there are hand-curated and safe)

What you CAN edit here:
- Astro components, layouts, pages, routes (`src/components`, `src/layouts`, `src/pages`)
- Styles (`src/styles`, per-page `<style>` blocks)
- Build config (`astro.config.mjs`), the sync scripts themselves (`scripts/sync-*.mjs`), `src/lib/*`
- `src/content/config.ts` collection schemas (coordinate with the wiki's frontmatter)

## Sync scripts (run from the wiki via publish.sh)

| Script | Wiki source → website surface |
|---|---|
| `scripts/sync-from-wiki.mjs` | `wiki/books/` (`publish: true`) → `books` collection. Carries Key Takeaways, Public Connections, Highlights + Kyle-notes; drops Private Connections; heals stale links. |
| `scripts/sync-essays-from-wiki.mjs` | `wiki/essays/` → `essays` collection (wiki is canonical). |
| `scripts/sync-notes-from-wiki.mjs` | `wiki/concepts/` + `people/` + `long-reads/` + `books-to-read/` → `notes` collection. `publish: false` → private landing. |
| `scripts/sync-learning-from-wiki.mjs` | `wiki/learning/` → `learning` collection. |
| `scripts/sync-antilibrary-from-wiki.mjs` | `wiki/books-to-read/` → `src/data/antilibrary.json`. |
| `scripts/sync-tweets-from-wiki.mjs` | `wiki/tweets/` → `portfolio-ideas.json` `feed` arrays (gated by `portfolio_ideas:`). |
| `scripts/import-readwise.mjs` | Readwise → books (rwid-deduped). Bootstrap/occasional; wiki is now canonical for highlights. |

Private wiki sections — `gospel-study/`, `meetings/`, `diligence-research/`, `daily-log/` — are **never synced.** Don't add globs for them.

## The link resolver

`sync-from-wiki.mjs` and `sync-notes-from-wiki.mjs` build a resolver mapping every wiki page's title/filename/aliases (case-insensitive) → `(kind, slug)` where `kind ∈ {books, essays, notes}`. It transforms `[[X]]`, `#[[X]]`, `#bare-tag` into links, strips stray backticks, heals stale `/books|essays|notes` URLs when slugs move, and unwraps unresolved targets to plain text. Slugs follow `src/lib/bookSlug.ts` (kebab-case, `&` → "and").

## Build & deploy

- `npm run build` — production build (publish.sh runs this to verify before pushing)
- **Cloudflare Pages auto-deploys** from `main`. No deploy config lives in the repo (it's wired through the Cloudflare↔GitHub integration).
- Node ≥ 18, no third-party deps beyond Astro + `@astrojs/sitemap` (project convention). New sync scripts: support `--dry-run`, path-resolve from `__filename`, don't assume cwd.

## Conventions for sync scripts

- Idempotent — running twice produces the same result.
- The sync OWNS what it writes (it rebuilds those files/arrays each run); leave hand-curated fields untouched.
- `<!--rwid:rwid-XXX-->` markers in highlights are sacred — dedup keys; stripped at render by `remarkStripRwid` in `astro.config.mjs`. Never edit/remove.
