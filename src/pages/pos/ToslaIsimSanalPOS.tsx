import POSDetailPage from "@/components/pos/POSDetailPage";
import { posProviders } from "@/data/posProviders";

const ToslaIsimSanalPOS = () => {
  const provider = posProviders.find(p => p.id === "tosla-isim-sanal")!;
  console.log('Rendering ToslaIsimSanalPOS with provider:', provider);
  return <POSDetailPage provider={provider} />;
};

export default ToslaIsimSanalPOS;