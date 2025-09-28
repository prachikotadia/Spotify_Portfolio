import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Custom hook to handle browser history and navigation
export const useBrowserHistory = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Handle browser back/forward buttons
    const handlePopState = (event: PopStateEvent) => {
      // React Router should handle this automatically, but we can add custom logic here if needed
      console.log('Browser navigation detected:', location.pathname);
    };

    // Add event listener for browser navigation
    window.addEventListener('popstate', handlePopState);

    // Handle keyboard shortcuts
    const handleKeyDown = (event: KeyboardEvent) => {
      // Alt + Left Arrow (browser back)
      if (event.altKey && event.key === 'ArrowLeft') {
        event.preventDefault();
        navigate(-1);
      }
      // Alt + Right Arrow (browser forward)
      if (event.altKey && event.key === 'ArrowRight') {
        event.preventDefault();
        navigate(1);
      }
    };

    // Add keyboard event listener
    document.addEventListener('keydown', handleKeyDown);

    // Handle touch gestures for mobile
    let touchStartX = 0;
    let touchStartY = 0;

    const handleTouchStart = (event: TouchEvent) => {
      touchStartX = event.touches[0].clientX;
      touchStartY = event.touches[0].clientY;
    };

    const handleTouchEnd = (event: TouchEvent) => {
      if (!touchStartX || !touchStartY) return;

      const touchEndX = event.changedTouches[0].clientX;
      const touchEndY = event.changedTouches[0].clientY;

      const diffX = touchStartX - touchEndX;
      const diffY = touchStartY - touchEndY;

      // Swipe left (go back) - only if horizontal swipe is more significant than vertical
      if (Math.abs(diffX) > Math.abs(diffY) && diffX > 50) {
        // Only navigate back if we're not on the home page
        if (location.pathname !== '/') {
          navigate(-1);
        }
      }
      // Swipe right (go forward) - only if horizontal swipe is more significant than vertical
      else if (Math.abs(diffX) > Math.abs(diffY) && diffX < -50) {
        navigate(1);
      }
    };

    // Add touch event listeners
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Cleanup event listeners
    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [navigate, location.pathname]);

  return {
    goBack: () => navigate(-1),
    goForward: () => navigate(1),
    canGoBack: window.history.length > 1,
  };
};
