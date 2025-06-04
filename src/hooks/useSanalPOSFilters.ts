
import { useState, useEffect } from "react";
import { sanalPOSProviders } from "@/data/pos-types/sanalPOS";
import { POSProvider } from "@/types/pos";

const useSanalPOSFilters = () => {
  const [filteredProviders, setFilteredProviders] = useState(sanalPOSProviders);
  const [selectedProviders, setSelectedProviders] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCommissionRange, setSelectedCommissionRange] = useState<string>("");
  const [selectedMonthlyFee, setSelectedMonthlyFee] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<string>("name");

  // Extract unique provider names (first word) and count
  const uniqueProviders = sanalPOSProviders.reduce((acc, curr) => {
    const name = curr.name.split(" ")[0];
    acc[name] = (acc[name] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Extract unique types and count
  const uniqueTypes = sanalPOSProviders.reduce((acc, curr) => {
    acc[curr.type] = (acc[curr.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Commission range options
  const commissionRanges = [
    { label: "0% - 1%", value: "0-1", min: 0, max: 1 },
    { label: "1% - 2%", value: "1-2", min: 1, max: 2 },
    { label: "2% - 3%", value: "2-3", min: 2, max: 3 },
    { label: "3%+", value: "3+", min: 3, max: 100 }
  ];

  // Monthly fee options
  const monthlyFeeOptions = [
    { label: "Ücretsiz", value: "free" },
    { label: "1-50 TL", value: "1-50" },
    { label: "50-100 TL", value: "50-100" },
    { label: "100 TL+", value: "100+" }
  ];

  const applyFilters = () => {
    let filtered = sanalPOSProviders;
    
    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(provider => 
        provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        provider.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Provider filter
    if (selectedProviders.length > 0) {
      filtered = filtered.filter(provider => 
        selectedProviders.some(p => provider.name.toLowerCase().includes(p.toLowerCase()))
      );
    }
    
    // Type filter
    if (selectedTypes.length > 0) {
      filtered = filtered.filter(provider => selectedTypes.includes(provider.type));
    }

    // Commission range filter
    if (selectedCommissionRange) {
      const range = commissionRanges.find(r => r.value === selectedCommissionRange);
      if (range) {
        filtered = filtered.filter(provider => {
          const commission = parseFloat(provider.commission_rate.replace('%', ''));
          return commission >= range.min && commission <= range.max;
        });
      }
    }

    // Monthly fee filter
    if (selectedMonthlyFee) {
      filtered = filtered.filter(provider => {
        const fee = provider.monthly_fee.toLowerCase();
        switch (selectedMonthlyFee) {
          case "free":
            return fee.includes("ücretsiz") || fee.includes("0");
          case "1-50":
            return !fee.includes("ücretsiz") && !fee.includes("0");
          case "50-100":
            return !fee.includes("ücretsiz") && !fee.includes("0");
          case "100+":
            return !fee.includes("ücretsiz") && !fee.includes("0");
          default:
            return true;
        }
      });
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "commission":
          return parseFloat(a.commission_rate.replace('%', '')) - parseFloat(b.commission_rate.replace('%', ''));
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });
    
    setFilteredProviders(filtered);
  };

  const handleProviderChange = (provider: string) => {
    const newSelected = selectedProviders.includes(provider)
      ? selectedProviders.filter(p => p !== provider)
      : [...selectedProviders, provider];
    
    setSelectedProviders(newSelected);
  };

  const handleTypeChange = (type: string) => {
    const newSelected = selectedTypes.includes(type)
      ? selectedTypes.filter(t => t !== type)
      : [...selectedTypes, type];
    
    setSelectedTypes(newSelected);
  };

  const clearFilters = () => {
    setSelectedProviders([]);
    setSelectedTypes([]);
    setSelectedCommissionRange("");
    setSelectedMonthlyFee("");
    setSearchTerm("");
    setSortBy("name");
    setFilteredProviders(sanalPOSProviders);
  };

  // Apply filters whenever any filter changes
  useEffect(() => {
    applyFilters();
  }, [selectedProviders, selectedTypes, selectedCommissionRange, selectedMonthlyFee, searchTerm, sortBy]);

  const hasActiveFilters = selectedProviders.length > 0 || selectedTypes.length > 0 || 
    selectedCommissionRange || selectedMonthlyFee || searchTerm;

  return {
    filteredProviders,
    selectedProviders,
    selectedTypes,
    selectedCommissionRange,
    selectedMonthlyFee,
    searchTerm,
    sortBy,
    uniqueProviders,
    uniqueTypes,
    commissionRanges,
    monthlyFeeOptions,
    hasActiveFilters,
    handleProviderChange,
    handleTypeChange,
    setSelectedCommissionRange,
    setSelectedMonthlyFee,
    setSearchTerm,
    setSortBy,
    clearFilters
  };
};

export default useSanalPOSFilters;
