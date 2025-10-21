import { useState, useMemo, useCallback } from 'react';
import type { Project } from '../types';

/**
 * Custom hook for managing project filtering state and logic
 * Handles category and subcategory filtering with memoized results
 *
 * @param projects - Array of all projects to filter
 * @returns Filter state, filtered results, and control methods
 */
export function useProjectFilters(projects: Project[]) {
  const [filter, setFilter] = useState<'all' | 'digital' | 'physical'>('all');
  const [subcategoryFilter, setSubcategoryFilter] = useState<string>('all');

  /**
   * Get unique subcategories for the currently selected category
   * Memoized to prevent unnecessary re-computation
   */
  const subcategories = useMemo(() => {
    if (filter === 'all') return [];
    const categoryProjects = projects.filter((p) => p.category === filter);
    const uniqueSubcategories = [...new Set(categoryProjects.map((p) => p.subcategory))];
    return uniqueSubcategories.sort();
  }, [filter, projects]);

  /**
   * Get filtered projects based on current filter selections
   * Memoized to prevent re-filtering on unrelated re-renders
   */
  const filteredProjects = useMemo(() => {
    if (filter === 'all') return projects;

    return projects.filter((p) => {
      const matchesCategory = p.category === filter;
      const matchesSubcategory = subcategoryFilter === 'all' || p.subcategory === subcategoryFilter;
      return matchesCategory && matchesSubcategory;
    });
  }, [filter, subcategoryFilter, projects]);

  /**
   * Change the main category filter and reset subcategory
   */
  const handleFilterChange = useCallback((newFilter: 'all' | 'digital' | 'physical') => {
    setFilter(newFilter);
    setSubcategoryFilter('all'); // Reset subcategory when category changes
  }, []);

  /**
   * Change the subcategory filter
   */
  const handleSubcategoryChange = useCallback((subcategory: string) => {
    setSubcategoryFilter(subcategory);
  }, []);

  return {
    filter,
    subcategoryFilter,
    subcategories,
    filteredProjects,
    handleFilterChange,
    handleSubcategoryChange,
    setSubcategoryFilter, // Direct setter for backward compatibility
  };
}
