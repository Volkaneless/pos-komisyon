import { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";

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

  // Get unique providers and count their occurrences
  const uniqueProviders = providers.reduce((acc, curr) => {
    const name = curr.name.split(" ")[0];
    acc[name] = (acc[name] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Get unique types and count their occurrences
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
    <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Filtrele</h2>
        <button
          onClick={handleClear}
          className="text-primary hover:text-primary-hover text-sm"
        >
          Temizle
        </button>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <h3 className="font-medium mb-3">Kuruma Göre</h3>
          <div className="space-y-2">
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
        </div>

        <div>
          <h3 className="font-medium mb-3">POS Türüne Göre</h3>
          <div className="space-y-2">
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
        </div>
      </div>

      <Button
        onClick={handleApply}
        className="w-full mt-6 bg-primary hover:bg-primary-hover text-white"
      >
        Uygula
      </Button>
    </div>
  );
};

export default POSFilter;