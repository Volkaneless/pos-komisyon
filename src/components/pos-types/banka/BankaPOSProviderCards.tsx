
import { Card } from "@/components/ui/card";

const BankaPOSProviderCards = () => {
  return (
    <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">2025 Yılı Banka POS Avantajları</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6 bg-white">
          <h3 className="font-semibold text-gray-800 mb-2">Güvenilir Altyapı</h3>
          <p className="text-sm text-gray-600">Bankaların güvenilir teknoloji altyapısı ile güvenli ödemeler</p>
        </Card>
        <Card className="p-6 bg-white">
          <h3 className="font-semibold text-gray-800 mb-2">7/24 Destek</h3>
          <p className="text-sm text-gray-600">Kesintisiz teknik destek ve müşteri hizmetleri</p>
        </Card>
        <Card className="p-6 bg-white">
          <h3 className="font-semibold text-gray-800 mb-2">Çoklu Ödeme</h3>
          <p className="text-sm text-gray-600">Tüm kart türleri ve ödeme yöntemleri desteği</p>
        </Card>
      </div>
    </div>
  );
};

export default BankaPOSProviderCards;
