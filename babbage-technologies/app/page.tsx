"use client";

import { motion, Variants } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Code, 
  Star, 
  TrendingUp, 
  Users2,
  Zap,
  Shield,
  Rocket,
  LayoutDashboard,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

import { Button } from "@/components/ui/button";

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

// Services data
const servicesOverview = [
  {
    title: "Custom Software Development",
    desc: "Tailored ERP, HMS, and scalable solutions to drive business growth from ideation to deployment.",
    icon: Code,
    color: "primary",
  },
  {
    title: "Cloud Solutions & DevOps",
    desc: "Scalable cloud infrastructure, seamless deployments, and robust operational support.",
    icon: Rocket,
    color: "secondary",
  },
  {
    title: "UI/UX Design & Consulting",
    desc: "Crafting intuitive and engaging user experiences that drive adoption and satisfaction.",
    icon: LayoutDashboard,
    color: "accent",
  },
  {
    title: "Data Analytics & AI",
    desc: "Transforming raw data into actionable insights and intelligent automation.",
    icon: TrendingUp,
    color: "primary",
  },
];

// Features data
const features = [
  {
    title: "Client-Centric Approach",
    desc: "Your vision is our blueprint. We align our expertise with your business goals for optimal outcomes.",
    icon: Users2,
  },
  {
    title: "Agile & Transparent Processes",
    desc: "Iterative development with continuous feedback ensures flexibility and clarity at every stage.",
    icon: Zap,
  },
  {
    title: "Experienced Team",
    desc: "Leverage the expertise of our seasoned developers, designers, and project managers.",
    icon: Shield,
  },
  {
    title: "Scalable & Secure Solutions",
    desc: "Building robust systems designed for future growth and fortified with top-tier security.",
    icon: CheckCircle,
  },
];

// Stats data
const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "40%", label: "Avg. Efficiency Gain" },
  { value: "24/7", label: "Support Available" },
];

