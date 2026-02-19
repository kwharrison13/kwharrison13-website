import { defineCollection, z } from 'astro:content';

const essays = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tag: z.string(),
    excerpt: z.string(),
  }),
});

const portfolio = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    stage: z.string(),
    description: z.string(),
    url: z.string().optional(),
  }),
});

const books = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    note: z.string().optional(),
    status: z.enum(['read', 'reading', 'want-to-read']).default('read'),
  }),
});

const music = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    artist: z.string().optional(),
    genre: z.string().optional(),
    note: z.string().optional(),
    url: z.string().optional(),
  }),
});

const videos = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    source: z.string().optional(),
    year: z.string().optional(),
    note: z.string().optional(),
    url: z.string().optional(),
  }),
});

const podcasts = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    host: z.string().optional(),
    note: z.string().optional(),
    url: z.string().optional(),
  }),
});

const learning = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    platform: z.string().optional(),
    status: z.string().optional(),
    note: z.string().optional(),
    url: z.string().optional(),
  }),
});

export const collections = { essays, portfolio, books, music, videos, podcasts, learning };
