import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ImageLightbox from '../ImageLightbox';

describe('ImageLightbox', () => {
  const mockOnClose = vi.fn();

  const defaultProps = {
    imageUrl: '/test-image.jpg',
    title: 'Test Image Title',
    onClose: mockOnClose,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render lightbox when imageUrl is provided', () => {
    render(<ImageLightbox {...defaultProps} />);

    expect(screen.getByAltText('Test Image Title')).toBeInTheDocument();
    expect(screen.getByText('Test Image Title')).toBeInTheDocument();
  });

  it('should not render when imageUrl is null', () => {
    render(<ImageLightbox {...defaultProps} imageUrl={null} />);

    expect(screen.queryByAltText('Test Image Title')).not.toBeInTheDocument();
    expect(screen.queryByText('Test Image Title')).not.toBeInTheDocument();
  });

  it('should render image with correct src', () => {
    render(<ImageLightbox {...defaultProps} />);

    const image = screen.getByAltText('Test Image Title');
    expect(image).toHaveAttribute('src', '/test-image.jpg');
  });

  it('should render title', () => {
    render(<ImageLightbox {...defaultProps} />);

    expect(screen.getByText('Test Image Title')).toBeInTheDocument();
  });

  it('should render helper text', () => {
    render(<ImageLightbox {...defaultProps} />);

    expect(screen.getByText('Click outside or press ESC to close')).toBeInTheDocument();
  });

  it('should render close button with aria-label', () => {
    render(<ImageLightbox {...defaultProps} />);

    const closeButton = screen.getByLabelText('Close lightbox');
    expect(closeButton).toBeInTheDocument();
  });

  it('should call onClose when close button is clicked', () => {
    render(<ImageLightbox {...defaultProps} />);

    const closeButton = screen.getByLabelText('Close lightbox');
    fireEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('should call onClose when backdrop is clicked', () => {
    const { container } = render(<ImageLightbox {...defaultProps} />);

    // Click the backdrop (fixed inset-0 div)
    const backdrop = container.querySelector('.fixed.inset-0');
    expect(backdrop).toBeInTheDocument();

    if (backdrop) {
      fireEvent.click(backdrop);
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    }
  });

  it('should not call onClose when clicking on the image', () => {
    render(<ImageLightbox {...defaultProps} />);

    const image = screen.getByAltText('Test Image Title');
    fireEvent.click(image);

    expect(mockOnClose).not.toHaveBeenCalled();
  });

  it('should not call onClose when clicking inside the content area', () => {
    render(<ImageLightbox {...defaultProps} />);

    const title = screen.getByText('Test Image Title');
    fireEvent.click(title);

    expect(mockOnClose).not.toHaveBeenCalled();
  });

  it('should handle empty title', () => {
    render(<ImageLightbox {...defaultProps} title="" />);

    expect(screen.queryByText('Test Image Title')).not.toBeInTheDocument();
    expect(screen.getByAltText('')).toBeInTheDocument(); // Image still renders
  });

  it('should handle different imageUrl', () => {
    const { rerender } = render(<ImageLightbox {...defaultProps} imageUrl="/image1.jpg" />);

    let image = screen.getByAltText('Test Image Title');
    expect(image).toHaveAttribute('src', '/image1.jpg');

    rerender(<ImageLightbox {...defaultProps} imageUrl="/image2.jpg" />);

    image = screen.getByAltText('Test Image Title');
    expect(image).toHaveAttribute('src', '/image2.jpg');
  });

  it('should have proper accessibility attributes', () => {
    render(<ImageLightbox {...defaultProps} />);

    const closeButton = screen.getByLabelText('Close lightbox');
    expect(closeButton).toHaveAttribute('aria-label', 'Close lightbox');

    const image = screen.getByAltText('Test Image Title');
    expect(image).toHaveAttribute('alt', 'Test Image Title');
  });
});
