
import { Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  HoverCard, 
  HoverCardContent, 
  HoverCardTrigger 
} from "@/components/ui/hover-card";
import type { POSProvider } from "@/types/pos";

interface BrokerCardProps {
  provider: POSProvider;
}

const BrokerCard = ({ provider }: BrokerCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
      <div className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="bg-gray-50 p-3 rounded-lg border flex-shrink-0">
              <img 
                src={provider.logo || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=64&h=64&fit=crop&crop=center"} 
                alt={provider.name} 
                className="h-12 w-12 object-contain" 
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=64&h=64&fit=crop&crop=center";
                }}
              />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-lg truncate">{provider.name}</h3>
              <p className="text-sm text-gray-500">{provider.type}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button className="bg-primary hover:bg-primary-hover w-full sm:w-auto">
              Hemen Başvur
            </Button>
            <Link 
              to={`/pos/${provider.id}`} 
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full sm:w-auto"
            >
              İncele
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-6 border-b border-gray-100 pb-6">
          <div>
            <p className="text-sm text-gray-500 mb-1">Kurum Türü</p>
            <p className="font-medium truncate">{provider.type}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Aidat Ödemesi</p>
            <p className="font-medium">{provider.monthly_fee}</p>
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-500 mb-1">Komisyon Oranı</p>
              <HoverCard>
                <HoverCardTrigger>
                  <Info className="w-4 h-4 text-gray-400" />
                </HoverCardTrigger>
                <HoverCardContent>
                  <p className="text-sm">Bu oran, işlem tutarı üzerinden alınan komisyon oranını gösterir.</p>
                  <p className="text-sm mt-1">Örnek: 10.000 TL'lik işlem için {(10000 * parseFloat(provider.commission_rate.replace('%', '')) / 100).toFixed(2)} TL komisyon.</p>
                </HoverCardContent>
              </HoverCard>
            </div>
            <p className="font-medium">{provider.commission_rate}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {provider.features.slice(0, 4).map((feature, index) => (
            <div key={index} className="flex items-center gap-2 p-1.5 rounded-md hover:bg-gray-50">
              <Check className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm truncate">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrokerCard;
