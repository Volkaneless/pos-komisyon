
import { Smartphone } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import POSTypeLayout from "@/components/pos-types/POSTypeLayout";
import MetaTags from "@/components/MetaTags";
import { mobilPOSProviders } from "@/data/pos-types/mobilPOS";

const MobilPOS = () => {
  const currentYear = new Date().getFullYear();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Mobil POS nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mobil POS cihazları, işletmelerin hareket halindeyken ödeme almalarını sağlayan taşınabilir cihazlardır. Bu cihazlar, kablosuz internet veya mobil veri bağlantısı üzerinden çalışır ve kredi kartı ödemelerini güvenli bir şekilde işler."
      }
    }]
  };

  return (
    <>
      <MetaTags 
        title={`Mobil POS Komisyon Oranları ${currentYear} - En Uygun Mobil POS Çözümleri`} 
        description={`${currentYear} yılı güncel mobil POS komisyon oranları, karşılaştırma ve hesaplama araçları. İşletmeniz için en uygun mobil POS çözümünü bulun.`} 
        keywords={`mobil pos komisyon oranları ${currentYear}, mobil pos başvuru, taşınabilir pos cihazları, mobil ödeme sistemleri, mobil pos çözümleri, enpara mobil pos, paycell mobil pos`}
        canonicalPath="/pos-types/mobil" 
        priority={20}
        structuredData={structuredData}
      />

      <POSTypePage 
        title={`Mobil POS Komisyon Oranları ${currentYear}`} 
        description={`Mobil ve taşınabilir POS çözümleri için en uygun komisyon oranları ve karşılaştırmalar. ${currentYear} güncel fiyatlar ve özellikler.`}
        type="Mobil (Taşınabilir) POS" 
        Icon={Smartphone} 
        whatIsContent={`Mobil POS cihazları, işletmelerin hareket halindeyken ödeme almalarını sağlayan taşınabilir cihazlardır. ${currentYear} yılında bu cihazlar, kablosuz internet veya mobil veri bağlantısı üzerinden çalışır ve kredi kartı ödemelerini güvenli bir şekilde işler.`}
        advantages={["Hareket halindeyken ödeme alma imkanı", "Kolay taşınabilirlik", "Düşük maliyetli çözüm", "Hızlı kurulum ve kullanım", "Tüm kredi kartlarıyla uyumluluk", "7/24 teknik destek", "Detaylı satış raporlaması", "Güvenli işlem altyapısı"]} 
        breadcrumbPath="/pos-types/mobil"
      />

      <POSTypeLayout 
        providers={mobilPOSProviders}
        typeName="Mobil POS"
      />
    </>
  );
};

export default MobilPOS;
