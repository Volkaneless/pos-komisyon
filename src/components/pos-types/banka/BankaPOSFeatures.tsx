
import { Card } from "@/components/ui/card";

const BankaPOSFeatures = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="p-6 hover:shadow-lg transition-shadow bg-white">
        <h3 className="text-lg font-semibold mb-4 text-primary">Komisyon Oranları ve Hesaplama</h3>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Banka POS komisyon oranları sektöre göre belirlenir
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Aylık ciro bazlı komisyon hesaplama
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Perakende sektörü komisyon oranları avantajı
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            E-ticaret özel komisyon hesaplaması
          </li>
        </ul>
      </Card>

      <Card className="p-6 hover:shadow-lg transition-shadow bg-white">
        <h3 className="text-lg font-semibold mb-4 text-primary">2025 POS Komisyon Avantajları</h3>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Düşük komisyon oranları ile rekabetçi fiyatlar
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Sıfır komisyon kampanyaları
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Özel gün komisyon indirimleri
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Sezonluk komisyon avantajları
          </li>
        </ul>
      </Card>

      <Card className="p-6 hover:shadow-lg transition-shadow bg-white">
        <h3 className="text-lg font-semibold mb-4 text-primary">POS Komisyon Özellikleri</h3>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Komisyon iade garantisi
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Anlık komisyon hesaplama
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Taksitli işlem komisyon oranları
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Sektörel komisyon karşılaştırması
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default BankaPOSFeatures;
