import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics configuration
const GA_TRACKING_ID = (typeof process !== 'undefined' && process.env?.REACT_APP_GA_TRACKING_ID) || 'G-FBLPRHSMDL'; // Your actual Google Analytics ID

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track user interactions
export const trackUserInteraction = (interaction: string, element: string) => {
  trackEvent('click', 'User Interaction', `${interaction} - ${element}`);
};

// Track navigation
export const trackNavigation = (destination: string) => {
  trackEvent('navigation', 'User Navigation', destination);
};

// Track portfolio interactions
export const trackPortfolioInteraction = (action: string, item: string) => {
  trackEvent(action, 'Portfolio', item);
};

// Google Analytics component
const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views on route changes
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
};

export default GoogleAnalytics;
