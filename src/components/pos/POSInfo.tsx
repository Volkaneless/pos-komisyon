import { Info } from "lucide-react";
import type { POSProvider } from "@/types/pos";

interface POSInfoProps {
  provider: POSProvider;
}

const POSInfo = ({ provider }: POSInfoProps) => {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div>
        <p className="text-gray-500 mb-2">POS Türü</p>
        <p className="font-medium text-lg">{provider.type}</p>
      </div>
      <div>
        <p className="text-gray-500 mb-2">Aidat Ödemesi</p>
        <p className="font-medium text-lg">{provider.monthly_fee}</p>
      </div>
      <div>
        <div className="flex items-center gap-2">
          <p className="text-gray-500 mb-2">Komisyon Oranı</p>
          <Info className="w-4 h-4 text-gray-400" />
        </div>
        <p className="font-medium text-lg">{provider.commission_rate}</p>
      </div>
    </div>
  );
};

export default POSInfo;