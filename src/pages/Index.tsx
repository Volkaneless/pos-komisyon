import { useState } from "react";
import POSCard from "../components/POSCard";
import POSFilter from "../components/POSFilter";
import FAQ from "../components/FAQ";
import { posProviders } from "../data/posProviders";
import { Helmet } from "react-helmet";

const Index = () => {
  const [filteredProviders, setFilteredProviders] = useState(posProviders);
  const currentDate = new Date().toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const currentYear = new Date().getFullYear();
  const pageTitle = `POS Komisyon Oranları 2024 (En Uygun POS Oranları) ${currentYear}`;
  const pageDescription = `POS komisyon oranları ${currentDate} tarihli güncel verilerle bankaların fiziki, yazar kasa, sanal POS komisyon oranlarını bulabilirsiniz.`;

  const handleFilter = (selectedProviders: string[], selectedTypes: string[]) => {
    if (selectedProviders.length === 0 && selectedTypes.length === 0) {
      setFilteredProviders(posProviders);
      return;
    }

    const filtered = posProviders.filter(provider => {
      const providerName = provider.name.split(" ")[0];
      const matchesProvider = selectedProviders.length === 0 || selectedProviders.includes(providerName);
      const matchesType = selectedTypes.length === 0 || selectedTypes.includes(provider.type);
      return matchesProvider && matchesType;
    });

    setFilteredProviders(filtered);
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="https://poskomisyon.com" />
      </Helmet>

      <div>
        <div className="container mx-auto px-4 pt-24 pb-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              En Uygun POS Komisyon Oranları 2024
            </h1>
            <p className="text-xl text-gray-600">
              Bankaların en uygun fiziki, yazar kasa, sanal POS komisyon oranları
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Son güncelleme: {currentDate}
            </p>
          </div>

          <POSFilter providers={posProviders} onFilter={handleFilter} />

          <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
            {filteredProviders.map((provider, index) => (
              <POSCard key={index} {...provider} />
            ))}
          </div>
        </div>
        
        <FAQ />
      </div>
    </>
  );
};

export default Index;
