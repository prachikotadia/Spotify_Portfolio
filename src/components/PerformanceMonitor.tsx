import { useEffect } from 'react';
import { PERFORMANCE_THRESHOLDS } from '@/config/analytics';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Track page load performance
    const trackPageLoad = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
          const firstPaint = performance.getEntriesByName('first-paint')[0]?.startTime || 0;
          const firstContentfulPaint = performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0;
          
          // Log performance metrics to console
          console.log('Performance Metrics:', {
            'Page Load Time': loadTime,
            'DOM Content Loaded': domContentLoaded,
            'First Paint': firstPaint,
            'First Contentful Paint': firstContentfulPaint
          });
          
          // Track if performance is below threshold
          if (loadTime > PERFORMANCE_THRESHOLDS.PAGE_LOAD_TIME) {
            console.warn(`Page load time (${loadTime}ms) exceeds threshold (${PERFORMANCE_THRESHOLDS.PAGE_LOAD_TIME}ms)`);
          }
        }
      }
    };

    // Track resource loading performance
    const trackResourcePerformance = () => {
      if ('performance' in window) {
        const resources = performance.getEntriesByType('resource');
        
        resources.forEach((resource: PerformanceResourceTiming) => {
          const loadTime = resource.responseEnd - resource.startTime;
          
          // Log slow resources
          if (loadTime > 1000) { // 1 second
            console.warn(`Slow Resource: ${resource.name} (${loadTime}ms)`);
          }
        });
      }
    };

    // Track user interactions
    const trackUserInteractions = () => {
      let interactionStart = 0;
      
      const handleInteractionStart = () => {
        interactionStart = performance.now();
      };
      
      const handleInteractionEnd = () => {
        const interactionTime = performance.now() - interactionStart;
        
        if (interactionTime > PERFORMANCE_THRESHOLDS.INTERACTION_TIME) {
          console.warn(`Slow Interaction: ${interactionTime}ms`);
        }
      };
      
      // Track clicks
      document.addEventListener('click', handleInteractionStart);
      document.addEventListener('click', handleInteractionEnd, { once: true });
      
      // Track keyboard interactions
      document.addEventListener('keydown', handleInteractionStart);
      document.addEventListener('keyup', handleInteractionEnd, { once: true });
    };

    // Initialize performance tracking
    if (document.readyState === 'complete') {
      trackPageLoad();
    } else {
      window.addEventListener('load', trackPageLoad);
    }
    
    // Track resource performance after a delay
    setTimeout(trackResourcePerformance, 2000);
    
    // Track user interactions
    trackUserInteractions();
    
    // Track memory usage (if available)
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      console.log('Memory Usage:', {
        'Memory Used': memory.usedJSHeapSize,
        'Memory Total': memory.totalJSHeapSize
      });
    }
    
  }, []);

  return null;
};

export default PerformanceMonitor;
