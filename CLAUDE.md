# kwharrison13-website — agent contract

This is the **public Astro site** at [kwharrison13.com](https://www.kwharrison13.com), deployed on **Vercel** (auto-deploys on push to `main`). It is the public half of a two-repo system. The private half — and the **single source of truth for all content** — is `~/kwharrison13-wiki`.

**Read the wiki's `CLAUDE.md` (`~/kwharrison13-wiki/CLAUDE.md`) for the full content model.** This file is the website-side mirror of that contract: it tells you what this repo is allowed to do and how content flows in from the wiki. The two must stay aligned — if you change a schema or sync behavior here, reflect it in the wiki contract too.

---

## The one rule that matters most

**`src/content/` and the generated parts of `src/data/` are build artifacts. Never hand-edit them.**

All content originates in the wiki and is synced here by the wiki's `scripts/publish.sh` (or its autopublish watcher). Any edit you make to a synced file is silently overwritten on the next sync. To change content, edit the markdown in `~/kwharrison13-wiki` and run `./scripts/publish.sh` there — it syncs every collection, builds to verify, and pushes both repos.

**Generated (do not hand-edit):**
- `src/content/books/`, `src/content/essays/`, `src/content/notes/`, `src/content/learning/`
- `src/data/antilibrary.json`
- `src/data/portfolio-ideas.json` → the `feed` arrays only (the `description`/`essays`/`projects` fields are hand-curated and safe)
- `src/data/books.json` → the library catalog. **[Transitional]** Currently hand-curated; being inverted so it's GENERATED from `wiki/books/` frontmatter (a `sync-books-catalog-from-wiki.mjs` to be built). Once that ships, treat it as generated too.

**Editable here (this is the website's actual job):**
- Astro components, layouts, pages, routes (`src/components`, `src/layouts`, `src/pages`)
- Styles (`src/styles`, per-page `<style>` blocks)
- Build config (`astro.config.mjs`), the sync scripts themselves (`scripts/*.mjs`), `src/lib/*`
- `src/content/config.ts` collection schemas — but keep them in lockstep with the wiki's frontmatter

---

## Content flow: wiki → website

The wiki compiles into **four Astro content collections** (`src/content/config.ts` → `essays`, `books`, `notes`, `learning`) plus **data-file surfaces**. Every surface is regenerated from the wiki:

| Wiki source | Sync script (run from the wiki via publish.sh) | Website surface | URL |
|---|---|---|---|
| `wiki/books/*.md` (`publish: true`) | `scripts/sync-from-wiki.mjs` | `books` collection | `/books/<slug>` |
| `wiki/essays/*.md` (wiki canonical) | `scripts/sync-essays-from-wiki.mjs` | `essays` collection | `/essays/<slug>` |
| `wiki/concepts/` + `people/` + `companies/` + `long-reads/` + `books-to-read/` | `scripts/sync-notes-from-wiki.mjs` | `notes` collection | `/notes/<slug>` |
| `wiki/learning/*.md` | `scripts/sync-learning-from-wiki.mjs` | `learning` collection | `/learning/<slug>` |
| `wiki/long-reads/*.md` | (in notes sync) | listing | `/long-reads` (grouped by `source_published` year) |
| `wiki/books-to-read/*.md` | `scripts/sync-antilibrary-from-wiki.mjs` | `src/data/antilibrary.json` | Anti-Library bookshelf tab |
| `wiki/tweets/*.md` (gated by `portfolio_ideas:`) | `scripts/sync-tweets-from-wiki.mjs` | `portfolio-ideas.json` `feed` arrays | Portfolio Idea feeds |
| `wiki/books/` frontmatter (planned) | `sync-books-catalog-from-wiki.mjs` (to build) | `src/data/books.json` catalog | bookshelf cards |
| Readwise export → books | `scripts/import-readwise.mjs` | book highlights | (bootstrap/occasional; wiki is now canonical for highlights) |

**Never synced — private wiki types:** `wiki/gospel-study/`, `wiki/meetings/`, `wiki/diligence-research/`, `wiki/daily-log/`. Don't add globs for them. Wikilinks pointing at these unwrap to plain text on the public site.

---

## The link resolver

`sync-from-wiki.mjs` (`resolveWikilinks()`) and `sync-notes-from-wiki.mjs` (`transformLinks()`) build a resolver mapping every wiki page's title + filename + aliases (case-insensitive) → `(kind, slug)` where `kind ∈ {books, essays, notes}`. Concept/people/company pages all route to `notes/`. It transforms three patterns inline:

1. `[[Target]]` → `[Target](/<kind>/<slug>)`
2. `#[[Target]]` → `[Target](/<kind>/<slug>)`
3. `#bare-tag` → `#[bare-tag](/<kind>/<slug>)` (preserves the `#`)

Plus two defensive passes:
- **Backtick strip:** `` `[[X]]` `` → `[[X]]` before resolution.
- **Heal stale links:** re-routes existing `/books/X` ↔ `/essays/X` ↔ `/notes/X` when a slug has moved collections.

Unresolved targets unwrap to plain display text, so a wikilink to a nonexistent page never produces a broken link. Slugs follow `src/lib/bookSlug.ts` (kebab-case, `&` → "and").

---

## Section-level public/private split (book pages)

`sync-from-wiki.mjs` respects an internal split inside each `wiki/books/` page:

| Section | Public? | Behavior |
|---|---|---|
| `## Key Takeaways` | ✅ | → website `<!-- key-takeaways -->` slot; runs resolver |
| `## Public Connections` | ✅ | renamed to `## Connections` on the website; runs resolver |
| `## Private Connections` | ❌ | dropped before write |
| `## Highlights` | ✅ | sourced from the **wiki** page (Kyle-notes ride through); runs resolver; falls back to the existing website block only if the wiki page has no Highlights |

For the `notes` collection, `publish: false` pages render a **"🔒 private wiki note"** landing (`src/pages/notes/[slug].astro`) — title, type, and backlinks visible, body withheld — so every `[[Concept]]` reference still resolves to a valid URL.

---

## Other build-time machinery

- **Backlinks** (`src/lib/backlinks.ts`): scans every content body for outbound `/books/X`, `/essays/X`, `/notes/X` links and builds an inverse index, rendered as "Referenced in" at the bottom of each book/essay/note page.
- **Essay Connections asides:** generated by the wiki's `scripts/add-essay-interconnections.py`, written between `<!-- connections-start -->` markers as a styled `<aside class="wiki-connections">`. CSS in `src/pages/essays/[slug].astro`.
- **`<!--rwid:rwid-XXX-->` markers:** the wiki is now canonical for highlights and dedupes by content, so these are optional provenance. Astro's `remarkStripRwid` plugin (in `astro.config.mjs`) strips any that remain at render time — leave that plugin in place.

---

## Conventions for sync scripts

- Node ≥ 18, no third-party deps beyond Astro + `@astrojs/sitemap`.
- Idempotent — running twice produces the same result.
- Support `--dry-run` where it makes sense; path-resolve from `__filename`, don't assume cwd.
- A sync **owns** what it writes (rebuilds those files/arrays each run) but must leave hand-curated fields untouched (e.g. tweet sync owns `feed`, never touches descriptions).
- Tweets are NOT a content collection — they live purely as `portfolio-ideas.json` feed items and generate no `/notes/` page or backlinks.

---

## Deploy

- `npm run build` — production build (publish.sh runs this to verify before pushing).
- **Vercel auto-deploys** from `main` via the Vercel↔GitHub integration; no deploy config lives in the repo.
- A future authed `notes.kwharrison13.com` (the full wiki, public + private, behind Kyle's login) is planned on **Cloudflare Access** — phase 4, not built. That is the *only* Cloudflare surface; the main site is Vercel.
