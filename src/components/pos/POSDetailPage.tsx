
import { useState, useEffect } from "react";
import POSHeader from "./POSHeader";
import POSInfo from "./POSInfo";
import POSTabs from "./POSTabs";
import POSProviderFAQ from "./POSProviderFAQ";
import LatestBlogPosts from "./LatestBlogPosts";
import SimilarProviders from "./SimilarProviders";
import MetaTags from "@/components/MetaTags";
import { BookOpen } from "lucide-react";
import type { POSProvider } from "@/types/pos";

interface POSDetailPageProps {
  provider: POSProvider;
}

const POSDetailPage = ({ provider }: POSDetailPageProps) => {
  const currentYear = new Date().getFullYear();
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Set isLoaded to true after component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  if (!provider) {
    return <div className="container mx-auto py-24 px-4">Provider not found</div>;
  }
  
  const pageTitle = `${provider.name} POS ${currentYear} Komisyon Oranları | POS Compare`;
  
  return (
    <>
      <MetaTags
        title={pageTitle}
        description={`${currentYear} ${provider.name} POS komisyon oranları ve özellikleri. ${provider.name} POS cihazı hakkında bilgi alın ve hemen başvurun.`}
        canonicalPath={`/pos/${provider.id}`}
        priority={20}
      />
      
      <div className="bg-gray-50 min-h-screen pb-16">
        <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
          <POSHeader provider={provider} />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 mt-8 md:mt-12">
            <div className="lg:col-span-2 space-y-8 md:space-y-12">
              <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                <POSInfo provider={provider} />
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                <POSTabs provider={provider} currentYear={currentYear} />
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                <h2 className="text-2xl font-semibold mb-6">Sıkça Sorulan Sorular</h2>
                <POSProviderFAQ provider={provider} />
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="glass-card p-6 md:p-8 rounded-xl">
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
                    <button className="button-primary w-full py-3 text-base">Hemen Başvur</button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-4">Benzer POS Çözümleri</h3>
                <SimilarProviders currentProvider={provider} />
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  İlgili Blog Yazıları
                </h3>
                <LatestBlogPosts category={provider.type === "Sanal POS" ? "social-media" : "adsense"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default POSDetailPage;
