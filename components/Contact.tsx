"use client";

import PlateLabel from "@/components/PlateLabel";
import { company } from "@/lib/site-data";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "./ContactForm";

export default function ContactPage() {
  const contactInfo = [
    { icon: MapPin, title: "Office", details: company.address },
    { icon: Phone, title: "Phone", details: company.phones },
    { icon: Mail, title: "Email", details: [company.email, company.supportEmail] },
    { icon: Clock, title: "Hours", details: ["Mon – Fri, 8:00 – 18:00 EAT", "24/7 for active support clients"] },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        {/* ========== HERO ========== */}
        <section className="pt-32 lg:pt-40 pb-24">
          <div className="section-container">
            <PlateLabel index="01">Contact</PlateLabel>
            <h1 className="font-display text-5xl md:text-6xl text-text-primary mt-6 max-w-2xl leading-[1.05]">
              Tell us what you&apos;re building
            </h1>
            <p className="text-lg text-text-secondary max-w-xl mt-6 leading-relaxed">
              Whether it&apos;s a rough idea or a detailed spec, we&apos;ll get back to you within
              one business day with next steps.
            </p>

            <div className="grid md:grid-cols-12 gap-12 mt-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="md:col-span-7"
              >
                <ContactForm />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="md:col-span-5 space-y-8"
              >
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon;
                  const chip = idx % 2 === 0 ? "bg-brass/12 text-brass-hover" : "bg-verdigris/12 text-verdigris";
                  return (
                    <div key={info.title} className="border-t border-paper-line pt-5">
                      <div className="flex items-center gap-2.5 mb-3">
                        <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${chip}`}>
                          <Icon className="w-3.5 h-3.5" />
                        </span>
                        <span className="plate-label text-text-tertiary">{info.title}</span>
                      </div>
                      {info.details.map((d) => (
                        <p key={d} className="text-text-primary leading-relaxed">{d}</p>
                      ))}
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
