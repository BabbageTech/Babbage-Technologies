"use client";

import PlateLabel from "@/components/PlateLabel";
import SprocketRule from "@/components/SprocketRule";
import { Button } from "@/components/ui/button";
import { industries, services } from "@/lib/site-data";
import { motion, Variants } from "framer-motion";
import {
  Banknote, Film, GraduationCap, HeartPulse, Home as HomeIcon,
  Megaphone, ShoppingCart, Truck, ArrowRight
} from "lucide-react";
import Link from "next/link";

const industryIcons: Record<string, React.ElementType> = {
  Home: HomeIcon,
  HeartPulse: HeartPulse,
  Banknote: Banknote,
  Truck: Truck,
  GraduationCap: GraduationCap,
  Film: Film,
  Megaphone: Megaphone,
  ShoppingCart: ShoppingCart,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ServicesSection() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        {/* ========== HERO ========== */}
        <section className="bg-ink pt-32 lg:pt-40 pb-20">
          <div className="section-container">
            <PlateLabel index="01" tone="paper">Services</PlateLabel>
            <h1 className="font-display text-5xl md:text-6xl text-text-paper mt-6 max-w-2xl leading-[1.05]">
              Six disciplines, kept under one roof
            </h1>
            <p className="text-lg text-text-paper-muted max-w-xl mt-6 leading-relaxed">
              We don&apos;t hand your project between agencies. The same team that scopes it
              designs, builds and supports it — so nothing gets lost in translation.
            </p>
          </div>
          <SprocketRule tone="ink" className="mt-16" />
        </section>

        {/* ========== SERVICES DETAIL ========== */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-px bg-paper-line"
            >
              {services.map((service, idx) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="bg-background grid md:grid-cols-12 gap-6 p-8 md:p-10"
                >
                  <div className="md:col-span-1">
                    <span className="font-mono text-sm text-brass">{String(idx + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="md:col-span-4">
                    <h2 className="font-display text-2xl md:text-3xl text-text-primary leading-snug">
                      {service.title}
                    </h2>
                  </div>
                  <div className="md:col-span-4">
                    <p className="text-text-secondary leading-relaxed">{service.detail}</p>
                  </div>
                  <div className="md:col-span-3">
                    <div className="plate-label text-verdigris mb-2">Typical deliverables</div>
                    <ul className="space-y-1.5 mb-4">
                      {service.deliverables.map((d) => (
                        <li key={d} className="text-sm text-text-secondary">— {d}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {service.stack.map((t) => (
                        <span key={t} className="font-mono text-[11px] text-text-faint border border-paper-line rounded-badge px-2 py-1">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ========== INDUSTRIES ========== */}
        <section className="section-padding bg-ink">
          <div className="section-container">
            <PlateLabel index="02" tone="paper">Industries</PlateLabel>
            <h2 className="font-display text-4xl md:text-5xl text-text-paper mt-4 mb-16 max-w-xl">
              Domains we know well
            </h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {industries.map((industry) => {
                const Icon = industryIcons[industry.icon] ?? HomeIcon;
                return (
                  <motion.div key={industry.name} variants={itemVariants} className="border-t border-ink-line pt-5">
                    <Icon className="w-5 h-5 text-brass-bright mb-4" />
                    <h3 className="font-display text-lg text-text-paper mb-1.5">{industry.name}</h3>
                    <p className="text-text-paper-muted text-sm leading-relaxed">{industry.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ========== CTA ========== */}
        <section className="section-padding bg-background">
          <div className="section-container text-center">
            <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-6">
              Not sure which service fits?
            </h2>
            <p className="text-text-secondary mb-10 max-w-xl mx-auto leading-relaxed">
              Most engagements mix two or three of these. Tell us the problem and we&apos;ll tell you the shape of the solution.
            </p>
            <Link href="/contact">
              <Button className="bg-brass hover:bg-brass-hover text-text-paper px-8 py-5 rounded-button font-mono text-sm tracking-wide uppercase">
                Talk to us <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
