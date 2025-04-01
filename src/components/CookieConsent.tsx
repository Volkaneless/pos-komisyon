
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent already given
    const hasConsent = localStorage.getItem("cookieConsent");
    if (!hasConsent) {
      setIsVisible(true);
    } else {
      try {
        // Safely parse the stored consent value
        const consentData = JSON.parse(hasConsent);
        // If consent exists, enable Google analytics/ads based on saved preferences
        updateGoogleConsent(consentData);
      } catch (error) {
        // If there's an invalid value in localStorage, remove it and show consent again
        console.error("Invalid cookie consent data found:", error);
        localStorage.removeItem("cookieConsent");
        setIsVisible(true);
      }
    }
  }, []);

  const acceptAll = () => {
    const consent = {
      analytics: true,
      advertising: true,
      necessary: true,
      preferences: true,
    };
    localStorage.setItem("cookieConsent", JSON.stringify(consent));
    updateGoogleConsent(consent);
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    const consent = {
      analytics: false,
      advertising: false,
      necessary: true,
      preferences: false,
    };
    localStorage.setItem("cookieConsent", JSON.stringify(consent));
    updateGoogleConsent(consent);
    setIsVisible(false);
  };

  const updateGoogleConsent = (consent: {
    analytics: boolean;
    advertising: boolean;
    necessary: boolean;
    preferences: boolean;
  }) => {
    // Set Google consent mode values
    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: consent.analytics ? "granted" : "denied",
        ad_storage: consent.advertising ? "granted" : "denied",
        functionality_storage: consent.necessary ? "granted" : "denied",
        personalization_storage: consent.preferences ? "granted" : "denied",
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-4 md:p-6 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1 pr-4">
            <h3 className="text-lg font-semibold mb-2">Çerez Kullanımı</h3>
            <p className="text-gray-600 text-sm mb-2">
              Bu site, hizmetlerimizi geliştirmek ve deneyiminizi kişiselleştirmek için çerezleri kullanır. 
              Siteyi kullanmaya devam ederek tüm çerezlerin kullanımını kabul edebilir veya ayarlarınızı yönetebilirsiniz.
            </p>
            <div className="text-sm">
              <Link to="/gizlilik-politikasi" className="text-primary hover:underline mr-4">
                Gizlilik Politikası
              </Link>
              <Link to="/cerez-politikasi" className="text-primary hover:underline">
                Çerez Politikası
              </Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" onClick={acceptNecessary} className="whitespace-nowrap">
              Sadece Gerekli Çerezler
            </Button>
            <Button onClick={acceptAll} className="whitespace-nowrap">
              Tümünü Kabul Et
            </Button>
          </div>
          <button 
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={acceptNecessary}
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
