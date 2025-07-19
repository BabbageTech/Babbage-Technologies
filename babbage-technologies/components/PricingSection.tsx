"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PricingPlan } from "@/types";
import { motion, Variants } from "framer-motion";
import { CheckCircle2, ChevronDown, ChevronUp, Clipboard, Clock, Code, Layers, Server, Settings, Users2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 100,
    },
  },
};

const faqVariants: Variants = {
  hidden: { height: 0, opacity: 0 },
  show: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
};

export default function PricingSection() {
  const plans: PricingPlan[] = [
    {
      title: "Individual",
      price: "Ksh 1,500,000",
      features: [
        "1 Web or Mobile App",
        "Basic Cloud Hosting",
        "Email Support",
        "1 User License",
      ],
    },
    {
      title: "Small Business",
      price: "Ksh 5,500,000",
      features: [
        "Up to 3 Apps",
        "Standard Cloud Hosting",
        "Priority Support",
        "5 User Licenses",
      ],
      isPopular: true,
    },
    {
      title: "Institution",
      price: "Ksh 12,000,000",
      features: [
        "Custom ERP/HMS",
        "Premium Cloud Hosting",
        "24/7 Support",
        "10 User Licenses",
      ],
    },
    {
      title: "Enterprise",
      price: "Contact Us",
      features: [
        "Unlimited Apps",
        "Dedicated Cloud Servers",
        "Dedicated Account Manager",
        "Unlimited Licenses",
      ],
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div>
      {/* Free Cost Estimation */}
      <section className="py-16 bg-white text-gray-800 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-4">
              Free Cost & Timeline Estimation
            </h2>
            <p className="text-lg text-gray-800 max-w-3xl mx-auto mb-8">
              Fill out our form with your project details, and our business analysts, developers, and designers will provide a detailed cost and timeline estimation for your project.
            </p>
            <Link href="/contact">
              <Button
                aria-label="Get Free Quote"
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg shadow-[0_0_10px_rgba(13,148,136,0.5)] transition-all duration-300"
              >
                Get Free Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-white text-gray-800 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-4">
              Pricing Plans for BabbageTechnologies
            </h2>
            <p className="text-lg text-gray-800 max-w-3xl mx-auto">
              Get scalable software solutions tailored to your needs — no monthly subscriptions, just one-time development charges.
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
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                className={`bg-white/10 backdrop-blur-lg border ${plan.isPopular ? "border-teal-500 shadow-[0_0_15px_rgba(13,148,136,0.5)]" : "border-blue-200"} rounded-lg shadow-[inset_0_0_10px_rgba(255,255,255,0.2)] hover:shadow-xl transition-all duration-300 relative`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}
                <Card className="bg-transparent border-0">
                  <CardHeader className="bg-teal-100/20 rounded-t-lg px-6 py-4">
                    <CardTitle className="text-lg md:text-xl font-extrabold text-blue-800">
                      {plan.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1 p-6">
                    <p className="text-2xl font-bold text-blue-800 mb-4">{plan.price}</p>
                    <ul className="space-y-3 flex-1 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-base text-gray-800">
                          <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button
                        aria-label={`Choose ${plan.title}`}
                        className={`w-full ${plan.isPopular ? "bg-teal-500 hover:bg-teal-600" : "bg-blue-800 hover:bg-blue-900"} text-white rounded-lg shadow-[0_0_10px_rgba(13,148,136,0.5)] transition-all duration-300`}
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
      <section className="py-16 bg-blue-800 text-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-center text-white mb-12"
          >
            Pricing Models We Offer
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: "Time & Material",
                desc: "Monthly billing based on actual development hours, with flexible scope and fixed hourly rates.",
                icon: <Clock className="w-8 h-8 text-teal-500" />,
              },
              {
                title: "Fixed Budget",
                desc: "Defined budget with prioritized features delivered within cost constraints.",
                icon: <CheckCircle2 className="w-8 h-8 text-teal-500" />,
              },
              {
                title: "Fixed Price",
                desc: "Set price for a predefined scope, ideal for projects with clear requirements.",
                icon: <Server className="w-8 h-8 text-teal-500" />,
              },
              {
                title: "Dedicated Team",
                desc: "Exclusive team of experts tailored to your project’s needs for seamless integration.",
                icon: <Users2 className="w-8 h-8 text-teal-500" />,
              },
            ].map((model, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-b from-gray-900 to-gray-800 border border-teal-500 rounded-lg shadow-lg hover:shadow-[0_0_15px_rgba(13,148,136,0.5)] transition-all duration-300"
              >
                <Card className="bg-transparent border-0">
                  <CardHeader className="flex items-center gap-4">
                    <div className="p-3 bg-teal-500/20 rounded-full shadow-inner border border-teal-200">
                      {model.icon}
                    </div>
                    <CardTitle className="text-lg md:text-xl font-extrabold text-white hover:border-b-2 hover:border-teal-500 transition-all duration-200">
                      {model.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-base text-gray-200 leading-relaxed">
                      {model.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Cost Components */}
      <section className="py-16 bg-blue-800 text-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-center text-white mb-12"
          >
            Key Cost Components of Software Development
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Requirements & Planning",
                desc: "15% of budget. Includes stakeholder interviews, risk identification, and project roadmaps.",
                icon: <Clipboard className="w-8 h-8 text-teal-500" />,
              },
              {
                title: "Architecture & UI/UX Design",
                desc: "10% of budget. Covers system architecture, mockups, wireframes, and user-focused design.",
                icon: <Layers className="w-8 h-8 text-teal-500" />,
              },
              {
                title: "Coding",
                desc: "55% of budget. Involves coding, code reviews, biweekly demos, and progress tracking.",
                icon: <Code className="w-8 h-8 text-teal-500" />,
              },
              {
                title: "Quality Assurance",
                desc: "15% of budget. Includes functionality, performance, security, and accessibility testing.",
                icon: <CheckCircle2 className="w-8 h-8 text-teal-500" />,
              },
              {
                title: "Support & Maintenance",
                desc: "~15% yearly. Ensures stability with monitoring, updates, and new features.",
                icon: <Settings className="w-8 h-8 text-teal-500" />,
              },
            ].map((component, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-b from-gray-900 to-gray-800 border border-teal-500 rounded-lg shadow-lg hover:shadow-[0_0_15px_rgba(13,148,136,0.5)] transition-all duration-300"
              >
                <Card className="bg-transparent border-0">
                  <CardHeader className="flex items-center gap-4">
                    <div className="p-3 bg-teal-500/20 rounded-full shadow-inner border border-teal-200">
                      {component.icon}
                    </div>
                    <CardTitle className="text-lg md:text-xl font-extrabold text-white hover:border-b-2 hover:border-teal-500 transition-all duration-200">
                      {component.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-base text-gray-200 leading-relaxed">
                      {component.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white text-gray-800 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-center text-blue-800 mb-12"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              {
                question: "How much does it cost to develop software?",
                answer: "Costs vary based on complexity, features, and team location, ranging from Ksh 1,500,000 for simple apps to Ksh 75,000,000+ for enterprise solutions.",
              },
              {
                question: "What factors influence software development cost?",
                answer: "Key factors include project scope, technology stack, team expertise, timeline, and ongoing maintenance needs.",
              },
              {
                question: "Can I get a custom quote for my project?",
                answer: "Yes, we offer free cost and timeline estimations. Fill out our contact form with your project details, and our team will provide a detailed quote.",
              },
              {
                question: "How long does it take to develop software?",
                answer: "Timelines depend on project complexity, ranging from 3-6 months for simple apps to 12+ months for enterprise solutions.",
              },
              {
                question: "Do you offer post-launch support?",
                answer: "Yes, our plans include support and maintenance, with ~15% of the budget allocated yearly for updates, monitoring, and new features.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white/10 backdrop-blur-lg border border-blue-200 rounded-lg shadow-[inset_0_0_10px_rgba(255,255,255,0.2)] hover:shadow-xl transition-all duration-300"
              >
                <Card className="bg-transparent border-0">
                  <CardHeader
                    className="flex flex-row items-center justify-between cursor-pointer"
                    onClick={() => toggleFaq(index)}
                  >
                    <CardTitle className="text-lg md:text-xl font-extrabold text-blue-800">
                      {faq.question}
                    </CardTitle>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-teal-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-teal-500" />
                    )}
                  </CardHeader>
                  <motion.div
                    variants={faqVariants}
                    initial="hidden"
                    animate={openFaq === index ? "show" : "hidden"}
                    className="overflow-hidden"
                  >
                    <CardContent className="pt-0 pb-4">
                      <p className="text-base text-gray-800 leading-relaxed">
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
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/contact">
              <Button
                aria-label="Ask More Questions"
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg shadow-[0_0_10px_rgba(13,148,136,0.5)] transition-all duration-300"
              >
                Ask More Questions
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}