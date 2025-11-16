import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

export default function NotFound() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 Number */}
          <motion.h1
            className="font-mono text-9xl font-bold mb-4 text-black/10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            404
          </motion.h1>

          {/* Message */}
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Page Not Found
          </motion.h2>

          <motion.p
            className="text-xl text-black/70 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            The page you're looking for doesn't exist or has been moved.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/"
                className="inline-block font-mono text-sm font-medium uppercase tracking-wider px-8 py-4 bg-accent text-white hover:bg-accent-dark transition-colors duration-200"
              >
                Go Home
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/work"
                className="inline-block font-mono text-sm font-medium uppercase tracking-wider px-8 py-4 border-2 border-accent bg-white text-accent hover:bg-accent hover:text-white transition-all duration-200"
              >
                View Work
              </Link>
            </motion.div>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            className="mt-16 pt-16 border-t border-black/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-sm text-black/60 mb-4">Or try one of these pages:</p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <Link to="/about" className="text-accent hover:text-accent-dark transition-colors">
                About
              </Link>
              <span className="text-black/30">•</span>
              <Link to="/blog" className="text-accent hover:text-accent-dark transition-colors">
                Blog
              </Link>
              <span className="text-black/30">•</span>
              <Link to="/contact" className="text-accent hover:text-accent-dark transition-colors">
                Contact
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
