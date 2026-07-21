// Shared content for Babbage Technologies. Centralised so copy stays
// consistent across the home, services, work and about pages.

export const company = {
  name: "Babbage Technologies",
  short: "Babbage",
  tagline: "Software, built the right way.",
  email: "babbagetechnologies@gmail.com",
  supportEmail: "babbagetechnologies@gmail.com",
  phones: ["+254 114 161 768", "+254 768 378 046"],
  address: ["1234 Innovation Street", "Nairobi, Kenya"],
};

export type Service = {
  id: string;
  title: string;
  summary: string;
  detail: string;
  stack: string[];
  deliverables: string[];
};

export const services: Service[] = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    summary: "Rapid development of scalable, maintainable web applications.",
    detail:
      "Bespoke ERP, HMS and line-of-business systems built around how your team actually works, from the first blueprint through to production.",
    stack: ["React.js", "Node.js", "Django", "FastAPI", "Ruby on Rails"],
    deliverables: ["Discovery & planning", "Architecture & data model", "Iterative builds", "Handover & documentation"],
  },
  {
    id: "cloud-devops",
    title: "Cloud Solutions & DevOps",
    summary: "Scalable cloud infrastructure for secure, efficient digital solutions.",
    detail:
      "Infrastructure that scales with demand instead of against it — provisioning, CI/CD pipelines and monitoring set up once, running quietly after.",
    stack: ["Google Cloud", "Docker", "Terraform", "CI/CD"],
    deliverables: ["Infrastructure audit", "Migration & provisioning", "Deployment pipelines", "Uptime monitoring"],
  },
  {
    id: "ui-ux",
    title: "UI/UX Design & Consulting",
    summary: "Crafting intuitive and engaging user experiences that drive adoption.",
    detail:
      "Interfaces designed for the people who use them daily — research-backed flows, accessible components and interaction detail that holds up under real use.",
    stack: ["Figma", "Design systems", "Usability testing"],
    deliverables: ["User research", "Wireframes & prototypes", "Design system", "Usability validation"],
  },
  {
    id: "data-ai",
    title: "Data Analytics & AI",
    summary: "Automation tools to optimise strategies and gather insights.",
    detail:
      "Turning operational data into decisions — dashboards, forecasting and automation that remove manual reporting work from your team's week.",
    stack: ["Python", "Data pipelines", "ML models"],
    deliverables: ["Data audit", "Pipeline & warehousing", "Dashboards", "Model deployment"],
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    summary: "Versatile framework for scalable web, desktop, mobile and cloud solutions.",
    detail:
      "Native-feeling iOS and Android apps sharing a single codebase and design system with your web platform, so every surface stays in sync.",
    stack: ["React Native", "Java", "Swift"],
    deliverables: ["Product spec", "Cross-platform build", "App store submission", "Release support"],
  },
  {
    id: "qa",
    title: "Quality Assurance",
    summary: "Comprehensive risk management with responsible deadlines.",
    detail:
      "Testing built into the pipeline, not bolted on at the end — automated regression, load testing and manual review before anything reaches your users.",
    stack: ["Automated testing", "Load testing", "Manual QA"],
    deliverables: ["Test plan", "Automated test suite", "Load & security testing", "Release sign-off"],
  },
];

export const industries = [
  { name: "Real Estate", desc: "Property management, virtual tours, and real-time listing platforms.", icon: "Home" },
  { name: "Healthcare", desc: "Engaging patient portals and health information systems.", icon: "HeartPulse" },
  { name: "Finance", desc: "Secure wealth management, payment processing, and compliance tools.", icon: "Banknote" },
  { name: "Logistics", desc: "Real-time tracking, route optimisation, and inventory management.", icon: "Truck" },
  { name: "Education", desc: "Engaging e-learning portals and student information systems.", icon: "GraduationCap" },
  { name: "Media & Entertainment", desc: "Streaming platforms and social media tools with minimal downtime.", icon: "Film" },
  { name: "Marketing", desc: "Automation tools to optimise strategies and gather insights.", icon: "Megaphone" },
  { name: "Retail", desc: "Superior shopping experiences with 24/7 availability.", icon: "ShoppingCart" },
];

export const testimonials = [
  {
    quote:
      "Babbage Technologies provided a competitive edge with their well-thought solutions and unwavering commitment to quality. They truly understand business value.",
    author: "Alexander McCaig",
    role: "Co-Founder & CEO, Tartle",
  },
  {
    quote:
      "Their thorough investigation and transparent approach ensured our project was a resounding success. Highly recommended for their professionalism and guidance.",
    author: "Damian Gevertz",
    role: "Founder & CEO, Widgety",
  },
  {
    quote:
      "Babbage Technologies is exceptional in every regard: cost-effectiveness, professionalism, transparency, and their willingness to advise. Invaluable when our idea was still nascent.",
    author: "David Logan",
    role: "Founder, Umergence",
  },
];

export type Project = {
  slug: string;
  client: string;
  industry: string;
  title: string;
  summary: string;
  problem: string;
  approach: string;
  result: string;
  stack: string[];
  year: string;
};

