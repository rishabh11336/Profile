import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock, ExternalLink } from "lucide-react";
import { blogPosts } from "@/data/content";
import { SERIES, SITE, formatDate, modified, postUrl, prevNext, related, seriesPath } from "@/lib/blog";
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
      url: postUrl(slug),
      title: post.title,
      description: post.description,
      images: [{ url: post.image, alt: post.title }],
      publishedTime: post.date,
      modifiedTime: modified(post),
      authors: ["Rishabh Singh"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
    alternates: {
      canonical: `https://singhrishabh.com/blog/${slug}/`,
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
  const mediumUrl = "mediumUrl" in post ? post.mediumUrl : undefined;
  const series = SERIES[post.series];
  const relatedPosts = related(slug);
  const { prev, next } = prevNext(slug);

  const author = {
    "@type": "Person",
    "@id": `${SITE}/#person`,
    name: "Rishabh Singh",
    url: `${SITE}/`,
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${postUrl(slug)}#article`,
    headline: post.title,
    description: post.description,
    // new URL() handles both relative paths and the one post with an absolute image.
    image: post.image ? new URL(post.image, SITE).href : undefined,
    author,
    publisher: author,
    isPartOf: { "@id": `${SITE}/blog/#blog` },
    inLanguage: "en",
    datePublished: post.date,
    dateModified: modified(post),
    url: postUrl(slug),
    keywords: post.tags,
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl(slug) },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://singhrishabh.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://singhrishabh.com/blog/" },
      { "@type": "ListItem", position: 3, name: series.title, item: `${SITE}${seriesPath(post.series)}` },
      {
        "@type": "ListItem",
        position: 4,
        name: post.title,
        item: `https://singhrishabh.com/blog/${slug}/`,
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
          </div>
        </nav>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10 lg:py-16">
          {/* Breadcrumbs — visible at every width, mirrors the BreadcrumbList JSON-LD */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1 text-xs text-muted">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li aria-hidden="true" className="opacity-40 mx-1">/</li>
              <li><Link href="/blog/" className="hover:text-accent transition-colors">Blog</Link></li>
              <li aria-hidden="true" className="opacity-40 mx-1">/</li>
              <li><Link href={seriesPath(post.series)} className="hover:text-accent transition-colors">{series.title}</Link></li>
              <li aria-hidden="true" className="opacity-40 mx-1">/</li>
              <li aria-current="page" className="text-text">{post.title}</li>
            </ol>
          </nav>

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
              {formatDate(post.date)}
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

          {mediumUrl && (
            <p className="mt-10 text-sm text-muted">
              <a
                href={mediumUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
              >
                Also on Medium
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </p>
          )}

          {/* Related articles — chosen at build time from the same series / shared tags */}
          <section aria-labelledby="related-heading" className="mt-16 pt-8 border-t border-border/50">
            <h2 id="related-heading" className="text-xl font-bold text-text mb-4">Related articles</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedPosts.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}/`}
                    className="block h-full p-4 rounded-xl bg-section-alt border border-border/50 hover:border-accent transition-colors duration-200"
                  >
                    <span className="block text-sm font-semibold text-text mb-1">{p.title}</span>
                    <span className="block text-xs text-muted line-clamp-2">{p.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Previous / Next by publish date */}
          <nav aria-label="Previous and next articles" className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prev ? (
              <Link
                href={`/blog/${prev.slug}/`}
                className="p-4 rounded-xl border border-border/50 hover:border-accent transition-colors duration-200"
              >
                <span className="flex items-center gap-1 text-xs text-muted mb-1">
                  <ArrowLeft className="w-3.5 h-3.5" /> Previous
                </span>
                <span className="text-sm font-medium text-text">{prev.title}</span>
              </Link>
            ) : <span />}
            {next && (
              <Link
                href={`/blog/${next.slug}/`}
                className="p-4 rounded-xl border border-border/50 hover:border-accent transition-colors duration-200 sm:text-right"
              >
                <span className="flex items-center sm:justify-end gap-1 text-xs text-muted mb-1">
                  Next <ArrowRight className="w-3.5 h-3.5" />
                </span>
                <span className="text-sm font-medium text-text">{next.title}</span>
              </Link>
            )}
          </nav>

          <div className="mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm text-muted hover:border-accent hover:text-accent transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
