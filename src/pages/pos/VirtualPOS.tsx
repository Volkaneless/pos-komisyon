
import POSDetailPage from "@/components/pos/POSDetailPage";
import { sanalPOSProviders } from "@/data/pos-types/sanalPOS";
import MetaTags from "@/components/MetaTags";

const VirtualPOS = () => {
  const provider = sanalPOSProviders.find(p => p.id === "virtual-sanal");

  if (!provider) {
    return null;
  }

  return (
    <>
      <MetaTags
        title={`Virtual POS Komisyon Oranları ${new Date().getFullYear()}`}
        description={`${new Date().getFullYear()} Virtual POS komisyon oranları, özellikleri ve detaylı karşılaştırma. E-ticaret siteniz için en uygun Virtual POS çözümünü keşfedin.`}
        canonicalPath="/pos/virtual-sanal"
        priority={20}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Virtual POS",
          "description": `Virtual POS komisyon oranları ve detaylı bilgiler. ${new Date().getFullYear()} güncel bilgileri.`
        }}
      />
      <POSDetailPage provider={provider} />
    </>
  );
};

export default VirtualPOS;
