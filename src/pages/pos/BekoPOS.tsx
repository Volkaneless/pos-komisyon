
import { Helmet } from "react-helmet";
import POSDetailPage from "@/components/pos/POSDetailPage";
import { yazarkasaPOSProviders } from "@/data/pos-types/yazarkasaPOS";

const BekoPOS = () => {
  const provider = yazarkasaPOSProviders.find(p => p.id === "beko-pos");

  if (!provider) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>Beko Yazar Kasa POS Komisyon Oranları 2025 | POS Compare</title>
        <meta 
          name="description" 
          content="2025 Beko Yazar Kasa POS komisyon oranları, özellikleri ve detaylı karşılaştırma. İşletmeniz için en uygun Beko POS çözümünü keşfedin." 
        />
        <link rel="canonical" href="https://poskomisyon.com/pos/beko-pos" />
      </Helmet>
      <POSDetailPage provider={provider} />
    </>
  );
};

export default BekoPOS;
