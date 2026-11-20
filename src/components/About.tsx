'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, CheckCircle2, UserCheck, Terminal, Award } from 'lucide-react';
import { profileData } from '@/data/profile';

export function About() {
  return (
    <section id="about" aria-label="About section" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-mono font-bold">
            01 &bull; Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photo / Visual Placeholder (Avatar & Terminal Profile Card) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Decorative background glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-3xl blur-xl opacity-30 dark:opacity-40 animate-tilt" />

              {/* Card Container */}
              <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 shadow-2xl overflow-hidden backdrop-blur-sm">
                {/* Window header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-100 dark:bg-slate-800/70 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex space-x-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center">
                    <Terminal className="w-3.5 h-3.5 mr-1 text-cyan-500" />
                    jeevaa@portfolio:~
                  </span>
                </div>

                {/* Profile Avatar & Interactive Mockup */}
                <div className="p-6 text-center">
                  <div className="relative w-36 h-36 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-cyan-500 via-teal-600 to-emerald-500 p-1 shadow-lg shadow-cyan-500/20">
                    <div className="w-full h-full rounded-2xl bg-slate-900 flex flex-col items-center justify-center text-white relative overflow-hidden">
                      <span className="text-4xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-tr from-cyan-400 to-emerald-300">
                        RJ
                      </span>
                      <span className="text-[10px] font-mono tracking-widest text-slate-400 mt-1 uppercase">
                        Jeevaa
                      </span>
                      {/* Subdued overlay pattern */}
                      <div className="absolute inset-0 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] [background-size:12px_12px] opacity-20 pointer-events-none" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {profileData.name}
                  </h3>
                  <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400 font-mono mt-1">
                    {profileData.role}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 text-left font-mono text-xs text-slate-600 dark:text-slate-400 space-y-1.5">
                    <p>
                      <span className="text-cyan-500">$</span> status:{' '}
                      <span className="text-emerald-500">Available for projects</span>
                    </p>
                    <p>
                      <span className="text-cyan-500">$</span> university:{' '}
                      <span className="text-slate-800 dark:text-slate-200">Uva Wellassa Univ</span>
                    </p>
                    <p>
                      <span className="text-cyan-500">$</span> location:{' '}
                      <span className="text-slate-800 dark:text-slate-200">Sri Lanka (LK)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio & Quick Facts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Building Pragmatic Digital Products with Code &amp; Data
            </h3>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {profileData.bio}
            </p>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm">
                <div className="flex items-center space-x-2 text-cyan-600 dark:text-cyan-400 mb-1">
                  <GraduationCap className="w-5 h-5" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Education</span>
                </div>
                <div className="text-sm font-bold text-slate-800 dark:text-slate-100">
                  Uva Wellassa University
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  BSc (Hons) Computer Sci &amp; Tech
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm">
                <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 mb-1">
                  <Calendar className="w-5 h-5" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Status</span>
                </div>
                <div className="text-sm font-bold text-slate-800 dark:text-slate-100">
                  3rd Year Undergraduate
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Full-Stack &amp; ML Practitioner
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm">
                <div className="flex items-center space-x-2 text-amber-600 dark:text-amber-400 mb-1">
                  <MapPin className="w-5 h-5" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Location</span>
                </div>
                <div className="text-sm font-bold text-slate-800 dark:text-slate-100">
                  Sri Lanka
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Badulla / Chavakachcheri
                </div>
              </div>
            </div>

            {/* Core Competencies Checklist */}
            <div className="space-y-2.5">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center">
                <Award className="w-4 h-4 mr-2 text-cyan-500" />
                Key Value Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-600 dark:text-slate-300">
                {profileData.skillsSummary.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
