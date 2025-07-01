
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
  const currentYear = new Date().getFullYear();
  const [filteredProviders, setFilteredProviders] = useState(bankaPOSProviders);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Banka POS nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Banka POS'ları, bankaların işletmelere sunduğu güvenilir ödeme çözümleridir. Yüksek işlem hacmi ve çoklu ödeme seçenekleri sunan bu cihazlar, işletmenizin ödeme altyapısını güçlendirmeye odaklanır."
      }
    }]
  };

  const applyFilters = (filters: FilterState) => {
    let filtered = bankaPOSProviders;

    if (filters.providers.length > 0) {
      filtered = filtered.filter(provider => 
        filters.providers.some(filterProvider => 
          provider.name.includes(filterProvider)
        )
      );
    }

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
        title={`Banka POS Komisyon Oranları ${currentYear} - En Uygun Banka POS Çözümleri`}
        description={`${currentYear} yılı güncel banka POS komisyon oranları, karşılaştırma ve hesaplama araçları. İşletmeniz için en uygun banka POS çözümünü bulun.`}
        keywords={`banka pos komisyon oranları ${currentYear}, banka pos başvuru, fiziksel pos cihazları, banka pos çözümleri, pos cihazı ücretleri, banka pos karşılaştırma`}
        canonicalPath="/pos-types/banka"
        priority={20}
        structuredData={structuredData}
      />
      
      <POSTypePage 
        title={`Banka POS Komisyon Oranları ${currentYear}`}
        description={`Bankaların güncel POS komisyon oranlarını karşılaştırın, işletmeniz için en uygun banka POS çözümünü kolayca bulun. ${currentYear} güncel fiyatlar ve özellikler.`}
        type="Banka POS" 
        Icon={Banknote} 
        whatIsContent={`Banka POS'ları, bankaların işletmelere sunduğu güvenilir ödeme çözümleridir. ${currentYear} yılında yüksek işlem hacmi ve çoklu ödeme seçenekleri sunan bu cihazlar, işletmenizin ödeme altyapısını güçlendirmeye odaklanır.`}
        advantages={["Banka güvencesi ve kurumsal destek", "Yüksek işlem kapasitesi", "7/24 profesyonel teknik destek", "Geniş kart ve ödeme yöntemi desteği", "Gelişmiş güvenlik protokolleri", "Detaylı raporlama ve analiz araçları"]}
        breadcrumbPath="/pos-types/banka"
      />

      <div className="container mx-auto px-4">
        <div className="flex gap-8">
          <div className="w-80 flex-shrink-0 hidden lg:block">
            <div className="bg-white rounded-lg border p-6 sticky top-4">
              <POSFilterSidebar
                providers={bankaPOSProviders}
                onFilter={applyFilters}
              />
            </div>
          </div>

          <div className="flex-1 min-w-0">
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
