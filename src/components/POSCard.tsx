
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
    <div className="bg-white rounded-lg shadow-sm border p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center flex-shrink-0">
            <img 
              src={logo} 
              alt={`${name} Logo`} 
              className="w-5 h-5 object-contain"
            />
          </div>
          <div>
            <h3 className="font-semibold text-sm">{name}</h3>
            <p className="text-xs text-gray-500">{type}</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3 mb-3 text-xs">
        <div>
          <p className="text-gray-500 mb-1">Aylık Ücret</p>
          <p className="font-medium">{monthly_fee}</p>
        </div>
        <div>
          <div className="flex items-center gap-1 mb-1">
            <p className="text-gray-500">Komisyon</p>
            <HoverCard>
              <HoverCardTrigger>
                <Info className="w-3 h-3 text-gray-400" />
              </HoverCardTrigger>
              <HoverCardContent>
                Bu oran, işlem tutarı üzerinden alınan komisyon oranını gösterir.
              </HoverCardContent>
            </HoverCard>
          </div>
          <p className="font-medium">%{commission_rate}</p>
        </div>
      </div>
      
      <div className="space-y-1 mb-3">
        {features.slice(0, 2).map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <Check className="h-3 w-3 text-primary flex-shrink-0" />
            <span className="text-xs text-gray-600">{feature}</span>
          </div>
        ))}
        {features.length > 2 && (
          <p className="text-xs text-gray-500">+{features.length - 2} özellik daha</p>
        )}
      </div>

      <div className="flex gap-2">
        <Button size="sm" className="bg-primary text-white hover:bg-primary/90 flex-1 text-xs">
          Başvur
        </Button>
        <Link to={`/pos/${id}`} className="flex-1">
          <Button variant="outline" size="sm" className="w-full text-xs">
            İncele
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default POSCard;
