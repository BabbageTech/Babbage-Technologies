"use client";

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react'; // Using LucideReact for consistency
import { ContactForm } from './ContactForm'; // Assuming ContactForm is in the same directory

export default function ContactPage() { // Renamed to ContactPage for clarity
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Assuming Header and Footer are imported and used in layout.tsx or directly here */}
      {/* <Header /> */}
      <main className="flex-grow">
        {/* Hero Section - Contact Us */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 to-indigo-950 text-white relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          </div>

          <motion.header
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="text-center mb-16 relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
              Contact Us
            </h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
              We’re just a message away. Whether it’s a partnership opportunity, a technical consultation, or a service request — reach out today!
            </p>
          </motion.header>
        </section>

        {/* Main Contact Content - Grid Layout */}
        <section className="py-20 md:py-28 bg-gray-100 text-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <motion.aside
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Welcome Message */}
              <div className="bg-blue-900/10 text-blue-900 p-5 rounded-xl border-l-4 border-blue-700 shadow-md">
                <h3 className="text-xl font-bold mb-2 text-blue-800">Let’s Collaborate</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Our expert team is always eager to hear from you. We provide fast responses, dedicated support, and custom-tailored solutions for your software and cloud needs.
                </p>
              </div>

              {/* Why Choose Us */}
              <div className="bg-teal-600/10 text-teal-600 p-5 rounded-xl shadow-md border-l-4 border-teal-500">
                <h3 className="text-lg font-semibold mb-1 text-teal-700">Why Clients Trust Us</h3>
                <ul className="list-disc pl-5 text-base text-gray-800 space-y-1">
                  <li>Proven excellence in service delivery</li>
                  <li>Quick turnaround and reliable support</li>
                  <li>Customized software & cloud solutions</li>
                  <li>Certified and experienced specialists</li>
                </ul>
              </div>

              {/* Contact Details - Adjusted for better visibility on light background */}
              <div className="bg-white shadow-xl p-6 rounded-xl border border-gray-200 text-gray-800">
                <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                  Contact Information
                </h2>

                <div className="space-y-5 text-gray-700">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Office Address</h4>
                      <p>1234 Innovation Street, Nairobi, Kenya</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone Number</h4>
                      <p>+254711762682</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Email Address</h4>
                      <p>info@babbagetechnologies.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours Note - Adjusted for better visibility on light background */}
              <div className="bg-white border border-gray-200 p-4 rounded-xl text-base text-gray-700 shadow-md">
                <p>
                  ⏰ <strong>Business Hours:</strong><br />
                  Monday – Friday: 9:00 AM – 6:00 PM<br />
                  Saturday: 10:00 AM – 2:00 PM<br />
                  Sunday & Public Holidays: Closed
                </p>
              </div>
            </motion.aside>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm shadow-xl p-8 rounded-xl border border-blue-700/30"
            >
              <ContactForm />
            </motion.div>
          </div>
        </section>

        {/* Embedded Google Map */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 to-indigo-950 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12 drop-shadow-lg"
            >
              Find Us on the Map
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-10 rounded-xl overflow-hidden shadow-lg border border-blue-700/50"
            >
              <iframe
                title="Babbage Technologies Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.6357319562906!2d36.821946956712226!3d-1.2920654999796607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10e4c4668b3b%3A0xb07f50f728ad68a1!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1631264222554!5m2!1sen!2ske"
                width="100%"
                height="400"
                loading="lazy"
                allowFullScreen
                className="w-full border-0"
              ></iframe>
            </motion.div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
