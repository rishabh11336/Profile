import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Providers from "@/components/layout/Providers";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import ThemeSwitcher from "@/components/layout/ThemeSwitcher";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Rishabh Singh",
    default:
      "Rishabh Singh - Data Scientist | AI Engineer | IIT Madras",
  },
  description:
    "IIT Madras Data Scientist specializing in time-series forecasting, mixed-effects models, and Marketing Mix Modeling (MMM). Python · scikit-learn · Streamlit · Azure · AWS. Open-source contributor to CPython.",
  keywords: [
    "Data Scientist",
    "AI Engineer",
    "IIT Madras",
    "Machine Learning",
    "Time Series Forecasting",
    "MMM",
    "Python",
    "scikit-learn",
    "Rishabh Singh",
  ],
  alternates: {
    canonical: "https://rishabhsingh.me/",
  },
  openGraph: {
    type: "website",
    url: "https://rishabhsingh.me/",
    title:
      "Rishabh Singh — Data Scientist | Forecasting & Applied ML | IIT Madras",
    description:
      "IIT Madras Data Scientist specializing in time-series forecasting, mixed-effects models, and Marketing Mix Modeling (MMM). Python · scikit-learn · Streamlit · Azure · AWS. Open-source contributor to CPython.",
    images: [
      {
        url: "https://rishabhsingh.me/images/me.png",
        width: 1200,
        height: 630,
        alt: "Rishabh Singh — Data Scientist",
      },
    ],
    siteName: "Rishabh Singh Portfolio",
    locale: "en_US",
  },
  manifest: "/manifest.json",
  twitter: {
    card: "summary_large_image",
    site: "@rishabhsingh",
    creator: "@rishabhsingh",
    title:
      "Rishabh Singh — Data Scientist | Forecasting & Applied ML | IIT Madras",
    description:
      "IIT Madras Data Scientist specializing in time-series forecasting, mixed-effects models, and Marketing Mix Modeling (MMM).",
    images: ["https://rishabhsingh.me/images/me.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f3f3eb",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={plusJakartaSans.variable}>
      <body className="min-h-screen antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var a=localStorage.getItem("accent");if(a&&a!=="cyan")document.documentElement.setAttribute("data-accent",a)}catch(e){}`,
          }}
        />
        <Providers>
          {/* Sidebar */}
          <Sidebar />

          {/* Main content — offset by sidebar on desktop */}
          <div className="nav:ml-[280px] min-h-screen flex flex-col">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>

          {/* Theme toggle */}
          <ThemeSwitcher />
        </Providers>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CZJ3LXY6D0"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CZJ3LXY6D0');
          `}
        </Script>
      </body>
    </html>
  );
}
