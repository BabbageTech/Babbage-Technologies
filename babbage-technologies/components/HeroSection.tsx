"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-sky-800 text-white py-28 overflow-hidden">
      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 bg-[url('/hero-bg-pattern.svg')] bg-cover bg-center opacity-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Container */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight"
        >
          <span className="block bg-gradient-to-r from-cyan-400 to-sky-300 text-transparent bg-clip-text">
            Innovative Software Solutions
          </span>
          <span className="text-white">Babbage Technologies</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8"
        >
          Empowering startups, enterprises, and institutions with future-ready software,
          cloud platforms, and AI-driven digital transformation.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/contact" passHref>
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-4 text-base font-medium rounded-lg transition duration-300 shadow-md"
            >
              Get Started with Babbage Technologies
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
