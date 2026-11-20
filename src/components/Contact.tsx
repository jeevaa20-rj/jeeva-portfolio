'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Linkedin, Github, Copy, Check, Send, Sparkles, MapPin } from 'lucide-react';
import { profileData } from '@/data/profile';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoLink = `mailto:${profileData.email}?subject=Project%20Inquiry%20-%20Web%20%2F%20ML%20Engineering`;

  return (
    <section id="contact" aria-label="Contact section" className="py-20 relative bg-slate-50/50 dark:bg-slate-900/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-mono font-bold">
            06 &bull; Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            Let's Build Something Together
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto mt-3 text-sm sm:text-base">
            Have a project idea, e-commerce store to launch, website to revamp, or internship opportunity?
            Reach out directly—I typically respond within 24 hours.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mt-3 rounded-full" />
        </div>

        {/* Action Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* WhatsApp Direct Chat Card */}
          <motion.a
            href={profileData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group p-6 sm:p-8 rounded-2xl border border-emerald-500/30 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl hover:border-emerald-500 transition-all flex items-start space-x-5"
          >
            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  Chat on WhatsApp
                </h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300">
                  Fastest
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2">
                Instant messaging for project quotes, quick queries, and real-time collaboration.
              </p>
              <span className="inline-flex items-center text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-4 group-hover:translate-x-1 transition-transform">
                Open WhatsApp &rarr;
              </span>
            </div>
          </motion.a>

          {/* Email Card (mailto & copy) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="group p-6 sm:p-8 rounded-2xl border border-cyan-500/30 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl hover:border-cyan-500 transition-all flex items-start space-x-5"
          >
            <div className="p-4 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  Email Directly
                </h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-900/60 text-cyan-800 dark:text-cyan-300">
                  Detailed
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2">
                Ideal for formal inquiries, RFP specifications, and full project scopes.
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-4">
                <a
                  href={mailtoLink}
                  className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-semibold shadow-sm transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Mail</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{profileData.email}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social & Professional Profile Channels */}
        <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur text-center">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-6">
            Connect Across Professional Networks
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Jeevaa on LinkedIn"
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-500 hover:text-blue-500 text-slate-800 dark:text-slate-200 text-sm font-medium transition-colors shadow-sm"
            >
              <Linkedin className="w-4 h-4 text-[#0077b5]" />
              <span>LinkedIn</span>
            </a>

            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Jeevaa on GitHub"
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-cyan-500 hover:text-cyan-500 text-slate-800 dark:text-slate-200 text-sm font-medium transition-colors shadow-sm"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={profileData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Jeevaa on WhatsApp"
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-emerald-500 hover:text-emerald-500 text-slate-800 dark:text-slate-200 text-sm font-medium transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-500" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-cyan-500" />
            <span>Based in Badulla / Chavakachcheri, Sri Lanka &bull; Available worldwide (GMT+5:30)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
