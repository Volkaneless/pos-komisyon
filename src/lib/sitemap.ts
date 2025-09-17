/**
 * Dynamic sitemap generation utilities with Turkish timezone support
 */

import { posProviders as allProviders } from '@/data/posProviders';

import { routes as appRoutes } from '@/routes';

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
    'akbank-fiziki-pos', 'akbank-sanal-pos', 'akbank-yazarkasa', 'akbank-cebe-pos',
    'beko-pos', 'beko-300-tr-pos', 'brisa-sanal-pos', 'cepteb-iste-pos', 'denizbank-sanal-pos',
    'elektraweb-sanal-pos', 'enpara-mobil-pos', 'enpara-pos', 'esnek-pos-android', 
    'esnek-pos-cep', 'esnek-pos-pazaryeri', 'esnek-pos-sanal', 'esnek-sanal-pos',
    'garanti-pos', 'garanti-sanal-pos', 'halkbank-pos', 'hugin-pos', 'ingenico-pos',
    'isbank-aninda-pos', 'isbank-sanal-pos', 'iyzico-sanal-pos', 'jameson-sanal-pos',
    'kuveyt-turk-pos', 'logo-isbasi-cep-pos', 'logo-isbasi-pos', 'moka-sanal-pos',
    'move-5000f-pos', 'odeal-pos', 'param-sanal-pos', 'paygo-pos', 'paytr-neo-pos',
    'paytr-sanal-pos', 'paycell-mobil-pos', 'paycell-sanal-pos', 'qnb-pay-pos',
    'qnb-pay-sanal-pos', 'shopify-sanal-pos', 'simpra-sanal-pos', 'sipay-sanal-pos',
    'teb-pos', 'tosla-isim-pos', 'tosla-isim-sanal-pos', 'tosla-sanal-pos',
    'vakifbank-sanal-pos', 'vallet-mobil-pos', 'vallet-sanal-pos', 'ziraat-pos',
    'virtual-sanal', 'continental-sanal', 'inpos-m530-sanal', 'parampos-sanal'
  ];

  // Add broker detail pages
  const brokerProviders = [
    'midas', 'matriks', 'is-yatirim', 'qnb-finansinvest', 'deniz-yatirim',
    'ak-yatirim', 'seker-yatirim', 'garanti-bbva-yatirim', 'ziraat-yatirim',
    'vakif-yatirim', 'halk-yatirim', 'yapi-kredi-yatirim', 'meksa-yatirim',
    'anadolu-yatirim', 'burgan-yatirim', 'integral-yatirim', 'global-yatirim',
    'piapiri', 'forinvest', 'slayz'
  ];

  // Add desi calculation pages
  const desiPages = [
    'aras-kargo-desi-hesaplama', 'ptt-kargo-desi-hesaplama', 'surat-kargo-desi-hesaplama',
    'yurtici-kargo-desi-hesaplama', 'mng-kargo-desi-hesaplama', 'trendyol-desi-hesaplama'
  ];

  posProviders.forEach(provider => {
    urls.push({
      url: `${domain}/pos/${provider}`,
      lastmod: currentDateTime,
      changefreq: 'weekly',
      priority: 0.6
    });
  });

  // Add broker detail pages
  brokerProviders.forEach(broker => {
    urls.push({
      url: `${domain}/pos/${broker}`,
      lastmod: currentDateTime,
      changefreq: 'weekly',
      priority: 0.6
    });
  });

  // Add desi calculation pages
  desiPages.forEach(desiPage => {
    urls.push({
      url: `${domain}/desi-hesaplama/${desiPage}`,
      lastmod: currentDateTime,
      changefreq: 'weekly',
      priority: 0.6
    });
  });

  // Add missing pages
  const additionalPages = [
    { path: '/shopier-komisyon', priority: 0.7 }
  ];

  additionalPages.forEach(page => {
    urls.push({
      url: `${domain}${page.path}`,
      lastmod: currentDateTime,
      changefreq: 'weekly',
      priority: page.priority
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