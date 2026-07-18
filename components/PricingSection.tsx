"use client";

import PlateLabel from "@/components/PlateLabel";
import SprocketRule from "@/components/SprocketRule";
import { Button } from "@/components/ui/button";
import { pricingPlans } from "@/lib/site-data";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const faqs = [
  {
    question: "How much does it cost to develop software?",
    answer:
      "Costs vary based on complexity, features and timeline. Simple apps can start from Ksh 1,500,000, while complex enterprise solutions can exceed Ksh 75,000,000. We give a detailed, transparent estimate after a discovery phase — the figures above are starting points, not the full range.",
  },
  {
    question: "What factors influence software development cost?",
    answer:
      "Project scope and complexity, the chosen technology stack, required integrations, team size and expertise, desired timeline, and ongoing maintenance needs. UI/UX complexity plays a significant role too.",
  },
  {
    question: "Can I get a custom quote for my project?",
    answer:
      "Yes — we recommend a free, no-obligation cost and timeline estimate. Fill out our contact form with your project details and we'll come back with a detailed proposal.",
  },
  {
    question: "How long does it take to develop software?",
    answer:
      "An MVP for a simple app might take three to six months; a comprehensive enterprise solution can take twelve months or more. We set out clear timelines as part of every estimate.",
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer:
      "Yes — comprehensive post-launch support is part of every engagement: monitoring, bug fixes, security updates, performance optimisation and feature enhancements.",
  },
];

export default function PricingSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        {/* ========== HERO ========== */}
        <section className="bg-ink pt-32 lg:pt-40 pb-20">
          <div className="section-container">
            <PlateLabel index="01" tone="paper">Pricing</PlateLabel>
            <h1 className="font-display text-5xl md:text-6xl text-text-paper mt-6 max-w-2xl leading-[1.05]">
              Straightforward tiers, honest quotes
            </h1>
            <p className="text-lg text-text-paper-muted max-w-xl mt-6 leading-relaxed">
              These starting prices give you a sense of scale. Every project gets a proper
              estimate after discovery — no surprise line items.
            </p>
          </div>
          <SprocketRule tone="ink" className="mt-16" />
        </section>

        {/* ========== PLANS ========== */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-paper-line"
            >
              {pricingPlans.map((plan) => (
                <motion.div
                  key={plan.title}
                  variants={itemVariants}
                  className={`bg-background p-8 flex flex-col ${plan.isPopular ? "ring-1 ring-inset ring-brass" : ""}`}
                >
                  {plan.isPopular && (
                    <span className="plate-label text-brass mb-4">Most common</span>
                  )}
                  <h2 className="font-display text-2xl text-text-primary mb-1">{plan.title}</h2>
                  <div className="font-mono text-2xl text-brass-hover mb-6">{plan.price}</div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-text-secondary">
                        <Check className="w-4 h-4 text-verdigris shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button
                      variant={plan.isPopular ? "default" : "outline"}
                      className={`w-full rounded-button font-mono text-xs tracking-wide uppercase ${
                        plan.isPopular
                          ? "bg-brass hover:bg-brass-hover text-text-paper"
                          : "border-paper-line text-text-primary hover:bg-paper-dim"
                      }`}
                    >
                      Get a quote
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <p className="text-text-tertiary text-sm mt-8 font-mono">
              Prices in Kenyan shillings (Ksh), starting from. Final quotes follow a discovery call.
            </p>
          </div>
        </section>

        {/* ========== FAQ ========== */}
        <section className="section-padding bg-ink">
          <div className="section-container max-w-3xl">
            <PlateLabel index="02" tone="paper">Questions</PlateLabel>
            <h2 className="font-display text-4xl md:text-5xl text-text-paper mt-4 mb-12">
              Before you ask
            </h2>

            <div className="divide-y divide-ink-line border-t border-b border-ink-line">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx}>
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between py-6 text-left group"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-lg text-text-paper pr-6 group-hover:text-brass-bright transition-colors">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-brass-bright shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-text-paper-muted leading-relaxed pb-6 max-w-xl">{faq.answer}</p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========== CTA ========== */}
        <section className="section-padding bg-background">
          <div className="section-container text-center">
            <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-6">
              Ready for a real number?
            </h2>
            <p className="text-text-secondary mb-10 max-w-xl mx-auto leading-relaxed">
              Send us your project details and we&apos;ll come back with a proper estimate, not a guess.
            </p>
            <Link href="/contact">
              <Button className="bg-brass hover:bg-brass-hover text-text-paper px-8 py-5 rounded-button font-mono text-sm tracking-wide uppercase">
                Request a quote <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
