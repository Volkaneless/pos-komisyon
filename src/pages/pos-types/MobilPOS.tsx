
import { useState } from "react";
import { mobilPOSProviders } from "@/data/pos-types/mobilPOS";
import POSCard from "@/components/POSCard";
import FAQ from "@/components/FAQ";
import LatestBlogPosts from "@/components/pos/LatestBlogPosts";
import MetaTags from "@/components/MetaTags";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Filter, X, Search, TrendingUp, Building, Smartphone, ShieldCheck, WifiHigh, CreditCard, Globe } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const MobilPOS = () => {
  const [filteredProviders, setFilteredProviders] = useState(mobilPOSProviders);
  const [selectedProviders, setSelectedProviders] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [commissionRange, setCommissionRange] = useState<number[]>([0, 10]);

  // Extract unique provider names (first word) and count
  const uniqueProviders = mobilPOSProviders.reduce((acc, curr) => {
    const name = curr.name.split(" ")[0];
    acc[name] = (acc[name] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Extract unique types and count
  const uniqueTypes = mobilPOSProviders.reduce((acc, curr) => {
    acc[curr.type] = (acc[curr.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Get commission range
  const allCommissions = mobilPOSProviders.map(p => parseFloat(p.commission_rate));
  const minCommission = Math.min(...allCommissions);
  const maxCommission = Math.max(...allCommissions);

  const applyFilters = (providers: string[], types: string[], search: string, range: number[]) => {
    let filtered = mobilPOSProviders;
    
    // Apply provider filter
    if (providers.length > 0) {
      filtered = filtered.filter(provider => 
        providers.some(p => provider.name.toLowerCase().includes(p.toLowerCase()))
      );
    }
    
    // Apply type filter
    if (types.length > 0) {
      filtered = filtered.filter(provider => types.includes(provider.type));
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

    // Apply commission range filter
    filtered = filtered.filter(provider => {
      const commission = parseFloat(provider.commission_rate);
      return commission >= range[0] && commission <= range[1];
    });
    
    setFilteredProviders(filtered);
  };

  const handleProviderChange = (provider: string) => {
    const newSelected = selectedProviders.includes(provider)
      ? selectedProviders.filter(p => p !== provider)
      : [...selectedProviders, provider];
    
    setSelectedProviders(newSelected);
    applyFilters(newSelected, selectedTypes, searchTerm, commissionRange);
  };

  const handleTypeChange = (type: string) => {
    const newSelected = selectedTypes.includes(type)
      ? selectedTypes.filter(t => t !== type)
      : [...selectedTypes, type];
    
    setSelectedTypes(newSelected);
    applyFilters(selectedProviders, newSelected, searchTerm, commissionRange);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    applyFilters(selectedProviders, selectedTypes, value, commissionRange);
  };

  const handleCommissionRangeChange = (value: number[]) => {
    setCommissionRange(value);
    applyFilters(selectedProviders, selectedTypes, searchTerm, value);
  };

  const clearFilters = () => {
    setSelectedProviders([]);
    setSelectedTypes([]);
    setSearchTerm("");
    setCommissionRange([minCommission, maxCommission]);
    setFilteredProviders(mobilPOSProviders);
  };

  const hasActiveFilters = selectedProviders.length > 0 || selectedTypes.length > 0 || searchTerm.trim() || 
    (commissionRange[0] !== minCommission || commissionRange[1] !== maxCommission);

  // Calculate statistics
  const avgCommission = (filteredProviders.reduce((sum, p) => sum + parseFloat(p.commission_rate), 0) / filteredProviders.length).toFixed(2);
  const lowestCommission = Math.min(...filteredProviders.map(p => parseFloat(p.commission_rate))).toFixed(2);

  const currentYear = new Date().getFullYear();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Mobil POS Komisyon Oranları ${currentYear}`,
    "description": `${currentYear} yılı güncel mobil POS komisyon oranları ve karşılaştırma araçları.`,
    "url": "https://poskomisyon.com/pos-types/mobil",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Enpara Mobil POS",
        "url": "https://poskomisyon.com/pos/enpara-mobil-pos"
      }, {
        "@type": "ListItem",
        "position": 2,
        "name": "Paycell Mobil POS",
        "url": "https://poskomisyon.com/pos/paycell-mobil-pos"
      }, {
        "@type": "ListItem",
        "position": 3,
        "name": "Vallet Mobil POS",
        "url": "https://poskomisyon.com/pos/vallet-mobil-pos"
      }]
    }
  };

  return (
    <>
      <MetaTags
        title={`Mobil POS Komisyon Oranları ${currentYear} - En Uygun Mobil POS Ücretleri`}
        description={`${currentYear} yılı güncel mobil POS komisyon oranları, karşılaştırma ve hesaplama araçları. İşletmeniz için en uygun mobil POS çözümünü bulun.`}
        keywords="mobil pos komisyon oranları, mobil pos başvuru, mobil ödeme sistemleri, taşınabilir pos cihazları, mobil pos çözümleri, enpara mobil pos, paycell mobil pos"
        canonicalPath="/pos-types/mobil"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* SEO Optimized Header */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-16 pt-32">
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Mobil POS Komisyon Oranları {currentYear}
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Hareket halindeyken ödeme alın. En uygun mobil POS çözümlerini karşılaştırın, 
                güncel komisyon oranlarını inceleyin ve hemen başvurun. {currentYear} yılının en güncel taşınabilir ödeme seçenekleri.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="bg-primary/10 text-primary px-3 py-2 rounded-lg text-center">
                  <div className="font-semibold">{filteredProviders.length}</div>
                  <div className="text-xs">Mobil POS</div>
                </div>
                <div className="bg-green-50 text-green-700 px-3 py-2 rounded-lg text-center">
                  <div className="font-semibold">%{lowestCommission}</div>
                  <div className="text-xs">En Düşük Komisyon</div>
                </div>
                <div className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-center">
                  <div className="font-semibold">%{avgCommission}</div>
                  <div className="text-xs">Ortalama Komisyon</div>
                </div>
                <div className="bg-purple-50 text-purple-700 px-3 py-2 rounded-lg text-center">
                  <div className="font-semibold">{Object.keys(uniqueProviders).length}</div>
                  <div className="text-xs">Farklı Kurum</div>
                </div>
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
                  <Button variant="outline" className="w-full relative">
                    <Filter className="w-4 h-4 mr-2" />
                    Filtrele
                    {hasActiveFilters && (
                      <Badge className="ml-2 h-5 min-w-5 p-0 flex items-center justify-center text-xs">
                        {selectedProviders.length + selectedTypes.length + (searchTerm ? 1 : 0) + (hasActiveFilters ? 1 : 0)}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80 p-0">
                  <SheetHeader className="p-6 border-b">
                    <SheetTitle className="flex items-center gap-2">
                      <Filter className="w-5 h-5" />
                      Filtreler
                    </SheetTitle>
                  </SheetHeader>
                  <FilterContent 
                    uniqueProviders={uniqueProviders}
                    uniqueTypes={uniqueTypes}
                    selectedProviders={selectedProviders}
                    selectedTypes={selectedTypes}
                    searchTerm={searchTerm}
                    commissionRange={commissionRange}
                    minCommission={minCommission}
                    maxCommission={maxCommission}
                    onProviderChange={handleProviderChange}
                    onTypeChange={handleTypeChange}
                    onSearchChange={handleSearchChange}
                    onCommissionRangeChange={handleCommissionRangeChange}
                    onClearFilters={clearFilters}
                    hasActiveFilters={hasActiveFilters}
                    isMobile={true}
                  />
                </SheetContent>
              </Sheet>
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden lg:block w-80 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-sm border sticky top-8">
                <div className="p-6 border-b">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                      <Filter className="w-5 h-5 mr-2 text-primary" />
                      Filtreler
                    </h2>
                    {hasActiveFilters && (
                      <Button variant="ghost" size="sm" onClick={clearFilters}>
                        <X className="w-4 h-4 mr-1" />
                        Temizle
                      </Button>
                    )}
                  </div>
                  
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-3 p-4 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{filteredProviders.length}</div>
                      <div className="text-xs text-gray-600">Toplam Seçenek</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">%{lowestCommission}</div>
                      <div className="text-xs text-gray-600">En Düşük</div>
                    </div>
                  </div>
                </div>

                <FilterContent 
                  uniqueProviders={uniqueProviders}
                  uniqueTypes={uniqueTypes}
                  selectedProviders={selectedProviders}
                  selectedTypes={selectedTypes}
                  searchTerm={searchTerm}
                  commissionRange={commissionRange}
                  minCommission={minCommission}
                  maxCommission={maxCommission}
                  onProviderChange={handleProviderChange}
                  onTypeChange={handleTypeChange}
                  onSearchChange={handleSearchChange}
                  onCommissionRangeChange={handleCommissionRangeChange}
                  onClearFilters={clearFilters}
                  hasActiveFilters={hasActiveFilters}
                  isMobile={false}
                />
              </div>
            </div>

            {/* POS Cards */}
            <div className="flex-1">
              {/* Result Header */}
              <div className="mb-6 bg-white rounded-lg border p-4 md:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      {filteredProviders.length} Mobil POS Seçeneği Bulundu
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {hasActiveFilters ? 'Filtrelere göre sonuçlar' : 'Tüm mobil POS seçenekleri'}
                    </p>
                  </div>
                  {hasActiveFilters && (
                    <Button variant="outline" size="sm" onClick={clearFilters} className="shrink-0">
                      <X className="w-4 h-4 mr-1" />
                      Filtreleri Temizle
                    </Button>
                  )}
                </div>

                {/* Active Filters Display */}
                {hasActiveFilters && (
                  <div className="mt-4 pt-4 border-t">
                    <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                      <Filter className="w-4 h-4" />
                      Aktif Filtreler:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {searchTerm && (
                        <Badge variant="secondary" className="flex items-center gap-2">
                          <Search className="w-3 h-3" />
                          "{searchTerm}"
                          <button
                            onClick={() => handleSearchChange("")}
                            className="hover:bg-gray-300 rounded-full w-4 h-4 flex items-center justify-center ml-1"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </Badge>
                      )}
                      {(commissionRange[0] !== minCommission || commissionRange[1] !== maxCommission) && (
                        <Badge variant="secondary" className="flex items-center gap-2">
                          Komisyon: %{commissionRange[0]} - %{commissionRange[1]}
                          <button
                            onClick={() => handleCommissionRangeChange([minCommission, maxCommission])}
                            className="hover:bg-gray-300 rounded-full w-4 h-4 flex items-center justify-center ml-1"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </Badge>
                      )}
                      {selectedProviders.map(provider => (
                        <Badge key={provider} variant="secondary" className="flex items-center gap-2">
                          <Building className="w-3 h-3" />
                          {provider}
                          <button
                            onClick={() => handleProviderChange(provider)}
                            className="hover:bg-gray-300 rounded-full w-4 h-4 flex items-center justify-center ml-1"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </Badge>
                      ))}
                      {selectedTypes.map(type => (
                        <Badge key={type} variant="secondary" className="flex items-center gap-2">
                          <Smartphone className="w-3 h-3" />
                          {type}
                          <button
                            onClick={() => handleTypeChange(type)}
                            className="hover:bg-gray-300 rounded-full w-4 h-4 flex items-center justify-center ml-1"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                {filteredProviders.map(provider => (
                  <POSCard key={provider.id} {...provider} />
                ))}
              </div>

              {filteredProviders.length === 0 && (
                <div className="text-center py-12 bg-white rounded-lg border">
                  <div className="max-w-md mx-auto">
                    <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Sonuç Bulunamadı</h3>
                    <p className="text-gray-500 mb-4">Seçtiğiniz kriterlere uygun POS bulunamadı. Lütfen filtrelerinizi gözden geçirin.</p>
                    <Button onClick={clearFilters}>Filtreleri Temizle</Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* What is Mobil POS Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Mobil POS Nedir?</h2>
            
            <div className="bg-blue-50 p-6 rounded-xl mb-8">
              <p className="text-gray-700 mb-0">
                Mobil POS cihazları, işletmelerin hareket halindeyken ödeme almalarını sağlayan taşınabilir cihazlardır. 
                Bu cihazlar, akıllı telefon veya tabletlerle entegre çalışarak kredi kartı ödemelerini güvenli bir şekilde işler.
                Son yıllarda gelişen teknoloji ile işletmeler artık fiziki bir mağazaya bağlı kalmaksızın her yerde 
                ödeme kabul edebilmektedir.
              </p>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Mobil POS Avantajları</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-primary" />
                  Hareket Serbestisi
                </h4>
                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
                  <li>Her yerde ödeme alma imkanı</li>
                  <li>Kolay taşınabilirlik</li>
                  <li>Fiziksel mağazaya ihtiyaç olmaması</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Ödeme Kolaylığı
                </h4>
                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
                  <li>Tüm kredi kartlarıyla uyumluluk</li>
                  <li>Anında ödeme alınabilmesi</li>
                  <li>Temassız ödeme desteği</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Güvenlik Özellikleri</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-5 hover:shadow-md transition-shadow border-primary/20">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  Veri Güvenliği
                </h4>
                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
                  <li>SSL şifreleme</li>
                  <li>PCI DSS uyumluluğu</li>
                  <li>Güvenli veri iletimi</li>
                </ul>
              </Card>
              
              <Card className="p-5 hover:shadow-md transition-shadow border-primary/20">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <WifiHigh className="h-5 w-5 text-primary" />
                  İşlem Güvenliği
                </h4>
                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
                  <li>Anlık işlem bildirimleri</li>
                  <li>Chip&PIN teknolojisi</li>
                  <li>İşlem limitleri</li>
                </ul>
              </Card>
              
              <Card className="p-5 hover:shadow-md transition-shadow border-primary/20">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  Dolandırıcılık Koruması
                </h4>
                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
                  <li>Şüpheli işlem tespiti</li>
                  <li>Lokasyon doğrulama</li>
                  <li>Risk analizi</li>
                </ul>
              </Card>
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
  searchTerm,
  commissionRange,
  minCommission,
  maxCommission,
  onProviderChange, 
  onTypeChange, 
  onSearchChange,
  onCommissionRangeChange,
  onClearFilters, 
  hasActiveFilters,
  isMobile = false
}: {
  uniqueProviders: Record<string, number>;
  uniqueTypes: Record<string, number>;
  selectedProviders: string[];
  selectedTypes: string[];
  searchTerm: string;
  commissionRange: number[];
  minCommission: number;
  maxCommission: number;
  onProviderChange: (provider: string) => void;
  onTypeChange: (type: string) => void;
  onSearchChange: (value: string) => void;
  onCommissionRangeChange: (value: number[]) => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
  isMobile?: boolean;
}) => (
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

        {/* Commission Range Slider */}
        <div>
          <h3 className="font-medium text-gray-900 mb-3">
            Komisyon Oranı
          </h3>
          <div className="space-y-4">
            <div className="px-1">
              <Slider
                value={commissionRange}
                onValueChange={onCommissionRangeChange}
                max={maxCommission}
                min={minCommission}
                step={0.1}
                className="w-full"
              />
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>%{commissionRange[0]}</span>
              <span>%{commissionRange[1]}</span>
            </div>
            <div className="text-xs text-gray-500 text-center">
              Aralık: %{minCommission} - %{maxCommission}
            </div>
          </div>
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
                  onCheckedChange={(checked) => {
                    if (checked === true) {
                      onProviderChange(provider);
                    } else if (checked === false) {
                      onProviderChange(provider);
                    }
                  }}
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
                  onCheckedChange={(checked) => {
                    if (checked === true) {
                      onTypeChange(type);
                    } else if (checked === false) {
                      onTypeChange(type);
                    }
                  }}
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
              Toplam {selectedProviders.length + selectedTypes.length + (searchTerm ? 1 : 0) + ((commissionRange[0] !== minCommission || commissionRange[1] !== maxCommission) ? 1 : 0)} filtre aktif
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

export default MobilPOS;
