"use client";

import DuotonePhoto from "@/components/DuotonePhoto";
import PlateLabel from "@/components/PlateLabel";
import SprocketRule from "@/components/SprocketRule";
import { Button } from "@/components/ui/button";
import { projects, services, stats, testimonials } from "@/lib/site-data";
import { motion, Variants } from "framer-motion";
import { ArrowRight, ArrowUpRight, Quote } from "lucide-react";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const processSteps = [
  {
    n: "01",
    title: "Discovery",
    desc: "We map the problem, the users and the constraints before a line of code is written.",
  },
  {
    n: "02",
    title: "Design",
    desc: "Architecture and interface decisions get made together, so neither fights the other later.",
  },
  {
    n: "03",
    title: "Build",
    desc: "Short, demoable iterations — you see working software every week, not a status report.",
  },
  {
    n: "04",
    title: "Operate",
    desc: "We stay on after launch: monitoring, support and the next iteration, on a cadence you set.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        {/* ========== HERO ========== */}
        <section className="relative bg-background overflow-hidden pt-32 lg:pt-40 pb-16">
          <div className="section-container relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                  <PlateLabel index="01">Babbage Technologies — Nairobi</PlateLabel>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="font-display text-5xl sm:text-6xl lg:text-[4.25rem] leading-[1.04] text-text-primary mt-6"
                >
                  Software, built
                  <br />
                  the <span className="text-brass-hover italic">right way.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-text-secondary max-w-lg mt-6 leading-relaxed"
                >
                  We design and build custom software, cloud infrastructure and digital products
                  for growing businesses — with real regard for precision, fit and durability.
                  Every part accounted for; nothing left to guesswork.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap gap-4 mt-10"
                >
                  <Link href="/contact">
                    <Button className="bg-brass hover:bg-brass-hover text-text-paper px-7 py-5 rounded-button font-mono text-sm tracking-wide uppercase group">
                      Start a project
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/work">
                    <Button
                      variant="outline"
                      className="border-paper-line bg-transparent text-text-primary hover:bg-paper-dim hover:text-text-primary px-7 py-5 rounded-button font-mono text-sm tracking-wide uppercase"
                    >
                      See the work
                    </Button>
                  </Link>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <DuotonePhoto
                  src="/about-hero.jpg"
                  alt="The Babbage Technologies team at work in Nairobi"
                  priority
                  tilt={1}
                  className="w-full aspect-[4/3] rounded-card-lg"
                />
              </motion.div>
            </div>
          </div>

          <SprocketRule tone="paper" className="mt-20" />

          <div className="section-container py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="font-mono text-2xl md:text-3xl text-brass-hover">{stat.value}</div>
                  <div className="text-sm text-text-secondary mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== SERVICES ========== */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <div className="max-w-2xl">
                <PlateLabel index="02">Core services</PlateLabel>
                <h2 className="font-display text-4xl md:text-5xl text-text-primary mt-4">
                  Six disciplines, one team
                </h2>
              </div>
              <Link href="/services" className="inline-flex items-center gap-1.5 text-verdigris font-mono text-sm uppercase tracking-wide hover:text-brass-hover transition-colors">
                All services <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-paper-line"
            >
              {services.slice(0, 4).map((service, idx) => (
                <motion.div key={service.id} variants={itemVariants} className="group bg-background p-7 flex flex-col justify-between min-h-[220px]">
                  <div>
                    <span className="font-mono text-xs text-text-faint">0{idx + 1}</span>
                    <h3 className="font-display text-xl text-text-primary mt-3 mb-2 leading-snug">{service.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{service.summary}</p>
                  </div>
                  <Link href="/services" className="mt-6 text-brass text-sm font-mono uppercase tracking-wide inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ========== APPROACH ========== */}
        <section className="section-padding bg-paper-dim relative">
          <div className="section-container">
            <PlateLabel index="03">How we work</PlateLabel>
            <h2 className="font-display text-4xl md:text-5xl text-text-primary mt-4 mb-16 max-w-xl">
              A sequence, not a scramble
            </h2>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5"
              >
                <DuotonePhoto
                  src="/Commitment.jpg"
                  alt="The Babbage Technologies team working through a project together"
                  tilt={1}
                  className="w-full aspect-[4/3] rounded-card-lg"
                />
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8"
              >
                {processSteps.map((step) => (
                  <motion.div key={step.n} variants={itemVariants} className="border-t-2 border-brass/30 pt-6">
                    <div className="font-mono text-brass-hover text-sm mb-4">{step.n}</div>
                    <h3 className="font-display text-2xl text-text-primary mb-2">{step.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========== FEATURED WORK ========== */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <div className="max-w-2xl">
                <PlateLabel index="04">Selected work</PlateLabel>
                <h2 className="font-display text-4xl md:text-5xl text-text-primary mt-4">
                  Recent projects
                </h2>
              </div>
              <Link href="/work" className="inline-flex items-center gap-1.5 text-verdigris font-mono text-sm uppercase tracking-wide hover:text-brass-hover transition-colors">
                View all work <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {projects.slice(0, 3).map((project) => (
                <motion.div key={project.slug} variants={itemVariants}>
                  <Link href={`/work/${project.slug}`} className="group block border border-paper-line rounded-card p-7 h-full hover:border-brass transition-colors duration-300 bg-surface">
                    <div className="flex items-center justify-between mb-6">
                      <span className="plate-label text-verdigris">{project.industry}</span>
                      <span className="font-mono text-xs text-text-faint">{project.year}</span>
                    </div>
                    <h3 className="font-display text-xl text-text-primary mb-2 group-hover:text-brass-hover transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-6">{project.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.slice(0, 3).map((t) => (
                        <span key={t} className="font-mono text-[11px] text-text-faint border border-paper-line rounded-badge px-2 py-1">
                          {t}
                        </span>
                      ))}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ========== TESTIMONIALS ========== */}
        <section className="section-padding bg-verdigris relative overflow-hidden">
          <div className="section-container relative z-10">
            <PlateLabel index="05" tone="paper" className="text-paper/80">What clients say</PlateLabel>
            <h2 className="font-display text-4xl md:text-5xl text-text-paper mt-4 mb-16 max-w-xl">
              Measured by the people who hired us
            </h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, idx) => (
                <motion.div key={idx} variants={itemVariants} className="border-t border-white/20 pt-6">
                  <Quote className="w-5 h-5 text-brass-bright mb-4" />
                  <p className="text-text-paper/90 leading-relaxed mb-6 text-[15px]">{testimonial.quote}</p>
                  <p className="font-display text-text-paper">{testimonial.author}</p>
                  <p className="text-sm text-brass-bright font-mono">{testimonial.role}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ========== CTA ========== */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-ink rounded-card-lg p-12 md:p-16 text-center relative overflow-hidden"
            >
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-text-paper mb-6">
                Ready to build something precise?
              </h2>
              <p className="text-lg text-text-paper-muted mb-10 max-w-2xl mx-auto leading-relaxed">
                Tell us what you&apos;re building. We&apos;ll tell you honestly what it takes.
              </p>
              <Link href="/contact">
                <Button className="bg-brass hover:bg-brass-hover text-text-paper px-9 py-5 rounded-button font-mono text-sm tracking-wide uppercase">
                  Contact us today
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
