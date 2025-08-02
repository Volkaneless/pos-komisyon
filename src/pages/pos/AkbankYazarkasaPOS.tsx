import POSDetailPage from "@/components/pos/POSDetailPage";
import { posProviders } from "@/data/posProviders";
import EnhancedMetaTags from "@/components/SEO/EnhancedMetaTags";

const AkbankYazarkasaPOS = () => {
  const provider = posProviders.find(p => p.id === "akbank-yazarkasa")!;
  
  return (
    <>
      <EnhancedMetaTags
        title={`Akbank Yazar Kasa POS Komisyon Oranları ${new Date().getFullYear()}`}
        description={`${new Date().getFullYear()} Akbank Yazar Kasa POS komisyon oranları, özellikleri ve detaylı karşılaştırma. İşletmeniz için en uygun Akbank POS çözümünü keşfedin.`}
        keywords={`akbank yazarkasa pos komisyon oranları ${new Date().getFullYear()}, akbank pos cihazı, akbank yazarkasa pos`}
        canonicalPath="/pos/akbank-yazarkasa"
        ogType="product"
        schemaType="Product"
        productInfo={{
          name: "Akbank Yazar Kasa POS",
          description: `Akbank Yazar Kasa POS komisyon oranları ve detaylı bilgiler. ${new Date().getFullYear()} güncel bilgileri.`,
          brand: "Akbank",
          category: "Yazar Kasa POS Cihazı"
        }}
      />
      <POSDetailPage provider={provider} />
    </>
  );
};

export default AkbankYazarkasaPOS;