import { useState, useEffect } from "react";
import { sanalPOSProviders } from "@/data/pos-types/sanalPOS";
import POSCard from "@/components/POSCard";
import FAQ from "@/components/FAQ";
import LatestBlogPosts from "@/components/pos/LatestBlogPosts";
import MetaTags from "@/components/MetaTags";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Filter, X, Search, ChevronDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SanalPOS = () => {
  const [filteredProviders, setFilteredProviders] = useState(sanalPOSProviders);
  const [selectedProviders, setSelectedProviders] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCommissionRange, setSelectedCommissionRange] = useState<string>("");
  const [selectedMonthlyFee, setSelectedMonthlyFee] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<string>("name");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Sanal POS Başvurusu - En Uygun Komisyon Oranları 2025",
    "description": "2025 yılı güncel sanal POS komisyon oranları ve başvuru seçenekleri. E-ticaret işletmeniz için en uygun sanal POS çözümünü bulun.",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": sanalPOSProviders.length,
      "itemListElement": sanalPOSProviders.map((provider, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "FinancialProduct",
          "name": provider.name,
          "description": `${provider.name} sanal POS çözümü - %${provider.commission_rate} komisyon oranı`
        }
      }))
    }
  };

  return (
    <>
      <MetaTags
        title="Sanal POS Başvurusu - En Uygun Komisyon Oranları 2025"
        description="2025 yılı güncel sanal POS komisyon oranları ve başvuru seçenekleri. E-ticaret işletmeniz için en uygun sanal POS çözümünü bulun ve hemen başvurun."
        keywords="sanal pos başvurusu, sanal pos komisyon oranları 2025, e-ticaret pos, online ödeme sistemleri, sanal pos karşılaştırma"
        canonicalPath="/pos-types/sanal"
        priority={30}
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Fixed Header */}
        <div className="bg-white border-b sticky top-0 z-40">
          <div className="container mx-auto px-4 py-6">
            <div className="max-w-4xl">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Sanal POS Başvurusu - 2025 Komisyon Oranları
              </h1>
              <p className="text-base text-gray-600 mb-4 leading-relaxed">
                E-ticaret siteniz için en uygun sanal POS çözümünü bulun. Güncel komisyon oranlarını karşılaştırın ve hemen başvurun.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                  {filteredProviders.length} Sanal POS Seçeneği
                </span>
                <span>✓ Güncel Komisyon Oranları</span>
                <span>✓ Hızlı Başvuru</span>
                <span>✓ Ücretsiz Karşılaştırma</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile Filter Button */}
            <div className="lg:hidden">
              <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <Filter className="w-4 h-4 mr-2" />
                    Filtrele
                    {hasActiveFilters && (
                      <span className="ml-2 bg-primary text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                        {[selectedProviders.length, selectedTypes.length, selectedCommissionRange ? 1 : 0, selectedMonthlyFee ? 1 : 0, searchTerm ? 1 : 0].reduce((a, b) => a + b, 0)}
                      </span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <SheetHeader>
                    <SheetTitle>Filtrele</SheetTitle>
                  </SheetHeader>
                  <ScrollArea className="h-[calc(100vh-300px)]">
                    <div className="space-y-6">
                      {/* Search */}
                      <div>
                        <h3 className="font-medium text-gray-900 mb-3">Arama</h3>
                        <div className="relative">
                          <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                          <Input
                            placeholder="POS adı veya türü ara..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10"
                          />
                        </div>
                      </div>

                      {/* Sort */}
                      <div>
                        <h3 className="font-medium text-gray-900 mb-3">Sıralama</h3>
                        <Select value={sortBy} onValueChange={setSortBy}>
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
                                  onClick={() => handleProviderChange(provider)}
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
                                  onClick={() => handleTypeChange(type)}
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
                                  onClick={() => setSelectedCommissionRange("")}
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
                                  onClick={() => setSelectedMonthlyFee("")}
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
                        <Select value={selectedCommissionRange} onValueChange={setSelectedCommissionRange}>
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
                        <Select value={selectedMonthlyFee} onValueChange={setSelectedMonthlyFee}>
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
                                    handleProviderChange(provider);
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
                                    handleTypeChange(type);
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
                </SheetContent>
              </Sheet>
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden lg:block w-80 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Filtreler</h2>
                  {hasActiveFilters && (
                    <Button variant="ghost" size="sm" onClick={clearFilters}>
                      <X className="w-4 h-4 mr-1" />
                      Temizle
                    </Button>
                  )}
                </div>
                <FilterContent 
                  uniqueProviders={uniqueProviders}
                  uniqueTypes={uniqueTypes}
                  selectedProviders={selectedProviders}
                  selectedTypes={selectedTypes}
                  selectedCommissionRange={selectedCommissionRange}
                  selectedMonthlyFee={selectedMonthlyFee}
                  searchTerm={searchTerm}
                  sortBy={sortBy}
                  onProviderChange={handleProviderChange}
                  onTypeChange={handleTypeChange}
                  onCommissionRangeChange={setSelectedCommissionRange}
                  onMonthlyFeeChange={setSelectedMonthlyFee}
                  onSearchChange={setSearchTerm}
                  onSortChange={setSortBy}
                  onClearFilters={clearFilters}
                  hasActiveFilters={hasActiveFilters}
                  commissionRanges={commissionRanges}
                  monthlyFeeOptions={monthlyFeeOptions}
                />
              </div>
            </div>

            {/* POS Cards */}
            <div className="flex-1">
              <div className="space-y-4">
                {filteredProviders.map(provider => (
                  <POSCard key={provider.id} {...provider} />
                ))}
              </div>

              {filteredProviders.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg mb-4">Seçtiğiniz kriterlere uygun POS bulunamadı.</p>
                  <Button onClick={clearFilters}>Filtreleri Temizle</Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="container mx-auto px-4 py-16">
          <FAQ />
        </div>

        {/* Latest Blog Posts */}
        <div className="container mx-auto px-4 py-16">
          <LatestBlogPosts />
        </div>
      </div>
    </>
  );
};

// Enhanced Filter Content Component
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
}: {
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
}) => (
  <ScrollArea className="h-[calc(100vh-300px)]">
    <div className="space-y-6">
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

export default SanalPOS;
