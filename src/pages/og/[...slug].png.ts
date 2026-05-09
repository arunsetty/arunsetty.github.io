import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import { renderOg } from "../../og/render";
import { SITE, THOUGHTS, LOG } from "../../consts";

interface OgEntry {
  slug: string;
  title: string;
  description: string;
  eyebrow?: string;
}

async function getEntries(): Promise<OgEntry[]> {
  const entries: OgEntry[] = [
    {
      slug: "index",
      title: SITE.shortName,
      description: SITE.motto + " " + SITE.titles.join(", ") + ".",
      eyebrow: SITE.titles.join(" · "),
    },
    { slug: "about", title: "About", description: SITE.motto, eyebrow: SITE.shortName },
    {
      slug: "now",
      title: "Now",
      description: "What I'm currently doing and thinking about.",
      eyebrow: SITE.shortName,
    },
    {
      slug: "journey",
      title: "Journey",
      description:
        "Eight years of building software, from mentoring students to AI to fullstack development to no-code platforms.",
      eyebrow: SITE.shortName,
    },
    {
      slug: "work",
      title: "Work",
      description:
        "Eight years across no-code platforms, application health monitoring, DevOps tooling, AI systems, and full-stack development.",
      eyebrow: SITE.shortName,
    },
    {
      slug: "thoughts",
      title: THOUGHTS.brand,
      description: `${THOUGHTS.tagline} ${THOUGHTS.blurb}`,
      eyebrow: SITE.shortName,
    },
    {
      slug: "log",
      title: LOG.brand,
      description: `${LOG.tagline} ${LOG.blurb}`,
      eyebrow: SITE.shortName,
    },
    {
      slug: "404",
      title: "Lost in the void",
      description: "The page you're looking for doesn't exist.",
      eyebrow: "404",
    },
  ];

  const thoughts = (await getCollection("thoughts")).filter((p) => !p.data.draft);
  for (const p of thoughts) {
    entries.push({
      slug: `thoughts/${p.slug}`,
      title: p.data.title,
      description: p.data.description,
      eyebrow: THOUGHTS.brand,
    });
  }

  const projects = await getCollection("projects");
  for (const p of projects) {
    entries.push({
      slug: `work/${p.slug}`,
      title: p.data.title,
      description: p.data.description,
      eyebrow: p.data.company ? `Work · ${p.data.company}` : "Work",
    });
  }

  const log = (await getCollection("log")).filter((e) => !e.data.draft);
  for (const e of log) {
    entries.push({
      slug: `log/${e.slug}`,
      title: e.data.title,
      description: e.data.creator ? `${e.data.type} · ${e.data.creator}` : e.data.type,
      eyebrow: LOG.brand,
    });
  }

  return entries;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const entries = await getEntries();
  return entries.map((e) => ({
    params: { slug: e.slug },
    props: { title: e.title, description: e.description, eyebrow: e.eyebrow },
  }));
};

export const GET: APIRoute = async ({ props }) => {
  const png = await renderOg({
    title: props.title as string,
    description: props.description as string,
    eyebrow: props.eyebrow as string | undefined,
  });
  return new Response(new Uint8Array(png), {
    headers: { "Content-Type": "image/png", "Cache-Control": "public, max-age=31536000, immutable" },
  });
};
