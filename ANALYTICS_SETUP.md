# Analytics & Monitoring Setup

This document explains how to set up Google Analytics and Sentry error tracking for the Spotify Portfolio.

## Google Analytics Setup

### 1. Create Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new account and property
3. Get your Measurement ID (format: G-XXXXXXXXXX)

### 2. Update Configuration
1. Update `src/components/GoogleAnalytics.tsx`:
   ```typescript
   const GA_TRACKING_ID = 'G-YOUR_ACTUAL_ID_HERE';
   ```

2. Update `index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ACTUAL_ID_HERE"></script>
   <script>
     gtag('config', 'G-YOUR_ACTUAL_ID_HERE', {
       page_title: document.title,
       page_location: window.location.href,
     });
   </script>
   ```

### 3. Environment Variables (Optional)
Create `.env` file:
```
REACT_APP_GA_TRACKING_ID=G-YOUR_ACTUAL_ID_HERE
```

## Sentry Error Tracking Setup

### 1. Create Sentry Account
1. Go to [Sentry.io](https://sentry.io/)
2. Create a new project
3. Get your DSN from project settings

### 2. Update Configuration
1. Update `src/components/SentryErrorTracking.tsx`:
   ```typescript
   const SENTRY_DSN = 'YOUR_ACTUAL_SENTRY_DSN_HERE';
   ```

2. Update `src/config/analytics.ts`:
   ```typescript
   SENTRY_DSN: process.env.REACT_APP_SENTRY_DSN || 'YOUR_ACTUAL_SENTRY_DSN_HERE',
   ```

### 3. Environment Variables (Optional)
Add to `.env` file:
```
REACT_APP_SENTRY_DSN=YOUR_ACTUAL_SENTRY_DSN_HERE
```

## What's Being Tracked

### Google Analytics Events
- **Page Views**: Automatic tracking of all page visits
- **Button Clicks**: Track user interactions with buttons
- **Navigation**: Track navigation between pages
- **Portfolio Interactions**: Track project, certificate, and course views
- **External Links**: Track clicks on external links
- **Downloads**: Track file downloads
- **Search**: Track search queries and results
- **Form Submissions**: Track form interactions
- **Time on Page**: Track user engagement

### Sentry Error Tracking
- **JavaScript Errors**: Automatic error capture
- **Performance Issues**: Track slow page loads and interactions
- **User Context**: Track user actions leading to errors
- **Breadcrumbs**: Track user journey before errors
- **Custom Events**: Track specific portfolio interactions

### Performance Monitoring
- **Page Load Time**: Track initial page load performance
- **Resource Loading**: Monitor slow-loading resources
- **User Interactions**: Track interaction response times
- **Memory Usage**: Monitor JavaScript heap usage
- **Core Web Vitals**: Track LCP, FID, CLS metrics

## Analytics Dashboard

### Google Analytics
- **Audience**: See visitor demographics and behavior
- **Acquisition**: Track traffic sources and campaigns
- **Behavior**: Analyze user flow and content performance
- **Conversions**: Track goal completions and events

### Sentry Dashboard
- **Issues**: View and manage error reports
- **Performance**: Monitor application performance
- **Releases**: Track deployment impact on errors
- **Alerts**: Set up notifications for critical errors

## Custom Events

The application tracks these custom events:

### Navigation Events
- `page_view`: When users visit pages
- `navigation`: When users navigate between pages
- `button_click`: When users click buttons

### Portfolio Events
- `project_view`: When users view projects
- `certificate_view`: When users view certificates
- `course_view`: When users view courses

### User Engagement
- `external_link`: When users click external links
- `download`: When users download files
- `search`: When users perform searches
- `time_on_page`: Track time spent on pages

## Privacy & GDPR Compliance

- Analytics data is anonymized
- No personal information is collected
- Users can opt-out through browser settings
- Data retention follows Google Analytics policies
- Sentry data is stored securely and can be deleted on request

## Troubleshooting

### Google Analytics Not Working
1. Check if GA_TRACKING_ID is correct
2. Verify the script is loaded in index.html
3. Check browser console for errors
4. Use Google Analytics Debugger extension

### Sentry Not Working
1. Verify SENTRY_DSN is correct
2. Check if Sentry is initialized in App.tsx
3. Look for errors in browser console
4. Verify network requests to Sentry

### Performance Issues
1. Check PerformanceMonitor component
2. Review browser DevTools Performance tab
3. Monitor network requests
4. Check for memory leaks

## Development vs Production

- **Development**: Analytics disabled by default
- **Production**: Full analytics and error tracking enabled
- **Testing**: Use separate GA and Sentry projects for testing

## Support

For issues with analytics setup:
1. Check the browser console for errors
2. Verify all IDs and DSNs are correct
3. Test in incognito mode to avoid caching
4. Check network tab for failed requests
