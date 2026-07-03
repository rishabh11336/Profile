import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0f1e] text-white px-4">
      <h1 className="text-8xl font-bold text-[#2dd4bf] mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-white mb-6">
        Page Not Found
      </h2>
      <p className="text-gray-400 mb-8 text-center max-w-md">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#2dd4bf] hover:bg-[#0b4975] text-white font-medium rounded-lg transition-colors duration-200"
      >
        Go Home
      </Link>
    </div>
  );
}
