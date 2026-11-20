'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Globe, Brain, Sparkles, Database, Layers } from 'lucide-react';
import { projectsData } from '@/data/projects';
import { ProjectCategory, Project } from '@/types';

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const filteredProjects = projectsData.filter(project => {
    if (activeCategory === 'all') return true;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" aria-label="Projects section" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-mono font-bold">
            03 &bull; Portfolio Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-3 text-sm sm:text-base">
            Engineered web applications, enterprise management platforms, and machine learning models solving concrete problems.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mt-3 rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div
            role="tablist"
            aria-label="Project categories"
            className="inline-flex p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
          >
            {(
              [
                { id: 'all', label: 'All Projects', count: projectsData.length },
                { id: 'web', label: 'Web Development', count: projectsData.filter(p => p.category === 'web').length },
                { id: 'ml', label: 'Machine Learning', count: projectsData.filter(p => p.category === 'ml').length },
              ] as const
            ).map(tab => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeCategory === tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`relative px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                  activeCategory === tab.id
                    ? 'text-slate-950 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {activeCategory === tab.id && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span>{tab.label}</span>
                <span className="ml-1.5 text-[11px] font-mono px-1.5 py-0.5 rounded-md bg-slate-200/60 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-sm hover:shadow-xl hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
              >
                {/* Project Header Bar */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Top Meta Line: Badge + Action Links */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span
                        className={`inline-flex items-center space-x-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg uppercase tracking-wider font-mono ${
                          project.category === 'ml'
                            ? 'bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 border border-purple-200 dark:border-purple-800'
                            : 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950/60 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800'
                        }`}
                      >
                        {project.category === 'ml' ? (
                          <>
                            <Brain className="w-3.5 h-3.5" />
                            <span>ML &amp; AI</span>
                          </>
                        ) : (
                          <>
                            <Globe className="w-3.5 h-3.5" />
                            <span>Web Dev</span>
                          </>
                        )}
                      </span>

                      {/* Links */}
                      <div className="flex items-center space-x-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`GitHub repository for ${project.title}`}
                            className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            title="View source code on GitHub"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Live demo for ${project.title}`}
                            className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            title="Visit live project preview"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* 2-line Description */}
                    <p className="mt-2.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                      {project.shortDescription}
                    </p>

                    {/* Machine Learning Project Specifics Block */}
                    {project.mlDetails && (
                      <div className="mt-4 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 text-xs space-y-1.5 font-mono">
                        <div>
                          <strong className="text-slate-700 dark:text-slate-300 font-semibold">Problem:</strong>{' '}
                          <span className="text-slate-600 dark:text-slate-400">{project.mlDetails.problem}</span>
                        </div>
                        <div>
                          <strong className="text-slate-700 dark:text-slate-300 font-semibold">Dataset:</strong>{' '}
                          <span className="text-slate-600 dark:text-slate-400">{project.mlDetails.dataset}</span>
                        </div>
                        <div>
                          <strong className="text-slate-700 dark:text-slate-300 font-semibold">Model:</strong>{' '}
                          <span className="text-slate-600 dark:text-slate-400">{project.mlDetails.model}</span>
                        </div>
                        <div className="text-emerald-600 dark:text-emerald-400 font-bold">
                          <strong>Metric:</strong> {project.mlDetails.metric}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Tech Tags */}
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
