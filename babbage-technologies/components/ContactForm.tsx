"use client";

import { Mail, MessageSquare, User, Send } from 'lucide-react';
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

    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address.');
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
        toast.success('Message sent successfully! 🚀', {
          duration: 4000,
          position: 'top-center',
          style: {
            background: '#10B981',
            color: '#fff',
          },
        });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        toast.error('Failed to send message. Please try again.', {
          duration: 4000,
          position: 'top-center',
          style: {
            background: '#E11D48',
            color: '#fff',
          },
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="w-full">
      <Toaster />
      <div className="bg-surface rounded-card shadow-card-lg border border-border overflow-hidden">
        {/* Form Header */}
        <div className="bg-gradient-to-r from-primary to-primary-hover px-8 py-6">
          <h3 className="text-2xl font-bold text-white mb-1">Send us a Message</h3>
          <p className="text-white/70 text-sm">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Name Input */}
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary group-focus-within:text-primary transition-colors">
              <User className="w-5 h-5" />
            </div>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder=" "
              className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-text-primary placeholder-transparent"
            />
            <label
              htmlFor="name"
              className="absolute left-12 top-1/2 -translate-y-1/2 text-text-tertiary transition-all duration-200 pointer-events-none peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary"
            >
              Your Full Name
            </label>
          </div>

          {/* Email Input */}
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary group-focus-within:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder=" "
              className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-text-primary placeholder-transparent"
            />
            <label
              htmlFor="email"
              className="absolute left-12 top-1/2 -translate-y-1/2 text-text-tertiary transition-all duration-200 pointer-events-none peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary"
            >
              Email Address
            </label>
          </div>

          {/* Message Textarea */}
          <div className="relative group">
            <div className="absolute left-4 top-4 text-text-tertiary group-focus-within:text-primary transition-colors">
              <MessageSquare className="w-5 h-5" />
            </div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder=" "
              rows={5}
              className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-text-primary placeholder-transparent resize-none"
            />
            <label
              htmlFor="message"
              className="absolute left-12 top-3 text-text-tertiary transition-all duration-200 pointer-events-none peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary"
            >
              Your Message
            </label>
          </div>

          {error && (
            <p className="text-sm text-error font-medium text-center animate-pulse">
              {error}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full group relative overflow-hidden bg-gradient-to-r from-primary to-primary-hover text-white font-semibold py-3 rounded-button transition-all duration-300 ${
              loading ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg hover:scale-[1.02]'
            }`}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </span>
          </button>

          {/* Trust Badge */}
          <p className="text-center text-text-tertiary text-xs pt-4">
            We respect your privacy. Your information is never shared.
          </p>
        </form>
      </div>
    </div>
  );
}