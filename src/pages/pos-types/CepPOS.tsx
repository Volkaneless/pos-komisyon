
import { Smartphone } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import POSTypeLayout from "@/components/pos-types/POSTypeLayout";
import MetaTags from "@/components/MetaTags";
import { cepPOSProviders } from "@/data/pos-types/cepPOS";

const CepPOS = () => {
  const currentYear = new Date().getFullYear();
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Cep POS nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cep POS, akıllı telefon ve tabletleri kredi kartı okuyucusuna dönüştüren küçük ve taşınabilir ödeme çözümleridir. Bluetooth veya ses jakı ile bağlantı kurarak mobil cihazınızı POS terminaline çevirir."
      }
    }]
  };

  return (
    <>
      <MetaTags 
        title={`Cep POS Komisyon Oranları ${currentYear} - En Uygun Cep POS Çözümleri`}
        description={`${currentYear} yılı güncel cep POS komisyon oranları, karşılaştırma ve hesaplama araçları. İşletmeniz için en uygun cep POS çözümünü bulun.`}
        keywords={`cep pos komisyon oranları ${currentYear}, cep pos başvuru, küçük işletme pos çözümleri, taşınabilir pos cihazları, cep pos uygulamaları, mobil ödeme sistemleri`}
        canonicalPath="/pos-types/cep" 
        priority={20}
        structuredData={structuredData}
      />

      <POSTypePage 
        title={`Cep POS Komisyon Oranları ${currentYear}`}
        description={`Küçük ve orta ölçekli işletmeler için en uygun cep POS çözümleri ve komisyon oranları. ${currentYear} güncel fiyatlar ve kolay kullanım özellikleri.`}
        type="Cep POS" 
        Icon={Smartphone} 
        whatIsContent={`Cep POS, akıllı telefon ve tabletleri kredi kartı okuyucusuna dönüştüren küçük ve taşınabilir ödeme çözümleridir. ${currentYear} yılında Bluetooth veya ses jakı ile bağlantı kurarak mobil cihazınızı POS terminaline çevirir ve işletmenizin her yerde ödeme almasını sağlar.`}
        advantages={["Kolay kurulum ve kullanım", "Düşük maliyet ve giriş bariyeri", "Hafif ve taşınabilir tasarım", "Anında ödeme alma imkanı", "Gelişmiş güvenlik protokolleri", "7/24 müşteri desteği", "Hızlı para transferi", "Küçük işletmeler için ideal"]} 
        breadcrumbPath="/pos-types/cep"
      />

      <POSTypeLayout 
        providers={cepPOSProviders}
        typeName="Cep POS"
      />
    </>
  );
};

export default CepPOS;
