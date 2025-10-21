import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu';
import SkeletonHandHover from './SkeletonHandHover';

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/work', label: 'Work' },
    { path: '/about', label: 'About' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.header
      className="border-b border-halloween-orange/30 bg-halloween-darkPurple/60 backdrop-blur-md sticky top-0 z-50 shadow-lg shadow-halloween-orange/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <nav className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <SkeletonHandHover>
            <Link to="/" className="flex items-center gap-4 group">
              <motion.img
                src="/studiolepinelogo.png"
                alt="Studio Lepine"
                className="h-[119px] w-[119px]"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.2 }}
              />
              <span className="text-3xl font-mono font-bold tracking-tight text-white group-hover:text-halloween-orange transition-colors duration-200">
                Studio Lepine
              </span>
            </Link>
          </SkeletonHandHover>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navLinks.map(({ path, label }) => (
              <SkeletonHandHover key={path}>
                <Link
                  to={path}
                  className="relative font-mono text-lg uppercase tracking-wider text-white/80 transition-colors duration-200 hover:text-halloween-orange"
                >
                  <span className={isActive(path) ? 'font-semibold text-white' : 'font-medium'}>
                    {label}
                  </span>
                  {isActive(path) && (
                    <motion.div
                      className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-halloween-orange shadow-[0_0_8px_rgba(255,107,26,0.6)]"
                      layoutId="activeNav"
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    />
                  )}
                </Link>
              </SkeletonHandHover>
            ))}
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </nav>
    </motion.header>
  );
}
