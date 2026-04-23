"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, Loader2 } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Socials */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-6xl font-syne font-bold text-white mb-6 leading-tight">
              Let&apos;s build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                something that matters.
              </span>
            </h2>
            <p className="text-muted text-lg mb-12 max-w-md">
              Whether you are a founder looking to build an MVP, a recruiter hiring for a high-impact role, or just want to chat about tech—my inbox is always open.
            </p>

            <div className="space-y-6">
              <a
                href="https://github.com/ShresthChandel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-xl font-syne text-white group w-fit"
              >
                <div className="p-4 bg-white/5 group-hover:bg-primary/20 group-hover:text-primary transition-colors rounded-full">
                  <Github size={24} />
                </div>
                <span className="group-hover:translate-x-2 transition-transform">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/shresth-singh-chandel-5576242a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-xl font-syne text-white group w-fit"
              >
                <div className="p-4 bg-white/5 group-hover:bg-primary/20 group-hover:text-primary transition-colors rounded-full">
                  <Linkedin size={24} />
                </div>
                <span className="group-hover:translate-x-2 transition-transform">LinkedIn</span>
              </a>
              <a
                href="mailto:shresthsingh003@gmail.com"
                className="flex items-center gap-4 text-xl font-syne text-white group w-fit"
              >
                <div className="p-4 bg-white/5 group-hover:bg-primary/20 group-hover:text-primary transition-colors rounded-full">
                  <Mail size={24} />
                </div>
                <span className="group-hover:translate-x-2 transition-transform">Email</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-[#12121a] border border-white/5 p-8 md:p-12"
          >
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 min-h-[400px]">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-syne font-bold text-white">Message Sent!</h3>
                <p className="text-muted">I&apos;ll get back to you as soon as possible.</p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 text-sm font-mono text-primary hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot */}
                <input type="text" name="_gotcha" style={{ display: "none" }} />
                
                <div>
                  <label htmlFor="name" className="block text-sm font-mono text-muted uppercase mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-background border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-sans"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-mono text-muted uppercase mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-background border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-sans"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-mono text-muted uppercase mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full bg-background border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-sans resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-white text-background font-mono font-bold uppercase tracking-wider py-4 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
