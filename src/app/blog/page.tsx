import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/content";
import BlogFilterClient from "./BlogFilterClient";

export default function BlogPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back link */}
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-sm mb-10 transition-colors duration-200 hover:text-[#2dd4bf]"
          style={{ color: "var(--text-muted)" }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to portfolio
        </Link>

        {/* Header — server-rendered, always visible to crawlers */}
        <div className="mb-12">
          <p className="text-[#2dd4bf] uppercase tracking-widest text-sm font-medium mb-2">
            Writing on AI, ML &amp; System Design
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog</h1>
          <p className="text-base max-w-2xl" style={{ color: "var(--text-muted)" }}>
            {blogPosts.length} articles — technical deep-dives on machine learning, Python, and web
            development.
          </p>
          <div className="mt-5 h-1 w-16 bg-[#2dd4bf] rounded-full" />
        </div>

        {/* Filter tabs + article grid (client component handles interactivity) */}
        <BlogFilterClient posts={blogPosts} initialSeries="all" />
      </div>
    </div>
  );
}
