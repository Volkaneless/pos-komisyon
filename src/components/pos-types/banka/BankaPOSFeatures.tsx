
import { Card } from "@/components/ui/card";

const BankaPOSFeatures = () => {
  return (
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
  );
};

export default BankaPOSFeatures;
