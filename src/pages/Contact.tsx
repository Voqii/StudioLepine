import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

export default function Contact() {
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
          <h1 className="text-5xl font-bold mb-6">Contact</h1>
          <p className="text-xl text-black/70 max-w-2xl">
            Available for select projects and consulting work. Let's discuss how we
            can work together.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column - Email CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>

            <div className="space-y-6">
              <div>
                <div className="text-sm uppercase tracking-wider text-black/50 mb-2">
                  Email
                </div>
                <motion.a
                  href="mailto:cody@lepine.biz"
                  className="text-2xl font-semibold hover:opacity-70 transition-opacity"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  cody@lepine.biz
                </motion.a>
              </div>

              <div>
                <div className="text-sm uppercase tracking-wider text-black/50 mb-2">
                  Location
                </div>
                <div className="text-lg">Saskatchewan, Canada</div>
              </div>
            </div>

            <motion.div
              className="mt-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="mailto:cody@lepine.biz"
                className="inline-block px-6 py-3 bg-black text-white hover:bg-black/80 transition-colors"
              >
                Send an Email
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-3">What I Work On</h3>
              <ul className="space-y-2 text-black/70">
                <li>• Web and mobile application development</li>
                <li>• Security audits and testing</li>
                <li>• UI/UX design and implementation</li>
                <li>• Custom woodworking projects</li>
                <li>• Systems engineering solutions</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-3">Response Time</h3>
              <p className="text-black/70">
                I typically respond to inquiries within 24-48 hours. For urgent
                matters, please indicate that in your subject line.
              </p>
            </motion.div>

            <motion.div
              className="border-t border-black/10 pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-3">Pro Bono Work</h3>
              <p className="text-black/70">
                I dedicate time to community impact projects. If you're working on
                something that serves the community, I'd love to hear about it.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
