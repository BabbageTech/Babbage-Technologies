// app/pricing/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PricingPlan } from "@/types";
import { motion, Variants } from "framer-motion";
import {
  CalendarCheck,
  CheckCircle2, ChevronDown, ChevronUp, Clipboard, Clock, Code,
  DollarSign,
  FileText,
  Layers,
  Lightbulb,
  Server, Settings,
  TrendingUp,
  Users2,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Define a mapping for Lucide icons to be used dynamically
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


const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const faqVariants: Variants = {
  hidden: { height: 0, opacity: 0 },
  show: { height: "auto", opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function PricingPage() {
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
      title: "Small Business",
      price: "Ksh 35,000+",
      features: [
        "Standard Cloud Hosting",
        "Priority Support",
        "User Licenses",
        "Advanced UI/UX Design",
      ],
      isPopular: true,
    },
    {
      title: "Institution",
      price: "Ksh 100,000+",
      features: [
        "Custom ERP/HMS",
        "Premium Cloud Hosting",
        "24/7 Support",
        "User Licenses",
        "Enterprise UI/UX Design",
      ],
    },
    {
      title: "Enterprise",
      price: "Contact Us",
      features: [
        "Several Apps",
        "Dedicated Cloud Servers",
        "Dedicated Account Manager",
        "Custom Integrations & Audits",
      ],
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow">
        {/* Free Cost Estimation */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 to-indigo-950 text-white relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
                Get a Free Cost & Timeline Estimation
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8 leading-relaxed">
                Provide us with your project details, and our expert team of business analysts,
                developers, and designers will deliver a comprehensive, no-obligation
                estimation tailored to your specific needs.
              </p>
              <Link href="/contact">
                <Button
                  aria-label="Get Free Quote"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 rounded-lg text-lg font-semibold shadow-[0_0_15px_rgba(13,148,136,0.6)] transition-all duration-300 transform hover:scale-105"
                >
                  Get Your Free Quote Now
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 to-blue-950 text-gray-100 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
                Choose scalable software solutions tailored to your needs —
                we offer transparent, one-time development charges without hidden fees.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  className={`bg-white/10 backdrop-blur-sm border ${plan.isPopular ? "border-teal-500 shadow-[0_0_20px_rgba(13,148,136,0.8)]" : "border-blue-700/30"} rounded-xl shadow-2xl hover:shadow-teal-500/50 transition-all duration-500 relative flex flex-col`}
                >
                  {plan.isPopular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-lg">
                      Most Popular
                    </div>
                  )}
                  <Card className="bg-transparent border-0 flex flex-col flex-1">
                    <CardHeader className={`px-6 py-6 ${plan.isPopular ? "bg-gradient-to-r from-teal-600 to-blue-600" : "bg-blue-800/20"} rounded-t-xl`}>
                      <CardTitle className={`text-2xl font-extrabold ${plan.isPopular ? "text-white" : "text-blue-200"}`}>
                        {plan.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-1 p-6">
                      <p className="text-4xl font-extrabold text-teal-400 mb-4">{plan.price}</p>
                      <ul className="space-y-3 flex-1 mb-6 text-blue-100">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-base">
                            <CheckCircle2 className="h-5 w-5 text-teal-400 mr-2 flex-shrink-0 mt-1" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link href="/contact" className="mt-auto">
                        <Button
                          aria-label={`Choose ${plan.title}`}
                          className={`w-full ${plan.isPopular ? "bg-teal-600 hover:bg-teal-700 shadow-[0_0_15px_rgba(13,148,136,0.7)]" : "bg-blue-700 hover:bg-blue-800 shadow-[0_0_10px_rgba(29,78,216,0.5)]"} text-white rounded-lg text-md font-semibold transition-all duration-300 transform hover:scale-[1.02]`}
                        >
                          Choose {plan.title}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Pricing Models */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 to-indigo-950 text-gray-100 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-1000"></div>
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-3000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12 drop-shadow-lg"
            >
              Flexible Engagement Models
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
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
                  desc: "Set price for a predefined scope, ideal for projects with clear, stable requirements and outcomes.",
                  icon: "Server",
                },
                {
                  title: "Dedicated Team",
                  desc: "Exclusive team of experts tailored to your project’s needs for seamless integration and long-term collaboration.",
                  icon: "Users2",
                },
              ].map((model, index) => {
                const IconComponent = IconMap[model.icon as keyof typeof IconMap];
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white/10 backdrop-blur-sm border border-blue-700/30 rounded-xl shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-500 aspect-square p-6 flex flex-col justify-center items-center text-center"
                  >
                    <div className="p-4 bg-blue-700/20 rounded-full shadow-inner border border-blue-400/50 mb-4">
                      {IconComponent && <IconComponent className="w-8 h-8 text-teal-400" />}
                    </div>
                    <CardTitle className="text-xl md:text-2xl font-extrabold text-white mb-2">
                      {model.title}
                    </CardTitle>
                    <p className="text-base text-blue-200 leading-relaxed">
                      {model.desc}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Key Cost Components */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 to-blue-950 text-gray-100 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12 drop-shadow-lg"
            >
              Key Cost Components of Software Development
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
            >
              {[
                {
                  title: "Requirements & Planning",
                  desc: "15% of budget. Stakeholder interviews, risk identification, project roadmaps.",
                  icon: "Clipboard",
                },
                {
                  title: "Architecture & UI/UX Design",
                  desc: "10% of budget. Covers system architecture, mockups, wireframes, and user-focused design.",
                  icon: "Layers",
                },
                {
                  title: "Coding",
                  desc: "55% of budget. Involves coding, code reviews, biweekly demos, and progress tracking.",
                  icon: "Code",
                },
                {
                  title: "Quality Assurance",
                  desc: "15% of budget. Includes functionality, performance, security, and accessibility testing.",
                  icon: "CheckCircle2",
                },
                {
                  title: "Support & Maintenance",
                  desc: "~15% yearly. Ensures stability with monitoring, updates, and new features.",
                  icon: "Settings",
                },
              ].map((component, index) => {
                const IconComponent = IconMap[component.icon as keyof typeof IconMap];
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm border border-blue-700/30 rounded-xl shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-500 p-4 flex flex-col items-center text-center"
                  >
                    <div className="p-3 bg-blue-700/20 rounded-full shadow-inner border border-blue-400/50 mb-3">
                      {IconComponent && <IconComponent className="w-6 h-6 text-teal-400" />}
                    </div>
                    <h4 className="font-bold text-lg text-white mb-1">{component.title}</h4>
                    <p className="text-sm text-blue-200 leading-snug">{component.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 to-indigo-950 text-gray-100 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6 max-w-4xl mx-auto"
            >
              {[
                {
                  question: "How much does it cost to develop software?",
                  answer: "Costs vary based on complexity, features, and team location. Simple apps can start from Ksh 1,500,000, while complex enterprise solutions can exceed Ksh 75,000,000. We provide detailed, transparent estimations after a discovery phase.",
                },
                {
                  question: "What factors influence software development cost?",
                  answer: "Key factors include project scope and complexity, chosen technology stack, required integrations, team size and expertise, desired timeline, and ongoing maintenance and support needs. UI/UX complexity also plays a significant role.",
                },
                {
                  question: "Can I get a custom quote for my project?",
                  answer: "Absolutely! We highly recommend a free, no-obligation cost and timeline estimation. Simply fill out our contact form with your project details, and our business analysts and technical experts will provide a detailed proposal.",
                },
                {
                  question: "How long does it take to develop software?",
                  answer: "Development timelines depend heavily on project scope and complexity. A minimum viable product (MVP) for a simple app might take 3-6 months, while a comprehensive enterprise solution could take 12+ months. We provide clear timelines in our project estimations.",
                },
                {
                  question: "Do you offer post-launch support and maintenance?",
                  answer: "Yes, comprehensive post-launch support and maintenance are integral to our service. This typically includes monitoring, bug fixes, security updates, performance optimization, and feature enhancements, usually allocated as ~15% of the yearly development budget.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white/10 backdrop-blur-sm border border-blue-700/30 rounded-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 cursor-pointer"
                >
                  <Card className="bg-transparent border-0">
                    <CardHeader
                      className="flex flex-row items-center justify-between p-6"
                      onClick={() => toggleFaq(index)}
                    >
                      <CardTitle className="text-lg md:text-xl font-extrabold text-white">
                        {faq.question}
                      </CardTitle>
                      {openFaq === index ? (
                        <ChevronUp className="h-6 w-6 text-teal-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-6 w-6 text-teal-400 flex-shrink-0" />
                      )}
                    </CardHeader>
                    <motion.div
                      variants={faqVariants}
                      initial="hidden"
                      animate={openFaq === index ? "show" : "hidden"}
                      className="overflow-hidden"
                    >
                      <CardContent className="pt-0 pb-6 px-6">
                        <p className="text-base text-blue-200 leading-relaxed">
                          {faq.answer}
                        </p>
                      </CardContent>
                    </motion.div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link href="/contact">
                <Button
                  aria-label="Ask More Questions"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 rounded-lg text-lg font-semibold shadow-[0_0_15px_rgba(13,148,136,0.6)] transition-all duration-300 transform hover:scale-105"
                >
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
