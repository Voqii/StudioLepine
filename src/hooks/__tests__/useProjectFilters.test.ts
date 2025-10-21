import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useProjectFilters } from '../useProjectFilters';
import type { Project } from '../../types';

describe('useProjectFilters', () => {
  const mockProjects: Project[] = [
    {
      id: '1',
      title: 'Web App',
      category: 'digital',
      subcategory: 'Web Development',
      description: 'A web app',
      tags: ['React'],
    },
    {
      id: '2',
      title: 'Mobile App',
      category: 'digital',
      subcategory: 'Mobile Development',
      description: 'A mobile app',
      tags: ['Swift'],
    },
    {
      id: '3',
      title: 'Logo Design',
      category: 'digital',
      subcategory: 'Graphic Design',
      description: 'A logo',
      tags: ['Design'],
    },
    {
      id: '4',
      title: 'Woodworking',
      category: 'physical',
      subcategory: 'Craftsmanship',
      description: 'Wood project',
      tags: ['Wood'],
    },
    {
      id: '5',
      title: 'Engineering',
      category: 'physical',
      subcategory: 'Systems',
      description: 'System project',
      tags: ['Engineering'],
    },
  ];

  it('should initialize with "all" filter', () => {
    const { result } = renderHook(() => useProjectFilters(mockProjects));

    expect(result.current.filter).toBe('all');
    expect(result.current.subcategoryFilter).toBe('all');
    expect(result.current.subcategories).toEqual([]);
    expect(result.current.filteredProjects).toEqual(mockProjects);
  });

  it('should filter digital projects', () => {
    const { result } = renderHook(() => useProjectFilters(mockProjects));

    act(() => {
      result.current.handleFilterChange('digital');
    });

    expect(result.current.filter).toBe('digital');
    expect(result.current.filteredProjects.length).toBe(3);
    expect(result.current.filteredProjects.every(p => p.category === 'digital')).toBe(true);
  });

  it('should filter physical projects', () => {
    const { result } = renderHook(() => useProjectFilters(mockProjects));

    act(() => {
      result.current.handleFilterChange('physical');
    });

    expect(result.current.filter).toBe('physical');
    expect(result.current.filteredProjects.length).toBe(2);
    expect(result.current.filteredProjects.every(p => p.category === 'physical')).toBe(true);
  });

  it('should return unique sorted subcategories for digital filter', () => {
    const { result } = renderHook(() => useProjectFilters(mockProjects));

    act(() => {
      result.current.handleFilterChange('digital');
    });

    expect(result.current.subcategories).toEqual([
      'Graphic Design',
      'Mobile Development',
      'Web Development',
    ]);
  });

  it('should return unique sorted subcategories for physical filter', () => {
    const { result } = renderHook(() => useProjectFilters(mockProjects));

    act(() => {
      result.current.handleFilterChange('physical');
    });

    expect(result.current.subcategories).toEqual([
      'Craftsmanship',
      'Systems',
    ]);
  });

  it('should reset subcategory filter when category changes', () => {
    const { result } = renderHook(() => useProjectFilters(mockProjects));

    act(() => {
      result.current.handleFilterChange('digital');
    });

    act(() => {
      result.current.handleSubcategoryChange('Web Development');
    });

    expect(result.current.subcategoryFilter).toBe('Web Development');

    // Change category should reset subcategory
    act(() => {
      result.current.handleFilterChange('physical');
    });

    expect(result.current.subcategoryFilter).toBe('all');
  });

  it('should filter by subcategory', () => {
    const { result } = renderHook(() => useProjectFilters(mockProjects));

    act(() => {
      result.current.handleFilterChange('digital');
    });

    act(() => {
      result.current.handleSubcategoryChange('Web Development');
    });

    expect(result.current.filteredProjects.length).toBe(1);
    expect(result.current.filteredProjects[0].subcategory).toBe('Web Development');
  });

  it('should show all digital projects when subcategory is "all"', () => {
    const { result } = renderHook(() => useProjectFilters(mockProjects));

    act(() => {
      result.current.handleFilterChange('digital');
    });

    act(() => {
      result.current.handleSubcategoryChange('Web Development');
    });

    expect(result.current.filteredProjects.length).toBe(1);

    act(() => {
      result.current.handleSubcategoryChange('all');
    });

    expect(result.current.filteredProjects.length).toBe(3);
  });

  it('should memoize filteredProjects (not recompute on unrelated changes)', () => {
    const { result, rerender } = renderHook(() => useProjectFilters(mockProjects));

    act(() => {
      result.current.handleFilterChange('digital');
    });

    const firstFilteredProjects = result.current.filteredProjects;

    // Rerender without changing filter or subcategoryFilter
    rerender();

    // Should be the same reference (memoized)
    expect(result.current.filteredProjects).toBe(firstFilteredProjects);
  });

  it('should memoize subcategories (not recompute on unrelated changes)', () => {
    const { result, rerender } = renderHook(() => useProjectFilters(mockProjects));

    act(() => {
      result.current.handleFilterChange('digital');
    });

    const firstSubcategories = result.current.subcategories;

    // Rerender without changing filter
    rerender();

    // Should be the same reference (memoized)
    expect(result.current.subcategories).toBe(firstSubcategories);
  });

  it('should handle empty project list', () => {
    const { result } = renderHook(() => useProjectFilters([]));

    expect(result.current.filteredProjects).toEqual([]);
    expect(result.current.subcategories).toEqual([]);
  });

  it('should handle category with no projects', () => {
    const digitalOnly: Project[] = [
      {
        id: '1',
        title: 'Web App',
        category: 'digital',
        subcategory: 'Web Development',
        description: 'A web app',
        tags: ['React'],
      },
    ];

    const { result } = renderHook(() => useProjectFilters(digitalOnly));

    act(() => {
      result.current.handleFilterChange('physical');
    });

    expect(result.current.filteredProjects).toEqual([]);
  });

  it('should maintain filter state across project list changes', () => {
    const { result, rerender } = renderHook(
      ({ projects }) => useProjectFilters(projects),
      { initialProps: { projects: mockProjects } }
    );

    act(() => {
      result.current.handleFilterChange('digital');
    });

    expect(result.current.filter).toBe('digital');

    // Update projects list
    const newProjects = [...mockProjects, {
      id: '6',
      title: 'New Digital',
      category: 'digital',
      subcategory: 'Web Development',
      description: 'New',
      tags: ['New'],
    }];

    rerender({ projects: newProjects });

    // Filter should be maintained
    expect(result.current.filter).toBe('digital');
    expect(result.current.filteredProjects.length).toBe(4);
  });
});
