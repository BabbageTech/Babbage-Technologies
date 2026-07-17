"use client";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/site-data";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 border-b transition-colors duration-300 ${
          scrolled
            ? "bg-ink/95 backdrop-blur border-ink-line"
            : "bg-ink border-transparent"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 group flex items-center gap-2.5">
              <span
                className="w-8 h-8 rounded-full border border-brass/60 flex items-center justify-center text-brass-bright font-mono text-[13px] group-hover:border-brass transition-colors"
                aria-hidden="true"
              >
                B
              </span>
              <span className="font-display text-lg lg:text-xl font-semibold tracking-tight text-text-paper">
                Babbage <span className="text-text-paper-muted font-normal">Technologies</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 font-mono text-[13px] tracking-wide uppercase transition-colors duration-200 ${
                      isActive ? "text-brass-bright" : "text-text-paper-muted hover:text-text-paper"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute bottom-0 left-4 right-4 h-px bg-brass"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link href="/contact">
                <Button className="bg-brass hover:bg-brass-hover text-text-paper px-5 rounded-button font-mono text-[13px] tracking-wide uppercase">
                  Start a project
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-button border border-ink-line text-text-paper focus:outline-none focus-visible:ring-2 focus-visible:ring-brass transition-all"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-ink md:hidden"
            style={{ top: "64px" }}
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex flex-col h-full"
            >
              <div className="flex-1 overflow-y-auto py-8 px-6">
                <div className="space-y-1">
                  {navLinks.map((link, idx) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          className={`flex items-center justify-between py-3.5 px-4 font-display text-2xl border-b border-ink-line transition-all ${
                            isActive ? "text-brass-bright" : "text-text-paper hover:text-brass-bright"
                          }`}
                        >
                          {link.label}
                          <span className="font-mono text-xs text-text-paper-muted">
                            0{idx + 1}
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-8">
                  <Link href="/contact" className="block">
                    <Button className="w-full bg-brass hover:bg-brass-hover text-text-paper py-3 rounded-button font-mono text-sm tracking-wide uppercase">
                      Start a project
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
