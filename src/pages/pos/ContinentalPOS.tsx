
import POSDetailPage from "@/components/pos/POSDetailPage";
import { sanalPOSProviders } from "@/data/pos-types/sanalPOS";
import MetaTags from "@/components/MetaTags";

const ContinentalPOS = () => {
  const provider = sanalPOSProviders.find(p => p.id === "continental-sanal");

  if (!provider) {
    return null;
  }

  return (
    <>
      <MetaTags
        title={`Continental POS Komisyon Oranları ${new Date().getFullYear()}`}
        description={`${new Date().getFullYear()} Continental POS komisyon oranları, özellikleri ve detaylı karşılaştırma. E-ticaret siteniz için en uygun Continental POS çözümünü keşfedin.`}
        canonicalPath="/pos/continental-sanal"
        priority={20}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Continental POS",
          "description": `Continental POS komisyon oranları ve detaylı bilgiler. ${new Date().getFullYear()} güncel bilgileri.`
        }}
      />
      <POSDetailPage provider={provider} />
    </>
  );
};

export default ContinentalPOS;
