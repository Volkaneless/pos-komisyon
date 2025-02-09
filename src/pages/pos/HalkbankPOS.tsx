
import { Helmet } from "react-helmet";
import POSDetailPage from "@/components/pos/POSDetailPage";
import { yazarkasaPOSProviders } from "@/data/pos-types/yazarkasaPOS";

const HalkbankPOS = () => {
  const provider = yazarkasaPOSProviders.find(p => p.id === "halkbank-pos");

  if (!provider) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>Halkbank POS Komisyon Oranları 2025 | POS Compare</title>
        <meta 
          name="description" 
          content="2025 Halkbank POS komisyon oranları, özellikleri ve detaylı karşılaştırma. İşletmeniz için en uygun Halkbank POS çözümünü keşfedin." 
        />
        <link rel="canonical" href="https://poskomisyon.com/pos/halkbank-pos" />
      </Helmet>
      <POSDetailPage provider={provider} />
    </>
  );
};

export default HalkbankPOS;
