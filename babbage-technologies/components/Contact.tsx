"use client";

import { motion } from "framer-motion";
import {
    Facebook,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Twitter,
} from "lucide-react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-blue-700 max-w-2xl mx-auto">
            Whether you’re a startup, institution, or enterprise — let’s build something great together!
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Left: Form */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-blue-100">
            <h3 className="text-2xl font-semibold text-blue-800 mb-6">
              Send Us a Message
            </h3>
            <ContactForm />
          </div>

          {/* Right: Info */}
          <div className="space-y-10">
            {/* Contact Info */}
            <div className="space-y-5">
              <h3 className="text-xl font-semibold text-blue-800">
                Contact Information
              </h3>
              <div className="flex items-start gap-4 text-blue-700">
                <Mail className="w-5 h-5 mt-1" />
                <a
                  href="mailto:info@babbagetech.com"
                  className="hover:underline"
                >
                  info@babbagetech.com
                </a>
              </div>
              <div className="flex items-start gap-4 text-blue-700">
                <Phone className="w-5 h-5 mt-1" />
                <a href="tel:+1234567890" className="hover:underline">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-start gap-4 text-blue-700">
                <MapPin className="w-5 h-5 mt-1" />
                <span>
                  123 Tech Avenue, Innovation City,
                  <br />
                  Techland 45678
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                Connect with Us
              </h3>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-800 transition"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-800 transition"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-800 transition"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Embedded Map */}
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                Our Location
              </h3>
              <div className="w-full h-64 rounded-md overflow-hidden border border-blue-200">
                <iframe
                  className="w-full h-full"
                  src="https://maps.google.com/maps?q=San+Francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                  title="Babbage Technologies Location"
                ></iframe>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
