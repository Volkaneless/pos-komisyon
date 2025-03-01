
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent was already given
    const hasConsent = localStorage.getItem("cookieConsent");
    if (!hasConsent) {
      setIsVisible(true);
    } else {
      // If consent was given, update Google Consent Mode
      updateConsentState(hasConsent === "granted");
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "granted");
    setIsVisible(false);
    updateConsentState(true);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "denied");
    setIsVisible(false);
    updateConsentState(false);
  };

  const updateConsentState = (granted: boolean) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        ad_storage: granted ? "granted" : "denied",
        analytics_storage: granted ? "granted" : "denied",
        functionality_storage: granted ? "granted" : "denied",
        personalization_storage: granted ? "granted" : "denied",
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-gray-200 p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-gray-600">
            Bu web sitesi, deneyiminizi geliştirmek için çerezleri kullanmaktadır. "Tümünü Kabul Et" seçeneğine tıklayarak, çerezlerin kullanımını kabul etmiş olursunuz. Daha fazla bilgi için{" "}
            <Link to="/gizlilik-politikasi" className="text-primary hover:underline">
              Gizlilik Politikamız
            </Link>{" "}
            ve{" "}
            <Link to="/cerez-politikasi" className="text-primary hover:underline">
              Çerez Politikamıza
            </Link>{" "}
            göz atabilirsiniz.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={handleDecline}
            className="whitespace-nowrap"
          >
            Reddet
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={handleAccept}
            className="whitespace-nowrap"
          >
            Tümünü Kabul Et
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
