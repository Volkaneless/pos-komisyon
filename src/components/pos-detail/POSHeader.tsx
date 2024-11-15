import { Button } from "@/components/ui/button";
import type { POSProvider } from "@/types/pos";

interface POSHeaderProps {
  pos: POSProvider;
}

export const POSHeader = ({ pos }: POSHeaderProps) => {
  return (
    <div className="glass-card rounded-2xl p-8 mb-12">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <img src={pos.logo} alt={pos.name} className="w-16 h-16 object-contain" />
          <h1 className="font-semibold text-2xl">{pos.name}</h1>
        </div>
        <Button size="lg" className="bg-primary hover:bg-primary-hover">
          Hemen Başvur
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div>
          <p className="text-gray-500 mb-2">POS Türü</p>
          <p className="font-medium text-lg">{pos.type}</p>
        </div>
        <div>
          <p className="text-gray-500 mb-2">Aidat Ödemesi</p>
          <p className="font-medium text-lg">{pos.monthly_fee}</p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p className="text-gray-500 mb-2">Komisyon Oranı</p>
          </div>
          <p className="font-medium text-lg">{pos.commission_rate}</p>
        </div>
      </div>
    </div>
  );
};