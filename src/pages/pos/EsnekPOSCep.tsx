import POSDetailPage from "@/components/pos/POSDetailPage";
import { posProviders } from "@/data/posProviders";

const EsnekPOSCep = () => {
  const provider = posProviders.find(p => p.id === "esnekpos-cep")!;
  
  return <POSDetailPage provider={provider} />;
};

export default EsnekPOSCep;