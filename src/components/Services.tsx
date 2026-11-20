'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ShoppingCart, TrendingUp, Cpu, ShieldCheck, Check, ArrowRight } from 'lucide-react';
import { servicesData } from '@/data/services';

const serviceIcons: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-6 h-6 text-cyan-500" />,
  ShoppingCart: <ShoppingCart className="w-6 h-6 text-emerald-500" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-amber-500" />,
  Cpu: <Cpu className="w-6 h-6 text-purple-500" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-blue-500" />,
};

export function Services() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" aria-label="Services section" className="py-20 relative bg-slate-50/60 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-mono font-bold">
            04 &bull; Freelance Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            Services for Small Businesses &amp; Startups
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-3 text-sm sm:text-base">
            Professional web development, local payment gateways, Google Maps ranking, and intelligent automation built to generate real customer results.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mt-3 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-2xl border p-7 flex flex-col justify-between bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300 relative ${
                service.highlight
                  ? 'border-cyan-500/50 dark:border-cyan-500/40 ring-1 ring-cyan-500/20'
                  : 'border-slate-200 dark:border-slate-800'
              }`}
            >
              {service.highlight && (
                <div className="absolute -top-3 right-6 px-3 py-1 bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold text-[10px] uppercase tracking-wider rounded-full shadow-sm">
                  Most Requested
                </div>
              )}

              <div>
                <div className="p-3 w-fit rounded-xl bg-slate-100 dark:bg-slate-800/80 mb-5">
                  {serviceIcons[service.icon] || <Globe className="w-6 h-6 text-cyan-500" />}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={scrollToContact}
                type="button"
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 group pt-2 border-t border-slate-100 dark:border-slate-800/80 focus:outline-none"
              >
                <span>Request quote or discuss</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
