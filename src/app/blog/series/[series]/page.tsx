import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar } from "lucide-react";
import { SERIES, SITE, formatDate, postsInSeries, seriesPath } from "@/lib/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(SERIES).map((series) => ({ series }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ series: string }>;
}): Promise<Metadata> {
  const { series } = await params;
  const s = SERIES[series];
  if (!s) return {};
  const url = `${SITE}${seriesPath(series)}`;
  const title = `${s.title} Series — Articles by Rishabh Singh`;
  // Overrides blog/layout.tsx, which points canonical and og:url at /blog/.
  return {
    title,
    description: s.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description: s.description,
      images: [{ url: `${SITE}/images/og-card.png`, width: 1200, height: 630 }],
    },
  };
}

export default async function SeriesPage({ params }: { params: Promise<{ series: string }> }) {
  const { series } = await params;
  const s = SERIES[series];
  if (!s) notFound();
  const posts = postsInSeries(series);
  const url = `${SITE}${seriesPath(series)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#page`,
        url,
        name: `${s.title} Series`,
        description: s.description,
        isPartOf: { "@id": `${SITE}/#website` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: posts.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE}/blog/${p.slug}/`,
            name: p.title,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog/` },
          { "@type": "ListItem", position: 3, name: s.title, item: url },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex flex-wrap items-center gap-1 text-xs text-muted">
            <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li aria-hidden="true" className="opacity-40 mx-1">/</li>
            <li><Link href="/blog/" className="hover:text-accent transition-colors">Blog</Link></li>
            <li aria-hidden="true" className="opacity-40 mx-1">/</li>
            <li aria-current="page" className="text-text">{s.title}</li>
          </ol>
        </nav>

        <div className="mb-12">
          <p className="text-accent uppercase tracking-widest text-sm font-medium mb-2">Series</p>
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">{s.title}</h1>
          <p className="text-base text-muted max-w-2xl">{s.description}</p>
          <p className="mt-2 text-sm text-muted">
            {posts.length} article{posts.length !== 1 ? "s" : ""}
          </p>
          <div className="mt-5 h-1 w-16 bg-accent rounded-full" />
        </div>

        <ul className="space-y-4">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.slug}/`}
                className="block p-5 rounded-xl bg-section-alt border border-border/50 hover:border-accent transition-colors duration-200"
              >
                <span className="flex items-center gap-1.5 text-xs text-muted mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <time dateTime={p.date}>{formatDate(p.date)}</time>
                </span>
                <span className="block text-lg font-semibold text-text mb-1">{p.title}</span>
                <span className="block text-sm text-muted leading-relaxed">{p.description}</span>
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/blog/"
          className="mt-12 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm text-muted hover:border-accent hover:text-accent transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          All articles
        </Link>
      </div>
    </div>
  );
}
