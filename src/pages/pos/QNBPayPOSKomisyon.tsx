import { Helmet } from "react-helmet";
import { posProviders } from "@/data/posProviders";
import { Card } from "@/components/ui/card";

const QNBPayPOSKomisyon = () => {
  const provider = posProviders.find(p => p.id === "qnbpay-pos")!;
  
  console.log('Rendering QNBPayPOSKomisyon page');

  return (
    <>
      <Helmet>
        <title>QNBPay POS Komisyon Oranları 2024 | POS Komisyon</title>
        <meta 
          name="description" 
          content="2024 QNBPay POS güncel komisyon oranları, taksit seçenekleri ve ücretlendirme detayları. En uygun QNBPay POS komisyon oranlarını inceleyin." 
        />
        <link rel="canonical" href="https://poskomisyon.com/pos/qnbpay-pos/komisyon-oranlari" />
      </Helmet>

      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-3xl font-bold mb-8">QNBPay POS Komisyon Oranları</h1>
        
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Tek Çekim İşlemler</h2>
          <p className="text-lg mb-2">Komisyon Oranı: {provider.commission_rate}</p>
          <p className="text-gray-600">Tek çekim işlemleriniz için geçerli olan standart komisyon oranı</p>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Taksitli İşlemler</h2>
          <p className="text-gray-600 mb-4">Taksit sayısına göre değişen komisyon oranları:</p>
          <ul className="space-y-2">
            <li>2-3 Taksit: %2.5</li>
            <li>4-6 Taksit: %3.2</li>
            <li>7-9 Taksit: %4.1</li>
            <li>10-12 Taksit: %5.0</li>
          </ul>
        </Card>
      </div>
    </>
  );
};

export default QNBPayPOSKomisyon;