"use client";

import { company, navLinks } from "@/lib/site-data";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import SprocketRule from "./SprocketRule";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) {
      toast.error("Please enter a valid email address.", {
        duration: 3000,
        position: "bottom-center",
      });
      return;
    }

    setIsSubscribing(true);
    setTimeout(() => {
      toast.success("Subscribed. Welcome aboard.", {
        duration: 3000,
        position: "bottom-center",
        style: { background: "#3E6259", color: "#EFECE3" },
      });
      setNewsletterEmail("");
      setIsSubscribing(false);
    }, 900);
  };

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <>
      <footer className="bg-ink text-text-paper">
        <SprocketRule tone="ink" className="pt-8" />
        <div className="section-container py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Company Info */}
            <div className="space-y-4 lg:col-span-1">
              <Link href="/" className="inline-flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full border border-brass/60 flex items-center justify-center text-brass-bright font-mono text-[13px]">
                  B
                </span>
                <span className="font-display text-lg font-semibold text-text-paper">Babbage</span>
              </Link>
              <p className="text-text-paper-muted text-sm leading-relaxed max-w-xs">
                Custom software, cloud infrastructure and digital products, engineered with the
                precision of an instrument, not assembled from a template.
              </p>
              <div className="flex space-x-3 pt-2">
                {socialLinks.map((social, idx) => {
                  const IconComponent = social.icon;
                  return (
                    <Link
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-9 h-9 border border-ink-line rounded-full flex items-center justify-center hover:border-brass hover:text-brass-bright transition-all duration-300 text-text-paper-muted"
                    >
                      <IconComponent className="w-4 h-4" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="plate-label text-text-paper-muted mb-5">Navigate</h4>
              <ul className="space-y-3">
                {[{ label: "Home", href: "/" }, ...navLinks].map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-text-paper-muted hover:text-brass-bright transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="plate-label text-text-paper-muted mb-5">Reach us</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3 text-text-paper-muted">
                  <MapPin className="w-4 h-4 mt-0.5 text-brass-bright shrink-0" />
                  <span>{company.address.join(", ")}</span>
                </li>
                <li className="flex items-start gap-3 text-text-paper-muted">
                  <Phone className="w-4 h-4 mt-0.5 text-brass-bright shrink-0" />
                  <a href={`tel:${company.phones[0].replace(/\s/g, "")}`} className="hover:text-brass-bright transition-colors">
                    {company.phones[0]}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-text-paper-muted">
                  <Mail className="w-4 h-4 mt-0.5 text-brass-bright shrink-0" />
                  <a href={`mailto:${company.email}`} className="hover:text-brass-bright transition-colors">
                    {company.email}
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="plate-label text-text-paper-muted mb-5">Stay posted</h4>
              <p className="text-text-paper-muted text-sm mb-4">
                Occasional notes on new work and openings. No spam.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="you@company.com"
                  aria-label="Email address"
                  className="min-w-0 flex-1 bg-ink-soft border border-ink-line rounded-button px-3 py-2 text-sm text-text-paper placeholder:text-text-paper-muted/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-brass"
                />
                <button
                  type="submit"
                  disabled={isSubscribing}
                  aria-label="Subscribe"
                  className="shrink-0 bg-brass hover:bg-brass-hover disabled:opacity-60 text-text-paper rounded-button px-3 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-ink-line">
          <div className="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-paper-muted font-mono">
              © {new Date().getFullYear()} Babbage Technologies. All rights reserved.
            </p>
            <div className="flex gap-6">
              {legalLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="text-xs text-text-paper-muted hover:text-brass-bright transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
