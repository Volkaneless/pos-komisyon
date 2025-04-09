
import { Helmet } from "react-helmet";

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
  priority?: number;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
}

const MetaTags = ({ 
  title, 
  description, 
  keywords,
  canonicalPath,
  priority = 10,
  ogImage,
  ogType = "website",
  structuredData
}: MetaTagsProps) => {
  const domain = "https://poskomisyon.com";
  const siteTitle = title ? `${title}` : "POS Komisyon - En Uygun POS Seçenekleri";
  const canonicalUrl = canonicalPath ? `${domain}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}` : undefined;
  const defaultOgImage = `${domain}/images/og-image.jpg`;
  
  return (
    <Helmet prioritizeSeoTags>
      {title && <title>{siteTitle}</title>}
      {title && <meta property="og:title" content={siteTitle} />}
      {title && <meta name="twitter:title" content={siteTitle} />}
      
      {description && <meta name="description" content={description} />}
      {description && <meta property="og:description" content={description} />}
      {description && <meta name="twitter:description" content={description} />}
      
      {keywords && <meta name="keywords" content={keywords} />}
      
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={ogImage || defaultOgImage} />
      
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Add structured data if provided */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default MetaTags;
