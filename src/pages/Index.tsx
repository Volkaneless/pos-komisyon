import { useState } from "react";
import { Link } from "react-router-dom";
import POSCard from "../components/POSCard";
import POSFilter from "../components/POSFilter";
import FAQ from "../components/FAQ";
import POSArticle from "../components/POSArticle";
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
  const pageDescription = `${currentDate} tarihli güncel verilerle bankaların yazar kasa, sanal POS komisyon oranları karşılaştırın ve hemen başvurun. En uygun POS komisyon oranları ve detaylı bilgiler.`;

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

  const quickLinks = [
    { title: "POS Komisyon Hesaplayıcı", path: "/calculator", description: "Güncel POS komisyon oranlarını hesaplayın" },
    { title: "Sanal POS Çözümleri", path: "/pos-types/sanal", description: "E-ticaret için sanal POS seçenekleri" },
    { title: "Mobil POS Sistemleri", path: "/pos-types/mobil", description: "Taşınabilir POS cihazları" },
    { title: "Yazar Kasa POS", path: "/pos-types/yazarkasa", description: "ÖKC entegreli POS sistemleri" }
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
              2024 yılında en uygun POS komisyon oranları ile işletme maliyetlerinizi düşürmek mümkün. Bankaların POS komisyon oranları ve yazarkasa, sanal POS komisyon oranları için detaylı POS komisyon hesaplama araçlarını kullanabilirsiniz.
            </p>
            <div className="text-sm text-gray-500 mt-2 flex items-center justify-center gap-4">
              <span>Son güncelleme: {currentDate}</span>
              <span>•</span>
              <span>Giriş tarihi: 1 Kasım 2024</span>
            </div>
          </div>

          {/* Hızlı Erişim Linkleri */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {quickLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="p-4 border rounded-lg hover:shadow-md transition-shadow bg-white"
              >
                <h3 className="font-medium text-primary mb-2">{link.title}</h3>
                <p className="text-sm text-gray-600">{link.description}</p>
              </Link>
            ))}
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

          {/* İlgili Sayfalar */}
          <div className="mt-16 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">İlgili Sayfalar</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/blog" className="text-primary hover:underline">POS Sistemleri Blog</Link>
              <Link to="/about" className="text-primary hover:underline">Hakkımızda</Link>
              <Link to="/contact" className="text-primary hover:underline">İletişim</Link>
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