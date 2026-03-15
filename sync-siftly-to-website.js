#!/usr/bin/env node
// sync-siftly-to-website.js
// 
// Reads Siftly's SQLite database and syncs categorized bookmarks
// into your website's portfolio-ideas.json feed arrays.
//
// Usage:
//   node sync-siftly-to-website.js
//
// Assumes:
//   - Siftly is at ~/Siftly
//   - Website repo is at ~/kwharrison13-website
//   - Siftly categories use the same slugs as portfolio idea IDs

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const SIFTLY_DB = path.join(process.env.HOME, 'Siftly', 'prisma', 'dev.db');
const WEBSITE_REPO = path.join(process.env.HOME, 'kwharrison13-website');
const PORTFOLIO_JSON = path.join(WEBSITE_REPO, 'src', 'data', 'portfolio-ideas.json');

// Check prerequisites
if (!fs.existsSync(SIFTLY_DB)) {
  console.error('❌ Siftly database not found at', SIFTLY_DB);
  console.error('   Make sure Siftly is installed and has imported bookmarks.');
  process.exit(1);
}
if (!fs.existsSync(PORTFOLIO_JSON)) {
  console.error('❌ Portfolio ideas JSON not found at', PORTFOLIO_JSON);
  process.exit(1);
}

// Query Siftly's SQLite database
function querySiftly(sql) {
  const result = execSync(
    `sqlite3 -json "${SIFTLY_DB}" "${sql.replace(/"/g, '\\"')}"`,
    { encoding: 'utf-8' }
  );
  return JSON.parse(result || '[]');
}

// Get all bookmarks with their category assignments
const bookmarks = querySiftly(`
  SELECT 
    b.id,
    b.tweetText,
    b.authorName,
    b.authorHandle,
    b.tweetUrl,
    b.createdAt,
    b.postedAt
  FROM Bookmark b
  ORDER BY b.postedAt DESC
`);

// Get category assignments
const categoryAssignments = querySiftly(`
  SELECT 
    bc.bookmarkId,
    c.slug as categorySlug,
    bc.confidence
  FROM BookmarkCategory bc
  JOIN Category c ON bc.categoryId = c.id
  WHERE bc.confidence >= 0.5
  ORDER BY bc.confidence DESC
`);

// Build a map: categorySlug -> array of feed items
const feedByCategory = {};
const bookmarkMap = new Map();

for (const b of bookmarks) {
  bookmarkMap.set(b.id, b);
}

for (const assignment of categoryAssignments) {
  const slug = assignment.categorySlug;
  const bookmark = bookmarkMap.get(assignment.bookmarkId);
  if (!bookmark) continue;

  if (!feedByCategory[slug]) feedByCategory[slug] = [];

  // Truncate tweet text for the feed display
  const content = bookmark.tweetText
    ? bookmark.tweetText.slice(0, 280) + (bookmark.tweetText.length > 280 ? '...' : '')
    : '';

  feedByCategory[slug].push({
    type: 'tweet',
    source: bookmark.authorHandle ? `@${bookmark.authorHandle}` : bookmark.authorName || 'X',
    author: bookmark.authorName || '',
    handle: bookmark.authorHandle ? `@${bookmark.authorHandle}` : '',
    date: bookmark.postedAt
      ? new Date(bookmark.postedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
      : '',
    content: content,
    url: bookmark.tweetUrl || '',
  });
}

// Merge into portfolio-ideas.json
const portfolioIdeas = JSON.parse(fs.readFileSync(PORTFOLIO_JSON, 'utf-8'));
let totalAdded = 0;

for (const idea of portfolioIdeas) {
  const newFeed = feedByCategory[idea.id] || [];
  
  // Get existing feed URLs to avoid duplicates
  const existingUrls = new Set((idea.feed || []).map(f => f.url));
  
  // Only add new items
  const itemsToAdd = newFeed.filter(item => item.url && !existingUrls.has(item.url));
  
  if (itemsToAdd.length > 0) {
    idea.feed = [...(idea.feed || []), ...itemsToAdd];
    // Sort by date descending
    idea.feed.sort((a, b) => new Date(b.date) - new Date(a.date));
    console.log(`  ✅ ${idea.id}: +${itemsToAdd.length} new items (${idea.feed.length} total)`);
    totalAdded += itemsToAdd.length;
  } else {
    console.log(`  — ${idea.id}: no new items`);
  }
}

// Write back
fs.writeFileSync(PORTFOLIO_JSON, JSON.stringify(portfolioIdeas, null, 2));

console.log(`\n🎉 Synced ${totalAdded} new feed items across ${Object.keys(feedByCategory).length} categories`);
console.log(`\nTo deploy:`);
console.log(`  cd ${WEBSITE_REPO}`);
console.log(`  git add src/data/portfolio-ideas.json`);
console.log(`  git commit -m "Sync Siftly bookmarks to portfolio idea feeds"`);
console.log(`  git push origin main`);
