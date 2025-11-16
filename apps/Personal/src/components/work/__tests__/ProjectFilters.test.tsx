import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ProjectFilters from '../ProjectFilters';

describe('ProjectFilters', () => {
  const mockOnFilterChange = vi.fn();
  const mockOnSubcategoryChange = vi.fn();

  const defaultProps = {
    filter: 'all' as const,
    subcategoryFilter: 'all',
    subcategories: [],
    onFilterChange: mockOnFilterChange,
    onSubcategoryChange: mockOnSubcategoryChange,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render all primary filter buttons', () => {
    render(<ProjectFilters {...defaultProps} />);

    expect(screen.getByText('All Work')).toBeInTheDocument();
    expect(screen.getByText('Digital')).toBeInTheDocument();
    expect(screen.getByText('Physical')).toBeInTheDocument();
  });

  it('should highlight active filter', () => {
    render(<ProjectFilters {...defaultProps} filter="digital" />);

    const digitalButton = screen.getByText('Digital');
    expect(digitalButton).toHaveClass('font-semibold');

    const allButton = screen.getByText('All Work');
    expect(allButton).toHaveClass('text-black/50');
  });

  it('should call onFilterChange when filter button is clicked', () => {
    render(<ProjectFilters {...defaultProps} />);

    const digitalButton = screen.getByText('Digital');
    fireEvent.click(digitalButton);

    expect(mockOnFilterChange).toHaveBeenCalledTimes(1);
    expect(mockOnFilterChange).toHaveBeenCalledWith('digital');
  });

  it('should not show subcategories when list is empty', () => {
    render(<ProjectFilters {...defaultProps} subcategories={[]} />);

    expect(screen.queryByText(/All Digital/)).not.toBeInTheDocument();
    expect(screen.queryByText(/All Physical/)).not.toBeInTheDocument();
  });

  it('should show subcategory filters when digital is selected', () => {
    render(
      <ProjectFilters
        {...defaultProps}
        filter="digital"
        subcategories={['Web Development', 'Mobile Development', 'Graphic Design']}
      />
    );

    expect(screen.getByText('All Digital')).toBeInTheDocument();
    expect(screen.getByText('Web Development')).toBeInTheDocument();
    expect(screen.getByText('Mobile Development')).toBeInTheDocument();
    expect(screen.getByText('Graphic Design')).toBeInTheDocument();
  });

  it('should show subcategory filters when physical is selected', () => {
    render(
      <ProjectFilters
        {...defaultProps}
        filter="physical"
        subcategories={['Craftsmanship', 'Systems']}
      />
    );

    expect(screen.getByText('All Physical')).toBeInTheDocument();
    expect(screen.getByText('Craftsmanship')).toBeInTheDocument();
    expect(screen.getByText('Systems')).toBeInTheDocument();
  });

  it('should highlight active subcategory filter', () => {
    render(
      <ProjectFilters
        {...defaultProps}
        filter="digital"
        subcategoryFilter="Web Development"
        subcategories={['Web Development', 'Mobile Development']}
      />
    );

    const webDevButton = screen.getByText('Web Development');
    expect(webDevButton).toHaveClass('border-black', 'bg-black', 'text-white', 'font-semibold');

    const mobileDevButton = screen.getByText('Mobile Development');
    expect(mobileDevButton).toHaveClass('border-black/20', 'text-black/60');
  });

  it('should call onSubcategoryChange when subcategory button is clicked', () => {
    render(
      <ProjectFilters
        {...defaultProps}
        filter="digital"
        subcategories={['Web Development', 'Mobile Development']}
      />
    );

    const webDevButton = screen.getByText('Web Development');
    fireEvent.click(webDevButton);

    expect(mockOnSubcategoryChange).toHaveBeenCalledTimes(1);
    expect(mockOnSubcategoryChange).toHaveBeenCalledWith('Web Development');
  });

  it('should call onSubcategoryChange with "all" when "All" button is clicked', () => {
    render(
      <ProjectFilters
        {...defaultProps}
        filter="digital"
        subcategories={['Web Development']}
      />
    );

    const allButton = screen.getByText('All Digital');
    fireEvent.click(allButton);

    expect(mockOnSubcategoryChange).toHaveBeenCalledTimes(1);
    expect(mockOnSubcategoryChange).toHaveBeenCalledWith('all');
  });

  it('should highlight "All" subcategory button when subcategoryFilter is "all"', () => {
    render(
      <ProjectFilters
        {...defaultProps}
        filter="digital"
        subcategoryFilter="all"
        subcategories={['Web Development']}
      />
    );

    const allButton = screen.getByText('All Digital');
    expect(allButton).toHaveClass('border-black', 'bg-black', 'text-white', 'font-semibold');
  });

  it('should handle switching between filters', () => {
    const { rerender } = render(<ProjectFilters {...defaultProps} filter="all" />);

    const digitalButton = screen.getByText('Digital');
    fireEvent.click(digitalButton);

    expect(mockOnFilterChange).toHaveBeenCalledWith('digital');

    // Rerender with new filter
    rerender(<ProjectFilters {...defaultProps} filter="digital" />);
    expect(screen.getByText('Digital')).toHaveClass('font-semibold');
  });

  it('should render all subcategories in order', () => {
    const subcategories = ['Craftsmanship', 'Engineering', 'Woodworking'];
    render(
      <ProjectFilters
        {...defaultProps}
        filter="physical"
        subcategories={subcategories}
      />
    );

    subcategories.forEach((subcategory) => {
      expect(screen.getByText(subcategory)).toBeInTheDocument();
    });
  });
});
