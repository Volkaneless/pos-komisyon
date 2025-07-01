
import { Banknote } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import POSTypeLayout from "@/components/pos-types/POSTypeLayout";
import MetaTags from "@/components/MetaTags";
import { bankaPOSProviders } from "@/data/pos-types/bankaPOS";

const BankaPOS = () => {
  const currentYear = new Date().getFullYear();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Banka POS nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Banka POS'ları, bankaların işletmelere sunduğu güvenilir ödeme çözümleridir. Yüksek işlem hacmi ve çoklu ödeme seçenekleri sunan bu cihazlar, işletmenizin ödeme altyapısını güçlendirmeye odaklanır."
      }
    }]
  };

  return (
    <>
      <MetaTags
        title={`Banka POS Komisyon Oranları ${currentYear} - En Uygun Banka POS Çözümleri`}
        description={`${currentYear} yılı güncel banka POS komisyon oranları, karşılaştırma ve hesaplama araçları. İşletmeniz için en uygun banka POS çözümünü bulun.`}
        keywords={`banka pos komisyon oranları ${currentYear}, banka pos başvuru, fiziksel pos cihazları, banka pos çözümleri, pos cihazı ücretleri, banka pos karşılaştırma`}
        canonicalPath="/pos-types/banka"
        priority={20}
        structuredData={structuredData}
      />
      
      <POSTypePage 
        title={`Banka POS Komisyon Oranları ${currentYear}`}
        description={`Bankaların güncel POS komisyon oranlarını karşılaştırın, işletmeniz için en uygun banka POS çözümünü kolayca bulun. ${currentYear} güncel fiyatlar ve özellikler.`}
        type="Banka POS" 
        Icon={Banknote} 
        whatIsContent={`Banka POS'ları, bankaların işletmelere sunduğu güvenilir ödeme çözümleridir. ${currentYear} yılında yüksek işlem hacmi ve çoklu ödeme seçenekleri sunan bu cihazlar, işletmenizin ödeme altyapısını güçlendirmeye odaklanır.`}
        advantages={["Banka güvencesi ve kurumsal destek", "Yüksek işlem kapasitesi", "7/24 profesyonel teknik destek", "Geniş kart ve ödeme yöntemi desteği", "Gelişmiş güvenlik protokolleri", "Detaylı raporlama ve analiz araçları"]}
        breadcrumbPath="/pos-types/banka"
      />

      <POSTypeLayout 
        providers={bankaPOSProviders}
        typeName="Banka POS"
      />
    </>
  );
};

export default BankaPOS;
