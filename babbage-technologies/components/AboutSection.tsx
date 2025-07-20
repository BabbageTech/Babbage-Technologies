"use client";

import { Button } from "@/components/ui/button";
import { CoreValue } from "@/types";
import { motion } from "framer-motion";
import { Award, BrainCircuit, CheckCircle, Clock, Globe, ShieldCheck, Star, Users2 } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  const coreValues: CoreValue[] = [
    {
      title: "Integrity",
      desc: "We act with honesty, transparency, and accountability in every project.",
      icon: "CheckCircle",
    },
    {
      title: "Innovation",
      desc: "We embrace change to craft next-generation digital experiences.",
      icon: "BrainCircuit",
    },
    {
      title: "Teamwork",
      desc: "We foster collaboration to deliver innovative, high-quality solutions.",
      icon: "Users2",
    },
    {
      title: "Business Value",
      desc: "We prioritize solutions that drive measurable business growth.",
      icon: "ShieldCheck",
    },
  ];

  return (
    <>
      <Head>
        <title>About Us | BabbageTechnologies</title>
        <meta
          name="description"
          content="BabbageTechnologies delivers custom software and cloud solutions, empowering businesses with innovative, scalable technology."
        />
        <meta
          name="keywords"
          content="BabbageTechnologies, Software Development, Cloud Solutions, ERP Systems, HMS, Scalable Applications, IoT"
        />
        <meta name="author" content="BabbageTechnologies" />
        <meta property="og:title" content="About Us - BabbageTechnologies" />
        <meta
          property="og:description"
          content="Discover BabbageTechnologies—your trusted partner for innovative software and cloud solutions."
        />
        <meta property="og:image" content="/about-image.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <section className="py-16 bg-white text-gray-800 w-full overflow-hidden">
        <div className="relative z-10 w-full px-6 lg:px-24 max-w-7xl mx-auto">
          {/* Page Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="text-4xl md:text-5xl font-extrabold text-center text-blue-800 mb-12"
          >
            About Babbage<span className="text-teal-500">Technologies</span>
          </motion.h1>

          {/* Who We Are */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="space-y-6 mb-16 leading-relaxed"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 border-b-2 border-teal-200 pb-2">
              Who We Are
            </h2>
            <p className="text-lg text-gray-800">
              <strong>BabbageTechnologies</strong> is a premier software development company delivering custom IT solutions to drive business growth. Specializing in scalable web, mobile, and IoT applications, robust ERP systems, and hospital management systems (HMS), we empower businesses worldwide. Our team combines deep technical expertise, transparent processes, and a client-centric approach to transform ideas into impactful solutions.
            </p>
            <p className="text-lg text-gray-800">
              At BabbageTechnologies, we don’t just develop software—we craft solutions that propel businesses forward. With a focus on security, scalability, and innovation, we foster long-term partnerships built on trust and excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16 bg-white text-gray-800 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="text-3xl md:text-4xl font-extrabold text-center text-blue-800 mb-12"
          >
            Our Impact
          </motion.h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Star, value: "98%", label: "Satisfaction Rate" },
              { icon: Award, value: "250+", label: "Successful Projects" },
              { icon: Globe, value: "25+", label: "Countries Served" },
              { icon: Clock, value: "13+", label: "Years in Business" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, delay: i * 0.15, type: "spring", stiffness: 100 }}
                className="bg-gradient-to-br from-blue-600 to-blue-800 bg-white/10 backdrop-blur-lg border border-blue-900 rounded-lg p-4 aspect-square text-center transition-all duration-300 shadow-[inset_0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_15px_rgba(29,78,216,0.5)]"
              >
                <div className="p-3 bg-teal-500/20 rounded-full shadow-inner border border-teal-200 mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-teal-500" />
                </div>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-white">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white text-gray-800 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="text-3xl md:text-4xl font-extrabold text-center text-blue-800 mb-12"
          >
            Our Services
          </motion.h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "Discovery", desc: "Validate ideas, choose technologies, and plan releases to minimize risks." },
              { title: "UI/UX Design", desc: "Craft intuitive, user-friendly interfaces for seamless experiences." },
              { title: "Software Development", desc: "Build scalable web, mobile, and IoT solutions tailored to your needs." },
              { title: "QA & Testing", desc: "Ensure flawless performance with rigorous quality assurance." },
              { title: "Staff Augmentation", desc: "Augment your team with our expert developers." },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.8, delay: i * 0.15, type: "spring", stiffness: 100 }}
                className="bg-white/10 backdrop-blur-lg border border-blue-200 rounded-lg p-6 text-center transition-all duration-300 shadow-[inset_0_0_10px_rgba(255,255,255,0.2)] hover:shadow-xl"
              >
                <h3 className="text-xl font-extrabold text-blue-800 mb-2">{service.title}</h3>
                <p className="text-gray-800">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white text-gray-800 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="text-3xl md:text-4xl font-extrabold text-center text-blue-800 mb-12"
          >
            Our Core Values
          </motion.h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {coreValues.map((value: CoreValue, i: number) => {
              const IconComponent = { CheckCircle, BrainCircuit, ShieldCheck, Users2 }[
                value.icon
              ];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, delay: i * 0.15, type: "spring", stiffness: 100 }}
                  className="bg-gradient-to-br from-blue-600 to-blue-800 bg-white/10 backdrop-blur-lg border border-blue-900 rounded-lg p-4 aspect-square text-center transition-all duration-300 shadow-[inset_0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_15px_rgba(29,78,216,0.5)]"
                >
                  {IconComponent && (
                    <div className="p-3 bg-teal-500/20 rounded-full shadow-inner border border-teal-200 mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-teal-500" />
                    </div>
                  )}
                  <h3 className="text-xl font-extrabold text-white mb-2 hover:border-b-2 hover:border-teal-500 transition-all duration-200">{value.title}</h3>
                  <p className="text-white">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white text-gray-800 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="text-3xl md:text-4xl font-extrabold text-center text-blue-800 mb-12"
          >
            What Our Clients Say
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                quote: "“BabbageTechnologies provided a competitive edge with their well-thought solutions and commitment to quality.”",
                author: "Alexander McCaig",
                role: "Co-Founder & CEO, Tartle",
              },
              {
                quote: "“Their thorough investigation and transparent approach ensured our project was a success. Highly recommended!”",
                author: "Damian Gevertz",
                role: "Founder & CEO, Widgety",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.8, delay: i * 0.15, type: "spring", stiffness: 100 }}
                className="bg-white/10 backdrop-blur-lg border border-blue-200 rounded-lg p-6 transition-all duration-300 shadow-[inset_0_0_10px_rgba(255,255,255,0.2)] hover:shadow-xl"
              >
                <p
                  className="text-gray-800 italic mb-4"
                  dangerouslySetInnerHTML={{ __html: testimonial.quote }}
                />
                <p className="text-blue-800 font-semibold">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white text-gray-800 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="flex flex-col-reverse lg:flex-row items-center gap-12"
          >
            {/* Text Content */}
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 border-b-2 border-teal-200 pb-2">
                Why Choose Us?
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed">
                With 13+ years of experience, we deliver future-proof software and cloud solutions built to last. Our agile processes, transparent communication, and senior expertise ensure project success.
              </p>
              <ul className="space-y-2 text-gray-800 text-base">
                <li>
                  <CheckCircle className="inline w-5 h-5 mr-2 text-teal-500" />
                  Accurate cost estimation and budget control
                </li>
                <li>
                  <CheckCircle className="inline w-5 h-5 mr-2 text-teal-500" />
                  Competence-based team selection
                </li>
                <li>
                  <CheckCircle className="inline w-5 h-5 mr-2 text-teal-500" />
                  Comprehensive risk management
                </li>
                <li>
                  <CheckCircle className="inline w-5 h-5 mr-2 text-teal-500" />
                  Agile delivery with regular reporting
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button
                    aria-label="Get in Touch"
                    className="bg-teal-500 border border-teal-200 text-white px-6 py-3 rounded-lg hover:bg-teal-600 hover:shadow-[0_0_10px_rgba(13,148,136,0.5)] transition-all duration-300"
                  >
                    Get in Touch
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    aria-label="Learn More"
                    className="bg-blue-800 border border-teal-200 text-white px-6 py-3 rounded-lg hover:bg-blue-900 hover:shadow-[0_0_10px_rgba(29,78,216,0.5)] transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="flex-1 relative h-64 w-full overflow-hidden rounded-lg border border-blue-900 bg-gradient-to-br from-blue-600 to-blue-800 bg-white/10 backdrop-blur-lg shadow-[inset_0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_15px_rgba(29,78,216,0.5)] aspect-square"
            >
              <Image
                src="/about-image.jpg"
                alt="BabbageTechnologies Team in Action"
                width={600}
                height={600}
                quality={80}
                loading="eager"
                className="rounded-lg transition-transform duration-500 group-hover:scale-105 object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}