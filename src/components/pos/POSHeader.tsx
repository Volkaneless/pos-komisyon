import { Button } from "@/components/ui/button";
import type { POSProvider } from "@/types/pos";

interface POSHeaderProps {
  provider: POSProvider;
}

const POSHeader = ({ provider }: POSHeaderProps) => {
  const pageTitle = `${provider.name} Komisyon Oranları & ${provider.name} Destek Hattı`;

  return (
    <>
      <h1 className="text-2xl font-bold mb-8">{pageTitle}</h1>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <img 
            src={provider.logo} 
            alt={provider.name} 
            className="w-16 h-16 object-contain" 
          />
          <h2 className="font-semibold text-2xl">{provider.name}</h2>
        </div>
        <Button size="lg" className="bg-primary hover:bg-primary-hover">
          Hemen Başvur
        </Button>
      </div>
    </>
  );
};

export default POSHeader;