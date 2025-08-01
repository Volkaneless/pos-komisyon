/**
 * SEO utilities and schema markup generators
 */

export interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: string;
  schemaType?: 'WebSite' | 'Organization' | 'FAQPage' | 'Product' | 'BreadcrumbList' | 'LocalBusiness';
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqs?: Array<{ question: string; answer: string }>;
  productInfo?: {
    name: string;
    description: string;
    brand: string;
    category: string;
    offers?: {
      price?: string;
      priceCurrency?: string;
      availability?: string;
    };
  };
}

const DOMAIN = "https://poskomisyon.com";

/**
 * Generate Organization Schema
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "POS Komisyon",
    "url": DOMAIN,
    "logo": `${DOMAIN}/lovable-uploads/022dd1e4-49bd-409f-9b2a-2da2b294b413.png`,
    "description": "Türkiye'nin en kapsamlı POS komisyon karşılaştırma platformu. En uygun POS çözümlerini bulun.",
    "sameAs": [
      "https://www.facebook.com/poskomisyon",
      "https://www.twitter.com/poskomisyon",
      "https://www.linkedin.com/company/poskomisyon"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "Turkish"
    }
  };
}

/**
 * Generate WebSite Schema with search action
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "POS Komisyon",
    "url": DOMAIN,
    "description": "POS komisyon oranları karşılaştırma ve hesaplama platformu",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${DOMAIN}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

/**
 * Generate FAQ Schema
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

/**
 * Generate Product Schema for POS services
 */
export function generateProductSchema(productInfo: SEOConfig['productInfo']) {
  if (!productInfo) return null;

  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": productInfo.name,
    "description": productInfo.description,
    "brand": {
      "@type": "Brand",
      "name": productInfo.brand
    },
    "category": productInfo.category,
    "image": `${DOMAIN}/lovable-uploads/022dd1e4-49bd-409f-9b2a-2da2b294b413.png`
  };

  if (productInfo.offers) {
    schema.offers = {
      "@type": "Offer",
      ...productInfo.offers,
      "url": DOMAIN
    };
  }

  return schema;
}

/**
 * Generate BreadcrumbList Schema
 */
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": breadcrumb.url.startsWith('http') ? breadcrumb.url : `${DOMAIN}${breadcrumb.url}`
    }))
  };
}

/**
 * Generate comprehensive schema markup based on config
 */
export function generateSchemaMarkup(config: SEOConfig) {
  const schemas: any[] = [];

  // Always include Organization and WebSite schemas on every page
  schemas.push(generateOrganizationSchema());
  schemas.push(generateWebSiteSchema());

  // Add specific schemas based on config
  if (config.faqs && config.faqs.length > 0) {
    schemas.push(generateFAQSchema(config.faqs));
  }

  if (config.productInfo) {
    const productSchema = generateProductSchema(config.productInfo);
    if (productSchema) schemas.push(productSchema);
  }

  if (config.breadcrumbs && config.breadcrumbs.length > 0) {
    schemas.push(generateBreadcrumbSchema(config.breadcrumbs));
  }

  return schemas;
}

/**
 * Generate default SEO meta tags
 */
export function generateDefaultSEO(path: string): SEOConfig {
  const currentYear = new Date().getFullYear();
  
  const defaultConfigs: Record<string, SEOConfig> = {
    '/': {
      title: `POS Komisyon Karşılaştırma ${currentYear} - En Uygun POS Çözümleri`,
      description: `${currentYear} güncel POS komisyon oranları karşılaştırması. Sanal POS, fiziki POS, cep POS ve daha fazlası için en uygun çözümleri bulun.`,
      keywords: `pos komisyon oranları ${currentYear}, pos karşılaştırma, sanal pos, fiziki pos, cep pos, pos hesaplama`,
      canonicalPath: '/',
      ogType: 'website'
    },
    '/pos-types/sanal': {
      title: `Sanal POS Komisyon Oranları ${currentYear} - En Uygun Sanal POS`,
      description: `${currentYear} güncel sanal POS komisyon oranları ve karşılaştırma. E-ticaret siteniz için en uygun sanal POS çözümünü bulun.`,
      keywords: `sanal pos komisyon oranları ${currentYear}, sanal pos karşılaştırma, e-ticaret pos, online ödeme sistemleri`,
      canonicalPath: '/pos-types/sanal'
    },
    '/pos-types/banka': {
      title: `Banka POS Komisyon Oranları ${currentYear} - Banka POS Çözümleri`,
      description: `${currentYear} güncel banka POS komisyon oranları karşılaştırması. İşletmeniz için en uygun banka POS çözümünü bulun.`,
      keywords: `banka pos komisyon oranları ${currentYear}, banka pos karşılaştırma, fiziki pos cihazları`,
      canonicalPath: '/pos-types/banka'
    }
  };

  return defaultConfigs[path] || {
    title: `POS Komisyon ${currentYear}`,
    description: `POS komisyon oranları ve karşılaştırma - ${currentYear} güncel bilgiler`,
    canonicalPath: path
  };
}

/**
 * Get critical CSS for above-the-fold content
 */
export function getCriticalCSS(): string {
  return `
    /* Critical CSS for above-the-fold content */
    .hero-section { display: block; }
    .navigation { display: flex; }
    .pos-card { display: flex; flex-direction: column; }
    .loading-skeleton { animation: pulse 1.5s ease-in-out infinite; }
    
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
  `;
}