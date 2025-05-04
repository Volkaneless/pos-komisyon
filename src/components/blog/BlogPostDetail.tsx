
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin, Copy, ChevronRight } from "lucide-react";
import type { BlogPostData } from "@/utils/markdown";
import MetaTags from "@/components/MetaTags";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { blogPosts } from "@/data/blogPosts";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";

const categoryColors: Record<string, string> = {
  "adsense": "bg-blue-100 text-blue-800",
  "social-media": "bg-green-100 text-green-800",
  "ppc": "bg-purple-100 text-purple-800",
  "general": "bg-gray-100 text-gray-800",
};

const categoryNames: Record<string, string> = {
  "adsense": "Ödeme Sistemleri",
  "social-media": "Sosyal Medya",
  "ppc": "PPC",
  "general": "Genel",
};

const readingTime = (content: string): number => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

interface BlogPostDetailProps {
  post: BlogPostData;
}

export const BlogPostDetail = ({ post }: BlogPostDetailProps) => {
  const readTime = readingTime(post.content);
  
  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Bağlantı panoya kopyalandı!");
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`, '_blank');
  };

  const shareOnLinkedin = () => {
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`, '_blank');
  };

  return (
    <>
      <MetaTags
        title={`${post.title} | POS Komisyon`}
        description={post.excerpt}
        canonicalPath={`/blog/${post.slug}`}
        ogImage={post.image}
        ogType="article"
        priority={30}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "image": post.image,
          "datePublished": post.date,
          "author": {
            "@type": "Organization",
            "name": "POS Komisyon"
          },
          "publisher": {
            "@type": "Organization",
            "name": "POS Komisyon",
            "logo": {
              "@type": "ImageObject",
              "url": "https://poskomisyon.com/logo.svg"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://poskomisyon.com/blog/${post.slug}`
          }
        }}
      />

      <div className="container mx-auto px-4 pt-24 pb-16">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Ana Sayfa</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/blog/${post.slug}`}>
                {post.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <article className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
          {post.image && (
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className={`${categoryColors[post.category] || "bg-gray-100 text-gray-800"}`}>
                  {categoryNames[post.category] || "Genel"}
                </Badge>
              </div>
            </div>
          )}
          
          <div className="p-8">
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time>{new Date(post.date).toLocaleDateString('tr-TR')}</time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{readTime} dk okuma</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>POS Komisyon</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 border-t border-gray-100 pt-4 mt-4">
                <span className="text-sm font-medium text-gray-600">Paylaş:</span>
                <div className="flex gap-2">
                  <Button size="icon" variant="ghost" onClick={shareOnFacebook}>
                    <Facebook className="w-4 h-4" />
                    <span className="sr-only">Facebook'ta Paylaş</span>
                  </Button>
                  <Button size="icon" variant="ghost" onClick={shareOnTwitter}>
                    <Twitter className="w-4 h-4" />
                    <span className="sr-only">Twitter'da Paylaş</span>
                  </Button>
                  <Button size="icon" variant="ghost" onClick={shareOnLinkedin}>
                    <Linkedin className="w-4 h-4" />
                    <span className="sr-only">LinkedIn'de Paylaş</span>
                  </Button>
                  <Button size="icon" variant="ghost" onClick={handleCopyLink}>
                    <Copy className="w-4 h-4" />
                    <span className="sr-only">Bağlantıyı Kopyala</span>
                  </Button>
                </div>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/lovable-uploads/bf5f206f-f598-4d99-8ac7-dbc75e52d8dc.png" alt="POS Komisyon" />
                  <AvatarFallback>PK</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">POS Komisyon</p>
                  <p className="text-sm text-gray-500">POS komisyonları ve bankacılık çözümleri hakkında en güncel bilgiler</p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-6">İlgili Yazılar</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.slug} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-44 overflow-hidden">
                    <img 
                      src={relatedPost.image || 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d'} 
                      alt={relatedPost.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <Badge className={`mb-2 ${categoryColors[relatedPost.category] || "bg-gray-100 text-gray-800"}`}>
                      {categoryNames[relatedPost.category] || "Genel"}
                    </Badge>
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                      <Link to={`/blog/${relatedPost.slug}`} className="hover:text-primary transition-colors">
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{relatedPost.excerpt}</p>
                    <Link 
                      to={`/blog/${relatedPost.slug}`} 
                      className="inline-flex items-center text-primary font-medium text-sm hover:underline"
                    >
                      Devamını Oku <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
