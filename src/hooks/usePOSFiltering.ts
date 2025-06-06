
import { useState, useMemo } from "react";

interface POSProvider {
  id: string;
  name: string;
  type: string;
  commission_rate: string;
  [key: string]: any;
}

interface UsePOSFilteringProps {
  providers: POSProvider[];
}

export const usePOSFiltering = ({ providers }: UsePOSFilteringProps) => {
  const [filteredProviders, setFilteredProviders] = useState(providers);
  const [selectedProviders, setSelectedProviders] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Extract unique provider names (first word) and count
  const uniqueProviders = useMemo(() => {
    return providers.reduce((acc, curr) => {
      const name = curr.name.split(" ")[0];
      acc[name] = (acc[name] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }, [providers]);

  // Extract unique types and count
  const uniqueTypes = useMemo(() => {
    return providers.reduce((acc, curr) => {
      acc[curr.type] = (acc[curr.type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }, [providers]);

  const applyFilters = (providerFilters: string[], typeFilters: string[], search: string) => {
    let filtered = providers;
    
    // Apply provider filter
    if (providerFilters.length > 0) {
      filtered = filtered.filter(provider => 
        providerFilters.some(p => provider.name.toLowerCase().includes(p.toLowerCase()))
      );
    }
    
    // Apply type filter
    if (typeFilters.length > 0) {
      filtered = filtered.filter(provider => typeFilters.includes(provider.type));
    }

    // Apply search filter
    if (search.trim()) {
      const searchLower = search.toLowerCase().trim();
      filtered = filtered.filter(provider => 
        provider.name.toLowerCase().includes(searchLower) ||
        provider.type.toLowerCase().includes(searchLower) ||
        provider.commission_rate.toString().includes(searchLower)
      );
    }
    
    setFilteredProviders(filtered);
  };

  const handleProviderChange = (provider: string) => {
    const newSelected = selectedProviders.includes(provider)
      ? selectedProviders.filter(p => p !== provider)
      : [...selectedProviders, provider];
    
    setSelectedProviders(newSelected);
    applyFilters(newSelected, selectedTypes, searchTerm);
  };

  const handleTypeChange = (type: string) => {
    const newSelected = selectedTypes.includes(type)
      ? selectedTypes.filter(t => t !== type)
      : [...selectedTypes, type];
    
    setSelectedTypes(newSelected);
    applyFilters(selectedProviders, newSelected, searchTerm);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    applyFilters(selectedProviders, selectedTypes, value);
  };

  const clearFilters = () => {
    setSelectedProviders([]);
    setSelectedTypes([]);
    setSearchTerm("");
    setFilteredProviders(providers);
  };

  const hasActiveFilters = selectedProviders.length > 0 || selectedTypes.length > 0 || searchTerm.trim();

  // Calculate statistics
  const avgCommission = filteredProviders.length > 0 
    ? (filteredProviders.reduce((sum, p) => sum + parseFloat(p.commission_rate), 0) / filteredProviders.length).toFixed(2)
    : "0.00";
  const lowestCommission = filteredProviders.length > 0 
    ? Math.min(...filteredProviders.map(p => parseFloat(p.commission_rate))).toFixed(2)
    : "0.00";

  return {
    filteredProviders,
    selectedProviders,
    selectedTypes,
    searchTerm,
    uniqueProviders,
    uniqueTypes,
    hasActiveFilters,
    avgCommission,
    lowestCommission,
    handleProviderChange,
    handleTypeChange,
    handleSearchChange,
    clearFilters
  };
};
