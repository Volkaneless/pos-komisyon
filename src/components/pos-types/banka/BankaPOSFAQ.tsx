
import { Card } from "@/components/ui/card";

const BankaPOSFAQ = () => {
  return (
    <div className="space-y-4">
      <Card className="p-6 hover:shadow-lg transition-shadow bg-white">
        <h3 className="font-semibold mb-2 text-primary">Banka POS komisyon oranları nasıl hesaplanır?</h3>
        <p className="text-gray-600">Banka POS komisyon oranları, işletmenizin aylık cirosu, faaliyet gösterdiğiniz sektör ve tercih ettiğiniz ödeme seçeneklerine göre hesaplanır. Ortalama komisyon oranları %1.60 ile %1.90 arasında değişmektedir.</p>
      </Card>
      <Card className="p-6 hover:shadow-lg transition-shadow bg-white">
        <h3 className="font-semibold mb-2 text-primary">Taksitli işlemlerde komisyon oranları nasıl değişir?</h3>
        <p className="text-gray-600">Taksitli işlemlerde banka POS komisyon oranları, taksit sayısına göre artış gösterir. 2-6 ay arası taksitlerde %2-3, 7-12 ay arası taksitlerde %3-4 aralığında komisyon uygulanmaktadır.</p>
      </Card>
      <Card className="p-6 hover:shadow-lg transition-shadow bg-white">
        <h3 className="font-semibold mb-2 text-primary">POS komisyon iade şartları nelerdir?</h3>
        <p className="text-gray-600">Banka POS komisyon iadesi için belirli ciro hedeflerini yakalamanız gerekir. Aylık 100.000 TL üzeri ciro yapan işletmeler, komisyon iade programlarından faydalanabilir ve komisyon oranlarında özel indirimler alabilir.</p>
      </Card>
      <Card className="p-6 hover:shadow-lg transition-shadow bg-white">
        <h3 className="font-semibold mb-2 text-primary">Sektörel POS komisyon farkları nelerdir?</h3>
        <p className="text-gray-600">Farklı sektörlere göre banka POS komisyon oranları değişkenlik gösterir. Market ve gıda sektöründe %1.60-1.75, elektronik sektöründe %1.75-1.90, tekstil sektöründe ise %1.70-1.85 aralığında komisyon oranları uygulanmaktadır.</p>
      </Card>
    </div>
  );
};

export default BankaPOSFAQ;
