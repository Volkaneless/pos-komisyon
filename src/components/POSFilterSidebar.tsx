
import { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { X } from "lucide-react";

interface FilterSidebarProps {
  providers: Array<{
    name: string;
    type: string;
    commission_rate: string;
    monthly_fee: string;
    features: string[];
  }>;
  onFilter: (filters: FilterState) => void;
}

interface FilterState {
  providers: string[];
  commissionRanges: string[];
  monthlyFeeRanges: string[];
  features: string[];
}

const POSFilterSidebar = ({ providers, onFilter }: FilterSidebarProps) => {
  const [filters, setFilters] = useState<FilterState>({
    providers: [],
    commissionRanges: [],
    monthlyFeeRanges: [],
    features: []
  });

  // Extract unique values for filters
  const uniqueProviders = [...new Set(providers.map(p => p.name.split(" ")[0]))];
  const allFeatures = [...new Set(providers.flatMap(p => p.features))];

  const commissionRanges = [
    { label: "%0 - %1", value: "0-1" },
    { label: "%1 - %2", value: "1-2" },
    { label: "%2 - %3", value: "2-3" },
    { label: "%3+", value: "3+" }
  ];

  const monthlyFeeRanges = [
    { label: "Ücretsiz", value: "0" },
    { label: "0 - 100 TL", value: "0-100" },
    { label: "100 - 200 TL", value: "100-200" },
    { label: "200+ TL", value: "200+" }
  ];

  const handleFilterChange = (type: keyof FilterState, value: string) => {
    const newFilters = {
      ...filters,
      [type]: filters[type].includes(value)
        ? filters[type].filter(item => item !== value)
        : [...filters[type], value]
    };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const clearAllFilters = () => {
    const emptyFilters = {
      providers: [],
      commissionRanges: [],
      monthlyFeeRanges: [],
      features: []
    };
    setFilters(emptyFilters);
    onFilter(emptyFilters);
  };

  const getProviderCount = (provider: string) => {
    return providers.filter(p => p.name.includes(provider)).length;
  };

  const getFeatureCount = (feature: string) => {
    return providers.filter(p => p.features.includes(feature)).length;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filtreler</h2>
        <Button variant="ghost" size="sm" onClick={clearAllFilters}>
          <X className="h-4 w-4 mr-1" />
          Temizle
        </Button>
      </div>

      {/* Kuruma Göre */}
      <div>
        <h3 className="font-medium mb-3">Kuruma Göre</h3>
        <div className="space-y-2">
          {uniqueProviders.map(provider => (
            <div key={provider} className="flex items-center space-x-2">
              <Checkbox
                id={`provider-${provider}`}
                checked={filters.providers.includes(provider)}
                onCheckedChange={() => handleFilterChange('providers', provider)}
              />
              <label
                htmlFor={`provider-${provider}`}
                className="text-sm cursor-pointer flex-1"
              >
                {provider} ({getProviderCount(provider)})
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Komisyon Aralığı */}
      <div>
        <h3 className="font-medium mb-3">Komisyon Aralığı</h3>
        <div className="space-y-2">
          {commissionRanges.map(range => (
            <div key={range.value} className="flex items-center space-x-2">
              <Checkbox
                id={`commission-${range.value}`}
                checked={filters.commissionRanges.includes(range.value)}
                onCheckedChange={() => handleFilterChange('commissionRanges', range.value)}
              />
              <label
                htmlFor={`commission-${range.value}`}
                className="text-sm cursor-pointer"
              >
                {range.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Aylık Ücret */}
      <div>
        <h3 className="font-medium mb-3">Aylık Ücret</h3>
        <div className="space-y-2">
          {monthlyFeeRanges.map(range => (
            <div key={range.value} className="flex items-center space-x-2">
              <Checkbox
                id={`fee-${range.value}`}
                checked={filters.monthlyFeeRanges.includes(range.value)}
                onCheckedChange={() => handleFilterChange('monthlyFeeRanges', range.value)}
              />
              <label
                htmlFor={`fee-${range.value}`}
                className="text-sm cursor-pointer"
              >
                {range.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Özellikler */}
      <div>
        <h3 className="font-medium mb-3">Özellikler</h3>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {allFeatures.slice(0, 8).map(feature => (
            <div key={feature} className="flex items-center space-x-2">
              <Checkbox
                id={`feature-${feature}`}
                checked={filters.features.includes(feature)}
                onCheckedChange={() => handleFilterChange('features', feature)}
              />
              <label
                htmlFor={`feature-${feature}`}
                className="text-sm cursor-pointer flex-1"
              >
                {feature} ({getFeatureCount(feature)})
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default POSFilterSidebar;
