
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import type { POSProvider } from "@/types/pos";

interface POSTypePageProps {
  title: string;
  description: string;
  content: React.ReactNode;
  providers?: POSProvider[];
  faqs?: React.ReactNode;
  features?: React.ReactNode;
  agreements?: React.ReactNode;
  children?: React.ReactNode;
}

const POSTypePage = ({
  title,
  description,
  content,
  providers,
  faqs,
  features,
  agreements,
  children
}: POSTypePageProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`https://poskomisyon.com${currentPath}`} />
      </Helmet>

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {description}
          </p>
        </div>

        <div className="mb-16">
          {content}
        </div>

        {providers && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">Öne Çıkan Sağlayıcılar</h2>
            {providers}
          </div>
        )}

        {features && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">Özellikler</h2>
            {features}
          </div>
        )}

        {agreements && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">Anlaşma Koşulları</h2>
            {agreements}
          </div>
        )}

        {faqs && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">Sık Sorulan Sorular</h2>
            {faqs}
          </div>
        )}

        {children}
      </div>
    </>
  );
};

export default POSTypePage;
