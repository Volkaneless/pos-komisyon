
import { Helmet } from "react-helmet";
import POSDetailPage from "@/components/pos/POSDetailPage";
import { sanalPOSProviders } from "@/data/pos-types/sanalPOS";

const ParamSanalPOS = () => {
  const provider = sanalPOSProviders.find(p => p.id === "param-sanal");

  if (!provider) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>Param Sanal POS Komisyon Oranları 2025 | POS Compare</title>
        <meta 
          name="description" 
          content="2025 Param Sanal POS komisyon oranları, özellikleri ve detaylı karşılaştırma. E-ticaret siteniz için en uygun Param Sanal POS çözümünü keşfedin." 
        />
        <link rel="canonical" href="https://poskomisyon.com/pos/param-sanal" />
      </Helmet>
      <POSDetailPage provider={provider} />
    </>
  );
};

export default ParamSanalPOS;
