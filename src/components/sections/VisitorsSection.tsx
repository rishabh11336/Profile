"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const MAP_ID = "RoZbRwr1002BRTY6exFofc0AvldqsSEiznlvac9R0qY";

function mapUrl(light: boolean) {
  if (light) {
    // ocean: soft blue | land: warm cream | dots: deep rose #cc0066 → 4.9:1 vs land
    return `https://mapmyvisitors.com/map.png?cl=c5dce8&w=900&t=n&d=${MAP_ID}&co=f0f0e8&ct=cc0066`;
  }
  // ocean: very dark navy | land: medium navy | dots: amber #ff9500 → 4.75:1 vs land
  return `https://mapmyvisitors.com/map.png?cl=001830&w=900&t=n&d=${MAP_ID}&co=0d3b6e&ct=ff9500`;
}

export default function VisitorsSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isLight = theme === "light";
  const src = mounted ? mapUrl(isLight) : mapUrl(false);

  return (
    <section id="visitors" className="py-20 bg-section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-accent uppercase tracking-widest text-sm font-medium mb-2">
            Global Reach
          </p>
          <h2 className="text-4xl font-bold text-text">Visitors Around the World</h2>
          <p className="mt-3 text-muted text-sm max-w-md mx-auto">
            See where visitors to this portfolio are connecting from across the globe.
          </p>
          <div className="mt-4 h-1 w-16 bg-accent mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-2xl overflow-hidden border border-border/50 shadow-sm"
          style={{ background: "var(--surface)" }}
        >
          {/* Card header */}
          <div
            className="flex items-center gap-3 px-6 py-4 border-b border-border/50"
          >
            <div className="w-9 h-9 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0">
              <Globe className="w-4 h-4 text-accent" />
            </div>
            <div>
              <p className="text-sm font-semibold text-text">Live Visitor Map</p>
              <p className="text-xs text-muted">Powered by MapMyVisitors</p>
            </div>
          </div>

          {/* Map image */}
          <div className="p-4 sm:p-6">
            <a
              href="https://mapmyvisitors.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="View detailed visitor statistics"
              className="block rounded-xl overflow-hidden hover:opacity-90 transition-opacity duration-200"
            >
              {mounted && (
                <img
                  src={src}
                  alt="World map showing visitor locations for rishabhsingh.me"
                  className="w-full h-auto block"
                  loading="lazy"
                  decoding="async"
                />
              )}
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
