
import POSDetailPage from "@/components/pos/POSDetailPage";
import { bankaPOSProviders } from "@/data/pos-types/bankaPOS";

const DenizbankSanalPOS = () => {
  const provider = bankaPOSProviders.find(p => p.id === "denizbank-sanal-pos");
  return <POSDetailPage provider={provider!} />;
};

export default DenizbankSanalPOS;
