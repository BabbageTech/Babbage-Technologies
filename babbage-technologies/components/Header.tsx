"use client";

import { Button } from "@/components/ui/button"; // Assuming Button component is available
import { motion } from "framer-motion"; // Import motion for animations
import { Menu, X } from "lucide-react"; // Import Menu and X icons from lucide-react
import Link from 'next/link';
import { usePathname } from "next/navigation"; // Import usePathname for active link highlighting
import React, { useEffect, useState } from 'react'; // Import useState and useEffect

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll position for transparency
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu open/close

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Effect to prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = ''; // Clean up on unmount
    };
  }, [isMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out
        ${isScrolled
          ? "bg-white/80 shadow-md backdrop-blur-md border-b border-blue-100/50" // More transparent and "colourless" white when scrolled
          : "bg-gradient-to-r from-blue-50 to-white shadow-lg backdrop-blur-sm border-b border-blue-100" // Opaque and full shadow when at top
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="text-3xl font-extrabold text-blue-900 tracking-tight drop-shadow-sm">
          Babbage<span className="text-teal-600">Technologies</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-lg font-medium transition-all duration-300 ease-in-out group
                ${pathname === link.href
                  ? "text-blue-800 font-semibold"
                  : "text-gray-700 hover:text-blue-800"
                }`}
            >
              {link.label}
              {/* Underline effect */}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out
                  ${pathname === link.href ? "scale-x-100" : ""}`}
              ></span>
            </Link>
          ))}
          {/* Call to Action Button for Desktop */}
          <Link href="/contact">
            <Button
              aria-label="Get a Quote"
              className="ml-6 bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-lg text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Get a Quote
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none p-2 rounded-md bg-blue-100/50 hover:bg-blue-200/70 transition-colors duration-200 shadow-sm border border-blue-200"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMenuOpen ? <X className="h-7 w-7 text-blue-800" /> : <Menu className="h-7 w-7 text-blue-800" />}
          </button>
        </div>
      </div>

      {/* Custom Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="md:hidden fixed inset-0 top-[68px] bg-blue-900/95 backdrop-blur-md z-40 flex flex-col items-center py-8 px-6 border-t border-blue-200 shadow-xl" // Changed background to dark blue for contrast
        >
          <nav className="flex flex-col space-y-6 text-center w-full">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
                className={`block text-xl font-medium py-3 rounded-lg transition-colors duration-200
                  ${pathname === link.href
                    ? "bg-teal-600 text-white font-semibold" // Active link on dark background
                    : "text-blue-100 hover:bg-teal-600 hover:text-white" // Regular link on dark background
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          {/* Mobile CTA button inside menu, full width */}
          <div className="mt-8 w-full px-4">
            <Link href="/contact">
              <Button
                aria-label="Get a Quote"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg text-base font-semibold shadow-md transition-all duration-300 transform hover:scale-[1.02]"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
