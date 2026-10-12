import { blogPosts, blogSeries } from "@/data/content";

export const SITE = "https://singhrishabh.com";

export type BlogPost = (typeof blogPosts)[number];

/** Series shown on series pages and in breadcrumbs. "guides" has no homepage card. */
export const SERIES: Record<string, { title: string; description: string }> = {
  ...Object.fromEntries(blogSeries.map((s) => [s.seriesSlug, { title: s.title, description: s.description }])),
  guides: {
    title: "Guides",
    description:
      "Longer, step-by-step guides on building data science projects and portfolios, from setup to deployment.",
  },
};

/** Real last-modified date: `updated` when the post was edited, else its publish date. */
export const modified = (p: BlogPost): string => ("updated" in p && p.updated) || p.date;

/** Newest first. */
export const postsByDate = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));

export const latestModified = (posts: readonly BlogPost[] = blogPosts): string =>
  posts.map(modified).sort().at(-1)!;

export const postsInSeries = (series: string) => postsByDate.filter((p) => p.series === series);

export const postUrl = (slug: string) => `${SITE}/blog/${slug}/`;
export const seriesPath = (series: string) => `/blog/series/${series}/`;

export const formatDate = (d: string) =>
  new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

/** Previous (older) and next (newer) post by publish date. */
export function prevNext(slug: string) {
  const i = postsByDate.findIndex((p) => p.slug === slug);
  return { prev: postsByDate[i + 1], next: postsByDate[i - 1] };
}

/**
 * 3-5 related posts, decided at build time: same series ranked by shared tags then
 * recency, topped up with tag-sharing posts from other series.
 */
export function related(slug: string, max = 4): BlogPost[] {
  const post = blogPosts.find((p) => p.slug === slug)!;
  const shared = (p: BlogPost) => p.tags.filter((t) => (post.tags as readonly string[]).includes(t)).length;
  const others = postsByDate.filter((p) => p.slug !== slug);
  const rank = (list: BlogPost[]) => [...list].sort((a, b) => shared(b) - shared(a));
  const sameSeries = rank(others.filter((p) => p.series === post.series));
  const crossSeries = rank(others.filter((p) => p.series !== post.series && shared(p) > 0));
  const picks = [...sameSeries, ...crossSeries].slice(0, max);
  // Top up with newest posts if a post has too few neighbours (e.g. the lone "guides" post).
  return picks.length >= 3 ? picks : [...picks, ...others.filter((p) => !picks.includes(p))].slice(0, 3);
}
