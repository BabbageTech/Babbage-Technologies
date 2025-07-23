"use client";

import { Button } from "@/components/ui/button"; // Assuming Button component is available
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion"; // Import motion for animations
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from 'react'; // Import useState and useEffect

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll position

  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled to true if scrolled down more than 50px, otherwise false
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Call handleScroll once on mount to set initial state
    handleScroll();

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
      // Dynamically apply classes based on scroll state
      className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out
        ${isScrolled
          ? "bg-gradient-to-r from-blue-50/80 to-white/80 shadow-md backdrop-blur-md border-b border-blue-100/50" // More transparent and less shadow when scrolled
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

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          {/* Call to Action Button for Mobile (optional, can be moved inside dropdown if preferred) */}
          <Link href="/contact" className="mr-4">
            <Button
              aria-label="Get a Quote"
              className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md text-sm font-semibold shadow-sm transition-all duration-300"
            >
              Quote
            </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none p-2 rounded-md bg-blue-100/50 hover:bg-blue-200/70 transition-colors duration-200 shadow-sm border border-blue-200">
              <Menu className="h-7 w-7 text-blue-800" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="mt-3 w-48 bg-white/95 backdrop-blur-md border border-blue-200 rounded-lg shadow-xl overflow-hidden"
            >
              {navLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link
                    href={link.href}
                    className={`block w-full px-4 py-2 text-base font-medium transition-colors duration-200
                      ${pathname === link.href
                        ? "bg-blue-100 text-blue-800 font-semibold"
                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                      }`}
                  >
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </motion.header>
  );
}
