'use client';

import { EnvelopeIcon, PencilSquareIcon, UserIcon } from '@heroicons/react/24/outline';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const SERVICE_ID = 'service_w0vaxqh';
  const TEMPLATE_ID = 'template_3qekbzp';
  const USER_ID = 'NiawJSFgdDfxZx5Wa';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }

    setError('');
    setLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then(() => {
        toast.success('Message sent successfully! 🚀');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        toast.error('Failed to send message. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="w-full px-4">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-white border border-blue-100 max-w-2xl mx-auto shadow-lg rounded-2xl p-6 md:p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-2">
          Let us Connect
        </h2>
        <p className="text-center text-blue-700 mb-8">
          Have a question or a project in mind? Fill in the form and we’ll respond shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div className="relative">
            <UserIcon className="absolute left-3 top-3.5 w-5 h-5 text-blue-500" />
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="peer w-full pl-11 pr-4 py-3 rounded-lg border border-blue-200 bg-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition"
            />
            <label
              htmlFor="name"
              className="absolute left-11 top-2 text-sm text-blue-600 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-blue-400 transition-all peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
            >
              Your Name
            </label>
          </div>

          {/* Email Input */}
          <div className="relative">
            <EnvelopeIcon className="absolute left-3 top-3.5 w-5 h-5 text-blue-500" />
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="peer w-full pl-11 pr-4 py-3 rounded-lg border border-blue-200 bg-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition"
            />
            <label
              htmlFor="email"
              className="absolute left-11 top-2 text-sm text-blue-600 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-blue-400 transition-all peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
            >
              Email Address
            </label>
          </div>

          {/* Message Textarea */}
          <div className="relative">
            <PencilSquareIcon className="absolute left-3 top-3.5 w-5 h-5 text-blue-500" />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message..."
              rows={5}
              className="peer w-full pl-11 pr-4 py-3 rounded-lg border border-blue-200 bg-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm resize-none transition"
            />
            <label
              htmlFor="message"
              className="absolute left-11 top-2 text-sm text-blue-600 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-blue-400 transition-all peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
            >
              Your Message
            </label>
          </div>

          {error && (
            <p className="text-sm text-red-600 font-medium text-center animate-pulse">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading ? 'opacity-60 cursor-not-allowed' : ''
            } bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full transition duration-300 shadow-md hover:shadow-lg tracking-wide`}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}
