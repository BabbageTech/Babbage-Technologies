"use client";

import emailjs from "emailjs-com";
import { Mail, MessageSquare, Send, User } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const SERVICE_ID = "service_w0vaxqh";
  const TEMPLATE_ID = "template_3qekbzp";
  const USER_ID = "NiawJSFgdDfxZx5Wa";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields.");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then(() => {
        toast.success("Message sent. We'll reply within 24 hours.", {
          duration: 4000,
          position: "top-center",
          style: { background: "#3E6259", color: "#EFECE3" },
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        toast.error("Message failed to send. Please try again.", {
          duration: 4000,
          position: "top-center",
          style: { background: "#A3402F", color: "#EFECE3" },
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="w-full">
      <div className="bg-ink border border-ink-line rounded-card overflow-hidden">
        <div className="px-8 py-6 border-b border-ink-line">
          <h3 className="font-display text-2xl text-text-paper mb-1">Send a message</h3>
          <p className="text-text-paper-muted text-sm">
            Tell us about the project. We reply within one business day.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <Field icon={User} label="Your full name" fieldId="name">
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Jane Wanjiru"
              className="w-full pl-11 pr-4 py-3 bg-ink-soft border border-ink-line rounded-button focus:outline-none focus-visible:ring-2 focus-visible:ring-brass transition-all duration-200 text-text-paper placeholder:text-text-paper-muted/50"
            />
          </Field>

          <Field icon={Mail} label="Email address" fieldId="email">
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@company.com"
              className="w-full pl-11 pr-4 py-3 bg-ink-soft border border-ink-line rounded-button focus:outline-none focus-visible:ring-2 focus-visible:ring-brass transition-all duration-200 text-text-paper placeholder:text-text-paper-muted/50"
            />
          </Field>

          <Field icon={MessageSquare} label="Your message" fieldId="message" alignTop>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="What are you building?"
              rows={5}
              className="w-full pl-11 pr-4 py-3 bg-ink-soft border border-ink-line rounded-button focus:outline-none focus-visible:ring-2 focus-visible:ring-brass transition-all duration-200 text-text-paper placeholder:text-text-paper-muted/50 resize-none"
            />
          </Field>

          {error && <p className="text-sm text-[#c76b56] font-medium">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center gap-2 bg-brass text-text-paper font-mono text-sm tracking-wide uppercase py-3.5 rounded-button transition-all duration-300 ${
              loading ? "opacity-60 cursor-not-allowed" : "hover:bg-brass-hover"
            }`}
          >
            {loading ? (
              <>
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending
              </>
            ) : (
              <>
                Send message <Send className="w-4 h-4" />
              </>
            )}
          </button>

          <p className="text-center text-text-paper-muted/70 text-xs pt-1">
            We respect your privacy. Your information is never shared.
          </p>
        </form>
      </div>
    </div>
  );
}

function Field({
  icon: Icon,
  label,
  fieldId,
  alignTop,
  children,
}: {
  icon: React.ElementType;
  label: string;
  fieldId: string;
  alignTop?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={fieldId} className="plate-label text-text-paper-muted mb-2 block">
        {label}
      </label>
      <div className="relative">
        <div className={`absolute left-4 ${alignTop ? "top-3.5" : "top-1/2 -translate-y-1/2"} text-text-paper-muted`}>
          <Icon className="w-4 h-4" />
        </div>
        {children}
      </div>
    </div>
  );
}
