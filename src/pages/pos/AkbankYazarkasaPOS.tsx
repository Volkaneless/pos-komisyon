import POSDetailPage from "@/components/pos/POSDetailPage";
import { posProviders } from "@/data/posProviders";

const AkbankYazarkasaPOS = () => {
  const provider = posProviders.find(p => p.id === "akbank-pos")!;
  console.log('Rendering AkbankYazarkasaPOS with provider:', provider);
  return <POSDetailPage provider={provider} />;
};

export default AkbankYazarkasaPOS;