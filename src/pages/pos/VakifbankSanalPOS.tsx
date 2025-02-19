
import POSDetailPage from "@/components/pos/POSDetailPage";
import { bankaPOSProviders } from "@/data/pos-types/bankaPOS";

const VakifbankSanalPOS = () => {
  const provider = bankaPOSProviders.find(p => p.id === "vakifbank-sanal-pos");
  return <POSDetailPage provider={provider!} />;
};

export default VakifbankSanalPOS;
