/**
 * Dynamic sitemap generation utilities with Turkish timezone support
 */

interface SitemapUrl {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

/**
 * Get current Turkish time in ISO format with timezone
 */
function getTurkishDateTime(): string {
  const now = new Date();
  const turkishTime = new Date(now.getTime() + (3 * 60 * 60 * 1000)); // UTC+3
  return turkishTime.toISOString().replace('Z', '+03:00');
}

/**
 * Generate all sitemap URLs for the application
 */
export function generateSitemapUrls(): SitemapUrl[] {
  const domain = 'https://poskomisyon.com';
  const currentDateTime = getTurkishDateTime();
  
  const urls: SitemapUrl[] = [
    // Home page
    {
      url: `${domain}/`,
      lastmod: currentDateTime,
      changefreq: 'daily',
      priority: 1.0
    },
    
    // Main POS Type pages
    {
      url: `${domain}/pos-types/sanal`,
      lastmod: currentDateTime,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${domain}/pos-types/banka`,
      lastmod: currentDateTime,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${domain}/pos-types/cep`,
      lastmod: currentDateTime,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${domain}/pos-types/mobil`,
      lastmod: currentDateTime,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${domain}/pos-types/yazarkasa`,
      lastmod: currentDateTime,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      url: `${domain}/pos-types/borsa`,
      lastmod: currentDateTime,
      changefreq: 'weekly',
      priority: 0.8
    },
    
    // Calculator pages
    {
      url: `${domain}/calculator`,
      lastmod: currentDateTime,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      url: `${domain}/amazon-komisyon`,
      lastmod: currentDateTime,
      changefreq: 'weekly',
      priority: 0.7
    },
    {
      url: `${domain}/trendyol-komisyon`,
      lastmod: currentDateTime,
      changefreq: 'weekly',
      priority: 0.7
    },
    {
      url: `${domain}/hepsiburada-komisyon`,
      lastmod: currentDateTime,
      changefreq: 'weekly',
      priority: 0.7
    },
    {
      url: `${domain}/n11-komisyon`,
      lastmod: currentDateTime,
      changefreq: 'weekly',
      priority: 0.7
    },
    {
      url: `${domain}/dolap-komisyon`,
      lastmod: currentDateTime,
      changefreq: 'weekly',
      priority: 0.7
    },
    {
      url: `${domain}/param-guvende-komisyon`,
      lastmod: currentDateTime,
      changefreq: 'weekly',
      priority: 0.7
    },
    {
      url: `${domain}/bilesik-faiz-hesaplama`,
      lastmod: currentDateTime,
      changefreq: 'weekly',
      priority: 0.6
    },
    {
      url: `${domain}/emlakci-komisyon`,
      lastmod: currentDateTime,
      changefreq: 'weekly',
      priority: 0.6
    },
    {
      url: `${domain}/desi-hesaplama`,
      lastmod: currentDateTime,
      changefreq: 'weekly',
      priority: 0.6
    },
    {
      url: `${domain}/kira-artis-orani-hesaplama`,
      lastmod: currentDateTime,
      changefreq: 'weekly',
      priority: 0.6
    },
    
    // Crypto page
    {
      url: `${domain}/kripto-borsalari`,
      lastmod: currentDateTime,
      changefreq: 'weekly',
      priority: 0.6
    },
    
    // Static pages
    {
      url: `${domain}/about`,
      lastmod: currentDateTime,
      changefreq: 'monthly',
      priority: 0.5
    },
    {
      url: `${domain}/contact`,
      lastmod: currentDateTime,
      changefreq: 'monthly',
      priority: 0.5
    },
    {
      url: `${domain}/blog`,
      lastmod: currentDateTime,
      changefreq: 'weekly',
      priority: 0.7
    },
    
    // Legal pages
    {
      url: `${domain}/gizlilik-politikasi`,
      lastmod: currentDateTime,
      changefreq: 'yearly',
      priority: 0.3
    },
    {
      url: `${domain}/cerez-politikasi`,
      lastmod: currentDateTime,
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
      lastmod: currentDateTime,
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
      lastmod: currentDateTime,
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