/**
 * Legacy sitemap generation utilities
 * NOTE: This file is deprecated in favor of the new dynamic sitemap system in sitemapService.ts
 */

interface SitemapUrl {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

/**
 * @deprecated Use generateSitemapXML from sitemapService.ts instead
 */

/**
 * Generate all sitemap URLs for the application
 */
export function generateSitemapUrls(): SitemapUrl[] {
  const domain = 'https://poskomisyon.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const urls: SitemapUrl[] = [
    // Home page
    {
      url: `${domain}/`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 1.0
    },
    
    // Main POS Type pages
    {
      url: `${domain}/pos-types/sanal`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${domain}/pos-types/banka`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${domain}/pos-types/cep`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${domain}/pos-types/mobil`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${domain}/pos-types/yazarkasa`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      url: `${domain}/pos-types/borsa-araci-kurum`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    
    // Calculator pages
    {
      url: `${domain}/calculator`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      url: `${domain}/amazon-calculator`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.7
    },
    {
      url: `${domain}/trendyol-calculator`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.7
    },
    {
      url: `${domain}/hepsiburada-calculator`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.7
    },
    {
      url: `${domain}/n11-calculator`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.7
    },
    {
      url: `${domain}/dolap-calculator`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.7
    },
    {
      url: `${domain}/param-guvende-calculator`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.7
    },
    
    // Crypto page
    {
      url: `${domain}/crypto-exchanges`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.6
    },
    
    // Static pages
    {
      url: `${domain}/about`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.5
    },
    {
      url: `${domain}/contact`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.5
    },
    {
      url: `${domain}/blog`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.7
    },
    
    // Legal pages
    {
      url: `${domain}/gizlilik-politikasi`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    },
    {
      url: `${domain}/cerez-politikasi`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    }
  ];

  // Add individual POS provider pages
  const posProviders = [
    'garanti-pos', 'garanti-sanal-pos', 'isbank-pos', 'akbank-fiziki-pos', 'akbank-sanal-pos', 'akbank-cebe-pos', 'akbank-yazarkasa',
    'iyzico-sanal', 'paytr-sanal', 'param-sanal', 'brisa-sanal', 'paycell-mobil', 'enpara-mobil',
    'odeal-pos', 'tosla-sanal', 'moka-sanal', 'sipay-sanal', 'paygo-pos', 'qnb-pay-pos',
    'vakifbank-sanal', 'denizbank-sanal', 'teb-pos', 'ziraat-pos', 'kuveyt-turk-pos',
    'halkbank-pos', 'continental-pos', 'ingenico-pos', 'hugin-pos', 'move-5000f-pos',
    'inpos-m530', 'beko-pos', 'beko-300-tr-pos', 'logo-isbasi-pos', 'logo-isbasi-cep',
    'cepte-iste-pos', 'enpara-pos', 'paycell-sanal', 'vallet-mobil', 'vallet-sanal',
    'simpra-sanal', 'elektra-web-sanal', 'jameson-sanal', 'tosla-isim-pos', 'tosla-isim-sanal',
    'virtual-pos', 'param-pos-sanal', 'shopify-sanal', 'esnek-pos-sanal', 'esnek-sanal',
    'esnek-pos-android', 'esnek-pos-cep', 'esnek-pos-pazaryeri'
  ];

  posProviders.forEach(provider => {
    urls.push({
      url: `${domain}/pos/${provider}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.6
    });
  });

  // Add blog post URLs
  const blogPosts = [
    'pos-cihazi-nedir-nasil-kullanilir',
    'pos-cihazi-nasil-alinir', 
    'pos-cihazi-secerken-dikkat-edilmesi-gerekenler',
    'pos-komisyon-oranlari-2025',
    'sanal-pos-fiziki-pos-karsilastirma'
  ];

  blogPosts.forEach(post => {
    urls.push({
      url: `${domain}/blog/${post}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6
    });
  });

  return urls;
}

/**
 * Generate XML sitemap content
 */
export function generateSitemapXML(): string {
  const urls = generateSitemapUrls();
  
  const urlElements = urls.map(url => `
  <url>
    <loc>${url.url}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
    ${url.priority ? `<priority>${url.priority}</priority>` : ''}
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`;
}

/**
 * Generate robots.txt content
 */
export function generateRobotsTxt(): string {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: https://poskomisyon.com/sitemap.xml

# Crawl-delay for polite crawling
Crawl-delay: 1

# Block admin and private areas
Disallow: /admin/
Disallow: /dashboard/
Disallow: /_redirects
Disallow: /ads.txt

# Allow important SEO files
Allow: /sitemap.xml
Allow: /robots.txt`;
}