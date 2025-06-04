
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface FilterContentProps {
  uniqueProviders: Record<string, number>;
  uniqueTypes: Record<string, number>;
  selectedProviders: string[];
  selectedTypes: string[];
  selectedCommissionRange: string;
  selectedMonthlyFee: string;
  searchTerm: string;
  sortBy: string;
  onProviderChange: (provider: string) => void;
  onTypeChange: (type: string) => void;
  onCommissionRangeChange: (range: string) => void;
  onMonthlyFeeChange: (fee: string) => void;
  onSearchChange: (search: string) => void;
  onSortChange: (sort: string) => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
  commissionRanges: Array<{label: string; value: string; min: number; max: number}>;
  monthlyFeeOptions: Array<{label: string; value: string}>;
}

const FilterContent = ({
  uniqueProviders,
  uniqueTypes,
  selectedProviders,
  selectedTypes,
  selectedCommissionRange,
  selectedMonthlyFee,
  searchTerm,
  sortBy,
  onProviderChange,
  onTypeChange,
  onCommissionRangeChange,
  onMonthlyFeeChange,
  onSearchChange,
  onSortChange,
  onClearFilters,
  hasActiveFilters,
  commissionRanges,
  monthlyFeeOptions
}: FilterContentProps) => (
  <ScrollArea className="h-[calc(100vh-300px)]">
    <div className="space-y-6">
      {/* Header with Clear Button */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Filtreler</h2>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={onClearFilters}>
            <X className="w-4 h-4 mr-1" />
            Temizle
          </Button>
        )}
      </div>

      {/* Search */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">Arama</h3>
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
          <Input
            placeholder="POS adı veya türü ara..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Sort */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">Sıralama</h3>
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">İsme Göre</SelectItem>
            <SelectItem value="commission">Komisyon Oranına Göre</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div>
          <h3 className="font-medium text-gray-900 mb-3">Aktif Filtreler</h3>
          <div className="flex flex-wrap gap-2">
            {selectedProviders.map(provider => (
              <span key={provider} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm flex items-center gap-2">
                {provider}
                <button
                  onClick={() => onProviderChange(provider)}
                  className="hover:bg-primary/20 rounded-full w-4 h-4 flex items-center justify-center"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            {selectedTypes.map(type => (
              <span key={type} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm flex items-center gap-2">
                {type}
                <button
                  onClick={() => onTypeChange(type)}
                  className="hover:bg-primary/20 rounded-full w-4 h-4 flex items-center justify-center"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            {selectedCommissionRange && (
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm flex items-center gap-2">
                Komisyon: {commissionRanges.find(r => r.value === selectedCommissionRange)?.label}
                <button
                  onClick={() => onCommissionRangeChange("")}
                  className="hover:bg-primary/20 rounded-full w-4 h-4 flex items-center justify-center"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedMonthlyFee && (
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm flex items-center gap-2">
                Aidat: {monthlyFeeOptions.find(f => f.value === selectedMonthlyFee)?.label}
                <button
                  onClick={() => onMonthlyFeeChange("")}
                  className="hover:bg-primary/20 rounded-full w-4 h-4 flex items-center justify-center"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
          </div>
        </div>
      )}

      {/* Commission Range Filter */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">Komisyon Oranı</h3>
        <Select value={selectedCommissionRange} onValueChange={onCommissionRangeChange}>
          <SelectTrigger>
            <SelectValue placeholder="Komisyon aralığı seçin" />
          </SelectTrigger>
          <SelectContent>
            {commissionRanges.map(range => (
              <SelectItem key={range.value} value={range.value}>
                {range.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Monthly Fee Filter */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">Aylık Aidat</h3>
        <Select value={selectedMonthlyFee} onValueChange={onMonthlyFeeChange}>
          <SelectTrigger>
            <SelectValue placeholder="Aidat aralığı seçin" />
          </SelectTrigger>
          <SelectContent>
            {monthlyFeeOptions.map(option => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Provider Filters */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">Kurum</h3>
        <div className="space-y-3">
          {Object.entries(uniqueProviders).map(([provider, count]) => (
            <div key={provider} className="flex items-center space-x-3">
              <Checkbox
                id={`provider-${provider}`}
                checked={selectedProviders.includes(provider)}
                onCheckedChange={(checked) => {
                  if (checked === true) {
                    onProviderChange(provider);
                  }
                }}
              />
              <label
                htmlFor={`provider-${provider}`}
                className="text-sm text-gray-700 cursor-pointer flex-1"
              >
                {provider}
              </label>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Type Filters */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">POS Türü</h3>
        <div className="space-y-3">
          {Object.entries(uniqueTypes).map(([type, count]) => (
            <div key={type} className="flex items-center space-x-3">
              <Checkbox
                id={`type-${type}`}
                checked={selectedTypes.includes(type)}
                onCheckedChange={(checked) => {
                  if (checked === true) {
                    onTypeChange(type);
                  }
                }}
              />
              <label
                htmlFor={`type-${type}`}
                className="text-sm text-gray-700 cursor-pointer flex-1"
              >
                {type}
              </label>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </ScrollArea>
);

export default FilterContent;
