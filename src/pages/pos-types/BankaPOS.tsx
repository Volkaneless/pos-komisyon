
import { Banknote } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import { Card } from "@/components/ui/card";
import { bankaPOSProviders } from "@/data/pos-types/bankaPOS";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BankaPOS = () => {
  return (
    <>
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
        <Tabs defaultValue="features" className="mb-12">
          <TabsList className="w-full justify-start space-x-4 border-b rounded-none">
            <TabsTrigger value="features">Özellikler</TabsTrigger>
            <TabsTrigger value="faq">Sık Sorulan Sorular</TabsTrigger>
            <TabsTrigger value="agreements">Özel Anlaşmalar</TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow bg-white">
                <h3 className="text-lg font-semibold mb-4 text-primary">Taksit İmkanları</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    12 aya varan taksit seçenekleri
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Sektöre özel taksit kampanyaları
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Dönemsel özel taksit fırsatları
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Peşin fiyatına taksit imkanı
                  </li>
                </ul>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow bg-white">
                <h3 className="text-lg font-semibold mb-4 text-primary">Teknik Özellikler</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Temassız ödeme desteği
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    QR kod ile ödeme
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    NFC teknolojisi
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Mobil uygulama entegrasyonu
                  </li>
                </ul>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow bg-white">
                <h3 className="text-lg font-semibold mb-4 text-primary">Güvenlik Özellikleri</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    EMV chip & PIN güvenliği
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    3D Secure desteği
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    SSL şifreleme
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Anlık dolandırıcılık kontrolü
                  </li>
                </ul>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="faq" className="mt-6">
            <div className="space-y-4">
              <Card className="p-6 hover:shadow-lg transition-shadow bg-white">
                <h3 className="font-semibold mb-2 text-primary">Banka POS başvurusu nasıl yapılır?</h3>
                <p className="text-gray-600">Banka POS başvurusu için şubeye giderek veya bankanın internet sitesi üzerinden online başvuru yapabilirsiniz. Gerekli belgeler: vergi levhası, imza sirküleri ve kimlik fotokopisi.</p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow bg-white">
                <h3 className="font-semibold mb-2 text-primary">POS cihazı aylık ücreti ne kadardır?</h3>
                <p className="text-gray-600">POS cihazı aylık ücreti bankadan bankaya değişmekle birlikte, ortalama 90-150 TL arasındadır. Bazı bankalar belirli ciro şartlarını sağlayan işletmelerden ücret almamaktadır.</p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow bg-white">
                <h3 className="font-semibold mb-2 text-primary">Komisyon oranları nasıl belirlenir?</h3>
                <p className="text-gray-600">Komisyon oranları işletmenin aylık cirosu, sektörü ve tercih edilen taksit seçeneklerine göre belirlenir. Genellikle %1.60 ile %1.90 arasında değişmektedir.</p>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="agreements" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow bg-white">
                <h3 className="text-lg font-semibold mb-4 text-primary">Ciro İndirimleri</h3>
                <p className="text-gray-600 mb-4">Aylık veya yıllık ciro hedeflerinize göre özel komisyon oranları ve indirimler sunulmaktadır.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    50.000 TL üzeri aylık ciro: %10 indirim
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    100.000 TL üzeri aylık ciro: %20 indirim
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    250.000 TL üzeri aylık ciro: %30 indirim
                  </li>
                </ul>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow bg-white">
                <h3 className="text-lg font-semibold mb-4 text-primary">Özel Sektör Avantajları</h3>
                <p className="text-gray-600 mb-4">Faaliyet gösterdiğiniz sektöre özel komisyon oranları ve kampanyalar sunulmaktadır.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Market ve gıda sektörü için özel oranlar
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Restoran ve cafe işletmelerine özel kampanyalar
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    E-ticaret firmaları için entegrasyon desteği
                  </li>
                </ul>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 mt-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">2025 Yılı Banka POS Avantajları</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bankaPOSProviders.map((provider) => (
              <Card key={provider.id} className="p-4 bg-white hover:shadow-lg transition-shadow">
                <img 
                  src={provider.logo} 
                  alt={provider.name} 
                  className="h-12 object-contain mb-4" 
                />
                <h3 className="font-semibold text-gray-800 mb-2">{provider.name}</h3>
                <p className="text-sm text-gray-600 mb-2">Komisyon: {provider.commission_rate}</p>
                <p className="text-sm text-primary font-medium">{provider.monthly_fee}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BankaPOS;
