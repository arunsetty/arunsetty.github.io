import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    company: z.string().optional(),
    role: z.string().optional(),
    duration: z.string().optional(),
    url: z.string().optional(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const thoughts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const log = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    type: z.enum(["movie", "tv", "anime", "book", "game", "other"]),
    year: z.number().optional(),
    creator: z.string().optional(),

    rating: z.number().min(0).max(10).optional(),
    status: z.enum(["completed", "watching", "reading", "playing", "dropped", "rewatching", "rereading"]),
    firstWatched: z.coerce.date(),
    completed: z.coerce.date().optional(),

    tags: z.array(z.string()).default([]),
    poster: z.string().optional(),
    related: z.string().optional(),

    seasons: z.array(z.object({
      number: z.number(),
      title: z.string().optional(),
      rating: z.number().optional(),
      thoughts: z.string().optional(),
      watched: z.coerce.date().optional(),
    })).optional(),

    episodes: z.array(z.object({
      season: z.number().optional(),
      episode: z.number(),
      title: z.string().optional(),
      rating: z.number().optional(),
      thoughts: z.string().optional(),
      watched: z.coerce.date().optional(),
    })).optional(),

    rewatches: z.array(z.object({
      date: z.coerce.date(),
      note: z.string().optional(),
    })).optional(),

    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, thoughts, log };
