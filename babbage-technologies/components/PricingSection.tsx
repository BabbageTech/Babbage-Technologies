"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PricingPlan } from "@/types";
import { motion, Variants } from "framer-motion";
import {
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clipboard,
  Clock,
  Code,
  DollarSign,
  FileText,
  Layers,
  Lightbulb,
  Server,
  Settings,
  TrendingUp,
  Users2,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Icon mapping
const IconMap = {
  CheckCircle2: CheckCircle2,
  Clipboard: Clipboard,
  Layers: Layers,
  Code: Code,
  Settings: Settings,
  Clock: Clock,
  Server: Server,
  Users2: Users2,
  DollarSign: DollarSign,
  Zap: Zap,
  TrendingUp: TrendingUp,
  CalendarCheck: CalendarCheck,
  FileText: FileText,
  Lightbulb: Lightbulb,
};

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const faqVariants: Variants = {
  hidden: { height: 0, opacity: 0 },
  show: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

// Pricing Plans
const plans: PricingPlan[] = [
  {
    title: "Individual",
    price: "Ksh 15,000+",
    features: [
      "1 Web or Mobile App",
      "Basic Cloud Hosting",
      "Email Support",
      "1 User License",
      "Standard UI/UX Design",
    ],
  },
  {
    title: "Businesses",
    price: "Ksh 35,000+",
    features: [
      "Standard Cloud Hosting",
      "Priority Support",
      "5 User Licenses",
      "Advanced UI/UX Design",
    ],
    isPopular: true,
  },
  {
    title: "Institution",
    price: "Ksh 100,000+",
    features: [
      "Custom System Apps",
      "Premium Cloud Hosting",
      "24/7 Support",
      "Unlimited User Licenses",
      "Enterprise UI/UX Design",
    ],
  },
  {
    title: "Enterprise",
    price: "Custom",
    features: [
      "Multiple Applications",
      "Dedicated Cloud Servers",
      "Dedicated Account Manager",
      "Custom Integrations & Audits",
      "SLA Guarantee",
    ],
  },
];

// Pricing Models
const pricingModels = [
  {
    title: "Time & Material",
    desc: "Monthly billing based on actual development hours, with flexible scope and fixed hourly rates.",
    icon: "Clock",
  },
  {
    title: "Fixed Budget",
    desc: "Defined budget with prioritized features delivered within cost constraints and clear milestones.",
    icon: "CheckCircle2",
  },
  {
    title: "Fixed Price",
    desc: "Set price for a predefined scope, ideal for projects with clear, stable requirements.",
    icon: "Server",
  },
  {
    title: "Dedicated Team",
    desc: "Exclusive team of experts tailored to your project's needs for seamless integration.",
    icon: "Users2",
  },
];

// Cost Components
const keyCostComponents = [
  { title: "Requirements & Planning", desc: "15% of budget", icon: "Clipboard" },
  { title: "Architecture & UI/UX", desc: "10% of budget", icon: "Layers" },
  { title: "Coding", desc: "55% of budget", icon: "Code" },
  { title: "Quality Assurance", desc: "15% of budget", icon: "CheckCircle2" },
  { title: "Support & Maintenance", desc: "~15% yearly", icon: "Settings" },
];

// FAQs
const faqs = [
  {
    question: "How much does it cost to develop software?",
    answer: "Costs vary based on complexity, features, and team location. Simple apps can start from Ksh 1,500,000, while complex enterprise solutions can exceed Ksh 75,000,000. We provide detailed, transparent estimations after a discovery phase.",
  },
  {
    question: "What factors influence software development cost?",
    answer: "Key factors include project scope and complexity, chosen technology stack, required integrations, team size and expertise, desired timeline, and ongoing maintenance needs. UI/UX complexity also plays a significant role.",
  },
  {
    question: "Can I get a custom quote for my project?",
    answer: "Absolutely! We highly recommend a free, no-obligation cost and timeline estimation. Simply fill out our contact form with your project details, and our business analysts will provide a detailed proposal.",
  },
  {
    question: "How long does it take to develop software?",
    answer: "A minimum viable product (MVP) for a simple app might take 3-6 months, while a comprehensive enterprise solution could take 12+ months. We provide clear timelines in our project estimations.",
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer: "Yes, comprehensive post-launch support and maintenance are integral to our service. This includes monitoring, bug fixes, security updates, performance optimization, and feature enhancements.",
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        {/* Hero Section - Free Estimation */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-primary py-24 md:py-32">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-secondary rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <span className="text-sm text-white/90">No Obligation</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Get a Free Cost & Timeline Estimation
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
                Provide us with your project details, and our expert team will deliver a comprehensive,
                no-obligation estimation tailored to your specific needs.
              </p>
              <Link href="/contact">
                <Button className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-button text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Your Free Quote Now
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Pricing Plans Section */}
        <section className="py-24 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-semibold text-primary">Pricing</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-lg text-text-secondary">
                Choose scalable software solutions tailored to your needs — transparent,
                one-time development charges without hidden fees.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className={`relative bg-surface rounded-card shadow-card border ${
                    plan.isPopular ? "border-accent shadow-lg" : "border-border"
                  } transition-all duration-300 flex flex-col`}
                >
                  {plan.isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  
                  <CardHeader className="p-6 pb-0">
                    <CardTitle className="text-2xl font-bold text-text-primary">
                      {plan.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-primary">{plan.price}</span>
                      {plan.price !== "Custom" && <span className="text-text-tertiary"> / one-time</span>}
                    </div>
                    
                    <ul className="space-y-3 flex-1 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link href="/contact">
                      <Button
                        className={`w-full ${
                          plan.isPopular
                            ? "bg-accent hover:bg-accent-hover"
                            : "bg-primary hover:bg-primary-hover"
                        } text-white rounded-button`}
                      >
                        Choose {plan.title}
                      </Button>
                    </Link>
                  </CardContent>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Pricing Models Section */}
        <section className="py-24 md:py-32 bg-surface-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                Flexible Engagement Models
              </h2>
              <p className="text-lg text-text-secondary">
                Choose the engagement model that best fits your project needs and budget.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {pricingModels.map((model, index) => {
                const IconComponent = IconMap[model.icon as keyof typeof IconMap];
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="bg-surface rounded-card p-6 border border-border text-center transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      {IconComponent && <IconComponent className="w-7 h-7 text-primary" />}
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">{model.title}</h3>
                    <p className="text-text-secondary text-sm">{model.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Cost Components Section */}
        <section className="py-24 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                Key Cost Components
              </h2>
              <p className="text-lg text-text-secondary">
                Understanding where your investment goes in software development.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
            >
              {keyCostComponents.map((component, index) => {
                const IconComponent = IconMap[component.icon as keyof typeof IconMap];
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="bg-primary rounded-card p-5 text-center transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      {IconComponent && <IconComponent className="w-5 h-5 text-accent" />}
                    </div>
                    <h4 className="font-semibold text-white text-sm mb-1">{component.title}</h4>
                    <p className="text-white/70 text-xs">{component.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-24 md:py-32 bg-surface-alt">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-text-secondary">
                Everything you need to know about our pricing and process.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-surface rounded-card border border-border overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-surface-alt transition-colors"
                  >
                    <span className="font-semibold text-text-primary">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-accent flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-text-tertiary flex-shrink-0" />
                    )}
                  </button>
                  
                  <motion.div
                    variants={faqVariants}
                    initial="hidden"
                    animate={openFaq === index ? "show" : "hidden"}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-10"
            >
              <p className="text-text-secondary mb-4">Still have questions?</p>
              <Link href="/contact">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Ask More Questions
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}