
import POSDetailPage from "@/components/pos/POSDetailPage";
import { yazarkasaPOSProviders } from "@/data/pos-types/yazarkasaPOS";
import EnhancedMetaTags from "@/components/SEO/EnhancedMetaTags";

const ZiraatPOS = () => {
  const provider = yazarkasaPOSProviders.find(p => p.id === "ziraat-pos");

  if (!provider) {
    return null;
  }

  return (
    <>
      <EnhancedMetaTags
        title={`Ziraat POS Komisyon Oranları ${new Date().getFullYear()}`}
        description={`${new Date().getFullYear()} Ziraat POS komisyon oranları, özellikleri ve detaylı karşılaştırma. İşletmeniz için en uygun Ziraat POS çözümünü keşfedin.`}
        keywords={`ziraat pos komisyon oranları ${new Date().getFullYear()}, ziraat pos cihazı, ziraat bankası pos`}
        canonicalPath="/pos/ziraat-pos"
        ogType="product"
        schemaType="Product"
        productInfo={{
          name: "Ziraat POS",
          description: `Ziraat POS komisyon oranları ve detaylı bilgiler. ${new Date().getFullYear()} güncel bilgileri.`,
          brand: "Ziraat Bankası",
          category: "POS Cihazı"
        }}
      />
      <POSDetailPage provider={provider} />
    </>
  );
};

export default ZiraatPOS;
