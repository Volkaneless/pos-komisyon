
import POSDetailPage from "@/components/pos/POSDetailPage";
import { yazarkasaPOSProviders } from "@/data/pos-types/yazarkasaPOS";
import MetaTags from "@/components/MetaTags";

const BekoPOS = () => {
  const provider = yazarkasaPOSProviders.find(p => p.id === "beko-pos");

  if (!provider) {
    return null;
  }

  return (
    <>
      <MetaTags
        title={`Beko Yazar Kasa POS Komisyon Oranları ${new Date().getFullYear()} | POS Komisyon`}
        description={`${new Date().getFullYear()} Beko Yazar Kasa POS komisyon oranları, özellikleri ve detaylı karşılaştırma. İşletmeniz için en uygun Beko POS çözümünü keşfedin.`}
        canonicalPath="/pos/beko-pos"
        priority={20}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Beko Yazar Kasa POS",
          "description": `Beko Yazar Kasa POS komisyon oranları ve detaylı bilgiler. ${new Date().getFullYear()} güncel bilgileri.`
        }}
      />
      <POSDetailPage provider={provider} />
    </>
  );
};

export default BekoPOS;
