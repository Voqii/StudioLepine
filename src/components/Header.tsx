import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu';

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
      className="border-b border-black/10 bg-white/80 backdrop-blur-sm sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <nav className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img
              src="/studiolepinelogo.png"
              alt="Studio Lepine"
              className="h-10 w-10"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.2 }}
            />
            <span className="text-xl font-mono font-bold tracking-tight group-hover:opacity-70 transition-opacity duration-200">
              Studio Lepine
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className="relative font-mono text-sm uppercase tracking-wider transition-colors duration-200 hover:text-black/70"
              >
                <span className={isActive(path) ? 'font-semibold' : 'font-medium'}>
                  {label}
                </span>
                {isActive(path) && (
                  <motion.div
                    className="absolute -bottom-[25px] left-0 right-0 h-[2px] bg-accent-dark"
                    layoutId="activeNav"
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </nav>
    </motion.header>
  );
}
