import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 1. Tell TypeScript about the custom Meta Pixel function on the window object
declare global {
  interface Window {
    fbq: (
      type: string,
      eventName: string,
      data?: Record<string, any>
    ) => void;
  }
}

export const useMetaPixel = () => {
  const location = useLocation();

  // 2. Track Page Views on route change
  useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [location.pathname, location.search]);

  // 3. Expose a function for custom events
  const trackCustomEvent = (eventName: string, data: Record<string, any> = {}) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', eventName, data);
    }
  };

  return { trackCustomEvent };
};