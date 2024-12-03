import POSDetailPage from "@/components/pos/POSDetailPage";
import { posProviders } from "@/data/posProviders";

const ValletSanalPOS = () => {
  const provider = posProviders.find(p => p.id === "vallet-sanal")!;
  console.log('Rendering ValletSanalPOS with provider:', provider);
  return <POSDetailPage provider={provider} />;
};

export default ValletSanalPOS;