
import { Button } from "@/components/ui/button";
import type { POSProvider } from "@/types/pos";

interface POSHeaderProps {
  provider: POSProvider;
}

const POSHeader = ({ provider }: POSHeaderProps) => {
  // Fallback image if provider.logo is not available or valid
  const logoSrc = provider.logo || "/lovable-uploads/1582e9fb-1b29-4608-a202-4923d8e8721b.png";
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div className="flex items-center gap-5">
        <div className="bg-primary-light p-3 rounded-xl flex items-center justify-center">
          <img src={logoSrc} alt={provider.name} className="w-16 h-16 object-contain" />
        </div>
        <div>
          <h1 className="font-semibold text-2xl md:text-3xl">{provider.name}</h1>
          <p className="text-gray-500 mt-1">{provider.type}</p>
        </div>
      </div>
      <Button 
        size="lg" 
        className="bg-primary hover:bg-primary-hover transition-all duration-300 px-6 py-3 h-auto text-base"
      >
        Hemen Başvur
      </Button>
    </div>
  );
};

export default POSHeader;
