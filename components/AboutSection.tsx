"use client";

import DuotonePhoto from "@/components/DuotonePhoto";
import PlateLabel from "@/components/PlateLabel";
import SprocketRule from "@/components/SprocketRule";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import {
  Award, ArrowRight, Globe2, Lightbulb, Lock, RefreshCcw, ShieldCheck, Users2,
} from "lucide-react";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const values = [
  { title: "Integrity", desc: "We foster trust through honest communication, ethical practice and transparent interactions.", icon: ShieldCheck },
  { title: "Innovation", desc: "A collaborative environment where better solutions come from collective, not solo, thinking.", icon: Lightbulb },
  { title: "Reliability", desc: "Dependable technology built for long-term stability and robust performance.", icon: RefreshCcw },
  { title: "Customer focus", desc: "Long-term partnerships, with solutions aligned to your actual business goals.", icon: Users2 },
  { title: "Security first", desc: "Stringent data protection measures, so your information stays yours.", icon: Lock },
  { title: "Global perspective", desc: "Respect for cultural diversity, and solutions that work across borders.", icon: Globe2 },
];

const team = [
  { name: "Simon Keya", title: "CTO & Co-Founder" },
  { name: "Kelvin Wekesa", title: "COO & Co-Founder" },
  { name: "Elena Safonova", title: "Head of QA" },
  { name: "Kate Merzlova", title: "Head of Sales & Marketing" },
  { name: "Irina Baryshnaya", title: "Head of Project Management" },
];

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

export default function AboutSection() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        {/* ========== HERO ========== */}
        <section className="bg-ink pt-32 lg:pt-40 pb-20">
          <div className="section-container grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <PlateLabel index="01" tone="paper">About</PlateLabel>
              <h1 className="font-display text-5xl md:text-6xl text-text-paper mt-6 leading-[1.05]">
                Named for the man who drew the first computer
              </h1>
            </div>
            <p className="text-lg text-text-paper-muted leading-relaxed">
              Charles Babbage never saw his Analytical Engine built in his lifetime — but every
              gear was specified, every register accounted for. We took the name because that&apos;s
              the standard we hold our own work to: designed completely, before it&apos;s built at all.
            </p>
          </div>

          <div className="section-container mt-16">
            <DuotonePhoto
              src="/about-hero.jpg"
              alt="The Babbage Technologies team at work"
              priority
              className="w-full h-[320px] md:h-[440px] rounded-card-lg"
            />
          </div>

          <SprocketRule tone="ink" className="mt-16" />
        </section>

        {/* ========== STORY ========== */}
        <section className="section-padding bg-background">
          <div className="section-container grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-5">
              <PlateLabel index="02">Our story</PlateLabel>
              <DuotonePhoto
                src="/about.jpg"
                alt="Members of the Babbage Technologies team collaborating"
                tone="ink-verdigris"
                className="w-full aspect-[4/5] rounded-card-lg mt-6"
              />
            </div>
            <div className="md:col-span-7 md:pt-14 space-y-6 text-text-secondary leading-relaxed text-lg">
              <p>
                Babbage Technologies works with founders, operators and institutions across
                Kenya and beyond who need software built properly the first time — not
                prototyped, patched and rebuilt three times over.
              </p>
              <p>
                We keep our team small on purpose. A senior engineer, designer and project
                lead stay on your project from discovery through to the support ticket
                filed a year after launch, instead of a rotating cast of contractors.
              </p>
              <p>
                That approach shows up in the numbers our clients care about: projects that
                ship on the estimate, systems that don&apos;t need a rewrite eighteen months in,
                and a support line that actually gets answered.
              </p>
            </div>
          </div>
        </section>

        {/* ========== VALUES ========== */}
        <section className="section-padding bg-ink">
          <div className="section-container">
            <PlateLabel index="03" tone="paper">What we hold to</PlateLabel>
            <h2 className="font-display text-4xl md:text-5xl text-text-paper mt-4 mb-16 max-w-xl">
              Six working principles
            </h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <motion.div key={value.title} variants={itemVariants} className="border-t border-ink-line pt-5">
                    <Icon className="w-5 h-5 text-brass-bright mb-4" />
                    <h3 className="font-display text-lg text-text-paper mb-1.5">{value.title}</h3>
                    <p className="text-text-paper-muted text-sm leading-relaxed">{value.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ========== TEAM ========== */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <PlateLabel index="04">Leadership</PlateLabel>
            <h2 className="font-display text-4xl md:text-5xl text-text-primary mt-4 mb-16 max-w-xl">
              The people setting direction
            </h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-5 gap-8"
            >
              {team.map((member) => (
                <motion.div key={member.name} variants={itemVariants}>
                  <div className="w-16 h-16 rounded-full bg-ink border border-brass/50 flex items-center justify-center font-mono text-brass-bright text-sm mb-4">
                    {initials(member.name)}
                  </div>
                  <h3 className="font-display text-base text-text-primary">{member.name}</h3>
                  <p className="text-text-tertiary text-sm">{member.title}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ========== CTA ========== */}
        <section className="pb-24 md:pb-32 bg-background">
          <div className="section-container">
            <div className="bg-verdigris rounded-card-lg p-12 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <Award className="w-8 h-8 text-brass-bright mb-4" />
                <h2 className="font-display text-3xl md:text-4xl text-text-paper mb-3">
                  Want the long version?
                </h2>
                <p className="text-text-paper/85 max-w-md leading-relaxed">
                  Happy to walk through past projects, references, or how we&apos;d approach yours specifically.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link href="/work">
                  <Button variant="outline" className="border-white/30 bg-transparent text-text-paper hover:bg-white/10 hover:text-text-paper px-6 py-5 rounded-button font-mono text-sm tracking-wide uppercase w-full">
                    See our work
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button className="bg-brass hover:bg-brass-hover text-text-paper px-6 py-5 rounded-button font-mono text-sm tracking-wide uppercase w-full">
                    Get in touch <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
