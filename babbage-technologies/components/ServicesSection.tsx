"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Service } from "@/types";
import { motion, Variants } from "framer-motion";
import { BarChart2, Box, CheckCircle, Clipboard, Cloud, Code, Database, Globe, Layers, Server, Settings, Smartphone, Users2 } from "lucide-react";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
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

export default function ServicesSection() {
  const services: Service[] = [
    {
      title: "Custom Software Development",
      description:
        "Tailored ERP, HMS, and scalable solutions to drive business growth, from ideation to deployment.",
      icon: <Server className="w-8 h-8 text-teal-500" />,
    },
    {
      title: "IoT Development",
      description:
        "Scalable IoT ecosystems with secure data management and informative dashboards for any scale.",
      icon: <Database className="w-8 h-8 text-teal-500" />,
    },
    {
      title: "Web Development",
      description:
        "High-performance, secure web applications built to meet user expectations and business goals.",
      icon: <Globe className="w-8 h-8 text-teal-500" />,
    },
    {
      title: "Mobile App Development",
      description:
        "Intuitive iOS, Android, and cross-platform apps designed for seamless user experiences.",
      icon: <Smartphone className="w-8 h-8 text-teal-500" />,
    },
    {
      title: "Data Analytics",
      description:
        "Custom analytics and dashboards to turn complex data into actionable business insights.",
      icon: <BarChart2 className="w-8 h-8 text-teal-500" />,
    },
    {
      title: "Staff Augmentation",
      description:
        "Expert developers to complement your team, integrating seamlessly from day one.",
      icon: <Users2 className="w-8 h-8 text-teal-500" />,
    },
  ];

  return (
    <>
      <section className="py-16 bg-white text-gray-800 w-full overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-800 max-w-3xl mx-auto">
              We deliver scalable software and cloud solutions tailored to your business, ensuring reliability and growth.
            </p>
          </motion.div>

          {/* Service Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {services.map((service: Service, index: number) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                className="bg-white/10 backdrop-blur-lg border border-blue-200 rounded-lg shadow-[inset_0_0_10px_rgba(255,255,255,0.2)] hover:shadow-xl transition-all duration-300"
              >
                <Card className="bg-transparent border-0">
                  <CardHeader className="flex items-center gap-4">
                    <div className="p-3 bg-teal-100/50 rounded-full shadow-inner border border-teal-200">
                      {service.icon}
                    </div>
                    <CardTitle className="text-lg md:text-xl font-extrabold text-blue-800">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-base text-gray-800 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <Link href="/contact">
                      <Button
                        aria-label={`Learn more about ${service.title}`}
                        className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-lg"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/contact">
              <Button
                aria-label="Get in Touch"
                className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-lg mr-4"
              >
                Get in Touch
              </Button>
            </Link>
            <Link href="/consultation">
              <Button
                aria-label="Book Free Consultation"
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg"
              >
                Book Free Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-white text-gray-800 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-center text-blue-800 mb-12"
          >
            Our Development Process
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Kickoff & Requirements",
                desc: "We align on goals, define scope, and create a roadmap through workshops and risk assessments.",
                icon: <Clipboard className="w-8 h-8 text-teal-500" />,
              },
              {
                title: "UI/UX Design",
                desc: "We craft prototypes, wireframes, and branded UI kits for intuitive, user-friendly interfaces.",
                icon: <Code className="w-8 h-8 text-teal-500" />,
              },
              {
                title: "Development",
                desc: "Iterative coding in two-week sprints, with daily stand-ups and robust code reviews.",
                icon: <Server className="w-8 h-8 text-teal-500" />,
              },
              {
                title: "Testing",
                desc: "Rigorous QA, including manual and automated testing, ensures flawless performance.",
                icon: <CheckCircle className="w-8 h-8 text-teal-500" />,
              },
              {
                title: "Support & Maintenance",
                desc: "Ongoing monitoring, updates, and feature rollouts to keep your solution future-proof.",
                icon: <Settings className="w-8 h-8 text-teal-500" />,
              },
            ].map((stage, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-b from-blue-100 to-blue-200 border border-cyan-300 rounded-lg shadow-lg hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-300"
              >
                <Card className="bg-transparent border-0">
                  <CardHeader className="flex items-center gap-4">
                    <div className="p-3 bg-teal-100/50 rounded-full shadow-inner border border-teal-200">
                      {stage.icon}
                    </div>
                    <CardTitle className="text-lg md:text-xl font-extrabold text-gray-800 hover:border-b-2 hover:border-teal-500 transition-all duration-200">
                      {stage.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-base text-gray-800 leading-relaxed">
                      {stage.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-white text-gray-800 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-center text-blue-800 mb-12"
          >
            Industries We Serve
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Healthcare",
                desc: "HIPAA-compliant patient management, telemedicine, IoT, and data analytics solutions.",
              },
              {
                title: "Finance",
                desc: "Secure wealth management, payment processing, and compliance tools.",
              },
              {
                title: "Education",
                desc: "Engaging e-learning portals and student information systems.",
              },
              {
                title: "eCommerce",
                desc: "Superior shopping experiences with 24/7 availability.",
              },
              {
                title: "Logistics",
                desc: "Real-time tracking, route optimization, and inventory management.",
              },
              {
                title: "Media & Entertainment",
                desc: "Streaming platforms and social media tools with minimal downtime.",
              },
              {
                title: "Real Estate",
                desc: "Property management, virtual tours, and real-time listing platforms.",
              },
              {
                title: "Marketing",
                desc: "Automation tools to optimize strategies and gather insights.",
              },
            ].map((industry, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                className="bg-white/10 backdrop-blur-lg border border-blue-200 rounded-lg shadow-[inset_0_0_10px_rgba(255,255,255,0.2)] hover:shadow-xl transition-all duration-300"
              >
                <Card className="bg-transparent border-0">
                  <CardHeader>
                    <CardTitle className="text-lg md:text-xl font-extrabold text-blue-800">
                      {industry.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-base text-gray-800 leading-relaxed">
                      {industry.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Transitional Section */}
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
              Tailored Technology for Your Industry
            </h2>
            <p className="text-lg text-gray-800 max-w-3xl mx-auto mb-8">
              At BabbageTechnologies, we combine our deep industry expertise with cutting-edge technologies to deliver solutions that address your unique challenges and drive measurable results.
            </p>
            <Link href="/consultation">
              <Button
                aria-label="Discover Our Solutions"
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg"
              >
                Discover Our Solutions
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-white text-gray-800 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-center text-blue-800 mb-12"
          >
            Technologies We Master
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: "Java",
                desc: "Reliable, secure enterprise applications with platform-independent libraries.",
                icon: <Code className="w-8 h-8 text-teal-500" />,
              },
              {
                title: ".NET",
                desc: "Versatile framework for scalable web, desktop, mobile, and cloud solutions.",
                icon: <Box className="w-8 h-8 text-teal-500" />,
              },
              {
                title: "Ruby on Rails",
                desc: "Rapid development of scalable, maintainable web applications.",
                icon: <Code className="w-8 h-8 text-teal-500" />,
              },
              {
                title: "Node.js",
                desc: "High-performance, real-time applications with event-driven architecture.",
                icon: <Server className="w-8 h-8 text-teal-500" />,
              },
              {
                title: "React.js",
                desc: "Dynamic, responsive user interfaces for single-page and complex applications.",
                icon: <Layers className="w-8 h-8 text-teal-500" />,
              },
              {
                title: "Python",
                desc: "Versatile language for rapid development, data analytics, and scalable APIs.",
                icon: <Code className="w-8 h-8 text-teal-500" />,
              },
              {
                title: "Django",
                desc: "High-level Python framework for secure, rapid web application development.",
                icon: <Code className="w-8 h-8 text-teal-500" />,
              },
              {
                title: "FastAPI",
                desc: "Modern Python framework for building fast, high-performance APIs.",
                icon: <Code className="w-8 h-8 text-teal-500" />,
              },
              {
                title: "Google Cloud",
                desc: "Scalable cloud infrastructure for secure, efficient digital solutions.",
                icon: <Cloud className="w-8 h-8 text-teal-500" />,
              },
            ].map((tech, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                className="bg-white/10 backdrop-blur-lg border border-blue-200 rounded-lg shadow-[inset_0_0_10px_rgba(255,255,255,0.2)] hover:shadow-xl transition-all duration-300"
              >
                <Card className="bg-transparent border-0">
                  <CardHeader className="flex items-center gap-4">
                    <div className="p-3 bg-teal-100/50 rounded-full shadow-inner border border-teal-200">
                      {tech.icon}
                    </div>
                    <CardTitle className="text-lg md:text-xl font-extrabold text-blue-800">
                      {tech.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-base text-gray-800 leading-relaxed">
                      {tech.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quality Control Practices */}
      <section className="py-16 bg-white text-gray-800 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-center text-blue-800 mb-12"
          >
            Our Quality Control Practices
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Accurate Cost Estimation",
                desc: "Thorough analysis ensures precise budget and timeline commitments.",
                icon: <Clipboard className="w-8 h-8 text-teal-500" />,
              },
              {
                title: "Competence-Based Team",
                desc: "We assign specialists with skills tailored to your project needs.",
                icon: <Users2 className="w-8 h-8 text-teal-500" />,
              },
              {
                title: "Comprehensive Risk Management",
                desc: "Proactive risk identification and mitigation for smooth delivery.",
                icon: <CheckCircle className="w-8 h-8 text-teal-500" />,
              },
              {
                title: "Agile Delivery",
                desc: "Iterative sprints for rapid, flexible, and high-quality releases.",
                icon: <Code className="w-8 h-8 text-teal-500" />,
              },
              {
                title: "Budget Control",
                desc: "Continuous monitoring to prevent unexpected cost overruns.",
                icon: <Settings className="w-8 h-8 text-teal-500" />,
              },
              {
                title: "Responsible Deadlines",
                desc: "Structured processes to meet deadlines without compromising quality.",
                icon: <CheckCircle className="w-8 h-8 text-teal-500" />,
              },
              {
                title: "Regular Reporting",
                desc: "Weekly calls, biweekly demos, and detailed progress updates.",
                icon: <Clipboard className="w-8 h-8 text-teal-500" />,
              },
            ].map((practice, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-b from-blue-100 to-blue-200 border border-cyan-300 rounded-lg shadow-lg hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-300"
              >
                <Card className="bg-transparent border-0">
                  <CardHeader className="flex items-center gap-4">
                    <div className="p-3 bg-teal-100/50 rounded-full shadow-inner border border-teal-200">
                      {practice.icon}
                    </div>
                    <CardTitle className="text-lg md:text-xl font-extrabold text-gray-800 hover:border-b-2 hover:border-teal-500 transition-all duration-200">
                      {practice.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-base text-gray-800 leading-relaxed">
                      {practice.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white text-gray-800 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-center text-blue-800 mb-12"
          >
            What Our Clients Say
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
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
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-b from-blue-100 to-blue-200 border border-cyan-300 rounded-lg shadow-lg hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-300"
              >
                <Card className="bg-transparent border-0">
                  <CardContent className="pt-6">
                    <p
                      className="text-gray-800 italic mb-4"
                      dangerouslySetInnerHTML={{ __html: testimonial.quote }}
                    />
                    <p className="text-gray-800 font-semibold">{testimonial.author}</p>
                    <p className="text-teal-500">{testimonial.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}