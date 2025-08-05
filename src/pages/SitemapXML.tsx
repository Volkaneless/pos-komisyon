import { useEffect, useState } from 'react';
import { generateSitemapXML } from '@/lib/sitemapService';

const SitemapXML = () => {
  const [sitemapContent, setSitemapContent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSitemap = async () => {
      try {
        const xmlContent = await generateSitemapXML();
        setSitemapContent(xmlContent);
      } catch (error) {
        console.error('Error fetching sitemap:', error);
        setSitemapContent(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://poskomisyon.com/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`);
      } finally {
        setLoading(false);
      }
    };

    fetchSitemap();
  }, []);

  if (loading) {
    return <div>Loading sitemap...</div>;
  }

  // Set proper content type for XML
  useEffect(() => {
    const originalContentType = document.querySelector('meta[http-equiv="Content-Type"]');
    const xmlContentType = document.createElement('meta');
    xmlContentType.setAttribute('http-equiv', 'Content-Type');
    xmlContentType.setAttribute('content', 'application/xml; charset=utf-8');
    document.head.appendChild(xmlContentType);

    return () => {
      if (originalContentType) {
        document.head.appendChild(originalContentType);
      }
      document.head.removeChild(xmlContentType);
    };
  }, []);

  return (
    <pre
      style={{
        fontFamily: 'monospace',
        whiteSpace: 'pre-wrap',
        margin: 0,
        padding: 0,
        backgroundColor: 'white',
        color: 'black'
      }}
      dangerouslySetInnerHTML={{ __html: sitemapContent }}
    />
  );
};

export default SitemapXML;