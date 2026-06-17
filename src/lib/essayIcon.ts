// Picks a topic-relevant line icon for each essay based on its title,
// excerpt, and tags. Self-contained (no external icon API): icons are
// Lucide-style 24x24 line paths drawn with `currentColor` so they inherit
// the muted icon color and adapt to dark mode. When nothing matches we fall
// back to a deterministic, slug-hashed pick so every essay still gets a
// stable, varied icon instead of an identical placeholder.

type EssayData = {
  title?: string;
  excerpt?: string;
  tags?: string[];
  tag?: string; // a few legacy essays use a singular `tag`
};

// Inner SVG markup for each icon (Lucide 24x24, stroke = currentColor).
const ICONS: Record<string, string> = {
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  mic: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>',
  cpu: '<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
  sparkles: '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>',
  network: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>',
  home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
  dollar: '<line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
  trending: '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
  chart: '<line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/>',
  rocket: '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
  pen: '<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18z"/><path d="m2 2 7.586 7.586"/><circle cx="11" cy="11" r="2"/>',
  feather: '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" x2="2" y1="8" y2="22"/><line x1="17.5" x2="9" y1="15" y2="15"/>',
  bulb: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  compass: '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
  flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
};

// Ordered keyword rules — first match wins, so put specific topics before
// broad ones. Each pattern is tested against the combined lowercased
// title + excerpt + tags text.
const RULES: Array<[RegExp, keyof typeof ICONS]> = [
  [/\bbooks?\b|reading|\bread\b|library|highlights?/, 'book'],
  [/\bpodcast\b|\(with\s/, 'mic'],
  [/\bai\b|artificial intelligence|\bgpt\b|\bllm\b|machine learning|cluely/, 'cpu'],
  [/defen[cs]e|military|\bwar\b|weapon|chips for america|missile/, 'shield'],
  [/world.?build|creation|creating|\bmagic\b|storytell|narrative|\bfiction\b|imagination/, 'sparkles'],
  [/latticework|knowledge graph|\bnetwork\b|\bgraph\b|connect|web of|lattice/, 'network'],
  [/famil|\btown\b|\bhome\b|roots|generation|\bfather\b|\bdad\b|\bkids\b|children|legacy/, 'home'],
  [/america|global|world\b|\bnation\b|countr|geopolit|empire/, 'globe'],
  [/\bcash\b|kingmaker|wealth|\bmoney\b|allocat|\bdollar/, 'dollar'],
  [/venture|\bvc\b|investing|investor|\binvest|portfolio|allocator|fund(s|ing)?\b/, 'trending'],
  [/market|trading|\btrade\b|\bstock|bubble|crash|recession|valuation|bull|bear/, 'chart'],
  [/startup|building|\bbuild\b|product|compan(y|ies)|founder|unicorn|\bengine\b|scal(e|ing)/, 'rocket'],
  [/writing|\bwrite\b|essay|honest|nuance|argument|barking|complain|words?\b/, 'pen'],
  [/clarity|thought|think|\bidea|belief|believ|\bfaith|knowledge|learn|wisdom/, 'bulb'],
  [/leader|culture|communit|people|\bcult\b|\bteam\b|customer love|relationship/, 'users'],
  [/conviction|contrarian|contrary|renegade|strateg|\bplan\b|\bbet\b/, 'target'],
  [/career|personal|\bself\b|grow|journey|discipline|habit/, 'compass'],
  [/hype|passion|urgenc|\brush\b|fire|momentum|grass/, 'flame'],
];

// Icons rotated through when no keyword rule matches.
const FALLBACK: Array<keyof typeof ICONS> = ['feather', 'bulb', 'compass', 'target', 'sparkles'];

function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

function firstMatch(text: string): (keyof typeof ICONS) | null {
  for (const [pattern, name] of RULES) {
    if (pattern.test(text)) return name;
  }
  return null;
}

/** Returns the icon key (for testing / debugging). */
export function getEssayIconName(data: EssayData): keyof typeof ICONS {
  const tags = data.tags ?? (data.tag ? [data.tag] : []);
  const title = (data.title ?? '').toLowerCase();
  // The title is the most reliable topic signal, so match it first. Only fall
  // back to the (noisier) excerpt + tags when the title yields nothing —
  // otherwise an incidental word in a blurb can hijack the icon.
  const match =
    firstMatch(title) ??
    firstMatch(`${data.excerpt ?? ''} ${tags.join(' ')}`.toLowerCase());
  return match ?? FALLBACK[hash(title || (data.excerpt ?? '')) % FALLBACK.length];
}

/** Returns a full inline <svg> string ready to drop into the page. */
export function essayIconSvg(data: EssayData): string {
  const inner = ICONS[getEssayIconName(data)];
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
}
