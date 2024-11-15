import POSDetailPage from "@/components/pos/POSDetailPage";
import { posProviders } from "@/data/posProviders";

const EsnekPOSSanal = () => {
  const provider = posProviders.find(p => p.id === "esnekpos-sanal")!;
  
  return <POSDetailPage provider={provider} />;
};

export default EsnekPOSSanal;