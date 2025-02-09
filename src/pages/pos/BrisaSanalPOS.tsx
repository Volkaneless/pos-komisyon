
import { Helmet } from "react-helmet";
import POSDetailPage from "@/components/pos/POSDetailPage";
import { sanalPOSProviders } from "@/data/pos-types/sanalPOS";

const BrisaSanalPOS = () => {
  const provider = sanalPOSProviders.find(p => p.id === "brisa-sanal");

  if (!provider) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>Brisa Sanal POS Komisyon Oranları 2025 | POS Compare</title>
        <meta 
          name="description" 
          content="2025 Brisa Sanal POS komisyon oranları, özellikleri ve detaylı karşılaştırma. E-ticaret siteniz için en uygun Brisa Sanal POS çözümünü keşfedin." 
        />
        <link rel="canonical" href="https://poskomisyon.com/pos/brisa-sanal" />
      </Helmet>
      <POSDetailPage provider={provider} />
    </>
  );
};

export default BrisaSanalPOS;
