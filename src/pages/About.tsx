import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

export default function About() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-6">About</h1>
          <p className="text-2xl text-black/70 leading-relaxed">
            I solve problems by building things—in code, in pixels, and with my hands.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Multi-Disciplinary Creator</h2>
            <div className="space-y-4 text-lg text-black/70 leading-relaxed">
              <p>
                I'm a solo creator based in Saskatchewan, Canada, working across digital
                and physical domains. My work spans software development, security research,
                design, woodworking, and systems engineering.
              </p>
              <p>
                This isn't about wearing multiple hats for the sake of it—it's about
                applying the right approach to each problem. Sometimes that means writing
                code, sometimes it means crafting with wood, and sometimes it means
                researching security vulnerabilities.
              </p>
            </div>
          </motion.section>

          {/* Approach */}
          <motion.section
            className="border-t border-black/10 pt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Approach</h2>
            <div className="space-y-4 text-lg text-black/70 leading-relaxed">
              <p>
                I believe in building things that work. Whether it's a web application,
                a security audit, or a piece of furniture, the focus is on solving real
                problems with thoughtful, well-executed solutions.
              </p>
              <p>
                My background in both digital and physical work informs everything I do.
                The precision required in woodworking translates to writing clean code.
                The systems thinking from engineering applies to architecting software.
                The attention to detail from security research improves every project.
              </p>
            </div>
          </motion.section>

          {/* Capabilities */}
          <motion.section
            className="border-t border-black/10 pt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-6">What I Do</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3">Digital Work</h3>
                <ul className="space-y-2 text-black/70">
                  <li>• Full-stack web development</li>
                  <li>• Mobile app development (iOS)</li>
                  <li>• Security research & testing</li>
                  <li>• UI/UX design</li>
                  <li>• System architecture</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-3">Physical Work</h3>
                <ul className="space-y-2 text-black/70">
                  <li>• Custom woodworking</li>
                  <li>• Furniture design & build</li>
                  <li>• Systems engineering</li>
                  <li>• Mechanical automation</li>
                  <li>• Infrastructure projects</li>
                </ul>
              </motion.div>
            </div>
          </motion.section>

          {/* Technologies */}
          <motion.section
            className="border-t border-black/10 pt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {[
                'React',
                'TypeScript',
                'Swift',
                'Node.js',
                'Supabase',
                'Tailwind CSS',
                'Security Testing',
                'Git',
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 border border-black/10 text-sm hover:border-black/30 transition-colors cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.section>

          {/* Contact CTA */}
          <motion.section
            className="border-t border-black/10 pt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Let's Work Together</h2>
            <p className="text-lg text-black/70 mb-6 leading-relaxed">
              I'm available for select projects and consulting work. If you have a
              problem that needs solving, let's talk.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-black text-white hover:bg-black/80 transition-colors"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </PageTransition>
  );
}
