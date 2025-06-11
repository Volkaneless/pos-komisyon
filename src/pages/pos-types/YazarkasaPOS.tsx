import { Printer, ShieldCheck, Clock, TrendingUp } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import FAQ from "@/components/FAQ";
import LatestBlogPosts from "@/components/pos/LatestBlogPosts";
import MetaTags from "@/components/MetaTags";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import POSFilterSidebar from "@/components/POSFilterSidebar";
import POSCard from "@/components/POSCard";
import { yazarkasaPOSProviders } from "@/data/pos-types/yazarkasaPOS";
import { useState } from "react";

interface FilterState {
  providers: string[];
  commissionRanges: string[];
  monthlyFeeRanges: string[];
  features: string[];
}

const YazarkasaPOS = () => {
  const currentYear = new Date().getFullYear();
  const [filteredProviders, setFilteredProviders] = useState(yazarkasaPOSProviders);

  const applyFilters = (filters: FilterState) => {
    let filtered = yazarkasaPOSProviders;

    if (filters.providers.length > 0) {
      filtered = filtered.filter(provider => 
        filters.providers.some(filterProvider => 
          provider.name.includes(filterProvider)
        )
      );
    }

    if (filters.commissionRanges.length > 0) {
      filtered = filtered.filter(provider => {
        const rate = parseFloat(provider.commission_rate.replace(',', '.').replace('%', ''));
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
          if (range === "0") return fee.includes("0") || fee.includes("Ücretsiz");
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
        title={`Yazar Kasa (ÖKC) POS Komisyon Oranları ${currentYear} - En Uygun Yazarkasa POS`} 
        description={`${currentYear} yılı güncel yazar kasa POS komisyon oranları, karşılaştırma ve hesaplama araçları. İşletmeniz için en uygun yazarkasa POS çözümünü bulun.`} 
        keywords={`yazar kasa pos komisyon oranları, yazarkasa pos başvuru, ökc pos, entegre pos sistemleri, pos yazarkasa entegrasyonu`}
        canonicalPath="/pos-types/yazarkasa" 
      />

      <POSTypePage 
        title={`Yazar Kasa (ÖKC) POS Komisyon Oranları ${currentYear}`} 
        description={`Yazar kasa entegre POS çözümleri için en uygun komisyon oranları ve karşılaştırmalar. ${currentYear} güncel fiyatlar ve gelişmiş entegrasyon seçenekleri.`}
        type="Yazar Kasa (ÖKC) POS" 
        Icon={Printer} 
        whatIsContent={`Yazar kasa POS cihazları, ÖKC (Özel Kaydedici Cihaz) entegrasyonu ile işletmenizin hem satış hem de mali işlemlerini tek cihazda yönetmenizi sağlar. ${currentYear} yılında gelişmiş teknoloji ile bu cihazlar, yasal zorunlulukları karşılarken aynı zamanda ödeme almayı kolaylaştırır.`}
        advantages={["ÖKC entegrasyonu ve mali mevzuat uyumu", "Tek cihazda satış ve ödeme yönetimi", "Otomatik fatura kesimi", "Gelişmiş stok takibi", "Müşteri bilgi yönetimi", "Detaylı satış raporlaması", "7/24 teknik destek", "Kolay kurulum ve kullanım"]} 
        breadcrumbPath="/pos-types/yazarkasa"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="flex gap-8">
          <div className="w-80 flex-shrink-0 hidden lg:block">
            <div className="bg-white rounded-lg border p-6 sticky top-4">
              <POSFilterSidebar
                providers={yazarkasaPOSProviders}
                onFilter={applyFilters}
              />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">
                  Yazar Kasa POS Çözümleri ({filteredProviders.length})
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

            
            <div className="prose prose-lg max-w-4xl mx-auto mt-16">
              <h2 className="text-3xl font-bold mb-6 text-center">Yazar Kasa POS Komisyon Oranları {currentYear}</h2>
              
              <div className="bg-blue-50 p-6 rounded-xl mb-8">
                <h3 className="text-2xl font-semibold mb-4">Yazar Kasa POS Nedir?</h3>
                <p className="text-gray-700 mb-0">
                  Yazar kasa POS cihazları, ÖKC (Özel Kaydedici Cihaz) entegrasyonu ile işletmenizin hem satış hem de mali işlemlerini tek cihazda yönetmenizi sağlar.
                  Bu cihazlar, yasal zorunlulukları karşılarken aynı zamanda ödeme almayı kolaylaştırır ve işletme süreçlerinizi optimize eder.
                  Modern teknoloji ile donatılmış bu cihazlar, hem perakende hem de hizmet sektöründe yaygın olarak kullanılmaktadır.
                </p>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Yazar Kasa POS Güvenlik Özellikleri</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="p-5 hover:shadow-md transition-shadow border-primary/20">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    Mali Güvenlik
                  </h4>
                  <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
                    <li>ÖKC uyumluluğu ve yasal güvence</li>
                    <li>Otomatik backup sistemi</li>
                    <li>Veri şifreleme teknolojisi</li>
                  </ul>
                </Card>
                
                <Card className="p-5 hover:shadow-md transition-shadow border-primary/20">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    İşlem Güvenliği
                  </h4>
                  <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
                    <li>Anlık işlem kayıtları</li>
                    <li>Çift doğrulama sistemi</li>
                    <li>Hata kontrol mekanizmaları</li>
                  </ul>
                </Card>
                
                <Card className="p-5 hover:shadow-md transition-shadow border-primary/20">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Raporlama Güvenliği
                  </h4>
                  <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
                    <li>Manipülasyon koruması</li>
                    <li>Düzenli yedekleme</li>
                    <li>Audit trail kayıtları</li>
                  </ul>
                </Card>
              </div>

              <Separator className="my-10" />

              <h3 className="text-2xl font-semibold mb-4">Yazar Kasa POS Avantajları ve Dezavantajları</h3>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-green-600 mb-3">Avantajlar</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>ÖKC entegrasyonu ile yasal uyum</li>
                    <li>Tek cihazda çoklu işlem yönetimi</li>
                    <li>Otomatik raporlama ve kayıt tutma</li>
                    <li>Gelişmiş stok ve müşteri takibi</li>
                    <li>Mali mevzuata otomatik uyum</li>
                    <li>Düşük işletme maliyeti</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-red-600 mb-3">Dezavantajlar</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Yüksek başlangıç maliyeti</li>
                    <li>Düzenli yazılım güncellemeleri</li>
                    <li>Teknik destek bağımlılığı</li>
                    <li>Personel eğitimi gereksinimi</li>
                    <li>Cihaz arızalarında iş kesintisi</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl my-16">
              <FAQ />
            </div>
            
            <div className="my-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">Son Yazılarımız</h3>
              <LatestBlogPosts />
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl mt-16 text-center">
              <h3 className="text-2xl font-semibold mb-4">En Uygun Yazar Kasa POS Çözümü İçin</h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                İşletmenizin ihtiyaçlarına en uygun yazar kasa POS çözümünü bulmak için hemen karşılaştırma yapın ve özel tekliflerden yararlanın.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  POS Karşılaştır
                </Button>
                <Button size="lg" variant="outline">
                  Detaylı Bilgi Al
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YazarkasaPOS;
