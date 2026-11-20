'use client';

import React, { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, FileText, ArrowRight } from 'lucide-react';
import { withBasePath } from '@/lib/basePath';
import { profileData } from '@/data/profile';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/85 dark:bg-slate-950/85 backdrop-blur-md shadow-lg border-b border-slate-800/80 dark:border-slate-800/60 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#hero"
            onClick={e => handleLinkClick(e, '#hero')}
            className="group flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-400 flex items-center justify-center text-slate-950 font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
              J
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 dark:text-white tracking-tight text-lg group-hover:text-cyan-500 transition-colors">
                Jeevaa<span className="text-cyan-500">.</span>
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest font-mono hidden sm:inline-block">
                Full-Stack &bull; ML
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-slate-100/60 dark:bg-slate-900/60 backdrop-blur border border-slate-200/80 dark:border-slate-800/80 px-4 py-1.5 rounded-full shadow-sm">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                onClick={e => handleLinkClick(e, item.href)}
                className="px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />

            {/* Quick CV Button */}
            <a
              href={withBasePath(profileData.cvPath)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-cyan-500 hover:text-cyan-500 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
              title="View CV in new tab"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-500" />
              <span>CV</span>
            </a>

            {/* Hire Me CTA */}
            <a
              href="#contact"
              onClick={e => handleLinkClick(e, '#contact')}
              className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-slate-950 shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/25 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
            >
              <span>Hire Me</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button & Theme toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                onClick={e => handleLinkClick(e, item.href)}
                className="px-4 py-2.5 rounded-lg text-base font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-cyan-500 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col space-y-2">
              <a
                href={withBasePath(profileData.cvPath)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-medium text-sm hover:border-cyan-500"
              >
                <FileText className="w-4 h-4 text-cyan-500" />
                <span>View Full CV</span>
              </a>
              <a
                href="#contact"
                onClick={e => handleLinkClick(e, '#contact')}
                className="flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-semibold text-sm shadow-md"
              >
                <span>Hire Me</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
