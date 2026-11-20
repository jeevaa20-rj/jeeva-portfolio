'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, ArrowRight, Code2, Sparkles, MapPin, Briefcase } from 'lucide-react';
import { profileData } from '@/data/profile';
import { getBasePath } from '@/lib/basePath';

export function Hero() {
  const basePath = getBasePath();
  const cvUrl = `${basePath}/cv/Jeevaa_CV.pdf`;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Hero section"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background ambient lighting/gradients */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl opacity-70 animate-pulse" />
        <div className="absolute top-1/3 right-10 w-[380px] h-[380px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Availability / Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Open for Freelance &amp; Industry Internships &bull; Sri Lanka &amp; Remote</span>
        </motion.div>

        {/* Name Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-none mb-4">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-500 dark:from-cyan-400 dark:via-teal-300 dark:to-emerald-400">
              {profileData.name}
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-600 dark:text-slate-300 mt-2">
              (goes by <span className="text-cyan-600 dark:text-cyan-400">{profileData.preferredName}</span>)
            </span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 tracking-tight max-w-3xl mx-auto mb-5"
        >
          Full-Stack Developer and ML Engineer
        </motion.h2>

        {/* Short intro bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          3rd-year Computer Science &amp; Technology student at{' '}
          <strong className="text-slate-800 dark:text-slate-100 font-semibold">
            {profileData.university}
          </strong>
          . I design enterprise-grade web applications, tailor e-commerce stores with PayHere,
          and deploy practical machine learning models.
        </motion.p>

        {/* Quick meta indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-8"
        >
          <span className="inline-flex items-center space-x-1">
            <MapPin className="w-4 h-4 text-cyan-500" />
            <span>Sri Lanka</span>
          </span>
          <span className="text-slate-300 dark:text-slate-700">&bull;</span>
          <span className="inline-flex items-center space-x-1">
            <Briefcase className="w-4 h-4 text-emerald-500" />
            <span>Small Business Freelancer</span>
          </span>
          <span className="text-slate-300 dark:text-slate-700">&bull;</span>
          <span className="inline-flex items-center space-x-1">
            <Code2 className="w-4 h-4 text-cyan-500" />
            <span>PHP &bull; React &bull; Python &bull; Java</span>
          </span>
        </motion.div>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Hire Me CTA (scroll to contact) */}
          <button
            onClick={() => scrollTo('contact')}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
          >
            <span>Hire Me</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>

          {/* Download CV Button */}
          <a
            href={cvUrl}
            download="Jeevaa_CV.pdf"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl border-2 border-cyan-500/50 dark:border-cyan-500/60 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 font-semibold text-sm sm:text-base transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
            title="Download Jeevaa's Curriculum Vitae"
          >
            <Download className="w-4 h-4 mr-2" />
            <span>Download CV</span>
          </a>

          {/* View Projects Button */}
          <button
            onClick={() => scrollTo('projects')}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm sm:text-base transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            <Sparkles className="w-4 h-4 mr-2 text-amber-500" />
            <span>View Projects</span>
          </button>
        </motion.div>

        {/* Secondary View CV link (new tab) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-4"
        >
          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 underline underline-offset-4 transition-colors"
          >
            <span>View CV in new tab</span>
            <ExternalLink className="w-3 h-3 ml-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
