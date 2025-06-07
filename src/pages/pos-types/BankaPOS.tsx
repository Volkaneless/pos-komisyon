
import { Banknote } from "lucide-react";
import { useState, useMemo } from "react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BankaPOSFeatures from "@/components/pos-types/banka/BankaPOSFeatures";
import BankaPOSFAQ from "@/components/pos-types/banka/BankaPOSFAQ";
import BankaPOSAgreements from "@/components/pos-types/banka/BankaPOSAgreements";
import BankaPOSProviderCards from "@/components/pos-types/banka/BankaPOSProviderCards";
import MetaTags from "@/components/MetaTags";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import POSFilterSidebar, { FilterState } from "@/components/POSFilterSidebar";
import { bankaPOSProviders } from "@/data/pos-types/bankaPOS";

const BankaPOS = () => {
  const [filters, setFilters] = useState<FilterState>({
    providers: [],
    posTypes: [],
    commissionRanges: [],
    monthlyFees: [],
  });

  // Filtre seçeneklerini oluştur
  const filterOptions = useMemo(() => {
    const providers = [...new Set(bankaPOSProviders.map(p => p.name.replace(' POS', '').replace(' Sanal POS', '')))];
    const posTypes = ['Banka POS', 'Fiziksel POS', 'Sanal POS'];
    const commissionRanges = ['%0-1', '%1-2', '%2-3', '%3+'];
    const monthlyFees = ['Ücretsiz', '0-100 TL', '100-200 TL', '200+ TL'];

    return {
      providers: providers.map(name => ({ 
        name, 
        count: bankaPOSProviders.filter(p => p.name.includes(name)).length 
      })),
      posTypes: posTypes.map(name => ({ 
        name, 
        count: bankaPOSProviders.filter(p => p.type === name).length 
      })),
      commissionRanges: commissionRanges.map(name => ({ 
        name, 
        count: bankaPOSProviders.length 
      })),
      monthlyFees: monthlyFees.map(name => ({ 
        name, 
        count: bankaPOSProviders.length 
      })),
    };
  }, []);

  // Filtrelenmiş POS sağlayıcıları
  const filteredProviders = useMemo(() => {
    return bankaPOSProviders.filter(provider => {
      // Provider filtresi
      if (filters.providers.length > 0) {
        const hasMatchingProvider = filters.providers.some(filterProvider => 
          provider.name.includes(filterProvider)
        );
        if (!hasMatchingProvider) return false;
      }

      // POS türü filtresi
      if (filters.posTypes.length > 0) {
        if (!filters.posTypes.includes(provider.type)) return false;
      }

      // Komisyon aralığı filtresi
      if (filters.commissionRanges.length > 0) {
        const commission = parseFloat(provider.commission_rate);
        const hasMatchingCommission = filters.commissionRanges.some(range => {
          switch (range) {
            case '%0-1': return commission >= 0 && commission <= 1;
            case '%1-2': return commission > 1 && commission <= 2;
            case '%2-3': return commission > 2 && commission <= 3;
            case '%3+': return commission > 3;
            default: return true;
          }
        });
        if (!hasMatchingCommission) return false;
      }

      return true;
    });
  }, [filters]);

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
          <POSFilterSidebar
            filterOptions={filterOptions}
            filters={filters}
            onFiltersChange={setFilters}
          />
          
          <SidebarInset className="flex-1">
            <div className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <SidebarTrigger />
                <h1 className="text-xl font-semibold">Banka POS Filtreleme</h1>
              </div>
              
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

              <div className="container mx-auto px-4 py-8">
                <div className="mb-6">
                  <p className="text-sm text-gray-600">
                    {filteredProviders.length} sonuç bulundu
                  </p>
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

                <BankaPOSProviderCards providers={filteredProviders} />
              </div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </>
  );
};

export default BankaPOS;
