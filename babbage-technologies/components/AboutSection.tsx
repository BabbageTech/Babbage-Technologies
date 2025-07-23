"use client";

import { Button } from "@/components/ui/button";
// Removed unused Card components imports
import { CoreValue } from "@/types"; // Ensure CoreValue type is correctly defined in types/index.ts
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
  Lock, // Ensure Star is imported
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

  // Removed awardsRecognitions as per request
  // const awardsRecognitions = [
  //   { src: "https://placehold.co/150x80/2563EB/FFFFFF?text=AWS+Partner", alt: "AWS Partner Badge" },
  //   { src: "https://placehold.co/150x80/2563EB/FFFFFF?text=ISO+Certified", alt: "ISO Compliance Badge" },
  //   { src: "https://placehold.co/150x80/2563EB/FFFFFF?text=GoodFirms+Badge", alt: "GoodFirms Badge" },
  //   { src: "https://placehold.co/150x80/2563EB/FFFFFF?text=Responsive+Design", alt: "Responsive Design Award 2025" },
  //   { src: "https://placehold.co/150x80/2563EB/FFFFFF?text=BI+Services", alt: "Business Intelligence Services 2024" },
  //   { src: "https://placehold.co/150x80/2563EB/FFFFFF?text=Mobile+Dev", alt: "Mobile Software Development 2025" },
  //   { src: "https://placehold.co/150x80/2563EB/FFFFFF?text=IoT+Services", alt: "IoT Services 2025" },
  //   { src: "https://placehold.co/150x80/2563EB/FFFFFF?text=Custom+Web", alt: "Custom Web Design Development 2025" },
  // ];


  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow">
        {/* About BabbageTechnologies (Hero-like) Section */}
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
              viewport={{ once: true }}
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

        {/* Why Choose Us (Moved to an earlier position) */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 to-indigo-950 text-white relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-1000"></div>
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-3000"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="flex flex-col-reverse lg:flex-row items-center gap-12"
            >
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
                  Why Choose Us?
                </h2>
                <p className="text-xl text-blue-200 leading-relaxed">
                  We deliver future-proof software and cloud solutions built to last. Our agile processes, transparent communication, and senior expertise ensure project success.
                </p>
                <ul className="space-y-3 text-blue-100 text-lg">
                  <li>
                    <CheckCircle className="inline w-6 h-6 mr-3 text-teal-400" />
                    Accurate cost estimation and budget control
                  </li>
                  <li>
                    <CheckCircle className="inline w-6 h-6 mr-3 text-teal-400" />
                    Competence-based team selection
                  </li>
                  <li>
                    <CheckCircle className="inline w-6 h-6 mr-3 text-teal-400" />
                    Comprehensive risk management
                  </li>
                  <li>
                    <CheckCircle className="inline w-6 h-6 mr-3 text-teal-400" />
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
                viewport={{ once: true }}
                className="flex-1 relative h-80 md:h-96 w-full overflow-hidden rounded-xl border border-blue-700/30 group bg-white/10 backdrop-blur-sm shadow-2xl shadow-blue-500/20"
              >
                <Image
                  src="/about-image.jpg"
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

        {/* Our Impact (Stats) Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 to-blue-950 text-gray-100 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12 drop-shadow-lg"
            >
              Our Impact in Numbers
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
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
                    className="bg-white/10 backdrop-blur-sm border border-blue-700/30 rounded-xl shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-500 p-6 flex flex-col items-center text-center"
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

        {/* Who We Are & Our Commitment */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 to-indigo-950 text-white relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-1000"></div>
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-3000"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="grid md:grid-cols-2 gap-12"
            >
              <motion.div
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-blue-700/30 transition-all duration-500 hover:shadow-blue-500/30 hover:scale-[1.02]"
              >
                <h3 className="text-3xl font-bold text-blue-300 mb-4">
                  Who We Are
                </h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Babbage Technologies, a leading software development company, delivers IT solutions and services to established companies that need custom software for further business growth. With a deep understanding of modern technologies, transparent processes, and strong expertise in business domains, we implement comprehensive projects and deliver high-end web, mobile, and enterprise solutions.
                </p>
                <h4 className="text-xl font-bold text-blue-300 mt-6 mb-3">Our Cultural Code:</h4>
                <ul className="list-disc list-inside text-lg text-gray-200 space-y-2">
                  <li>Be transparent</li>
                  <li>Focus on business value delivery</li>
                  <li>Teamwork & cooperation</li>
                </ul>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-blue-700/30 transition-all duration-500 hover:shadow-blue-500/30 hover:scale-[1.02]"
              >
                <h3 className="text-3xl font-bold text-blue-300 mb-4">
                  Our Commitment
                </h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  We don’t just build software—we craft solutions that drive progress. Every project we take on is a testament to our commitment to quality, innovation, and delivering real value. Our cloud-first approach ensures unparalleled security, scalability, and dedicated support, guiding every client through their unique digital transformation journey. Client success is our ultimate reward.
                </p>
                <h4 className="text-xl font-bold text-blue-300 mt-6 mb-3">Leadership Perspective:</h4>
                <p className="text-lg text-gray-200 leading-relaxed italic">
                  &quot;At Babbage Technologies, we don’t just develop software – we craft solutions that drive businesses forward. Every project we take on is a testament to our commitment to quality, innovation, and delivering real value. Our Clients’ success is our ultimate reward.&quot;
                </p>
                <p className="text-md text-blue-300 mt-2">- Simon Keya, CTO & Founder</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 to-blue-950 text-gray-100 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
                Our Guiding Principles
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
                Our mission and vision define our purpose and inspire our journey towards technological excellence and client empowerment.
              </p>
            </motion.div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="grid md:grid-cols-2 gap-10"
            >
              <motion.div
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-blue-700/30 transition-all duration-500 hover:shadow-blue-500/30 hover:scale-[1.02]"
              >
                <h4 className="text-3xl font-bold text-blue-300 mb-3">
                  Our Mission
                </h4>
                <p className="text-lg leading-relaxed opacity-90 text-gray-200">
                  To empower businesses with intelligent, secure, and scalable
                  technology solutions, paving the way for sustainable digital transformation
                  and unparalleled operational efficiency.
                </p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-blue-700/30 transition-all duration-500 hover:shadow-blue-500/30 hover:scale-[1.02]"
              >
                <h4 className="text-3xl font-bold text-blue-300 mb-3">
                  Our Vision
                </h4>
                <p className="text-lg leading-relaxed opacity-90 text-gray-200">
                  To become a globally recognized and trusted partner for software and cloud
                  innovation, consistently delivering excellence and setting new benchmarks
                  across diverse industries.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Our Core Values */}
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
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12 drop-shadow-lg"
            >
              Our Core Values
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {coreValues.map((value: CoreValue, i: number) => {
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
                    <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">{value.title}</h3>
                    <p className="text-base text-blue-200 leading-relaxed">{value.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Our Guarantees for Success */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 to-blue-950 text-gray-100 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12 drop-shadow-lg"
            >
              What We Do to Guarantee Project Success
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {guarantees.map((item, i) => {
                const IconComponent = IconMap[item.icon as keyof typeof IconMap];
                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white/10 backdrop-blur-sm border border-blue-700/30 rounded-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 p-6 flex flex-col items-center text-center"
                  >
                    <div className="p-4 bg-blue-700/20 rounded-full shadow-inner border border-blue-400/50 mb-4">
                      {IconComponent && <IconComponent className="w-8 h-8 text-teal-400" />}
                    </div>
                    <h4 className="font-bold text-xl md:text-2xl text-white mb-2">{item.title}</h4>
                    <p className="text-base text-blue-200 leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Our Services (from previous About) */}
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
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12 drop-shadow-lg"
            >
              Our Core Services
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
            >
              {servicesOffered.map((service, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white/10 backdrop-blur-sm border border-blue-700/30 rounded-xl shadow-2xl hover:shadow-teal-500/50 transition-all duration-500 p-6 flex flex-col items-center text-center"
                >
                  {/* Icons are not defined for these services in the original snippet, so using a generic one */}
                  <div className="p-4 bg-blue-700/20 rounded-full shadow-inner border border-blue-400/50 mb-4">
                    <Code className="w-8 h-8 text-teal-400" /> {/* Generic icon */}
                  </div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">{service.title}</h3>
                  <p className="text-base text-blue-200 leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Our Leadership Team */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 to-blue-950 text-gray-100 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12 drop-shadow-lg"
            >
              Meet Our Leadership Team
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {managementTeam.map((member, i) => (
                <motion.div
                  variants={itemVariants}
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white/10 backdrop-blur-sm border border-blue-700/30 rounded-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 p-6 flex flex-col items-center text-center"
                >
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="rounded-full mb-4 border-4 border-teal-400 shadow-lg"
                  />
                  <h4 className="text-xl font-bold text-white">{member.name}</h4>
                  <p className="text-sm text-blue-200">{member.title}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link href="/contact">
                <Button
                  aria-label="Book a Meeting with Our Team"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold shadow-[0_0_15px_rgba(13,148,136,0.6)] transition-all duration-300 transform hover:scale-105"
                >
                  Book a Meeting with Our Team
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* What Our Clients Say (Testimonials) */}
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
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12 drop-shadow-lg"
            >
              What Our Clients Say
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {clientTestimonials.map((testimonial, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white/10 backdrop-blur-sm border border-blue-700/30 rounded-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 p-6 flex flex-col"
                >
                  <p
                    className="text-blue-200 italic mb-4 flex-1 text-base leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: testimonial.quote }}
                  />
                  <div className="mt-auto">
                    <p className="text-white font-semibold">{testimonial.author}</p>
                    <p className="text-teal-400 text-sm">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
  
    </div>
  );
}
