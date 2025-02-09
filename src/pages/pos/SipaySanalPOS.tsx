
import { Helmet } from "react-helmet";
import POSDetailPage from "@/components/pos/POSDetailPage";
import { sanalPOSProviders } from "@/data/pos-types/sanalPOS";

const SipaySanalPOS = () => {
  const provider = sanalPOSProviders.find(p => p.id === "sipay-sanal");

  if (!provider) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>Sipay Sanal POS Komisyon Oranları 2025 | POS Compare</title>
        <meta 
          name="description" 
          content="2025 Sipay Sanal POS komisyon oranları, özellikleri ve detaylı karşılaştırma. E-ticaret siteniz için en uygun Sipay Sanal POS çözümünü keşfedin." 
        />
        <link rel="canonical" href="https://poskomisyon.com/pos/sipay-sanal" />
      </Helmet>
      <POSDetailPage provider={provider} />
    </>
  );
};

export default SipaySanalPOS;
