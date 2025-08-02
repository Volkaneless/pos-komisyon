
import POSDetailPage from "@/components/pos/POSDetailPage";
import { yazarkasaPOSProviders } from "@/data/pos-types/yazarkasaPOS";
import EnhancedMetaTags from "@/components/SEO/EnhancedMetaTags";

const KuveytTurkPOS = () => {
  const provider = yazarkasaPOSProviders.find(p => p.id === "kuveyt-turk-pos");

  if (!provider) {
    return null;
  }

  return (
    <>
      <EnhancedMetaTags
        title={`Kuveyt Türk POS Komisyon Oranları ${new Date().getFullYear()}`}
        description={`${new Date().getFullYear()} Kuveyt Türk POS komisyon oranları, özellikleri ve detaylı karşılaştırma. İşletmeniz için en uygun Kuveyt Türk POS çözümünü keşfedin.`}
        keywords={`kuveyt türk pos komisyon oranları ${new Date().getFullYear()}, kuveyt türk pos cihazı, kuveyt türk bankası pos`}
        canonicalPath="/pos/kuveyt-turk-pos"
        ogType="product"
        schemaType="Product"
        productInfo={{
          name: "Kuveyt Türk POS",
          description: `Kuveyt Türk POS komisyon oranları ve detaylı bilgiler. ${new Date().getFullYear()} güncel bilgileri.`,
          brand: "Kuveyt Türk",
          category: "POS Cihazı"
        }}
      />
      <POSDetailPage provider={provider} />
    </>
  );
};

export default KuveytTurkPOS;
