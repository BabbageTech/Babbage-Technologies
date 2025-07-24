"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Service } from "@/types"; // Ensure Service type is correctly defined in types/index.ts
import { motion, Variants } from "framer-motion";
import {
  Banknote,
  BarChart2, Box, CheckCircle, Clipboard, Cloud, // For FastAPI
  CloudCog,
  Code, // For Node.js
  Component,
  Database, // For Django
  FastForward, // For React.js
  FileJson, // Logistics
  Film, // For .NET
  GitBranch,
  Globe, // Finance
  GraduationCap, // For Google Cloud


  // Icons for Industries section
  HeartPulse, // Media & Entertainment
  Home,
  // New icons for Technologies section for better variety
  Laptop, // Real Estate
  Megaphone,
  Server, Settings, // For Python
  Shield, // Education
  ShoppingCart,
  Smartphone, // For Java
  Terminal, // eCommerce
  Truck,
  Users2, // For Ruby on Rails
  Zap
} from "lucide-react";
import Link from "next/link";

// Define a mapping for Lucide icons to be used dynamically
// Moved outside the component to prevent re-creation on every render, improving efficiency.
const IconMap = {
  Server: Server,
  Database: Database,
  Globe: Globe,
  Smartphone: Smartphone,
  BarChart2: BarChart2,
  Users2: Users2,
  Clipboard: Clipboard,
  Code: Code,
  CheckCircle: CheckCircle,
  Settings: Settings,
  Box: Box,
  Cloud: Cloud,
  // New icons mapped
  Laptop: Laptop,
  Terminal: Terminal,
  GitBranch: GitBranch,
  Zap: Zap,
  Component: Component,
  FileJson: FileJson,
  Shield: Shield,
  FastForward: FastForward,
  CloudCog: CloudCog,
  HeartPulse: HeartPulse,
  Banknote: Banknote,
  GraduationCap: GraduationCap,
  ShoppingCart: ShoppingCart,
  Truck: Truck,
  Film: Film,
  Home: Home,
  Megaphone: Megaphone,
};

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

