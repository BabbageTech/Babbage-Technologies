"use client";

import { motion, Variants } from "framer-motion";
import {
  Award,
  BrainCircuit,
  CalendarCheck,
  CheckCircle,
  Clock,
  Code,
  DollarSign,
  FileText,
  Globe,
  Handshake,
  Lightbulb,
  Lock,
  MapPin,
  Palette,
  RefreshCcw,
  Server,
  ShieldCheck,
  Star,
  TrendingUp,
  UserCheck,
  Users2,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

// Icon mapping for dynamic rendering
const IconMap = {
  CheckCircle,
  BrainCircuit,
  ShieldCheck,
  Users2,
  Star,
  Award,
  Globe,
  Clock,
  MapPin,
  Lightbulb,
  TrendingUp,
  DollarSign,
  CalendarCheck,
  FileText,
  Code,
  UserCheck,
  Handshake,
  Zap,
  Lock,
  RefreshCcw,
  Palette,
  Server,
};

// Framer Motion variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Types
interface CoreValue {
  title: string;
  desc: string;
  icon: keyof typeof IconMap;
}

interface Guarantee {
  title: string;
  desc: string;
  icon: keyof typeof IconMap;
}

interface Service {
  title: string;
  desc: string;
}

interface TeamMember {
  name: string;
  title: string;
  img: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface Stat {
  icon: keyof typeof IconMap;
  value: string;
  label: string;
}

export default function AboutPage() {
  const coreValues: CoreValue[] = [
    {
      title: "Integrity",
      desc: "We foster trust through honest communication, ethical practices, and transparent interactions.",
      icon: "CheckCircle",
    },
    {
      title: "Innovation",
      desc: "Our collaborative environment encourages innovative solutions through collective intelligence.",
      icon: "BrainCircuit",
    },
    {
      title: "Reliability",
      desc: "We deliver dependable technology with long-term stability and robust performance.",
      icon: "ShieldCheck",
    },
    {
      title: "Customer Focus",
      desc: "We prioritize long-term partnerships and align solutions with your business goals.",
      icon: "Users2",
    },
    {
      title: "Agility",
      desc: "Our agile processes ensure swift adaptation to changing client needs and market demands.",
      icon: "Zap",
    },
    {
      title: "Security First",
      desc: "Stringent data protection measures safeguard your information, ensuring peace of mind.",
      icon: "Lock",
    },
    {
      title: "Continuous Growth",
      desc: "We relentlessly pursue excellence and innovation, exceeding client expectations.",
      icon: "RefreshCcw",
    },
    {
      title: "Global Perspective",
      desc: "We respect cultural diversity, delivering solutions that work across borders.",
      icon: "Globe",
    },
  ];

  const guarantees: Guarantee[] = [
    {
      title: "Accurate Cost Estimation",
      desc: "Detailed analysis of business goals for precise budget and timeline assessments.",
      icon: "DollarSign",
    },
    {
      title: "Expert Team Selection",
      desc: "Matching the best-suited experts to each role based on skills and experience.",
      icon: "Users2",
    },
    {
      title: "Risk Management",
      desc: "Proactive identification and mitigation of risks for project stability.",
      icon: "ShieldCheck",
    },
    {
      title: "Agile Delivery",
      desc: "Flexible, iterative approach ensuring timely delivery and continuous improvement.",
      icon: "Zap",
    },
    {
      title: "Budget Control",
      desc: "Accurate scoping and prioritization to prevent cost overruns.",
      icon: "TrendingUp",
    },
    {
      title: "On-Time Delivery",
      desc: "Structured processes to meet deadlines without compromising quality.",
      icon: "CalendarCheck",
    },
    {
      title: "Transparent Reporting",
      desc: "Weekly updates, demos, and detailed timesheet reports.",
      icon: "FileText",
    },
    {
      title: "Knowledge Transfer",
      desc: "Seamless documentation and knowledge sharing for long-term success.",
      icon: "Lightbulb",
    },
  ];

  const servicesOffered: Service[] = [
    { title: "Discovery & Strategy", desc: "Validate ideas, choose technologies, and plan releases to minimize risks." },
    { title: "UI/UX Design", desc: "Craft intuitive, user-friendly interfaces for seamless experiences." },
    { title: "Custom Software Development", desc: "Build scalable web, mobile, and ERP solutions tailored to your needs." },
    { title: "QA & Testing", desc: "Ensure flawless performance with rigorous quality assurance." },
    { title: "Cloud & DevOps", desc: "Scalable infrastructure and automated deployments." },
    { title: "Staff Augmentation", desc: "Augment your team with our expert developers." },
  ];

  const managementTeam: TeamMember[] = [
    { name: "Simon Keya", title: "CTO & Co-Founder", img: "https://placehold.co/400x400/1D3557/FFFFFF?text=SK" },
    { name: "Kelvin Wekesa", title: "COO & Co-Founder", img: "https://placehold.co/400x400/1D3557/FFFFFF?text=KW" },
    { name: "Elena Safonova", title: "Head of QA", img: "https://placehold.co/400x400/1D3557/FFFFFF?text=ES" },
    { name: "Kate Merzlova", title: "Head of Sales & Marketing", img: "https://placehold.co/400x400/1D3557/FFFFFF?text=KM" },
    { name: "Irina Baryshnaya", title: "Head of Project Management", img: "https://placehold.co/400x400/1D3557/FFFFFF?text=IB" },
  ];

  const stats: Stat[] = [
    { icon: "Star", value: "98%", label: "Client Satisfaction" },
    { icon: "Award", value: "50+", label: "Projects Delivered" },
    { icon: "Globe", value: "12+", label: "Industries Served" },
    { icon: "Users2", value: "85%", label: "Senior Specialists" },
    { icon: "Clock", value: "5+", label: "Avg. Client Engagement" },
    { icon: "TrendingUp", value: "40%", label: "Avg. Efficiency Gain" },
  ];

  const testimonials: Testimonial[] = [
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
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-primary">
          {/* Animated background elements */}
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
                <span className="text-sm text-white/90">Enterprise Software Partners</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                About Barbage
                <span className="text-accent"> Technologies</span>
              </h1>
              
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Empowering businesses through innovative software, robust cloud technology, and
                enterprise-grade systems tailored for your growth and success.
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

        {/* ========== WHY CHOOSE US SECTION ========== */}
        <section className="py-24 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="flex flex-col-reverse lg:flex-row items-center gap-16"
            >
              <motion.div variants={itemVariants} className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2">
                  <span className="text-sm font-semibold text-primary">Why Choose Us</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-text-primary">
                  Your Trusted Technology Partner
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed">
                  We deliver future-proof software and cloud solutions built to last. Our agile processes, 
                  transparent communication, and senior expertise ensure project success from start to finish.
                </p>
                <ul className="space-y-4">
                  {[
                    "Accurate cost estimation and budget control",
                    "Competence-based team selection",
                    "Comprehensive risk management",
                    "Agile delivery with regular reporting",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link href="/contact">
                    <Button className="bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-button font-semibold transition-all duration-300 hover:shadow-lg">
                      Get in Touch
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="outline" className="px-8 py-3 rounded-button font-semibold">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="flex-1 relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl" />
                <div className="relative bg-surface rounded-2xl overflow-hidden shadow-card border border-border">
                  <Image
                    src="/about-hero.jpg"
                    alt="Barbage Technologies Team"
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ========== STATS SECTION ========== */}
        <section className="py-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
            >
              Our Impact in Numbers
            </motion.h2>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6"
            >
              {stats.map((stat, idx) => {
                const IconComponent = IconMap[stat.icon];
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm rounded-card p-6 text-center border border-white/20"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      {IconComponent && <IconComponent className="w-6 h-6 text-accent" />}
                    </div>
                    <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                    <p className="text-sm text-white/70">{stat.label}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ========== WHO WE ARE SECTION ========== */}
        <section className="py-24 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={itemVariants} className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2">
                  <span className="text-sm font-semibold text-primary">Our Story</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-text-primary">
                  Who We Are & Our Commitment
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Barbage Technologies is a leading software development solutions provider dedicated to 
                  empowering businesses with cutting-edge technology. Founded on principles of innovation, 
                  integrity, and client-centricity, we specialize in crafting custom software, optimizing 
                  cloud infrastructure, and driving digital transformation.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Our commitment extends beyond just code. We believe in building lasting partnerships, 
                  understanding your unique challenges, and delivering solutions that exceed expectations. 
                  With a team of seasoned experts, we navigate the complexities of the digital landscape 
                  to provide secure, scalable, and impactful results.
                </p>
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-button font-semibold">
                    Learn About Our Approach →
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-2xl blur-2xl" />
                <div className="relative bg-surface rounded-2xl overflow-hidden shadow-card border border-border">
                  <Image
                    src="/commitment.jpg"
                    alt="Our Commitment"
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ========== CORE VALUES SECTION ========== */}
        <section className="py-24 md:py-32 bg-surface-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-semibold text-primary">Our Foundation</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-text-secondary">
                The principles that guide everything we do, from code to client relationships.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {coreValues.map((value, idx) => {
                const IconComponent = IconMap[value.icon];
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="bg-surface rounded-card p-6 border border-border hover:shadow-card-hover transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      {IconComponent && <IconComponent className="w-6 h-6 text-primary" />}
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">{value.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{value.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ========== GUARANTEES SECTION ========== */}
        <section className="py-24 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-semibold text-accent">Our Promise</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                Our Guarantees
              </h2>
              <p className="text-lg text-text-secondary">
                When you partner with us, you can count on these commitments.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {guarantees.map((guarantee, idx) => {
                const IconComponent = IconMap[guarantee.icon];
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="bg-surface rounded-card p-6 border border-border text-center"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      {IconComponent && <IconComponent className="w-6 h-6 text-accent" />}
                    </div>
                    <h3 className="text-lg font-bold text-text-primary mb-2">{guarantee.title}</h3>
                    <p className="text-text-secondary text-sm">{guarantee.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ========== SERVICES SECTION ========== */}
        <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-semibold text-accent">Our Expertise</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Services We Offer
              </h2>
              <p className="text-lg text-white/80">
                End-to-end solutions for your digital transformation journey.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {servicesOffered.map((service, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-sm rounded-card p-6 border border-white/20 hover:border-accent/50 transition-all"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ========== TEAM SECTION ========== */}
        <section className="py-24 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-semibold text-primary">Leadership</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                Meet Our Management Team
              </h2>
              <p className="text-lg text-text-secondary">
                Industry veterans committed to your success.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
            >
              {managementTeam.map((member, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-surface rounded-card p-6 border border-border text-center hover:shadow-card-hover transition-all"
                >
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20" />
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="relative rounded-full object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary">{member.name}</h3>
                  <p className="text-sm text-text-secondary">{member.title}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ========== TESTIMONIALS SECTION ========== */}
        <section className="py-24 md:py-32 bg-surface-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-semibold text-accent">Testimonials</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-text-secondary">
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
                  className="bg-surface rounded-card p-8 border border-border hover:shadow-card-hover transition-all"
                >
                  <div className="text-accent text-4xl mb-4">&quot;</div>
                  <p className="text-text-secondary leading-relaxed mb-6">{testimonial.quote}</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-bold text-text-primary">{testimonial.author}</p>
                    <p className="text-sm text-text-secondary">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ========== CTA SECTION ========== */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-primary to-primary-hover relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/80 mb-10 leading-relaxed">
                Let&apos;s discuss your project and discover how Barbage Technologies can help you achieve your goals.
              </p>
              <Link href="/contact">
                <Button className="bg-accent hover:bg-accent-hover text-white px-10 py-4 rounded-button font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
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