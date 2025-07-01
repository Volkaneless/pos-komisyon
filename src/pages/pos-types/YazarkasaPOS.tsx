
import { Calculator } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import POSTypeLayout from "@/components/pos-types/POSTypeLayout";
import MetaTags from "@/components/MetaTags";
import { yazarkasaPOSProviders } from "@/data/pos-types/yazarkasaPOS";

const YazarkasaPOS = () => {
  const currentYear = new Date().getFullYear();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Yazar Kasa (ÖKC) POS nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yazar Kasa (ÖKC) POS, Özel Kayıt Cihazı olarak da bilinen, hem kasa hem de POS işlevlerini birleştiren entegre çözümlerdir. Retail işletmeler için ideal olan bu cihazlar, satış işlemlerini kaydetmek ve ödeme almak için tek bir cihazda birleştirilmiştir."
      }
    }]
  };

  return (
    <>
      <MetaTags
        title={`Yazar Kasa (ÖKC) POS Komisyon Oranları ${currentYear} - En Uygun Yazar Kasa POS Çözümleri`}
        description={`${currentYear} yılı güncel yazar kasa (ÖKC) POS komisyon oranları, karşılaştırma ve hesaplama araçları. İşletmeniz için en uygun yazar kasa POS çözümünü bulun.`}
        keywords={`yazar kasa pos komisyon oranları ${currentYear}, ökc pos başvuru, yazar kasa pos çözümleri, özel kayıt cihazı pos, yazar kasa pos karşılaştırma, ökc pos ücretleri`}
        canonicalPath="/pos-types/yazarkasa"
        priority={20}
        structuredData={structuredData}
      />
      
      <POSTypePage 
        title={`Yazar Kasa (ÖKC) POS Komisyon Oranları ${currentYear}`}
        description={`Yazar kasa entegre POS çözümleri için en uygun komisyon oranları ve karşılaştırmalar. ${currentYear} güncel fiyatlar ve özellikler.`}
        type="Yazar Kasa (ÖKC) POS" 
        Icon={Calculator} 
        whatIsContent={`Yazar Kasa (ÖKC) POS, Özel Kayıt Cihazı olarak da bilinen, hem kasa hem de POS işlevlerini birleştiren entegre çözümlerdir. ${currentYear} yılında retail işletmeler için ideal olan bu cihazlar, satış işlemlerini kaydetmek ve ödeme almak için tek bir cihazda birleştirilmiştir.`}
        advantages={["Tek cihazda kasa ve POS işlevleri", "Stok yönetimi entegrasyonu", "Detaylı satış raporlaması", "Vergi uyumluluğu", "Kolay kullanım arayüzü", "7/24 teknik destek", "Geniş ödeme seçenekleri", "İşletme yönetimi araçları"]}
        breadcrumbPath="/pos-types/yazarkasa"
      />

      <POSTypeLayout 
        providers={yazarkasaPOSProviders}
        typeName="Yazar Kasa (ÖKC) POS"
      />
    </>
  );
};

export default YazarkasaPOS;
