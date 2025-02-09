
import { Helmet } from "react-helmet";
import POSDetailPage from "@/components/pos/POSDetailPage";
import { yazarkasaPOSProviders } from "@/data/pos-types/yazarkasaPOS";

const IngenicoPOS = () => {
  const provider = yazarkasaPOSProviders.find(p => p.id === "ingenico-pos");

  if (!provider) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>Ingenico POS Komisyon Oranları 2025 | POS Compare</title>
        <meta 
          name="description" 
          content="2025 Ingenico POS komisyon oranları, özellikleri ve detaylı karşılaştırma. İşletmeniz için en uygun Ingenico POS çözümünü keşfedin." 
        />
        <link rel="canonical" href="https://poskomisyon.com/pos/ingenico-pos" />
      </Helmet>
      <POSDetailPage provider={provider} />
    </>
  );
};

export default IngenicoPOS;
