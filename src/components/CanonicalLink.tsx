
import { Helmet } from "react-helmet";
import { getCanonicalUrl } from "@/lib/utils";

interface CanonicalLinkProps {
  path: string;
  includeHome?: boolean;
}

const CanonicalLink = ({ path, includeHome = false }: CanonicalLinkProps) => {
  // Kanonik URL'yi doğru şekilde oluşturuyoruz
  const canonicalUrl = getCanonicalUrl(path);
  const homeUrl = getCanonicalUrl("/");

  return (
    <Helmet>
      {/* Kanonik URL'yi doğru şekilde ayarlıyoruz */}
      <link rel="canonical" href={canonicalUrl} />
      {/* Ana sayfa alternatif bağlantısını yalnızca istendiğinde ekleriz ve 
          yalnızca mevcut sayfa ana sayfa değilse */}
      {includeHome && path !== "/" && (
        <link rel="alternate" href={homeUrl} hrefLang="tr" />
      )}
    </Helmet>
  );
};

export default CanonicalLink;
