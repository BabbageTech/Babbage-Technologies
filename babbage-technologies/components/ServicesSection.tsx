"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Service } from "@/types";
import { motion, Variants } from "framer-motion";
import {
  Banknote,
  BarChart2,
  Box,
  CalendarCheck,
  CheckCircle,
  Clipboard,
  Cloud,
  CloudCog,
  Code,
  Component,
  Database,
  DollarSign,
  FastForward,
  FileJson,
  FileText,
  Film,
  GitBranch,
  Globe,
  GraduationCap,
  HeartPulse,
  Home,
  Laptop,
  Layers,
  Megaphone,
  Server,
  Settings,
  Shield,
  ShoppingCart,
  Smartphone,
  Terminal,
  Truck,
  Users2,
  Zap,
} from "lucide-react";
import Link from "next/link";

// Icon mapping
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
  Layers: Layers,
  DollarSign: DollarSign,
  CalendarCheck: CalendarCheck,
  FileText: FileText,
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

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function ServicesPage() {
  const services: Service[] = [
    {
      title: "Custom Software Development",
      description: "Tailored ERP, HMS, and scalable solutions to drive business growth, from ideation to deployment.",
      icon: "Server",
    },
    {
      title: "IoT Development",
      description: "Scalable IoT ecosystems with secure data management and informative dashboards for any scale.",
      icon: "Database",
    },
    {
      title: "Web Development",
      description: "High-performance, secure web applications built to meet user expectations and business goals.",
      icon: "Globe",
    },
    {
      title: "Mobile App Development",
      description: "Intuitive iOS, Android, and cross-platform apps designed for seamless user experiences.",
      icon: "Smartphone",
    },
    {
      title: "Data Analytics & AI",
      description: "Custom analytics, predictive modeling, and AI-powered solutions to turn complex data into actionable insights.",
      icon: "BarChart2",
    },
    {
      title: "Staff Augmentation",
      description: "Expert developers to complement your team, integrating seamlessly from day one for project success.",
      icon: "Users2",
    },
  ];

  const developmentProcess = [
    { title: "Discovery & Planning", desc: "We align on goals, define scope, and create a roadmap through intensive workshops and risk assessments.", icon: "Clipboard" },
    { title: "UI/UX Design", desc: "We craft intuitive prototypes, detailed wireframes, and cohesive branded UI kits for exceptional user experiences.", icon: "Layers" },
    { title: "Development & Integration", desc: "Iterative coding in two-week sprints, with daily stand-ups, robust code reviews, and seamless third-party integrations.", icon: "Code" },
    { title: "Quality Assurance", desc: "Rigorous QA, including manual, automated, and security testing, ensures flawless performance and reliability.", icon: "CheckCircle" },
    { title: "Deployment & Launch", desc: "Strategic deployment and smooth launch, ensuring your solution goes live efficiently and effectively.", icon: "Server" },
    { title: "Support & Maintenance", desc: "Ongoing monitoring, proactive updates, and continuous feature rollouts to keep your solution future-proof and optimized.", icon: "Settings" },
  ];

  const industries = [
    { title: "Healthcare", desc: "HIPAA-compliant patient management, telemedicine, IoT, and data analytics solutions.", icon: "HeartPulse" },
    { title: "Finance", desc: "Secure wealth management, payment processing, and compliance tools.", icon: "Banknote" },
    { title: "Education", desc: "Engaging e-learning portals and student information systems.", icon: "GraduationCap" },
    { title: "eCommerce", desc: "Superior shopping experiences with 24/7 availability.", icon: "ShoppingCart" },
    { title: "Logistics", desc: "Real-time tracking, route optimization, and inventory management.", icon: "Truck" },
    { title: "Media & Entertainment", desc: "Streaming platforms and social media tools with minimal downtime.", icon: "Film" },
    { title: "Real Estate", desc: "Property management, virtual tours, and real-time listing platforms.", icon: "Home" },
    { title: "Marketing", desc: "Automation tools to optimize strategies and gather insights.", icon: "Megaphone" },
  ];

  const technologies = [
    { title: "Java", desc: "Reliable, secure enterprise applications with platform-independent libraries.", icon: "Laptop" },
    { title: ".NET", desc: "Versatile framework for scalable web, desktop, mobile, and cloud solutions.", icon: "Terminal" },
    { title: "Ruby on Rails", desc: "Rapid development of scalable, maintainable web applications.", icon: "GitBranch" },
    { title: "Node.js", desc: "High-performance, real-time applications with event-driven architecture.", icon: "Zap" },
    { title: "React.js", desc: "Dynamic, responsive user interfaces for single-page and complex applications.", icon: "Component" },
    { title: "Python", desc: "Versatile language for rapid development, data analytics, and scalable APIs.", icon: "FileJson" },
    { title: "Django", desc: "High-level Python framework for secure, rapid web application development.", icon: "Shield" },
    { title: "FastAPI", desc: "Modern Python framework for building fast, high-performance APIs.", icon: "FastForward" },
    { title: "Google Cloud", desc: "Scalable cloud infrastructure for secure, efficient digital solutions.", icon: "CloudCog" },
  ];

  const qualityControlPractices = [
    { title: "Accurate Cost Estimation", desc: "Thorough analysis ensures precise budget and timeline commitments, preventing surprises.", icon: "Clipboard" },
    { title: "Competence-Based Team", desc: "We assign specialists with skills tailored to your project needs, ensuring optimal expertise.", icon: "Users2" },
    { title: "Comprehensive Risk Management", desc: "Proactive risk identification and mitigation for smooth delivery and project stability.", icon: "CheckCircle" },
    { title: "Agile Delivery", desc: "Iterative sprints for rapid, flexible, and high-quality releases, adapting to evolving needs.", icon: "Zap" },
    { title: "Budget Control", desc: "Continuous monitoring and transparent reporting to prevent unexpected cost overruns.", icon: "Banknote" },
    { title: "Responsible Deadlines", desc: "Structured processes and proactive management to meet deadlines without compromising quality.", icon: "CalendarCheck" },
    { title: "Regular Reporting & Demos", desc: "Weekly calls, biweekly demos, and detailed progress updates keep you fully informed.", icon: "FileText" },
    { title: "Knowledge Management", desc: "Seamless knowledge sharing and documentation for project continuity and long-term success.", icon: "Clipboard" },
  ];

  const testimonials = [
    {
      quote: "Barbage Technologies provided a competitive edge with their well-thought solutions and unwavering commitment to quality. They truly understand business value.",
      author: "Alexander McCaig",
      role: "Co-Founder & CEO, Tartle",
    },
    {
      quote: "Their thorough investigation and transparent approach ensured our project was a resounding success. Highly recommended for their professionalism and guidance!",
      author: "Damian Gevertz",
      role: "Founder & CEO, Widgety",
    },
    {
      quote: "Barbage Technologies is exceptional in every regard: cost-effectiveness, professionalism, transparency, and their willingness to advise. Invaluable when our idea was still nascent.",
      author: "David Logan",
      role: "Founder, Umergence",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        {/* ========== HERO SECTION ========== */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-primary py-24 md:py-32">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-secondary rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              animate="show"
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <span className="text-sm text-white/90">What We Do</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Comprehensive Digital Solutions
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                We deliver scalable software and cloud solutions tailored to your business,
                ensuring reliability, innovation, and sustainable growth.
              </p>
            </motion.div>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F1FAEE"/>
            </svg>
          </div>
        </section>

        {/* ========== SERVICES SECTION ========== */}
        <section className="py-24 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-semibold text-primary">Our Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                What We Offer
              </h2>
              <p className="text-lg text-text-secondary">
                End-to-end solutions designed to solve complex business challenges.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service, index) => {
                const IconComponent = IconMap[service.icon as keyof typeof IconMap];
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="bg-surface rounded-card border border-border hover:shadow-card-hover transition-all duration-300 group"
                  >
                    <Card className="border-0 bg-transparent">
                      <CardHeader className="pb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                          {IconComponent && <IconComponent className="w-6 h-6 text-primary" />}
                        </div>
                        <CardTitle className="text-xl font-bold text-text-primary">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-text-secondary leading-relaxed">
                          {service.description}
                        </p>
                        <Link href="/contact" className="mt-4 inline-block">
                          <Button variant="ghost" className="px-0 text-accent hover:text-accent-hover">
                            Learn More →
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mt-12 flex flex-wrap justify-center gap-4"
            >
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary-hover text-white">
                  Get in Touch
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Book Free Consultation
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ========== DEVELOPMENT PROCESS SECTION ========== */}
        <section className="py-24 md:py-32 bg-surface-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                Our Development Process
              </h2>
              <p className="text-lg text-text-secondary">
                A streamlined approach to deliver quality software, on time and on budget.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {developmentProcess.map((stage, index) => {
                const IconComponent = IconMap[stage.icon as keyof typeof IconMap];
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -3 }}
                    className="bg-surface rounded-card p-6 border border-border text-center"
                  >
                    <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      {IconComponent && <IconComponent className="w-7 h-7 text-secondary" />}
                    </div>
                    <h3 className="text-lg font-bold text-text-primary mb-2">{stage.title}</h3>
                    <p className="text-text-secondary text-sm">{stage.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ========== INDUSTRIES SECTION ========== */}
        <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-semibold text-accent">Industries</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Industries We Empower
              </h2>
              <p className="text-lg text-white/80">
                Specialized solutions for diverse sectors, built on deep domain expertise.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {industries.map((industry, index) => {
                const IconComponent = IconMap[industry.icon as keyof typeof IconMap];
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/10 backdrop-blur-sm rounded-card p-6 text-center border border-white/20 hover:border-accent/50 transition-all"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      {IconComponent && <IconComponent className="w-6 h-6 text-accent" />}
                    </div>
                    <h3 className="font-bold text-white mb-1">{industry.title}</h3>
                    <p className="text-white/60 text-xs">{industry.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ========== TECHNOLOGIES SECTION ========== */}
        <section className="py-24 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                Technologies We Master
              </h2>
              <p className="text-lg text-text-secondary">
                Modern, scalable tech stacks for enterprise-grade applications.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {technologies.map((tech, index) => {
                const IconComponent = IconMap[tech.icon as keyof typeof IconMap];
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-3 p-3 bg-surface-alt rounded-button border border-border"
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      {IconComponent && <IconComponent className="w-4 h-4 text-primary" />}
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary text-sm">{tech.title}</h4>
                      <p className="text-text-tertiary text-xs">{tech.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ========== QUALITY CONTROL SECTION ========== */}
        <section className="py-24 md:py-32 bg-surface-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-semibold text-accent">Quality First</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                Our Quality Guarantees
              </h2>
              <p className="text-lg text-text-secondary">
                Rigorous practices ensuring excellence at every stage of development.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {qualityControlPractices.map((practice, index) => {
                const IconComponent = IconMap[practice.icon as keyof typeof IconMap];
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -3 }}
                    className="bg-surface rounded-card p-5 border border-border text-center"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      {IconComponent && <IconComponent className="w-5 h-5 text-accent" />}
                    </div>
                    <h3 className="font-semibold text-text-primary text-sm mb-1">{practice.title}</h3>
                    <p className="text-text-tertiary text-xs">{practice.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ========== TESTIMONIALS SECTION ========== */}
        <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-semibold text-accent">Testimonials</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-white/80">
                Hear from businesses that have transformed with our solutions.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-card p-8 border border-white/20"
                >
                  <div className="text-accent text-4xl mb-4">&quot;</div>
                  <p className="text-white/80 leading-relaxed mb-6">{testimonial.quote}</p>
                  <div className="border-t border-white/20 pt-4">
                    <p className="font-bold text-white">{testimonial.author}</p>
                    <p className="text-accent text-sm">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ========== CTA SECTION ========== */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-text-secondary mb-6">
                Let&apos;s discuss your requirements and see how we can help.
              </p>
              <Link href="/contact">
                <Button className="bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-button text-lg font-semibold">
                  Get a Free Consultation
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}