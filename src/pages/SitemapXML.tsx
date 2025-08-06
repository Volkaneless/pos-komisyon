import { useEffect, useState } from 'react';
import { generateSitemapXML } from '../lib/sitemap';

/**
 * Dynamic sitemap.xml endpoint component
 * Serves XML content with proper headers and current Turkish timezone timestamps
 */
const SitemapXML = () => {
  const [sitemapContent, setSitemapContent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Generate fresh sitemap content
    try {
      const xmlContent = generateSitemapXML();
      setSitemapContent(xmlContent);
    } catch (error) {
      console.error('Error generating sitemap:', error);
      setSitemapContent('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>');
    } finally {
      setLoading(false);
    }
  }, []);

  // Set response headers for XML content
  useEffect(() => {
    if (!loading && sitemapContent) {
      // Try to set headers if possible
      try {
        const response = new Response(sitemapContent, {
          headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=1800', // 30 minutes cache
          },
        });
      } catch (error) {
        // Fallback for client-side rendering
        console.log('Serving sitemap content');
      }
    }
  }, [loading, sitemapContent]);

  if (loading) {
    return <div>Loading sitemap...</div>;
  }

  // Return raw XML content
  return (
    <div
      style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}
      dangerouslySetInnerHTML={{ __html: sitemapContent }}
    />
  );
};

export default SitemapXML;