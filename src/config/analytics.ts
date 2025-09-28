// Analytics Configuration
export const ANALYTICS_CONFIG = {
  // Google Analytics
  GA_TRACKING_ID: (typeof process !== 'undefined' && process.env?.REACT_APP_GA_TRACKING_ID) || 'G-XXXXXXXXXX',
  
  // Sentry
  SENTRY_DSN: (typeof process !== 'undefined' && process.env?.REACT_APP_SENTRY_DSN) || 'YOUR_SENTRY_DSN_HERE',
  
  // Environment
  ENVIRONMENT: (typeof process !== 'undefined' && process.env?.NODE_ENV) || 'development',
  
  // Analytics Settings
  ENABLE_ANALYTICS: (typeof process !== 'undefined' && process.env?.NODE_ENV === 'production') || false,
  ENABLE_ERROR_TRACKING: true,
  ENABLE_PERFORMANCE_TRACKING: true,
  
  // Custom Events
  EVENTS: {
    PAGE_VIEW: 'page_view',
    BUTTON_CLICK: 'button_click',
    NAVIGATION: 'navigation',
    PROJECT_VIEW: 'project_view',
    CERTIFICATE_VIEW: 'certificate_view',
    COURSE_VIEW: 'course_view',
    EXTERNAL_LINK: 'external_link',
    DOWNLOAD: 'download',
    SEARCH: 'search',
    FORM_SUBMIT: 'form_submit',
    TIME_ON_PAGE: 'time_on_page',
  },
  
  // Categories
  CATEGORIES: {
    NAVIGATION: 'Navigation',
    USER_INTERACTION: 'User Interaction',
    PORTFOLIO: 'Portfolio',
    EXTERNAL_LINK: 'External Link',
    FILE_DOWNLOAD: 'File Download',
    USER_SEARCH: 'User Search',
    FORM_SUBMISSION: 'Form Submission',
    USER_ENGAGEMENT: 'User Engagement',
  },
};

// Performance tracking thresholds
export const PERFORMANCE_THRESHOLDS = {
  PAGE_LOAD_TIME: 3000, // 3 seconds
  INTERACTION_TIME: 100, // 100ms
  SEARCH_RESPONSE_TIME: 500, // 500ms
};

// Error tracking configuration
export const ERROR_TRACKING_CONFIG = {
  MAX_BREADCRUMBS: 100,
  SAMPLE_RATE: 1.0,
  TRACES_SAMPLE_RATE: 1.0,
  REPLAY_SAMPLE_RATE: 0.1,
  REPLAY_ON_ERROR_SAMPLE_RATE: 1.0,
};
