"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  Code2,
  Monitor,
  Search,
  BookOpen,
  Users,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/content";

// ---------------------------------------------------------------------------
// Icon mapping: content.ts icon strings → lucide-react components
// ---------------------------------------------------------------------------
const iconMap: Record<string, LucideIcon> = {
  "laptop-code": Code2,
  desktop: Monitor,
  search: Search,
  "book-open": BookOpen,
  users: Users,
};

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export function ServicesSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="services" className="py-20 px-4 md:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* ----------------------------------------------------------------
            Section header
        ----------------------------------------------------------------- */}
        <motion.div
          className="text-center mb-16"
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-2"
            variants={fadeInUp}
          >
            Services
          </motion.h2>
          <motion.p
            className="text-accent text-lg font-medium mb-4"
            variants={fadeInUp}
          >
            What I&apos;m Doing?
          </motion.p>
          <motion.div
            className="w-16 h-1 bg-accent mx-auto rounded-full"
            variants={fadeInUp}
          />
        </motion.div>

        {/* ----------------------------------------------------------------
            Cards grid — 1 col mobile / 2 col tablet / 3 col desktop
        ----------------------------------------------------------------- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Code2;

            return (
              <motion.div
                key={service.title}
                className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm group cursor-default overflow-hidden"
                variants={cardVariant}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Hover border teal glow overlay */}
                <div
                  className="absolute inset-0 rounded-2xl border border-accent/0 group-hover:border-accent/50 transition-colors duration-300 pointer-events-none"
                  aria-hidden="true"
                />
                {/* Hover shadow glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: "0 0 30px rgba(45,212,191,0.15)" }}
                  aria-hidden="true"
                />

                {/* Icon circle */}
                <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center mb-4 group-hover:bg-accent/25 transition-colors duration-300">
                  <Icon
                    size={22}
                    className="text-accent"
                    strokeWidth={1.8}
                  />
                </div>

                {/* Title */}
                <h3 className="text-white font-semibold text-lg mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
