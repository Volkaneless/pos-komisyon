
import POSDetailPage from "@/components/pos/POSDetailPage";
import { yazarkasaPOSProviders } from "@/data/pos-types/yazarkasaPOS";
import MetaTags from "@/components/MetaTags";

const Move5000FPOS = () => {
  const provider = yazarkasaPOSProviders.find(p => p.id === "move-5000f-pos");

  if (!provider) {
    return null;
  }

  return (
    <>
      <MetaTags
        title={`Move 5000F Yazar Kasa POS Komisyon Oranları ${new Date().getFullYear()}`}
        description={`${new Date().getFullYear()} Move 5000F Yazar Kasa POS komisyon oranları, özellikleri ve detaylı karşılaştırma. İşletmeniz için en uygun Move 5000F POS çözümünü keşfedin.`}
        canonicalPath="/pos/move-5000f-pos"
        priority={20}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Move 5000F Yazar Kasa POS",
          "description": `Move 5000F Yazar Kasa POS komisyon oranları ve detaylı bilgiler. ${new Date().getFullYear()} güncel bilgileri.`
        }}
      />
      <POSDetailPage provider={provider} />
    </>
  );
};

export default Move5000FPOS;
