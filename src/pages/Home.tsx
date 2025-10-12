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
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              I solve problems by building things
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-black/70 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              In code, in pixels, and with my hands.
            </motion.p>
            <motion.p
              className="text-lg text-black/60 mb-8 leading-relaxed"
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
                  className="inline-block px-6 py-3 bg-black text-white hover:bg-black/80 transition-colors duration-200"
                >
                  View Work
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-block px-6 py-3 border border-black hover:bg-black hover:text-white transition-all duration-200"
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
            className="text-3xl font-bold mb-12"
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
                className="border border-black/10 p-8 hover:border-black/30 transition-all duration-300 group cursor-pointer"
                whileHover={{ y: -4, boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider text-black/50">
                    {project.subcategory}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-black/50">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-black/80 transition-colors">
                  {project.title}
                </h3>
                <p className="text-black/70 mb-4 leading-relaxed">{project.description}</p>

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

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to="/work"
              className="inline-block text-sm uppercase tracking-wider hover:opacity-70 transition-opacity group"
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
        <section className="max-w-6xl mx-auto px-6 py-16 border-t border-black/10">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Digital & Physical</h2>
            <p className="text-lg text-black/70 leading-relaxed">
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
