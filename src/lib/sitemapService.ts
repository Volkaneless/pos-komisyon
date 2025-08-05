import { supabase } from '@/integrations/supabase/client';

interface SitemapUrl {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

/**
 * Update a specific URL's lastmod timestamp in the sitemap
 */
export async function updateSitemapUrl(url: string, options?: Partial<SitemapUrl>) {
  try {
    const fullUrl = url.startsWith('http') ? url : `https://poskomisyon.com${url}`;
    
    const { error } = await (supabase as any)
      .from('sitemap_urls')
      .upsert({
        url: fullUrl,
        lastmod: new Date().toISOString(),
        changefreq: options?.changefreq || 'weekly',
        priority: options?.priority || 0.5,
        ...options
      });

    if (error) {
      console.error('Error updating sitemap URL:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error in updateSitemapUrl:', error);
    return false;
  }
}

/**
 * Fetch current sitemap data from Supabase
 */
export async function getSitemapUrls(): Promise<SitemapUrl[]> {
  try {
    const { data, error } = await (supabase as any)
      .from('sitemap_urls')
      .select('url, lastmod, changefreq, priority')
      .order('priority', { ascending: false });

    if (error) {
      console.error('Error fetching sitemap URLs:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error in getSitemapUrls:', error);
    return [];
  }
}

/**
 * Generate sitemap XML from database data
 */
export async function generateSitemapXML(): Promise<string> {
  try {
    const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/generate-sitemap`, {
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to generate sitemap: ${response.statusText}`);
    }

    return await response.text();
  } catch (error) {
    console.error('Error generating sitemap XML:', error);
    
    // Fallback: generate XML from current data
    const urls = await getSitemapUrls();
    const urlElements = urls.map(url => `  <url>
    <loc>${url.url}</loc>
    <lastmod>${url.lastmod ? new Date(url.lastmod).toISOString() : new Date().toISOString()}</lastmod>
    <changefreq>${url.changefreq || 'weekly'}</changefreq>
    <priority>${url.priority || 0.5}</priority>
  </url>`).join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`;
  }
}

/**
 * Manually trigger sitemap regeneration
 */
export async function refreshSitemap(): Promise<boolean> {
  try {
    const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/generate-sitemap`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
      }
    });

    return response.ok;
  } catch (error) {
    console.error('Error refreshing sitemap:', error);
    return false;
  }
}