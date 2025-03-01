
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import SecondaryFooter from "./components/SecondaryFooter";
import CookieConsent from "./components/CookieConsent";
import { routes } from "./routes";

const queryClient = new QueryClient();

// Canonical URL bileşeni
const CanonicalUrl = () => {
  const location = useLocation();
  const baseUrl = "https://poskomisyon.com";
  const canonicalPath = location.pathname === "/" ? "" : location.pathname;
  
  return (
    <Helmet>
      <link rel="canonical" href={`${baseUrl}${canonicalPath}`} />
      {location.pathname !== "/" && (
        <link rel="alternate" href={baseUrl} />
      )}
    </Helmet>
  );
};

const AppContent = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <CanonicalUrl />
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
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
