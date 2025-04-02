
import { Helmet } from "react-helmet";

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
  priority?: number;
}

const MetaTags = ({ 
  title, 
  description, 
  keywords,
  canonicalPath,
  priority = 10 
}: MetaTagsProps) => {
  const domain = "https://poskomisyon.com";
  const canonicalUrl = canonicalPath ? `${domain}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}` : undefined;
  
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {/* Priority is handled via component ordering in React, not via a Helmet prop */}
    </Helmet>
  );
};

export default MetaTags;
