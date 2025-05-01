
import POSDetailPage from "@/components/pos/POSDetailPage";
import { yazarkasaPOSProviders } from "@/data/pos-types/yazarkasaPOS";
import MetaTags from "@/components/MetaTags";

const IngenicoPOS = () => {
  const provider = yazarkasaPOSProviders.find(p => p.id === "ingenico-pos");

  if (!provider) {
    return null;
  }

  return (
    <>
      <MetaTags
        title={`Ingenico POS Komisyon Oranları ${new Date().getFullYear()} | POS Komisyon`}
        description={`${new Date().getFullYear()} Ingenico POS komisyon oranları, özellikleri ve detaylı karşılaştırma. İşletmeniz için en uygun Ingenico POS çözümünü keşfedin.`}
        canonicalPath="/pos/ingenico-pos"
        priority={20}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Ingenico POS",
          "description": `Ingenico POS komisyon oranları ve detaylı bilgiler. ${new Date().getFullYear()} güncel bilgileri.`
        }}
      />
      <POSDetailPage provider={provider} />
    </>
  );
};

export default IngenicoPOS;
