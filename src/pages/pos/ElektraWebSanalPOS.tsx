
import { Helmet } from "react-helmet";
import POSDetailPage from "@/components/pos/POSDetailPage";
import { sanalPOSProviders } from "@/data/pos-types/sanalPOS";

const ElektraWebSanalPOS = () => {
  const provider = sanalPOSProviders.find(p => p.id === "elektraweb-sanal");

  if (!provider) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>ElektraWeb Sanal POS Komisyon Oranları 2025 | POS Compare</title>
        <meta 
          name="description" 
          content="2025 ElektraWeb Sanal POS komisyon oranları, özellikleri ve detaylı karşılaştırma. E-ticaret siteniz için en uygun ElektraWeb Sanal POS çözümünü keşfedin." 
        />
        <link rel="canonical" href="https://poskomisyon.com/pos/elektraweb-sanal" />
      </Helmet>
      <POSDetailPage provider={provider} />
    </>
  );
};

export default ElektraWebSanalPOS;
