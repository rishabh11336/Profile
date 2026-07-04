"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { hero } from "@/data/content";

function useTypingEffect(words: string[], speed = 100, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    if (!isDeleting) {
      if (charIndex < currentWord.length) {
        const t = setTimeout(() => {
          setDisplay(currentWord.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, speed);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setIsDeleting(true), pause);
        return () => clearTimeout(t);
      }
    } else {
      if (charIndex > 0) {
        const t = setTimeout(() => {
          setDisplay(currentWord.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, speed / 2);
        return () => clearTimeout(t);
      } else {
        setIsDeleting(false);
        setWordIndex((w) => (w + 1) % words.length);
      }
    }
  }, [charIndex, isDeleting, wordIndex, words, speed, pause]);

  return display;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export function HeroSection() {
  const typedWord = useTypingEffect(hero.typingWords);

  return (
    <section
      id="home"
      className="min-h-[100svh] flex items-start md:items-center pt-20 md:pt-0 pb-10 md:py-20 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: text content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <h1 className="sr-only">
              Rishabh Singh — Data Scientist &amp; AI Engineer, IIT Madras
            </h1>

            <motion.h2
              className="text-lg md:text-xl font-medium mb-3 text-accent"
              variants={fadeInUp}
            >
              {hero.tagline}
            </motion.h2>

            {/* Typing-effect headline — text-text responds to both themes */}
            <motion.p
              className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-text"
              variants={fadeInUp}
            >
              I&apos;m all about that{" "}
              {/* min-w-[14ch] reserves space for longest word, prevents layout shift / clipping */}
              <span className="inline-block min-w-[24ch] text-accent">{typedWord}</span>
              {/* ml-1.5 gives visible gap between word and cursor */}
              <span
                className="inline-block w-[2px] h-7 ml-1.5 align-middle bg-accent animate-pulse"
                aria-hidden="true"
              />
              {" "}magic!
            </motion.p>

            <motion.p
              className="text-muted text-sm md:text-base leading-relaxed mb-4 max-w-xl mx-auto lg:mx-0"
              variants={fadeInUp}
            >
              {hero.paragraph1}
            </motion.p>
            <motion.p
              className="text-muted text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
              variants={fadeInUp}
            >
              {hero.paragraph2}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
              variants={fadeInUp}
            >
              <a
                href="#contact"
                className="px-6 py-3 rounded-full font-semibold text-white bg-accent hover:opacity-90 transition-all duration-200 hover:scale-105 inline-block"
              >
                Hire Me
              </a>
              <a
                href="#portfolio"
                className="px-6 py-3 rounded-full font-semibold border border-accent text-accent hover:bg-accent/10 transition-all duration-200 inline-block"
              >
                View Projects ↓
              </a>
            </motion.div>

            <motion.div
              className="inline-flex items-start gap-3 p-4 rounded-xl border border-accent/30 bg-accent/8 max-w-xl"
              variants={fadeInUp}
            >
              <span className="text-xl mt-0.5" role="img" aria-label="Graduation cap">
                🎓
              </span>
              <div>
                <p className="text-muted text-sm leading-relaxed">
                  {hero.iitmCallout.text}
                </p>
                <a
                  href={hero.iitmCallout.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-accent hover:underline mt-1 inline-block"
                >
                  {hero.iitmCallout.linkText}
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: profile image */}
          <motion.div
            className="relative flex-shrink-0"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden border-2 border-accent"
              style={{ boxShadow: "0 0 40px rgba(160,69,144,0.25)" }}
              whileHover={{ rotate: -1, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src="/me-2x.png"
                alt="Rishabh Singh — Data Scientist & AI Engineer"
                width={263}
                height={394}
                priority
                className="block"
              />
            </motion.div>

            <motion.div
              className="absolute -bottom-3 -left-4 flex items-center gap-2 px-3 py-2 rounded-full text-white text-sm font-medium shadow-lg bg-accent"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.4 }}
            >
              <span role="img" aria-label="Chart">📊</span>
              <span>Open to Work</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
