
import { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { ChevronDown, Filter } from "lucide-react";

interface FilterProps {
  providers: Array<{
    logo: string;
    name: string;
    type: string;
  }>;
  onFilter: (providers: string[], types: string[]) => void;
}

const POSFilter = ({ providers, onFilter }: FilterProps) => {
  const [selectedProviders, setSelectedProviders] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [isProvidersOpen, setIsProvidersOpen] = useState(false);
  const [isTypesOpen, setIsTypesOpen] = useState(false);

  // Extract unique provider names (first word) and count
  const uniqueProviders = providers.reduce((acc, curr) => {
    const name = curr.name.split(" ")[0];
    acc[name] = (acc[name] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Extract unique types and count
  const uniqueTypes = providers.reduce((acc, curr) => {
    acc[curr.type] = (acc[curr.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const handleProviderChange = (provider: string) => {
    const newSelected = selectedProviders.includes(provider)
      ? selectedProviders.filter(p => p !== provider)
      : [...selectedProviders, provider];
    
    setSelectedProviders(newSelected);
    onFilter(newSelected, selectedTypes);
  };

  const handleTypeChange = (type: string) => {
    const newSelected = selectedTypes.includes(type)
      ? selectedTypes.filter(t => t !== type)
      : [...selectedTypes, type];
    
    setSelectedTypes(newSelected);
    onFilter(selectedProviders, newSelected);
  };

  const handleClear = () => {
    setSelectedProviders([]);
    setSelectedTypes([]);
    onFilter([], []);
    setIsProvidersOpen(false);
    setIsTypesOpen(false);
  };

  const hasActiveFilters = selectedProviders.length > 0 || selectedTypes.length > 0;

  return (
    <div className="bg-white rounded-lg shadow-sm border mb-8">
      <div className="p-6 border-b">
        <div className="flex items-center gap-3 mb-4">
          <Filter className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold text-gray-900">
            POS Filtreleme Seçenekleri
          </h2>
        </div>
        <p className="text-gray-600 text-sm">
          İşletmeniz için en uygun POS çözümünü bulmak için aşağıdaki filtrelerden yararlanın.
        </p>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between gap-4">
          {/* Clear button */}
          <button
            onClick={handleClear}
            className={`text-sm ${hasActiveFilters ? 'text-primary hover:text-primary/80' : 'text-gray-400 cursor-not-allowed'}`}
            disabled={!hasActiveFilters}
          >
            Filtreleri Temizle
          </button>

          {/* Filter dropdowns */}
          <div className="flex items-center gap-4">
            <Collapsible open={isProvidersOpen} onOpenChange={setIsProvidersOpen}>
              <CollapsibleTrigger className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors">
                <span className="text-sm font-medium">
                  Kuruma Göre {selectedProviders.length > 0 && `(${selectedProviders.length})`}
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isProvidersOpen ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="absolute z-20 mt-2 bg-white rounded-lg shadow-lg border p-4 min-w-[250px]">
                <div className="space-y-3 max-h-60 overflow-y-auto">
                  {Object.entries(uniqueProviders).map(([provider, count]) => (
                    <div key={provider} className="flex items-center space-x-3">
                      <Checkbox
                        id={`provider-${provider}`}
                        checked={selectedProviders.includes(provider)}
                        onCheckedChange={() => handleProviderChange(provider)}
                      />
                      <label
                        htmlFor={`provider-${provider}`}
                        className="text-sm font-medium text-gray-700 cursor-pointer flex-1"
                      >
                        {provider}
                      </label>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {count}
                      </span>
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible open={isTypesOpen} onOpenChange={setIsTypesOpen}>
              <CollapsibleTrigger className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors">
                <span className="text-sm font-medium">
                  POS Türüne Göre {selectedTypes.length > 0 && `(${selectedTypes.length})`}
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isTypesOpen ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="absolute z-20 mt-2 bg-white rounded-lg shadow-lg border p-4 min-w-[250px]">
                <div className="space-y-3">
                  {Object.entries(uniqueTypes).map(([type, count]) => (
                    <div key={type} className="flex items-center space-x-3">
                      <Checkbox
                        id={`type-${type}`}
                        checked={selectedTypes.includes(type)}
                        onCheckedChange={() => handleTypeChange(type)}
                      />
                      <label
                        htmlFor={`type-${type}`}
                        className="text-sm font-medium text-gray-700 cursor-pointer flex-1"
                      >
                        {type}
                      </label>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {count}
                      </span>
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>

        {/* Active filters display */}
        {hasActiveFilters && (
          <div className="mt-4 pt-4 border-t">
            <div className="flex flex-wrap gap-2">
              {selectedProviders.map(provider => (
                <span key={provider} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm flex items-center gap-2">
                  {provider}
                  <button
                    onClick={() => handleProviderChange(provider)}
                    className="hover:bg-primary/20 rounded-full w-4 h-4 flex items-center justify-center"
                  >
                    ×
                  </button>
                </span>
              ))}
              {selectedTypes.map(type => (
                <span key={type} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm flex items-center gap-2">
                  {type}
                  <button
                    onClick={() => handleTypeChange(type)}
                    className="hover:bg-primary/20 rounded-full w-4 h-4 flex items-center justify-center"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default POSFilter;
