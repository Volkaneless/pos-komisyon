import { Check } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Info } from "lucide-react";
import { Link } from "react-router-dom";

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
  console.log('Rendering POSCard for:', { id, name, type });
  
  return (
    <div className="glass-card rounded-2xl p-8 animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <img src={logo} alt={name} className="w-16 h-16 object-contain" />
          <h3 className="font-semibold text-xl">{name}</h3>
        </div>
        <div className="flex gap-3">
          <button className="button-primary">Hemen Başvur</button>
          <Link 
            to={`/pos/${id}`}
            className="border border-primary text-primary hover:bg-primary-light px-8 py-2 rounded-lg transition-all duration-200"
          >
            İncele
          </Link>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-8 mb-8">
        <div>
          <p className="text-gray-500 mb-2">POS Türü</p>
          <p className="font-medium text-lg">{type}</p>
        </div>
        <div>
          <p className="text-gray-500 mb-2">Aidat Ödemesi</p>
          <p className="font-medium text-lg">{monthly_fee}</p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p className="text-gray-500 mb-2">Komisyon Oranı</p>
            <HoverCard>
              <HoverCardTrigger>
                <Info className="w-4 h-4 text-gray-400" />
              </HoverCardTrigger>
              <HoverCardContent>
                Bu oran, işlem tutarı üzerinden alınan komisyon oranını gösterir.
              </HoverCardContent>
            </HoverCard>
          </div>
          <p className="font-medium text-lg">{commission_rate}</p>
        </div>
      </div>
      
      <div className="border-t pt-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2 text-gray-600">
            <Check size={20} className="text-primary mt-1 flex-shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default POSCard;