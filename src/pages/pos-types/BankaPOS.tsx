
import { Banknote } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import { Card } from "@/components/ui/card";
import { bankaPOSProviders } from "@/data/pos-types/bankaPOS";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold mb-4">Taksit İmkanları</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• 12 aya varan taksit seçenekleri</li>
              <li>• Sektöre özel taksit kampanyaları</li>
              <li>• Dönemsel özel taksit fırsatları</li>
              <li>• Peşin fiyatına taksit imkanı</li>
            </ul>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold mb-4">Teknik Özellikler</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Temassız ödeme desteği</li>
              <li>• QR kod ile ödeme</li>
              <li>• NFC teknolojisi</li>
              <li>• Mobil uygulama entegrasyonu</li>
            </ul>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold mb-4">Güvenlik Özellikleri</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• EMV chip & PIN güvenliği</li>
              <li>• 3D Secure desteği</li>
              <li>• SSL şifreleme</li>
              <li>• Anlık dolandırıcılık kontrolü</li>
            </ul>
          </Card>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-12">
          <h2 className="text-2xl font-bold mb-6">Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Banka POS başvurusu nasıl yapılır?</h3>
              <p className="text-gray-600">Banka POS başvurusu için şubeye giderek veya bankanın internet sitesi üzerinden online başvuru yapabilirsiniz. Gerekli belgeler: vergi levhası, imza sirküleri ve kimlik fotokopisi.</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold mb-2">POS cihazı aylık ücreti ne kadardır?</h3>
              <p className="text-gray-600">POS cihazı aylık ücreti bankadan bankaya değişmekle birlikte, ortalama 90-150 TL arasındadır. Bazı bankalar belirli ciro şartlarını sağlayan işletmelerden ücret almamaktadır.</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Komisyon oranları nasıl belirlenir?</h3>
              <p className="text-gray-600">Komisyon oranları işletmenin aylık cirosu, sektörü ve tercih edilen taksit seçeneklerine göre belirlenir. Genellikle %1.60 ile %1.90 arasında değişmektedir.</p>
            </div>
          </div>
        </div>

        <div className="bg-primary/5 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-6">Bankalarla Özel Anlaşmalar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold">Ciro İndirimleri</h3>
              <p className="text-gray-600">Aylık veya yıllık ciro hedeflerinize göre özel komisyon oranları ve indirimler sunulmaktadır.</p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>50.000 TL üzeri aylık ciro: %10 indirim</li>
                <li>100.000 TL üzeri aylık ciro: %20 indirim</li>
                <li>250.000 TL üzeri aylık ciro: %30 indirim</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Özel Sektör Avantajları</h3>
              <p className="text-gray-600">Faaliyet gösterdiğiniz sektöre özel komisyon oranları ve kampanyalar sunulmaktadır.</p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Market ve gıda sektörü için özel oranlar</li>
                <li>Restoran ve cafe işletmelerine özel kampanyalar</li>
                <li>E-ticaret firmaları için entegrasyon desteği</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BankaPOS;
