import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const QNBPayPOSIletisim = () => {
  console.log('Rendering QNBPayPOSIletisim page');

  return (
    <>
      <Helmet>
        <title>QNBPay POS Müşteri Hizmetleri ve İletişim | POS Komisyon</title>
        <meta 
          name="description" 
          content="QNBPay POS müşteri hizmetleri iletişim bilgileri, çalışma saatleri ve iletişim kanalları. QNBPay'e hızlı ulaşın." 
        />
        <link rel="canonical" href="https://poskomisyon.com/pos/qnbpay-pos/iletisim" />
      </Helmet>

      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-3xl font-bold mb-8">QNBPay Müşteri Hizmetleri ve İletişim</h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Phone className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-semibold">Telefon</h2>
            </div>
            <p className="text-lg">0850 XXX XX XX</p>
            <p className="text-gray-600 mt-2">Müşteri hizmetleri telefon numarası</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-semibold">E-posta</h2>
            </div>
            <p className="text-lg">info@qnbpay.com.tr</p>
            <p className="text-gray-600 mt-2">Genel bilgi ve destek için e-posta adresi</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-semibold">Adres</h2>
            </div>
            <p className="text-lg">QNBPay Genel Müdürlük</p>
            <p className="text-gray-600 mt-2">İstanbul, Türkiye</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-semibold">Çalışma Saatleri</h2>
            </div>
            <p className="text-lg">Hafta içi: 09:00 - 18:00</p>
            <p className="text-gray-600 mt-2">Cumartesi: 09:00 - 13:00</p>
          </Card>
        </div>
      </div>
    </>
  );
};

export default QNBPayPOSIletisim;