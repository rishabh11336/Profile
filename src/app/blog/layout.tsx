import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — AI, ML & Python",
  description:
    "Technical articles on machine learning, data science, Python, and web development by Rishabh Singh (IIT Madras). Series: In a Minute, Web Development, Python.",
  alternates: {
    canonical: "https://rishabhsingh.me/blog/",
  },
  openGraph: {
    type: "website",
    url: "https://rishabhsingh.me/blog/",
    title: "Blog — AI, ML & Python | Rishabh Singh",
    description:
      "Dense, visual breakdowns of ML concepts — Transformers, SVMs, CNNs, Linear Regression, and more. Plus Python and web dev deep-dives.",
    images: [
      {
        url: "https://rishabhsingh.me/images/og-card.png",
        width: 720,
        height: 405,
        alt: "Rishabh Singh Blog — AI & ML",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@rishabhsingh",
    creator: "@rishabhsingh",
    title: "Blog — AI, ML & Python | Rishabh Singh",
    description:
      "Dense, visual breakdowns of ML concepts — Transformers, SVMs, CNNs, Linear Regression, and more. Plus Python and web dev deep-dives.",
    images: ["https://rishabhsingh.me/images/og-card.png"],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
