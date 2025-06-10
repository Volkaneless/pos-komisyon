
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
    <div className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center flex-shrink-0">
            <img 
              src={logo} 
              alt={`${name} Logo`} 
              className="w-8 h-8 object-contain"
            />
          </div>
          
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-1">{name}</h3>
            <p className="text-sm text-gray-500 mb-3">{type}</p>
            
            <div className="flex items-center gap-6 text-sm">
              <div>
                <span className="text-gray-500">Aylık Ücret: </span>
                <span className="font-medium">{monthly_fee}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-gray-500">Komisyon: </span>
                <span className="font-medium">%{commission_rate}</span>
                <HoverCard>
                  <HoverCardTrigger>
                    <Info className="w-3 h-3 text-gray-400 ml-1" />
                  </HoverCardTrigger>
                  <HoverCardContent>
                    Bu oran, işlem tutarı üzerinden alınan komisyon oranını gösterir.
                  </HoverCardContent>
                </HoverCard>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-3">
              {features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-center gap-1">
                  <Check className="h-3 w-3 text-primary flex-shrink-0" />
                  <span className="text-xs text-gray-600">{feature}</span>
                </div>
              ))}
              {features.length > 3 && (
                <span className="text-xs text-gray-500">+{features.length - 3} özellik daha</span>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-3 ml-6">
          <Button size="sm" className="bg-primary text-white hover:bg-primary/90 text-sm px-6">
            Başvur
          </Button>
          <Link to={`/pos/${id}`}>
            <Button variant="outline" size="sm" className="text-sm px-6">
              İncele
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default POSCard;
