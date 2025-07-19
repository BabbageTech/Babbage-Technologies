"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("your-formspree-id"); // Replace with your Formspree ID

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Get in Touch with BabbageTechnologies
        </h2>
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your Message"
                required
                className="mt-1"
                rows={5}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              disabled={state.submitting}
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </Button>
            {state.succeeded && (
              <p className="text-green-600 text-center">Message sent successfully!</p>
            )}
            {state.errors && (
              <p className="text-red-600 text-center">Error sending message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}