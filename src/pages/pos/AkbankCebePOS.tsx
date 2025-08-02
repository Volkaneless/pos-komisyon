import POSDetailPage from "@/components/pos/POSDetailPage";
import { posProviders } from "@/data/posProviders";
import EnhancedMetaTags from "@/components/SEO/EnhancedMetaTags";

const AkbankCebePOS = () => {
  const provider = posProviders.find(p => p.id === "akbank-cebe")!;
  
  return (
    <>
      <EnhancedMetaTags
        title={`Akbank Cebe POS Komisyon Oranları ${new Date().getFullYear()}`}
        description={`${new Date().getFullYear()} Akbank Cebe POS komisyon oranları, özellikleri ve detaylı karşılaştırma. Mobil POS çözümü için en uygun seçenek.`}
        keywords={`akbank cebe pos komisyon oranları ${new Date().getFullYear()}, akbank cebe pos, akbank mobil pos`}
        canonicalPath="/pos/akbank-cebe-pos"
        ogType="product"
        schemaType="Product"
        productInfo={{
          name: "Akbank Cebe POS",
          description: `Akbank Cebe POS komisyon oranları ve detaylı bilgiler. ${new Date().getFullYear()} güncel bilgileri.`,
          brand: "Akbank",
          category: "Cep POS"
        }}
      />
      <POSDetailPage provider={provider} />
    </>
  );
};

export default AkbankCebePOS;