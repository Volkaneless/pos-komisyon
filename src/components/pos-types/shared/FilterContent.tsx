
import { Search, Building, X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface FilterContentProps {
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
  isMobile?: boolean;
}

const FilterContent = ({ 
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
  isMobile = false
}: FilterContentProps) => (
  <div className={`${isMobile ? 'h-[calc(100vh-120px)]' : 'max-h-[calc(100vh-200px)]'}`}>
    <ScrollArea className="h-full">
      <div className="p-6 space-y-6">
        {/* Search */}
        <div>
          <h3 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
            <Search className="w-4 h-4" />
            Arama
          </h3>
          <Input
            placeholder="POS adı, türü veya komisyon ara..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Provider Filters */}
        <div>
          <h3 className="font-medium text-gray-900 mb-3 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Building className="w-4 h-4" />
              Kurum
            </span>
            <Badge variant="outline" className="text-xs">
              {Object.keys(uniqueProviders).length}
            </Badge>
          </h3>
          <div className="space-y-3 max-h-48 overflow-y-auto">
            {Object.entries(uniqueProviders)
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([provider, count]) => (
              <div key={provider} className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded transition-colors">
                <Checkbox
                  id={`provider-${provider}`}
                  checked={selectedProviders.includes(provider)}
                  onCheckedChange={() => onProviderChange(provider)}
                />
                <label
                  htmlFor={`provider-${provider}`}
                  className="text-sm text-gray-700 cursor-pointer flex-1 font-medium"
                >
                  {provider}
                </label>
                <Badge variant="secondary" className="text-xs">
                  {count}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Type Filters */}
        <div>
          <h3 className="font-medium text-gray-900 mb-3 flex items-center justify-between">
            <span>POS Türü</span>
            <Badge variant="outline" className="text-xs">
              {Object.keys(uniqueTypes).length}
            </Badge>
          </h3>
          <div className="space-y-3">
            {Object.entries(uniqueTypes)
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([type, count]) => (
              <div key={type} className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded transition-colors">
                <Checkbox
                  id={`type-${type}`}
                  checked={selectedTypes.includes(type)}
                  onCheckedChange={() => onTypeChange(type)}
                />
                <label
                  htmlFor={`type-${type}`}
                  className="text-sm text-gray-700 cursor-pointer flex-1 font-medium"
                >
                  {type}
                </label>
                <Badge variant="secondary" className="text-xs">
                  {count}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Actions */}
        {hasActiveFilters && (
          <div className="border-t pt-4">
            <div className="text-sm text-gray-600 mb-3">
              Toplam {selectedProviders.length + selectedTypes.length + (searchTerm ? 1 : 0)} filtre aktif
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onClearFilters}
              className="w-full"
            >
              <X className="w-4 h-4 mr-2" />
              Tüm Filtreleri Temizle
            </Button>
          </div>
        )}
      </div>
    </ScrollArea>
  </div>
);

export default FilterContent;
