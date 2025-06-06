
import { useState } from "react";
import { sanalPOSProviders } from "@/data/pos-types/sanalPOS";
import POSCard from "@/components/POSCard";
import FAQ from "@/components/FAQ";
import LatestBlogPosts from "@/components/pos/LatestBlogPosts";
import MetaTags from "@/components/MetaTags";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import POSTypeHeader from "@/components/pos-types/shared/POSTypeHeader";
import MobileFilterButton from "@/components/pos-types/shared/MobileFilterButton";
import DesktopFilterSidebar from "@/components/pos-types/shared/DesktopFilterSidebar";
import FilterContent from "@/components/pos-types/shared/FilterContent";
import ResultsHeader from "@/components/pos-types/shared/ResultsHeader";
import NoResultsFound from "@/components/pos-types/shared/NoResultsFound";
import { usePOSFiltering } from "@/hooks/usePOSFiltering";

const SanalPOS = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const {
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
  } = usePOSFiltering({ providers: sanalPOSProviders });

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

  const activeFilterCount = selectedProviders.length + selectedTypes.length + (searchTerm ? 1 : 0);

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
        <POSTypeHeader
          title="Sanal POS Başvurusu - 2025 Komisyon Oranları"
          description="E-ticaret siteniz için en uygun sanal POS çözümünü bulun. Güncel komisyon oranlarını karşılaştırın, avantajları inceleyin ve hemen başvurun. 2025 yılının en güncel sanal POS seçenekleri burada."
          totalCount={filteredProviders.length}
          lowestCommission={lowestCommission}
          avgCommission={avgCommission}
          uniqueProvidersCount={Object.keys(uniqueProviders).length}
        />

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile Filter Button */}
            <div className="lg:hidden">
              <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <SheetTrigger asChild>
                  <MobileFilterButton
                    onClick={() => setIsFilterOpen(true)}
                    hasActiveFilters={hasActiveFilters}
                    activeFilterCount={activeFilterCount}
                  />
                </SheetTrigger>
                <SheetContent side="left" className="w-80 p-0">
                  <SheetHeader className="p-6 border-b">
                    <SheetTitle className="flex items-center gap-2">
                      Filtreler
                    </SheetTitle>
                  </SheetHeader>
                  <FilterContent 
                    uniqueProviders={uniqueProviders}
                    uniqueTypes={uniqueTypes}
                    selectedProviders={selectedProviders}
                    selectedTypes={selectedTypes}
                    searchTerm={searchTerm}
                    onProviderChange={handleProviderChange}
                    onTypeChange={handleTypeChange}
                    onSearchChange={handleSearchChange}
                    onClearFilters={clearFilters}
                    hasActiveFilters={hasActiveFilters}
                    isMobile={true}
                  />
                </SheetContent>
              </Sheet>
            </div>

            {/* Desktop Sidebar */}
            <DesktopFilterSidebar
              uniqueProviders={uniqueProviders}
              uniqueTypes={uniqueTypes}
              selectedProviders={selectedProviders}
              selectedTypes={selectedTypes}
              searchTerm={searchTerm}
              onProviderChange={handleProviderChange}
              onTypeChange={handleTypeChange}
              onSearchChange={handleSearchChange}
              onClearFilters={clearFilters}
              hasActiveFilters={hasActiveFilters}
              filteredCount={filteredProviders.length}
              lowestCommission={lowestCommission}
            />

            {/* POS Cards */}
            <div className="flex-1">
              <ResultsHeader
                filteredCount={filteredProviders.length}
                hasActiveFilters={hasActiveFilters}
                onClearFilters={clearFilters}
                searchTerm={searchTerm}
                selectedProviders={selectedProviders}
                selectedTypes={selectedTypes}
                onSearchChange={handleSearchChange}
                onProviderChange={handleProviderChange}
                onTypeChange={handleTypeChange}
              />

              <div className="space-y-4">
                {filteredProviders.map(provider => (
                  <POSCard 
                    key={provider.id} 
                    id={provider.id}
                    logo={provider.logo}
                    name={provider.name}
                    type={provider.type}
                    monthly_fee={provider.monthly_fee}
                    commission_rate={provider.commission_rate}
                    features={provider.features}
                  />
                ))}
              </div>

              {filteredProviders.length === 0 && (
                <NoResultsFound onClearFilters={clearFilters} />
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

export default SanalPOS;
