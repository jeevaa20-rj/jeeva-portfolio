'use client';

import React from 'react';
import { ArrowUp, Heart, Code2 } from 'lucide-react';
import { profileData } from '@/data/profile';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Copyright */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="font-bold text-slate-900 dark:text-white text-lg">
                {profileData.name}
              </span>
              <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                ({profileData.preferredName})
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              &copy; {currentYear} Roopavaran Jeevaananth. All rights reserved.
            </p>
          </div>

          {/* Architecture / Tech Stack Badge */}
          <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400 font-mono text-center">
            <Code2 className="w-4 h-4 text-cyan-500 shrink-0" />
            <span>Built with Next.js 14, TypeScript, Tailwind CSS &amp; Docker</span>
          </div>

          {/* Back to top */}
          <div>
            <button
              onClick={scrollToTop}
              type="button"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-cyan-500 text-xs text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
