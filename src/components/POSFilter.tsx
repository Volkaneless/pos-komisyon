import { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { ChevronDown } from "lucide-react";

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

  const uniqueProviders = providers.reduce((acc, curr) => {
    const name = curr.name.split(" ")[0];
    acc[name] = (acc[name] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const uniqueTypes = providers.reduce((acc, curr) => {
    acc[curr.type] = (acc[curr.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const handleProviderChange = (provider: string) => {
    setSelectedProviders(prev =>
      prev.includes(provider)
        ? prev.filter(p => p !== provider)
        : [...prev, provider]
    );
  };

  const handleTypeChange = (type: string) => {
    setSelectedTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const handleApply = () => {
    onFilter(selectedProviders, selectedTypes);
  };

  const handleClear = () => {
    setSelectedProviders([]);
    setSelectedTypes([]);
    onFilter([], []);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm mb-8">
      <div className="flex items-center gap-2 p-2">
        <button
          onClick={handleClear}
          className="text-primary hover:text-primary-hover text-sm"
        >
          Temizle
        </button>

        <div className="flex-1 flex items-center gap-4">
          <Collapsible open={isProvidersOpen} onOpenChange={setIsProvidersOpen}>
            <CollapsibleTrigger className="flex items-center gap-2 text-left px-3 py-1.5 hover:bg-gray-50 rounded-md">
              <span className="text-sm text-gray-600">Kuruma Göre</span>
              <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${isProvidersOpen ? 'transform rotate-180' : ''}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="absolute z-10 mt-1 bg-white rounded-lg shadow-lg p-3 border">
              <div className="space-y-2 min-w-[200px]">
                {Object.entries(uniqueProviders).map(([provider, count]) => (
                  <div key={provider} className="flex items-center space-x-2">
                    <Checkbox
                      id={`provider-${provider}`}
                      checked={selectedProviders.includes(provider)}
                      onCheckedChange={() => handleProviderChange(provider)}
                    />
                    <label
                      htmlFor={`provider-${provider}`}
                      className="text-sm text-gray-600 cursor-pointer"
                    >
                      {provider} ({count})
                    </label>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible open={isTypesOpen} onOpenChange={setIsTypesOpen}>
            <CollapsibleTrigger className="flex items-center gap-2 text-left px-3 py-1.5 hover:bg-gray-50 rounded-md">
              <span className="text-sm text-gray-600">POS Türüne Göre</span>
              <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${isTypesOpen ? 'transform rotate-180' : ''}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="absolute z-10 mt-1 bg-white rounded-lg shadow-lg p-3 border">
              <div className="space-y-2 min-w-[200px]">
                {Object.entries(uniqueTypes).map(([type, count]) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox
                      id={`type-${type}`}
                      checked={selectedTypes.includes(type)}
                      onCheckedChange={() => handleTypeChange(type)}
                    />
                    <label
                      htmlFor={`type-${type}`}
                      className="text-sm text-gray-600 cursor-pointer"
                    >
                      {type} ({count})
                    </label>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>

        <Button
          onClick={handleApply}
          className="bg-primary hover:bg-primary-hover text-white text-sm px-4"
        >
          Uygula
        </Button>
      </div>
    </div>
  );
};

export default POSFilter;
