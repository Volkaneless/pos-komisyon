import POSDetailPage from "@/components/pos/POSDetailPage";
import { posProviders } from "@/data/posProviders";
import EnhancedMetaTags from "@/components/SEO/EnhancedMetaTags";

const AkbankFizikiPOS = () => {
  const provider = posProviders.find(p => p.id === "akbank-fiziki")!;
  
  return (
    <>
      <EnhancedMetaTags
        title={`Akbank Fiziki POS Komisyon Oranları ${new Date().getFullYear()}`}
        description={`${new Date().getFullYear()} Akbank Fiziki POS komisyon oranları, özellikleri ve detaylı karşılaştırma. İşletmeniz için en uygun fiziki POS çözümü.`}
        keywords={`akbank fiziki pos komisyon oranları ${new Date().getFullYear()}, akbank pos cihazı, akbank fiziki pos`}
        canonicalPath="/pos/akbank-fiziki-pos"
        ogType="product"
        schemaType="Product"
        productInfo={{
          name: "Akbank Fiziki POS",
          description: `Akbank Fiziki POS komisyon oranları ve detaylı bilgiler. ${new Date().getFullYear()} güncel bilgileri.`,
          brand: "Akbank",
          category: "Fiziki POS Cihazı"
        }}
      />
      <POSDetailPage provider={provider} />
    </>
  );
};

export default AkbankFizikiPOS;