
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
    <div className="bg-white rounded-lg shadow-sm border p-4 md:p-6 hover:shadow-md transition-shadow">
      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0 border">
            <img 
              src="/lovable-uploads/022dd1e4-49bd-409f-9b2a-2da2b294b413.png" 
              alt={`${name} Logo`} 
              className="w-12 h-12 object-contain"
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg mb-1 truncate">{name}</h3>
            <p className="text-sm text-gray-500 mb-3">{type}</p>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Aylık Ücret:</span>
                <span className="font-medium">{monthly_fee}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-gray-500">Komisyon:</span>
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
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-3">
              {features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-center gap-1">
                  <Check className="h-3 w-3 text-primary flex-shrink-0" />
                  <span className="text-xs text-gray-600 truncate">{feature}</span>
                </div>
              ))}
            </div>
            {features.length > 3 && (
              <span className="text-xs text-gray-500 mt-2 block">+{features.length - 3} özellik daha</span>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:ml-6 lg:flex-shrink-0">
          <Button size="sm" className="bg-primary text-white hover:bg-primary/90 text-sm px-4 sm:px-6 w-full sm:w-auto">
            Başvur
          </Button>
          <Link to={`/pos/${id}`} className="w-full sm:w-auto">
            <Button variant="outline" size="sm" className="text-sm px-4 sm:px-6 w-full">
              İncele
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default POSCard;
