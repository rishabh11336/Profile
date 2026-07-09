import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, ExternalLink } from "lucide-react";
import { blogPosts } from "@/data/content";
import { blogContent } from "@/data/blogContent";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      images: [{ url: post.image, alt: post.title }],
      publishedTime: post.date,
      authors: ["Rishabh Singh"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
    alternates: {
      canonical: `https://rishabhsingh.me/blog/${slug}/`,
    },
  };
}

function estimateReadTime(html: string): number {
  const words = html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  const body = blogContent[slug];

  if (!post || !body) notFound();

  const readTime = estimateReadTime(body);
  const mediumUrl = post.mediumUrl;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image,
    author: {
      "@type": "Person",
      "@id": "https://rishabhsingh.me/#person",
      name: "Rishabh Singh",
      url: "https://rishabhsingh.me",
    },
    publisher: { "@type": "Person", name: "Rishabh Singh" },
    datePublished: post.date,
    dateModified: ("updated" in post && post.updated) || post.date,
    url: `https://rishabhsingh.me/blog/${slug}/`,
    keywords: post.tags,
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://rishabhsingh.me/blog/${slug}/` },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://rishabhsingh.me/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://rishabhsingh.me/blog/" },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://rishabhsingh.me/blog/${slug}/`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="min-h-screen bg-bg">
        {/* Top nav bar */}
        <nav
          className="sticky top-0 z-40 border-b border-border/50 backdrop-blur-sm"
          style={{ background: "var(--bg)" }}
          aria-label="Article navigation"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors duration-200 shrink-0"
            >
              <ArrowLeft className="w-4 h-4" />
              All Posts
            </Link>
            <nav className="hidden sm:flex items-center gap-1 text-xs text-muted" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              <span className="opacity-40 mx-1">/</span>
              <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
              <span className="opacity-40 mx-1">/</span>
              <span className="text-text truncate max-w-[200px]">{post.title}</span>
            </nav>
            {mediumUrl && (
              <a
                href={mediumUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs text-muted hover:text-accent transition-colors shrink-0"
              >
                Read on Medium
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </nav>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10 lg:py-16">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full border border-accent/40 text-accent bg-accent/8 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text leading-tight mb-4">
            {post.title}
          </h1>

          {/* Description */}
          <p className="text-lg text-muted leading-relaxed mb-6 max-w-3xl">
            {post.description}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted mb-8 pb-8 border-b border-border/50">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {readTime} min read
            </span>
            <span className="text-accent font-medium">Rishabh Singh</span>
          </div>

          {/* Article body — HTML extracted from original posts */}
          <div
            className="blog-prose"
            dangerouslySetInnerHTML={{ __html: body }}
          />

          {/* Slug-specific scripts for interactive widgets */}
          {slug === "ci-vs-pi-regression-bands" && (
            <Script src="/blog-scripts/ci-pi-widget.js" strategy="afterInteractive" />
          )}

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-border/50 flex flex-wrap gap-4 items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm text-muted hover:border-accent hover:text-accent transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            {mediumUrl && (
              <a
                href={mediumUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-h transition-colors duration-200"
              >
                Read on Medium
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </article>
      </div>
    </>
  );
}
