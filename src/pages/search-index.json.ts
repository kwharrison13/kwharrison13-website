import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import booksData from '../data/books.json';
import { bookSlug } from '../lib/bookSlug';

function stripMarkdown(md: string): string {
  return md
    // strip HTML comments
    .replace(/<!--[\s\S]*?-->/g, '')
    // strip images
    .replace(/!\[.*?\]\(.*?\)/g, '')
    // convert links to text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    // strip headings
    .replace(/^#{1,6}\s+/gm, '')
    // strip bold/italic
    .replace(/\*{1,3}([^*]+)\*{1,3}/g, '$1')
    .replace(/_{1,3}([^_]+)_{1,3}/g, '$1')
    // strip horizontal rules
    .replace(/^---+$/gm, '')
    // strip frontmatter-like remnants
    .replace(/^-\s+/gm, '')
    // collapse whitespace
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function extractHighlights(body: string): string[] {
  // Find the ## Highlights section
  const idx = body.search(/^##\s+Highlights\s*$/m);
  if (idx === -1) return [];
  const after = body.slice(idx);
  // Get content between ## Highlights and the next ## (or EOF)
  const nextH2 = after.slice(2).search(/^##\s+/m);
  const section = nextH2 === -1 ? after : after.slice(0, 2 + nextH2);

  const highlights: string[] = [];
  const lines = section.split('\n');
  for (const line of lines) {
    // Top-level bullet (not indented)
    const m = line.match(/^-\s+(.+)$/);
    if (m) {
      let text = m[1]
        // strip rwid comments
        .replace(/<!--rwid:[^>]+-->/g, '')
        // strip location links like ([Location 123](url))
        .replace(/\(\[Location \d+\]\([^)]+\)\)/g, '')
        // strip ^rwid block refs (legacy)
        .replace(/\s*\^rwid-[\w-]+\s*$/, '')
        .trim();
      if (text) highlights.push(text);
    }
  }
  return highlights;
}

export const GET: APIRoute = async () => {
  // Essays
  const essays = await getCollection('essays');
  const essayIndex = essays.map(e => ({
    type: 'essay' as const,
    slug: e.slug || (e.id || '').replace(/\.md$/, ''),
    title: e.data.title,
    date: e.data.date || '',
    tags: e.data.tags || [],
    excerpt: e.data.excerpt || '',
    body: stripMarkdown(e.body || ''),
  }));

  // Books — from content collection (those with highlights)
  const contentBooks = await getCollection('books');
  const contentMap = new Map<string, typeof contentBooks[0]>();
  for (const entry of contentBooks) contentMap.set(entry.slug, entry);

  // Build book index from books.json (all books)
  const seen = new Set<string>();
  const bookIndex: { type: 'book'; slug: string; title: string; author: string; year: string; tags: string[]; highlights: string[] }[] = [];

  const addBook = (b: any, year: string) => {
    const slug = bookSlug(b.title);
    if (seen.has(slug)) return;
    seen.add(slug);
    const entry = contentMap.get(slug);
    const highlights = entry ? extractHighlights(entry.body || '') : [];
    bookIndex.push({
      type: 'book',
      slug,
      title: b.title,
      author: b.author || '',
      year,
      tags: b.tags || [],
      highlights,
    });
  };

  for (const b of (booksData as any).quake_books) {
    addBook(b, String(b.year_read || ''));
  }
  for (const [year, books] of Object.entries((booksData as any).library as Record<string, any[]>)) {
    for (const b of books) addBook(b, year);
  }

  return new Response(JSON.stringify({ essays: essayIndex, books: bookIndex }), {
    headers: { 'Content-Type': 'application/json' },
  });
};
