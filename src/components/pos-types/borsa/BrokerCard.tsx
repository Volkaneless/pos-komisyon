
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
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 p-2 rounded-lg">
              <img 
                src={provider.logo} 
                alt={provider.name} 
                className="h-8 w-8 object-contain" 
              />
            </div>
            <h3 className="font-semibold text-lg">{provider.name}</h3>
          </div>
          <div className="flex gap-2">
            <Button className="bg-primary hover:bg-primary/90">
              Hemen Başvur
            </Button>
            <Link to={`/pos/${provider.id}`} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              İncele
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 border-b border-gray-100 pb-6">
          <div>
            <p className="text-sm text-gray-500 mb-1">POS Türü</p>
            <p>{provider.type}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Aidat Ödemesi</p>
            <p>{provider.monthly_fee}</p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-500 mb-1">Komisyon Oranı</p>
              <HoverCard>
                <HoverCardTrigger>
                  <Info className="w-4 h-4 text-gray-400" />
                </HoverCardTrigger>
                <HoverCardContent>
                  Bu oran, işlem tutarı üzerinden alınan komisyon oranını gösterir.
                </HoverCardContent>
              </HoverCard>
            </div>
            <p>{provider.commission_rate}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {provider.features.slice(0, 4).map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrokerCard;
