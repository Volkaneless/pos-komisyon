
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  // Çerez tercihlerini localStorage'den kontrol et
  useEffect(() => {
    const consentGiven = localStorage.getItem("cookieConsent");
    if (!consentGiven) {
      setShowBanner(true);
    }
  }, []);

  // Google Consent Mode'u güncelle
  const updateConsent = (consent: "granted" | "denied") => {
    if (typeof window.gtag !== "undefined") {
      window.gtag("consent", "update", {
        ad_storage: consent,
        analytics_storage: consent,
      });
    }
  };

  const acceptAllCookies = () => {
    localStorage.setItem("cookieConsent", "all");
    localStorage.setItem("cookieConsentTimestamp", new Date().toISOString());
    updateConsent("granted");
    setShowBanner(false);
    toast({
      title: "Çerezler kabul edildi",
      description: "Tüm çerezleri kabul ettiniz. Bu tercihi istediğiniz zaman değiştirebilirsiniz.",
    });
  };

  const acceptNecessaryCookies = () => {
    localStorage.setItem("cookieConsent", "necessary");
    localStorage.setItem("cookieConsentTimestamp", new Date().toISOString());
    updateConsent("denied");
    setShowBanner(false);
    toast({
      title: "Sadece gerekli çerezler kabul edildi",
      description: "Sadece gerekli çerezleri kabul ettiniz. Bu tercihi istediğiniz zaman değiştirebilirsiniz.",
    });
  };

  const rejectAllCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    localStorage.setItem("cookieConsentTimestamp", new Date().toISOString());
    updateConsent("denied");
    setShowBanner(false);
    toast({
      title: "Çerezler reddedildi",
      description: "Tüm çerezleri reddettiniz. Bu tercihi istediğiniz zaman değiştirebilirsiniz.",
    });
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold">Çerez Tercihleriniz</h3>
          <button 
            onClick={() => setShowBanner(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>
        
        <p className="text-gray-600 mb-4">
          Bu web sitesi, sizlere en iyi deneyimi sunmak için çerezleri kullanır. 
          Gizliliğinizi korumak için hangi çerezleri kabul edeceğinizi seçebilirsiniz. 
          Daha fazla bilgi için <Link to="/cerez-politikasi" className="text-primary hover:underline">Çerez Politikası</Link> ve{" "}
          <Link to="/gizlilik-politikasi" className="text-primary hover:underline">Gizlilik Politikası</Link> sayfalarımızı ziyaret edebilirsiniz.
        </p>
        
        <div className="flex flex-wrap gap-3 justify-end">
          <button 
            onClick={rejectAllCookies}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Reddet
          </button>
          <button 
            onClick={acceptNecessaryCookies}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Sadece Gerekli Çerezler
          </button>
          <button 
            onClick={acceptAllCookies}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
          >
            Tümünü Kabul Et
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
