
import POSDetailPage from "@/components/pos/POSDetailPage";
import { yazarkasaPOSProviders } from "@/data/pos-types/yazarkasaPOS";
import MetaTags from "@/components/MetaTags";

const ZiraatPOS = () => {
  const provider = yazarkasaPOSProviders.find(p => p.id === "ziraat-pos");

  if (!provider) {
    return null;
  }

  return (
    <>
      <MetaTags
        title={`Ziraat POS Komisyon Oranları ${new Date().getFullYear()}`}
        description={`${new Date().getFullYear()} Ziraat POS komisyon oranları, özellikleri ve detaylı karşılaştırma. İşletmeniz için en uygun Ziraat POS çözümünü keşfedin.`}
        canonicalPath="/pos/ziraat-pos"
        priority={20}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Ziraat POS",
          "description": `Ziraat POS komisyon oranları ve detaylı bilgiler. ${new Date().getFullYear()} güncel bilgileri.`,
          "brand": {
            "@type": "Brand",
            "name": "Ziraat Bankası"
          }
        }}
      />
      <POSDetailPage provider={provider} />
    </>
  );
};

export default ZiraatPOS;
