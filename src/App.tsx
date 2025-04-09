
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from 'react-helmet-async';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import SecondaryFooter from "./components/SecondaryFooter";
import CookieConsent from "./components/CookieConsent";
import { routes } from "./routes";
import { useEffect } from "react";
import { isBrowser } from "./lib/utils";
import MetaTags from "./components/MetaTags";

const queryClient = new QueryClient();

// Initialize Google Consent Mode - extracted as a separate function for clarity
const initGoogleConsent = () => {
  if (!isBrowser()) return;
  
  // Initialize dataLayer if it doesn't exist
  window.dataLayer = window.dataLayer || [];
  
  // Define gtag function
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  
  // Set default consent parameters
  gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied',
    'functionality_storage': 'denied',
    'personalization_storage': 'denied',
    'security_storage': 'granted',
    'wait_for_update': 500
  });
  
  // Additional settings
  gtag('set', 'ads_data_redaction', true);
  gtag('set', 'url_passthrough', true);
};

const App = () => {
  useEffect(() => {
    initGoogleConsent();
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          {/* Default meta tags with lowest priority that will be overridden by page-specific ones */}
          <MetaTags 
            title="POS Komisyon - En Uygun POS Seçenekleri"
            description="POS cihazı komisyon oranları karşılaştırması ve hesaplaması"
            priority={1}
          />
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main className="flex-grow">
                <Routes>
                  {routes.map((route) => (
                    <Route
                      key={route.path}
                      path={route.path}
                      element={route.element}
                    />
                  ))}
                </Routes>
              </main>
              <SecondaryFooter />
              <Footer />
              <CookieConsent />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
