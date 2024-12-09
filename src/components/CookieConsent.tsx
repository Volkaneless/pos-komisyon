import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
    console.log('Cookie consent accepted');
  };

  const handleManagePreferences = () => {
    // Implement CMP integration here
    console.log('Opening cookie preferences');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-gray-600">
            Bu web sitesi, size en iyi deneyimi sunmak için çerezleri kullanır. Reklamları kişiselleştirmek ve site trafiğini analiz etmek için Google ve diğer üçüncü taraf sağlayıcılarla bilgi paylaşırız.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={handleManagePreferences}
            className="whitespace-nowrap"
          >
            Seçenekleri Yönet
          </Button>
          <Button
            onClick={handleAccept}
            className="whitespace-nowrap bg-primary hover:bg-primary/90"
          >
            Tümünü Kabul Et
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;