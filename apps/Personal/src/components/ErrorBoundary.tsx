import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

/**
 * Error Boundary component to catch and handle React errors gracefully
 * Prevents the entire app from crashing when a component throws an error
 *
 * Usage:
 * <ErrorBoundary>
 *   <YourComponent />
 * </ErrorBoundary>
 *
 * With custom fallback:
 * <ErrorBoundary fallback={<CustomErrorUI />}>
 *   <YourComponent />
 * </ErrorBoundary>
 */
export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error details to console (in production, you might send this to an error tracking service)
    console.error('Error Boundary caught an error:', error, errorInfo);

    this.setState({
      error,
      errorInfo,
    });
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen flex items-center justify-center px-6 bg-black/5">
          <div className="max-w-2xl w-full bg-white border border-black/10 p-8">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">Something went wrong</h1>
              <p className="text-black/70">
                We apologize for the inconvenience. An error has occurred in the application.
              </p>
            </div>

            {import.meta.env.DEV && this.state.error && (
              <details className="mb-6 p-4 bg-red-50 border border-red-200">
                <summary className="cursor-pointer font-semibold text-red-900 mb-2">
                  Error Details (Development Only)
                </summary>
                <div className="text-sm text-red-800 font-mono">
                  <p className="font-bold mb-2">{this.state.error.toString()}</p>
                  {this.state.errorInfo && (
                    <pre className="overflow-auto text-xs whitespace-pre-wrap">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  )}
                </div>
              </details>
            )}

            <div className="flex gap-4">
              <button
                onClick={this.handleReset}
                className="px-6 py-2 bg-black text-white hover:bg-black/80 transition-colors"
              >
                Try Again
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="px-6 py-2 border border-black hover:bg-black/5 transition-colors"
              >
                Go Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
