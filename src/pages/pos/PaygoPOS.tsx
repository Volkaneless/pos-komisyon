
import POSDetailPage from "@/components/pos/POSDetailPage";
import { yazarkasaPOSProviders } from "@/data/pos-types/yazarkasaPOS";
import MetaTags from "@/components/MetaTags";

const PaygoPOS = () => {
  const provider = yazarkasaPOSProviders.find(p => p.id === "paygo-pos");

  if (!provider) {
    return null;
  }

  return (
    <>
      <MetaTags
        title={`Paygo Yazar Kasa POS Komisyon Oranları ${new Date().getFullYear()}`}
        description={`${new Date().getFullYear()} Paygo Yazar Kasa POS komisyon oranları, özellikleri ve detaylı karşılaştırma. İşletmeniz için en uygun Paygo POS çözümünü keşfedin.`}
        canonicalPath="/pos/paygo-pos"
        priority={20}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Paygo Yazar Kasa POS",
          "description": `Paygo Yazar Kasa POS komisyon oranları ve detaylı bilgiler. ${new Date().getFullYear()} güncel bilgileri.`
        }}
      />
      <POSDetailPage provider={provider} />
    </>
  );
};

export default PaygoPOS;
