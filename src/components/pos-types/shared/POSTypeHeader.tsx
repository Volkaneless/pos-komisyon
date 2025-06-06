
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Building } from "lucide-react";

interface POSTypeHeaderProps {
  title: string;
  description: string;
  totalCount: number;
  lowestCommission: string;
  avgCommission: string;
  uniqueProvidersCount: number;
}

const POSTypeHeader = ({
  title,
  description,
  totalCount,
  lowestCommission,
  avgCommission,
  uniqueProvidersCount
}: POSTypeHeaderProps) => {
  return (
    <div className="bg-white border-b">
      <div className="container mx-auto px-4 py-16 pt-32">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            {description}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-primary/10 text-primary px-3 py-2 rounded-lg text-center">
              <div className="font-semibold">{totalCount}</div>
              <div className="text-xs">POS Seçeneği</div>
            </div>
            <div className="bg-green-50 text-green-700 px-3 py-2 rounded-lg text-center">
              <div className="font-semibold">%{lowestCommission}</div>
              <div className="text-xs">En Düşük Komisyon</div>
            </div>
            <div className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-center">
              <div className="font-semibold">%{avgCommission}</div>
              <div className="text-xs">Ortalama Komisyon</div>
            </div>
            <div className="bg-purple-50 text-purple-700 px-3 py-2 rounded-lg text-center">
              <div className="font-semibold">{uniqueProvidersCount}</div>
              <div className="text-xs">Farklı Kurum</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default POSTypeHeader;
