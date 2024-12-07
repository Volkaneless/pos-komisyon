import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { posProviders } from "@/data/posProviders";
import POSHeader from "@/components/pos/POSHeader";
import POSInfo from "@/components/pos/POSInfo";
import { Button } from "@/components/ui/button";

const QNBPayPOS = () => {
  const navigate = useNavigate();
  const provider = posProviders.find(p => p.id === "qnbpay-pos")!;
  
  console.log('Rendering QNBPayPOS page');

  return (
    <>
      <Helmet>
        <title>QNBPay POS Başvurusu ve Detaylı İnceleme | POS Komisyon</title>
        <meta 
          name="description" 
          content="QNBPay POS cihazı özellikleri, komisyon oranları, başvuru şartları ve müşteri hizmetleri hakkında detaylı bilgi alın. En uygun QNBPay POS seçeneklerini karşılaştırın." 
        />
        <link rel="canonical" href="https://poskomisyon.com/pos/qnbpay-pos" />
      </Helmet>

      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="glass-card rounded-2xl p-8 mb-12">
          <POSHeader provider={provider} />
          <POSInfo provider={provider} />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Button 
            variant="outline" 
            className="p-6 h-auto flex flex-col gap-2"
            onClick={() => navigate("/pos/qnbpay-pos/komisyon-oranlari")}
          >
            <h2 className="text-xl font-semibold">Komisyon Oranları</h2>
            <p className="text-sm text-gray-600">Güncel QNBPay POS komisyon oranları ve ücretlendirme detayları</p>
          </Button>

          <Button 
            variant="outline" 
            className="p-6 h-auto flex flex-col gap-2"
            onClick={() => navigate("/pos/qnbpay-pos/ozellikleri")}
          >
            <h2 className="text-xl font-semibold">Özellikler</h2>
            <p className="text-sm text-gray-600">QNBPay POS cihazının tüm özellikleri ve avantajları</p>
          </Button>

          <Button 
            variant="outline" 
            className="p-6 h-auto flex flex-col gap-2"
            onClick={() => navigate("/pos/qnbpay-pos/iletisim")}
          >
            <h2 className="text-xl font-semibold">Müşteri Hizmetleri ve İletişim</h2>
            <p className="text-sm text-gray-600">QNBPay müşteri hizmetleri iletişim bilgileri</p>
          </Button>

          <Button 
            variant="outline" 
            className="p-6 h-auto flex flex-col gap-2"
            onClick={() => navigate("/pos/qnbpay-pos/destek-hatti")}
          >
            <h2 className="text-xl font-semibold">Destek Hattı</h2>
            <p className="text-sm text-gray-600">7/24 QNBPay teknik destek ve yardım hattı</p>
          </Button>
        </div>
      </div>
    </>
  );
};

export default QNBPayPOS;