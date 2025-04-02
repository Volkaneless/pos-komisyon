
import { Helmet } from "react-helmet";
import { getCanonicalUrl } from "@/lib/utils";

interface CanonicalLinkProps {
  path: string;
  includeHome?: boolean;
}

const CanonicalLink = ({ path, includeHome = false }: CanonicalLinkProps) => {
  // Make sure path is correctly normalized and doesn't have double slashes
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Kanonik URL'yi doğru şekilde oluşturuyoruz
  const canonicalUrl = getCanonicalUrl(normalizedPath);
  const homeUrl = getCanonicalUrl("/");
  
  // Avoid duplicating canonical URLs
  return (
    <Helmet>
      {/* Kanonik URL'yi doğru şekilde ayarlıyoruz */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Ana sayfa alternatif bağlantısını yalnızca istendiğinde ekleriz ve 
          yalnızca mevcut sayfa ana sayfa değilse */}
      {includeHome && normalizedPath !== "/" && (
        <link rel="alternate" href={homeUrl} hrefLang="tr" />
      )}
    </Helmet>
  );
};

export default CanonicalLink;