// Representative work — swap in real case studies and client
// permissions as they're finalised.
export const projects: Project[] = [
  {
    slug: "tartle-data-marketplace",
    client: "Tartle",
    industry: "Data & Marketing",
    title: "A data marketplace built for trust at scale",
    summary: "Platform architecture and delivery for a data-exchange marketplace connecting individuals and buyers.",
    problem: "Tartle needed infrastructure that could verify, price and exchange personal data at volume, without compromising on compliance or speed.",
    approach: "We rebuilt core platform services on a cloud-native architecture, introduced automated QA into the release pipeline, and designed the transaction flows end to end.",
    result: "A platform its team could scale and ship on confidently, with delivery cadence and reliability that held up under real growth.",
    stack: ["Node.js", "React.js", "Google Cloud", "PostgreSQL"],
    year: "2023",
  },
  {
    slug: "widgety-launch",
    client: "Widgety",
    industry: "Software / SaaS",
    title: "From concept to first release",
    summary: "End-to-end product build for an early-stage SaaS company, from technical discovery through launch.",
    problem: "Widgety had a validated idea and no engineering team — they needed a technical partner who could move from whiteboard to shipped product.",
    approach: "We ran discovery workshops to pin down scope, then delivered the MVP in staged, demoable milestones with regular client reviews.",
    result: "A working product in market ahead of schedule, with documentation and architecture handed over cleanly for the client's in-house team.",
    stack: ["Django", "React.js", "Docker"],
    year: "2022",
  },
  {
    slug: "umergence-advisory-build",
    client: "Umergence",
    industry: "Consulting / Knowledge Tools",
    title: "Advisory and build for an early-stage platform",
    summary: "Technical advisory paired with hands-on development while the product direction was still taking shape.",
    problem: "Umergence needed a partner comfortable working alongside an evolving spec, not just executing a fixed one.",
    approach: "We paired a small senior team directly with the founder, iterating on architecture and UX in parallel with the product itself.",
    result: "A validated, cost-effective build that gave the founder a working product to bring to investors and early users.",
    stack: ["FastAPI", "React.js", "Figma"],
    year: "2022",
  },
  {
    slug: "logistics-fleet-platform",
    client: "Confidential — Logistics",
    industry: "Logistics",
    title: "Real-time fleet visibility for a regional carrier",
    summary: "A dispatch and tracking platform replacing spreadsheets with live route and inventory data.",
    problem: "Dispatch decisions were made on stale, manually updated spreadsheets, costing hours of coordination every week.",
    approach: "We built a real-time tracking and route-optimisation platform integrated with the client's existing fleet hardware.",
    result: "Dispatch time cut significantly and live visibility into every vehicle's status, replacing manual check-in calls.",
    stack: ["React.js", "Node.js", "Google Cloud", "IoT integration"],
    year: "2024",
  },
  {
    slug: "healthcare-patient-portal",
    client: "Confidential — Healthcare",
    industry: "Healthcare",
    title: "A patient portal built around appointments, not paperwork",
    summary: "A patient-facing portal and records system for a multi-branch clinic network.",
    problem: "Patients had no way to book, reschedule or view results online, and staff spent hours a day on phone-based scheduling.",
    approach: "We designed and built a patient portal with booking, secure records access and staff-facing scheduling tools, integrated with the clinic's existing systems.",
    result: "Phone-based scheduling load dropped sharply, and patients gained self-service access to their own records for the first time.",
    stack: ["Django", "React.js", "PostgreSQL"],
    year: "2023",
  },
  {
    slug: "retail-storefront-rebuild",
    client: "Confidential — Retail",
    industry: "Retail",
    title: "An e-commerce rebuild for a growing regional retailer",
    summary: "A ground-up storefront and inventory rebuild ahead of a national expansion.",
    problem: "The client's existing storefront couldn't handle catalogue growth or peak-season traffic without frequent downtime.",
    approach: "We re-platformed the storefront, rebuilt inventory sync with their warehouse system, and load-tested for seasonal peaks.",
    result: "Zero downtime through the following peak season, with a catalogue and checkout flow ready for national rollout.",
    stack: ["React.js", "FastAPI", "Google Cloud"],
    year: "2024",
  },
];

export type PricingPlan = {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    title: "Individual",
    price: "Ksh 15,000+",
    features: [
      "1 web or mobile app",
      "Basic cloud hosting",
      "Email support",
      "1 user licence",
      "Standard UI/UX design",
    ],
  },
  {
    title: "Businesses",
    price: "Ksh 35,000+",
    features: [
      "Standard cloud hosting",
      "Priority support",
      "5 user licences",
      "Advanced UI/UX design",
    ],
    isPopular: true,
  },
  {
    title: "Institution",
    price: "Ksh 100,000+",
    features: [
      "Custom system apps",
      "Premium cloud hosting",
      "24/7 support",
      "Unlimited user licences",
      "Enterprise UI/UX design",
    ],
  },
  {
    title: "Enterprise",
    price: "Custom",
    features: [
      "Multiple applications",
      "Dedicated cloud servers",
      "Dedicated account manager",
      "Custom integrations & audits",
      "SLA guarantee",
    ],
  },
];

export const stats = [
  { value: "50+", label: "Projects delivered" },
  { value: "98%", label: "Client satisfaction" },
  { value: "40%", label: "Avg. efficiency gain" },
  { value: "24/7", label: "Support available" },
];

export const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];
