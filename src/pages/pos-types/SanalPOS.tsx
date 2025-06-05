
import { useState } from "react";
import { sanalPOSProviders } from "@/data/pos-types/sanalPOS";
import POSCard from "@/components/POSCard";
import FAQ from "@/components/FAQ";
import LatestBlogPosts from "@/components/pos/LatestBlogPosts";
import MetaTags from "@/components/MetaTags";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Filter, X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";

const SanalPOS = () => {
  const [filteredProviders, setFilteredProviders] = useState(sanalPOSProviders);
  const [selectedProviders, setSelectedProviders] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
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

  const handleFilter = () => {
    let filtered = sanalPOSProviders;
    
    if (selectedProviders.length > 0) {
      filtered = filtered.filter(provider => 
        selectedProviders.some(p => provider.name.toLowerCase().includes(p.toLowerCase()))
      );
    }
    
    if (selectedTypes.length > 0) {
      filtered = filtered.filter(provider => selectedTypes.includes(provider.type));
    }
    
    setFilteredProviders(filtered);
  };

  const handleProviderChange = (provider: string) => {
    const newSelected = selectedProviders.includes(provider)
      ? selectedProviders.filter(p => p !== provider)
      : [...selectedProviders, provider];
    
    setSelectedProviders(newSelected);
    
    // Apply filter immediately
    let filtered = sanalPOSProviders;
    
    if (newSelected.length > 0) {
      filtered = filtered.filter(p => 
        newSelected.some(sp => p.name.toLowerCase().includes(sp.toLowerCase()))
      );
    }
    
    if (selectedTypes.length > 0) {
      filtered = filtered.filter(p => selectedTypes.includes(p.type));
    }
    
    setFilteredProviders(filtered);
  };

  const handleTypeChange = (type: string) => {
    const newSelected = selectedTypes.includes(type)
      ? selectedTypes.filter(t => t !== type)
      : [...selectedTypes, type];
    
    setSelectedTypes(newSelected);
    
    // Apply filter immediately
    let filtered = sanalPOSProviders;
    
    if (selectedProviders.length > 0) {
      filtered = filtered.filter(p => 
        selectedProviders.some(sp => p.name.toLowerCase().includes(sp.toLowerCase()))
      );
    }
    
    if (newSelected.length > 0) {
      filtered = filtered.filter(p => newSelected.includes(p.type));
    }
    
    setFilteredProviders(filtered);
  };

  const clearFilters = () => {
    setSelectedProviders([]);
    setSelectedTypes([]);
    setFilteredProviders(sanalPOSProviders);
  };

  const hasActiveFilters = selectedProviders.length > 0 || selectedTypes.length > 0;

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
        {/* SEO Optimized Header */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sanal POS Başvurusu - 2025 Komisyon Oranları
              </h1>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                E-ticaret siteniz için en uygun sanal POS çözümünü bulun. Güncel komisyon oranlarını karşılaştırın, 
                avantajları inceleyin ve hemen başvurun. 2025 yılının en güncel sanal POS seçenekleri burada.
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
                        {selectedProviders.length + selectedTypes.length}
                      </span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <SheetHeader>
                    <SheetTitle>Filtrele</SheetTitle>
                  </SheetHeader>
                  <FilterContent 
                    uniqueProviders={uniqueProviders}
                    uniqueTypes={uniqueTypes}
                    selectedProviders={selectedProviders}
                    selectedTypes={selectedTypes}
                    onProviderChange={handleProviderChange}
                    onTypeChange={handleTypeChange}
                    onClearFilters={clearFilters}
                    hasActiveFilters={hasActiveFilters}
                  />
                </SheetContent>
              </Sheet>
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden lg:block w-80 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-8">
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
                  onProviderChange={handleProviderChange}
                  onTypeChange={handleTypeChange}
                  onClearFilters={clearFilters}
                  hasActiveFilters={hasActiveFilters}
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

// Filter Content Component
const FilterContent = ({ 
  uniqueProviders, 
  uniqueTypes, 
  selectedProviders, 
  selectedTypes, 
  onProviderChange, 
  onTypeChange, 
  onClearFilters, 
  hasActiveFilters 
}: {
  uniqueProviders: Record<string, number>;
  uniqueTypes: Record<string, number>;
  selectedProviders: string[];
  selectedTypes: string[];
  onProviderChange: (provider: string) => void;
  onTypeChange: (type: string) => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}) => (
  <ScrollArea className="h-[calc(100vh-200px)]">
    <div className="space-y-6">
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
          </div>
        </div>
      )}

      {/* Provider Filters */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">Kurum</h3>
        <div className="space-y-3">
          {Object.entries(uniqueProviders).map(([provider, count]) => (
            <div key={provider} className="flex items-center space-x-3">
              <Checkbox
                id={`provider-${provider}`}
                checked={selectedProviders.includes(provider)}
                onCheckedChange={() => onProviderChange(provider)}
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
                onCheckedChange={() => onTypeChange(type)}
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
