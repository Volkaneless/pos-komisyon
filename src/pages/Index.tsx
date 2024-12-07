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

  const pageTitle = `En Uygun POS Komisyon Oranları 2024 | POS Başvurusu`;
  const pageDescription = `En uygun POS komisyon oranları ${currentDate} tarihli güncel verilerle bankaların yazar kasa, sanal POS komisyon oranlarını karşılaştırın ve hemen başvurun.`;

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

  const categories = [
    "Yazar Kasa (ÖKC) POS",
    "Mobil (Taşınabilir) POS",
    "Cep POS",
    "Sanal POS"
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="pos komisyon oranları, en uygun pos, pos başvurusu, pos cihazı, pos karşılaştırma, sanal pos, yazarkasa pos" />
        <link rel="canonical" href="https://poskomisyon.com" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://poskomisyon.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Helmet>

      <div>
        <div className="container mx-auto px-4 pt-24 pb-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              En Uygun POS Komisyon Oranları 2024 | POS Başvurusu
            </h1>
            <p className="text-xl text-gray-600">
              Bankaların en uygun fiziki, yazar kasa, sanal POS komisyon oranları
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Son güncelleme: {currentDate}
            </p>
          </div>

          <POSFilter providers={posProviders} onFilter={handleFilter} />

          <div className="space-y-16">
            {categories.map(category => {
              const categoryProviders = filteredProviders.filter(
                provider => provider.type === category
              );

              if (categoryProviders.length === 0) return null;

              return (
                <div key={category} className="space-y-6">
                  <h2 className="text-2xl font-semibold mb-6">{category}</h2>
                  <div className="grid gap-6">
                    {categoryProviders.map((provider) => (
                      <POSCard key={provider.id} {...provider} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <FAQ />
      </div>
    </>
  );
};

export default Index;