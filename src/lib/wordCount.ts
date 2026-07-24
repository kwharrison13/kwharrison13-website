// Word-count + reading-time helpers for essays.
//
// Counts are derived at BUILD TIME from each essay's raw markdown body, so
// they update automatically every time an essay is added or edited — there is
// no stored/hand-maintained number to keep in sync. Used by the essays index
// for the "Never Miss a Week" year stats and the per-essay teaser meta.

// Average adult reading speed for prose (words per minute). 225 is a common
// midpoint used by Medium/Substack-style estimators.
const WORDS_PER_MINUTE = 225;

/**
 * Strip markdown/HTML chrome from an essay body and count the remaining prose
 * words. Removes the build-injected Wiki Connections aside, HTML comments and
 * tags, code fences, and image syntax; keeps the visible text of links.
 */
export function essayWordCount(body: string): number {
  if (!body) return 0;

  let text = body;

  // Drop the generated connections aside (between the HTML comment markers)
  // and any other HTML comments.
  text = text.replace(/<!--\s*connections-start\s*-->[\s\S]*?<!--\s*connections-end\s*-->/gi, ' ');
  text = text.replace(/<!--[\s\S]*?-->/g, ' ');

  // Drop fenced and inline code — not prose the reader "reads".
  text = text.replace(/```[\s\S]*?```/g, ' ');
  text = text.replace(/`[^`]*`/g, ' ');

  // Images carry no reading words; remove before links so the alt text goes too.
  text = text.replace(/!\[[^\]]*\]\([^)]*\)/g, ' ');

  // Links + wikilinks → keep the visible label, drop the target.
  text = text.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
  text = text.replace(/\[\[([^\]]*)\]\]/g, '$1');

  // Any remaining raw HTML tags (e.g. the <aside>/<div>/<span> wrappers).
  text = text.replace(/<[^>]+>/g, ' ');

  // Markdown emphasis / heading / list / quote punctuation → spaces.
  text = text.replace(/[#>*_~`]/g, ' ');

  const words = text.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w));
  return words.length;
}

/** Whole-minute reading-time estimate (minimum 1 min) for a word count. */
export function readingMinutes(words: number): number {
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

/** Format a word count with thousands separators, e.g. 12345 → "12,345". */
export function formatWords(words: number): string {
  return words.toLocaleString('en-US');
}
