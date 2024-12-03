import POSDetailPage from "@/components/pos/POSDetailPage";
import { posProviders } from "@/data/posProviders";

const EsnekSanalPOS = () => {
  const provider = posProviders.find(p => p.id === "esnekpos")!;
  console.log('Rendering EsnekSanalPOS with provider:', provider);
  return <POSDetailPage provider={provider} />;
};

export default EsnekSanalPOS;