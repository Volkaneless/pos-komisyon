
import { Card } from "@/components/ui/card";

const BankaPOSAgreements = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="p-6 hover:shadow-lg transition-shadow bg-white">
        <h3 className="text-lg font-semibold mb-4 text-primary">Özel Komisyon İndirimleri</h3>
        <p className="text-gray-600 mb-4">2025 yılı banka POS komisyon oranlarında özel indirim fırsatları sunulmaktadır.</p>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            50.000 TL üzeri aylık ciroda %0.2 komisyon indirimi
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            100.000 TL üzeri aylık ciroda %0.3 komisyon indirimi
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            250.000 TL üzeri aylık ciroda %0.4 komisyon indirimi
          </li>
        </ul>
      </Card>

      <Card className="p-6 hover:shadow-lg transition-shadow bg-white">
        <h3 className="text-lg font-semibold mb-4 text-primary">Sektörel POS Komisyon Avantajları</h3>
        <p className="text-gray-600 mb-4">Her sektöre özel banka POS komisyon oranları ve ödeme çözümleri sunulmaktadır.</p>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Market sektörü için %1.60 sabit komisyon
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Restoran ve cafe için %1.75 komisyon oranı
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            E-ticaret için %1.80 özel komisyon
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default BankaPOSAgreements;
