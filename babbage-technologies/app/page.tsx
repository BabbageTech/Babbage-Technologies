"use client";

import { motion, Variants } from 'framer-motion';
import { CheckCircle, Code, Lightbulb, TrendingUp, Users2 } from 'lucide-react'; // Import relevant icons
import Link from 'next/link';

import { Button } from "@/components/ui/button"; // Assuming Button component exists

// Framer Motion Variants for staggered animations
// Moved outside the component to prevent re-creation on every render, improving efficiency.
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

// Data definitions moved outside the component to prevent re-creation on every render,
// which is a good optimization for performance.
const servicesOverview = [
  {
    title: "Custom Software Development",
    desc: "Tailored applications for web, mobile, and desktop to fit your unique business needs.",
    icon: Code,
  },
  {
    title: "Cloud Solutions & DevOps",
    desc: "Scalable cloud infrastructure, seamless deployments, and robust operational support.",
    icon: Lightbulb,
  },
  {
    title: "UI/UX Design & Consulting",
    desc: "Crafting intuitive and engaging user experiences that drive adoption and satisfaction.",
    icon: Users2,
  },
  {
    title: "Data Analytics & AI",
    desc: "Transforming raw data into actionable insights and intelligent automation.",
    icon: TrendingUp,
  },
];

const features = [
  {
    title: "Client-Centric Approach",
    desc: "Your vision is our blueprint. We align our expertise with your business goals for optimal outcomes.",
    icon: CheckCircle,
  },
  {
    title: "Agile & Transparent Processes",
    desc: "Iterative development with continuous feedback ensures flexibility and clarity at every stage.",
    icon: CheckCircle,
  },
  {
    title: "Experienced Team",
    desc: "Leverage the expertise of our seasoned developers, designers, and project managers.",
    icon: CheckCircle,
  },
  {
    title: "Scalable & Secure Solutions",
    desc: "Building robust systems designed for future growth and fortified with top-tier security.",
    icon: CheckCircle,
  },
];

const testimonials = [
  {
    quote: "“Babbage Technologies transformed our operations with their innovative software. Truly exceptional service!”",
    author: "Jane Doe",
    role: "CEO, InnovateCorp",
  },
  {
    quote: "“Their cloud expertise is unparalleled. Our infrastructure is more robust and efficient than ever before.”",
    author: "John Smith",
    role: "CTO, CloudPro Solutions",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-center bg-gradient-to-br from-blue-900 to-indigo-950 text-white overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 w-56 h-56 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg"
            >
              Innovate. Build. <span className="text-teal-400">Transform.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100, delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-200 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Your trusted partner for cutting-edge software development, cloud solutions, and digital transformation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link href="/contact">
                <Button
                  aria-label="Start a Project"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold shadow-[0_0_15px_rgba(13,148,136,0.6)] transition-all duration-300 transform hover:scale-105 text-lg"
                >
                  Start a Project
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  aria-label="Explore Services"
                  className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold shadow-[0_0_10px_rgba(29,78,216,0.5)] transition-all duration-300 transform hover:scale-105 text-lg"
                >
                  Explore Services
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-20 md:py-28 bg-gray-100 text-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 drop-shadow-sm"
            >
              Our Core Expertise
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto mb-12"
            >
              We offer a comprehensive suite of services designed to accelerate your digital journey and deliver tangible business value.
            </motion.p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {servicesOverview.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
                  >
                    <div className="p-4 bg-blue-100 rounded-full mb-4 shadow-inner">
                      <Icon className="w-8 h-8 text-blue-700" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100, delay: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mt-12"
            >
              <Link href="/services">
                <Button
                  aria-label="View All Services"
                  className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-lg"
                >
                  View All Services
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us / Features Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 to-indigo-950 text-white relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-1000"></div>
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-3000"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12 drop-shadow-lg"
            >
              Why Partner with BabbageTechnologies?
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white/10 backdrop-blur-sm border border-blue-700/30 rounded-xl shadow-2xl hover:shadow-teal-500/50 transition-all duration-500 p-6 flex flex-col items-center text-center"
                  >
                    <div className="p-4 bg-blue-700/20 rounded-full shadow-inner border border-blue-400/50 mb-4">
                      <Icon className="w-8 h-8 text-teal-400" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">{feature.title}</h3>
                    <p className="text-base text-blue-200 leading-relaxed">{feature.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Client Testimonials Section */}
        <section className="py-20 md:py-28 bg-gray-100 text-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 drop-shadow-sm"
            >
              What Our Clients Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto mb-12"
            >
              Hear directly from businesses that have achieved success with our partnership.
            </motion.p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
                >
                  <p className="text-gray-700 italic mb-4 flex-1 text-base leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="mt-auto">
                    <p className="text-blue-800 font-semibold">{testimonial.author}</p>
                    <p className="text-teal-600 text-sm">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 to-indigo-950 text-white relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-1000"></div>
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-3000"></div>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-xl text-blue-200 mb-10 leading-relaxed"
            >
              Lets discuss your project and discover how BabbageTechnologies can help you achieve your goals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Link href="/contact">
                <Button
                  aria-label="Contact Us Today"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 rounded-lg font-semibold shadow-[0_0_20px_rgba(13,148,136,0.7)] transition-all duration-300 transform hover:scale-105 text-xl"
                >
                  Contact Us Today
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
