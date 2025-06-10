
import { Cloud } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import MetaTags from "@/components/MetaTags";
import SanalPOSLayout from "@/components/pos-types/sanal/SanalPOSLayout";
import { sanalPOSProviders } from "@/data/pos-types/sanalPOSData";

const SanalPOS = () => {
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
        title="Sanal POS Komisyon Oranları 2025 - En Uygun Sanal POS" 
        description="2025 yılı güncel sanal POS komisyon oranları, karşılaştırma ve hesaplama araçları. E-ticaret işletmeniz için en uygun sanal POS çözümünü bulun." 
        keywords="sanal pos komisyon oranları 2025, sanal pos başvuru, e-ticaret pos, online ödeme sistemleri, sanal pos entegrasyonu, e-ticaret ödeme çözümleri" 
        canonicalPath="/pos-types/sanal" 
        priority={20} 
        structuredData={structuredData} 
      />

      <POSTypePage 
        title="Sanal POS Komisyon Oranları 2025" 
        description="E-ticaret ve online ödemeler için en uygun sanal POS çözümleri ve komisyon oranları" 
        type="Sanal POS" 
        Icon={Cloud} 
        whatIsContent={
          <div className="prose prose-lg max-w-none mb-8">
            <h2 className="text-3xl font-bold mb-6" id="what-is">Sanal POS Nedir?</h2>
            <p>
              Sanal POS, internet üzerinden yapılan ödemeleri güvenli bir şekilde almanızı sağlayan modern bir ödeme sistemidir. 
              E-ticaret siteleri, online rezervasyon sistemleri ve dijital hizmetler için vazgeçilmez bir çözümdür. 
              Gelişmiş güvenlik özellikleri ve kolay entegrasyon seçenekleriyle işletmenizin online satışlarını güvenle yönetmenizi sağlar.
            </p>
          </div>
        } 
        advantages={["7/24 kesintisiz hizmet ve teknik destek", "Rekabetçi komisyon oranları", "Hızlı ve kolay entegrasyon", "SSL güvenlik sertifikası", "Geniş banka ve kart desteği", "Detaylı satış ve işlem raporlaması", "Mobil uyumlu altyapı", "Çoklu dil ve para birimi desteği"]} 
      />

      <SanalPOSLayout providers={sanalPOSProviders} />
    </>
  );
};

export default SanalPOS;
