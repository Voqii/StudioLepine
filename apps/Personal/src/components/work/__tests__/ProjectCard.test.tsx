import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ProjectCard from '../ProjectCard';
import type { Project } from '../../../types';

describe('ProjectCard', () => {
  const mockProject: Project = {
    id: 'test-1',
    title: 'Test Project',
    category: 'digital',
    subcategory: 'Web Development',
    description: 'A test project description',
    tags: ['React', 'TypeScript'],
    imageUrl: '/test-image.jpg',
  };

  const mockProjectWithMultipleImages: Project = {
    ...mockProject,
    images: ['/image1.jpg', '/image2.jpg', '/image3.jpg'],
  };

  const defaultProps = {
    project: mockProject,
    index: 0,
    currentImage: '/test-image.jpg',
    currentIndex: 0,
    carouselDirection: 1,
    onNextImage: vi.fn(),
    onPrevImage: vi.fn(),
    onOpenLightbox: vi.fn(),
  };

  it('should render project information', () => {
    render(<ProjectCard {...defaultProps} />);

    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('A test project description')).toBeInTheDocument();
    expect(screen.getByText('Web Development')).toBeInTheDocument();
    expect(screen.getByText('digital')).toBeInTheDocument();
  });

  it('should render tags', () => {
    render(<ProjectCard {...defaultProps} />);

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('should render project image', () => {
    render(<ProjectCard {...defaultProps} />);

    const image = screen.getByAltText('Test Project');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/test-image.jpg');
  });

  it('should not show carousel controls for single image', () => {
    render(<ProjectCard {...defaultProps} />);

    expect(screen.queryByLabelText('Previous image')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Next image')).not.toBeInTheDocument();
  });

  it('should show carousel controls for multiple images', () => {
    render(
      <ProjectCard
        {...defaultProps}
        project={mockProjectWithMultipleImages}
        currentImage="/image1.jpg"
      />
    );

    expect(screen.getByLabelText('Previous image')).toBeInTheDocument();
    expect(screen.getByLabelText('Next image')).toBeInTheDocument();
  });

  it('should call onNextImage when next button is clicked', () => {
    const onNextImage = vi.fn();
    render(
      <ProjectCard
        {...defaultProps}
        project={mockProjectWithMultipleImages}
        currentImage="/image1.jpg"
        onNextImage={onNextImage}
      />
    );

    const nextButton = screen.getByLabelText('Next image');
    fireEvent.click(nextButton);

    expect(onNextImage).toHaveBeenCalledTimes(1);
  });

  it('should call onPrevImage when previous button is clicked', () => {
    const onPrevImage = vi.fn();
    render(
      <ProjectCard
        {...defaultProps}
        project={mockProjectWithMultipleImages}
        currentImage="/image2.jpg"
        currentIndex={1}
        onPrevImage={onPrevImage}
      />
    );

    const prevButton = screen.getByLabelText('Previous image');
    fireEvent.click(prevButton);

    expect(onPrevImage).toHaveBeenCalledTimes(1);
  });

  it('should call onOpenLightbox when image is clicked', () => {
    const onOpenLightbox = vi.fn();
    render(<ProjectCard {...defaultProps} onOpenLightbox={onOpenLightbox} />);

    const image = screen.getByAltText('Test Project');
    fireEvent.click(image);

    expect(onOpenLightbox).toHaveBeenCalledTimes(1);
    expect(onOpenLightbox).toHaveBeenCalledWith(
      '/test-image.jpg',
      'Test Project',
      expect.any(Object)
    );
  });

  it('should render image counter dots for multiple images', () => {
    const { container } = render(
      <ProjectCard
        {...defaultProps}
        project={mockProjectWithMultipleImages}
        currentImage="/image1.jpg"
      />
    );

    // Check for dots container (3 images = 3 dots)
    const dots = container.querySelectorAll('.w-1\\.5.h-1\\.5.rounded-full');
    expect(dots).toHaveLength(3);
  });

  it('should highlight current image dot', () => {
    const { container } = render(
      <ProjectCard
        {...defaultProps}
        project={mockProjectWithMultipleImages}
        currentImage="/image2.jpg"
        currentIndex={1}
      />
    );

    const dots = container.querySelectorAll('.w-1\\.5.h-1\\.5.rounded-full');
    expect(dots[1]).toHaveClass('bg-white', 'w-3');
    expect(dots[0]).toHaveClass('bg-white/50');
    expect(dots[2]).toHaveClass('bg-white/50');
  });

  it('should render without image when no imageUrl or images provided', () => {
    const projectWithoutImage = {
      ...mockProject,
      imageUrl: undefined,
      images: undefined,
    };

    render(<ProjectCard {...defaultProps} project={projectWithoutImage} currentImage={undefined} />);

    expect(screen.queryByAltText('Test Project')).not.toBeInTheDocument();
    expect(screen.getByText('Test Project')).toBeInTheDocument(); // Still shows title
  });

  it('should handle different index positions correctly', () => {
    const { rerender } = render(<ProjectCard {...defaultProps} index={0} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();

    rerender(<ProjectCard {...defaultProps} index={5} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('should use currentImage prop for image source', () => {
    render(
      <ProjectCard
        {...defaultProps}
        project={mockProjectWithMultipleImages}
        currentImage="/custom-image.jpg"
      />
    );

    const image = screen.getByAltText('Test Project');
    expect(image).toHaveAttribute('src', '/custom-image.jpg');
  });
});
