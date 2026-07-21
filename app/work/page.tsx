"use client";

import PlateLabel from "@/components/PlateLabel";
import SprocketRule from "@/components/SprocketRule";
import { projects } from "@/lib/site-data";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function WorkPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        {/* ========== HERO ========== */}
        <section className="bg-background pt-32 lg:pt-40 pb-20">
          <div className="section-container">
            <PlateLabel index="01">Work</PlateLabel>
            <h1 className="font-display text-5xl md:text-6xl text-text-primary mt-6 max-w-2xl leading-[1.05]">
              Software we&apos;ve built for other people&apos;s businesses
            </h1>
            <p className="text-lg text-text-secondary max-w-xl mt-6 leading-relaxed">
              A selection of engagements across product, platform and infrastructure work.
              Client names appear where we have permission to share them; the rest are
              described by industry and outcome.
            </p>
          </div>
          <SprocketRule tone="paper" className="mt-16" />
        </section>

        {/* ========== PROJECT GRID ========== */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {projects.map((project, idx) => (
                <motion.div key={project.slug} variants={itemVariants}>
                  <Link
                    href={`/work/${project.slug}`}
                    className="group block border border-paper-line rounded-card p-8 h-full bg-surface hover:border-brass hover:shadow-card-hover transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-8">
                      <span className="plate-label text-verdigris">{project.industry}</span>
                      <span className="font-mono text-xs text-text-faint">
                        {String(idx + 1).padStart(2, "0")} / {project.year}
                      </span>
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-3 leading-snug group-hover:text-brass-hover transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-text-secondary leading-relaxed mb-4">{project.summary}</p>
                    <p className="font-mono text-xs text-text-faint mb-6">Client — {project.client}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map((t) => (
                        <span key={t} className="font-mono text-[11px] text-text-faint border border-paper-line rounded-badge px-2 py-1">
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-brass text-sm font-mono uppercase tracking-wide">
                      Read the case study <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ========== CTA ========== */}
        <section className="pb-24 md:pb-32 bg-background">
          <div className="section-container">
            <div className="bg-verdigris rounded-card-lg p-12 md:p-16 text-center">
              <h2 className="font-display text-3xl md:text-4xl text-text-paper mb-6">
                Have a project in mind?
              </h2>
              <p className="text-text-paper/85 mb-10 max-w-xl mx-auto leading-relaxed">
                We take on a limited number of engagements at a time so every one gets a senior team.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brass hover:bg-brass-hover text-text-paper px-8 py-3.5 rounded-button font-mono text-sm tracking-wide uppercase transition-colors"
              >
                Start a conversation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
