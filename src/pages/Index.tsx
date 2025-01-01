import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import POSCard from "../components/POSCard";
import POSFilter from "../components/POSFilter";
import FAQ from "../components/FAQ";
import POSArticle from "../components/POSArticle";
import { posProviders } from "../data/posProviders";

const Index = () => {
  const [filteredProviders, setFilteredProviders] = useState(posProviders);
  const currentDate = new Date().toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const pageTitle = "POS Oranları: Banka POS Cihazı Komisyon Oranları 2025";
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
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              {pageTitle}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
              2025 yılında güncel POS komisyon oranları ile işletme maliyetlerinizi optimize edin. Bankaların POS komisyon oranlarını karşılaştırın ve size en uygun POS çözümünü bulun.
            </p>
            <div className="text-sm text-gray-500 mt-4 flex items-center justify-center gap-4 flex-wrap">
              <span>Son güncelleme: {currentDate}</span>
              <span className="hidden md:inline">•</span>
              <span>Giriş tarihi: 1 Ocak 2025</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-purple-500/5 p-6 rounded-lg mb-12">
            <h2 className="text-xl font-semibold mb-4">Öne Çıkan Bilgiler - 2025</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>2025 yılı güncel POS komisyon oranları</li>
                <li>Tüm banka ve fintech POS çözümleri</li>
                <li>Ücretsiz POS başvurusu imkanı</li>
              </ul>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Detaylı POS komisyon hesaplama araçları</li>
                <li>Banka karşılaştırma ve değerlendirme</li>
                <li>Sektöre özel POS çözümleri</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <Link
              to="/calculator"
              className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white group"
            >
              <h3 className="font-medium text-primary mb-2 group-hover:text-primary-dark transition-colors">
                POS Komisyon Hesaplayıcı
              </h3>
              <p className="text-sm text-gray-600">
                Güncel komisyon oranlarıyla hesaplama yapın
              </p>
            </Link>
            <Link
              to="/pos-types/sanal"
              className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white group"
            >
              <h3 className="font-medium text-primary mb-2 group-hover:text-primary-dark transition-colors">
                Sanal POS Çözümleri
              </h3>
              <p className="text-sm text-gray-600">
                E-ticaret için sanal POS seçenekleri
              </p>
            </Link>
            <Link
              to="/pos-types/yazarkasa"
              className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white group"
            >
              <h3 className="font-medium text-primary mb-2 group-hover:text-primary-dark transition-colors">
                Yazar Kasa POS
              </h3>
              <p className="text-sm text-gray-600">
                ÖKC entegreli POS sistemleri
              </p>
            </Link>
            <Link
              to="/pos-types/mobil"
              className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white group"
            >
              <h3 className="font-medium text-primary mb-2 group-hover:text-primary-dark transition-colors">
                Mobil POS Sistemleri
              </h3>
              <p className="text-sm text-gray-600">
                Taşınabilir POS çözümleri
              </p>
            </Link>
          </div>

          <POSFilter providers={posProviders} onFilter={handleFilter} />

          <div className="space-y-16">
            {["Yazar Kasa (ÖKC) POS", "Mobil (Taşınabilir) POS", "Cep POS", "Sanal POS"].map(category => {
              const categoryProviders = filteredProviders.filter(
                provider => provider.type === category
              );

              if (categoryProviders.length === 0) return null;

              return (
                <div key={category} className="space-y-6">
                  <h2 className="text-2xl font-semibold mb-6">
                    <Link 
                      to={`/pos-types/${category.toLowerCase().replace(/[\s()]/g, '-')}`}
                      className="hover:text-primary transition-colors"
                    >
                      {category}
                    </Link>
                  </h2>
                  <div className="grid gap-6">
                    {categoryProviders.map((provider) => (
                      <POSCard key={provider.id} {...provider} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 mb-12">
            <h2 className="text-2xl font-semibold mb-6">Önerilen İçerikler</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                to="/blog/pos-cihazi-nasil-alinir"
                className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white"
              >
                <h3 className="font-medium text-primary mb-2">POS Cihazı Nasıl Alınır?</h3>
                <p className="text-sm text-gray-600">Detaylı başvuru rehberi</p>
              </Link>
              <Link
                to="/blog/pos-komisyon-oranlari"
                className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white"
              >
                <h3 className="font-medium text-primary mb-2">POS Komisyon Oranları</h3>
                <p className="text-sm text-gray-600">2025 güncel oranlar</p>
              </Link>
              <Link
                to="/blog/sanal-pos-fiziki-pos-karsilastirma"
                className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white"
              >
                <h3 className="font-medium text-primary mb-2">Sanal POS vs Fiziki POS</h3>
                <p className="text-sm text-gray-600">Detaylı karşılaştırma</p>
              </Link>
            </div>
          </div>
        </div>
        
        <FAQ />
        <POSArticle />
      </div>
    </>
  );
};

export default Index;
