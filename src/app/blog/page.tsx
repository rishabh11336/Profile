import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/content";
import BlogFilterClient from "./BlogFilterClient";

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blog — AI, ML & Python | Rishabh Singh",
  url: "https://rishabhsingh.me/blog/",
  author: { "@id": "https://rishabhsingh.me/#person" },
  blogPost: blogPosts.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    url: `https://rishabhsingh.me/blog/${p.slug}/`,
    datePublished: p.date,
  })),
};

export default function BlogPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back link */}
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-sm mb-10 text-muted hover:text-accent transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to portfolio
        </Link>

        {/* Header — server-rendered, always visible to crawlers */}
        <div className="mb-12">
          <p className="text-accent uppercase tracking-widest text-sm font-medium mb-2">
            Writing on AI, ML &amp; System Design
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">Blog</h1>
          <p className="text-base text-muted max-w-2xl">
            {blogPosts.length} articles — technical deep-dives on machine learning, Python, and web
            development.
          </p>
          <div className="mt-5 h-1 w-16 bg-accent rounded-full" />
        </div>

        {/* Filter tabs + article grid (client component handles interactivity) */}
        <BlogFilterClient posts={blogPosts} initialSeries="all" />
      </div>
    </div>
  );
}
