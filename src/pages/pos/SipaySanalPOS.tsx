
import POSDetailPage from "@/components/pos/POSDetailPage";
import { sanalPOSProviders } from "@/data/pos-types/sanalPOS";
import MetaTags from "@/components/MetaTags";

const SipaySanalPOS = () => {
  const provider = sanalPOSProviders.find(p => p.id === "sipay-sanal");

  if (!provider) {
    return null;
  }

  return (
    <>
      <MetaTags
        title={`Sipay Sanal POS Komisyon Oranları ${new Date().getFullYear()} | POS Komisyon`}
        description={`${new Date().getFullYear()} Sipay Sanal POS komisyon oranları, özellikleri ve detaylı karşılaştırma. E-ticaret siteniz için en uygun Sipay Sanal POS çözümünü keşfedin.`}
        canonicalPath="/pos/sipay-sanal"
        priority={20}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Sipay Sanal POS",
          "description": `Sipay Sanal POS komisyon oranları ve detaylı bilgiler. ${new Date().getFullYear()} güncel bilgileri.`
        }}
      />
      <POSDetailPage provider={provider} />
    </>
  );
};

export default SipaySanalPOS;
