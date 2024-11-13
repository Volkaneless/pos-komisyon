import { Check } from "lucide-react";

interface POSCardProps {
  logo: string;
  name: string;
  type: string;
  monthlyFee: string;
  commissionRate: string;
  features: string[];
}

const POSCard = ({ logo, name, type, monthlyFee, commissionRate, features }: POSCardProps) => {
  return (
    <div className="glass-card rounded-xl p-6 animate-fade-in">
      <div className="flex items-center gap-4 mb-6">
        <img src={logo} alt={name} className="w-12 h-12 object-contain" />
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-gray-500">{type}</p>
        </div>
      </div>
      
      <div className="space-y-4 mb-6">
        <div>
          <p className="text-sm text-gray-500">Aylık Ücret</p>
          <p className="text-lg font-semibold">{monthlyFee}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Komisyon Oranı</p>
          <p className="text-lg font-semibold">{commissionRate}</p>
        </div>
      </div>
      
      <div className="space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
            <Check size={16} className="text-primary" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-6 flex gap-3">
        <button className="button-primary w-full">Hemen Başvur</button>
        <button className="button-secondary w-full">İncele</button>
      </div>
    </div>
  );
};

export default POSCard;