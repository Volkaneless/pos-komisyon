import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import POSHeader from "./POSHeader";
import POSInfo from "./POSInfo";
import POSTabs from "./POSTabs";
import SimilarProviders from "./SimilarProviders";
import LatestBlogPosts from "./LatestBlogPosts";
import type { POSProvider } from "@/types/pos";

interface POSDetailPageProps {
  provider: POSProvider;
}

const POSDetailPage = ({ provider }: POSDetailPageProps) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  if (!provider) {
    return (
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-2xl font-bold">POS sağlayıcı bulunamadı</h1>
      </div>
    );
  }

  const currentYear = new Date().getFullYear();
  const pageTitle = `${provider.name} Komisyon Oranları ${currentYear}`;
  const pageDescription = `${currentYear} ${provider.name} komisyon oranları: ${provider.type} için ${provider.commission_rate} komisyon oranı ve ${provider.monthly_fee} aylık ücret. Güncel ${provider.name} başvuru şartları, destek hattı ve detaylı bilgiler.`;

  console.log('Rendering POSDetailPage for provider:', provider);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`https://poskomisyon.com/pos/${provider.id}`} />
      </Helmet>
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">{pageTitle}</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          {currentYear} {provider.name} POS komisyon oranları, işletmeler için avantajlı seçenekler sunuyor. {provider.name} POS cihazı, sanal POS ve hızlı başvuru imkanıyla işlemlerinizi güvenle gerçekleştirin. {provider.name} POS müşteri hizmetleri ve destek hattı ile her sorunuzda yanınızda.
        </p>
        <div className="glass-card rounded-2xl p-8 mb-12">
          <POSHeader provider={provider} />
          <POSInfo provider={provider} />
        </div>

        <POSTabs provider={provider} currentYear={currentYear} />
        <SimilarProviders currentProvider={provider} />
        <LatestBlogPosts />
      </div>
    </>
  );
};

export default POSDetailPage;