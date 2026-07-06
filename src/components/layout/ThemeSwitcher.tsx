"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Palette, Check } from "lucide-react";

const ACCENTS = [
  { name: "cyan", label: "Cyan", swatch: "#22d3ee" },
  { name: "teal", label: "Teal", swatch: "#2dd4bf" },
  { name: "pink", label: "Pink", swatch: "#eca0c9" },
  { name: "violet", label: "Violet", swatch: "#a78bfa" },
  { name: "amber", label: "Amber", swatch: "#fbbf24" },
] as const;

type AccentName = (typeof ACCENTS)[number]["name"];

function applyAccent(name: AccentName) {
  if (name === "cyan") {
    document.documentElement.removeAttribute("data-accent");
  } else {
    document.documentElement.setAttribute("data-accent", name);
  }
}

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [accent, setAccent] = useState<AccentName>("cyan");
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem("accent") as AccentName | null;
      if (stored && ACCENTS.some((a) => a.name === stored)) {
        setAccent(stored);
        applyAccent(stored);
      }
    } catch {
      /* localStorage unavailable */
    }
  }, []);

  const selectAccent = (name: AccentName) => {
    setAccent(name);
    applyAccent(name);
    try {
      localStorage.setItem("accent", name);
    } catch {
      /* localStorage unavailable */
    }
  };

  if (!mounted) {
    return (
      <div
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full"
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  const fabStyle = {
    background: "var(--sidebar-bg)",
    border: "1px solid var(--border)",
    color: "var(--accent)",
    boxShadow: "0 4px 20px var(--shadow-clr)",
  };

  return (
    <>
      {/* Accent color picker */}
      <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end gap-3">
        <AnimatePresence>
          {paletteOpen && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="flex flex-col gap-2 p-3 rounded-2xl"
              style={{
                background: "var(--sidebar-bg)",
                border: "1px solid var(--border)",
                boxShadow: "0 4px 20px var(--shadow-clr)",
              }}
              role="radiogroup"
              aria-label="Accent color"
            >
              {ACCENTS.map((a) => (
                <button
                  key={a.name}
                  role="radio"
                  aria-checked={accent === a.name}
                  aria-label={`${a.label} accent`}
                  onClick={() => selectAccent(a.name)}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                  style={{
                    background: a.swatch,
                    border:
                      accent === a.name
                        ? "2px solid var(--text-primary)"
                        : "2px solid transparent",
                  }}
                >
                  {accent === a.name && (
                    <Check size={16} strokeWidth={3} color="#0d1117" />
                  )}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          aria-label="Choose accent color"
          aria-expanded={paletteOpen}
          onClick={() => setPaletteOpen((o) => !o)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
          style={fabStyle}
        >
          <Palette size={22} strokeWidth={1.75} />
        </motion.button>
      </div>

      {/* Dark / light toggle */}
      <motion.button
        aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
        onClick={() => setTheme(isDark ? "light" : "dark")}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
        style={fabStyle}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.span
              key="sun"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              <Sun size={22} strokeWidth={1.75} />
            </motion.span>
          ) : (
            <motion.span
              key="moon"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              <Moon size={22} strokeWidth={1.75} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
