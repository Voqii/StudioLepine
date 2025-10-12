import { useState } from 'react';
import type { Project } from '../types';

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
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-5xl font-bold mb-6">Work</h1>
        <p className="text-xl text-black/70 max-w-2xl">
          A collection of projects spanning digital development, security research,
          and physical craftsmanship.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-4 mb-12 border-b border-black/10 pb-4">
        <button
          onClick={() => setFilter('all')}
          className={`text-sm uppercase tracking-wider transition-opacity ${
            filter === 'all' ? 'font-semibold' : 'text-black/50 hover:text-black'
          }`}
        >
          All Work
        </button>
        <button
          onClick={() => setFilter('digital')}
          className={`text-sm uppercase tracking-wider transition-opacity ${
            filter === 'digital' ? 'font-semibold' : 'text-black/50 hover:text-black'
          }`}
        >
          Digital
        </button>
        <button
          onClick={() => setFilter('physical')}
          className={`text-sm uppercase tracking-wider transition-opacity ${
            filter === 'physical' ? 'font-semibold' : 'text-black/50 hover:text-black'
          }`}
        >
          Physical
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="border border-black/10 p-8 hover:border-black/30 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-xs uppercase tracking-wider text-black/50">
                {project.subcategory}
              </span>
              <span className="text-xs uppercase tracking-wider text-black/50">
                {project.category}
              </span>
            </div>

            <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
            <p className="text-black/70 mb-6 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-black/5 text-black/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 text-black/50">
          No projects found in this category.
        </div>
      )}
    </div>
  );
}
