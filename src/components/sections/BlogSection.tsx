"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <section id="blog" className="py-20 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[#2dd4bf] uppercase tracking-widest text-sm font-medium mb-2">
            Writing on AI, ML &amp; System Design
          </p>
          <h2 className="text-4xl font-bold text-white">Blog</h2>
          <div className="mt-4 h-1 w-16 bg-[#2dd4bf] mx-auto rounded-full" />
        </motion.div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {blogSeries.map((series) => {
            const MetaIcon = metaIconMap[series.metaIcon] ?? Zap;

            return (
              <motion.div
                key={series.seriesSlug}
                variants={cardVariants}
                className="group bg-[#161b22] rounded-xl overflow-hidden border border-[#21262d] hover:border-[#2dd4bf] hover:shadow-lg hover:shadow-[#2dd4bf]/10 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Cover image */}
                <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src={series.image}
                    alt={series.imageAlt}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Meta line */}
                  <div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1 text-[#2dd4bf]">
                      <MetaIcon className="w-3.5 h-3.5" />
                      {series.metaLabel}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {series.postCount} posts
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mb-2">{series.title}</h3>

                  {/* Tag pills */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {series.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded border border-[#2dd4bf]/60 text-[#2dd4bf]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">
                    {series.description}
                  </p>

                  {/* CTA links */}
                  <div className="mt-4 flex items-center gap-3">
                    <Link
                      href={`/blog/?s=${series.seriesSlug}`}
                      className="flex-1 text-center py-2 rounded-lg bg-[#2dd4bf]/10 border border-[#2dd4bf]/40 text-[#2dd4bf] text-sm font-medium hover:bg-[#2dd4bf] hover:text-white transition-colors duration-200"
                    >
                      Browse Series
                    </Link>
                    <a
                      href={series.latestPost.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#1c2333] border border-[#30363d] text-gray-300 text-sm font-medium hover:bg-[#30363d] hover:text-white transition-colors duration-200"
                    >
                      Latest Post
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
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
