import { useCallback } from 'react';
import { trackEvent, trackUserInteraction, trackNavigation, trackPortfolioInteraction } from '@/components/GoogleAnalytics';

// Custom hook for analytics tracking
export const useAnalytics = () => {
  // Track page views
  const trackPageView = useCallback((page: string) => {
    trackEvent('page_view', 'Navigation', page);
  }, []);

  // Track button clicks
  const trackButtonClick = useCallback((buttonName: string, location: string) => {
    trackUserInteraction('button_click', `${buttonName} - ${location}`);
  }, []);

  // Track navigation
  const trackNavClick = useCallback((destination: string, from: string) => {
    trackNavigation(destination);
  }, []);

  // Track portfolio interactions
  const trackProjectView = useCallback((projectName: string, projectType: string) => {
    trackPortfolioInteraction('view', `${projectType} - ${projectName}`);
  }, []);

  const trackCertificateView = useCallback((certificateName: string, issuer: string) => {
    trackPortfolioInteraction('view', `Certificate - ${certificateName}`);
  }, []);

  const trackCourseView = useCallback((courseName: string, category: string) => {
    trackPortfolioInteraction('view', `Course - ${courseName}`);
  }, []);

  // Track external links
  const trackExternalLink = useCallback((linkType: string, url: string) => {
    trackEvent('external_link', 'External Link', `${linkType} - ${url}`);
  }, []);

  // Track download actions
  const trackDownload = useCallback((fileType: string, fileName: string) => {
    trackEvent('download', 'File Download', `${fileType} - ${fileName}`);
  }, []);

  // Track search queries
  const trackSearch = useCallback((query: string, results: number) => {
    trackEvent('search', 'User Search', query, results);
  }, []);

  // Track form submissions
  const trackFormSubmission = useCallback((formName: string, success: boolean) => {
    trackEvent('form_submit', 'Form Submission', `${formName} - ${success ? 'success' : 'error'}`);
  }, []);

  // Track time spent on page
  const trackTimeOnPage = useCallback((page: string, timeSpent: number) => {
    trackEvent('time_on_page', 'User Engagement', page, timeSpent);
  }, []);

  return {
    trackPageView,
    trackButtonClick,
    trackNavClick,
    trackProjectView,
    trackCertificateView,
    trackCourseView,
    trackExternalLink,
    trackDownload,
    trackSearch,
    trackFormSubmission,
    trackTimeOnPage,
  };
};
