import POSDetailPage from "@/components/pos/POSDetailPage";
import { posProviders } from "@/data/posProviders";

const OdealPOS = () => {
  const provider = posProviders.find(p => p.id === "odeal-pos")!;
  console.log('Rendering OdealPOS with provider:', provider);
  return <POSDetailPage provider={provider} />;
};

export default OdealPOS;