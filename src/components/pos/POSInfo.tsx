
import { Info } from "lucide-react";
import type { POSProvider } from "@/types/pos";

interface POSInfoProps {
  provider: POSProvider;
}

const POSInfo = ({ provider }: POSInfoProps) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Genel Bilgiler</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-6 gap-x-8">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-500 text-sm mb-2">POS Türü</p>
          <p className="font-medium text-lg">{provider.type}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-500 text-sm mb-2">Aidat Ödemesi</p>
          <p className="font-medium text-lg">{provider.monthly_fee}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <p className="text-gray-500 text-sm mb-2">Komisyon Oranı</p>
            <Info className="w-4 h-4 text-gray-400" />
          </div>
          <p className="font-medium text-lg">{provider.commission_rate}</p>
        </div>
      </div>
    </div>
  );
};

export default POSInfo;
