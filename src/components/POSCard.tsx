
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
    <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
            <img 
              src={logo} 
              alt={`${name} Logo`} 
              className="w-8 h-8 object-contain"
            />
          </div>
          <h3 className="font-semibold text-lg">{name}</h3>
        </div>
        <div className="flex gap-2">
          <Button className="bg-primary text-white hover:bg-primary/90">Hemen Başvur</Button>
          <Link to={`/pos/${id}`}>
            <Button variant="outline">İncele</Button>
          </Link>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-6 mb-6 border-b pb-6">
        <div>
          <p className="text-gray-500 text-sm mb-1">POS Türü</p>
          <p className="font-medium">{type}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm mb-1">Aidat Ödemesi</p>
          <p className="font-medium">{monthly_fee}</p>
        </div>
        <div>
          <div className="flex items-center gap-1">
            <p className="text-gray-500 text-sm mb-1">Komisyon Oranı</p>
            <HoverCard>
              <HoverCardTrigger>
                <Info className="w-4 h-4 text-gray-400" />
              </HoverCardTrigger>
              <HoverCardContent>
                Bu oran, işlem tutarı üzerinden alınan komisyon oranını gösterir.
              </HoverCardContent>
            </HoverCard>
          </div>
          <p className="font-medium">{commission_rate}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary flex-shrink-0" />
            <span className="text-sm text-gray-600">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default POSCard;
