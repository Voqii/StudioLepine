import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't show breadcrumbs on home page
  if (pathnames.length === 0) return null;

  // Build breadcrumb items
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
  ];

  let currentPath = '';
  pathnames.forEach((pathname) => {
    currentPath += `/${pathname}`;

    // Format the name nicely
    let name = pathname
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    // Special handling for known paths
    if (pathname === 'blog' && pathnames.length > 1) {
      name = 'Blog';
    }

    breadcrumbItems.push({
      name,
      path: currentPath,
    });
  });

  return (
    <motion.nav
      className="max-w-6xl mx-auto px-6 py-4"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-2 text-sm">
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;

          return (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-black/30">/</span>
              )}
              {isLast ? (
                <span className="font-mono text-black/60 font-medium">
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="font-mono text-accent hover:text-accent-dark transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </motion.nav>
  );
}
