"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Tag, ExternalLink } from "lucide-react";
import { blogSeries } from "@/data/content";

const SERIES_LABELS: Record<string, string> = {
  "in-a-minute": "In a Minute",
  "web-dev": "Web Development",
  python: "Python",
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.04, ease: "easeOut" as const },
  }),
};

type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  tags: string[];
  series: string;
};

export default function BlogFilterClient({
  posts,
  initialSeries,
}: {
  posts: Post[];
  initialSeries: string;
}) {
  const [activeSeries, setActiveSeries] = useState(initialSeries);

  const filtered = activeSeries === "all"
    ? posts
    : posts.filter((p) => p.series === activeSeries);

  return (
    <>
      {/* Series filter tabs */}
      <div className="flex flex-wrap gap-3 mb-10">
        {[
          { key: "all", label: `All (${posts.length})` },
          ...blogSeries.map((s) => ({
            key: s.seriesSlug,
            label: `${SERIES_LABELS[s.seriesSlug] ?? s.title} (${s.postCount})`,
          })),
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveSeries(tab.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
              activeSeries === tab.key
                ? "bg-[#2dd4bf] border-[#2dd4bf] text-[#0d1117]"
                : "border-[#30363d] hover:border-[#2dd4bf] hover:text-[#2dd4bf]"
            }`}
            style={
              activeSeries !== tab.key
                ? { color: "var(--text-muted)", background: "transparent" }
                : {}
            }
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Count */}
      <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
        {filtered.length} article{filtered.length !== 1 ? "s" : ""}
      </p>

      {/* Article grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((post, i) => (
            <motion.article
              key={post.slug}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.95 }}
              className="group flex flex-col rounded-xl overflow-hidden border transition-all duration-300 hover:-translate-y-1"
              style={{ background: "var(--sidebar-bg)", borderColor: "#21262d" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#2dd4bf";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(45,212,191,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#21262d";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                  unoptimized={post.image.endsWith(".gif") || post.image.endsWith(".svg")}
                />
              </div>

              <div className="p-5 flex flex-col flex-1 gap-3">
                <div className="flex items-center gap-3 text-xs" style={{ color: "var(--text-muted)" }}>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[#2dd4bf] border border-[#2dd4bf]/30 bg-[#2dd4bf]/8">
                    {SERIES_LABELS[post.series] ?? post.series}
                  </span>
                </div>

                <h2 className="text-white font-semibold text-sm leading-snug group-hover:text-[#2dd4bf] transition-colors duration-200">
                  {post.title}
                </h2>

                <p className="text-xs leading-relaxed flex-1" style={{ color: "var(--text-muted)" }}>
                  {post.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded border border-[#30363d]"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <Tag className="w-2.5 h-2.5" />
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={`https://rishabhsingh.me/blog/${post.slug}.html`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1.5 text-xs font-medium text-[#2dd4bf] hover:underline"
                >
                  Read article
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
