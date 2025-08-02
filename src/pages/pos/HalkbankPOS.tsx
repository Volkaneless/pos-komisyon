
import POSDetailPage from "@/components/pos/POSDetailPage";
import EnhancedMetaTags from "@/components/SEO/EnhancedMetaTags";
import { yazarkasaPOSProviders } from "@/data/pos-types/yazarkasaPOS";

const HalkbankPOS = () => {
  const provider = yazarkasaPOSProviders.find(p => p.id === "halkbank-pos");

  if (!provider) {
    return null;
  }

  return (
    <>
      <EnhancedMetaTags
        title={`Halkbank POS Komisyon Oranları ${new Date().getFullYear()}`}
        description={`${new Date().getFullYear()} Halkbank POS komisyon oranları, özellikleri ve detaylı karşılaştırma. İşletmeniz için en uygun Halkbank POS çözümünü keşfedin.`}
        keywords={`halkbank pos komisyon oranları ${new Date().getFullYear()}, halkbank pos cihazı, türkiye halk bankası pos`}
        canonicalPath="/pos/halkbank-pos"
        ogType="product"
        schemaType="Product"
        productInfo={{
          name: "Halkbank POS",
          description: `Halkbank POS komisyon oranları ve detaylı bilgiler. ${new Date().getFullYear()} güncel bilgileri.`,
          brand: "Türkiye Halk Bankası",
          category: "POS Cihazı"
        }}
      />
      <POSDetailPage provider={provider} />
    </>
  );
};

export default HalkbankPOS;
