import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/content";
import { SERIES, SITE, latestModified, modified, postsInSeries, seriesPath } from "@/lib/blog";

export const dynamic = "force-static";

// Bump by hand when / or /blog/ change without a new post (last: Latest articles + series links).
const INDEX_PAGES_UPDATED = "2026-10-12";

// Only indexable, canonical, 200 URLs. Redirect stubs (public/blog/*.html) and 404s stay out.
// lastmod always comes from real content dates, never the build time.
export default function sitemap(): MetadataRoute.Sitemap {
  const newest = [latestModified(), INDEX_PAGES_UPDATED].sort().at(-1)!;

  return [
    { url: `${SITE}/`, lastModified: newest },
    { url: `${SITE}/blog/`, lastModified: newest },
    { url: `${SITE}/privacy/`, lastModified: "2026-07-12" },
    ...Object.keys(SERIES).map((series) => ({
      url: `${SITE}${seriesPath(series)}`,
      lastModified: latestModified(postsInSeries(series)),
    })),
    ...blogPosts.map((post) => ({
      url: `${SITE}/blog/${post.slug}/`,
      lastModified: modified(post),
    })),
  ];
}
