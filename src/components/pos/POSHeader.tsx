
import { Button } from "@/components/ui/button";
import type { POSProvider } from "@/types/pos";

interface POSHeaderProps {
  provider: POSProvider;
}

const POSHeader = ({ provider }: POSHeaderProps) => {
  // Fallback image if provider.logo is not available or valid
  const logoSrc = provider.logo || "/logo.svg";
  
  // Generate dynamic description text based on provider name
  const getProviderDescription = (providerName: string) => {
    const currentYear = new Date().getFullYear();
    return `${providerName} POS komisyon oranları ${currentYear}, ${provider.type.toLowerCase()} komisyon oranları ve kampanyaları hakkında bilgi edinin. ${providerName} POS komisyon hesaplama ve kesinti oranlarını öğrenin. ${providerName} POS ve sanal POS başvurusu için detaylar burada!`;
  };
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <div className="bg-primary-lighter p-4 rounded-xl flex items-center justify-center">
          <img src={logoSrc} alt={`${provider.name} logo`} className="w-16 h-16 object-contain" />
        </div>
        <div>
          <h1 className="font-semibold text-2xl md:text-3xl">{provider.name} POS Komisyon Oranları</h1>
          <p className="text-gray-500 mt-1">{getProviderDescription(provider.name)}</p>
        </div>
      </div>
      <Button 
        size="lg" 
        className="bg-primary hover:bg-primary-hover transition-all duration-300 px-6 py-3 h-auto text-base w-full sm:w-auto"
      >
        Hemen Başvur
      </Button>
    </div>
  );
};

export default POSHeader;
