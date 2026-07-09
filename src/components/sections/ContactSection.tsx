"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, BookOpen } from "lucide-react";
import { GithubIcon } from "@/components/ui/GithubIcon";
import { siteConfig } from "@/data/content";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const contactLinks = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail },
  { label: "GitHub", value: "rishabh11336", href: siteConfig.links.github, icon: GithubIcon },
  { label: "LinkedIn", value: "rishabh-data-scientist", href: siteConfig.links.linkedin, icon: LinkedinIcon },
  { label: "Medium", value: "@asusrishabh", href: siteConfig.links.medium, icon: BookOpen },
] as const;

type FormStatus = "idle" | "loading" | "success" | "error";
interface FormErrors { name?: string; email?: string; subject?: string; message?: string; }

function validate(data: { name: string; email: string; subject: string; message: string }): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Full name is required.";
  if (!data.email.trim()) errors.email = "Email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Please enter a valid email address.";
  if (!data.subject.trim()) errors.subject = "Subject is required.";
  if (!data.message.trim()) errors.message = "Message is required.";
  return errors;
}

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [fields, setFields] = useState({ name: "", email: "", subject: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validate(fields);
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setStatus("loading");
    try {
      const res = await fetch(siteConfig.formspree, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(fields),
      });
      if (res.ok) { setStatus("success"); setFields({ name: "", email: "", subject: "", message: "" }); setErrors({}); }
      else setStatus("error");
    } catch { setStatus("error"); }
  }

  /* Form input base — bg-surface and text-text respond to both themes */
  const inputBase =
    "w-full bg-surface border border-border rounded-lg px-4 py-3 text-text placeholder:text-muted text-sm transition-colors duration-200 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20";

  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <section id="contact" className="py-20 bg-section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-accent uppercase tracking-widest text-sm font-medium mb-2">
            Do You Have Any Questions?
          </p>
          <h2 className="text-4xl font-bold text-text">Contact Me</h2>
          <p className="mt-2 text-accent uppercase tracking-[0.2em] text-xs font-medium">
            I&apos;M AT YOUR SERVICES
          </p>
          <div className="mt-4 h-1 w-16 bg-accent mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Form */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
              <input name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <input type="text" name="name" placeholder="Full Name" value={fields.name} onChange={handleChange} className={inputBase} disabled={status === "loading"} />
                  {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                </div>
                <div className="flex flex-col gap-1">
                  <input type="email" name="email" placeholder="Email Address" value={fields.email} onChange={handleChange} className={inputBase} disabled={status === "loading"} />
                  {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <input type="text" name="subject" placeholder="Subject" value={fields.subject} onChange={handleChange} className={inputBase} disabled={status === "loading"} />
                {errors.subject && <p className="text-red-500 text-xs">{errors.subject}</p>}
              </div>

              <div className="flex flex-col gap-1">
                <textarea name="message" placeholder="Your Message" rows={6} value={fields.message} onChange={handleChange} className={`${inputBase} resize-none`} disabled={status === "loading"} />
                {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="flex items-center justify-center gap-2 py-3 px-8 rounded-lg bg-accent text-white font-semibold text-sm hover:bg-accent-h transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Sending…
                  </>
                ) : "Send Message"}
              </button>
            </form>

            {status === "success" && (
              <div className="flex items-start gap-3 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-sm">
                <span className="text-lg leading-none">✓</span>
                <span>Message sent! I&apos;ll get back to you soon.</span>
              </div>
            )}
            {status === "error" && (
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-sm">
                Something went wrong. Please try again or email me directly at{" "}
                <a href={`mailto:${siteConfig.email}`} className="underline hover:opacity-80">{siteConfig.email}</a>.
              </div>
            )}

            <div className="mt-2 text-center">
              <p className="text-accent uppercase tracking-widest text-xs font-semibold mb-1">
                CONNECT WITH ME
              </p>
              <p className="text-muted uppercase tracking-widest text-xs">
                I RESPOND WITHIN 24 HOURS
              </p>
            </div>
          </motion.div>

          {/* Contact info links */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            {contactLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-bg border border-border/50 hover:border-accent hover:shadow-md hover:shadow-accent/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                    <Icon className="w-5 h-5 text-accent group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wide mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm text-text">
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
