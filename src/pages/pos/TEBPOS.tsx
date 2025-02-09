
import { Helmet } from "react-helmet";
import POSDetailPage from "@/components/pos/POSDetailPage";
import { yazarkasaPOSProviders } from "@/data/pos-types/yazarkasaPOS";

const TEBPOS = () => {
  const provider = yazarkasaPOSProviders.find(p => p.id === "teb-pos");

  if (!provider) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>TEB POS Komisyon Oranları 2025 | POS Compare</title>
        <meta 
          name="description" 
          content="2025 TEB POS komisyon oranları, özellikleri ve detaylı karşılaştırma. İşletmeniz için en uygun TEB POS çözümünü keşfedin." 
        />
        <link rel="canonical" href="https://poskomisyon.com/pos/teb-pos" />
      </Helmet>
      <POSDetailPage provider={provider} />
    </>
  );
};

export default TEBPOS;
