import POSDetailPage from "@/components/pos/POSDetailPage";
import { posProviders } from "@/data/posProviders";
import EnhancedMetaTags from "@/components/SEO/EnhancedMetaTags";

const GarantiSanalPOS = () => {
  const provider = posProviders.find(p => p.id === "garanti-sanal")!;
  
  return (
    <>
      <EnhancedMetaTags
        title={`Garanti BBVA Sanal POS Komisyon Oranları ${new Date().getFullYear()}`}
        description={`${new Date().getFullYear()} Garanti BBVA Sanal POS komisyon oranları, özellikleri ve detaylı karşılaştırma. E-ticaret siteniz için en uygun sanal POS çözümü.`}
        keywords={`garanti sanal pos komisyon oranları ${new Date().getFullYear()}, garanti sanal pos, garanti bbva sanal pos`}
        canonicalPath="/pos/garanti-sanal-pos"
        ogType="product"
        schemaType="Product"
        productInfo={{
          name: "Garanti BBVA Sanal POS",
          description: `Garanti BBVA Sanal POS komisyon oranları ve detaylı bilgiler. ${new Date().getFullYear()} güncel bilgileri.`,
          brand: "Garanti BBVA",
          category: "Sanal POS"
        }}
      />
      <POSDetailPage provider={provider} />
    </>
  );
};

export default GarantiSanalPOS;