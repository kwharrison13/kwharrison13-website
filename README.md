# kwharrison13.com

Personal site for Kyle Harrison. Built with [Astro](https://astro.build), deployed to [Vercel](https://vercel.com).

## Setup

1. Install dependencies: `npm install`
2. Run locally: `npm run dev`
3. Build: `npm run build`

Vercel auto-deploys on every push to `main`.

---

## How to Update Content

All content lives in `src/content/`. You don't need to touch any code to add new content.

### Adding an Essay

Create a new file in `src/content/essays/` named `your-essay-slug.md`:

```md
---
title: "Your Essay Title"
date: "2025-06-01"
tag: "Venture"
excerpt: "One sentence summary shown on the listing page and homepage."
---

Your essay content in markdown here.
```

### Adding a Book

Edit `src/content/books/books.json` and add an entry:

```json
{
  "title": "Book Title",
  "author": "Author Name",
  "note": "Why I recommend it.",
  "status": "read"
}
```

`status` options: `"read"`, `"reading"`, `"want-to-read"`

### Adding a Portfolio Idea

Edit `src/content/portfolio/ideas.json`:

```json
{
  "name": "Company or Thesis Name",
  "stage": "Early Stage",
  "description": "Description of the opportunity.",
  "url": "https://optional-link.com"
}
```

### Adding Music / Videos / Podcasts / Learning

Edit the corresponding JSON file in `src/content/`:
- `music/music.json`
- `videos/videos.json`
- `podcasts/podcasts.json`
- `learning/learning.json`

---

## File Structure

```
src/
  content/         ← All your content lives here
    essays/        ← .md files, one per essay
    portfolio/     ← ideas.json
    books/         ← books.json
    music/         ← music.json
    videos/        ← videos.json
    podcasts/      ← podcasts.json
    learning/      ← learning.json
  pages/           ← Site pages (don't need to touch these)
  layouts/         ← Base layout
  styles/          ← Global CSS
```
