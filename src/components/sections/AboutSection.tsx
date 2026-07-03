"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { about } from "@/data/content";
import { getTenure } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
type ExperienceEntry = {
  period: string;
  datetime: string;
  title: string;
  bullets: string[];
  link: { href: string; text: string } | null;
  isCurrent?: boolean;
  startDate?: Date;
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

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------
function TimelineDot() {
  return (
    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 z-10">
      <div className="w-2 h-2 rounded-full bg-white" />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export function AboutSection() {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experience = about.experience as ExperienceEntry[];

  return (
    <section id="about" className="py-20 px-4 md:px-8" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* ----------------------------------------------------------------
            Section title
        ----------------------------------------------------------------- */}
        <motion.div
          className="text-center mb-16"
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            variants={fadeInUp}
          >
            About Me
          </motion.h2>
          {/* Decorative underline */}
          <motion.div
            className="w-16 h-1 bg-accent mx-auto rounded-full"
            variants={fadeInUp}
          />
        </motion.div>

        {/* ----------------------------------------------------------------
            Two-column: bio (left) + skills (right)
        ----------------------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* -- Bio column -- */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-white mb-1"
              variants={fadeInUp}
            >
              {about.heading}
            </motion.h3>
            <motion.span
              className="block text-accent text-lg font-semibold mb-5"
              variants={fadeInUp}
            >
              {about.subheading}
            </motion.span>

            <motion.p
              className="text-gray-300 text-sm md:text-base leading-relaxed mb-4"
              variants={fadeInUp}
            >
              {about.bio1}
            </motion.p>
            <motion.p
              className="text-gray-300 text-sm md:text-base leading-relaxed mb-6"
              variants={fadeInUp}
            >
              {about.bio2}
            </motion.p>

            {/* Info list */}
            <motion.ul className="mb-8 space-y-2.5" variants={fadeInUp}>
              {about.info.map((item) => (
                <li key={item.label} className="flex items-start gap-2 text-sm">
                  <span className="text-accent font-semibold w-28 flex-shrink-0">
                    {item.label}:
                  </span>
                  <span className="text-gray-300">{item.value}</span>
                </li>
              ))}
            </motion.ul>

            {/* Action buttons */}
            <motion.div className="flex flex-wrap gap-4" variants={fadeInUp}>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full font-semibold text-white bg-accent hover:opacity-90 transition-all duration-200 hover:scale-105 inline-block"
              >
                Hire Me
              </a>
              <a
                href="/CV/Rishabh-Singh-Data-Scientist-CV.pdf"
                download
                className="px-6 py-3 rounded-full font-semibold border border-accent text-accent hover:bg-accent/10 transition-all duration-200 inline-block"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* -- Skills column -- */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3
              className="text-xl font-bold text-white mb-6"
              variants={fadeInUp}
            >
              Skills
            </motion.h3>

            <div className="space-y-6">
              {about.skills.map((group) => (
                <motion.div key={group.group} variants={fadeInUp}>
                  <h4 className="text-accent text-xs font-semibold uppercase tracking-wider mb-3">
                    {group.group}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, i) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1 text-xs rounded-full border border-accent/40 text-gray-300 bg-accent/8"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: i * 0.04, duration: 0.3 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ----------------------------------------------------------------
            Full-width two-column: Education (left) + Experience (right)
        ----------------------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* -- Education timeline -- */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3
              className="text-xl font-bold text-white mb-8"
              variants={fadeInUp}
            >
              Education
            </motion.h3>

            <div className="relative">
              {/* Vertical connector line */}
              <div className="absolute left-3 top-0 bottom-0 w-px bg-accent/30" />

              <div className="space-y-8">
                {about.education.map((edu, i) => (
                  <motion.div
                    key={i}
                    className="relative pl-10"
                    variants={fadeInUp}
                  >
                    <TimelineDot />

                    {edu.period && (
                      <time
                        className="text-accent text-xs font-medium"
                        dateTime={edu.datetime}
                      >
                        {edu.period}
                      </time>
                    )}

                    <h4 className="text-white font-semibold mt-1 text-sm md:text-base">
                      {edu.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{edu.institution}</p>
                    {edu.detail && (
                      <p className="text-gray-500 text-xs mt-1">{edu.detail}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* -- Experience timeline -- */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3
              className="text-xl font-bold text-white mb-8"
              variants={fadeInUp}
            >
              Experience
            </motion.h3>

            <div className="relative">
              {/* Vertical connector line */}
              <div className="absolute left-3 top-0 bottom-0 w-px bg-accent/30" />

              <div className="space-y-8">
                {experience.map((exp, i) => (
                  <motion.div
                    key={i}
                    className="relative pl-10"
                    variants={fadeInUp}
                  >
                    <TimelineDot />

                    {/* Period + live tenure badge for current role */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <time
                        className="text-accent text-xs font-medium"
                        dateTime={exp.datetime}
                      >
                        {exp.period}
                      </time>
                      {exp.isCurrent && exp.startDate && (
                        <span className="text-gray-500 text-xs">
                          ({getTenure(exp.startDate)})
                        </span>
                      )}
                    </div>

                    <h4 className="text-white font-semibold mt-1 text-sm md:text-base">
                      {exp.title}
                    </h4>

                    <ul className="mt-2 space-y-1">
                      {exp.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="text-gray-400 text-sm flex items-start gap-2"
                        >
                          <span className="text-accent mt-1 flex-shrink-0">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.link && (
                      <a
                        href={exp.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent text-xs hover:underline mt-2 inline-block"
                      >
                        {exp.link.text} →
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
