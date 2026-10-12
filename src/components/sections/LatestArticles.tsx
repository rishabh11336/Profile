import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/content";
import { postsByDate, formatDate } from "@/lib/blog";

// Server component: <Link> exports as plain <a href> so every post URL is in the static HTML.
export default function LatestArticles() {
  return (
    <section id="latest-articles" className="pb-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-text mb-6">Latest articles</h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {postsByDate.slice(0, 8).map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}/`}
                className="block h-full p-5 rounded-xl bg-section-alt border border-border/50 hover:border-accent transition-colors duration-200"
              >
                <span className="flex items-center gap-1.5 text-xs text-muted mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </span>
                <span className="block text-base font-semibold text-text mb-1">{post.title}</span>
                <span className="block text-sm text-muted leading-relaxed line-clamp-1">
                  {post.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/blog/"
          className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-accent/40 text-accent text-sm font-medium hover:bg-accent hover:text-white transition-colors duration-200"
        >
          View all {blogPosts.length} articles
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
