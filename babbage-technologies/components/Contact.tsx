"use client";

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Clock, CheckCircle } from 'lucide-react';
import { ContactForm } from './ContactForm';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: ["1234 Innovation Street", "Nairobi, Kenya"],
      color: "primary",
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: ["+254 114 161 768", "+254 768 378 046"],
      color: "secondary",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["hello@barbagetech.com", "support@barbagetech.com"],
      color: "accent",
    },
  ];

  const benefits = [
    "Proven excellence in service delivery",
    "Quick turnaround and reliable support",
    "Customized software & cloud solutions",
    "Certified and experienced specialists",
    "24/7 dedicated client support",
    "End-to-end project management",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        {/* ========== HERO SECTION ========== */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-primary">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-secondary rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <span className="text-sm text-white/90">Get in Touch</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                Let&apos;s Start a
                <span className="text-accent"> Conversation</span>
              </h1>
              
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Whether it&apos;s a partnership opportunity, a technical consultation, or a service request &mdash; 
                we&apos;re just a message away. Reach out today!
              </p>
            </motion.div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F1FAEE"/>
            </svg>
          </div>
        </section>

        {/* ========== MAIN CONTENT ========== */}
        <section className="py-24 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* LEFT COLUMN - Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="bg-surface rounded-2xl p-8 border border-border shadow-soft">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-2">Let&apos;s Collaborate</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Our expert team is always eager to hear from you. We provide fast responses, 
                    dedicated support, and custom-tailored solutions for your software and cloud needs.
                  </p>
                </div>

                <div className="bg-surface rounded-2xl p-8 border border-border shadow-soft">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-4">Why Clients Trust Us</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-text-secondary">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-surface rounded-2xl p-8 border border-border shadow-soft">
                  <h3 className="text-2xl font-bold text-text-primary mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    {contactInfo.map((item, idx) => {
                      const IconComponent = item.icon;
                      const colorMap = {
                        primary: "bg-primary/10 text-primary",
                        secondary: "bg-secondary/10 text-secondary",
                        accent: "bg-accent/10 text-accent",
                      };
                      return (
                        <div key={idx} className="flex items-start gap-4">
                          <div className={`w-10 h-10 rounded-full ${colorMap[item.color as keyof typeof colorMap]} flex items-center justify-center flex-shrink-0`}>
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-text-primary">{item.title}</h4>
                            {item.details.map((detail, dIdx) => (
                              <p key={dIdx} className="text-text-secondary">{detail}</p>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              {/* RIGHT COLUMN - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========== CTA SECTION ========== */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                Prefer a quicker way to reach us?
              </h3>
              <p className="text-text-secondary mb-6">
                Call us directly or send an email, and we&apos;ll get back to you within 24 hours.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+254114161768"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-hover transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Call +254 114 161 768
                </a>
                <a
                  href="mailto:hello@barbagetech.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-border text-text-primary rounded-xl font-semibold hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  hello@barbagetech.com
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}