
import { useState } from "react";
import { sanalPOSProviders } from "@/data/pos-types/sanalPOS";
import POSCard from "@/components/POSCard";
import POSFilter from "@/components/POSFilter";
import FAQ from "@/components/FAQ";
import LatestBlogPosts from "@/components/pos/LatestBlogPosts";
import MetaTags from "@/components/MetaTags";

const SanalPOS = () => {
  const [filteredProviders, setFilteredProviders] = useState(sanalPOSProviders);

  const handleFilter = (providers: string[], types: string[]) => {
    let filtered = sanalPOSProviders;
    
    if (providers.length > 0) {
      filtered = filtered.filter(provider => 
        providers.some(p => provider.name.toLowerCase().includes(p.toLowerCase()))
      );
    }
    
    if (types.length > 0) {
      filtered = filtered.filter(provider => types.includes(provider.type));
    }
    
    setFilteredProviders(filtered);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Sanal POS Başvurusu - En Uygun Komisyon Oranları 2025",
    "description": "2025 yılı güncel sanal POS komisyon oranları ve başvuru seçenekleri. E-ticaret işletmeniz için en uygun sanal POS çözümünü bulun.",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": sanalPOSProviders.length,
      "itemListElement": sanalPOSProviders.map((provider, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "FinancialProduct",
          "name": provider.name,
          "description": `${provider.name} sanal POS çözümü - %${provider.commission_rate} komisyon oranı`
        }
      }))
    }
  };

  return (
    <>
      <MetaTags
        title="Sanal POS Başvurusu - En Uygun Komisyon Oranları 2025"
        description="2025 yılı güncel sanal POS komisyon oranları ve başvuru seçenekleri. E-ticaret işletmeniz için en uygun sanal POS çözümünü bulun ve hemen başvurun."
        keywords="sanal pos başvurusu, sanal pos komisyon oranları 2025, e-ticaret pos, online ödeme sistemleri, sanal pos karşılaştırma"
        canonicalPath="/pos-types/sanal"
        priority={30}
        structuredData={structuredData}
      />

      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Sanal POS Başvurusu
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            E-ticaret siteniz için en uygun sanal POS çözümünü bulun. 
            Güncel komisyon oranları ile karşılaştırın ve hemen başvurun.
          </p>
          <div className="text-lg text-gray-700 font-medium">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
              {filteredProviders.length} Sanal POS Seçeneği
            </span>
          </div>
        </div>

        {/* Filter Section */}
        <POSFilter 
          providers={sanalPOSProviders} 
          onFilter={handleFilter}
        />

        {/* POS Cards Section */}
        <div className="space-y-4">
          {filteredProviders.map(provider => (
            <POSCard key={provider.id} {...provider} />
          ))}
        </div>

        {/* Information Section */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Sanal POS Hakkında Bilgi</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Sanal POS Nedir?</h3>
              <p className="text-gray-600 mb-4">
                Sanal POS, internet üzerinden yapılan ödemeleri güvenli bir şekilde almanızı sağlayan 
                modern bir ödeme sistemidir. E-ticaret siteleri ve online hizmetler için vazgeçilmez bir çözümdür.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>7/24 kesintisiz ödeme alma</li>
                <li>Güvenli SSL şifreleme</li>
                <li>Kolay entegrasyon</li>
                <li>Detaylı raporlama</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Komisyon Oranları</h3>
              <p className="text-gray-600 mb-4">
                Sanal POS komisyon oranları işlem tipine ve sağlayıcıya göre değişir. 
                En uygun seçeneği bulmak için karşılaştırma yapın.
              </p>
              <div className="bg-white p-4 rounded-lg border">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Tek Çekim</span>
                  <span className="font-semibold text-primary">%0,59 - %2,70</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">3 Taksit</span>
                  <span className="font-semibold text-primary">%1,50 - %3,50</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">6+ Taksit</span>
                  <span className="font-semibold text-primary">%2,50 - %4,50</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <FAQ />
        </div>

        {/* Latest Blog Posts */}
        <div className="mt-16">
          <LatestBlogPosts />
        </div>
      </div>
    </>
  );
};

export default SanalPOS;
