
import { Helmet } from "react-helmet";
import POSDetailPage from "@/components/pos/POSDetailPage";
import { yazarkasaPOSProviders } from "@/data/pos-types/yazarkasaPOS";

const KuveytTurkPOS = () => {
  const provider = yazarkasaPOSProviders.find(p => p.id === "kuveyt-turk-pos");

  if (!provider) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>Kuveyt Türk POS Komisyon Oranları 2025 | POS Compare</title>
        <meta 
          name="description" 
          content="2025 Kuveyt Türk POS komisyon oranları, özellikleri ve detaylı karşılaştırma. İşletmeniz için en uygun Kuveyt Türk POS çözümünü keşfedin." 
        />
        <link rel="canonical" href="https://poskomisyon.com/pos/kuveyt-turk-pos" />
      </Helmet>
      <POSDetailPage provider={provider} />
    </>
  );
};

export default KuveytTurkPOS;
