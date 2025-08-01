import { Helmet } from "react-helmet-async";
import { generateSchemaMarkup, generateDefaultSEO, type SEOConfig } from "@/lib/seo";
import { useLocation } from "react-router-dom";

interface EnhancedMetaTagsProps extends SEOConfig {
  children?: React.ReactNode;
}

const EnhancedMetaTags = ({ 
  title, 
  description, 
  keywords,
  canonicalPath,
  ogImage,
  ogType = "website",
  schemaType,
  breadcrumbs,
  faqs,
  productInfo,
  children
}: EnhancedMetaTagsProps) => {
  const location = useLocation();
  const domain = "https://poskomisyon.com";
  
  // Use provided values or generate defaults
  const currentPath = canonicalPath || location.pathname;
  const defaultSEO = generateDefaultSEO(currentPath);
  
  const finalTitle = title || defaultSEO.title;
  const finalDescription = description || defaultSEO.description;
  const finalKeywords = keywords || defaultSEO.keywords;
  const canonicalUrl = `${domain}${currentPath}`;
  const finalOgImage = ogImage || `${domain}/lovable-uploads/022dd1e4-49bd-409f-9b2a-2da2b294b413.png`;
  
  // Generate schema markup
  const schemas = generateSchemaMarkup({
    title: finalTitle,
    description: finalDescription,
    keywords: finalKeywords,
    canonicalPath: currentPath,
    ogImage: finalOgImage,
    ogType,
    schemaType,
    breadcrumbs,
    faqs,
    productInfo
  });
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      {finalKeywords && <meta name="keywords" content={finalKeywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="POS Komisyon" />
      <meta property="og:locale" content="tr_TR" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalOgImage} />
      <meta name="twitter:site" content="@poskomisyon" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="author" content="POS Komisyon" />
      <meta name="language" content="Turkish" />
      <meta name="geo.region" content="TR" />
      <meta name="geo.country" content="Turkey" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="POS Komisyon" />
      
      {/* Performance Hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Structured Data */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
      
      {/* Additional head content */}
      {children}
    </Helmet>
  );
};

export default EnhancedMetaTags;