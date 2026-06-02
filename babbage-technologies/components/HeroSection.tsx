"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Code, Rocket, Zap } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "40%", label: "Avg. Efficiency Gain" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-primary">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-128 h-128 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
      </div>

      {/* Floating tech icons */}
      <div className="absolute top-20 right-10 opacity-10 hidden lg:block">
        <Code className="w-32 h-32 text-white" strokeWidth={0.5} />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10 hidden lg:block">
        <Zap className="w-24 h-24 text-accent" strokeWidth={0.5} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            {/* Badge */}
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

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
            >
              Innovate. Build.
              <span className="block text-accent">Transform.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 max-w-lg mt-6 leading-relaxed"
            >
              Empowering startups, enterprises, and institutions with future-ready software,
              cloud platforms, and AI-driven digital transformation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <Link href="/contact">
                <Button className="bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-button text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-button text-base font-semibold">
                  Explore Services
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-6 md:gap-8 mt-10 pt-6 border-t border-white/20"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center md:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-accent">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
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
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-2xl blur-2xl" />
              
              {/* Dashboard Card */}
              <div className="relative bg-surface rounded-2xl shadow-2xl overflow-hidden border border-white/20">
                {/* Mockup Header */}
                <div className="bg-surface-alt px-6 py-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-error" />
                    <div className="w-3 h-3 rounded-full bg-accent" />
                    <div className="w-3 h-3 rounded-full bg-success" />
                    <div className="ml-3 text-sm text-text-secondary">dashboard.barbage.tech</div>
                  </div>
                </div>
                
                {/* Mockup Content */}
                <div className="p-6">
                  {/* Stats Row */}
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
                  
                  {/* Chart Placeholder */}
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
              
              {/* Trust badge */}
              <div className="absolute -bottom-3 -right-3 bg-accent text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                Trusted Worldwide
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}