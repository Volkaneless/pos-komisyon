import { useState } from "react";
import { BookOpen } from "lucide-react";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/types/blog";

type Category = "all" | "adsense" | "social-media" | "ppc";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const { data: posts, isLoading } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('date', { ascending: false });
      
      if (error) throw error;
      return data as BlogPost[];
    }
  });

  const filteredPosts = posts?.filter(post => 
    activeCategory === "all" ? true : post.category === activeCategory
  );

  return (
    <>
      <Helmet>
        <title>POS Sistemleri Blog | Güncel POS ve Ödeme Sistemleri Haberleri</title>
        <meta 
          name="description" 
          content="POS sistemleri, komisyon oranları ve ödeme teknolojileri hakkında güncel bilgiler, haberler ve detaylı incelemeler." 
        />
        <meta name="keywords" content="pos blog, pos haberleri, pos sistemleri, pos teknolojileri, pos komisyon oranları" />
        <link rel="canonical" href="https://poskomisyon.com/blog" />
      </Helmet>

      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">POS Sistemleri Blog</h1>
          <p className="text-xl text-gray-600">
            POS ve ödeme sistemleri hakkında güncel bilgiler ve öneriler
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button
            variant={activeCategory === "all" ? "default" : "outline"}
            onClick={() => setActiveCategory("all")}
          >
            Tüm Yazılar
          </Button>
          <Button
            variant={activeCategory === "adsense" ? "default" : "outline"}
            onClick={() => setActiveCategory("adsense")}
          >
            POS Cihazları
          </Button>
          <Button
            variant={activeCategory === "social-media" ? "default" : "outline"}
            onClick={() => setActiveCategory("social-media")}
          >
            Sanal POS
          </Button>
          <Button
            variant={activeCategory === "ppc" ? "default" : "outline"}
            onClick={() => setActiveCategory("ppc")}
          >
            Mobil POS
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            <p className="text-center col-span-full">Yükleniyor...</p>
          ) : filteredPosts?.map((post) => (
            <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:translate-y-[-4px]">
              <img 
                src={post.image || "/placeholder.svg"} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-primary font-medium">
                    {post.category === "adsense" ? "POS Cihazları" :
                     post.category === "social-media" ? "Sanal POS" :
                     post.category === "ppc" ? "Mobil POS" : "Genel"}
                  </span>
                  <span className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString('tr-TR')}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Button variant="link" className="p-0 h-auto font-medium">
                  Devamını Oku
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;