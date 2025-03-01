
import { useState } from "react";
import { Helmet } from "react-helmet";
import POSFilter from "../components/POSFilter";
import FAQ from "../components/FAQ";
import POSArticle from "../components/POSArticle";
import { posProviders } from "../data/posProviders";
import Hero from "../components/home/Hero";
import FeaturedInfo from "../components/home/FeaturedInfo";
import QuickLinks from "../components/home/QuickLinks";
import POSCategorySection from "../components/home/POSCategorySection";
import RecommendedContent from "../components/home/RecommendedContent";

const Index = () => {
  const [filteredProviders, setFilteredProviders] = useState(posProviders);
  const currentDate = new Date().toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const pageTitle = "POS Komisyon Oranları 2025 - En Uygun POS Komisyon";
  const pageDescription = `${currentDate} tarihli güncel verilerle bankaların POS cihazı komisyon oranlarını karşılaştırın. En uygun POS komisyon oranları ve detaylı bilgiler.`;

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
        <meta name="keywords" content="pos komisyon oranları 2025, banka pos cihazı, pos komisyon hesaplama, pos karşılaştırma, en uygun pos" />
        <link rel="canonical" href="https://poskomisyon.com" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://poskomisyon.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Helmet>

      <div className="min-h-screen">
        <div className="container mx-auto px-4 pt-24 pb-12">
          <Hero 
            pageTitle={pageTitle} 
            pageDescription={pageDescription} 
            currentDate={currentDate} 
          />

          <FeaturedInfo />

          <QuickLinks />

          <POSFilter providers={posProviders} onFilter={handleFilter} />

          <div className="space-y-16">
            {["Yazar Kasa (ÖKC) POS", "Mobil (Taşınabilir) POS", "Cep POS"].map(category => {
              const categoryProviders = filteredProviders.filter(
                provider => provider.type === category
              );

              return (
                <POSCategorySection 
                  key={category}
                  category={category} 
                  providers={categoryProviders} 
                />
              );
            })}
          </div>

          <RecommendedContent />
        </div>
        
        <FAQ />
        <POSArticle />
      </div>
    </>
  );
};

export default Index;
