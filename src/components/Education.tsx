'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, BookOpen, CheckCircle } from 'lucide-react';
import { educationData } from '@/data/education';

export function Education() {
  return (
    <section id="education" aria-label="Education section" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-mono font-bold">
            05 &bull; Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            Education &amp; Qualifications
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto mt-3 text-sm sm:text-base">
            Formal foundations in Computer Science, Applied Mathematics, and Algorithmic Thinking.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mt-3 rounded-full" />
        </div>

        {/* Timeline List */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-5 md:before:left-1/2 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
          {educationData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center md:justify-between ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Center Timeline Node */}
                <div className="absolute left-5 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-2 border-cyan-500 shadow-md shadow-cyan-500/20 z-10">
                  <GraduationCap className="w-5 h-5 text-cyan-500" />
                </div>

                {/* Content Box */}
                <div className="ml-14 md:ml-0 md:w-[45%]">
                  <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center space-x-1 text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 px-2.5 py-0.5 rounded-full border border-cyan-200/50 dark:border-cyan-800/50">
                        <Calendar className="w-3 h-3 mr-1" />
                        {item.period}
                      </span>
                      <span className="inline-flex items-center text-xs text-slate-500 dark:text-slate-400">
                        <MapPin className="w-3 h-3 mr-1" />
                        {item.location}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {item.degree}
                    </h3>
                    <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
                      {item.institution}
                    </h4>

                    <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>

                    {item.highlights && item.highlights.length > 0 && (
                      <ul className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                        {item.highlights.map((hl, hlIdx) => (
                          <li key={hlIdx} className="flex items-start space-x-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
