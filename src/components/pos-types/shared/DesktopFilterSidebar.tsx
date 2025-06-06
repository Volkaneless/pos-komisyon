
import { Filter, X, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import FilterContent from "./FilterContent";

interface DesktopFilterSidebarProps {
  uniqueProviders: Record<string, number>;
  uniqueTypes: Record<string, number>;
  selectedProviders: string[];
  selectedTypes: string[];
  searchTerm: string;
  onProviderChange: (provider: string) => void;
  onTypeChange: (type: string) => void;
  onSearchChange: (value: string) => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
  filteredCount: number;
  lowestCommission: string;
}

const DesktopFilterSidebar = ({
  uniqueProviders,
  uniqueTypes,
  selectedProviders,
  selectedTypes,
  searchTerm,
  onProviderChange,
  onTypeChange,
  onSearchChange,
  onClearFilters,
  hasActiveFilters,
  filteredCount,
  lowestCommission
}: DesktopFilterSidebarProps) => {
  return (
    <div className="hidden lg:block w-80 flex-shrink-0">
      <div className="bg-white rounded-lg shadow-sm border sticky top-8">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <Filter className="w-5 h-5 mr-2 text-primary" />
              Filtreler
            </h2>
            {hasActiveFilters && (
              <Button variant="ghost" size="sm" onClick={onClearFilters}>
                <X className="w-4 h-4 mr-1" />
                Temizle
              </Button>
            )}
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-3 p-4 bg-gray-50 rounded-lg">
            <div className="text-center">
              <div className="text-lg font-bold text-primary">{filteredCount}</div>
              <div className="text-xs text-gray-600">Toplam Seçenek</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">%{lowestCommission}</div>
              <div className="text-xs text-gray-600">En Düşük</div>
            </div>
          </div>
        </div>

        <FilterContent 
          uniqueProviders={uniqueProviders}
          uniqueTypes={uniqueTypes}
          selectedProviders={selectedProviders}
          selectedTypes={selectedTypes}
          searchTerm={searchTerm}
          onProviderChange={onProviderChange}
          onTypeChange={onTypeChange}
          onSearchChange={onSearchChange}
          onClearFilters={onClearFilters}
          hasActiveFilters={hasActiveFilters}
          isMobile={false}
        />
      </div>
    </div>
  );
};

export default DesktopFilterSidebar;
