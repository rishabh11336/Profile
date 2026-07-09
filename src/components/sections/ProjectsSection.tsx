"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, BarChart2, TrendingUp, AudioWaveform } from "lucide-react";
import { GithubIcon } from "@/components/ui/GithubIcon";
import { projects } from "@/data/content";

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
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
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
