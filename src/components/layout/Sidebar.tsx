"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  House,
  User,
  List,
  Briefcase,
  GitBranch,
  Newspaper,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", icon: House, href: "#home", id: "home" },
  { label: "About", icon: User, href: "#about", id: "about" },
  { label: "Services", icon: List, href: "#services", id: "services" },
  { label: "Projects", icon: Briefcase, href: "#portfolio", id: "portfolio" },
  {
    label: "Open Source",
    icon: GitBranch,
    href: "#opensource",
    id: "opensource",
  },
  { label: "Blog", icon: Newspaper, href: "#blog", id: "blog" },
  {
    label: "Contact",
    icon: MessageCircle,
    href: "#contact",
    id: "contact",
  },
] as const;

function NavItem({
  item,
  active,
  onClick,
}: {
  item: (typeof NAV_ITEMS)[number];
  active: boolean;
  onClick?: () => void;
}) {
  const Icon = item.icon;
  return (
    <a
      href={item.href}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 rounded-lg text-sm font-medium",
        "transition-all duration-200 select-none",
        active
          ? "text-[var(--accent)] border-l-2 border-[var(--accent)]"
          : "text-[var(--text-muted)] border-l-2 border-transparent hover:text-[var(--accent)] hover:bg-white/5"
      )}
      style={{ padding: active ? "0.75rem 1rem 0.75rem calc(1rem - 2px)" : "0.75rem 1rem" }}
    >
      <Icon size={17} strokeWidth={1.75} className="shrink-0" />
      <span>{item.label}</span>
    </a>
  );
}

function SidebarInner({
  activeSection,
  onClose,
}: {
  activeSection: string;
  onClose?: () => void;
}) {
  return (
    <div
      className="flex flex-col h-full w-full overflow-y-auto"
      style={{
        background: "var(--sidebar-bg)",
        borderRight: "1px solid var(--border)",
      }}
    >
      {/* Logo area */}
      <div className="flex items-center px-5 pt-8 pb-8">
        <Image
          src="/Logo.svg"
          alt="Rishabh Singh"
          width={148}
          height={38}
          priority
          className="h-9 w-auto"
        />
      </div>

      {/* Nav links */}
      <nav className="flex flex-col gap-0.5 flex-1 px-3" aria-label="Site navigation">
        {NAV_ITEMS.map((item) => (
          <NavItem
            key={item.id}
            item={item}
            active={activeSection === item.id}
            onClick={onClose}
          />
        ))}
      </nav>

      {/* Bottom label */}
      <p
        className="px-5 py-6 text-xs"
        style={{ color: "var(--text-muted)", opacity: 0.5 }}
      >
        v2025 · Next.js + Tailwind
      </p>
    </div>
  );
}

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    function getActive(): string {
      // A section becomes active when its top edge scrolls into the top 30% of the viewport.
      // Iterating in order and always updating `current` means the last qualifying section wins
      // — i.e., the one whose top is closest to (but not past) that trigger line.
      const trigger = window.scrollY + window.innerHeight * 0.3;
      let current: string = NAV_ITEMS[0].id;
      for (const { id } of NAV_ITEMS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= trigger) current = id;
      }
      return current;
    }

    function onScroll() {
      setActiveSection(getActive());
    }

    // Set immediately on mount so any re-render (e.g. theme toggle) never flashes "Home".
    setActiveSection(getActive());
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  return (
    <>
      {/* Hamburger — mobile only (hidden at ≥1200px via nav: breakpoint) */}
      <button
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
        className={cn(
          "fixed top-4 left-4 z-[60] p-2 rounded-lg nav:hidden",
          "transition-colors duration-200"
        )}
        style={{
          background: "var(--sidebar-bg)",
          border: "1px solid var(--border)",
          color: "var(--text-primary)",
        }}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            className="fixed inset-0 z-[45] nav:hidden"
            style={{ background: "rgba(0,0,0,0.6)" }}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile sidebar drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            key="mobile-sidebar"
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="fixed left-0 top-0 h-screen w-[280px] z-[55] nav:hidden"
            aria-label="Navigation"
          >
            <SidebarInner activeSection={activeSection} onClose={close} />
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop sidebar — always visible at ≥1200px */}
      <aside
        className="hidden nav:flex fixed left-0 top-0 h-screen w-[280px] z-[40] flex-col"
        aria-label="Navigation"
      >
        <SidebarInner activeSection={activeSection} />
      </aside>
    </>
  );
}
