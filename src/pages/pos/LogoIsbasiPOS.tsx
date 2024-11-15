import POSDetailPage from "@/components/pos/POSDetailPage";
import { posProviders } from "@/data/posProviders";

const LogoIsbasiPOS = () => {
  const provider = posProviders.find(p => p.id === "logo-isbasi")!;
  
  return <POSDetailPage provider={provider} />;
};

export default LogoIsbasiPOS;