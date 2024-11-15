import POSDetailPage from "@/components/pos/POSDetailPage";
import { posProviders } from "@/data/posProviders";

const ToslaIsimPOS = () => {
  const provider = posProviders.find(p => p.id === "tosla-isim")!;
  
  return <POSDetailPage provider={provider} />;
};

export default ToslaIsimPOS;