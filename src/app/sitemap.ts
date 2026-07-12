import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/content";

export const dynamic = "force-static";

const SIX_MONTHS_MS = 1000 * 60 * 60 * 24 * 180;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: "https://rishabhsingh.me/",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://rishabhsingh.me/blog/",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://rishabhsingh.me/privacy/",
      lastModified: new Date("2026-07-12"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...blogPosts.map((post) => {
      const postDate = new Date(post.date);
      const isRecent = now.getTime() - postDate.getTime() < SIX_MONTHS_MS;
      return {
        url: `https://rishabhsingh.me/blog/${post.slug}/`,
        lastModified: postDate,
        changeFrequency: (isRecent ? "monthly" : "yearly") as "monthly" | "yearly",
        priority: isRecent ? 0.75 : 0.6,
      };
    }),
  ];
}
