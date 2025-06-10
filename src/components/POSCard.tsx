
import { Check, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Button } from "./ui/button";

interface POSCardProps {
  id: string;
  logo: string;
  name: string;
  type: string;
  monthly_fee: string;
  commission_rate: string;
  features: string[];
}

const POSCard = ({ id, logo, name, type, monthly_fee, commission_rate, features }: POSCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-4 mb-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
            <img 
              src={logo} 
              alt={`${name} Logo`} 
              className="w-6 h-6 object-contain"
            />
          </div>
          <h3 className="font-semibold text-base">{name}</h3>
        </div>
      </div>
      
      <div className="space-y-3 mb-4 border-b pb-4">
        <div>
          <p className="text-gray-500 text-xs mb-1">POS Türü</p>
          <p className="font-medium text-sm">{type}</p>
        </div>
        <div>
          <p className="text-gray-500 text-xs mb-1">Aidat Ödemesi</p>
          <p className="font-medium text-sm">{monthly_fee}</p>
        </div>
        <div>
          <div className="flex items-center gap-1">
            <p className="text-gray-500 text-xs mb-1">Komisyon Oranı</p>
            <HoverCard>
              <HoverCardTrigger>
                <Info className="w-3 h-3 text-gray-400" />
              </HoverCardTrigger>
              <HoverCardContent>
                Bu oran, işlem tutarı üzerinden alınan komisyon oranını gösterir.
              </HoverCardContent>
            </HoverCard>
          </div>
          <p className="font-medium text-sm">{commission_rate}</p>
        </div>
      </div>
      
      <div className="space-y-2 mb-4">
        {features.slice(0, 3).map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <Check className="h-3 w-3 text-primary flex-shrink-0" />
            <span className="text-xs text-gray-600">{feature}</span>
          </div>
        ))}
        {features.length > 3 && (
          <p className="text-xs text-gray-500">+{features.length - 3} özellik daha</p>
        )}
      </div>

      <div className="flex gap-2">
        <Button size="sm" className="bg-primary text-white hover:bg-primary/90 flex-1">
          Hemen Başvur
        </Button>
        <Link to={`/pos/${id}`} className="flex-1">
          <Button variant="outline" size="sm" className="w-full">
            İncele
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default POSCard;
