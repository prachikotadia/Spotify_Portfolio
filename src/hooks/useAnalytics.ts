import { useCallback } from 'react';
import { trackEvent, trackUserInteraction, trackNavigation, trackPortfolioInteraction } from '@/components/GoogleAnalytics';
import { trackUserAction, trackNavigation as sentryNavigation, trackPortfolioAction } from '@/components/SentryErrorTracking';

// Custom hook for analytics tracking
export const useAnalytics = () => {
  // Track page views
  const trackPageView = useCallback((page: string) => {
    trackEvent('page_view', 'Navigation', page);
    sentryNavigation('previous_page', page);
  }, []);

  // Track button clicks
  const trackButtonClick = useCallback((buttonName: string, location: string) => {
    trackUserInteraction('button_click', `${buttonName} - ${location}`);
    trackUserAction('Button Click', { button: buttonName, location });
  }, []);

  // Track navigation
  const trackNavClick = useCallback((destination: string, from: string) => {
    trackNavigation(destination);
    sentryNavigation(from, destination);
  }, []);

  // Track portfolio interactions
  const trackProjectView = useCallback((projectName: string, projectType: string) => {
    trackPortfolioInteraction('view', `${projectType} - ${projectName}`);
    trackPortfolioAction('Project View', projectName, { type: projectType });
  }, []);

  const trackCertificateView = useCallback((certificateName: string, issuer: string) => {
    trackPortfolioInteraction('view', `Certificate - ${certificateName}`);
    trackPortfolioAction('Certificate View', certificateName, { issuer });
  }, []);

  const trackCourseView = useCallback((courseName: string, category: string) => {
    trackPortfolioInteraction('view', `Course - ${courseName}`);
    trackPortfolioAction('Course View', courseName, { category });
  }, []);

  // Track external links
  const trackExternalLink = useCallback((linkType: string, url: string) => {
    trackEvent('external_link', 'External Link', `${linkType} - ${url}`);
    trackUserAction('External Link Click', { type: linkType, url });
  }, []);

  // Track download actions
  const trackDownload = useCallback((fileType: string, fileName: string) => {
    trackEvent('download', 'File Download', `${fileType} - ${fileName}`);
    trackUserAction('File Download', { type: fileType, file: fileName });
  }, []);

  // Track search queries
  const trackSearch = useCallback((query: string, results: number) => {
    trackEvent('search', 'User Search', query, results);
    trackUserAction('Search Query', { query, results });
  }, []);

  // Track form submissions
  const trackFormSubmission = useCallback((formName: string, success: boolean) => {
    trackEvent('form_submit', 'Form Submission', `${formName} - ${success ? 'success' : 'error'}`);
    trackUserAction('Form Submission', { form: formName, success });
  }, []);

  // Track time spent on page
  const trackTimeOnPage = useCallback((page: string, timeSpent: number) => {
    trackEvent('time_on_page', 'User Engagement', page, timeSpent);
    trackUserAction('Time on Page', { page, timeSpent });
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
