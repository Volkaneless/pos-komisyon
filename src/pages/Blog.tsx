import { BookOpen } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import type { BlogPost } from "@/types/blog";

const Blog = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("date", { ascending: false });
      
      if (error) throw error;
      return data as BlogPost[];
    },
  });

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <BookOpen className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold">Blog</h1>
        </div>
        <p className="text-xl text-gray-600">
          POS sistemleri hakkında güncel bilgiler ve öneriler
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts?.map((post) => (
          <article key={post.id} className="glass-card p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString("tr-TR")}
              </span>
              <Link 
                to={`/blog/${post.id}`}
                className="text-primary hover:text-primary-hover font-medium"
              >
                Devamını Oku
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;