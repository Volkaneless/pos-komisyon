import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOPageView {
  path: string;
  title: string;
  timestamp: number;
}

/**
 * Hook for SEO-related functionality and analytics
 */
export const useSEO = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views for analytics
    const pageView: SEOPageView = {
      path: location.pathname + location.search,
      title: document.title,
      timestamp: Date.now()
    };

    // Store recent page views for internal analytics
    const recentViews = JSON.parse(
      localStorage.getItem('recentPageViews') || '[]'
    ).slice(0, 9); // Keep last 10 views
    
    recentViews.unshift(pageView);
    localStorage.setItem('recentPageViews', JSON.stringify(recentViews));

    // Send to Google Analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: pageView.path,
        page_title: pageView.title
      });
    }

    // Preload critical resources for next likely navigation
    preloadCriticalResources(location.pathname);
  }, [location]);

  const preloadCriticalResources = (currentPath: string) => {
    const preloadMap: Record<string, string[]> = {
      '/': ['/pos-types/sanal', '/pos-types/banka', '/pos-types/cep'],
      '/pos-types/sanal': ['/pos/iyzico-sanal', '/pos/paytr-sanal', '/pos/param-sanal'],
      '/pos-types/banka': ['/pos/garanti-pos', '/pos/isbank-pos', '/pos/akbank-fiziki'],
      '/pos-types/cep': ['/pos/paycell-mobil', '/pos/enpara-mobil', '/pos/odeal-pos']
    };

    const urlsToPreload = preloadMap[currentPath] || [];
    
    urlsToPreload.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = url;
      document.head.appendChild(link);
    });
  };

  const updatePageTitle = (title: string) => {
    document.title = title;
  };

  const updateMetaDescription = (description: string) => {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  };

  return {
    updatePageTitle,
    updateMetaDescription,
    currentPath: location.pathname
  };
};