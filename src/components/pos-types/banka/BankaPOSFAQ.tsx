
import { Card } from "@/components/ui/card";

const BankaPOSFAQ = () => {
  return (
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
  );
};

export default BankaPOSFAQ;
