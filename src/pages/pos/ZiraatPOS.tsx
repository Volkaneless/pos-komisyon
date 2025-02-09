
import { Helmet } from "react-helmet";
import POSDetailPage from "@/components/pos/POSDetailPage";
import { yazarkasaPOSProviders } from "@/data/pos-types/yazarkasaPOS";

const ZiraatPOS = () => {
  const provider = yazarkasaPOSProviders.find(p => p.id === "ziraat-pos");

  if (!provider) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>Ziraat POS Komisyon Oranları 2025 | POS Compare</title>
        <meta 
          name="description" 
          content="2025 Ziraat POS komisyon oranları, özellikleri ve detaylı karşılaştırma. İşletmeniz için en uygun Ziraat POS çözümünü keşfedin." 
        />
        <link rel="canonical" href="https://poskomisyon.com/pos/ziraat-pos" />
      </Helmet>
      <POSDetailPage provider={provider} />
    </>
  );
};

export default ZiraatPOS;
