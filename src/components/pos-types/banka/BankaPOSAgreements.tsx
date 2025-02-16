
import { Card } from "@/components/ui/card";

const BankaPOSAgreements = () => {
  return (
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
  );
};

export default BankaPOSAgreements;
