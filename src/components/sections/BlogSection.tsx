"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Globe, Code, Clock, ExternalLink } from "lucide-react";
import { blogSeries } from "@/data/content";

const metaIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  bolt: Zap,
  globe: Globe,
  code: Code,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-accent uppercase tracking-widest text-sm font-medium mb-2">
            Writing on AI, ML &amp; System Design
          </p>
          <h2 className="text-4xl font-bold text-text">Blog</h2>
          <div className="mt-4 h-1 w-16 bg-accent mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {blogSeries.map((series) => {
            const MetaIcon = metaIconMap[series.metaIcon] ?? Zap;

            return (
              <motion.div
                key={series.seriesSlug}
                variants={cardVariants}
                className="group bg-section-alt rounded-xl overflow-hidden border border-border/50 hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src={series.image}
                    alt={series.imageAlt}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3 text-xs text-muted">
                    <span className="flex items-center gap-1 text-accent">
                      <MetaIcon className="w-3.5 h-3.5" />
                      {series.metaLabel}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {series.postCount} posts
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-text mb-2">{series.title}</h3>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {series.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded border border-accent/60 text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-muted text-sm leading-relaxed flex-1">
                    {series.description}
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <Link
                      href={`/blog/?s=${series.seriesSlug}`}
                      className="flex-1 text-center py-2 rounded-lg bg-accent/10 border border-accent/40 text-accent text-sm font-medium hover:bg-accent hover:text-white transition-colors duration-200"
                    >
                      Browse Series
                    </Link>
                    <Link
                      href={series.latestPost.href}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-surface border border-border text-muted text-sm font-medium hover:border-accent hover:text-accent transition-colors duration-200"
                    >
                      Latest Post
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
