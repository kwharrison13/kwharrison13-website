import { getCollection } from 'astro:content';

export type Backlink = {
  title: string;
  url: string;
  kind: 'books' | 'essays' | 'notes';
};

let cache: Map<string, Backlink[]> | null = null;

/**
 * Build an inverse-link index across all collections.
 *
 * For every page, scans the rendered-markdown body for outbound links of the
 * form `/(books|essays|notes)/<slug>` and records the referring page.
 *
 * One-pass, cached per build — Astro calls getStaticPaths for every page,
 * so we don't want to redo the scan each time.
 */
export async function buildBacklinksIndex(): Promise<Map<string, Backlink[]>> {
  if (cache) return cache;
  const idx = new Map<string, Backlink[]>();
  const collections: Backlink['kind'][] = ['books', 'essays', 'notes'];
  for (const kind of collections) {
    const entries = await getCollection(kind);
    for (const entry of entries) {
      const sourceUrl = `/${kind}/${entry.slug}`;
      const body = entry.body || '';
      const seen = new Set<string>();
      // Match markdown links to internal pages
      const re = /\]\((\/(?:books|essays|notes)\/[a-z0-9-]+)\/?\)/g;
      let m: RegExpExecArray | null;
      while ((m = re.exec(body)) !== null) {
        const target = m[1];
        if (target === sourceUrl) continue;
        if (seen.has(target)) continue;
        seen.add(target);
        if (!idx.has(target)) idx.set(target, []);
        idx.get(target)!.push({
          title: (entry.data as { title: string }).title,
          url: sourceUrl,
          kind,
        });
      }
    }
  }
  // Sort each entry by title for stable rendering
  for (const arr of idx.values()) arr.sort((a, b) => a.title.localeCompare(b.title));
  cache = idx;
  return idx;
}

export async function getBacklinks(url: string): Promise<Backlink[]> {
  const idx = await buildBacklinksIndex();
  return idx.get(url) || [];
}
