import { Helmet } from "react-helmet";
import { Terminal } from "lucide-react";
import POSCard from "@/components/POSCard";
import { posProviders } from "@/data/posProviders";

const YazarkasaPOS = () => {
  const yazarkasaProviders = posProviders.filter(
    provider => provider.type === "Yazar Kasa (ÖKC) POS"
  );

  return (
    <>
      <Helmet>
        <title>Yazar Kasa POS Cihazları ve Komisyon Oranları 2024 | POS Compare</title>
        <meta 
          name="description" 
          content="Bankaların yazar kasa POS cihazları, komisyon oranları ve özellikleri. Yazar kasa POS cihazlarını karşılaştırın." 
        />
      </Helmet>

      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Terminal className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Yazar Kasa POS Komisyon Oranları 2024</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            En uygun yazar kasa POS cihazlarını karşılaştırın, size en uygun POS cihazını seçin.
          </p>
        </div>

        <div className="grid gap-8">
          {yazarkasaProviders.map((provider) => (
            <POSCard key={provider.id} {...provider} />
          ))}
        </div>
      </div>
    </>
  );
};

export default YazarkasaPOS;