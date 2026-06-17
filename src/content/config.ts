import { defineCollection, z } from 'astro:content';

const essays = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.string(),
    tags: z.array(z.string()).optional(),
    excerpt: z.string().optional(),
    slug: z.string().optional(),
    type: z.string().optional(),
    substack_url: z.string().optional(),
  }),
});

const books = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    cover: z.string().optional(),
    year_read: z.union([
      z.string(),
      z.number(),
      z.array(z.union([z.string(), z.number()])),
    ]).optional(),
    rating: z.number().optional(),
    quake: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    readwise_url: z.string().optional(),
    readwise_book_id: z.union([z.string(), z.number()]).optional(),
    last_imported: z.string().optional(),
    key_takeaways_status: z.enum(['pending', 'written']).optional(),
  }),
});

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.enum(['concept', 'person', 'meeting', 'article', 'essay-research', 'longform']).optional(),
    format: z.string().optional(),
    publish: z.boolean().default(false),
    excerpt: z.string().optional(),
    author: z.string().optional(),
    url: z.string().optional(),
    source_published: z.string().optional(),
    confidence: z.enum(['low', 'medium', 'high']).optional(),
    created: z.string().optional(),
    updated: z.string().optional(),
    last_updated_by: z.string().optional(),
    sources: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    aliases: z.array(z.string()).optional(),
    related: z.array(z.string()).optional(),
    reference_count: z.number().optional(),
  }),
});

export const collections = { essays, books, notes };
