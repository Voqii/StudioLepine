import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../types';
import PageTransition from '../components/PageTransition';
import { staggerContainer, staggerItem } from '../utils/animations';

const projects: Project[] = [
  {
    id: 'fsm-app',
    title: 'FSM Field Service Management',
    category: 'digital',
    subcategory: 'Development',
    description: 'Full-stack field service management solution with React web application, Swift iOS app, and Supabase backend. Features real-time synchronization, offline support, and comprehensive service tracking.',
    tags: ['React', 'TypeScript', 'Swift', 'Supabase', 'iOS', 'Real-time'],
  },
  {
    id: 'palliative-booking',
    title: 'Palliative Care Booking System',
    category: 'digital',
    subcategory: 'Community Impact',
    description: 'Pro bono scheduling and coordination platform designed for palliative care services. Simplifies appointment management and improves care coordination for patients and healthcare providers.',
    tags: ['React', 'Community', 'Healthcare', 'Scheduling'],
  },
  {
    id: 'security-research',
    title: 'Security Research & Bug Bounties',
    category: 'digital',
    subcategory: 'Security',
    description: 'Active participation in bug bounty programs and responsible vulnerability disclosure. Focus on web application security, authentication systems, and API security.',
    tags: ['Security', 'Research', 'Bug Bounties', 'Pentesting'],
  },
  {
    id: 'custom-woodworking',
    title: 'Custom Woodworking',
    category: 'physical',
    subcategory: 'Craftsmanship',
    description: 'Handcrafted furniture and custom woodworking projects. Each piece combines traditional joinery techniques with modern design aesthetics and functional engineering.',
    tags: ['Woodworking', 'Design', 'Craftsmanship', 'Furniture'],
  },
  {
    id: 'systems-engineering',
    title: 'Systems Engineering',
    category: 'physical',
    subcategory: 'Engineering',
    description: 'Custom solutions for mechanical systems, automation, and infrastructure projects. Bridging the gap between digital control systems and physical implementation.',
    tags: ['Engineering', 'Systems', 'Automation', 'Infrastructure'],
  },
];

export default function Work() {
  const [filter, setFilter] = useState<'all' | 'digital' | 'physical'>('all');

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-6">Work</h1>
          <p className="text-xl text-black/70 max-w-2xl">
            A collection of projects spanning digital development, security research,
            and physical craftsmanship.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex gap-4 mb-12 border-b border-black/10 pb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {[
            { value: 'all' as const, label: 'All Work' },
            { value: 'digital' as const, label: 'Digital' },
            { value: 'physical' as const, label: 'Physical' },
          ].map(({ value, label }) => (
            <motion.button
              key={value}
              onClick={() => setFilter(value)}
              className={`text-sm uppercase tracking-wider transition-all relative ${
                filter === value ? 'font-semibold' : 'text-black/50 hover:text-black'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {label}
              {filter === value && (
                <motion.div
                  className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-black"
                  layoutId="filterIndicator"
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={staggerItem}
                custom={index}
                className="border border-black/10 p-8 hover:border-black/30 transition-all duration-300 group cursor-pointer"
                whileHover={{
                  y: -4,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                }}
                layout
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider text-black/50">
                    {project.subcategory}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-black/50">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold mb-3 group-hover:text-black/80 transition-colors">
                  {project.title}
                </h3>
                <p className="text-black/70 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-black/5 text-black/70 group-hover:bg-black/10 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-16 text-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            No projects found in this category.
          </motion.div>
        )}
      </div>
    </PageTransition>
  );
}
