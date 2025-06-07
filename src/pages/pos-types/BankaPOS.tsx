
import { useState } from "react";
import { Banknote } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BankaPOSFeatures from "@/components/pos-types/banka/BankaPOSFeatures";
import BankaPOSFAQ from "@/components/pos-types/banka/BankaPOSFAQ";
import BankaPOSAgreements from "@/components/pos-types/banka/BankaPOSAgreements";
import BankaPOSProviderCards from "@/components/pos-types/banka/BankaPOSProviderCards";
import MetaTags from "@/components/MetaTags";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import POSSidebar from "@/components/POSSidebar";
import { posProviders } from "@/data/posProviders";
import POSCard from "@/components/POSCard";

interface FilterState {
  commissionRates: string[];
  providers: string[];
  features: string[];
  monthlyFees: string[];
}

const BankaPOS = () => {
  const [filteredProviders, setFilteredProviders] = useState(
    posProviders.filter(provider => provider.type === "Banka POS")
  );

  const handleFilter = (filters: FilterState) => {
    let filtered = posProviders.filter(provider => provider.type === "Banka POS");

    // Apply commission rate filters
    if (filters.commissionRates.length > 0) {
      filtered = filtered.filter(provider => {
        const rate = parseFloat(provider.commission_rate.replace('%', ''));
        return filters.commissionRates.some(range => {
          if (range === "%5+") return rate >= 5;
          const [min, max] = range.replace('%', '').split(' - ').map(num => parseFloat(num.replace('%', '')));
          return rate >= min && rate < max;
        });
      });
    }

    // Apply provider filters
    if (filters.providers.length > 0) {
      filtered = filtered.filter(provider => 
        filters.providers.some(filterProvider => 
          provider.name.toLowerCase().includes(filterProvider.toLowerCase())
        )
      );
    }

    // Apply feature filters
    if (filters.features.length > 0) {
      filtered = filtered.filter(provider => 
        filters.features.some(feature => 
          provider.features.some(providerFeature => 
            providerFeature.toLowerCase().includes(feature.toLowerCase())
          )
        )
      );
    }

    // Apply monthly fee filters
    if (filters.monthlyFees.length > 0) {
      filtered = filtered.filter(provider => {
        const fee = provider.monthly_fee;
        return filters.monthlyFees.some(range => {
          if (range === "Ücretsiz") return fee === "0 TL" || fee === "Ücretsiz";
          if (range === "0 - 50 TL") {
            const feeValue = parseFloat(fee.replace(/[^0-9]/g, ''));
            return feeValue >= 0 && feeValue <= 50;
          }
          if (range === "50 - 100 TL") {
            const feeValue = parseFloat(fee.replace(/[^0-9]/g, ''));
            return feeValue > 50 && feeValue <= 100;
          }
          if (range === "100 - 200 TL") {
            const feeValue = parseFloat(fee.replace(/[^0-9]/g, ''));
            return feeValue > 100 && feeValue <= 200;
          }
          if (range === "200+ TL") {
            const feeValue = parseFloat(fee.replace(/[^0-9]/g, ''));
            return feeValue > 200;
          }
          return false;
        });
      });
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
      
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <POSSidebar onFilter={handleFilter} posType="Banka POS" />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <h1 className="text-lg font-semibold">Banka POS Karşılaştırma</h1>
            </header>
            
            <POSTypePage
              title="Banka POS Komisyon Oranları 2025"
              description="Bankaların güncel POS komisyon oranlarını karşılaştırın, işletmeniz için en uygun banka POS çözümünü kolayca bulun."
              type="Banka POS"
              Icon={Banknote}
              whatIsContent="Banka POS'ları, bankaların işletmelere sunduğu güvenilir ödeme çözümleridir. Yüksek işlem hacmi ve çoklu ödeme seçenekleri sunar."
              advantages={[
                "Güvenilir banka altyapısı",
                "7/24 teknik destek",
                "Farklı kart ve taksit seçenekleri",
                "Kapsamlı raporlama özellikleri",
                "Geniş servis ağı"
              ]}
            />

            {/* Filtered Results */}
            <div className="container mx-auto px-4 py-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  Filtrelenmiş Sonuçlar ({filteredProviders.length} adet)
                </h2>
                <div className="grid gap-4">
                  {filteredProviders.map(provider => (
                    <POSCard key={provider.id} {...provider} />
                  ))}
                </div>
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

              <BankaPOSProviderCards />
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </>
  );
};

export default BankaPOS;
