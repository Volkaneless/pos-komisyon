
import { Info } from "lucide-react";
import type { POSProvider } from "@/types/pos";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface POSInfoProps {
  provider: POSProvider;
  currentYear?: number;
}

const POSInfo = ({ provider, currentYear }: POSInfoProps) => {
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
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="w-4 h-4 text-gray-400 cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs text-sm">
                  Belirtilen komisyon oranları, peşin işlemler için geçerlidir. 
                  Taksitli işlemlerde, taksit sayısına göre ek komisyon uygulanabilir.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <p className="font-medium text-lg">{provider.commission_rate}</p>
      </div>
    </div>
  );
};

export default POSInfo;
