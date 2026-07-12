import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for rishabhsingh.me — how we use cookies, advertising (Google AdSense), analytics (GA4), and your rights under GDPR.",
  alternates: { canonical: "https://rishabhsingh.me/privacy/" },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-bg text-text px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <p className="text-accent uppercase tracking-widest text-sm font-medium mb-2">
          Legal
        </p>
        <h1 className="text-4xl font-bold text-text mb-2">Privacy Policy</h1>
        <p className="text-muted text-sm mb-10">Last updated: 12 July 2026</p>

        <div className="space-y-10 text-text leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-text mb-3">1. Who We Are</h2>
            <p className="text-muted">
              This website (<strong className="text-text">rishabhsingh.me</strong>) is operated by{" "}
              <strong className="text-text">Rishabh Singh</strong>, a Data Scientist and AI Engineer
              based in Delhi, India. If you have any questions about this policy, contact:{" "}
              <a href="mailto:asusrishabh@outlook.com" className="text-accent hover:underline">
                asusrishabh@outlook.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text mb-3">2. What Data Is Collected</h2>
            <p className="text-muted mb-3">
              This site does not collect personal data directly. However, the third-party services
              embedded in the site may collect data as described below:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted">
              <li>
                <strong className="text-text">Google Analytics 4 (GA4)</strong> — collects
                anonymised usage data: pages visited, session duration, device type, and approximate
                location (country/city level). Measurement ID: G-3REDBP6J91.
              </li>
              <li>
                <strong className="text-text">Google AdSense</strong> — serves advertisements on
                blog pages (/blog/*). Google and its advertising partners use cookies and similar
                identifiers to personalise ads and measure ad performance. Publisher ID:
                ca-pub-9086648309254904.
              </li>
              <li>
                <strong className="text-text">MapMyVisitors</strong> — the homepage displays a
                live visitor world map powered by MapMyVisitors (mapmyvisitors.com). This service
                logs visitor IP addresses to plot approximate geographic locations on the map.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text mb-3">3. Cookies</h2>
            <p className="text-muted">
              Google Analytics and Google AdSense set cookies in your browser to distinguish
              visitors and sessions, and to serve and measure ads. You can control or delete cookies
              through your browser settings. Deleting cookies does not delete any personal data held
              by Google.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text mb-3">4. Google Advertising</h2>
            <p className="text-muted">
              Google uses cookies to serve ads based on your prior visits to this site or other
              sites. You can learn more about how Google uses data from its advertising partners at{" "}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                policies.google.com/technologies/ads
              </a>
              .
            </p>
            <p className="text-muted mt-3">You can opt out of personalised advertising:</p>
            <ul className="list-disc list-inside space-y-1 text-muted mt-2">
              <li>
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Google Ad Settings
                </a>
              </li>
              <li>
                <a
                  href="https://www.aboutads.info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Digital Advertising Alliance opt-out (aboutads.info)
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text mb-3">
              5. EEA, UK, and Switzerland Users — Consent
            </h2>
            <p className="text-muted">
              If you are located in the European Economic Area, the United Kingdom, or Switzerland,
              you will be shown a consent banner (Google Consent Management Platform) when you visit
              blog pages. You can accept, reject, or customise your consent choices. You can
              withdraw or change your consent at any time by revisiting the site and interacting
              with the consent banner.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text mb-3">6. Your Rights Under GDPR</h2>
            <p className="text-muted mb-3">
              If you are in the EEA or UK, you have the following rights regarding your personal
              data:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted">
              <li><strong className="text-text">Access</strong> — request a copy of data held about you.</li>
              <li><strong className="text-text">Deletion</strong> — request erasure of your personal data.</li>
              <li><strong className="text-text">Objection</strong> — object to processing of your data for direct marketing.</li>
              <li><strong className="text-text">Portability</strong> — receive your data in a structured, machine-readable format.</li>
              <li><strong className="text-text">Restriction</strong> — request that processing of your data be restricted.</li>
            </ul>
            <p className="text-muted mt-3">
              To exercise any of these rights, email{" "}
              <a href="mailto:asusrishabh@outlook.com" className="text-accent hover:underline">
                asusrishabh@outlook.com
              </a>
              . Note that most data on this site is held by Google — you may also exercise rights
              directly with Google via their{" "}
              <a
                href="https://myaccount.google.com/data-and-privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Data &amp; Privacy dashboard
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text mb-3">7. Data Retention</h2>
            <p className="text-muted">
              This site does not store personal data on its own servers. Data collected by GA4 is
              retained for 14 months by default (Google&apos;s default retention period). MapMyVisitors
              retains visitor log data per their own policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text mb-3">8. Changes to This Policy</h2>
            <p className="text-muted">
              This policy may be updated occasionally. The &quot;last updated&quot; date at the top of the
              page will reflect any changes. Continued use of the site after changes constitutes
              acceptance of the revised policy.
            </p>
          </section>

          <section>
            <p className="text-muted text-sm border-t border-border pt-6">
              Questions?{" "}
              <a href="mailto:asusrishabh@outlook.com" className="text-accent hover:underline">
                asusrishabh@outlook.com
              </a>{" "}
              ·{" "}
              <Link href="/" className="text-accent hover:underline">
                Back to portfolio
              </Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
