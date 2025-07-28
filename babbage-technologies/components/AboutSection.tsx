"use client";

import { motion, Variants } from "framer-motion";
import {
  Award, BrainCircuit,
  CalendarCheck,
  CheckCircle,
  Clipboard,
  Clock,
  Code,
  DollarSign,
  FileText,
  Globe,
  Handshake,
  Layers,
  Lightbulb,
  Lock,
  MapPin,
  Palette,
  RefreshCcw,
  Server, Settings,
  ShieldCheck,
  Star,
  TrendingUp,
  UserCheck,
  Users2,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button"; // Assuming Button component exists
import { CoreValue } from "@/types"; // Ensure CoreValue type is correctly defined in types/index.ts

// Define a mapping for Lucide icons to be used dynamically
const IconMap = {
  CheckCircle: CheckCircle,
  BrainCircuit: BrainCircuit,
  ShieldCheck: ShieldCheck,
  Users2: Users2,
  Star: Star,
  Award: Award,
  Globe: Globe,
  Clock: Clock,
  MapPin: MapPin,
  Lightbulb: Lightbulb,
  TrendingUp: TrendingUp,
  DollarSign: DollarSign,
  CalendarCheck: CalendarCheck,
  FileText: FileText,
  Code: Code,
  UserCheck: UserCheck,
  Handshake: Handshake,
  Zap: Zap,
  Lock: Lock,
  RefreshCcw: RefreshCcw,
  Palette: Palette,
  Clipboard: Clipboard,
  Layers: Layers,
  Server: Server,
  Settings: Settings,
};

// Framer Motion Variants for staggered animations
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

export default function AboutPage() {
  const coreValues: CoreValue[] = [
    {
      title: "Integrity",
      desc: "We foster trust through honest communication, ethical practices, and transparent interactions.",
      icon: "CheckCircle",
    },
    {
      title: "Innovation",
      desc: "Our open and teamwork-driven environment encourages innovative solutions through collective intelligence.",
      icon: "BrainCircuit",
    },
    {
      title: "Reliability",
      desc: "We deliver dependable tech with long-term stability and robust performance.",
      icon: "ShieldCheck",
    },
    {
      title: "Customer Focus",
      desc: "We prioritize long-term partnerships and align our solutions with clients’ business goals.",
      icon: "Users2",
    },
    {
      title: "Agility & Adaptability",
      desc: "Our agile processes ensure swift adaptation to changing client needs and market demands.",
      icon: "Zap",
    },
    {
      title: "Security & Confidentiality",
      desc: "Stringent data protection measures safeguard client information, ensuring peace of mind.",
      icon: "Lock",
    },
    {
      title: "Continuous Improvement",
      desc: "Our relentless pursuit of excellence and innovation underpins every project, exceeding client expectations.",
      icon: "RefreshCcw",
    },
    {
      title: "Cultural Sensitivity",
      desc: "We respect and incorporate the cultural diversity of our clients, ensuring globally applicable solutions.",
      icon: "Palette",
    },
  ];

  const guarantees = [
    {
      title: "Accurate Cost Estimation",
      desc: "Detailed analysis of business goals and user needs for precise budget and timeline assessments.",
      icon: "DollarSign",
    },
    {
      title: "Competence-Based Team Selection",
      desc: "Matching best-suited candidates to each role, aligning skills, interests, and expertise.",
      icon: "Users2",
    },
    {
      title: "Comprehensive Risk Management",
      desc: "Proactive identification, assessment, and mitigation of risks for project stability and early threat addressing.",
      icon: "ShieldCheck",
    },
    {
      title: "Agile Delivery",
      desc: "Flexible and iterative approach ensuring timely delivery, adaptation to changing requirements, and continuous improvement.",
      icon: "Zap",
    },
    {
      title: "Budget Control",
      desc: "Accurate scoping and prioritization of features to ensure efficient resource allocation and prevent overruns.",
      icon: "TrendingUp",
    },
    {
      title: "Responsible Deadlines",
      desc: "Structured processes and proactive change management to meet deadlines without compromising quality.",
      icon: "CalendarCheck",
    },
    {
      title: "Regular Reporting",
      desc: "Transparent communication with detailed weekly updates, demos, and timesheet reports.",
      icon: "FileText",
    },
    {
      title: "Knowledge Management",
      desc: "Seamless knowledge sharing and documentation to support project continuity and long-term success.",
      icon: "Lightbulb",
    },
  ];

  const servicesOffered = [
    { title: "Discovery", desc: "Validate ideas, choose technologies, and plan releases to minimize risks." },
    { title: "UI/UX Design", desc: "Craft intuitive, user-friendly interfaces for seamless experiences." },
    { title: "Software Development", desc: "Build scalable web, mobile, and IoT solutions tailored to your needs." },
    { title: "QA & Testing", desc: "Ensure flawless performance with rigorous quality assurance." },
    { title: "Staff Augmentation", desc: "Augment your team with our expert developers." },
  ];

  const managementTeam = [
    { name: "Simon Keya", title: "CTO & CoFounder", img: "https://placehold.co/150x150/2563EB/FFFFFF?text=CEO" },
    { name: "Kelvin Wekesa", title: "COO & CoFounder", img: "https://placehold.co/150x150/2563EB/FFFFFF?text=Partner" },
    { name: "Elena Safonova", title: "Head of QA", img: "https://placehold.co/150x150/2563EB/FFFFFF?text=QA" },
    { name: "Kate Merzlova", title: "Head of Sales & Marketing", img: "https://placehold.co/150x150/2563EB/FFFFFF?text=Sales" },
    { name: "Irina Baryshnaya", title: "Head of PM", img: "https://placehold.co/150x150/2563EB/FFFFFF?text=PM" },
  ];

  const clientTestimonials = [
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
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow">
        {/* About BabbageTechnologies (Hero-like) Section - DARK */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 to-indigo-950 text-white relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
                About Babbage<span className="text-teal-400">Technologies</span>
              </h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
                Empowering businesses through innovative software, robust cloud technology, and
                enterprise-grade systems tailored for your growth and success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section - LIGHT */}
        <section className="py-20 md:py-28 bg-gray-100 text-gray-800 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              viewport={{ once: true, amount: 0.1 }}
              className="flex flex-col-reverse lg:flex-row items-center gap-12"
            >
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 drop-shadow-lg">
                  Why Choose Us?
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We deliver future-proof software and cloud solutions built to last. Our agile processes, transparent communication, and senior expertise ensure project success.
                </p>
                <ul className="space-y-3 text-gray-700 text-lg">
                  <li>
                    <CheckCircle className="inline w-6 h-6 mr-3 text-blue-700" />
                    Accurate cost estimation and budget control
                  </li>
                  <li>
                    <CheckCircle className="inline w-6 h-6 mr-3 text-blue-700" />
                    Competence-based team selection
                  </li>
                  <li>
                    <CheckCircle className="inline w-6 h-6 mr-3 text-blue-700" />
                    Comprehensive risk management
                  </li>
                  <li>
                    <CheckCircle className="inline w-6 h-6 mr-3 text-blue-700" />
                    Agile delivery with regular reporting
                  </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link href="/contact">
                    <Button
                      aria-label="Get in Touch"
                      className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold shadow-[0_0_15px_rgba(13,148,136,0.6)] transition-all duration-300 transform hover:scale-105"
                    >
                      Get in Touch
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button
                      aria-label="Learn More"
                      className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold shadow-[0_0_10px_rgba(29,78,216,0.5)] transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                viewport={{ once: true, amount: 0.1 }}
                className="flex-1 relative h-80 md:h-96 w-full overflow-hidden rounded-xl border border-gray-200 group bg-white shadow-lg shadow-gray-200/50" // Adjusted for light background
              >
                <Image
                  src="/about.jpg" // Placeholder image for demonstration
                  alt="BabbageTechnologies Team in Action"
                  width={800}
                  height={600}
                  quality={80}
                  loading="eager"
                  className="rounded-xl transition-transform duration-500 group-hover:scale-105 object-cover w-full h-full"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Our Impact (Stats) Section - DARK */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 to-indigo-950 text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              viewport={{ once: true, amount: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12 drop-shadow-lg"
            >
              Our Impact in Numbers
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {[
                { icon: Star, value: "89%", label: "Satisfaction Rate" },
                { icon: Award, value: "10+", label: "Successful Projects" },
                { icon: Globe, value: "5+", label: "Industries Served" },
                { icon: Users2, value: "60%", label: "Senior Specialists" },
                { icon: Clock, value: "3+", label: "Years’ Client Engagement" },
                { icon: Clock, value: "3+", label: "Years on the Market" },
              ].map((stat, i) => {
                const IconComponent = IconMap[stat.icon.displayName as keyof typeof IconMap || 'Star'];
                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm border border-blue-700/30 rounded-xl shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-500 p-6 flex flex-col items-center text-center will-change-transform will-change-opacity"
                  >
                    <div className="p-4 bg-blue-700/20 rounded-full shadow-inner border border-blue-400/50 mb-4">
                      {IconComponent && <IconComponent className="w-8 h-8 text-teal-400" />}
                    </div>
                    <p className="text-4xl font-extrabold text-teal-300 mb-2">{stat.value}</p>
                    <p className="text-lg text-blue-200">{stat.label}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Who We Are & Our Commitment - LIGHT */}
        <section className="py-20 md:py-28 bg-gray-100 text-gray-800 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              viewport={{ once: true, amount: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-12 drop-shadow-sm"
            >
              Who We Are & Our Commitment
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100, delay: 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-700">
                  BabbageTechnologies is a leading software development solutions provider dedicated to empowering businesses with cutting-edge technology. Founded on principles of innovation, integrity, and client-centricity, we specialize in crafting custom software, optimizing cloud infrastructure, and driving digital transformation.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Our commitment extends beyond just code. We believe in building lasting partnerships, understanding your unique challenges, and delivering solutions that not only meet but exceed your expectations. With a team of seasoned experts, we navigate the complexities of the digital landscape to provide secure, scalable, and impactful results.
                </p>
                <Link href="/contact">
                  <Button
                    aria-label="Learn About Our Approach"
                    className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Learn About Our Approach
                  </Button>
                </Link>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                viewport={{ once: true, amount: 0.1 }}
                className="relative h-80 md:h-96 w-full overflow-hidden rounded-xl border border-gray-200 group bg-white shadow-lg shadow-gray-200/50"
              >
                <Image
                  src="/Commitment.jpg" // Placeholder image
                  alt="Our Commitment"
                  width={800}
                  height={600}
                  quality={80}
                  loading="eager"
                  className="rounded-xl transition-transform duration-500 group-hover:scale-105 object-cover w-full h-full"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Our Core Values Section - DARK */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 to-indigo-950 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              viewport={{ once: true, amount: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12 drop-shadow-lg"
            >
              Our Core Values
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {coreValues.map((value, i) => {
                const IconComponent = IconMap[value.icon as keyof typeof IconMap];
                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white/10 backdrop-blur-sm border border-blue-700/30 rounded-xl shadow-2xl hover:shadow-teal-500/50 transition-all duration-500 p-6 flex flex-col items-center text-center"
                  >
                    <div className="p-4 bg-blue-700/20 rounded-full shadow-inner border border-blue-400/50 mb-4">
                      {IconComponent && <IconComponent className="w-8 h-8 text-teal-400" />}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-blue-200 leading-relaxed">{value.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Our Guarantees Section - LIGHT */}
        <section className="py-20 md:py-28 bg-gray-100 text-gray-800 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              viewport={{ once: true, amount: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-12 drop-shadow-sm"
            >
              Our Guarantees
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {guarantees.map((guarantee, i) => {
                const IconComponent = IconMap[guarantee.icon as keyof typeof IconMap];
                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
                  >
                    <div className="p-4 bg-blue-100 rounded-full mb-4 shadow-inner">
                      {IconComponent && <IconComponent className="w-8 h-8 text-blue-700" />}
                    </div>
                    <h3 className="text-xl font-bold text-blue-800 mb-2">{guarantee.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{guarantee.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Services Offered Section - DARK */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 to-indigo-950 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              viewport={{ once: true, amount: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12 drop-shadow-lg"
            >
              Services We Offer
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {servicesOffered.map((service, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white/10 backdrop-blur-sm border border-blue-700/30 rounded-xl shadow-2xl hover:shadow-teal-500/50 transition-all duration-500 p-6 flex flex-col items-center text-center"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-blue-200 leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Management Team Section - LIGHT */}
        <section className="py-20 md:py-28 bg-gray-100 text-gray-800 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              viewport={{ once: true, amount: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-12 drop-shadow-sm"
            >
              Meet Our Management Team
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center"
            >
              {managementTeam.map((member, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-blue-600 shadow-md">
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={150}
                      height={150}
                      quality={80}
                      loading="lazy"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-blue-800">{member.name}</h3>
                  <p className="text-teal-600 text-sm">{member.title}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Client Testimonials Section - DARK */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 to-indigo-950 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-sm"
            >
              What Our Clients Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-lg text-blue-200 max-w-3xl mx-auto mb-12"
            >
              Hear directly from businesses that have achieved success with our partnership.
            </motion.p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {clientTestimonials.map((testimonial, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white/10 backdrop-blur-sm border border-blue-700/30 rounded-xl shadow-2xl hover:shadow-teal-500/50 transition-all duration-500 p-8 flex flex-col items-center text-center"
                >
                  <p className="text-blue-100 italic mb-4 flex-1 text-base leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="mt-auto">
                    <p className="text-white font-semibold">{testimonial.author}</p>
                    <p className="text-teal-400 text-sm">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call to Action Section - LIGHT */}
        <section className="py-20 md:py-28 bg-gray-100 text-gray-800 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 drop-shadow-sm"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-xl text-gray-600 mb-10 leading-relaxed"
            >
              Let&apos;s discuss your project and discover how BabbageTechnologies can help you achieve your goals.
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
