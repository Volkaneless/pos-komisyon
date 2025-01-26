import { Helmet } from "react-helmet";
import { Calendar, User } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import type { BlogPostData } from "@/utils/markdown";

interface BlogPostDetailProps {
  post: BlogPostData;
}

export const BlogPostDetail = ({ post }: BlogPostDetailProps) => {
  return (
    <>
      <Helmet>
        <title>{post.title} | POS Komisyon</title>
        <meta 
          name="description" 
          content={post.excerpt}
        />
        <link rel="canonical" href={`https://poskomisyon.com/blog/${post.slug}`} />
      </Helmet>

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

        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time>{new Date(post.date).toLocaleDateString('tr-TR')}</time>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>POS Komisyon</span>
              </div>
            </div>
          </header>

          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />
          )}

          <div className="prose prose-lg max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>
      </div>
    </>
  );
};