
import POSDetailPage from "@/components/pos/POSDetailPage";
import { yazarkasaPOSProviders } from "@/data/pos-types/yazarkasaPOS";
import MetaTags from "@/components/MetaTags";

const Beko300TRPOS = () => {
  const provider = yazarkasaPOSProviders.find(p => p.id === "beko-300-tr-pos");

  if (!provider) {
    return null;
  }

  return (
    <>
      <MetaTags
        title={`Beko 300 TR Yazar Kasa POS Komisyon Oranları ${new Date().getFullYear()}`}
        description={`${new Date().getFullYear()} Beko 300 TR Yazar Kasa POS komisyon oranları, özellikleri ve detaylı karşılaştırma. İşletmeniz için en uygun Beko 300 TR POS çözümünü keşfedin.`}
        canonicalPath="/pos/beko-300-tr-pos"
        priority={20}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Beko 300 TR Yazar Kasa POS",
          "description": `Beko 300 TR Yazar Kasa POS komisyon oranları ve detaylı bilgiler. ${new Date().getFullYear()} güncel bilgileri.`
        }}
      />
      <POSDetailPage provider={provider} />
    </>
  );
};

export default Beko300TRPOS;
