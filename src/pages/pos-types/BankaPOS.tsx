
import { useState } from "react";
import { Banknote } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BankaPOSFeatures from "@/components/pos-types/banka/BankaPOSFeatures";
import BankaPOSFAQ from "@/components/pos-types/banka/BankaPOSFAQ";
import BankaPOSAgreements from "@/components/pos-types/banka/BankaPOSAgreements";
import MetaTags from "@/components/MetaTags";
import POSFilterSidebar from "@/components/POSFilterSidebar";
import POSCard from "@/components/POSCard";
import { bankaPOSProviders } from "@/data/pos-types/bankaPOS";

interface FilterState {
  providers: string[];
  commissionRanges: string[];
  monthlyFeeRanges: string[];
  features: string[];
}

const BankaPOS = () => {
  const [filteredProviders, setFilteredProviders] = useState(bankaPOSProviders);

  const applyFilters = (filters: FilterState) => {
    let filtered = bankaPOSProviders;

    // Filter by providers
    if (filters.providers.length > 0) {
      filtered = filtered.filter(provider => 
        filters.providers.some(filterProvider => 
          provider.name.includes(filterProvider)
        )
      );
    }

    // Filter by commission ranges
    if (filters.commissionRanges.length > 0) {
      filtered = filtered.filter(provider => {
        const rate = parseFloat(provider.commission_rate.replace(',', '.'));
        return filters.commissionRanges.some(range => {
          if (range === "0-1") return rate >= 0 && rate <= 1;
          if (range === "1-2") return rate > 1 && rate <= 2;
          if (range === "2-3") return rate > 2 && rate <= 3;
          if (range === "3+") return rate > 3;
          return false;
        });
      });
    }

    // Filter by monthly fee ranges
    if (filters.monthlyFeeRanges.length > 0) {
      filtered = filtered.filter(provider => {
        const fee = provider.monthly_fee;
        return filters.monthlyFeeRanges.some(range => {
          if (range === "0") return fee.includes("Ücretsiz") || fee.includes("0");
          if (range === "0-100") {
            const feeNum = parseInt(fee.replace(/\D/g, ''));
            return feeNum >= 0 && feeNum <= 100;
          }
          if (range === "100-200") {
            const feeNum = parseInt(fee.replace(/\D/g, ''));
            return feeNum > 100 && feeNum <= 200;
          }
          if (range === "200+") {
            const feeNum = parseInt(fee.replace(/\D/g, ''));
            return feeNum > 200;
          }
          return false;
        });
      });
    }

    // Filter by features
    if (filters.features.length > 0) {
      filtered = filtered.filter(provider =>
        filters.features.some(feature =>
          provider.features.includes(feature)
        )
      );
    }

    setFilteredProviders(filtered);
  };

  return (
    <>
      <MetaTags
        title="Banka POS Komisyon Oranları 2025 | POS Compare"
        description="Bankaların güncel POS komisyon oranlarını karşılaştırın, işletmeniz için en uygun banka POS çözümünü kolayca bulun."
        keywords="banka pos, fiziksel pos, banka pos komisyon oranları 2025, pos karşılaştırma, pos cihazı ücretleri"
        canonicalPath="/pos-types/banka"
        priority={20}
      />
      
      {/* Header Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Banka POS Komisyon Oranları 2025</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Bankaların güncel POS komisyon oranlarını karşılaştırın, işletmeniz için en uygun banka POS çözümünü kolayca bulun.
          </p>
        </div>

        <div className="mb-8">
          <div className="prose prose-lg max-w-none mb-8">
            Banka POS'ları, bankaların işletmelere sunduğu güvenilir ödeme çözümleridir. Yüksek işlem hacmi ve çoklu ödeme seçenekleri sunar.
          </div>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="container mx-auto px-4">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-80 flex-shrink-0 hidden lg:block">
            <div className="bg-white rounded-lg border p-6 sticky top-4">
              <POSFilterSidebar
                providers={bankaPOSProviders}
                onFilter={applyFilters}
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Provider Cards */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">
                  Banka POS Çözümleri ({filteredProviders.length})
                </h2>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {filteredProviders.map(provider => (
                  <POSCard key={provider.id} {...provider} />
                ))}
              </div>

              {filteredProviders.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">Seçilen kriterlere uygun POS bulunamadı.</p>
                </div>
              )}
            </div>

            {/* Tabs Section */}
            <Tabs defaultValue="features" className="mb-12">
              <TabsList className="w-full justify-start space-x-4 border-b rounded-none">
                <TabsTrigger value="features">Özellikler</TabsTrigger>
                <TabsTrigger value="faq">Sık Sorulan Sorular</TabsTrigger>
                <TabsTrigger value="agreements">Özel Anlaşmalar</TabsTrigger>
              </TabsList>

              <TabsContent value="features" className="mt-6">
                <BankaPOSFeatures />
              </TabsContent>

              <TabsContent value="faq" className="mt-6">
                <BankaPOSFAQ />
              </TabsContent>

              <TabsContent value="agreements" className="mt-6">
                <BankaPOSAgreements />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default BankaPOS;
