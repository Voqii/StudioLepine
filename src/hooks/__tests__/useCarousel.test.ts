import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useCarousel } from '../useCarousel';

describe('useCarousel', () => {
  const mockProject = {
    id: 'test-project',
    images: ['/image1.jpg', '/image2.jpg', '/image3.jpg'],
    imageUrl: '/default.jpg',
  };

  it('should initialize with default state', () => {
    const { result } = renderHook(() => useCarousel());

    expect(result.current.currentImageIndexes).toEqual({});
    expect(result.current.carouselDirection).toEqual({});
  });

  it('should get current image from images array', () => {
    const { result } = renderHook(() => useCarousel());

    const currentImage = result.current.getCurrentImage(mockProject);
    expect(currentImage).toBe('/image1.jpg');
  });

  it('should get fallback imageUrl when no images array', () => {
    const { result } = renderHook(() => useCarousel());
    const projectWithoutImages = { id: 'test', imageUrl: '/fallback.jpg' };

    const currentImage = result.current.getCurrentImage(projectWithoutImages);
    expect(currentImage).toBe('/fallback.jpg');
  });

  it('should navigate to next image', () => {
    const { result } = renderHook(() => useCarousel());

    act(() => {
      result.current.nextImage('test-project', 3);
    });

    expect(result.current.getCurrentIndex('test-project')).toBe(1);
    expect(result.current.getDirection('test-project')).toBe(1);
  });

  it('should navigate to previous image', () => {
    const { result } = renderHook(() => useCarousel());

    // First go to index 1
    act(() => {
      result.current.nextImage('test-project', 3);
    });

    // Then go back to index 0
    act(() => {
      result.current.prevImage('test-project', 3);
    });

    expect(result.current.getCurrentIndex('test-project')).toBe(0);
    expect(result.current.getDirection('test-project')).toBe(-1);
  });

  it('should wrap around to first image from last', () => {
    const { result } = renderHook(() => useCarousel());

    // Navigate to last image
    act(() => {
      result.current.nextImage('test-project', 3);
    });
    act(() => {
      result.current.nextImage('test-project', 3);
    });

    expect(result.current.getCurrentIndex('test-project')).toBe(2);

    // Navigate forward - should wrap to 0
    act(() => {
      result.current.nextImage('test-project', 3);
    });

    expect(result.current.getCurrentIndex('test-project')).toBe(0);
  });

  it('should wrap around to last image from first', () => {
    const { result } = renderHook(() => useCarousel());

    // At index 0, navigate backward
    act(() => {
      result.current.prevImage('test-project', 3);
    });

    expect(result.current.getCurrentIndex('test-project')).toBe(2);
  });

  it('should handle multiple projects independently', () => {
    const { result } = renderHook(() => useCarousel());

    act(() => {
      result.current.nextImage('project-1', 3);
      result.current.nextImage('project-2', 3);
      result.current.nextImage('project-2', 3);
    });

    expect(result.current.getCurrentIndex('project-1')).toBe(1);
    expect(result.current.getCurrentIndex('project-2')).toBe(2);
  });

  it('should track direction for animations', () => {
    const { result } = renderHook(() => useCarousel());

    act(() => {
      result.current.nextImage('test-project', 3);
    });
    expect(result.current.getDirection('test-project')).toBe(1);

    act(() => {
      result.current.prevImage('test-project', 3);
    });
    expect(result.current.getDirection('test-project')).toBe(-1);
  });

  it('should return default direction of 1 for unknown project', () => {
    const { result } = renderHook(() => useCarousel());

    expect(result.current.getDirection('unknown-project')).toBe(1);
  });

  it('should stop event propagation when event is provided', () => {
    const { result } = renderHook(() => useCarousel());
    const mockEvent = {
      stopPropagation: vi.fn(),
    } as unknown as React.MouseEvent;

    act(() => {
      result.current.nextImage('test-project', 3, mockEvent);
    });

    expect(mockEvent.stopPropagation).toHaveBeenCalled();
  });
});
