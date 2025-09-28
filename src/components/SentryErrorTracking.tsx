import * as Sentry from '@sentry/react';
import { useEffect } from 'react';

// Sentry configuration
const SENTRY_DSN = (typeof process !== 'undefined' && process.env?.REACT_APP_SENTRY_DSN) || 'YOUR_SENTRY_DSN_HERE'; // Replace with your actual Sentry DSN

// Initialize Sentry
export const initSentry = () => {
  Sentry.init({
    dsn: SENTRY_DSN,
    environment: (typeof process !== 'undefined' && process.env?.NODE_ENV) || 'development',
    tracesSampleRate: 1.0,
    integrations: [
      new Sentry.BrowserTracing(),
    ],
    beforeSend(event) {
      // Filter out development errors in production
      const isProduction = (typeof process !== 'undefined' && process.env?.NODE_ENV === 'production');
      if (isProduction) {
        return event;
      }
      return null;
    },
  });
};

// Track user interactions
export const trackUserAction = (action: string, details?: any) => {
  Sentry.addBreadcrumb({
    message: action,
    category: 'user-interaction',
    level: 'info',
    data: details,
  });
};

// Track navigation
export const trackNavigation = (from: string, to: string) => {
  Sentry.addBreadcrumb({
    message: 'Navigation',
    category: 'navigation',
    level: 'info',
    data: { from, to },
  });
};

// Track portfolio interactions
export const trackPortfolioAction = (action: string, item: string, details?: any) => {
  Sentry.addBreadcrumb({
    message: `${action} - ${item}`,
    category: 'portfolio-interaction',
    level: 'info',
    data: details,
  });
};

// Track performance metrics
export const trackPerformance = (metric: string, value: number, unit: string = 'ms') => {
  Sentry.addBreadcrumb({
    message: `Performance: ${metric}`,
    category: 'performance',
    level: 'info',
    data: { value, unit },
  });
};

// Track errors with context
export const trackError = (error: Error, context?: any) => {
  Sentry.withScope((scope) => {
    if (context) {
      scope.setContext('error-context', context);
    }
    Sentry.captureException(error);
  });
};

// Sentry Error Tracking component
const SentryErrorTracking = () => {
  useEffect(() => {
    // Initialize Sentry when component mounts
    initSentry();
  }, []);

  return null;
};

export default SentryErrorTracking;
