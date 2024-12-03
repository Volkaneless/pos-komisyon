import POSDetailPage from "@/components/pos/POSDetailPage";
import { posProviders } from "@/data/posProviders";

const LogoIsbasiCepPOS = () => {
  const provider = posProviders.find(p => p.id === "logo-isbasi-cep")!;
  console.log('Rendering LogoIsbasiCepPOS with provider:', provider);
  return <POSDetailPage provider={provider} />;
};

export default LogoIsbasiCepPOS;