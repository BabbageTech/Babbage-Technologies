"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

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
    // Simulate API call
    setTimeout(() => {
      toast.success("Subscribed successfully! 🎉", {
        duration: 3000,
        position: "bottom-center",
        style: {
          background: "#10B981",
          color: "#fff",
        },
      });
      setNewsletterEmail("");
      setIsSubscribing(false);
    }, 1000);
  };

  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Sitemap", href: "/sitemap" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <>
      <Toaster />
      <motion.footer
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative overflow-hidden bg-primary"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-secondary rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <h3 className="text-2xl font-bold text-white">
                  Barbage<span className="text-accent">Technologies</span>
                </h3>
              </Link>
              <p className="text-white/70 text-sm leading-relaxed">
                Innovating software and cloud solutions to drive your business forward.
                We are committed to excellence and long-term partnerships.
              </p>
              
              {/* Social Links */}
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
                      className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-all duration-300 group"
                    >
                      <IconComponent className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-5">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-accent transition-colors duration-200 text-sm group inline-flex items-center gap-1"
                    >
                      <span className="w-0 group-hover:w-1.5 h-0.5 bg-accent transition-all duration-200" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-5">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <a href="mailto:hello@barbagetech.com" className="text-white/60 hover:text-accent transition-colors text-sm break-all">
                    hello@barbagetech.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <a href="tel:+254114161768" className="text-white/60 hover:text-accent transition-colors text-sm block">
                      +254 114 161 768
                    </a>
                    <a href="tel:+254768378046" className="text-white/60 hover:text-accent transition-colors text-sm block">
                      +254 768 378 046
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-white/60 text-sm">
                    1234 Innovation Street, <br />
                    Nairobi, Kenya
                  </span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-5">Stay Connected</h4>
              <p className="text-white/60 text-sm mb-4">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full pl-10 pr-4 py-2.5 bg-white/10 border border-white/20 rounded-button text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm"
                    aria-label="Email for newsletter"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubscribing}
                  className="w-full bg-accent hover:bg-accent-hover text-white px-4 py-2.5 rounded-button text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubscribing ? (
                    <>
                      <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Copyright and Legal Links */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-white/40 text-xs">
              &copy; {new Date().getFullYear()} Barbage Technologies. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-3">
              {legalLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="text-white/40 hover:text-accent transition-colors text-xs"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.footer>
    </>
  );
}