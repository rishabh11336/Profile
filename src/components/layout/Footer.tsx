import Link from "next/link";
import { ArrowUp, ExternalLink } from "lucide-react";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/rishabh11336",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rishabh-data-scientist/",
  },
  {
    label: "Medium",
    href: "https://medium.com/@asusrishabh",
  },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full py-8 px-6"
      style={{
        background: "var(--sidebar-bg)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p
          className="text-sm text-center sm:text-left"
          style={{ color: "var(--text-muted)" }}
        >
          © {year}{" "}
          <span style={{ color: "var(--text-primary)" }}>Rishabh Singh</span>{" "}
          · Data Scientist &amp; AI Engineer
        </p>

        {/* Social links */}
        <div className="flex items-center gap-4">
          <Link
            href="/privacy/"
            className="text-xs font-medium transition-colors duration-200 hover:text-[var(--accent)]"
            style={{ color: "var(--text-muted)" }}
          >
            Privacy
          </Link>
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-medium transition-colors duration-200 hover:text-[var(--accent)]"
              style={{ color: "var(--text-muted)" }}
            >
              {link.label}
              <ExternalLink size={11} strokeWidth={2} className="opacity-60" />
            </a>
          ))}

          {/* Back to top */}
          <a
            href="#home"
            aria-label="Back to top"
            className="flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-200 hover:text-[var(--accent)] hover:border-[var(--accent)] hover:-translate-y-0.5 ml-2"
            style={{
              color: "var(--text-muted)",
              borderColor: "var(--border)",
            }}
          >
            <ArrowUp size={14} strokeWidth={2} />
          </a>
        </div>
      </div>
    </footer>
  );
}
