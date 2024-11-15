import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Calendar, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import type { BlogPost } from "@/types/blog";

const BlogDetail = () => {
  const { id } = useParams();

  const { data: post, isLoading } = useQuery({
    queryKey: ["blog-post", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("id", id)
        .single();
      
      if (error) throw error;
      return data as BlogPost;
    },
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 pt-24 flex justify-center">
        <Loader2 className="w-6 h-6 animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 pt-24">
        <h1>Yazı bulunamadı</h1>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - POS Compare Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={`${post.title} - POS Compare Blog`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
      </Helmet>

      <article className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary-hover mb-8">
            <ArrowLeft className="w-4 h-4" />
            Blog'a Dön
          </Link>

          <header className="mb-12">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-2 text-gray-500">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("tr-TR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">{post.excerpt}</p>
            <div 
              dangerouslySetInnerHTML={{ __html: post.content }} 
              className="space-y-6"
            />
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogDetail;