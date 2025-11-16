import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PageTransition from '../PageTransition';

describe('PageTransition', () => {
  it('should render children', () => {
    render(
      <PageTransition>
        <div>Test Content</div>
      </PageTransition>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('should render multiple children', () => {
    render(
      <PageTransition>
        <div>First Child</div>
        <div>Second Child</div>
      </PageTransition>
    );

    expect(screen.getByText('First Child')).toBeInTheDocument();
    expect(screen.getByText('Second Child')).toBeInTheDocument();
  });

  it('should render complex child components', () => {
    const ComplexComponent = () => (
      <div>
        <h1>Title</h1>
        <p>Description</p>
        <button>Click me</button>
      </div>
    );

    render(
      <PageTransition>
        <ComplexComponent />
      </PageTransition>
    );

    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should handle null or undefined children gracefully', () => {
    const { container } = render(
      <PageTransition>
        {null}
        {undefined}
      </PageTransition>
    );

    expect(container.firstChild).toBeInTheDocument();
  });

  it('should wrap children in motion.div', () => {
    const { container } = render(
      <PageTransition>
        <div>Content</div>
      </PageTransition>
    );

    // The motion.div should be the first child
    const motionDiv = container.firstChild;
    expect(motionDiv).toBeInTheDocument();
  });

  it('should render string children', () => {
    render(<PageTransition>Simple text content</PageTransition>);

    expect(screen.getByText('Simple text content')).toBeInTheDocument();
  });

  it('should handle rerenders without errors', () => {
    const { rerender } = render(
      <PageTransition>
        <div>Initial Content</div>
      </PageTransition>
    );

    expect(screen.getByText('Initial Content')).toBeInTheDocument();

    rerender(
      <PageTransition>
        <div>Updated Content</div>
      </PageTransition>
    );

    expect(screen.getByText('Updated Content')).toBeInTheDocument();
    expect(screen.queryByText('Initial Content')).not.toBeInTheDocument();
  });
});
