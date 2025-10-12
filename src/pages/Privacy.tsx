import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

export default function Privacy() {
  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
        </motion.div>

        {/* Content */}
        <motion.div
          className="space-y-6 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p>
            Studio Lepine ("lepine.biz") does not collect, store, or track personal information from visitors.
          </p>

          <p>
            This website does not use cookies, analytics, or third-party tracking.
          </p>

          <p>
            If you contact me via email (cody@lepine.biz), your email address and message content are stored in my email provider's system and used only to respond to your inquiry.
          </p>

          <p className="text-sm text-black/60 mt-8">
            Last updated: October 12, 2025
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
}
