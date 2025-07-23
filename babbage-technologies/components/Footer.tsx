"use client"; // Add this directive at the very top of the file

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"; // Import social icons, including MapPin
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.4 }}
      className="bg-gradient-to-br from-blue-900 to-indigo-950 text-blue-100 py-16 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="flex flex-col items-start">
            <h3 className="text-2xl font-extrabold text-white mb-4 drop-shadow-sm">
              Babbage<span className="text-teal-400">Technologies</span>
            </h3>
            <p className="mt-2 text-base leading-relaxed text-blue-200">
              Innovating software and cloud solutions to drive your business forward.
              We are committed to excellence and long-term partnerships.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-blue-300 hover:text-teal-400 transition-colors duration-300" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-blue-300 hover:text-teal-400 transition-colors duration-300" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-blue-300 hover:text-teal-400 transition-colors duration-300" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-blue-300 hover:text-teal-400 transition-colors duration-300" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-base text-blue-200 hover:text-teal-400 transition-colors duration-300 relative group">
                  About Us
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-base text-blue-200 hover:text-teal-400 transition-colors duration-300 relative group">
                  Services
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-base text-blue-200 hover:text-teal-400 transition-colors duration-300 relative group">
                  Pricing
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-base text-blue-200 hover:text-teal-400 transition-colors duration-300 relative group">
                  Contact
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-base text-blue-200 hover:text-teal-400 transition-colors duration-300 relative group">
                  Blog
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-5">Get in Touch</h3>
            <div className="space-y-3 text-base text-blue-200">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-teal-400 mr-3 flex-shrink-0" />
                <a href="mailto:babbagetechnologies@gmail.com" className="hover:text-teal-400 transition-colors duration-300">
                  babbagetechnologies@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-teal-400 mr-3 flex-shrink-0" />
                <a href="tel:+15551234567" className="hover:text-teal-400 transition-colors duration-300">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-teal-400 mr-3 flex-shrink-0 mt-1" />
                <span>
                  123 Tech Street, <br />Innovation City, <br />Global Region, 10001
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="text-xl font-bold text-white mb-5">Stay Connected</h3>
            <p className="text-base text-blue-200 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="p-3 rounded-lg bg-blue-800/50 border border-blue-700 text-white placeholder-blue-300 focus:ring-2 focus:ring-teal-400 focus:border-transparent outline-none transition-all duration-300"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="mt-16 pt-8 border-t border-blue-700/50 text-center text-sm text-blue-300">
          <p>&copy; {new Date().getFullYear()} Babbage Technologies. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link href="/privacy-policy" className="hover:text-teal-400 transition-colors duration-300">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-teal-400 transition-colors duration-300">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-teal-400 transition-colors duration-300">Sitemap</Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
