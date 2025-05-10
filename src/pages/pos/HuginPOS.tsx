
import POSDetailPage from "@/components/pos/POSDetailPage";
import { yazarkasaPOSProviders } from "@/data/pos-types/yazarkasaPOS";
import MetaTags from "@/components/MetaTags";

const HuginPOS = () => {
  const provider = yazarkasaPOSProviders.find(p => p.id === "hugin-pos");

  if (!provider) {
    return null;
  }

  return (
    <>
      <MetaTags
        title={`Hugin Yazar Kasa POS Komisyon Oranları ${new Date().getFullYear()}`}
        description={`${new Date().getFullYear()} Hugin Yazar Kasa POS komisyon oranları, özellikleri ve detaylı karşılaştırma. İşletmeniz için en uygun Hugin POS çözümünü keşfedin.`}
        canonicalPath="/pos/hugin-pos"
        priority={20}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Hugin Yazar Kasa POS",
          "description": `Hugin Yazar Kasa POS komisyon oranları ve detaylı bilgiler. ${new Date().getFullYear()} güncel bilgileri.`
        }}
      />
      <POSDetailPage provider={provider} />
    </>
  );
};

export default HuginPOS;
