import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/work', label: 'Work' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none"
        aria-label="Toggle menu"
      >
        <div className="w-6 flex flex-col gap-1.5">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-black block"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-full h-0.5 bg-black block"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-black block"
          />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMenu}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-white border-l-4 border-accent shadow-2xl z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Close Button */}
                <div className="flex justify-end p-6">
                  <button
                    onClick={closeMenu}
                    className="w-10 h-10 flex items-center justify-center hover:bg-black/5 transition-colors"
                    aria-label="Close menu"
                  >
                    <span className="text-2xl">×</span>
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-6">
                  <ul className="space-y-2">
                    {navLinks.map(({ path, label }, index) => (
                      <motion.li
                        key={path}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Link
                          to={path}
                          onClick={closeMenu}
                          className={`block font-mono text-lg uppercase tracking-wider py-4 px-4 transition-all ${
                            isActive(path)
                              ? 'bg-accent/10 text-accent-dark border-l-4 border-accent font-semibold'
                              : 'hover:bg-black/5 border-l-4 border-transparent'
                          }`}
                        >
                          {label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Footer */}
                <div className="p-6 border-t border-black/10">
                  <a
                    href="mailto:cody@lepine.biz"
                    className="block font-sans text-sm text-black/60 hover:text-accent transition-colors"
                  >
                    cody@lepine.biz
                  </a>
                  <p className="font-sans text-xs text-black/40 mt-2">
                    Saskatchewan, Canada
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
