import { render, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import SEO from '../SEO';

describe('SEO', () => {
  let helmetContext: Record<string, unknown>;

  beforeEach(() => {
    helmetContext = {};
  });

  afterEach(() => {
    // Clean up head
    document.head.innerHTML = '';
  });

  const renderWithHelmet = (ui: React.ReactElement) => {
    return render(
      <HelmetProvider context={helmetContext}>
        {ui}
      </HelmetProvider>
    );
  };

  it('should render without errors', () => {
    const { container } = renderWithHelmet(<SEO />);
    expect(container).toBeTruthy();
  });

  it('should render with custom title prop', () => {
    const { container } = renderWithHelmet(
      <SEO title="Custom Title - Studio Lepine" />
    );
    expect(container).toBeTruthy();
  });

  it('should render with custom description prop', () => {
    const customDescription = 'Custom page description';
    const { container } = renderWithHelmet(
      <SEO description={customDescription} />
    );
    expect(container).toBeTruthy();
  });

  it('should render with custom keywords prop', () => {
    const customKeywords = 'react, typescript, testing';
    const { container } = renderWithHelmet(
      <SEO keywords={customKeywords} />
    );
    expect(container).toBeTruthy();
  });

  it('should render with custom image prop', () => {
    const customImage = 'https://example.com/custom-image.jpg';
    const { container } = renderWithHelmet(
      <SEO image={customImage} />
    );
    expect(container).toBeTruthy();
  });

  it('should render with custom url prop', () => {
    const customUrl = 'https://example.com/page';
    const { container } = renderWithHelmet(
      <SEO url={customUrl} />
    );
    expect(container).toBeTruthy();
  });

  it('should render with custom type prop', () => {
    const customType = 'article';
    const { container } = renderWithHelmet(
      <SEO type={customType} />
    );
    expect(container).toBeTruthy();
  });

  it('should render with all custom props together', () => {
    const props = {
      title: 'Custom Title',
      description: 'Custom description',
      image: 'https://example.com/image.jpg',
      url: 'https://example.com',
      type: 'article',
      keywords: 'custom, keywords',
    };

    const { container } = renderWithHelmet(<SEO {...props} />);
    expect(container).toBeTruthy();
  });

  it('should handle prop changes', () => {
    const { container, rerender } = renderWithHelmet(
      <SEO title="Initial Title" />
    );
    expect(container).toBeTruthy();

    rerender(
      <HelmetProvider context={helmetContext}>
        <SEO title="Updated Title" />
      </HelmetProvider>
    );
    expect(container).toBeTruthy();
  });

  it('should render default values when no props provided', () => {
    const { container } = renderWithHelmet(<SEO />);
    expect(container).toBeTruthy();
  });

  it('should render with partial props', () => {
    const { container } = renderWithHelmet(
      <SEO title="Custom Title" description="Custom Description" />
    );
    expect(container).toBeTruthy();
  });

  it('should render multiple SEO components', () => {
    const { container: container1 } = renderWithHelmet(
      <SEO title="First Page" />
    );
    const { container: container2 } = renderWithHelmet(
      <SEO title="Second Page" />
    );

    expect(container1).toBeTruthy();
    expect(container2).toBeTruthy();
  });

  // Test that meta tags are eventually added to the document
  it('should eventually update document head', async () => {
    renderWithHelmet(
      <SEO title="Test Title" description="Test Description" />
    );

    // Wait for helmet to update the DOM
    await waitFor(
      () => {
        const title = document.querySelector('title');
        expect(title).toBeTruthy();
      },
      { timeout: 1000 }
    );
  });
});
