import POSDetailPage from "@/components/pos/POSDetailPage";
import { posProviders } from "@/data/posProviders";

const EsnekPOSPazaryeri = () => {
  const provider = posProviders.find(p => p.id === "esnekpos-pazaryeri")!;
  
  return <POSDetailPage provider={provider} />;
};

export default EsnekPOSPazaryeri;