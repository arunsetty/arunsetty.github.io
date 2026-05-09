# arunsetty.github.io

Personal site of Arun Setty Kodavali. Live at [arunsetty.github.io](https://arunsetty.github.io).

Storyteller, tinkerer, thinker, engineer. Co-founder & CTO at Ur AI. Daily essays at [Ephemeral Thoughts](https://arunsetty.github.io/thoughts).

## Stack

Astro 5 · React · MDX content collections · Tailwind v4 · Fontsource (Fraunces, Newsreader, Inter, JetBrains Mono) · Satori + resvg for build-time OG cards · deployed to GitHub Pages from `production`.

## Local dev

```bash
bun install
bun run dev      # http://localhost:4321
bun run build    # static output in dist/
bun run preview  # serve dist/ for a final check
```

## Layout

- `src/pages/` — routes (Astro + MDX)
- `src/content/{thoughts,projects,log}/` — content collections
- `src/layouts/BaseLayout.astro` — shell, meta, JSON-LD
- `src/og/` — Satori card template + Fraunces TTFs
- `src/pages/og/[...slug].png.ts` — per-page OG image generator
- `src/pages/rss.xml.ts` — RSS feed for thoughts
- `public/` — favicon, resume, robots.txt

## History

Originally forked from Brittany Chiang's [bchiang7/bchiang7.github.io](https://github.com/bchiang7/bchiang7.github.io) in an earlier life. Rewritten on Astro; nothing of the original template remains.
