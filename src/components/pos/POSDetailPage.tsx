
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import POSHeader from "./POSHeader";
import POSInfo from "./POSInfo";
import POSTabs from "./POSTabs";
import POSProviderFAQ from "./POSProviderFAQ";
import LatestBlogPosts from "./LatestBlogPosts";
import SimilarProviders from "./SimilarProviders";
import CanonicalLink from "@/components/CanonicalLink";
import type { POSProvider } from "@/types/pos";

interface POSDetailPageProps {
  provider: POSProvider;
}

const POSDetailPage = ({ provider }: POSDetailPageProps) => {
  const currentYear = new Date().getFullYear();
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Set isLoaded to true after component mounts
  useEffect(() => {
    setIsLoaded(true;
  }, []);
  
  if (!provider) {
    return <div className="container mx-auto py-24 px-4">Provider not found</div>;
  }
  
  const pageTitle = `${provider.name} POS ${currentYear} Komisyon Oranları | POS Compare`;
  
  return (
    <>
      {/* Use CanonicalLink for this specific provider page */}
      <CanonicalLink path={`/pos/${provider.id}`} />
      
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content={`${currentYear} ${provider.name} POS komisyon oranları ve özellikleri. ${provider.name} POS cihazı hakkında bilgi alın ve hemen başvurun.`}
        />
      </Helmet>
      
      <div className="container mx-auto px-4 py-12">
        <POSHeader provider={provider} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2">
            <POSInfo provider={provider} />
            <div className="mt-12">
              <POSTabs provider={provider} currentYear={currentYear} />
            </div>
            
            <div className="mt-16">
              <h2 className="text-2xl font-semibold mb-6">Sıkça Sorulan Sorular</h2>
              <POSProviderFAQ provider={provider} />
            </div>
          </div>
          
          <div className="space-y-12">
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Başvuru Bilgileri</h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  {provider.name} POS çözümü hakkında detaylı bilgi almak ve 
                  başvuru yapmak için aşağıdaki iletişim kanallarını kullanabilirsiniz:
                </p>
                <div className="space-y-2">
                  <p><strong>Müşteri Hizmetleri:</strong> 0850 XXX XX XX</p>
                  <p><strong>E-posta:</strong> info@{provider.id}.com.tr</p>
                  <p><strong>Web:</strong> www.{provider.id}.com.tr</p>
                </div>
                <div className="mt-6">
                  <button className="button-primary w-full">Hemen Başvur</button>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Benzer POS Çözümleri</h3>
              <SimilarProviders currentProvider={provider} />
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">İlgili Blog Yazıları</h3>
              <LatestBlogPosts category={provider.type === "Sanal POS" ? "social-media" : "adsense"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default POSDetailPage;
