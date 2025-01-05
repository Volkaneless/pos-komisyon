import { Check, CreditCard } from "lucide-react";
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
  console.log('Rendering POSCard with logo:', logo);
  
  return (
    <div className="glass-card rounded-2xl p-4 md:p-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8 mb-6 md:mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/12b9f566-b156-421b-8f7d-cb5fe8fc500a.png" 
              alt={name} 
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
            />
          </div>
          <h3 className="font-semibold text-lg md:text-xl">{name}</h3>
        </div>
        <div className="flex gap-2 md:gap-3">
          <button className="flex-1 md:flex-none button-primary text-sm md:text-base">
            Hemen Başvur
          </button>
          <Link 
            to={`/pos/${id}`}
            className="flex-1 md:flex-none border border-primary text-primary hover:bg-primary-light px-4 md:px-8 py-2 rounded-lg transition-all duration-200 text-sm md:text-base text-center"
          >
            İncele
          </Link>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-6 md:mb-8">
        <div>
          <p className="text-gray-500 text-sm mb-1 md:mb-2">POS Türü</p>
          <p className="font-medium text-base md:text-lg">{type}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm mb-1 md:mb-2">Aidat Ödemesi</p>
          <p className="font-medium text-base md:text-lg">{monthly_fee}</p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p className="text-gray-500 text-sm mb-1 md:mb-2">Komisyon Oranı</p>
            <HoverCard>
              <HoverCardTrigger>
                <Info className="w-4 h-4 text-gray-400" />
              </HoverCardTrigger>
              <HoverCardContent>
                Bu oran, işlem tutarı üzerinden alınan komisyon oranını gösterir.
              </HoverCardContent>
            </HoverCard>
          </div>
          <p className="font-medium text-base md:text-lg">{commission_rate}</p>
        </div>
      </div>
      
      <div className="border-t pt-4 md:pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2 text-gray-600 text-sm md:text-base">
              <Check size={20} className="text-primary mt-1 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default POSCard;