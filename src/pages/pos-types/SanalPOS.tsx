
import { Cloud } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import POSTypeLayout from "@/components/pos-types/POSTypeLayout";
import MetaTags from "@/components/MetaTags";
import { sanalPOSProviders } from "@/data/pos-types/sanalPOSData";

const SanalPOS = () => {
  const currentYear = new Date().getFullYear();
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Sanal POS nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sanal POS, internet üzerinden yapılan ödemeleri güvenli bir şekilde almanızı sağlayan modern bir ödeme sistemidir. E-ticaret siteleri, online rezervasyon sistemleri ve dijital hizmetler için vazgeçilmez bir çözümdür."
      }
    }]
  };

  return (
    <>
      <MetaTags 
        title={`Sanal POS Komisyon Oranları ${currentYear} - En Uygun Sanal POS Çözümleri`}
        description={`${currentYear} yılı güncel sanal POS komisyon oranları, karşılaştırma ve hesaplama araçları. E-ticaret işletmeniz için en uygun sanal POS çözümünü bulun.`}
        keywords={`sanal pos komisyon oranları ${currentYear}, sanal pos başvuru, e-ticaret pos çözümleri, online ödeme sistemleri, sanal pos entegrasyonu, e-ticaret ödeme çözümleri`}
        canonicalPath="/pos-types/sanal" 
        priority={20} 
        structuredData={structuredData} 
      />

      <POSTypePage 
        title={`Sanal POS Komisyon Oranları ${currentYear}`}
        description={`E-ticaret ve online ödemeler için en uygun sanal POS çözümleri ve komisyon oranları. ${currentYear} güncel fiyatlar ve gelişmiş entegrasyon seçenekleri.`}
        type="Sanal POS" 
        Icon={Cloud} 
        whatIsContent={`Sanal POS, internet üzerinden yapılan ödemeleri güvenli bir şekilde almanızı sağlayan modern bir ödeme sistemidir. E-ticaret siteleri, online rezervasyon sistemleri ve dijital hizmetler için vazgeçilmez bir çözümdür. ${currentYear} yılında gelişmiş güvenlik özellikleri ve kolay entegrasyon seçenekleriyle işletmenizin online satışlarını güvenle yönetmenizi sağlar.`}
        advantages={["7/24 kesintisiz hizmet ve teknik destek", "Rekabetçi komisyon oranları", "Hızlı ve kolay entegrasyon", "SSL güvenlik sertifikası", "Geniş banka ve kart desteği", "Detaylı satış ve işlem raporlaması", "Mobil uyumlu altyapı", "Çoklu dil ve para birimi desteği"]} 
        breadcrumbPath="/pos-types/sanal"
      />

      <POSTypeLayout 
        providers={sanalPOSProviders}
        typeName="Sanal POS"
      />
    </>
  );
};

export default SanalPOS;
