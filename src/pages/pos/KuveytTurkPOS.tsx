
import POSDetailPage from "@/components/pos/POSDetailPage";
import { yazarkasaPOSProviders } from "@/data/pos-types/yazarkasaPOS";
import MetaTags from "@/components/MetaTags";

const KuveytTurkPOS = () => {
  const provider = yazarkasaPOSProviders.find(p => p.id === "kuveyt-turk-pos");

  if (!provider) {
    return null;
  }

  return (
    <>
      <MetaTags
        title="Kuveyt Türk POS Komisyon Oranları 2025 | POS Compare"
        description="2025 Kuveyt Türk POS komisyon oranları, özellikleri ve detaylı karşılaştırma. İşletmeniz için en uygun Kuveyt Türk POS çözümünü keşfedin."
        canonicalPath="/pos/kuveyt-turk-pos"
        priority={20}
      />
      <POSDetailPage provider={provider} />
    </>
  );
};

export default KuveytTurkPOS;
