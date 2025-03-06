
import { Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  HoverCard, 
  HoverCardContent, 
  HoverCardTrigger 
} from "@/components/ui/hover-card";
import type { CryptoExchange } from "@/types/crypto";

interface ExchangeCardProps {
  exchange: CryptoExchange;
}

const ExchangeCard = ({ exchange }: ExchangeCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 p-2 rounded-lg">
              <img 
                src={exchange.logo} 
                alt={exchange.name} 
                className="h-8 w-8 object-contain" 
              />
            </div>
            <h3 className="font-semibold text-lg">{exchange.name}</h3>
          </div>
          <div className="flex gap-2">
            <a href={`https://${exchange.id}.com`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              Hemen Üye Ol
            </a>
            <Link to={`/crypto/${exchange.id}`} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              İncele
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 border-b border-gray-100 pb-6">
          <div>
            <p className="text-sm text-gray-500 mb-1">Maker Ücreti</p>
            <p>{exchange.maker_fee}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Taker Ücreti</p>
            <p>{exchange.taker_fee}</p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-500 mb-1">Kuruluş Yılı</p>
              <HoverCard>
                <HoverCardTrigger>
                  <Info className="w-4 h-4 text-gray-400" />
                </HoverCardTrigger>
                <HoverCardContent>
                  Borsanın kuruluş yılı, tecrübe ve güvenilirlik göstergesidir.
                </HoverCardContent>
              </HoverCard>
            </div>
            <p>{exchange.founded}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {exchange.features.map((feature, index) => (
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

export default ExchangeCard;
