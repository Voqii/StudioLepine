import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Project } from '../types';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import JackOLantern from '../components/JackOLantern';
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
      <SEO />
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
              className="font-mono text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              I solve problems by{' '}
              <span className="text-halloween-orange drop-shadow-[0_0_12px_rgba(255,107,26,0.8)]">building things</span>
            </motion.h1>
            <motion.p
              className="font-mono text-xl md:text-2xl text-white/70 mb-10 leading-snug"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              In code, in pixels, and with my hands.
            </motion.p>
            <motion.p
              className="font-sans text-lg text-white/60 mb-10 leading-relaxed max-w-2xl"
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
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <JackOLantern />
                <Link
                  to="/work"
                  className="inline-block font-mono text-sm font-medium uppercase tracking-wider px-8 py-4 bg-halloween-orange text-white hover:bg-halloween-orangeGlow hover:shadow-[0_0_24px_rgba(255,107,26,0.8)] transition-all duration-200 relative z-10"
                >
                  View Work
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <JackOLantern />
                <Link
                  to="/contact"
                  className="inline-block font-mono text-sm font-medium uppercase tracking-wider px-8 py-4 border-2 border-halloween-orange bg-halloween-darkPurple/40 backdrop-blur-sm text-halloween-orange hover:bg-halloween-orange hover:text-white hover:shadow-[0_0_24px_rgba(255,107,26,0.8)] transition-all duration-200 relative z-10"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Featured Projects */}
        <section className="max-w-6xl mx-auto px-6 py-16 border-t border-halloween-orange/20">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-mono text-4xl font-bold tracking-tight text-white">
              Featured Work
            </h2>
            <div className="w-24 h-1 bg-halloween-orange shadow-[0_0_8px_rgba(255,107,26,0.6)] mt-4"></div>
          </motion.div>

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
                className={`border-l-4 border-2 p-10 transition-all duration-300 group cursor-pointer bg-halloween-darkPurple/20 backdrop-blur-sm ${
                  project.category === 'digital'
                    ? 'border-halloween-purple border-l-halloween-purple hover:border-halloween-purpleLight hover:shadow-[0_8px_24px_rgba(107,44,145,0.3)]'
                    : 'border-halloween-orange border-l-halloween-orange hover:border-halloween-orangeGlow hover:shadow-[0_8px_24px_rgba(255,107,26,0.3)]'
                }`}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <span className={`font-mono text-sm uppercase tracking-widest font-bold px-3 py-1 ${
                    project.category === 'digital'
                      ? 'bg-halloween-purple/30 text-halloween-purpleLight'
                      : 'bg-halloween-orange/30 text-halloween-orange'
                  }`}>
                    {project.subcategory}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest text-white/40">
                    {project.category}
                  </span>
                </div>

                <h3 className="font-mono text-2xl font-semibold mb-4 leading-tight tracking-tight text-white group-hover:text-halloween-orange transition-colors">
                  {project.title}
                </h3>
                <p className="font-sans text-base text-white/70 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`font-sans text-xs px-3 py-2 transition-all ${
                        project.category === 'digital'
                          ? 'bg-halloween-purple/30 text-halloween-purpleLight border border-halloween-purple/40 group-hover:bg-halloween-purple/40'
                          : 'bg-halloween-orange/30 text-halloween-orange border border-halloween-orange/40 group-hover:bg-halloween-orange/40'
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
              className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-halloween-orange hover:text-halloween-orangeGlow transition-colors group"
            >
              View All Projects
              <motion.span
                className="inline-block text-lg"
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
        <section className="max-w-6xl mx-auto px-6 py-20 border-t border-halloween-orange/20">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-mono text-4xl font-bold mb-4 tracking-tight">
              <span className="text-halloween-purpleLight">Digital</span> &{' '}
              <span className="text-halloween-orange">Physical</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-halloween-purple via-white/30 to-halloween-orange mx-auto mb-8 shadow-[0_0_8px_rgba(255,107,26,0.4)]"></div>
            <p className="font-sans text-lg text-white/70 leading-relaxed">
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
