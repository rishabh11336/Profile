"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GitBranch, CheckCircle, XCircle, GraduationCap, ExternalLink } from "lucide-react";
import { opensource } from "@/data/content";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

function StatusBadge({ status }: { status: "merged" | "closed" }) {
  if (status === "merged") {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/15 text-emerald-500 border border-emerald-500/30">
        <CheckCircle className="w-3 h-3" />
        Merged
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-border/30 text-muted border border-border">
      <XCircle className="w-3 h-3" />
      Closed
    </span>
  );
}

export default function OpenSourceSection() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <section id="opensource" className="py-20 bg-section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-accent uppercase tracking-widest text-sm font-medium mb-2">
            Contributing to Major Python Ecosystem Projects
          </p>
          <h2 className="text-4xl font-bold text-text">Open Source Contributions</h2>
          <div className="mt-4 h-1 w-16 bg-accent mx-auto rounded-full" />
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {opensource.map((item) => {
            const isSvg = item.logo?.toLowerCase().endsWith(".svg") ?? false;
            const logoAlt = item.logoAlt ?? item.name;

            return (
              <motion.div
                key={item.name}
                variants={cardVariants}
                className="group bg-bg rounded-xl border border-border/50 hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 p-6 flex flex-col gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center flex-shrink-0 overflow-hidden">
                    {item.logo ? (
                      <Image
                        src={item.logo}
                        alt={logoAlt}
                        width={36}
                        height={36}
                        className="object-contain"
                        unoptimized={isSvg}
                      />
                    ) : (
                      <GraduationCap className="w-6 h-6 text-accent" />
                    )}
                  </div>
                  <h4 className="text-lg font-semibold text-text">{item.name}</h4>
                </div>

                <p className="text-muted text-sm leading-relaxed">{item.description}</p>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/30">
                    <GitBranch className="w-3 h-3" />
                    {item.pr}
                  </span>
                  <StatusBadge status={item.status} />
                </div>

                {item.note && (
                  <p className="text-xs text-muted italic opacity-75">{item.note}</p>
                )}

                <div className="mt-auto">
                  <a
                    href={item.prUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-text font-medium transition-colors duration-200 group/link"
                  >
                    View PR
                    <ExternalLink className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
