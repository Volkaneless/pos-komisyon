import { useState } from "react";
import { Smartphone } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import FAQ from "@/components/pos/POSProviderFAQ";
import LatestBlogPosts from "@/components/pos/LatestBlogPosts";
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

const CepPOS = () => {
  const currentYear = new Date().getFullYear();
  const [filteredProviders, setFilteredProviders] = useState(
    posProviders.filter(provider => provider.type === "Cep POS")
  );

  const handleFilter = (filters: FilterState) => {
    let filtered = posProviders.filter(provider => provider.type === "Cep POS");

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
        title={`Cep POS Komisyon Oranları ${currentYear} - En Uygun Cep POS Ücretleri`}
        description={`${currentYear} yılı güncel cep POS komisyon oranları, karşılaştırma ve hesaplama araçları. İşletmeniz için en uygun cep POS çözümünü bulun.`}
        keywords="cep pos komisyon oranları, cep pos başvuru, mobil ödeme uygulamaları, telefon pos uygulaması, cep pos çözümleri"
        canonicalPath="/pos-types/cep"
        priority={20}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": `Cep POS Komisyon Oranları ${currentYear}`,
          "description": `${currentYear} yılı güncel cep POS komisyon oranları ve karşılaştırma araçları.`,
          "url": "https://poskomisyon.com/pos-types/cep"
        }}
      />

      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <POSSidebar onFilter={handleFilter} posType="Cep POS" />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <h1 className="text-lg font-semibold">Cep POS Karşılaştırma</h1>
            </header>

            <POSTypePage
              title={`Cep POS Komisyon Oranları ${currentYear}`}
              description="Akıllı telefon tabanlı POS çözümleri için en uygun komisyon oranları ve karşılaştırmalar"
              type="Cep POS"
              Icon={Smartphone}
              whatIsContent="Cep POS uygulamaları, akıllı telefonunuzu POS cihazına dönüştüren modern ödeme çözümleridir. Ek donanım gerektirmeden mobil uygulama ile ödeme kabul edebilirsiniz."
              advantages={[
                "Ek donanım maliyeti yok",
                "Anında kurulum ve kullanım",
                "QR kod ile hızlı ödeme",
                "Düşük komisyon oranları",
                "Kolay entegrasyon",
                "7/24 teknik destek",
                "Detaylı satış raporları",
                "Güvenli ödeme altyapısı"
              ]}
            />

            <div className="container mx-auto px-4 py-16">
              {/* Filtered Results */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6">
                  Filtrelenmiş Sonuçlar ({filteredProviders.length} adet)
                </h2>
                <div className="grid gap-4">
                  {filteredProviders.map(provider => (
                    <POSCard key={provider.id} {...provider} />
                  ))}
                </div>
              </div>

              <FAQ />
              <LatestBlogPosts />
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </>
  );
};

export default CepPOS;
