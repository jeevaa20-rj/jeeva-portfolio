'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Database, Brain, Wrench } from 'lucide-react';
import { skillsData } from '@/data/skills';

const categoryIcons: Record<string, React.ReactNode> = {
  Languages: <Code className="w-5 h-5 text-cyan-500" />,
  Frontend: <Layout className="w-5 h-5 text-emerald-500" />,
  'Backend & APIs': <Server className="w-5 h-5 text-indigo-500" />,
  Databases: <Database className="w-5 h-5 text-blue-500" />,
  'Machine Learning': <Brain className="w-5 h-5 text-purple-500" />,
  'DevOps & Tooling': <Wrench className="w-5 h-5 text-amber-500" />,
};

export function Skills() {
  return (
    <section id="skills" aria-label="Skills section" className="py-20 relative bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-mono font-bold">
            02 &bull; Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            Technical Skills &amp; Stack
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto mt-3 text-sm sm:text-base">
            Grouped competencies honed through academic degree coursework, real-world freelance projects, and research prototypes.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mt-3 rounded-full" />
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-5 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800/80">
                  {categoryIcons[group.category] || <Code className="w-5 h-5 text-cyan-500" />}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {group.category}
                </h3>
              </div>

              {/* Skills Badges List */}
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map(skill => (
                  <div
                    key={skill.name}
                    className="group relative inline-flex flex-col px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/50 hover:border-cyan-500 dark:hover:border-cyan-400 hover:bg-cyan-50/50 dark:hover:bg-cyan-950/30 transition-all cursor-default"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-cyan-700 dark:group-hover:text-cyan-300">
                      {skill.name}
                    </span>
                    {skill.level && (
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                        {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
