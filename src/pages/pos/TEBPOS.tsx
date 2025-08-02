
import POSDetailPage from "@/components/pos/POSDetailPage";
import EnhancedMetaTags from "@/components/SEO/EnhancedMetaTags";
import { yazarkasaPOSProviders } from "@/data/pos-types/yazarkasaPOS";

const TEBPOS = () => {
  const provider = yazarkasaPOSProviders.find(p => p.id === "teb-pos");

  if (!provider) {
    return null;
  }

  return (
    <>
      <EnhancedMetaTags
        title={`TEB POS Komisyon Oranları ${new Date().getFullYear()}`}
        description={`${new Date().getFullYear()} TEB POS komisyon oranları, özellikleri ve detaylı karşılaştırma. İşletmeniz için en uygun TEB POS çözümünü keşfedin.`}
        keywords={`teb pos komisyon oranları ${new Date().getFullYear()}, teb pos cihazı, türk ekonomi bankası pos`}
        canonicalPath="/pos/teb-pos"
        ogType="product"
        schemaType="Product"
        productInfo={{
          name: "TEB POS",
          description: `TEB POS komisyon oranları ve detaylı bilgiler. ${new Date().getFullYear()} güncel bilgileri.`,
          brand: "Türk Ekonomi Bankası",
          category: "POS Cihazı"
        }}
      />
      <POSDetailPage provider={provider} />
    </>
  );
};

export default TEBPOS;
