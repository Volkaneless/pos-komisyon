import { useState } from "react";
import POSCard from "../components/POSCard";
import POSFilter from "../components/POSFilter";
import FAQ from "../components/FAQ";
import { posProviders } from "../data/posProviders";

const Index = () => {
  const [filteredProviders, setFilteredProviders] = useState(posProviders);

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
    <div>
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            En Uygun POS Komisyon Oranları
          </h1>
          <p className="text-xl text-gray-600">
            POS komisyon oranları 2024 sayfasından bankaların fiziki, yazar kasa, sanal POS komisyon oranları bulabilirsiniz. İşte en uygun POS komisyon oranları
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
  );
};

export default Index;
