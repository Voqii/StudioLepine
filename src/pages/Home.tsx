import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Project } from '../types';
import PageTransition from '../components/PageTransition';
import { staggerContainer, staggerItem } from '../utils/animations';

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
    <PageTransition>
      <div>
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.h1
              className="font-mono text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              I solve problems by{' '}
              <span className="text-accent-dark">building things</span>
            </motion.h1>
            <motion.p
              className="font-mono text-xl md:text-2xl text-steel mb-10 leading-snug"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              In code, in pixels, and with my hands.
            </motion.p>
            <motion.p
              className="font-sans text-lg text-black/60 mb-10 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Multi-disciplinary creator specializing in design, security, development,
              woodworking, and systems engineering. Based in Saskatchewan, Canada.
            </motion.p>
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/work"
                  className="inline-block font-mono text-sm font-medium uppercase tracking-wider px-8 py-4 bg-black text-white hover:bg-black/80 transition-colors duration-200"
                >
                  View Work
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-block font-mono text-sm font-medium uppercase tracking-wider px-8 py-4 border-2 border-black hover:bg-black hover:text-white transition-all duration-200"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Featured Projects */}
        <section className="max-w-6xl mx-auto px-6 py-16 border-t border-black/10">
          <motion.h2
            className="font-mono text-4xl font-bold mb-16 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Featured Work
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={staggerItem}
                className={`border-2 p-10 transition-all duration-300 group cursor-pointer ${
                  project.category === 'digital'
                    ? 'border-steel-light/30 hover:border-steel'
                    : 'border-accent-light/30 hover:border-accent'
                }`}
                whileHover={{ y: -4, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
              >
                <div className="flex items-start justify-between mb-6">
                  <span className={`font-mono text-xs uppercase tracking-widest font-semibold ${
                    project.category === 'digital' ? 'text-steel' : 'text-accent'
                  }`}>
                    {project.subcategory}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest text-black/40">
                    {project.category}
                  </span>
                </div>

                <h3 className="font-mono text-2xl font-semibold mb-4 leading-tight tracking-tight group-hover:opacity-80 transition-opacity">
                  {project.title}
                </h3>
                <p className="font-sans text-base text-black/70 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`font-sans text-xs px-3 py-1.5 transition-colors ${
                        project.category === 'digital'
                          ? 'bg-steel/10 text-steel-dark group-hover:bg-steel/20'
                          : 'bg-accent/10 text-accent-dark group-hover:bg-accent/20'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to="/work"
              className="inline-block font-mono text-sm uppercase tracking-widest hover:opacity-70 transition-opacity group"
            >
              View All Projects{' '}
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </section>

        {/* Philosophy Section */}
        <section className="max-w-6xl mx-auto px-6 py-20 border-t border-black/10">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-mono text-4xl font-bold mb-8 tracking-tight">Digital & Physical</h2>
            <p className="font-sans text-lg text-black/70 leading-relaxed">
              My work spans both digital and physical domains—building software,
              conducting security research, and crafting with wood. This multi-disciplinary
              approach brings unique problem-solving perspectives to every project.
            </p>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
}
