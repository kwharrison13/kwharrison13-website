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

export const collections = { essays };
