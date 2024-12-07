import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import { HeadphonesIcon, MessageSquare, HelpCircle, FileText } from "lucide-react";

const QNBPayPOSDestek = () => {
  console.log('Rendering QNBPayPOSDestek page');

  return (
    <>
      <Helmet>
        <title>QNBPay POS Teknik Destek ve Yardım | POS Komisyon</title>
        <meta 
          name="description" 
          content="QNBPay POS 7/24 teknik destek hattı, arıza bildirimi ve online destek hizmetleri. Hızlı ve etkili çözümler için QNBPay destek ekibine ulaşın." 
        />
        <link rel="canonical" href="https://poskomisyon.com/pos/qnbpay-pos/destek-hatti" />
      </Helmet>

      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-3xl font-bold mb-8">QNBPay POS Teknik Destek</h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <HeadphonesIcon className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-semibold">7/24 Teknik Destek</h2>
            </div>
            <p className="text-lg">0850 XXX XX XX</p>
            <p className="text-gray-600 mt-2">POS cihazı teknik sorunları için 7/24 destek hattı</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-semibold">Online Destek</h2>
            </div>
            <p className="text-lg">destek.qnbpay.com.tr</p>
            <p className="text-gray-600 mt-2">Online destek portalı üzerinden hızlı çözüm</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-semibold">Sık Sorulan Sorular</h2>
            </div>
            <p className="text-gray-600">En çok sorulan sorular ve çözümleri için SSS sayfamızı ziyaret edin</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-semibold">Kullanım Kılavuzu</h2>
            </div>
            <p className="text-gray-600">Detaylı kullanım kılavuzu ve eğitim dökümanları</p>
          </Card>
        </div>
      </div>
    </>
  );
};

export default QNBPayPOSDestek;