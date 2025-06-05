import { useState } from "react";
import { Smartphone, CreditCard, ShieldCheck, Globe, WifiHigh, TrendingUp, Phone, Settings, Coins, FileCheck, BarChart, Share2, Filter, X, Search, Building } from "lucide-react";
import { cepPOSProviders } from "@/data/pos-types/cepPOS";
import POSCard from "@/components/POSCard";
import CepPOSFAQ from "@/components/FAQ/CepPOSFAQ";
import LatestBlogPosts from "@/components/pos/LatestBlogPosts";
import MetaTags from "@/components/MetaTags";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";

const CepPOS = () => {
  const currentYear = new Date().getFullYear();
  
  const [filteredProviders, setFilteredProviders] = useState(cepPOSProviders);
  const [selectedProviders, setSelectedProviders] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [commissionRange, setCommissionRange] = useState<[number, number]>([0, 5]);

  // Extract unique provider names (first word) and count
  const uniqueProviders = cepPOSProviders.reduce((acc, curr) => {
    const name = curr.name.split(" ")[0];
    acc[name] = (acc[name] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Extract unique types and count
  const uniqueTypes = cepPOSProviders.reduce((acc, curr) => {
    acc[curr.type] = (acc[curr.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Get commission range bounds
  const commissionValues = cepPOSProviders.map(p => parseFloat(p.commission_rate));
  const minCommission = Math.min(...commissionValues);
  const maxCommission = Math.max(...commissionValues);

  const applyFilters = (providers: string[], types: string[], search: string, range: [number, number]) => {
    let filtered = cepPOSProviders;
    
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

    // Apply commission range filter
    filtered = filtered.filter(provider => {
      const commission = parseFloat(provider.commission_rate);
      return commission >= range[0] && commission <= range[1];
    });

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
    const range: [number, number] = [value[0], value[1]];
    setCommissionRange(range);
    applyFilters(selectedProviders, selectedTypes, searchTerm, range);
  };

  const clearFilters = () => {
    setSelectedProviders([]);
    setSelectedTypes([]);
    setSearchTerm("");
    setCommissionRange([minCommission, maxCommission]);
    setFilteredProviders(cepPOSProviders);
  };

  const hasActiveFilters = selectedProviders.length > 0 || selectedTypes.length > 0 || searchTerm.trim() || 
    commissionRange[0] !== minCommission || commissionRange[1] !== maxCommission;

  // Calculate statistics
  const avgCommission = (filteredProviders.reduce((sum, p) => sum + parseFloat(p.commission_rate), 0) / filteredProviders.length).toFixed(2);
  const lowestCommission = Math.min(...filteredProviders.map(p => parseFloat(p.commission_rate))).toFixed(2);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Cep POS Komisyon Oranları ${currentYear}`,
    "description": `${currentYear} yılı güncel cep POS komisyon oranları ve başvuru seçenekleri. Mobil işletmeniz için en uygun cep POS çözümünü bulun ve hemen başvurun.`,
    "url": "https://poskomisyon.com/pos-types/cep",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": cepPOSProviders.map((provider, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": provider.name,
        "url": `https://poskomisyon.com/pos/${provider.id}`
      }))
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": minCommission.toString(),
      "highPrice": maxCommission.toString(),
      "priceCurrency": "TRY",
      "offerCount": cepPOSProviders.length.toString()
    }
  };

  return (
    <>
      <MetaTags 
        title={`Cep POS Komisyon Oranları ${currentYear} - En Uygun Cep POS Fiyatları`} 
        description={`${currentYear} yılı güncel cep POS komisyon oranları ve başvuru seçenekleri. Mobil işletmeniz için en uygun cep POS çözümünü bulun ve hemen başvurun.`} 
        keywords="cep pos, mobil pos uygulaması, telefon pos cihazı, android pos uygulaması, ios pos uygulaması, cep pos komisyon oranları, cep pos başvuru, cep pos nedir" 
        canonicalPath="/pos-types/cep" 
        priority={20} 
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* SEO Optimized Header */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-16 pt-32">
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Cep POS Komisyon Oranları {currentYear} - En Uygun Fiyatlar
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Mobil işletmeniz için en uygun cep POS çözümünü bulun. Güncel komisyon oranlarını karşılaştırın, 
                avantajları inceleyin ve hemen başvurun. {currentYear} yılının en güncel cep POS seçenekleri burada.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="bg-primary/10 text-primary px-3 py-2 rounded-lg text-center">
                  <div className="font-semibold">{filteredProviders.length}</div>
                  <div className="text-xs">Cep POS</div>
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
                        {selectedProviders.length + selectedTypes.length + (searchTerm ? 1 : 0) + 
                         (commissionRange[0] !== minCommission || commissionRange[1] !== maxCommission ? 1 : 0)}
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
                      {filteredProviders.length} Cep POS Seçeneği Bulundu
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {hasActiveFilters ? 'Filtrelere göre sonuçlar' : 'Tüm cep POS seçenekleri'}
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
                          <Coins className="w-3 h-3" />
                          %{commissionRange[0]}-{commissionRange[1]}
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

        {/* ... keep existing code (Tabs section with all content) */}
        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="overview" className="w-full max-w-4xl mx-auto mb-16">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Genel Bakış</TabsTrigger>
              <TabsTrigger value="commissions">Komisyon Oranları</TabsTrigger>
              <TabsTrigger value="application">Başvuru</TabsTrigger>
              <TabsTrigger value="features">Özellikler</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-6 p-6 bg-white rounded-lg shadow">
              <h3 className="text-2xl font-semibold mb-4">Cep POS Nedir?</h3>
              <p className="text-gray-700 mb-6">
                Cep POS, akıllı telefonunuzu bir ödeme terminaline dönüştüren yenilikçi bir çözümdür. 
                Herhangi bir ek donanım gerektirmeden, telefonunuz üzerinden güvenli bir şekilde kredi kartı ödemeleri alabilirsiniz.
                {currentYear} yılında giderek yaygınlaşan bu teknoloji, özellikle küçük işletmeler ve serbest çalışanlar için
                ideal bir çözüm sunmaktadır.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Settings className="w-5 h-5 mr-2 text-blue-600" />
                    Nasıl Çalışır?
                  </h4>
                  <p className="text-sm text-gray-700">
                    Akıllı telefonunuza Cep POS uygulamasını indirip hesap oluşturarak hemen kullanmaya başlayabilirsiniz.
                    NFC teknolojisi veya QR kod ile temassız ödeme alma imkanı sunar.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <BarChart className="w-5 h-5 mr-2 text-green-600" />
                    Kimler Kullanabilir?
                  </h4>
                  <p className="text-sm text-gray-700">
                    Seyyar satıcılar, küçük işletmeler, e-ticaret sahipleri, serbest çalışanlar ve ödeme almak isteyen tüm profesyoneller için uygundur.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="commissions" className="mt-6 p-6 bg-white rounded-lg shadow">
              <h3 className="text-2xl font-semibold mb-4">Cep POS Komisyon Oranları - {currentYear}</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2">İşlem Tipi</th>
                      <th className="border border-gray-300 px-4 py-2">Komisyon Oranı</th>
                      <th className="border border-gray-300 px-4 py-2">Açıklama</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Peşin</td>
                      <td className="border border-gray-300 px-4 py-2 font-semibold text-green-600">%0,79 - %1,49</td>
                      <td className="border border-gray-300 px-4 py-2">Standart ödeme komisyonu</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">3 Taksit</td>
                      <td className="border border-gray-300 px-4 py-2 font-semibold text-blue-600">%1,89 - %2,49</td>
                      <td className="border border-gray-300 px-4 py-2">Kısa vadeli taksit seçeneği</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">6 Taksit</td>
                      <td className="border border-gray-300 px-4 py-2 font-semibold text-purple-600">%2,29 - %3,49</td>
                      <td className="border border-gray-300 px-4 py-2">Orta vadeli taksit seçeneği</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">9 Taksit</td>
                      <td className="border border-gray-300 px-4 py-2 font-semibold text-orange-600">%3,29 - %4,49</td>
                      <td className="border border-gray-300 px-4 py-2">Uzun vadeli ödeme imkanı</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">12 Taksit</td>
                      <td className="border border-gray-300 px-4 py-2 font-semibold text-red-600">%4,29 - %5,99</td>
                      <td className="border border-gray-300 px-4 py-2">En uzun vadeli taksit seçeneği</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200 text-sm">
                <p className="flex items-center text-amber-700">
                  <TrendingUp className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>
                    Komisyon oranları işletme hacmi, sözleşme süresi ve tercih edilen bankaya göre değişiklik gösterebilir.
                    Daha detaylı bilgi için bankanızla iletişime geçiniz.
                  </span>
                </p>
              </div>
            </TabsContent>
            <TabsContent value="application" className="mt-6 p-6 bg-white rounded-lg shadow">
              <h3 className="text-2xl font-semibold mb-4">Cep POS Başvuru Süreci</h3>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 p-4 border border-gray-200 rounded-lg">
                    <div className="rounded-full bg-blue-100 w-8 h-8 flex items-center justify-center mb-3">
                      <span className="font-bold text-blue-600">1</span>
                    </div>
                    <h4 className="font-semibold mb-2">Gerekli Belgeler</h4>
                    <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                      <li>Vergi levhası / Kimlik fotokopisi</li>
                      <li>İşletme ruhsatı (ticari işletmeler için)</li>
                      <li>İmza sirküleri</li>
                      <li>Hesap ekstreleri (seçime bağlı)</li>
                    </ul>
                  </div>
                  <div className="flex-1 p-4 border border-gray-200 rounded-lg">
                    <div className="rounded-full bg-blue-100 w-8 h-8 flex items-center justify-center mb-3">
                      <span className="font-bold text-blue-600">2</span>
                    </div>
                    <h4 className="font-semibold mb-2">Başvuru Adımları</h4>
                    <ol className="list-decimal pl-5 text-sm text-gray-600 space-y-1">
                      <li>Online başvuru formunu doldurma</li>
                      <li>Belgelerin iletilmesi</li>
                      <li>Onay süreci (1-3 iş günü)</li>
                      <li>Hesap aktivasyonu</li>
                    </ol>
                  </div>
                </div>
                
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h4 className="font-semibold mb-2 text-primary">Hızlı Başlangıç</h4>
                  <p className="text-sm text-gray-700 mb-4">
                    Cep POS başvurunuzun onaylanmasının ardından izlemeniz gereken adımlar:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="p-3 bg-white rounded shadow-sm">
                      <span className="block font-medium mb-1">1. Uygulama İndirme</span>
                      <span className="text-gray-600">App Store veya Google Play'den uygulamayı indirin</span>
                    </div>
                    <div className="p-3 bg-white rounded shadow-sm">
                      <span className="block font-medium mb-1">2. Giriş Yapma</span>
                      <span className="text-gray-600">Size verilen bilgilerle hesabınıza giriş yapın</span>
                    </div>
                    <div className="p-3 bg-white rounded shadow-sm">
                      <span className="block font-medium mb-1">3. Test İşlem</span>
                      <span className="text-gray-600">Küçük bir test işlemi gerçekleştirin</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center mt-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Hemen Başvuru Yap
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="features" className="mt-6 p-6 bg-white rounded-lg shadow">
              <h3 className="text-2xl font-semibold mb-4">Cep POS Özellikleri</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <WifiHigh className="w-5 h-5 mr-2 text-primary" />
                      Bağlantı Özellikleri
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li>Wi-Fi ve mobil veri desteği</li>
                      <li>Bluetooth bağlantı opsiyonu</li>
                      <li>Offline işlem yapabilme</li>
                      <li>NFC teknolojisi</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <CreditCard className="w-5 h-5 mr-2 text-primary" />
                      Ödeme Çeşitleri
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li>Kredi kartı işlemleri</li>
                      <li>Banka kartı işlemleri</li>
                      <li>QR kod ile ödeme</li>
                      <li>Temassız ödeme</li>
                      <li>Taksitli ödeme imkanı</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <FileCheck className="w-5 h-5 mr-2 text-primary" />
                      Raporlama
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li>Günlük işlem özeti</li>
                      <li>Aylık performans raporları</li>
                      <li>İşlem geçmişi</li>
                      <li>Elektronik fatura entegrasyonu</li>
                      <li>Excel ve PDF formatında dışa aktarma</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <ShieldCheck className="w-5 h-5 mr-2 text-primary" />
                      Güvenlik
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li>End-to-end şifreleme</li>
                      <li>PCI DSS sertifikasyonu</li>
                      <li>3D Secure desteği</li>
                      <li>Çift faktörlü kimlik doğrulama</li>
                      <li>BDDK onaylı güvenlik altyapısı</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="prose prose-lg max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Cep POS Komisyon Oranları {currentYear} - Cep POS Nedir?</h2>
            
            <div className="bg-blue-50 p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-semibold mb-4">Cep POS Nedir?</h3>
              <p className="text-gray-700 mb-0">
                Cep POS, akıllı telefonunuzu bir ödeme terminaline dönüştüren yenilikçi bir çözümdür. 
                Herhangi bir ek donanım gerektirmeden, telefonunuz üzerinden güvenli bir şekilde kredi kartı ödemeleri alabilirsiniz.
                {currentYear} yılında giderek yaygınlaşan bu teknoloji, özellikle küçük işletmeler ve serbest çalışanlar için
                ideal bir çözüm sunmaktadır.
              </p>
            </div>

            <Separator className="my-10" />

            <h3 className="text-2xl font-semibold mb-4">Cep POS: Başvuru ve Kullanım</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-medium mb-4">Başvuru Süreci</h4>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Kimler Başvurabilir?</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Bireysel işletme sahipleri</li>
                        <li>Limited ve anonim şirketler</li>
                        <li>Serbest meslek sahipleri</li>
                        <li>Şahıs şirketleri</li>
                        <li>E-ticaret platformu kullanan satıcılar</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Gerekli Belgeler</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Kimlik fotokopisi veya e-Devlet kimlik belgesi</li>
                        <li>Vergi levhası</li>
                        <li>İmza sirküleri (şirket başvurularında)</li>
                        <li>Faaliyet belgesi</li>
                        <li>İşletme hesabı veya banka hesap bilgileri</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Başvuru Aşamaları</AccordionTrigger>
                    <AccordionContent>
                      <ol className="list-decimal pl-5 space-y-1 text-gray-700">
                        <li>Online başvuru formunu eksiksiz doldurun</li>
                        <li>Gerekli belgeleri sisteme yükleyin</li>
                        <li>Bilgilerin doğrulanmasını bekleyin (1-3 iş günü)</li>
                        <li>Onay e-postası alın</li>
                        <li>Uygulamayı indirin ve hesap bilgilerinizle giriş yapın</li>
                      </ol>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              
              <div>
                <h4 className="text-xl font-medium mb-4">Kullanım Aşamaları</h4>
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="rounded-full bg-blue-100 w-6 h-6 flex items-center justify-center mr-3">
                        <span className="font-bold text-blue-600 text-sm">1</span>
                      </div>
                      <h5 className="font-semibold">Hesap Kurulumu</h5>
                    </div>
                    <p className="text-sm text-gray-600">
                      Hesap bilgilerinizle uygulamaya giriş yapın ve profil bilgilerinizi güncelleyin.
                      Banka hesabınızı entegre ederek ödeme alma sürecini tamamlayın.
                    </p>
                  </div>
                  
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="rounded-full bg-blue-100 w-6 h-6 flex items-center justify-center mr-3">
                        <span className="font-bold text-blue-600 text-sm">2</span>
                      </div>
                      <h5 className="font-semibold">Ödeme Alma</h5>
                    </div>
                    <p className="text-sm text-gray-600">
                      Ana ekrandan "Ödeme Al" butonuna tıklayın, tutar ve taksit bilgilerini girin.
                      Temassız ödeme, kart okutma veya QR kod yöntemlerinden birini seçerek ödeme alın.
                    </p>
                  </div>
                  
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="rounded-full bg-blue-100 w-6 h-6 flex items-center justify-center mr-3">
                        <span className="font-bold text-blue-600 text-sm">3</span>
                      </div>
                      <h5 className="font-semibold">İşlem Takibi</h5>
                    </div>
                    <p className="text-sm text-gray-600">
                      "İşlemlerim" bölümünden geçmiş işlemleri görüntüleyin, raporlar oluşturun ve
                      e-fatura entegrasyonu ile faturalarınızı düzenleyin.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Cep POS: Güvenlik Özellikleri</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="p-5 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-semibold mb-3 flex items-center">
                  <ShieldCheck className="h-5 w-5 mr-2 text-primary" />
                  Veri Güvenliği
                </h4>
                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
                  <li>End-to-end şifreleme</li>
                  <li>PCI DSS uyumluluğu</li>
                  <li>ISO 27001 sertifikasyonu</li>
                  <li>Kart verilerinin cihazda saklanmaması</li>
                  <li>Düzenli güvenlik kontrolleri</li>
                </ul>
              </div>
              
              <div className="p-5 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-semibold mb-3 flex items-center">
                  <WifiHigh className="h-5 w-5 mr-2 text-primary" />
                  İşlem Güvenliği
                </h4>
                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
                  <li>Gerçek zamanlı doğrulama</li>
                  <li>3D Secure entegrasyonu</li>
                  <li>Anlık işlem bildirimleri</li>
                  <li>Lokasyon doğrulama</li>
                  <li>İşlem limiti belirleme</li>
                </ul>
              </div>
              
              <div className="p-5 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-semibold mb-3 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  Dolandırıcılık Koruması
                </h4>
                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
                  <li>Yapay zeka tabanlı risk analizi</li>
                  <li>Şüpheli işlem tespit sistemi</li>
                  <li>İşlem geçmişi kontrolü</li>
                  <li>Anormal davranış tespiti</li>
                  <li>BDDK onaylı güvenlik protokolleri</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Cep POS: Maliyet Optimizasyonu</h3>
            <div className="bg-white p-6 rounded-lg border border-gray-200 mb-12">
              <p className="text-gray-700 mb-4">
                İşletmenizin maliyetlerini optimize etmek için öneriler:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium mb-3">Komisyon Optimizasyonu</h4>
                  <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>İşlem hacminize göre özel fiyatlandırma talep edin</li>
                    <li>Farklı sağlayıcılardan teklif alarak karşılaştırın</li>
                    <li>Yıllık sözleşme yaparak indirimli oranlar alın</li>
                    <li>Taksit yapısını işletme nakit akışına göre optimize edin</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-3">Ek Maliyet Tasarrufu</h4>
                  <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>POS cihazı satın alma maliyetinden kurtulun</li>
                    <li>Bakım ve servis ücretlerinden tasarruf edin</li>
                    <li>Kağıt slip maliyetini azaltın (e-slip kullanımı)</li>
                    <li>Personel eğitim maliyetlerini minimize edin</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-md text-sm">
                <p className="font-medium flex items-center">
                  <Globe className="w-4 h-4 mr-2 text-blue-600" />
                  <span className="text-blue-700">Maliyet İpucu:</span>
                </p>
                <p className="mt-1 text-gray-700">
                  Aylık 25.000 TL ve üzeri ciro yapan işletmeler genellikle özel komisyon oranları için pazarlık yapabilirler.
                  Düzenli işlem hacminizi belgeleyerek daha avantajlı oranlar elde etmeniz mümkündür.
                </p>
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold mb-4">Cep POS Avantajları ve Dezavantajları</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                <h4 className="text-lg font-semibold text-green-700 mb-3 flex items-center">
                  <Share2 className="w-5 h-5 mr-2" />
                  Avantajlar
                </h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Sıfır donanım maliyeti</li>
                  <li>Kolay kurulum ve entegrasyon</li>
                  <li>Düşük işlem komisyonları</li>
                  <li>Mobil kullanım esnekliği</li>
                  <li>Tüm kredi kartlarıyla uyumluluk</li>
                  <li>Gelişmiş raporlama imkanları</li>
                  <li>7/24 teknik destek</li>
                  <li>Sürekli güncellenen yazılım</li>
                  <li>E-fatura entegrasyonu</li>
                  <li>Temassız ödeme imkanı</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                <h4 className="text-lg font-semibold text-red-700 mb-3 flex items-center">
                  <Share2 className="w-5 h-5 mr-2" />
                  Dezavantajlar
                </h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>İnternet bağlantısı gerekliliği</li>
                  <li>Batarya ömrü kısıtlaması</li>
                  <li>Bazı durumlarda bağlantı sorunları</li>
                  <li>Telefon hafıza kapasitesi ihtiyacı</li>
                  <li>Büyük işletmeler için sınırlı fonksiyonellik</li>
                  <li>Yazılım güncellemelerine bağımlılık</li>
                  <li>Telefon/tablet arızasında kesinti riski</li>
                  <li>Fiziksel POS'lara göre daha yavaş işlem hızı</li>
                  <li>Yüksek hacimli işlemlerde sınırlılık</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl my-16">
            <div className="max-w-4xl mx-auto">
              
              <CepPOSFAQ />
            </div>
          </div>
          
          <div className="my-16">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center">Son Yazılarımız</h3>
              <p className="text-center text-gray-600 mb-8">
                Cep POS ve ödeme sistemleri hakkında en güncel bilgiler ve makaleler
              </p>
              <LatestBlogPosts />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl my-16 text-center">
            <h3 className="text-2xl font-bold mb-4">En Uygun Cep POS Çözümünü Bulun</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              İşletmenizin ihtiyaçlarına en uygun cep POS çözümünü bulmak için hemen karşılaştırma yapın ve özel tekliflerden yararlanın.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Cep POS Karşılaştır
              </Button>
              <Button size="lg" variant="outline">
                Komisyon Hesapla
              </Button>
            </div>
          </div>
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
  commissionRange: [number, number];
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
          <h3 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
            <Coins className="w-4 h-4" />
            Komisyon Aralığı
          </h3>
          <div className="space-y-3">
            <div className="px-3">
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
              %{minCommission} - %{maxCommission} aralığında
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
                    onProviderChange(provider);
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
                    onTypeChange(type);
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
              Toplam {selectedProviders.length + selectedTypes.length + (searchTerm ? 1 : 0) + 
               (commissionRange[0] !== minCommission || commissionRange[1] !== maxCommission ? 1 : 0)} filtre aktif
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

export default CepPOS;
