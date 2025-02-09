
import { Helmet } from "react-helmet";
import POSDetailPage from "@/components/pos/POSDetailPage";
import { sanalPOSProviders } from "@/data/pos-types/sanalPOS";

const JamesonSanalPOS = () => {
  const provider = sanalPOSProviders.find(p => p.id === "jameson-sanal");

  if (!provider) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>Jameson Sanal POS Komisyon Oranları 2025 | POS Compare</title>
        <meta 
          name="description" 
          content="2025 Jameson Sanal POS komisyon oranları, özellikleri ve detaylı karşılaştırma. E-ticaret siteniz için en uygun Jameson Sanal POS çözümünü keşfedin." 
        />
        <link rel="canonical" href="https://poskomisyon.com/pos/jameson-sanal" />
      </Helmet>
      <POSDetailPage provider={provider} />
    </>
  );
};

export default JamesonSanalPOS;
