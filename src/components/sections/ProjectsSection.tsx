"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, BarChart2, TrendingUp, AudioWaveform } from "lucide-react";
import { projects } from "@/data/content";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "chart-line": TrendingUp,
  "wave-square": AudioWaveform,
};

const iconGradients = [
  "from-purple-900/80 via-slate-900 to-gray-900",
  "from-fuchsia-900/70 via-purple-900/50 to-gray-900",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function ProjectsSection() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <section id="portfolio" className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-accent uppercase tracking-widest text-sm font-medium mb-2">
            Featured Projects
          </p>
          <h2 className="text-4xl font-bold text-text">Projects</h2>
          <div className="mt-4 h-1 w-16 bg-accent mx-auto rounded-full" />
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, idx) => {
            const IconComponent = project.icon ? iconMap[project.icon] : null;
            const imgAlt = project.imageAlt ?? project.title;
            return (
              <motion.div
                key={project.title}
                variants={cardVariants}
                className="group bg-section-alt rounded-xl overflow-hidden border border-border/50 hover:border-accent transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/10 flex flex-col"
              >
                {project.image ? (
                  <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                    <Image
                      src={project.image}
                      alt={imgAlt}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                ) : IconComponent ? (
                  <div
                    className={`w-full flex items-center justify-center bg-gradient-to-br ${iconGradients[idx % iconGradients.length]}`}
                    style={{ aspectRatio: "16/9" }}
                  >
                    <IconComponent className="w-16 h-16 text-accent" />
                  </div>
                ) : null}

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-text mb-3">{project.title}</h3>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded border border-accent/60 text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-muted text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub repository"
                        className="p-2 rounded-lg bg-surface border border-border hover:bg-accent hover:border-accent text-muted hover:text-white transition-colors duration-200"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live demo"
                        className="p-2 rounded-lg bg-surface border border-border hover:bg-accent hover:border-accent text-muted hover:text-white transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.kaggle && (
                      <a
                        href={project.kaggle}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Kaggle notebook"
                        className="p-2 rounded-lg bg-surface border border-border hover:bg-accent hover:border-accent text-muted hover:text-white transition-colors duration-200"
                      >
                        <BarChart2 className="w-4 h-4" />
                      </a>
                    )}
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