// Testimonials data
const testimonials = [
  {
    quote: "Barbage Technologies transformed our operations with their innovative software. Truly exceptional service!",
    author: "Jane Doe",
    role: "CEO, InnovateCorp",
    rating: 5,
  },
  {
    quote: "Their cloud expertise is unparalleled. Our infrastructure is more robust and efficient than ever before.",
    author: "John Smith",
    role: "CTO, CloudPro Solutions",
    rating: 5,
  },
  {
    quote: "The team at Barbage delivered beyond our expectations. Professional, timely, and technically excellent.",
    author: "Sarah Johnson",
    role: "Product Director, TechFlow",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        {/* ========== HERO SECTION ========== */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-primary">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 w-128 h-128 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-16 lg:pb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                  </span>
                  <span className="text-sm text-white/90 font-medium">Enterprise Software Partners</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
                >
                  Innovate. Build.
                  <span className="block text-accent">Transform.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg md:text-xl text-white/80 max-w-lg mt-6 leading-relaxed"
                >
                  Your trusted partner for cutting-edge software development, cloud solutions, 
                  and digital transformation. Empowering businesses since 2020.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-wrap gap-4 mt-8"
                >
                  <Link href="/contact">
                    <Button className="bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-button text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group">
                      Start a Project
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-button text-base font-semibold">
                      Explore Services
                    </Button>
                  </Link>
                </motion.div>
              </div>

              {/* Right Column - Dashboard Preview */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-2xl blur-2xl" />
                  <div className="relative bg-surface rounded-2xl shadow-2xl overflow-hidden border border-white/20">
                    <div className="bg-surface-alt px-6 py-4 border-b border-border">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-error" />
                        <div className="w-3 h-3 rounded-full bg-accent" />
                        <div className="w-3 h-3 rounded-full bg-success" />
                        <div className="ml-3 text-sm text-text-secondary">dashboard.barbage.tech</div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="bg-surface-alt rounded-lg p-4 border border-border">
                          <div className="text-sm text-text-secondary">Revenue</div>
                          <div className="text-2xl font-bold text-text-primary">$124,500</div>
                          <div className="text-xs text-success">↑ 12%</div>
                        </div>
                        <div className="bg-surface-alt rounded-lg p-4 border border-border">
                          <div className="text-sm text-text-secondary">Users</div>
                          <div className="text-2xl font-bold text-text-primary">8,249</div>
                          <div className="text-xs text-success">↑ 8%</div>
                        </div>
                        <div className="bg-surface-alt rounded-lg p-4 border border-border">
                          <div className="text-sm text-text-secondary">Projects</div>
                          <div className="text-2xl font-bold text-text-primary">142</div>
                          <div className="text-xs text-text-secondary">Active: 12</div>
                        </div>
                      </div>
                      <div className="bg-surface-alt rounded-lg p-4 border border-border">
                        <div className="text-sm text-text-secondary mb-4">Monthly Activity</div>
                        <div className="flex items-end gap-2 h-32">
                          <div className="flex-1 bg-primary/30 rounded-t h-16" />
                          <div className="flex-1 bg-primary/50 rounded-t h-24" />
                          <div className="flex-1 bg-primary rounded-t h-32" />
                          <div className="flex-1 bg-primary/50 rounded-t h-20" />
                          <div className="flex-1 bg-primary/30 rounded-t h-12" />
                          <div className="flex-1 bg-primary/20 rounded-t h-8" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-accent text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                    Trusted Worldwide
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Stats Section - Inside Hero, Above Wave */}
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-surface/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 md:p-8"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-accent">{stat.value}</div>
                    <div className="text-sm text-white/70 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <path d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F1FAEE"/>
            </svg>
          </div>
        </section>

        {/* ========== SERVICES OVERVIEW SECTION ========== */}
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
                <span className="text-sm font-semibold text-primary">Our Expertise</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                Core Services
              </h2>
              <p className="text-lg text-text-secondary">
                We offer a comprehensive suite of services designed to accelerate your digital journey 
                and deliver tangible business value.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {servicesOverview.map((service, idx) => {
                const Icon = service.icon;
                const colorClasses = {
                  primary: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white",
                  secondary: "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white",
                  accent: "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white",
                };
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    className="group bg-surface rounded-card p-6 border border-border hover:shadow-card-hover transition-all duration-300"
                  >
                    <div className={`w-12 h-12 ${colorClasses[service.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center mb-4 transition-all duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{service.desc}</p>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link href="/services" className="text-accent text-sm font-medium inline-flex items-center gap-1">
                        Learn more <ChevronRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link href="/services">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  View All Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ========== WHY CHOOSE US SECTION ========== */}
        <section className="py-24 md:py-32 bg-surface-alt relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-semibold text-primary">Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                Partner with Barbage Technologies
              </h2>
              <p className="text-lg text-text-secondary">
                We combine technical excellence with business acumen to deliver software that drives real outcomes.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="bg-surface rounded-card p-6 border border-border hover:shadow-card-hover transition-all duration-300 text-center group"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                      <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-bold text-text-primary mb-2">{feature.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{feature.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ========== TESTIMONIALS SECTION ========== */}
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
                <span className="text-sm font-semibold text-accent">Testimonials</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-white/80">
                Hear directly from businesses that have achieved success with our partnership.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-card p-8 border border-white/20 hover:border-accent/50 transition-all duration-300"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-white/80 leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="border-t border-white/20 pt-4">
                    <p className="font-bold text-white">{testimonial.author}</p>
                    <p className="text-sm text-accent">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ========== CTA SECTION ========== */}
        <section className="py-24 md:py-32 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary to-primary-hover rounded-2xl p-12 md:p-16 relative overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent rounded-full blur-3xl" />
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto">
                  Let&apos;s discuss your project and discover how Barbage Technologies can help you achieve your goals.
                </p>
                <Link href="/contact">
                  <Button className="bg-accent hover:bg-accent-hover text-white px-10 py-4 rounded-button text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    Contact Us Today
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}