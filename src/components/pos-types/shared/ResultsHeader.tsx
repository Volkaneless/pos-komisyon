
import { TrendingUp, X, Filter, Search, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ResultsHeaderProps {
  filteredCount: number;
  hasActiveFilters: boolean;
  onClearFilters: () => void;
  searchTerm: string;
  selectedProviders: string[];
  selectedTypes: string[];
  onSearchChange: (value: string) => void;
  onProviderChange: (provider: string) => void;
  onTypeChange: (type: string) => void;
}

const ResultsHeader = ({
  filteredCount,
  hasActiveFilters,
  onClearFilters,
  searchTerm,
  selectedProviders,
  selectedTypes,
  onSearchChange,
  onProviderChange,
  onTypeChange
}: ResultsHeaderProps) => {
  return (
    <div className="mb-6 bg-white rounded-lg border p-4 md:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            {filteredCount} POS Seçeneği Bulundu
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            {hasActiveFilters ? 'Filtrelere göre sonuçlar' : 'Tüm POS seçenekleri'}
          </p>
        </div>
        {hasActiveFilters && (
          <Button variant="outline" size="sm" onClick={onClearFilters} className="shrink-0">
            <X className="w-4 h-4 mr-1" />
            Filtreleri Temizle
          </Button>
        )}
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="mt-4 pt-4 border-t">
          <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Aktif Filtreler:
          </h4>
          <div className="flex flex-wrap gap-2">
            {searchTerm && (
              <Badge variant="secondary" className="flex items-center gap-2">
                <Search className="w-3 h-3" />
                "{searchTerm}"
                <button
                  onClick={() => onSearchChange("")}
                  className="hover:bg-gray-300 rounded-full w-4 h-4 flex items-center justify-center ml-1"
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            )}
            {selectedProviders.map(provider => (
              <Badge key={provider} variant="secondary" className="flex items-center gap-2">
                <Building className="w-3 h-3" />
                {provider}
                <button
                  onClick={() => onProviderChange(provider)}
                  className="hover:bg-gray-300 rounded-full w-4 h-4 flex items-center justify-center ml-1"
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
            {selectedTypes.map(type => (
              <Badge key={type} variant="secondary" className="flex items-center gap-2">
                {type}
                <button
                  onClick={() => onTypeChange(type)}
                  className="hover:bg-gray-300 rounded-full w-4 h-4 flex items-center justify-center ml-1"
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultsHeader;
