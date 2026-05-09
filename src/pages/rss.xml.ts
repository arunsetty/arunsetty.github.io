import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE, THOUGHTS } from "../consts";

export async function GET(context: { site?: URL }) {
  const posts = (await getCollection("thoughts"))
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  return rss({
    title: `${THOUGHTS.brand} · ${SITE.shortName}`,
    description: `${THOUGHTS.tagline} ${THOUGHTS.blurb}`,
    site: context.site ?? SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/thoughts/${post.slug}/`,
      categories: post.data.tags,
    })),
  });
}
