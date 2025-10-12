import { Link } from 'react-router-dom';
import type { Project } from '../types';

const featuredProjects: Project[] = [
  {
    id: 'fsm-app',
    title: 'FSM Field Service Management',
    category: 'digital',
    subcategory: 'Development',
    description: 'React web application and Swift iOS app with Supabase backend for comprehensive field service management.',
    tags: ['React', 'TypeScript', 'Swift', 'Supabase', 'iOS'],
    featured: true,
  },
  {
    id: 'palliative-booking',
    title: 'Palliative Care Booking System',
    category: 'digital',
    subcategory: 'Community Impact',
    description: 'Pro bono scheduling and coordination platform for palliative care services.',
    tags: ['React', 'Community', 'Healthcare'],
    featured: true,
  },
  {
    id: 'security-research',
    title: 'Security Research & Bug Bounties',
    category: 'digital',
    subcategory: 'Security',
    description: 'Active security research and responsible vulnerability disclosure through bug bounty programs.',
    tags: ['Security', 'Research', 'Bug Bounties'],
    featured: true,
  },
  {
    id: 'custom-woodworking',
    title: 'Custom Woodworking',
    category: 'physical',
    subcategory: 'Craftsmanship',
    description: 'Handcrafted furniture and custom woodworking projects combining traditional techniques with modern design.',
    tags: ['Woodworking', 'Design', 'Craftsmanship'],
    featured: true,
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            I solve problems by building things
          </h1>
          <p className="text-xl md:text-2xl text-black/70 mb-8">
            In code, in pixels, and with my hands.
          </p>
          <p className="text-lg text-black/60 mb-8 leading-relaxed">
            Multi-disciplinary creator specializing in design, security, development,
            woodworking, and systems engineering. Based in Saskatchewan, Canada.
          </p>
          <div className="flex gap-4">
            <Link
              to="/work"
              className="px-6 py-3 bg-black text-white hover:bg-black/80 transition-colors"
            >
              View Work
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border border-black hover:bg-black hover:text-white transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-black/10">
        <h2 className="text-3xl font-bold mb-12">Featured Work</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
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

              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-black/70 mb-4 leading-relaxed">{project.description}</p>

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

        <div className="mt-12 text-center">
          <Link
            to="/work"
            className="inline-block text-sm uppercase tracking-wider hover:opacity-70 transition-opacity"
          >
            View All Projects →
          </Link>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-black/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Digital & Physical</h2>
          <p className="text-lg text-black/70 leading-relaxed">
            My work spans both digital and physical domains—building software,
            conducting security research, and crafting with wood. This multi-disciplinary
            approach brings unique problem-solving perspectives to every project.
          </p>
        </div>
      </section>
    </div>
  );
}