export default function ServicesPage() { // Renamed to ServicesPage to fit app router structure
  const services: Service[] = [
    {
      title: "Custom Software Development",
      description:
        "Tailored ERP, HMS, and scalable solutions to drive business growth, from ideation to deployment.",
      icon: "Server",
    },
    {
      title: "IoT Development",
      description:
        "Scalable IoT ecosystems with secure data management and informative dashboards for any scale.",
      icon: "Database",
    },
    {
      title: "Web Development",
      description:
        "High-performance, secure web applications built to meet user expectations and business goals.",
      icon: "Globe",
    },
    {
      title: "Mobile App Development",
      description:
        "Intuitive iOS, Android, and cross-platform apps designed for seamless user experiences.",
      icon: "Smartphone",
    },
    {
      title: "Data Analytics & AI",
      description:
        "Custom analytics, predictive modeling, and AI-powered solutions to turn complex data into actionable insights.",
      icon: "BarChart2",
    },
    {
      title: "Staff Augmentation",
      description:
        "Expert developers to complement your team, integrating seamlessly from day one for project success.",
      icon: "Users2",
    },
  ];

  const developmentProcess = [
    {
      title: "Discovery & Planning",
      desc: "We align on goals, define scope, and create a roadmap through intensive workshops and risk assessments.",
      icon: "Clipboard",
    },
    {
      title: "UI/UX Design",
      desc: "We craft intuitive prototypes, detailed wireframes, and cohesive branded UI kits for exceptional user experiences.",
      icon: "Layers",
    },
    {
      title: "Development & Integration",
      desc: "Iterative coding in two-week sprints, with daily stand-ups, robust code reviews, and seamless third-party integrations.",
      icon: "Code",
    },
    {
      title: "Quality Assurance",
      desc: "Rigorous QA, including manual, automated, and security testing, ensures flawless performance and reliability.",
      icon: "CheckCircle",
    },
    {
      title: "Deployment & Launch",
      desc: "Strategic deployment and smooth launch, ensuring your solution goes live efficiently and effectively.",
      icon: "Server", // Reusing Server, could be a Rocket or Upload
    },
    {
      title: "Support & Maintenance",
      desc: "Ongoing monitoring, proactive updates, and continuous feature rollouts to keep your solution future-proof and optimized.",
      icon: "Settings",
    },
  ];

  const industries = [
    {
      title: "Healthcare",
      desc: "HIPAA-compliant patient management, telemedicine, IoT, and data analytics solutions.",
      icon: "HeartPulse",
    },
    {
      title: "Finance",
      desc: "Secure wealth management, payment processing, and compliance tools.",
      icon: "Banknote",
    },
    {
      title: "Education",
      desc: "Engaging e-learning portals and student information systems.",
      icon: "GraduationCap",
    },
    {
      title: "eCommerce",
      desc: "Superior shopping experiences with 24/7 availability.",
      icon: "ShoppingCart",
    },
    {
      title: "Logistics",
      desc: "Real-time tracking, route optimization, and inventory management.",
      icon: "Truck",
    },
    {
      title: "Media & Entertainment",
      desc: "Streaming platforms and social media tools with minimal downtime.",
      icon: "Film",
    },
    {
      title: "Real Estate",
      desc: "Property management, virtual tours, and real-time listing platforms.",
      icon: "Home",
    },
    {
      title: "Marketing",
      desc: "Automation tools to optimize strategies and gather insights.",
      icon: "Megaphone",
    },
  ];

  const technologies = [
    {
      title: "Java",
      desc: "Reliable, secure enterprise applications with platform-independent libraries.",
      icon: "Laptop",
    },
    {
      title: ".NET",
      desc: "Versatile framework for scalable web, desktop, mobile, and cloud solutions.",
      icon: "Terminal",
    },
    {
      title: "Ruby on Rails",
      desc: "Rapid development of scalable, maintainable web applications.",
      icon: "GitBranch",
    },
    {
      title: "Node.js",
      desc: "High-performance, real-time applications with event-driven architecture.",
      icon: "Zap",
    },
    {
      title: "React.js",
      desc: "Dynamic, responsive user interfaces for single-page and complex applications.",
      icon: "Component",
    },
    {
      title: "Python",
      desc: "Versatile language for rapid development, data analytics, and scalable APIs.",
      icon: "FileJson",
    },
    {
      title: "Django",
      desc: "High-level Python framework for secure, rapid web application development.",
      icon: "Shield",
    },
    {
      title: "FastAPI",
      desc: "Modern Python framework for building fast, high-performance APIs.",
      icon: "FastForward",
    },
    {
      title: "Google Cloud",
      desc: "Scalable cloud infrastructure for secure, efficient digital solutions.",
      icon: "CloudCog",
    },
  ];


  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Assuming Header and Footer are imported and used in layout.tsx or directly here */}
      {/* <Header /> */}
      <main className="flex-grow">
        {/* Our Services Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 to-indigo-950 text-white relative overflow-hidden">
          {/* Background elements (CSS animations are performant) */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              viewport={{ once: true }} // Ensures animation runs only once when in view
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
                Our Comprehensive Services
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
                We deliver scalable software and cloud solutions tailored to your business,
                ensuring reliability, innovation, and sustainable growth.
              </p>
            </motion.div>

            {/* Service Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }} // Optimizes animations for elements entering viewport
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            >
              {services.map((service: Service, index: number) => {
                const IconComponent = IconMap[service.icon as keyof typeof IconMap];
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white/10 backdrop-blur-sm border border-blue-700/30 rounded-xl shadow-2xl hover:shadow-teal-500/50 transition-all duration-500 flex flex-col"
                  >
                    <Card className="bg-transparent border-0 flex flex-col flex-1">
                      <CardHeader className="flex items-center gap-4 px-6 py-6">
                        <div className="p-4 bg-blue-700/20 rounded-full shadow-inner border border-blue-400/50">
                          {IconComponent && <IconComponent className="w-8 h-8 text-teal-400" />}
                        </div>
                        <CardTitle className="text-xl md:text-2xl font-extrabold text-white">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4 px-6 pb-6 flex flex-col flex-1">
                        <p className="text-base text-blue-200 leading-relaxed mb-4 flex-1">
                          {service.description}
                        </p>
                        <Link href="/contact" className="mt-auto">
                          <Button
                            aria-label={`Learn more about ${service.title}`}
                            className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-md font-semibold shadow-[0_0_15px_rgba(13,148,136,0.6)] transition-all duration-300 transform hover:scale-[1.02]"
                          >
                            Learn More
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100, delay: 0.3 }}
              viewport={{ once: true }} // Ensures animation runs only once when in view
              className="text-center"
            >
              <Link href="/contact">
                <Button
                  aria-label="Get in Touch"
                  className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg mr-4 font-semibold shadow-[0_0_10px_rgba(29,78,216,0.5)] transition-all duration-300 transform hover:scale-105"
                >
                  Get in Touch
                </Button>
              </Link>
              <Link href="/consultation">
                <Button
                  aria-label="Book Free Consultation"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold shadow-[0_0_10px_rgba(13,148,136,0.5)] transition-all duration-300 transform hover:scale-105"
                >
                  Book Free Consultation
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 to-blue-950 text-gray-100 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              viewport={{ once: true }} // Ensures animation runs only once when in view
              className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12 drop-shadow-lg"
            >
              Our Streamlined Development Process
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }} // Optimizes animations for elements entering viewport
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {developmentProcess.map((stage, index) => {
                const IconComponent = IconMap[stage.icon as keyof typeof IconMap];
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white/10 backdrop-blur-sm border border-blue-700/30 rounded-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 flex flex-col"
                  >
                    <Card className="bg-transparent border-0 flex flex-col flex-1">
                      <CardHeader className="flex items-center gap-4 px-6 py-6">
                        <div className="p-4 bg-blue-700/20 rounded-full shadow-inner border border-blue-400/50">
                          {IconComponent && <IconComponent className="w-8 h-8 text-teal-400" />}
                        </div>
                        <CardTitle className="text-xl md:text-2xl font-extrabold text-white">
                          {stage.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4 px-6 pb-6 flex flex-col flex-1">
                        <p className="text-base text-blue-200 leading-relaxed flex-1">
                          {stage.desc}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 to-indigo-950 text-white relative overflow-hidden">
          {/* Background elements (CSS animations are performant) */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-1000"></div>
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-3000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              viewport={{ once: true }} // Ensures animation runs only once when in view
              className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12 drop-shadow-lg"
            >
              Industries We Empower
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }} // Optimizes animations for elements entering viewport
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {industries.map((industry, index) => {
                const IconComponent = IconMap[industry.icon as keyof typeof IconMap];
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white/10 backdrop-blur-sm border border-blue-700/30 rounded-xl shadow-2xl hover:shadow-teal-500/50 transition-all duration-500 flex flex-col"
                  >
                    <Card className="bg-transparent border-0 flex flex-col flex-1">
                      <CardHeader className="flex items-center gap-4 px-6 py-6">
                        <div className="p-4 bg-blue-700/20 rounded-full shadow-inner border border-blue-400/50">
                          {IconComponent && <IconComponent className="w-8 h-8 text-teal-400" />}
                        </div>
                        <CardTitle className="text-xl md:text-2xl font-extrabold text-white">
                          {industry.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4 px-6 pb-6 flex flex-col flex-1">
                        <p className="text-base text-blue-200 leading-relaxed flex-1">
                          {industry.desc}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Technologies We Master */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 to-blue-950 text-gray-100 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              viewport={{ once: true }} // Ensures animation runs only once when in view
              className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12 drop-shadow-lg"
            >
              Technologies We Master
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }} // Optimizes animations for elements entering viewport
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" /* Adjusted grid for more balanced look */
            >
              {technologies.map((tech, index) => {
                const IconComponent = IconMap[tech.icon as keyof typeof IconMap];
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white/10 backdrop-blur-sm border border-blue-700/30 rounded-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 flex flex-col"
                  >
                    <Card className="bg-transparent border-0 flex flex-col flex-1">
                      <CardHeader className="flex items-center gap-4 px-6 py-6">
                        <div className="p-4 bg-blue-700/20 rounded-full shadow-inner border border-blue-400/50">
                          {IconComponent && <IconComponent className="w-8 h-8 text-teal-400" />}
                        </div>
                        <CardTitle className="text-xl md:text-2xl font-extrabold text-white">
                          {tech.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4 px-6 pb-6 flex flex-col flex-1">
                        <p className="text-base text-blue-200 leading-relaxed flex-1">
                          {tech.desc}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Quality Control Practices (Renamed and Richer) */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 to-indigo-950 text-white relative overflow-hidden">
          {/* Background elements (CSS animations are performant) */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-1000"></div>
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-3000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              viewport={{ once: true }} // Ensures animation runs only once when in view
              className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12 drop-shadow-lg"
            >
              Our Rigorous Quality Control Practices
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }} // Optimizes animations for elements entering viewport
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "Accurate Cost Estimation",
                  desc: "Thorough analysis ensures precise budget and timeline commitments, preventing surprises.",
                  icon: "Clipboard",
                },
                {
                  title: "Competence-Based Team",
                  desc: "We assign specialists with skills tailored to your project needs, ensuring optimal expertise.",
                  icon: "Users2",
                },
                {
                  title: "Comprehensive Risk Management",
                  desc: "Proactive risk identification and mitigation for smooth delivery and project stability.",
                  icon: "CheckCircle",
                },
                {
                  title: "Agile Delivery",
                  desc: "Iterative sprints for rapid, flexible, and high-quality releases, adapting to evolving needs.",
                  icon: "Zap", // Changed to Zap for Agile
                },
                {
                  title: "Budget Control",
                  desc: "Continuous monitoring and transparent reporting to prevent unexpected cost overruns.",
                  icon: "DollarSign", // Changed to DollarSign for Budget
                },
                {
                  title: "Responsible Deadlines",
                  desc: "Structured processes and proactive management to meet deadlines without compromising quality.",
                  icon: "CalendarCheck", // Changed to CalendarCheck for Deadlines
                },
                {
                  title: "Regular Reporting & Demos",
                  desc: "Weekly calls, biweekly demos, and detailed progress updates keep you fully informed.",
                  icon: "FileText", // Changed to FileText for Reporting
                },
                {
                  title: "Knowledge Management",
                  desc: "Seamless knowledge sharing and documentation for project continuity and long-term success.",
                  icon: "Lightbulb", // Changed to Lightbulb for Knowledge Management
                },
              ].map((practice, index) => {
                const IconComponent = IconMap[practice.icon as keyof typeof IconMap];
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white/10 backdrop-blur-sm border border-blue-700/30 rounded-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 flex flex-col"
                  >
                    <Card className="bg-transparent border-0 flex flex-col flex-1">
                      <CardHeader className="flex items-center gap-4 px-6 py-6">
                        <div className="p-4 bg-blue-700/20 rounded-full shadow-inner border border-blue-400/50">
                          {IconComponent && <IconComponent className="w-8 h-8 text-teal-400" />}
                        </div>
                        <CardTitle className="text-xl md:text-2xl font-extrabold text-white">
                          {practice.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4 px-6 pb-6 flex flex-col flex-1">
                        <p className="text-base text-blue-200 leading-relaxed flex-1">
                          {practice.desc}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 to-blue-950 text-gray-100 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              viewport={{ once: true }} // Ensures animation runs only once when in view
              className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12 drop-shadow-lg"
            >
              What Our Clients Say
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }} // Optimizes animations for elements entering viewport
              className="grid md:grid-cols-2 gap-8"
            >
              {[
                {
                  quote: "“Babbage Technologies provided a competitive edge with their well-thought solutions and unwavering commitment to quality. They truly understand business value.”",
                  author: "Alexander McCaig",
                  role: "Co-Founder & CEO, Tartle",
                },
                {
                  quote: "“Their thorough investigation and transparent approach ensured our project was a resounding success. Babbage Technologies is highly recommended for their professionalism and guidance!”",
                  author: "Damian Gevertz",
                  role: "Founder & CEO, Widgety",
                },
                {
                  quote: "“Babbage Technologies is exceptional in every regard: cost-effectiveness, professionalism, transparency, and their willingness to advise. They were invaluable when our idea was still nascent.”",
                  author: "David Logan",
                  role: "Founder, Umergence",
                },
                {
                  quote: "“If you seek high standards, Babbage Technologies is the firm. Their professional workflows ensure exceptional quality. Crucially, they help refine your business logic, not just blindly follow instructions.”",
                  author: "Domien Van Eynde",
                  role: "Team Lead, Daiokan.com",
                },
                {
                  quote: "“Working with Babbage Technologies on our core product was a pleasure. They brought engineering expertise, enthusiasm, and a team focused on creating quality features rapidly. Truly outstanding!”",
                  author: "Paul S. Chun",
                  role: "CTO, Rivalfox GmbH",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white/10 backdrop-blur-sm border border-blue-700/30 rounded-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 flex flex-col"
                >
                  <Card className="bg-transparent border-0 flex flex-col flex-1">
                    <CardContent className="pt-6 px-6 pb-6 flex flex-col flex-1">
                      <p
                        className="text-blue-200 italic mb-4 flex-1"
                        dangerouslySetInnerHTML={{ __html: testimonial.quote }}
                      />
                      <div className="mt-auto"> {/* Pushes author info to the bottom */}
                        <p className="text-white font-semibold">{testimonial.author}</p>
                        <p className="text-teal-400 text-sm">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
