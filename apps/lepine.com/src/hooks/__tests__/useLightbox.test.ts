import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { useLightbox } from '../useLightbox';

describe('useLightbox', () => {
  beforeEach(() => {
    // Setup DOM event listener mocks
    vi.spyOn(document, 'addEventListener');
    vi.spyOn(document, 'removeEventListener');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should initialize with closed state', () => {
    const { result } = renderHook(() => useLightbox());

    expect(result.current.lightboxImage).toBe(null);
    expect(result.current.lightboxTitle).toBe('');
    expect(result.current.isOpen).toBe(false);
  });

  it('should open lightbox with image and title', () => {
    const { result } = renderHook(() => useLightbox());

    act(() => {
      result.current.openLightbox('/test-image.jpg', 'Test Title');
    });

    expect(result.current.lightboxImage).toBe('/test-image.jpg');
    expect(result.current.lightboxTitle).toBe('Test Title');
    expect(result.current.isOpen).toBe(true);
  });

  it('should close lightbox', () => {
    const { result } = renderHook(() => useLightbox());

    act(() => {
      result.current.openLightbox('/test-image.jpg', 'Test Title');
    });

    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.closeLightbox();
    });

    expect(result.current.lightboxImage).toBe(null);
    expect(result.current.lightboxTitle).toBe('');
    expect(result.current.isOpen).toBe(false);
  });

  it('should attach ESC key event listener on mount', () => {
    renderHook(() => useLightbox());

    expect(document.addEventListener).toHaveBeenCalledWith(
      'keydown',
      expect.any(Function)
    );
  });

  it('should remove ESC key event listener on unmount', () => {
    const { unmount } = renderHook(() => useLightbox());

    unmount();

    expect(document.removeEventListener).toHaveBeenCalledWith(
      'keydown',
      expect.any(Function)
    );
  });

  it('should close lightbox when ESC key is pressed', () => {
    const { result } = renderHook(() => useLightbox());

    act(() => {
      result.current.openLightbox('/test-image.jpg', 'Test Title');
    });

    expect(result.current.isOpen).toBe(true);

    // Simulate ESC key press
    act(() => {
      const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });
      document.dispatchEvent(escapeEvent);
    });

    expect(result.current.isOpen).toBe(false);
  });

  it('should not close lightbox when other keys are pressed', () => {
    const { result } = renderHook(() => useLightbox());

    act(() => {
      result.current.openLightbox('/test-image.jpg', 'Test Title');
    });

    expect(result.current.isOpen).toBe(true);

    // Simulate Enter key press
    act(() => {
      const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
      document.dispatchEvent(enterEvent);
    });

    expect(result.current.isOpen).toBe(true);
  });

  it('should not close lightbox on ESC if already closed', () => {
    const { result } = renderHook(() => useLightbox());

    expect(result.current.isOpen).toBe(false);

    // Simulate ESC key press on closed lightbox
    act(() => {
      const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });
      document.dispatchEvent(escapeEvent);
    });

    expect(result.current.isOpen).toBe(false);
  });

  it('should stop event propagation when event is provided to openLightbox', () => {
    const { result } = renderHook(() => useLightbox());
    const mockEvent = {
      stopPropagation: vi.fn(),
    } as unknown as React.MouseEvent;

    act(() => {
      result.current.openLightbox('/test.jpg', 'Test', mockEvent);
    });

    expect(mockEvent.stopPropagation).toHaveBeenCalled();
  });

  it('should handle multiple open/close cycles', () => {
    const { result } = renderHook(() => useLightbox());

    // Open first time
    act(() => {
      result.current.openLightbox('/image1.jpg', 'Title 1');
    });
    expect(result.current.isOpen).toBe(true);
    expect(result.current.lightboxImage).toBe('/image1.jpg');

    // Close
    act(() => {
      result.current.closeLightbox();
    });
    expect(result.current.isOpen).toBe(false);

    // Open second time with different image
    act(() => {
      result.current.openLightbox('/image2.jpg', 'Title 2');
    });
    expect(result.current.isOpen).toBe(true);
    expect(result.current.lightboxImage).toBe('/image2.jpg');
    expect(result.current.lightboxTitle).toBe('Title 2');
  });
});
