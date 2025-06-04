
import { sanalPOSProviders } from "@/data/pos-types/sanalPOS";
import FAQ from "@/components/FAQ";
import LatestBlogPosts from "@/components/pos/LatestBlogPosts";
import MetaTags from "@/components/MetaTags";
import SanalPOSHeader from "@/components/pos-types/sanal/SanalPOSHeader";
import SanalPOSFilters from "@/components/pos-types/sanal/SanalPOSFilters";
import POSCardsList from "@/components/pos-types/sanal/POSCardsList";
import useSanalPOSFilters from "@/hooks/useSanalPOSFilters";

const SanalPOS = () => {
  const {
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
  } = useSanalPOSFilters();

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
        <SanalPOSHeader filteredCount={filteredProviders.length} />

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters */}
            <SanalPOSFilters
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

            {/* POS Cards */}
            <POSCardsList 
              providers={filteredProviders}
              onClearFilters={clearFilters}
            />
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
