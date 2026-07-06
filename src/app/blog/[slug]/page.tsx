import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, ExternalLink } from "lucide-react";
import { blogPosts } from "@/data/content";
import { blogContent } from "@/data/blogContent";

const MEDIUM_LINKS: Record<string, string> = {
  "bayesian-learning-in-a-minute": "https://medium.com/ai-in-plain-english/bayesian-learning-in-a-minute-c93189e8993e",
  "conda-virtual-environment-commands": "https://medium.com/@asusrishabh/conda-virtual-environment-commands-9877b4730220",
  "confusion-matrix-metrics-in-a-minute": "https://medium.com/ai-in-plain-english/confusion-matrix-metrics-in-a-minute-e1596872e90b",
  "convert-python-program-to-exe": "https://medium.com/@asusrishabh/convert-python-program-to-exe-c773345716df",
  "convolutional-neural-networks-cnns-in-a-minute": "https://medium.com/ai-in-plain-english/convolutional-neural-networks-cnns-in-a-minute-4c9ae1b9a2cf",
  "cors-in-flask-bridging-frontend-and-backend": "https://medium.com/stackademic/cors-in-flask-bridging-frontend-and-backend-c4d5bdf160dc",
  "forecasting-in-a-minute": "https://medium.com/@asusrishabh/forecasting-in-a-minute-f145fc6d2e16",
  "http-methods-enhancing-web-communication": "https://medium.com/@asusrishabh/http-methods-enhancing-web-communication-eebb2afdcddd",
  "lazy-loading-for-enhanced-user-experience": "https://medium.com/stackademic/lazy-loading-for-enhanced-user-experience-c96441e432e0",
  "linear-regression-in-a-minute": "https://medium.com/ai-in-plain-english/linear-regression-in-a-minute-c298faf54238",
  "list-vs-set-in-a-minute": "https://medium.com/@asusrishabh/list-vs-set-in-a-minute-fe8b278d53c9",
  "multiclass-vs-multilabel-classification-in-a-minute": "https://medium.com/ai-in-plain-english/multiclass-vs-multilabel-classification-in-a-minute-261b6e320061",
  "python-program-for-matrix-multiplication": "https://medium.com/@asusrishabh/python-program-for-matrix-multiplication-5c1de08bb105",
  "python-virtual-environment-introduction": "https://medium.com/@asusrishabh/python-virtual-environment-introduction-6faf172bf53c",
  "requirements-txt-in-python": "https://medium.com/@asusrishabh/requirements-txt-in-python-947b0b43bbe6",
  "scalars-vectors-matrices-tensor-in-a-minute": "https://medium.com/stackademic/scalars-vectors-matrices-tensor-in-a-minute-0ebcd7f8e3b7",
  "session-in-the-flask-for-login": "https://medium.com/@asusrishabh/session-in-the-flask-for-login-3c2f4132a3d8",
  "sets-performance-better-vs-lists-why": "https://medium.com/@asusrishabh/sets-performance-better-vs-lists-why-89334b4468ad",
  "support-vector-machine-svm": "https://medium.com/@asusrishabh/support-vector-machine-svm-736fb20b239b",
  "svms-kernel-trick-in-a-minute": "https://medium.com/@asusrishabh/svms-kernel-trick-in-a-minute-bd0554b31ec0",
  "transformers-in-a-minute": "https://medium.com/stackademic/transformers-in-a-minute-00bfb19b2225",
  "understanding-the-if-name-main": "https://medium.com/@asusrishabh/understanding-the-if-name-main-15538fd9df66",
};

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
  const mediumUrl = MEDIUM_LINKS[slug];

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
