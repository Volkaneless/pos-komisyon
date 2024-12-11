import { Helmet } from "react-helmet";
import { Smartphone } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";

const MobilPOS = () => {
  return (
    <>
      <Helmet>
        <title>Mobil POS Cihazları ve Komisyon Oranları 2024</title>
        <meta 
          name="description" 
          content="Mobil POS cihazlarını karşılaştırın, taşınabilir POS çözümleri ve komisyon oranları hakkında bilgi alın." 
        />
        <meta name="keywords" content="mobil pos cihazı, taşınabilir pos, android pos, ios pos, mobil ödeme çözümleri" />
        <link rel="canonical" href="https://poskomisyon.com/pos-types/mobil" />
      </Helmet>
      <POSTypePage
        title="Mobil POS Cihazları ve Komisyon Oranları 2024"
        description="Mobil POS cihazlarını karşılaştırın, size en uygun mobil POS çözümünü bulun."
        type="Mobil (Taşınabilir) POS"
        Icon={Smartphone}
        whatIsContent="Mobil POS cihazları, işletmelerin hareket halindeyken ödeme almalarını sağlayan taşınabilir cihazlardır. Bu cihazlar, kablosuz internet veya mobil veri bağlantısı üzerinden çalışır ve kredi kartı ödemelerini güvenli bir şekilde işler."
        advantages={[
          "Hareket halindeyken ödeme alma imkanı",
          "Kolay taşınabilirlik",
          "Düşük maliyetli çözüm",
          "Hızlı kurulum ve kullanım",
          "Tüm kredi kartlarıyla uyumluluk"
        ]}
      />
    </>
  );
};

export default MobilPOS;