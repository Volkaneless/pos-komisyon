import POSDetailPage from "@/components/pos/POSDetailPage";
import { posProviders } from "@/data/posProviders";

const EsnekPOSAndroid = () => {
  const provider = posProviders.find(p => p.id === "esnekpos-android")!;
  
  return <POSDetailPage provider={provider} />;
};

export default EsnekPOSAndroid;