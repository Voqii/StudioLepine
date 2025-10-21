import { motion, AnimatePresence } from 'framer-motion';

interface ProjectFiltersProps {
  filter: 'all' | 'digital' | 'physical';
  subcategoryFilter: string;
  subcategories: string[];
  onFilterChange: (filter: 'all' | 'digital' | 'physical') => void;
  onSubcategoryChange: (subcategory: string) => void;
}

/**
 * Project filtering UI component
 * Features:
 * - Primary category filter (All/Digital/Physical)
 * - Dynamic subcategory filters that appear based on selected category
 * - Animated transitions with Framer Motion
 */
export default function ProjectFilters({
  filter,
  subcategoryFilter,
  subcategories,
  onFilterChange,
  onSubcategoryChange,
}: ProjectFiltersProps) {
  const filterOptions = [
    { value: 'all' as const, label: 'All Work' },
    { value: 'digital' as const, label: 'Digital' },
    { value: 'physical' as const, label: 'Physical' },
  ];

  return (
    <>
      {/* Primary Filter Buttons */}
      <motion.div
        className="flex gap-4 border-b border-black/10 pb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {filterOptions.map(({ value, label }) => (
          <motion.button
            key={value}
            onClick={() => onFilterChange(value)}
            className={`text-sm uppercase tracking-wider transition-all relative ${
              filter === value ? 'font-semibold' : 'text-black/50 hover:text-black'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {label}
            {filter === value && (
              <motion.div
                className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-black"
                layoutId="filterIndicator"
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Subcategory Filter Buttons */}
      <AnimatePresence>
        {subcategories.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <motion.div
              className="flex flex-wrap gap-3 pt-4 pb-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <motion.button
                onClick={() => onSubcategoryChange('all')}
                className={`text-xs uppercase tracking-wider px-3 py-1.5 border transition-all ${
                  subcategoryFilter === 'all'
                    ? 'border-black bg-black text-white font-semibold'
                    : 'border-black/20 text-black/60 hover:border-black/40 hover:text-black'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                All {filter === 'digital' ? 'Digital' : 'Physical'}
              </motion.button>
              {subcategories.map((subcategory) => (
                <motion.button
                  key={subcategory}
                  onClick={() => onSubcategoryChange(subcategory)}
                  className={`text-xs uppercase tracking-wider px-3 py-1.5 border transition-all ${
                    subcategoryFilter === subcategory
                      ? 'border-black bg-black text-white font-semibold'
                      : 'border-black/20 text-black/60 hover:border-black/40 hover:text-black'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {subcategory}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacing div when no subcategories */}
      <div className={subcategories.length > 0 ? '' : 'mb-12'} />
    </>
  );
}
