
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import POSHeader from "./POSHeader";
import POSInfo from "./POSInfo";
import POSTabs from "./POSTabs";
import SimilarProviders from "./SimilarProviders";
import POSProviderFAQ from "./POSProviderFAQ";
import LatestBlogPosts from "./LatestBlogPosts";
import type { POSProvider } from "@/types/pos";

interface POSDetailPageProps {
  provider: POSProvider;
}

const POSDetailPage = ({ provider }: POSDetailPageProps) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const currentYear = new Date().getFullYear();

  // ScrollToHash effect on component mount
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const pageTitle = `${provider.name} Komisyon Oranları (${currentYear}) - POS Detayları ve Başvuru`;
  const pageDescription = `${provider.name} ${currentYear} güncel POS komisyon oranları: ${provider.commission_rate}. Başvuru, özellikler ve detaylar için tıklayın.`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`${provider.name.toLowerCase()}, ${provider.name.toLowerCase()} pos komisyon oranları, ${provider.name.toLowerCase()} pos başvuru, ${provider.name.toLowerCase()} pos fiyatları, ${provider.name.toLowerCase()} komisyon oranı, ${provider.name.toLowerCase()} pos özellikleri`} />
        <link rel="canonical" href={`https://poskomisyon.com${currentPath}`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://poskomisyon.com${currentPath}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Helmet>

      <div className="container mx-auto px-4 pt-20 pb-12">
        <POSHeader provider={provider} />
        <POSInfo provider={provider} currentYear={currentYear} />
        <POSTabs provider={provider} currentYear={currentYear} />
        <POSProviderFAQ provider={provider} />
        <SimilarProviders currentProvider={provider} />
        <LatestBlogPosts />
      </div>
    </>
  );
};

export default POSDetailPage;
